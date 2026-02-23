import Image from "next/image";
import { Github } from "lucide-react";
import { Language } from "../lib/translations";

interface HeaderProps {
  t: any;
}

export default function Header({ t }: HeaderProps) {
  return (
    <header className="fixed top-4 sm:top-6 left-0 right-0 z-50 px-3 sm:px-4">
      <nav className="premium-container max-w-6xl">
        <div className="glass-effect rounded-xl sm:rounded-2xl px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between shadow-2xl border-white/[0.05]">
          <a href="/" className="flex items-center gap-2 sm:gap-3 group transition-all active:scale-95">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-red-600 flex items-center justify-center overflow-hidden shadow-lg group-hover:bg-red-700 transition-colors">
              <Image 
                src="/logo.png" 
                alt="YETE Logo" 
                width={40} 
                height={40} 
                className="w-full h-full object-contain p-1"
                priority
              />
            </div>
            <span className="text-xl sm:text-2xl font-black tracking-tight font-display text-white italic">
              YETE
            </span>
          </a>

          <div className="hidden lg:flex items-center gap-8">
            {[
              { name: t.converter, id: 'downloader' },
              { name: t.features, id: 'features' },
              { name: t.faq, id: 'faq' }
            ].map((item) => (
              <a 
                key={item.id}
                href={`#${item.id}`} 
                className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/50 hover:text-white transition-colors relative group/link"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 transition-all group-hover/link:w-full" />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2 sm:gap-4">
            <a href="https://github.com" className="hidden sm:flex text-white/40 hover:text-white transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="#downloader" className="yt-premium-button !py-2 sm:!py-2.5 !px-4 sm:!px-6 !text-[9px] sm:!text-[10px] font-black italic">
              {t.start}
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
