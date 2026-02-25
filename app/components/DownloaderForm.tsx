"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Download, Video, Music, Loader2, Play, AlertCircle, Sparkles, Zap } from "lucide-react";

type Format = "video" | "audio";
type VideoData = {
  title: string;
  channel: string;
  thumbnail: string;
  duration: number;
  views: string;
  downloadUrl: string;
  quality: string;
  ext: string;
};

interface DownloaderFormProps {
  t: any;
}

export default function DownloaderForm({ t }: DownloaderFormProps) {
  const [url, setUrl] = useState("");
  const [format, setFormat] = useState<Format>("video");
  const [loading, setLoading] = useState(false);
  const [videoData, setVideoData] = useState<VideoData | null>(null);
  const [error, setError] = useState("");
  const [processing, setProcessing] = useState(false);

  const handleFetch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url) return;
    
    setLoading(true);
    setError("");
    setVideoData(null);

    try {
      const resp = await fetch("/api/download", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url, format }),
      });
      
      if (!resp.ok) {
        const errorData = await resp.json();
        throw new Error(errorData.error || "Failed to parse video.");
      }

      const res = await resp.json();
      
      if (res.success) {
        setVideoData(res.data);
        setProcessing(true);
        
        // Trigger the download immediately for better UX
        window.location.assign(res.data.downloadUrl);
        setProcessing(false);
      }
    } catch (err: any) {
      setError(err.message || "Server connection failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const formatDuration = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <section id="downloader" className="relative -mt-16 sm:-mt-24 pb-20 sm:pb-32 z-20 px-4">
      <div className="premium-container max-w-5xl">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="elegant-card p-6 sm:p-10 md:p-16 glass-effect shadow-2xl border-white/[0.05]"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-12 sm:mb-16">
            <div>
              <div className="flex items-center gap-2 text-red-600 font-bold text-[10px] uppercase tracking-[0.3em] mb-4">
                <Sparkles className="w-3 h-4" />
                {t.badge}
              </div>
              <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-white uppercase italic">
                {t.title_1}<span className="text-red-600 not-italic">{format === 'video' ? t.title_2_video : t.title_2_audio}</span>
              </h2>
            </div>
            
            <div className="flex w-full md:w-auto p-1 bg-white/5 rounded-xl sm:rounded-2xl border border-white/10 backdrop-blur-md">
              <button 
                onClick={() => setFormat("video")}
                className={`flex-1 md:flex-none flex items-center justify-center gap-2.5 px-4 sm:px-8 py-3 rounded-lg sm:rounded-xl text-[9px] sm:text-[10px] font-bold uppercase tracking-wider transition-all ${format === 'video' ? 'bg-red-600 text-white shadow-lg shadow-red-600/20' : 'text-white/40 hover:text-white hover:bg-white/5'}`}
              >
                <Video className="w-4 h-4" /> {t.format_video}
              </button>
              <button 
                onClick={() => setFormat("audio")}
                className={`flex-1 md:flex-none flex items-center justify-center gap-2.5 px-4 sm:px-8 py-3 rounded-lg sm:rounded-xl text-[9px] sm:text-[10px] font-bold uppercase tracking-wider transition-all ${format === 'audio' ? 'bg-red-600 text-white shadow-lg shadow-red-600/20' : 'text-white/40 hover:text-white hover:bg-white/5'}`}
              >
                <Music className="w-4 h-4" /> {t.format_audio}
              </button>
            </div>
          </div>

          <form onSubmit={handleFetch} className="flex flex-col md:flex-row gap-4 mb-4">
            <div className="relative flex-1 group">
              <div className="absolute left-6 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-red-600 transition-colors pointer-events-none">
                <Search className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <input
                type="text"
                placeholder={t.placeholder}
                className="yt-premium-input !pl-16 !pr-6 !py-5 sm:!py-6 !text-base sm:!text-lg w-full"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                disabled={loading}
                required
              />
            </div>
            <button
              type="submit"
              disabled={loading || !url}
              className="yt-premium-button w-full md:w-auto !h-auto !py-5 sm:!py-6 !px-10 disabled:opacity-50 !text-[10px] sm:!text-[11px] flex items-center justify-center gap-3 shadow-xl"
            >
              {loading ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <>
                  <Zap className="w-4 h-4 sm:w-5 sm:h-5" />
                  {t.btn_initiate}
                </>
              )}
            </button>
          </form>
          <p className="text-[9px] sm:text-[10px] font-medium text-white/20 uppercase tracking-[0.2em] ml-1 mb-8 sm:mb-10">
            {t.hint}
          </p>

          <AnimatePresence>
            {error && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-red-600/10 border border-red-600/20 text-red-500 p-4 rounded-xl flex items-center gap-3 mb-8 text-xs font-medium"
              >
                <AlertCircle className="w-4 h-4" />
                <span>{error}</span>
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence mode="wait">
            {videoData && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="mt-8 sm:mt-10 pt-8 sm:pt-10 border-t border-white/10"
              >
                {processing && (
                  <div className="flex items-center gap-2 text-red-500 font-bold text-[10px] mb-4 animate-pulse">
                    <Loader2 className="w-3 h-3 animate-spin" />
                    PREPARING YOUR DOWNLOAD...
                  </div>
                )}
                <div className="flex flex-col lg:flex-row gap-8 sm:gap-10">
                  <div className="w-full lg:w-2/5">
                    <div className="rounded-xl overflow-hidden border border-white/10 aspect-video relative bg-black shadow-xl group/thumb">
                      <img 
                        src={videoData.thumbnail} 
                        alt="Thumbnail" 
                        className="w-full h-full object-cover group-hover/thumb:scale-105 transition-transform duration-700" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                      <div className="absolute bottom-4 right-4 bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-lg text-[10px] font-bold text-white border border-white/10">
                        {formatDuration(videoData.duration)}
                      </div>
                    </div>
                  </div>

                  <div className="w-full lg:w-3/5 flex flex-col justify-between py-1">
                    <div className="mb-8">
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-black font-display tracking-tight leading-tight mb-6 text-white uppercase italic">
                        {videoData.title}
                      </h3>
                      <div className="flex flex-wrap gap-6 sm:gap-10">
                        <div className="flex flex-col gap-1.5">
                          <span className="text-[9px] font-bold text-white/40 uppercase tracking-widest">{t.provider}</span>
                          <span className="text-xs font-black text-red-600 uppercase italic">{videoData.channel}</span>
                        </div>
                        <div className="flex flex-col gap-1.5">
                          <span className="text-[9px] font-bold text-white/40 uppercase tracking-widest">{t.quality}</span>
                          <span className="text-xs font-black text-white uppercase italic">{videoData.quality}</span>
                        </div>
                      </div>
                    </div>
                    
                    <a
                      href={videoData.downloadUrl}
                      download
                      className="yt-premium-button w-full !py-5 text-[10px] sm:text-[11px] justify-center gap-3 shadow-xl"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Download className="w-5 h-5" />
                      {t.btn_download} {videoData.ext.toUpperCase()} (ULTRA-HD)
                    </a>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
