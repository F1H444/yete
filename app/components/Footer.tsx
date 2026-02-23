"use client";

import Image from "next/image";
import { Heart } from "lucide-react";

interface FooterProps {
  t: any;
}

export default function Footer({ t }: FooterProps) {
  return (
    <footer className="relative pt-24 sm:pt-32 pb-12 sm:pb-16 overflow-hidden bg-[#0a0a0a] border-t border-white/[0.03]">
      <div className="premium-container relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-20 mb-16 sm:mb-24">
          <div className="sm:col-span-2">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl bg-red-600 flex items-center justify-center overflow-hidden shadow-lg">
                <Image 
                  src="/logo.png" 
                  alt="YETE Logo" 
                  width={44} 
                  height={44} 
                  className="w-full h-full object-contain p-1.5"
                />
              </div>
              <span className="text-2xl sm:text-3xl font-black tracking-tight font-display text-white italic">
                YETE
              </span>
            </div>
            <p className="text-white/30 text-[10px] sm:text-xs font-medium uppercase tracking-[0.25em] leading-[2] max-w-md">
              {t.desc}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-1 lg:grid-cols-1 gap-12 sm:gap-0 lg:contents">
            <div>
              <h4 className="text-[10px] sm:text-xs font-black uppercase tracking-[0.3em] text-white mb-6 sm:mb-10 italic">{t.nav}</h4>
              <ul className="space-y-4 sm:space-y-6">
                {["Converter", "Features", "How it Works", "FAQ"].map((item) => (
                  <li key={item}>
                    <a href={`#${item.toLowerCase().replace(/\s+/g, '')}`} className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-white/40 hover:text-red-600 transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="sm:mt-12 lg:mt-0">
              <h4 className="text-[10px] sm:text-xs font-black uppercase tracking-[0.3em] text-white mb-6 sm:mb-10 italic">{t.legal}</h4>
              <ul className="space-y-4 sm:space-y-6">
                {["Terms", "Privacy", "Cookies", "DMCA"].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-white/40 hover:text-red-600 transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-12 sm:pt-16 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-8 sm:gap-10">
          <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-6">
            <div className="flex items-center gap-2 text-[8px] sm:text-[9px] font-black uppercase tracking-[0.3em] text-red-600 bg-red-600/5 px-4 py-2 rounded-full border border-red-600/20">
              <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse" />
              {t.engine}
            </div>
            <p className="text-[8px] sm:text-[9px] font-bold uppercase tracking-[0.3em] text-white/20">
              {t.made}
            </p>
          </div>
          
          <div className="flex items-center gap-3 text-[8px] sm:text-[9px] font-bold uppercase tracking-[0.3em] text-white/20 text-center sm:text-right">
            {t.rights}
          </div>
        </div>
      </div>
    </footer>
  );
}
