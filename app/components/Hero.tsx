"use client";

import { motion } from "framer-motion";
import { ArrowBigDown, MousePointer2, Youtube, Sparkles, Zap, ShieldCheck, Play } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center pt-32 pb-32 overflow-hidden bg-[#0a0a0a]">
      <div className="premium-container relative z-10">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3 px-5 py-2 rounded-full bg-white/5 border border-white/10 text-white/70 text-[10px] font-bold tracking-[0.2em] uppercase mb-12 backdrop-blur-md"
          >
            <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse shadow-[0_0_12px_rgba(255,0,0,0.8)]" />
            ENGINE V-ULTRA IS ACTIVE
          </motion.div>

          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            className="mb-14"
          >
            <h1 className="text-6xl sm:text-8xl lg:text-[11rem] font-black font-display tracking-tighter leading-[0.85] text-white uppercase italic">
              UNLEASH <br />
              <span className="text-red-600 not-italic">POWER</span>
            </h1>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="max-w-2xl text-base sm:text-xl text-white/50 font-medium mb-16 leading-relaxed tracking-wide"
          >
            THE ULTIMATE TOOL TO CAPTURE <span className="text-white border-b border-red-600/50">YOUTUBE CONTENT</span> IN 
            PURE HD QUALITY. BLAZING FAST, LIMITLESS, AND COMPLETELY ORIGINAL.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-6 mt-12"
          >
            <a href="#downloader" className="yt-premium-button text-sm group">
              Get Started Now
              <Zap className="w-4 h-4 group-hover:fill-current transition-all" />
            </a>
            <a href="#features" className="yt-premium-outline text-sm">
              Explore Features
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
