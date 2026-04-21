"use client";

import { motion } from "framer-motion";
import { Terminal } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 px-4 relative z-10 scroll-m-20">
      <div className="max-w-5xl mx-auto glass-panel p-8 md:p-12 rounded-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4 opacity-50">
          <Terminal size={100} className="text-cyan-500/10 absolute -top-4 -right-4 -rotate-12" />
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-widest uppercase">
              <span className="text-cyan-400">/</span> About_Me
            </h2>
            <div className="h-px bg-cyan-500/30 flex-grow" />
          </div>
          
          <div className="space-y-6 text-slate-300 font-[family-name:var(--font-fira-code)] leading-relaxed text-sm md:text-base">
            <p>
              <span className="text-purple-400">#</span> Initialize profile sequence...
            </p>
            <p>
              I am an undergraduate in Cyber Security and a passionate developer with a hacker mindset. I constantly explore the depths of web security, network protocols, and ethical hacking. 
            </p>
            <p>
              My mission is to secure the digital world by identifying vulnerabilities before they can be exploited. I thrive in the intersection between breaking systems to understand them and building them to be resilient against modern threats.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 pt-6 border-t border-cyan-500/20">
              <div className="flex items-center gap-2">
                <span className="text-[var(--neon-green)]">✔</span> Vulnerability Assessment
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[var(--neon-green)]">✔</span> Full-Stack Development
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[var(--neon-green)]">✔</span> Exploit Research
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[var(--neon-green)]">✔</span> Network Diagnostics
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
