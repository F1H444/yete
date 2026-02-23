"use client";

import { useState } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  { q: "Is this service really free?", a: "Yes, absolutely. We provide this tool for free with no subscriptions or hidden costs. We believe in providing open access utilities for everyone." },
  { q: "Any quality limitations?", a: "We always fetch the highest available bitrate for audio and the best resolution for video directly from the source servers." },
  { q: "Is it mobile compatible?", a: "Our platform is 100% web-based. No app installation is required. It works perfectly on any modern smartphone or tablet browser." },
  { q: "What about private videos?", a: "Due to strict privacy and security protocols, our engine can only process publicly available videos and content." },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="section-padding bg-[#0a0a0a] border-t border-white/[0.03]">
      <div className="premium-container max-w-4xl relative z-10">
        <div className="text-center mb-20">
          <div className="flex items-center gap-3 text-red-600 font-bold text-[10px] uppercase tracking-[0.3em] mb-4 justify-center">
            <HelpCircle className="w-4 h-4" />
            SUPPORT ARCHIVE
          </div>
          <h2 className="text-4xl sm:text-7xl font-black font-display tracking-tighter text-white mb-6 italic uppercase leading-none">
            QUERY <span className="text-red-600 not-italic">REPOSITORY</span>
          </h2>
          <p className="text-white/40 font-medium text-xs leading-relaxed uppercase tracking-widest">
            TECHNICAL DOCUMENTATION AND COMMON TROUBLESHOOTING PROTOCOLS.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((f, i) => (
            <div key={i} className={`elegant-card transition-all overflow-hidden glass-effect ${open === i ? 'border-red-600/50' : 'hover:border-white/10'}`}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full py-8 px-8 sm:px-10 flex items-center justify-between font-display font-black text-xl tracking-tight text-left cursor-pointer text-white italic uppercase group"
              >
                <span className={`${open === i ? 'text-red-600' : 'text-white'} transition-colors duration-300`}>{f.q}</span>
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${open === i ? 'bg-red-600 text-white shadow-lg' : 'bg-white/5 text-white/20'}`}>
                  {open === i ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                </div>
              </button>
              
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 sm:px-10 pb-8 text-white/40 font-medium leading-relaxed border-t border-white/5 pt-6 text-[11px] uppercase tracking-widest bg-white/[0.02]">
                      {f.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
