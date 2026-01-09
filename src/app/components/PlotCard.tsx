interface PlotCardProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
}

export default function PlotCard({ children, className, title }: PlotCardProps) {
  return (
    <div className={`
      group relative rounded-[2rem] border border-white/10 bg-black/40 p-6 
      backdrop-blur-sm transition-all duration-500 
      hover:border-plot-olive/50 hover:shadow-[0_0_30px_rgba(112,130,56,0.2)]
      ${className}
    `}>
      {title && <span className="mb-4 block text-xs font-bold tracking-widest text-white/30 uppercase">{title}</span>}
      <div className="grayscale transition-all duration-500 group-hover:grayscale-0">
        {children}
      </div>
    </div>
  );
}