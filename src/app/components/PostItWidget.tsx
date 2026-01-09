import PlotCard from "./PlotCard";

export default function PostItWidget() {
  return (
    <PlotCard title="Recent Post-its" className="flex-1">
      <div className="relative h-full min-h-[150px] space-y-4">
        {/* 포스트잇 느낌의 메시지들 */}
        <div className="p-4 bg-white/5 rounded-xl border border-white/5 rotate-[-1deg] hover:rotate-0 transition-transform">
          <p className="text-sm font-light leading-relaxed">"이 공간의 무드가 정말 좋네요. 자주 놀러 올게요! 🌿"</p>
          <span className="text-[10px] text-white/20 mt-2 block">@guest_01</span>
        </div>
        <div className="p-4 bg-plot-olive/10 rounded-xl border border-plot-olive/20 rotate-[2deg] hover:rotate-0 transition-transform ml-4">
          <p className="text-sm font-light leading-relaxed">"숏폼 영상 색감이 제 스타일이에요!"</p>
          <span className="text-[10px] text-plot-olive/40 mt-2 block">@ownplot_fan</span>
        </div>
      </div>
    </PlotCard>
  );
}