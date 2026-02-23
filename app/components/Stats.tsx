"use client";

import { motion } from "framer-motion";
import { Zap } from "lucide-react";

export default function Stats() {
  const stats = [
    { label: "Total Extractions", value: "2.5M+", detail: "VETED BY GLOBAL USERS" },
    { label: "Server Load", value: "0.5s", detail: "AVERAGE FETCH TIME" },
    { label: "Success Rate", value: "99.9%", detail: "CRYSTAL CLEAR QUALITY" },
  ];

  return (
    <section className="section-padding bg-[#0a0a0a] border-t border-white/[0.03]">
      <div className="premium-container relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <div className="lg:w-1/2">
            <div className="flex items-center gap-3 text-red-600 font-bold text-[10px] uppercase tracking-[0.3em] mb-5">
              <Zap className="w-4 h-4" />
              REAL-TIME ANALYTICS
            </div>
            <h2 className="text-4xl sm:text-7xl font-black font-display tracking-tighter text-white uppercase italic leading-[0.9] mb-10">
              SCALING <br /><span className="text-red-600 not-italic">WITHOUT LIMITS</span>
            </h2>
            <p className="text-white/40 font-medium text-xs leading-relaxed uppercase tracking-widest max-w-md">
              OUR INFRASTRUCTURE AUTOMATICALLY SCALES TO PROVIDE THE BEST 
              CONVERSION SPEEDS REGARDLESS OF THE CURRENT TRAFFIC VOLUME.
            </p>
          </div>
          <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-3 gap-6 w-full">
            {stats.map((s, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="elegant-card p-10 flex flex-col items-center text-center group glass-effect"
              >
                <span className="font-display text-4xl font-black mb-4 text-white tracking-tighter uppercase italic leading-none group-hover:text-red-600 transition-colors">
                  {s.value}
                </span>
                <span className="font-display text-[9px] font-bold uppercase tracking-[0.2em] text-white/40 mb-5">
                  {s.label}
                </span>
                <p className="text-[8px] font-bold uppercase text-white/20 tracking-[0.2em] pt-5 border-t border-white/5 w-full">
                  {s.detail}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
