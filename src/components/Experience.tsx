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
    },
    {
      title: "Certified Ethical Hacker Workshop",
      date: "2024",
      description: "Completed intensive training on modern penetration testing methodologies.",
      icon: Award,
    },
    {
      title: "Capture The Flag (CTF) Participant",
      date: "2024",
      description: "Actively participated in national level CTF events, solving web and cryptography challenges.",
      icon: Trophy,
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 scroll-m-20">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Experience
          </h2>
          <div className="h-px bg-slate-200 dark:bg-slate-800 flex-grow" />
        </div>

        <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-4 md:ml-8 space-y-12">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative pl-8 md:pl-12"
            >
              <div className="absolute -left-[17px] top-1 h-8 w-8 rounded-full bg-white dark:bg-slate-900 border-2 border-slate-300 dark:border-slate-700 flex items-center justify-center text-slate-500 dark:text-slate-400">
                <exp.icon size={14} />
              </div>
              
              <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 rounded-2xl hover:shadow-sm transition-shadow">
                <span className="inline-block px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full text-xs font-medium text-slate-600 dark:text-slate-400 mb-4">
                  {exp.date}
                </span>
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2">
                  {exp.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
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
