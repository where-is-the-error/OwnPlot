import PlotCard from "./PlotCard";

// src/app/components/MoodWidget.tsx
export default function MoodWidget() {
  return (
    <PlotCard title="Real-time Mood">
      <div className="flex flex-col items-center justify-center gap-4">
        {/* LP판 크기를 적절하게 조절 */}
        <div className="w-32 h-32 rounded-full bg-own-text border-[8px] border-white shadow-xl flex items-center justify-center animate-spin-slow">
          <div className="w-10 h-10 rounded-full bg-[#E53935] border-2 border-white" />
        </div>
        <div className="text-center">
          <h4 className="text-lg font-bold text-own-text">Lo-Fi Garden Beats</h4>
          <p className="text-xs text-own-text/40 uppercase tracking-widest mt-1">Relaxed</p>
        </div>
      </div>
    </PlotCard>
  );
}