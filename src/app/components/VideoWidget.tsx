import PlotCard from "./PlotCard";

export default function VideoWidget() {
  return (
    <PlotCard title="Mini Theater" className="h-full bg-main text-white">
      <div className="w-full h-full flex flex-col items-center justify-center opacity-80 hover:opacity-100 transition-opacity cursor-pointer">
        <div className="w-16 h-12 border-2 border-white/30 rounded-lg flex items-center justify-center relative mb-3">
            <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-white border-b-[6px] border-b-transparent ml-1" />
            <div className="absolute -top-3 -left-3 w-2 h-2 rounded-full bg-red-500 animate-pulse" />
        </div>
        <p className="text-xs font-medium text-white/50 tracking-widest uppercase">Watch Short</p>
      </div>
    </PlotCard>
  );
}