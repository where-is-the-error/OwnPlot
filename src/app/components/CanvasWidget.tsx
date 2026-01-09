import PlotCard from "./PlotCard";

export default function CanvasWidget() {
  return (
    <PlotCard title="Main Canvas" className="col-span-2 row-span-2 flex flex-col items-center justify-center min-h-[400px]">
      <div className="relative w-full h-full grid grid-cols-2 gap-4">
        {/* 샘플 이미지/콘텐츠 */}
        <div className="rounded-xl bg-plot-light h-32 rotate-[-2deg]"></div>
        <div className="rounded-xl bg-plot-brown h-32 rotate-[3deg]"></div>
      </div>
      <button className="mt-8 bg-plot-olive text-white px-8 py-3 rounded-full font-bold opacity-0 group-hover:opacity-100 transition-opacity">
        Edit Canvas
      </button>
    </PlotCard>
  );
}