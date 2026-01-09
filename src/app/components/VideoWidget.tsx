import PlotCard from "./PlotCard";

export default function VideoWidget() {
  return (
    <PlotCard title="Short-form Video" className="row-span-2">
      <div className="aspect-[9/16] w-full rounded-2xl bg-stone-900 flex items-center justify-center overflow-hidden">
        <div className="w-12 h-12 rounded-full border-2 border-white/20 flex items-center justify-center">
          <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[12px] border-l-white border-b-[8px] border-b-transparent ml-1" />
        </div>
      </div>
    </PlotCard>
  );
}