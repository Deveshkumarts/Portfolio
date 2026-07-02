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
  { name: "Cybersecurity", icon: ShieldAlert },
  { name: "Ethical Hacking", icon: Fingerprint },
  { name: "Python", icon: Code2 },
  { name: "JavaScript", icon: Code2 },
  { name: "MERN Stack", icon: Database },
  { name: "Network Security", icon: Network },
  { name: "Linux", icon: Terminal },
  { name: "Vulnerability Assessment", icon: ScanSearch },
  { name: "Penetration Testing", icon: Server },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 scroll-m-20">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Skills
          </h2>
          <div className="h-px bg-slate-200 dark:bg-slate-800 flex-grow" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5 rounded-xl flex flex-row items-center gap-4 hover:border-indigo-300 dark:hover:border-indigo-700 hover:shadow-sm transition-all duration-300"
            >
              <div className="p-2.5 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 rounded-lg">
                <skill.icon size={20} />
              </div>
              <h3 className="font-medium text-sm md:text-base text-slate-700 dark:text-slate-300">
                {skill.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
