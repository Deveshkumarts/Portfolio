"use client";

import { motion } from "framer-motion";
import { ExternalLink, Folder } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "CyberWSQK Security & Threat Detection CLI",
    description: "Terminal-based cybersecurity monitoring platform. Detects suspicious activities, analyzes logs, and performs threat intelligence checks.",
    tech: ["Python", "Linux", "Cybersecurity", "CLI"],
    github: "https://github.com/Deveshkumarts/CyberWSQK-Security-Monitoring-Threat-Detection-CLI",
    live: "https://github.com/Deveshkumarts/CyberWSQK-Security-Monitoring-Threat-Detection-CLI",
  },
  {
    title: "Clinic Queue Manager",
    description: "Real-time digital queue management system for clinics. Features live updates on current tokens and estimated waiting times for patients.",
    tech: ["JavaScript", "Socket.IO", "Supabase", "React"],
    github: "https://github.com/Deveshkumarts/Clinic-Queue-Manager",
    live: "https://clinic-queue-manager-theta.vercel.app/",
  },
  {
    title: "Cryptography Algorithms Implementation",
    description: "Python GUI application demonstrating core cryptography algorithms like AES, SHA (SHA-256/SHA-512), and RSA encryption/decryption.",
    tech: ["Python", "Tkinter", "Cryptography", "Security"],
    github: "https://github.com/Deveshkumarts/-Cryptography-Algorithms-Implementation",
    live: "https://github.com/Deveshkumarts/-Cryptography-Algorithms-Implementation",
  },
  {
    title: "TKS Balaji Maligai (Online Grocery)",
    description: "Modern full-stack grocery ecommerce web app with secure Google OAuth login, dynamic product/category management, admin dashboard, and order tracking.",
    tech: ["Next.js", "React", "Node.js", "MongoDB"],
    github: "https://github.com/Deveshkumarts/Online-Grocery-App",
    live: "https://online-grocery-app-six.vercel.app",
  },
  {
    title: "FlowSync IC (Analog Layout Workflow)",
    description: "MERN stack web application that automates analog layout workflow management. Helps assign tasks, track progress, and manage approvals with smart delay prediction.",
    tech: ["MERN", "React", "Node.js", "Automation"],
    github: "https://github.com/Deveshkumarts/Analog-Layout-Workflow-Automation-System",
    live: "https://flowsyncicofficial.netlify.app",
  },
  {
    title: "Password Cracking & Hashing Algorithms",
    description: "Beginner-friendly password cracking tool written in Python. Demonstrates how brute-force attacks and wordlist/hash-based password cracking work.",
    tech: ["Python", "Cybersecurity", "Hashing", "Security"],
    github: "https://github.com/Deveshkumarts/Password-Cracking-and-Hashing-Algorithms",
    live: "https://github.com/Deveshkumarts/Password-Cracking-and-Hashing-Algorithms",
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 scroll-m-20">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Projects
          </h2>
          <div className="h-px bg-slate-200 dark:bg-slate-800 flex-grow" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white/70 dark:bg-slate-900/70 backdrop-blur-md border border-white/40 dark:border-white/10 p-6 md:p-8 rounded-2xl flex flex-col hover:-translate-y-1 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] dark:hover:shadow-[0_8px_30px_rgb(0,0,0,0.2)] transition-all duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.12)] group"
            >
              <div className="flex justify-between items-center mb-6 text-indigo-600 dark:text-indigo-400">
                <Folder size={28} />
                <div className="flex gap-4 text-slate-400">
                  <a href={project.github} target="_blank" rel="noreferrer" className="hover:text-slate-900 dark:hover:text-slate-100 transition-colors"><FaGithub size={20} /></a>
                  <a href={project.live} target="_blank" rel="noreferrer" className="hover:text-slate-900 dark:hover:text-slate-100 transition-colors"><ExternalLink size={20} /></a>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-slate-100">
                {project.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 flex-grow leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-slate-100 dark:border-slate-800">
                {project.tech.map((tech) => (
                  <span key={tech} className="text-xs font-medium text-indigo-700 bg-indigo-50 dark:text-indigo-300 dark:bg-indigo-900/30 px-2.5 py-1 rounded-md">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
