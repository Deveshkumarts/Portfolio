export default function Footer() {
  return (
    <footer className="w-full border-t border-slate-800 bg-[#020617] text-slate-400 py-8 relative z-10 mt-auto">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <p className="font-[family-name:var(--font-fira-code)] text-sm mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} Devesh Kumar. All rights reserved.
        </p>
        <p className="font-[family-name:var(--font-fira-code)] text-sm flex items-center gap-2 text-cyan-500/70">
          <span className="animate-pulse opacity-50">&lt;</span>
          Designed with a hacker mindset
          <span className="animate-pulse opacity-50">/&gt;</span>
        </p>
      </div>
    </footer>
  );
}
