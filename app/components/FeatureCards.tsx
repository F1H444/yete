"use client";

import { motion } from "framer-motion";
import { Zap, Shield, Image, Music, Smartphone, Lock, UserCheck, Sparkles } from "lucide-react";

const features = [
  { title: "SHARP 4K", desc: "Download in native resolutions up to 4K without quality loss.", icon: Image },
  { title: "STUDIO AUDIO", desc: "Extract pristine MP3 audio at maximum 320kbps bitrate.", icon: Music },
  { title: "PURE PRIVACY", desc: "No tracking, no accounts. Your data remains yours.", icon: Lock },
  { title: "MOBILE READY", desc: "Fully optimized for Android, iOS, and all desktop browsers.", icon: Smartphone },
  { title: "HYPER SPEED", desc: "Multi-threaded extraction engine for instant processing.", icon: Zap },
  { title: "SECURE CORE", desc: "Verified safe downloads with encrypted server traffic.", icon: Shield },
];

export default function FeatureCards() {
  return (
    <section id="features" className="section-padding relative overflow-hidden bg-[#0a0a0a]">
      <div className="absolute top-0 inset-x-0 h-px bg-white/5" />
      
      <div className="premium-container relative z-10">
        <div className="flex flex-col lg:flex-row items-end justify-between gap-12 mb-20">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 text-red-600 font-bold text-[10px] uppercase tracking-[0.3em] mb-4">
              <div className="w-4 h-[1px] bg-red-600" />
              ENGINEERED PRECISION
            </div>
            <h2 className="text-4xl sm:text-[5.5rem] font-black font-display tracking-tighter text-white uppercase italic leading-[0.9]">
              CORE <span className="text-red-600 not-italic block sm:inline">CAPABILITIES</span>
            </h2>
          </div>
          <p className="max-w-sm text-white/40 font-medium text-xs leading-relaxed uppercase tracking-widest text-right">
            OUR ARCHITECTURE IS BUILT TO HANDLE MASSIVE THROUGHPUT WITH 
            ZERO LATENCY AND CRYSTAL CLEAR OUTPUT.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className={`elegant-card p-10 flex flex-col gap-12 group glass-effect hover:border-red-600/30 ${
                i === 0 ? 'md:col-span-4 md:row-span-2' : 
                i === 1 ? 'md:col-span-2 md:row-span-1' :
                i === 2 ? 'md:col-span-2 md:row-span-1' :
                i === 3 ? 'md:col-span-2 md:row-span-2' :
                'md:col-span-2 md:row-span-1'
              }`}
            >
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/70 group-hover:bg-red-600 group-hover:text-white transition-all duration-500 shadow-xl">
                 <f.icon className="w-5 h-5" />
              </div>
              <div className="mt-auto">
                <h3 className="text-xl sm:text-2xl font-black font-display text-white tracking-tight uppercase italic group-hover:text-red-600 transition-colors mb-4">
                  {f.title}
                </h3>
                <p className="text-white/40 font-medium leading-relaxed text-[10px] uppercase tracking-widest group-hover:text-white/60 transition-colors">
                  {f.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
