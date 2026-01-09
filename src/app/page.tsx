"use client";
import { useState } from "react";

export default function LandingPage() {
  const [nickname, setNickname] = useState("");
  const [isAvailable, setIsAvailable] = useState<boolean | null>(null);

  const handleCheckNickname = (val: string) => {
    setNickname(val);
    if (val.length > 2) {
      setIsAvailable(val.length % 2 === 0);
    } else {
      setIsAvailable(null);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6 selection:bg-white selection:text-black">
      <header className="absolute top-10 left-10">
        <h1 className="text-2xl font-serif italic font-bold tracking-tighter">ownplot.</h1>
      </header>

      <main className="w-full max-w-2xl text-center space-y-12">
        <div className="space-y-4">
          <h2 className="text-5xl md:text-7xl font-serif leading-tight">
            Your space,<br /> <span className="italic">finely crafted.</span>
          </h2>
          <p className="text-stone-500 font-light text-lg">당신만의 정갈한 땅을 점유하고, 이야기를 심으세요.</p>
        </div>

        <div className="relative group">
          <div className="flex items-center justify-center text-2xl md:text-4xl font-light border-b border-stone-800 pb-4 group-focus-within:border-white transition-colors">
            <span className="opacity-30 mr-2">ownplot.so/</span>
            <input
              type="text"
              value={nickname}
              onChange={(e) => handleCheckNickname(e.target.value)}
              placeholder="nickname"
              className="bg-transparent outline-none w-48 md:w-64 placeholder:text-stone-800"
            />
          </div>
          <div className="h-8 mt-4">
            {nickname.length > 0 && isAvailable === true && <p className="text-sm text-green-500">✓ 이 땅은 비어있습니다.</p>}
            {nickname.length > 0 && isAvailable === false && <p className="text-sm text-red-500">✕ 이미 누군가 가꾸고 있는 땅입니다.</p>}
          </div>
        </div>

        <div className={`transition-all duration-700 ${nickname.length > 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <button className="bg-white text-black px-12 py-4 rounded-full font-semibold hover:bg-stone-200">
            Get My Plot
          </button>
        </div>
      </main>
    </div>
  );
}