
"use client";

// src/app/page.tsx
import Header from "../components/Header";
import VideoWidget from "../components/VideoWidget";
import CanvasWidget from "../components/CanvasWidget";
import PostItWidget from "../components/PostItWidget";
import MoodWidget from "../components/MoodWidget";
import BottomNav from "../components/BottomNav"; // 1. 하단바 임포트

export default function MainPage() {
  return (
    // flex-col과 items-center를 통해 모든 자식 요소를 화면 중앙에 정렬합니다.
    <div className="bg-own-bg min-h-screen w-full relative pb-40 flex flex-col items-center">
      
      {/* 중앙 정렬된 헤더 */}
      <Header />

      {/* 3개의 동일 너비(grid-cols-3) 구역 레이아웃 */}
      <main className="w-full max-w-[1400px] px-6 md:px-10 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* 1구역: Mini Theater (세로로 길게) */}
        <div className="w-full h-[750px]">
          <VideoWidget />
        </div>

        {/* 2구역: My Studio (세로로 길게) */}
        <div className="w-full h-[750px]">
          <CanvasWidget />
        </div>

        {/* 3구역: Guest Book & On Air (두 위젯을 합쳐서 세로 길이를 맞춤) */}
        <div className="w-full h-[750px] flex flex-col gap-8">
          <div className="flex-1">
            <PostItWidget />
          </div>
          <div className="flex-1">
            <MoodWidget />
          </div>
        </div>

      </main>

      {/* 하단 네비게이션 바 (z-50으로 최상단 노출) */}
      <BottomNav />
      
    </div>
  );
}