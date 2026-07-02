"use client";

import { motion } from "framer-motion";
import { BadgeCheck } from "lucide-react";

export default function Certifications() {
  const certifications = [
    {
      name: "CCNA: Introduction to Networks",
      issuer: "Cisco"
    },
    {
      name: "AWS Cloud Practitioner Essentials",
      issuer: "AWS"
    },
    {
      name: "Introduction to Networking",
      issuer: "Zscaler"
    },
    {
      name: "MongoDB Basics",
      issuer: "MongoDB"
    },
    {
      name: "Introduction to Cybersecurity",
      issuer: "Cisco"
    }
  ];

  return (
    <section id="certifications" className="py-20 px-4 scroll-m-20 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Certifications
          </h2>
          <div className="h-px bg-slate-200 dark:bg-slate-800 flex-grow" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {certifications.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5 rounded-2xl flex items-center gap-4 hover:shadow-sm transition-all duration-300"
            >
              <div className="p-3 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 rounded-xl flex-shrink-0">
                <BadgeCheck size={24} />
              </div>
              <div>
                <h3 className="font-bold text-slate-800 dark:text-slate-200 leading-tight">
                  {cert.name}
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">
                  {cert.issuer}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
