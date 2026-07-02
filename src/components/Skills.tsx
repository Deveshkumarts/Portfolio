"use client";

import { motion } from "framer-motion";
import { 
  Code2, 
  Database, 
  Server, 
  ShieldAlert, 
  Workflow
} from "lucide-react";

const skillCategories = [
  { 
    name: "Programming Languages", 
    icon: Code2,
    skills: ["Python", "C++", "JavaScript", "HTML", "CSS"]
  },
  { 
    name: "Databases", 
    icon: Database,
    skills: ["MySQL", "MongoDB"]
  },
  { 
    name: "CS Fundamentals", 
    icon: Server,
    skills: ["Data Structures & Algorithms", "OOP", "Computer Networks", "Operating Systems"]
  },
  { 
    name: "Cybersecurity Tools", 
    icon: ShieldAlert,
    skills: ["Linux", "Burp Suite", "Nmap", "Whois"]
  },
  { 
    name: "Automation & Workflow", 
    icon: Workflow,
    skills: ["N8N", "Process Automation", "API Integration"]
  }
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, i) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 rounded-2xl flex flex-col hover:border-indigo-300 dark:hover:border-indigo-700 hover:shadow-sm transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 rounded-xl">
                  <category.icon size={24} />
                </div>
                <h3 className="font-bold text-lg text-slate-800 dark:text-slate-200">
                  {category.name}
                </h3>
              </div>
              <ul className="space-y-3">
                {category.skills.map((skill, index) => (
                  <li key={index} className="flex items-center text-slate-600 dark:text-slate-400 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mr-3"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
