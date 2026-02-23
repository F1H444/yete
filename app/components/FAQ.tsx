"use client";

import { useState } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQProps {
  t: any;
}

export default function FAQ({ t }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section-padding bg-[#0a0a0a] border-t border-white/[0.03]">
      <div className="premium-container relative z-10 px-6 sm:px-10">
        <div className="flex flex-col lg:flex-row gap-12 sm:gap-24">
          <div className="lg:w-1/3 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-3 text-red-600 font-bold text-[10px] uppercase tracking-[0.3em] mb-4 sm:mb-6">
              <HelpCircle className="w-3 h-3 sm:w-4 sm:h-4" />
              {t.badge}
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black font-display tracking-tighter text-white uppercase italic leading-[0.9] mb-6 sm:mb-8">
              {t.title_1} <br /><span className="text-red-600 not-italic">{t.title_2}</span>
            </h2>
            <p className="text-white/40 font-medium text-[10px] sm:text-xs leading-relaxed uppercase tracking-widest max-w-md mx-auto lg:mx-0">
              {t.desc}
            </p>
          </div>

          <div className="lg:w-2/3 space-y-3 sm:space-y-4">
            {t.list.map((faq: any, i: number) => (
              <div 
                key={i}
                className={`elegant-card overflow-hidden transition-all duration-500 glass-effect ${openIndex === i ? 'border-red-600/30' : 'hover:border-white/10'}`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full p-6 sm:p-8 flex items-center justify-between text-left group"
                >
                  <span className={`text-xs sm:text-base lg:text-lg font-black font-display uppercase italic tracking-tight transition-colors ${openIndex === i ? 'text-red-600' : 'text-white/80 group-hover:text-white'}`}>
                    {faq.q}
                  </span>
                  <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center transition-all ${openIndex === i ? 'bg-red-600 text-white rotate-180' : 'bg-white/5 text-white/40 group-hover:bg-white/10'}`}>
                    {openIndex === i ? <Minus className="w-3 h-3 sm:w-4 sm:h-4" /> : <Plus className="w-3 h-3 sm:w-4 sm:h-4" />}
                  </div>
                </button>
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 sm:px-8 pb-6 sm:pb-8">
                        <p className="text-white/40 font-medium leading-relaxed text-[9px] sm:text-[10px] uppercase tracking-[0.2em] pt-5 sm:pt-6 border-t border-white/5">
                          {faq.a}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
