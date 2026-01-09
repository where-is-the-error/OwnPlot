"use client";

import Header from "./components/Header";
import VideoWidget from "./components/VideoWidget";
import CanvasWidget from "./components/CanvasWidget";
import PostItWidget from "./components/PostItWidget";
import MoodWidget from "./components/MoodWidget";

export default function MainPage() {
  return (
    <div className="min-h-screen p-8 md:p-16 max-w-[1600px] mx-auto">
      {/* 1. 상단 헤더 */}
      <Header />

      {/* 2. 벤토 그리드 레이아웃 */}
      <main className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-fr">
        {/* 왼쪽: 비디오 위젯 */}
        <VideoWidget />

        {/* 중앙: 메인 캔버스 (2칸 차지) */}
        <CanvasWidget />

        {/* 오른쪽: 소셜 정보 (포스트잇 & 무드) */}
        <div className="flex flex-col gap-6">
          <PostItWidget />
          <MoodWidget />
        </div>
      </main>

      <footer className="mt-20 text-center opacity-20">
        <p className="text-[10px] uppercase tracking-[0.5em]">© 2026 ownplot. all rights reserved.</p>
      </footer>
    </div>
  );
}