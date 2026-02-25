import { NextRequest, NextResponse } from "next/server";
import ytdl from "@distube/ytdl-core";

/**
 * Handle POST request for fetching video info and providing download links.
 */
export async function POST(request: NextRequest) {
  try {
    const { url, format } = await request.json();

    if (!url || !ytdl.validateURL(url)) {
      return NextResponse.json(
        { error: "Invalid YouTube URL provided." },
        { status: 400 }
      );
    }

    // Fetch video information
    const info = await ytdl.getInfo(url);
    const videoDetails = info.videoDetails;

    if (videoDetails.isLiveContent) {
      return NextResponse.json(
        { error: "Live streams are not supported for high-quality downloads." },
        { status: 400 }
      );
    }

    // Filter formats based on user preference
    let selectedFormat;
    
    if (format === "audio") {
      // Get all audio formats
      const audioFormats = ytdl.filterFormats(info.formats, "audioonly");
      
      // Sort: Prioritize higher bitrate, then prefer mp4 container
      selectedFormat = audioFormats.sort((a, b) => {
        // Priority 1: Bitrate
        const bitrateA = a.audioBitrate || 0;
        const bitrateB = b.audioBitrate || 0;
        if (bitrateB !== bitrateA) return bitrateB - bitrateA;
        
        // Priority 2: Container (prefer mp4/m4a)
        if (a.container === 'mp4' && b.container !== 'mp4') return -1;
        if (b.container === 'mp4' && a.container !== 'mp4') return 1;
        
        return 0;
      })[0];
      
      if (!selectedFormat) {
        selectedFormat = ytdl.chooseFormat(info.formats, { quality: "highestaudio" });
      }
    } else {
      // For video, we first look for combined formats (video + audio) for simplicity and speed
      const combinedFormats = ytdl.filterFormats(info.formats, "videoandaudio");
      
      if (combinedFormats.length > 0) {
        // Sort combined formats by height, then bitrate
        selectedFormat = combinedFormats.sort((a, b) => {
          const heightA = a.height || 0;
          const heightB = b.height || 0;
          if (heightB !== heightA) return heightB - heightA;
          return (b.averageBitrate || 0) - (a.averageBitrate || 0);
        })[0];
      }
      
      // If no combined format found, or we want to ensure we get a format even if it's video-only
      // (Note: video-only would require merging for a perfect result, but here we prioritize finding *something*)
      if (!selectedFormat) {
        selectedFormat = ytdl.chooseFormat(info.formats, { quality: "highest" });
      }
    }

    if (!selectedFormat) {
      console.error("No format found for:", url, "format:", format);
      return NextResponse.json(
        { error: "Could not find a suitable format for this video." },
        { status: 404 }
      );
    }

    console.log(`Selected format for ${format}: itag=${selectedFormat.itag}, container=${selectedFormat.container}, quality=${selectedFormat.qualityLabel || selectedFormat.audioBitrate}`);

    const proxyUrl = `/api/stream?url=${encodeURIComponent(url)}&format=${format}&itag=${selectedFormat.itag}&title=${encodeURIComponent(videoDetails.title)}`;

    return NextResponse.json({
      success: true,
      data: {
        title: videoDetails.title,
        channel: videoDetails.author.name,
        thumbnail: videoDetails.thumbnails[videoDetails.thumbnails.length - 1].url,
        duration: parseInt(videoDetails.lengthSeconds),
        downloadUrl: proxyUrl,
        ext: format === "audio" ? "mp3" : (selectedFormat.container || "mp4"),
        quality: format === "audio" ? `${selectedFormat.audioBitrate}kbps` : `${selectedFormat.height}p`,
      }
    });
  } catch (error: any) {
    console.error("Downloader API Error Trace:", error.message || error);
    let errorMessage = "Failed to process video.";
    
    if (error.message?.includes("private")) errorMessage = "This video is private.";
    if (error.message?.includes("age-restricted")) errorMessage = "This video is age-restricted.";
    
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}
