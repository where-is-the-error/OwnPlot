import PlotCard from "./PlotCard";

export default function CanvasWidget() {
  return (
    <PlotCard title="My Studio" className="h-full bg-[#EAE8E4]">
      {/* 캔버스 배경 패턴 (격자) */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(#000_1px,transparent_1px),linear-gradient(90deg,#000_1px,transparent_1px)] bg-[size:20px_20px]" />
      
      <div className="relative w-full h-full flex flex-col items-center justify-center gap-6">
        {/* 중앙 배치된 오브젝트들 */}
        <div className="relative w-48 h-48 md:w-64 md:h-64">
           {/* 예시 도형들: 나중에 이미지로 교체 가능 */}
           <div className="absolute top-0 left-0 w-32 h-32 bg-olive rounded-full mix-blend-multiply opacity-80 animate-[float_6s_ease-in-out_infinite]" />
           <div className="absolute bottom-0 right-0 w-32 h-32 bg-brown rounded-full mix-blend-multiply opacity-80 animate-[float_8s_ease-in-out_infinite_reverse]" />
           <div className="absolute top-8 left-8 w-32 h-32 bg-[#D4A373] rounded-full mix-blend-multiply opacity-80 blur-xl" />
        </div>
        
        <p className="text-main/50 text-sm font-medium relative z-10">
          이곳을 클릭해서 나만의 공간을 꾸며보세요
        </p>
        
        <button className="relative z-10 px-6 py-3 bg-main text-white rounded-full font-bold hover:bg-accent transition-colors shadow-lg flex items-center gap-2">
          <span>🎨</span> 꾸미기 시작
        </button>
      </div>
    </PlotCard>
  );
}