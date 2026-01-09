import PlotCard from "./PlotCard";

export default function PostItWidget() {
  return (
    <PlotCard title="Guest Book" className="h-full">
      <div className="flex flex-wrap gap-4 h-full items-center p-2">
        
        {/* 포스트잇 1 */}
        <div className="bg-[#FFF9C4] p-4 w-48 h-40 shadow-sm rotate-[-2deg] hover:rotate-0 transition-transform cursor-pointer rounded-bl-xl border-t border-black/5">
          <div className="w-2 h-2 rounded-full bg-red-300 mx-auto mb-2 opacity-50" />
          <p className="text-sm text-main font-handwriting leading-relaxed">
            "지나가다 들렀어요! 분위기가 너무 포근하네요 🏡"
          </p>
          <span className="text-xs text-muted mt-3 block text-right">- neighbor_1</span>
        </div>

        {/* 포스트잇 2 */}
        <div className="bg-[#E1F5FE] p-4 w-48 h-40 shadow-sm rotate-[3deg] hover:rotate-0 transition-transform cursor-pointer rounded-br-xl border-t border-black/5">
          <div className="w-8 h-3 bg-blue-200/30 mx-auto mb-2 -rotate-3" />
          <p className="text-sm text-main font-handwriting leading-relaxed">
            "오늘의 추천 음악 잘 듣고 갑니다 🎵"
          </p>
          <span className="text-xs text-muted mt-3 block text-right">- music_lover</span>
        </div>
        
        {/* 빈 포스트잇 (작성 유도) */}
        <div className="border-2 border-dashed border-line p-4 w-40 h-40 rounded-xl flex flex-col items-center justify-center text-muted hover:bg-white transition-colors cursor-pointer group">
          <span className="text-3xl group-hover:scale-110 transition-transform">✍️</span>
          <span className="text-xs mt-2 font-bold">방명록 남기기</span>
        </div>

      </div>
    </PlotCard>
  );
}