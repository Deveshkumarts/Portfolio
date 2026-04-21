"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Hero() {
  const [text, setText] = useState("");
  const fullText = "Securing the digital world, one system at a time.";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index + 1));
      index++;
      if (index >= fullText.length) {
        clearInterval(interval);
      }
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between w-full">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left z-10 space-y-6"
        >
          <div className="inline-block px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 font-[family-name:var(--font-fira-code)] text-sm mb-4">
            System Status: Secure
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-wider">
            Devesh Kumar
          </h1>
          <h2 className="text-xl md:text-3xl text-cyan-400 font-[family-name:var(--font-fira-code)] glitch-text" data-text="Cybersecurity Enthusiast | Ethical Hacker | Developer">
            Cybersecurity Enthusiast <br className="md:hidden" /> <span className="hidden md:inline">|</span> Ethical Hacker <span className="hidden md:inline">|</span> Developer
          </h2>
          <div className="h-16 flex items-center">
            <p className="text-lg md:text-xl text-slate-400 font-[family-name:var(--font-fira-code)]">
              &gt; {text}<span className="animate-pulse">_</span>
            </p>
          </div>
          
          <div className="flex gap-4 pt-4">
            <a href="#projects" className="cyber-button px-8 py-3 rounded text-sm font-[family-name:var(--font-fira-code)] tracking-widest">
              View Projects
            </a>
            <a href="#contact" className="px-8 py-3 rounded text-sm font-[family-name:var(--font-fira-code)] tracking-widest border border-purple-500/50 text-purple-400 hover:bg-purple-500/10 transition-colors">
              Contact Me
            </a>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="md:w-1/2 mt-16 md:mt-0 flex justify-center relative"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96 glow-border rounded-full p-2">
            <div className="w-full h-full rounded-full overflow-hidden border-2 border-cyan-500/50 bg-[#0a0a0a] relative">
              <div className="absolute inset-0 bg-[url('https://api.dicebear.com/7.x/bottts/svg?seed=Devesh&backgroundColor=000000')] bg-center bg-cover mix-blend-screen opacity-90" />
            </div>
            <div className="absolute top-0 left-0 w-full h-full border border-cyan-500/20 rounded-full animate-[spin_10s_linear_infinite]" />
            <div className="absolute -top-4 -left-4 w-[calc(100%+32px)] h-[calc(100%+32px)] border-t border-purple-500/30 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
