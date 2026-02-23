"use client";

import { Heart, Github, Twitter, Mail, Video } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative pt-32 pb-16 overflow-hidden bg-[#0a0a0a] border-t border-white/[0.03]">
      <div className="premium-container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-20 mb-24">
          <div className="md:col-span-2">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-11 h-11 rounded-xl bg-red-600 flex items-center justify-center text-white shadow-lg">
                <Video className="w-6 h-6" fill="currentColor" />
              </div>
              <span className="text-3xl font-black tracking-tighter font-display text-white italic uppercase">
                YETE<span className="text-red-600 not-italic">.io</span>
              </span>
            </div>
            <p className="max-w-md font-medium text-white/30 text-[10px] leading-relaxed mb-10 uppercase tracking-[0.2em]">
              THE ULTIMATE HIGH-PERFORMANCE YOUTUBE CONVERTER. 
              EFFICIENCY IS OUR PRIORITY, QUALITY IS OUR STANDARD. 
              PURE WEB-BASED UTILITY.
            </p>
            <div className="flex gap-4">
              {[Github, Twitter, Mail].map((Icon, idx) => (
                <a key={idx} href="#" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/30 hover:text-red-600 hover:border-red-600/30 transition-all duration-300">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display font-black text-[10px] text-white/50 mb-10 italic uppercase tracking-[0.3em]">Navigation</h4>
            <ul className="space-y-4 font-bold text-[9px] uppercase tracking-[0.3em] text-white/30">
              <li><a href="#" className="hover:text-red-600 transition-colors">Home Dashboard</a></li>
              <li><a href="#downloader" className="hover:text-red-600 transition-colors">Video Downloader</a></li>
              <li><a href="#features" className="hover:text-red-600 transition-colors">Server Features</a></li>
              <li><a href="#faq" className="hover:text-red-600 transition-colors">Help Center</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-black text-[10px] text-white/50 mb-10 italic uppercase tracking-[0.3em]">Legal Docs</h4>
            <ul className="space-y-4 font-bold text-[9px] uppercase tracking-[0.3em] text-white/30">
              <li><a href="#" className="hover:text-red-600 transition-colors">Terms of Use</a></li>
              <li><a href="#" className="hover:text-red-600 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-red-600 transition-colors">DMCA Compliance</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-10 border-t border-white/[0.03] pt-16">
          <div className="flex items-center gap-4 font-bold uppercase text-[9px] tracking-[0.3em] text-white/20">
            <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse" /> ENGINE ONLINE</span>
            <span className="w-px h-3 bg-white/5" />
            MADE WITH <Heart className="w-3 h-3 fill-red-600 text-red-600" /> FOR THE WEB
          </div>
          
          <div className="text-center md:text-right font-bold italic text-[9px] uppercase tracking-[0.3em] text-white/10">
            YETE.IO CORE ENGINE © 2026. ALL RIGHTS RESERVED.
          </div>
        </div>
      </div>
    </footer>
  );
}
