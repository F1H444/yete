"use client";

import { motion } from "framer-motion";
import { MousePointer2, Settings2, Sparkles } from "lucide-react";

interface HowItWorksProps {
  t: any;
}

export default function HowItWorks({ t }: HowItWorksProps) {
  return (
    <section id="how" className="section-padding relative overflow-hidden bg-[#0a0a0a]">
      <div className="absolute top-0 inset-x-0 h-px bg-white/5" />
      
      <div className="premium-container relative z-10 px-6 sm:px-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 sm:mb-24">
            <div className="flex items-center justify-center gap-3 text-red-600 font-bold text-[10px] uppercase tracking-[0.3em] mb-4 sm:mb-6">
              <MousePointer2 className="w-3 h-3 sm:w-4 sm:h-4" />
              {t.badge}
            </div>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black font-display tracking-tighter text-white uppercase italic leading-[0.9]">
              {t.title_1} <span className="text-red-600 not-italic">{t.title_2}</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {t.steps.map((step: any, i: number) => {
              const icons = [MousePointer2, Settings2, Sparkles];
              const Icon = icons[i] || Sparkles;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="elegant-card p-8 sm:p-10 group glass-effect"
                >
                  <div className="flex items-start justify-between mb-8 sm:mb-10">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/50 group-hover:bg-red-600 group-hover:text-white transition-all duration-500">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <span className="text-3xl sm:text-4xl font-black font-display text-white/5 group-hover:text-red-600/20 transition-colors">
                      {step.num}
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-black font-display text-white tracking-tight uppercase italic mb-3 sm:mb-4 group-hover:text-red-600 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-white/40 font-medium leading-relaxed text-[9px] sm:text-[10px] uppercase tracking-widest group-hover:text-white/60 transition-colors">
                    {step.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
