"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="hero" className="min-h-[90vh] flex items-center justify-center pt-20 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between w-full gap-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left z-10 space-y-6"
        >
          <div className="inline-block px-4 py-1.5 rounded-full border border-indigo-200 bg-indigo-50 text-indigo-700 dark:border-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300 text-sm font-medium mb-2">
            Available for Opportunities
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight whitespace-nowrap bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-indigo-700 to-slate-900 dark:from-white dark:via-indigo-300 dark:to-white">
            Devesh Kumar TS
          </h1>
          <h2 className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 font-medium leading-snug max-w-2xl mt-4">
            Cybersecurity Enthusiast | B.E CSE (Cyber Security) | AI Security Learner | Full-Stack Developer | CTF Enthusiast
          </h2>
          <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 max-w-lg pt-2">
            Securing the digital world, one system at a time. I specialize in vulnerability assessment, full-stack development, and building resilient applications.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4 justify-center md:justify-start">
            <a href="#projects" className="px-6 py-3 rounded-lg font-medium bg-indigo-600 text-white hover:bg-indigo-700 transition-colors shadow-sm hover:shadow">
              View Projects
            </a>
            <a href="/resume.pdf" target="_blank" rel="noreferrer" className="px-6 py-3 rounded-lg font-medium border border-indigo-200 dark:border-indigo-800 text-indigo-700 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/20 hover:bg-indigo-100 dark:hover:bg-indigo-900/40 transition-colors">
              View Resume
            </a>
            <a href="#contact" className="px-6 py-3 rounded-lg font-medium border border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
              Contact Me
            </a>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="md:w-1/2 flex justify-center"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full p-2 bg-gradient-to-tr from-indigo-100 to-slate-100 dark:from-slate-800 dark:to-slate-900 shadow-xl mx-auto md:ml-auto md:mr-0">
            <div className="w-full h-full rounded-full overflow-hidden bg-slate-200 dark:bg-slate-800 relative">
              <img 
                src="/profile.png" 
                alt="Devesh Kumar TS" 
                className="w-full h-full object-cover" 
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
