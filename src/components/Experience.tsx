"use client";

import { motion } from "framer-motion";
import { GraduationCap, Trophy, Award } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      title: "Undergraduate in Cyber Security",
      date: "2023 - Present",
      description: "Focusing on ethical hacking, network security, and secure software development.",
      icon: GraduationCap,
      color: "text-cyan-400 border-cyan-500",
    },
    {
      title: "Certified Ethical Hacker Workshop",
      date: "2024",
      description: "Completed intensive training on modern penetration testing methodologies.",
      icon: Award,
      color: "text-purple-400 border-purple-500",
    },
    {
      title: "Capture The Flag (CTF) Participant",
      date: "2024",
      description: "Actively participated in national level CTF events, solving web and cryptography challenges.",
      icon: Trophy,
      color: "text-neon-green border-neon-green",
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 relative z-10 scroll-m-20">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-widest uppercase">
            <span className="text-cyan-400">/</span> Timeline
          </h2>
          <div className="h-px bg-cyan-500/30 flex-grow" />
        </div>

        <div className="relative border-l-2 border-slate-700/50 ml-4 md:ml-8 space-y-12">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="relative pl-8 md:pl-12"
            >
              <div className={`absolute -left-[17px] top-1 h-8 w-8 rounded-full bg-[#020617] border-2 ${exp.color} flex items-center justify-center`}>
                <exp.icon size={16} className={exp.color.split(' ')[0]} />
              </div>
              
              <div className="glass-panel p-6 rounded-lg glow-border group">
                <span className="inline-block px-3 py-1 bg-slate-800/50 rounded-full text-xs font-[family-name:var(--font-fira-code)] text-slate-300 mb-3">
                  {exp.date}
                </span>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {exp.title}
                </h3>
                <p className="text-slate-400 font-[family-name:var(--font-fira-code)] text-sm">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
