'use client';

import { useState } from 'react';
import { supabase } from '../lib/supabase';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

export default function LoginPage() {
  const router = useRouter();
  const [isSignUp, setIsSignUp] = useState(false); // 로그인 모드 vs 회원가입 모드
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  // 로그인/회원가입 처리 함수
  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      if (isSignUp) {
        // 회원가입 시도
        const { error } = await supabase.auth.signUp({
          email,
          password,
        });
        if (error) throw error;
        setMessage('회원가입 성공! 바로 로그인해주세요.');
        setIsSignUp(false); // 가입 성공하면 로그인 화면으로 전환
      } else {
        // 로그인 시도
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        if (error) throw error;
        router.push('/'); // 로그인 성공 시 메인 페이지로 이동
      }
    } catch (error: any) {
      setMessage(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-base p-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl"
      >
        {/* 헤더 섹션 */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-brown">OwnPlot</h1>
          <p className="mt-2 text-gray-500">
            {isSignUp ? '나만의 공간을 만들어보세요' : '다시 오신 것을 환영합니다'}
          </p>
        </div>

        {/* 폼 섹션 */}
        <form onSubmit={handleAuth} className="space-y-6">
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">이메일</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-olive focus:outline-none focus:ring-1 focus:ring-olive"
              placeholder="hello@example.com"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">비밀번호</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-olive focus:outline-none focus:ring-1 focus:ring-olive"
              placeholder="••••••••"
            />
          </div>

          {/* 에러/성공 메시지 */}
          {message && (
            <div className={`text-sm text-center ${message.includes('성공') ? 'text-olive' : 'text-red-500'}`}>
              {message}
            </div>
          )}

          {/* 메인 버튼 */}
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-olive py-3 font-bold text-white transition hover:bg-[#5d6e2e] disabled:opacity-50"
          >
            {loading ? '처리 중...' : (isSignUp ? '가입하기' : '로그인')}
          </button>
        </form>

        {/* 모드 전환 토글 */}
        <div className="mt-6 text-center text-sm">
          <span className="text-gray-500">
            {isSignUp ? '이미 계정이 있으신가요?' : '아직 계정이 없으신가요?'}
          </span>
          <button
            onClick={() => {
              setIsSignUp(!isSignUp);
              setMessage('');
            }}
            className="ml-2 font-semibold text-brown hover:underline"
          >
            {isSignUp ? '로그인하기' : '회원가입하기'}
          </button>
        </div>
      </motion.div>
    </div>
  );
}