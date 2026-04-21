"use client";

import { motion } from "framer-motion";
import { ExternalLink, FolderGit2 } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "PhishGuard",
    description: "Real-Time Phishing URL Detection System using Machine Learning and Heuristics.",
    tech: ["Python", "Flask", "Scikit-Learn", "REST API"],
    github: "#",
    live: "#",
  },
  {
    title: "Website Security Analysis Tool",
    description: "A Python-based crawler and vulnerability finder that scans websites for common security flaws like XSS and SQLi.",
    tech: ["Python", "BeautifulSoup", "Requests", "Regex"],
    github: "#",
    live: "#",
  },
  {
    title: "AI Threat Intelligence Dashboard",
    description: "Dashboard collecting real-time threat inputs and mapping them out using LLM-based categorization.",
    tech: ["Next.js", "Tailwind CSS", "OpenAI API", "Node.js"],
    github: "#",
    live: "#",
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 relative z-10 scroll-m-20">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-widest uppercase">
            <span className="text-neon-green">/</span> Active_Projects
          </h2>
          <div className="h-px bg-neon-green/30 flex-grow" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-panel rounded-xl p-6 flex flex-col h-full hover:-translate-y-2 transition-all duration-300 glow-border group"
            >
              <div className="flex justify-between items-center mb-4 text-cyan-400">
                <FolderGit2 size={32} />
                <div className="flex gap-3">
                  <a href={project.github} className="hover:text-white transition-colors"><FaGithub size={20} /></a>
                  <a href={project.live} className="hover:text-white transition-colors"><ExternalLink size={20} /></a>
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-slate-400 font-[family-name:var(--font-fira-code)] text-sm mb-6 flex-grow">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-slate-700/50">
                {project.tech.map((tech) => (
                  <span key={tech} className="text-xs font-[family-name:var(--font-fira-code)] text-purple-400 bg-purple-500/10 px-2 py-1 rounded">
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
