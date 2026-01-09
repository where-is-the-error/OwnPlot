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
      border-[1px] border-own-border 
      rounded-[32px] 
      p-8 
      flex flex-col 
      h-full 
      relative 
      overflow-hidden 
      ${className}
    `}>
      {title && (
        <h3 className="text-[12px] font-bold text-own-text/40 uppercase tracking-[0.2em] mb-6">
          {title}
        </h3>
      )}
      <div className="flex-1 w-full flex flex-col items-center justify-center">
        {children}
      </div>
    </div>
  );
}