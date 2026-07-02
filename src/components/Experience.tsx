"use client";

import { motion } from "framer-motion";
import { GraduationCap, Trophy, Award, MapPin } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      title: "B.E. Computer Science and Engineering (Cyber Security)",
      institution: "Chennai Institute of Technology, Chennai",
      date: "2024 - 2028",
      location: "Chennai, India",
      description: "Cumulative Grade Point Average (CGPA) - 7.5 / 10",
      icon: GraduationCap,
    },
    {
      title: "Cyber Security Internship",
      institution: "Eoloid Solutions LLP",
      date: "May 2026 - June 2026",
      location: "Chennai, India",
      description: "Successfully completed an intensive internship focused on practical Cyber Security applications.",
      icon: Award,
    },
    {
      title: "Ethical Hacking Virtual Internship",
      institution: "EduSkills Academy",
      date: "2025",
      location: "Online",
      description: "Successfully completed a 10-week virtual internship focusing on ethical hacking.",
      icon: Award,
    },
    {
      title: "Capture The Flag (CTF) Participant",
      institution: "National Level Events",
      date: "2025",
      location: "Various",
      description: "Actively participated in national level CTF events, solving web and cryptography challenges.",
      icon: Trophy,
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 scroll-m-20">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Education & Experience
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
              
              <div className="bg-white/70 dark:bg-slate-900/70 backdrop-blur-md border border-white/40 dark:border-white/10 p-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:-translate-y-1 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] dark:hover:shadow-[0_8px_30px_rgb(0,0,0,0.2)] transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                    {exp.title}
                  </h3>
                  <span className="inline-block px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full text-xs font-medium text-slate-600 dark:text-slate-400 mt-2 md:mt-0 w-fit">
                    {exp.date}
                  </span>
                </div>
                
                <div className="flex flex-col sm:flex-row sm:items-center text-sm font-medium text-indigo-600 dark:text-indigo-400 mb-4 gap-2 sm:gap-4">
                  <span>{exp.institution}</span>
                  <span className="hidden sm:inline text-slate-300 dark:text-slate-600">•</span>
                  <span className="flex items-center gap-1"><MapPin size={14} /> {exp.location}</span>
                </div>

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
