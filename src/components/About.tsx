"use client";

import { motion } from "framer-motion";
import { User } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 px-4 scroll-m-20">
      <div className="max-w-5xl mx-auto bg-white/70 dark:bg-slate-900/70 backdrop-blur-md border border-white/40 dark:border-white/10 p-8 md:p-12 rounded-2xl relative overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-8">
            <User className="text-indigo-600 dark:text-indigo-400" size={32} />
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              About Me
            </h2>
          </div>
          
          <div className="space-y-6 text-slate-600 dark:text-slate-400 leading-relaxed text-base md:text-lg">
            <p>
              I am an undergraduate in Cyber Security and a passionate Full-Stack Developer with an analytical mindset. I specialize in bridging the gap between building dynamic, user-centric web applications and ensuring they are fortified against modern cyber threats.
            </p>
            <p>
              My dual interest allows me to not only architect and develop scalable full-stack solutions but also to proactively identify vulnerabilities through ethical hacking and security assessments. I thrive in the intersection between breaking systems to understand their flaws and building them to be inherently resilient.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 pt-8 border-t border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
                Vulnerability Assessment
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
                Full-Stack Development
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
                Exploit Research
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
                Network Diagnostics
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
