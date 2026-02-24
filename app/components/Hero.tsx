"use client";

import { motion } from "framer-motion";
import { Zap } from "lucide-react";

interface HeroProps {
  t: any;
}

export default function Hero({ t }: HeroProps) {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-32 pb-32 overflow-hidden bg-[#0a0a0a]">
      <div className="premium-container relative z-10 px-6 sm:px-10">
        <div className="flex flex-col items-center justify-center text-center max-w-5xl mx-auto">
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[10rem] xl:text-[11rem] font-black font-display tracking-tighter text-white uppercase italic leading-[0.8] mb-8 sm:mb-12">
            {t.title_1} <br />
            <span className="text-red-600 not-italic block mt-4 sm:mt-6">{t.title_2}</span>
          </h1>
          
          <p className="text-white/40 font-medium text-[10px] sm:text-xs leading-relaxed uppercase tracking-widest max-w-lg mb-10 sm:mb-14">
            {t.desc}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <a href="#downloader" className="yt-premium-button w-full sm:w-auto text-center px-10 py-5 flex items-center justify-center gap-3 group">
              {t.btn_start}
              <Zap className="w-4 h-4 group-hover:fill-current transition-all" />
            </a>
            <a href="#features" className="text-[10px] sm:text-[11px] font-black uppercase tracking-[0.3em] text-white/40 hover:text-white transition-colors py-4">
              {t.btn_features}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
