"use client";

import { motion } from "framer-motion";
import { Send, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useState } from "react";

export default function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate send
    setTimeout(() => {
      setIsSubmitting(false);
      setFormState({ name: "", email: "", message: "" });
      alert("Message intercepted and delivered securely.");
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 px-4 relative z-10 scroll-m-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="md:w-1/2"
        >
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-widest uppercase">
              <span className="text-purple-400">/</span> Secure_Comms
            </h2>
          </div>
          <p className="text-slate-400 font-[family-name:var(--font-fira-code)] mb-8">
            Connection established. Encrypted channel open. Need to discuss a project, security audit, or just want to say hi? Drop a message below.
          </p>
          
          <div className="flex flex-col gap-6">
            <a href="mailto:contact@example.com" className="flex items-center gap-4 text-slate-300 hover:text-cyan-400 transition-colors group p-4 border border-slate-800 rounded-lg bg-slate-900/50 hover:border-cyan-500/30">
              <Mail className="group-hover:animate-pulse text-cyan-500" />
              <span className="font-[family-name:var(--font-fira-code)]">contact@example.com</span>
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-slate-300 hover:text-purple-400 transition-colors group p-4 border border-slate-800 rounded-lg bg-slate-900/50 hover:border-purple-500/30">
              <FaGithub className="group-hover:animate-pulse text-purple-500" size={24} />
              <span className="font-[family-name:var(--font-fira-code)]">github.com/Devesh</span>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-slate-300 hover:text-neon-green transition-colors group p-4 border border-slate-800 rounded-lg bg-slate-900/50 hover:border-neon-green/30">
              <FaLinkedin className="group-hover:animate-pulse text-[var(--neon-green)]" size={24} />
              <span className="font-[family-name:var(--font-fira-code)]">linkedin.com/in/Devesh</span>
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="md:w-1/2 glass-panel p-8 rounded-xl glow-border"
        >
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-cyan-400 font-[family-name:var(--font-fira-code)] text-sm">&gt; Target_Name</label>
              <input 
                type="text" 
                id="name"
                required
                value={formState.name}
                onChange={e => setFormState({...formState, name: e.target.value})}
                className="bg-[#020617]/50 border border-slate-700 rounded p-3 text-white focus:outline-none focus:border-cyan-500 focus:shadow-[0_0_10px_rgba(0,255,255,0.2)] transition-all font-[family-name:var(--font-fira-code)]"
                placeholder="John Doe"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-cyan-400 font-[family-name:var(--font-fira-code)] text-sm">&gt; Return_Address</label>
              <input 
                type="email" 
                id="email"
                required
                value={formState.email}
                onChange={e => setFormState({...formState, email: e.target.value})}
                className="bg-[#020617]/50 border border-slate-700 rounded p-3 text-white focus:outline-none focus:border-cyan-500 focus:shadow-[0_0_10px_rgba(0,255,255,0.2)] transition-all font-[family-name:var(--font-fira-code)]"
                placeholder="john@example.com"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-cyan-400 font-[family-name:var(--font-fira-code)] text-sm">&gt; Payload</label>
              <textarea 
                id="message"
                required
                rows={5}
                value={formState.message}
                onChange={e => setFormState({...formState, message: e.target.value})}
                className="bg-[#020617]/50 border border-slate-700 rounded p-3 text-white focus:outline-none focus:border-cyan-500 focus:shadow-[0_0_10px_rgba(0,255,255,0.2)] transition-all font-[family-name:var(--font-fira-code)] resize-none"
                placeholder="Enter encrypted message here..."
              />
            </div>
            <button 
              type="submit" 
              disabled={isSubmitting}
              className="cyber-button w-full py-4 rounded font-bold tracking-widest flex items-center justify-center gap-2 mt-4"
            >
              {isSubmitting ? (
                <>Transmitting... <span className="animate-spin text-cyan-400">|</span></>
              ) : (
                <>Execute Payload <Send size={18} /></>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
