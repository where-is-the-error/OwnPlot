export default function Header() {
  return (
    <header className="mb-12 flex justify-between items-start w-full">
      <div>
        <h1 className="text-4xl font-serif italic font-bold tracking-tighter">ownplot.</h1>
        <p className="text-[10px] text-white/30 uppercase tracking-[0.3em] mt-1 text-center">Digital Garden</p>
      </div>
      <div className="flex gap-4 items-center">
        <button className="text-xs uppercase tracking-widest text-white/50 hover:text-white transition-colors">Explore</button>
        <div className="w-10 h-10 rounded-full border border-white/10 bg-gradient-to-br from-stone-800 to-black flex items-center justify-center overflow-hidden">
          <div className="w-4 h-4 bg-plot-olive rounded-full blur-[2px] animate-pulse" />
        </div>
      </div>
    </header>
  );
}