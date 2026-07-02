"use client";

import { motion } from "framer-motion";
import { ExternalLink, Folder } from "lucide-react";
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
              className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 flex flex-col h-full hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex justify-between items-center mb-6 text-indigo-600 dark:text-indigo-400">
                <Folder size={28} />
                <div className="flex gap-4 text-slate-400">
                  <a href={project.github} className="hover:text-slate-900 dark:hover:text-slate-100 transition-colors"><FaGithub size={20} /></a>
                  <a href={project.live} className="hover:text-slate-900 dark:hover:text-slate-100 transition-colors"><ExternalLink size={20} /></a>
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
