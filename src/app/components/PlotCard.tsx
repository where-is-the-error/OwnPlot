interface PlotCardProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
}

// src/app/components/PlotCard.tsx
export default function PlotCard({ title, children, className = "" }: PlotCardProps) {
  return (
    <div className={`
      bg-white 
      border-[3px] border-own-border 
      rounded-[25px] 
      p-5 
      flex flex-col 
      w-full  
      relative 
      overflow-hidden 
      shadow-[0_4px_25px_rgba(0,0,0,0.02)]
      ${className}
    `}>
      {title && (
        <h3 className="text-[11px] font-bold text-own-text/30 uppercase tracking-[0.3em] mb-10 text-center">
          {title}
        </h3>
      )}
      <div className="flex-1 w-full flex flex-col items-center justify-center text-center">
        {children}
      </div>
    </div>
  );
}