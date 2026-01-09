
"use client";

// src/app/page.tsx
import Header from "../components/Header";
import VideoWidget from "../components/VideoWidget";
import CanvasWidget from "../components/CanvasWidget";
import PostItWidget from "../components/PostItWidget";
import MoodWidget from "../components/MoodWidget";
import BottomNav from "../components/BottomNav"; // 1. 하단바 임포트

// src/app/page.tsx
export default function MainPage() {
  return (
    <div className="bg-own-bg min-h-screen relative pb-40 flex flex-col items-center">
      <Header />

      {/* 가로 12칸 그리드로 비율 고정 */}
      <main className="w-full max-w-[1400px] px-10 grid grid-cols-12 gap-8 items-start">
        
        {/* 왼쪽: Mini Theater (3칸) */}
        <div className="col-span-3 h-[600px]">
          <VideoWidget />
        </div>

        {/* 중앙: My Studio (6칸 - 핵심!) */}
        <div className="col-span-6 h-[600px]">
          <CanvasWidget />
        </div>

        {/* 오른쪽: Guest Book & Mood (3칸) */}
        <div className="col-span-3 flex flex-col gap-6 h-[600px]">
          <div className="h-1/2">
            <PostItWidget />
          </div>
          <div className="h-1/2">
            <MoodWidget />
          </div>
        </div>
      </main>

      <BottomNav />
    </div>
  );
}