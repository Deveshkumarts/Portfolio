export default function Footer() {
  return (
    <footer className="w-full border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-slate-500 py-8 relative z-10 mt-auto">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} Devesh Kumar TS. All rights reserved.
        </p>
        <p className="text-sm flex items-center gap-2 text-slate-400">
          Crafted with care and precision.
        </p>
      </div>
    </footer>
  );
}
