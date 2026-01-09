export default function BottomNav() {
  return (
    <nav className="fixed bottom-10 left-1/2 -translate-x-1/2 z-50">
      <div className="bg-white border-[1.2px] border-own-brown rounded-full px-12 py-3 flex items-center gap-10 shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
        
        <button className="flex flex-col items-center gap-1 group transition-transform hover:scale-110">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-own-text" viewBox="0 0 24 24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
          <span className="text-[10px] font-bold uppercase tracking-wider text-own-text">Home</span>
        </button>

        <button className="flex flex-col items-center gap-1 group transition-transform hover:scale-110">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-none stroke-own-text stroke-[1.5]" viewBox="0 0 24 24"><path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M12 7a5 5 0 100 10 5 5 0 000-10z"/></svg>
          <span className="text-[10px] font-bold uppercase tracking-wider text-own-text">Garden</span>
        </button>

        <button className="flex flex-col items-center gap-1 group transition-transform hover:scale-110">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-none stroke-own-text stroke-[1.5]" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>
          <span className="text-[10px] font-bold uppercase tracking-wider text-own-text">Explore</span>
        </button>

        <button className="flex flex-col items-center gap-1 group transition-transform hover:scale-110">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-own-text" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
          <span className="text-[10px] font-bold uppercase tracking-wider text-own-text">Profile</span>
        </button>

      </div>
    </nav>
  );
}