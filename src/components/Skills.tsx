"use client";

import { motion } from "framer-motion";
import { 
  ShieldAlert, 
  Terminal, 
  Code2, 
  Database, 
  Server, 
  Network, 
  Fingerprint, 
  ScanSearch
} from "lucide-react";

const skills = [
  { name: "Cybersecurity", icon: ShieldAlert, color: "text-cyan-400" },
  { name: "Ethical Hacking", icon: Fingerprint, color: "text-purple-400" },
  { name: "Python", icon: Code2, color: "text-yellow-400" },
  { name: "JavaScript", icon: Code2, color: "text-yellow-300" },
  { name: "MERN Stack", icon: Database, color: "text-green-400" },
  { name: "Network Security", icon: Network, color: "text-blue-400" },
  { name: "Linux", icon: Terminal, color: "text-orange-400" },
  { name: "Vulnerability Assessment", icon: ScanSearch, color: "text-red-400" },
  { name: "Penetration Testing", icon: Server, color: "text-indigo-400" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 relative z-10 scroll-m-20">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-widest uppercase">
            <span className="text-purple-400">/</span> Skills_Arsenal
          </h2>
          <div className="h-px bg-purple-500/30 flex-grow" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="glass-panel p-6 rounded-lg flex flex-col items-center justify-center gap-4 hover:-translate-y-2 transition-transform duration-300 group glow-border"
            >
              <skill.icon size={40} className={`${skill.color} group-hover:animate-pulse`} />
              <h3 className="font-[family-name:var(--font-fira-code)] text-sm md:text-base text-center">
                {skill.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
