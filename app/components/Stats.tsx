"use client";

import { motion } from "framer-motion";
import { Zap } from "lucide-react";

interface StatsProps {
  t: any;
}

export default function Stats({ t }: StatsProps) {
  return (
    <section className="section-padding bg-[#0a0a0a] border-t border-white/[0.03]">
      <div className="premium-container relative z-10 px-6 sm:px-10">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 sm:gap-20">
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-3 text-red-600 font-bold text-[9px] sm:text-[10px] uppercase tracking-[0.3em] mb-4 sm:mb-5">
              <Zap className="w-3 h-3 sm:w-4 sm:h-4" />
              {t.badge}
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-black font-display tracking-tighter text-white uppercase italic leading-[0.9] mb-8 sm:mb-10">
              {t.title_1} <br /><span className="text-red-600 not-italic">{t.title_2}</span>
            </h2>
            <p className="text-white/40 font-medium text-[10px] sm:text-xs leading-relaxed uppercase tracking-widest max-w-md mx-auto lg:mx-0">
              {t.desc}
            </p>
          </div>
          <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            {t.list.map((s: any, i: number) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="elegant-card p-8 sm:p-10 flex flex-col items-center text-center group glass-effect"
              >
                <span className="font-display text-3xl sm:text-4xl font-black mb-3 sm:mb-4 text-white tracking-tighter uppercase italic leading-none group-hover:text-red-600 transition-colors">
                  {s.value}
                </span>
                <span className="font-display text-[8px] sm:text-[9px] font-bold uppercase tracking-[0.2em] text-white/40 mb-4 sm:mb-5">
                  {s.label}
                </span>
                <p className="text-[7px] sm:text-[8px] font-bold uppercase text-white/20 tracking-[0.2em] pt-4 sm:pt-5 border-t border-white/5 w-full">
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
