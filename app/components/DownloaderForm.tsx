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

export default function DownloaderForm() {
  const [url, setUrl] = useState("");
  const [format, setFormat] = useState<Format>("video");
  const [loading, setLoading] = useState(false);
  const [videoData, setVideoData] = useState<VideoData | null>(null);
  const [error, setError] = useState("");

  const handleFetch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url) return;
    
    setLoading(true);
    setError("");
    setVideoData(null);

    try {
      const resp = await fetch("/api/download", {
        method: "POST",
        body: JSON.stringify({ url, format }),
      });
      const res = await resp.json();
      
      if (res.success) {
        setVideoData(res.data);
        // Direct Download Logic: Start downloading immediately
        const link = document.createElement("a");
        link.href = res.data.downloadUrl;
        // The server already sets the correct filename in the header,
        // but we can set it here too as a fallback.
        link.setAttribute("download", `${res.data.title}.${res.data.ext}`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } else {
        setError(res.error || "Failed to parse video. Check your URL.");
      }
    } catch (err) {
      setError("Server connection failed. Please try again.");
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
    <section id="downloader" className="relative -mt-16 pb-32 z-20">
      <div className="premium-container max-w-5xl">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="elegant-card p-10 sm:p-16 glass-effect shadow-2xl border-white/[0.05]"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-10 mb-16">
            <div>
              <div className="flex items-center gap-2 text-red-600 font-bold text-[10px] uppercase tracking-[0.3em] mb-4">
                <Sparkles className="w-3 h-4" />
                PREMIUM EXTRACTION TOOL
              </div>
              <h2 className="text-4xl sm:text-5xl font-black font-display tracking-tight text-white uppercase italic">
                READY TO <span className="text-red-600 not-italic">SAVE?</span>
              </h2>
            </div>
            
            <div className="flex p-1.5 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-md">
              <button 
                onClick={() => setFormat("video")}
                className={`flex items-center gap-2.5 px-8 py-3 rounded-xl text-[10px] font-bold uppercase tracking-wider transition-all ${format === 'video' ? 'bg-red-600 text-white shadow-lg shadow-red-600/20' : 'text-white/40 hover:text-white hover:bg-white/5'}`}
              >
                <Video className="w-4 h-4" /> Video
              </button>
              <button 
                onClick={() => setFormat("audio")}
                className={`flex items-center gap-2.5 px-8 py-3 rounded-xl text-[10px] font-bold uppercase tracking-wider transition-all ${format === 'audio' ? 'bg-red-600 text-white shadow-lg shadow-red-600/20' : 'text-white/40 hover:text-white hover:bg-white/5'}`}
              >
                <Music className="w-4 h-4" /> Audio
              </button>
            </div>
          </div>

          <form onSubmit={handleFetch} className="relative mb-4 group">
            <div className="absolute left-7 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-red-600 transition-colors pointer-events-none">
              <Search className="w-6 h-6" />
            </div>
            <input
              type="text"
              placeholder="Enter YouTube URL here..."
              className="yt-premium-input !pl-20 !pr-48 !py-6 !text-lg"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              disabled={loading}
              required
            />
            <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center h-full py-3">
              <button
                type="submit"
                disabled={loading || !url}
                className="yt-premium-button !h-full !px-10 disabled:opacity-50 !text-[10px] flex items-center justify-center gap-3"
              >
                {loading ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <>
                    <Zap className="w-4 h-4" />
                    INITIATE
                  </>
                )}
              </button>
            </div>
          </form>
          <p className="text-[10px] font-medium text-white/20 uppercase tracking-[0.2em] ml-1 mb-10">
            Paste your link above to start high-speed extraction.
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
                className="mt-10 pt-10 border-t border-white/10"
              >
                <div className="flex flex-col lg:flex-row gap-10">
                  <div className="lg:w-2/5">
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

                  <div className="lg:w-3/5 flex flex-col justify-between py-1">
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-black font-display tracking-tight leading-tight mb-6 text-white uppercase italic">
                        {videoData.title}
                      </h3>
                      <div className="flex gap-10 mb-8">
                        <div className="flex flex-col gap-1.5">
                          <span className="text-[9px] font-bold text-white/40 uppercase tracking-widest">Provider</span>
                          <span className="text-xs font-black text-red-600 uppercase italic">{videoData.channel}</span>
                        </div>
                        <div className="flex flex-col gap-1.5">
                          <span className="text-[9px] font-bold text-white/40 uppercase tracking-widest">Quality</span>
                          <span className="text-xs font-black text-white uppercase italic">{videoData.quality}</span>
                        </div>
                      </div>
                    </div>
                    
                    <a
                      href={videoData.downloadUrl}
                      download
                      className="yt-premium-button w-full !py-5 text-[11px] justify-center gap-3 shadow-xl"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Download className="w-5 h-5" />
                      DOWNLOAD {videoData.ext.toUpperCase()} (ULTRA-HD)
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
