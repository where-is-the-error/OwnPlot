import PlotCard from "./PlotCard";

export default function PostItWidget() {
  return (
    <PlotCard title="Guest Book" className="h-full">
      <div className="flex flex-wrap gap-4 h-full items-center p-2">
        
        {/* 포스트잇 1 */}
        <div className="bg-[#FFF9C4] p-3 w-48 h-40 shadow-sm rotate-[-2deg] hover:rotate-0 transition-transform cursor-pointer rounded-bl-xl border-t border-black/5">
          <div className="w-2 h-2 rounded-full bg-black mx-auto mb-2 opacity-50" />
          <p className="text-sm text-main font-handwriting leading-relaxed">
            "포스트잇 1"
          </p>
          <span className="text-xs text-muted mt-3 block text-right">- 이웃 1</span>
        </div>

        {/* 포스트잇 2 */}
        <div className="bg-[#E1F5FE] p-4 w-48 h-40 shadow-sm rotate-[3deg] hover:rotate-0 transition-transform cursor-pointer rounded-br-xl border-t border-black/5">
          <div className="w-2 h-2 rounded-full bg-black mx-auto mb-2 -rotate-3" />
          <p className="text-sm text-main font-handwriting leading-relaxed">
            "포스트잇 2"
          </p>
          <span className="text-xs text-muted mt-3 block text-right">- 이웃 2</span>
        </div>
        
        

      </div>
    </PlotCard>
  );
}