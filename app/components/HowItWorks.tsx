"use client";

import { motion } from "framer-motion";
import { MousePointer2, Settings2, Sparkles, Play } from "lucide-react";

const steps = [
  { num: "01", title: "Copy Link", desc: "Grab the URL from any YouTube video, shorts, or high-quality music track.", icon: MousePointer2 },
  { num: "02", title: "Select Format", desc: "Choose between high-definition MP4 video or crystal clear 320kbps MP3.", icon: Settings2 },
  { num: "03", title: "Instant Download", desc: "Our engine processes your request instantly for immediate conversion.", icon: Sparkles },
];

export default function HowItWorks() {
  return (
    <section id="how" className="section-padding relative overflow-hidden bg-[#0a0a0a]">
      <div className="absolute top-0 inset-x-0 h-px bg-white/5" />
      
      <div className="premium-container relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <div className="flex items-center gap-3 text-red-600 font-bold text-[10px] uppercase tracking-[0.3em] mb-4 justify-center">
              <Play className="w-3 h-3 fill-current" />
              EXTRACTION LOGIC
            </div>
            <h2 className="text-4xl sm:text-7xl font-black font-display tracking-tighter text-white uppercase italic leading-none">
              PROCESS <span className="text-red-600 not-italic">WORKFLOW</span>
            </h2>
          </div>

          <div className="space-y-4 relative">
            <div className="absolute left-[50%] top-0 bottom-0 w-px bg-white/5 hidden lg:block" />
            
            {steps.map((s, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                className={`flex flex-col lg:flex-row items-center gap-10 ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
              >
                <div className="lg:w-1/2 flex justify-center lg:justify-end">
                  <div className={`elegant-card p-10 glass-effect w-full max-w-md ${i % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    <h3 className="text-2xl font-black font-display text-white tracking-tight uppercase italic group-hover:text-red-600 transition-colors mb-4">
                      {s.title}
                    </h3>
                    <p className="text-white/40 font-medium text-[10px] uppercase tracking-widest leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                </div>

                <div className="relative z-20 flex-shrink-0">
                  <div className="w-14 h-14 rounded-2xl bg-black border border-red-600/50 flex items-center justify-center text-white shadow-[0_0_25px_rgba(255,0,0,0.15)] backdrop-blur-md">
                    <span className="font-black text-xl italic text-red-600">{s.num}</span>
                  </div>
                </div>

                <div className="lg:w-1/2 flex justify-center lg:justify-start">
                  <div className="hidden lg:block">
                    <s.icon className="w-16 h-16 text-white/5" strokeWidth={1} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
