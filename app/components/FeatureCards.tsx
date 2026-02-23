"use client";

import { motion } from "framer-motion";
import { Zap, Shield, Image, Music, Smartphone, Lock, UserCheck, Sparkles } from "lucide-react";

const features = [
  { title: "SHARP 4K", desc: "Download in native resolutions up to 4K without quality loss.", icon: Sparkles },
  { title: "STUDIO AUDIO", desc: "Extract pristine MP3 audio at maximum 320kbps bitrate.", icon: Music },
  { title: "PURE PRIVACY", desc: "No tracking, no accounts. Your data remains yours.", icon: Lock },
  { title: "MOBILE READY", desc: "Fully optimized for Android, iOS, and all desktop browsers.", icon: Smartphone },
  { title: "HYPER SPEED", desc: "Multi-threaded extraction engine for instant processing.", icon: Zap },
  { title: "SECURE CORE", desc: "Verified safe downloads with encrypted server traffic.", icon: Shield },
];

interface FeatureCardsProps {
  t: any;
}

export default function FeatureCards({ t }: FeatureCardsProps) {
  return (
    <section id="features" className="section-padding relative overflow-hidden bg-[#0a0a0a]">
      <div className="absolute top-0 inset-x-0 h-px bg-white/5" />
      
      <div className="premium-container relative z-10 px-6 sm:px-10">
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 lg:gap-12 mb-16 sm:mb-20">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 text-red-600 font-bold text-[10px] uppercase tracking-[0.3em] mb-4">
              <div className="w-4 h-[1px] bg-red-600" />
              {t.badge}
            </div>
            <h2 className="text-4xl sm:text-6xl lg:text-[5.5rem] font-black font-display tracking-tighter text-white uppercase italic leading-[0.9]">
              {t.title_1} <span className="text-red-600 not-italic block sm:inline">{t.title_2}</span>
            </h2>
          </div>
          <p className="max-w-sm text-white/40 font-medium text-[10px] sm:text-xs leading-relaxed uppercase tracking-widest lg:text-right">
            {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6">
          {t.list.map((f: any, i: number) => {
            const icons = [Image, Music, Lock, Smartphone, Zap, Shield];
            const Icon = icons[i] || Zap;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.5 }}
                className={`elegant-card p-8 sm:p-10 flex flex-col gap-10 sm:gap-12 group glass-effect hover:border-red-600/30 overflow-hidden relative ${
                  i === 0 ? 'sm:col-span-2 lg:col-span-4 lg:row-span-2' : 
                  i === 1 ? 'sm:col-span-1 lg:col-span-2 lg:row-span-1' :
                  i === 2 ? 'sm:col-span-1 lg:col-span-2 lg:row-span-1' :
                  i === 3 ? 'sm:col-span-2 lg:col-span-2 lg:row-span-2' :
                  'sm:col-span-1 lg:col-span-2 lg:row-span-1'
                }`}
              >
                {/* Visual Background for 4K Card */}
                {i === 0 && (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 via-transparent to-transparent opacity-50" />
                    <div className="absolute -right-20 -top-20 w-80 h-80 bg-red-600/10 rounded-full blur-[100px] group-hover:bg-red-600/20 transition-all duration-700" />
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0)', backgroundSize: '24px 24px' }} />
                    </div>
                    {/* Floating 4K Text Visual */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.05] group-hover:opacity-[0.08] transition-opacity duration-700 select-none pointer-events-none">
                      <span className="text-[12rem] font-black font-display italic leading-none text-white tracking-tighter">
                        4K
                      </span>
                    </div>
                  </>
                )}

                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/70 group-hover:bg-red-600 group-hover:text-white transition-all duration-500 shadow-xl relative z-10">
                   <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="mt-auto relative z-10">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-black font-display text-white tracking-tight uppercase italic group-hover:text-red-600 transition-colors mb-3 sm:mb-4">
                    {f.title}
                  </h3>
                  <p className="text-white/40 font-medium leading-relaxed text-[9px] sm:text-[10px] uppercase tracking-widest group-hover:text-white/60 transition-colors">
                    {f.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
