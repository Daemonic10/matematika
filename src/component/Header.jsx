export default function Header() {
  return (
    <div className="fixed top-0 w-full z-50 px-6 pt-6 pointer-events-none">
      <div className="max-w-5xl mx-auto flex justify-center">
        <nav className="pointer-events-auto flex items-center bg-white/70 backdrop-blur-xl border border-slate-100 py-2 px-3 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
          <div className="flex items-center px-4 mr-4 border-r border-slate-100">
            <a href="#" className="font-bold text-xl tracking-tighter text-slate-900">Kelompok 5</a>
          </div>
          <ul className="flex items-center gap-1 list-none font-medium text-slate-600 pl-20">
            <li><a href="#" className="block py-2 px-5 rounded-full hover:bg-slate-50 transition-all">Home</a></li>
            <li><a href="#" className="block py-2 px-5 rounded-full hover:bg-slate-50 transition-all">Materi</a></li>
          </ul>
          <div className="ml-4 pl-4 border-l border-slate-100">
            <button className="bg-slate-900 text-white text-sm py-2 px-5 rounded-full font-semibold hover:bg-black transition-all">
              Mulai Quiz
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
}