"use client";

import { motion } from "framer-motion";
import { Download, Github, Video } from "lucide-react";

export default function Header() {
  return (
    <header className="fixed top-6 left-0 right-0 z-50 px-4">
      <nav className="premium-container max-w-6xl">
        <div className="glass-effect rounded-2xl px-6 py-3 flex items-center justify-between shadow-2xl border-white/[0.05]">
          <a href="/" className="flex items-center gap-3 group transition-all active:scale-95">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-red-600 flex items-center justify-center text-white shadow-lg group-hover:bg-red-700 transition-colors">
              <Video className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" />
            </div>
            <span className="text-xl sm:text-2xl font-black tracking-tight font-display text-white italic">
              YETE<span className="text-red-600 uppercase not-italic">.io</span>
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {['Converter', 'Features', 'FAQ'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase().replace('.', '')}`} 
                className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/50 hover:text-white transition-colors relative group/link"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 transition-all group-hover/link:w-full" />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a href="https://github.com" className="hidden sm:flex text-white/40 hover:text-white transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="#downloader" className="yt-premium-button !py-2.5 !px-6 !text-[10px] font-black italic">
              START NOW
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
