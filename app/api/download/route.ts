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

    // Filter formats based on user preference
    let selectedFormat;
    if (format === "audio") {
      // Get the highest quality audio stream
      selectedFormat = ytdl.filterFormats(info.formats, "audioonly").sort((a, b) => {
        return (b.audioBitrate || 0) - (a.audioBitrate || 0);
      })[0];
    } else {
      // Get the highest quality video+audio stream (MP4)
      selectedFormat = ytdl.filterFormats(info.formats, (f) => f.container === "mp4" && f.hasVideo && f.hasAudio).sort((a, b) => {
        return (b.height || 0) - (a.height || 0);
      })[0];
    }

    if (!selectedFormat) {
      return NextResponse.json(
        { error: "Requested format could not be found for this video." },
        { status: 404 }
      );
    }

    const proxyUrl = `/api/stream?url=${encodeURIComponent(url)}&format=${format}&title=${encodeURIComponent(videoDetails.title)}`;

    return NextResponse.json({
      success: true,
      data: {
        title: videoDetails.title,
        channel: videoDetails.author.name,
        thumbnail: videoDetails.thumbnails[videoDetails.thumbnails.length - 1].url,
        duration: videoDetails.lengthSeconds,
        views: videoDetails.viewCount,
        downloadUrl: proxyUrl,
        ext: format === "audio" ? "mp3" : "mp4",
        quality: format === "audio" ? "320kbps (HQ)" : `${selectedFormat.height}p`,
      }
    });
  } catch (error: any) {
    console.error("Downloader API Error:", error);
    return NextResponse.json(
      { error: "Failed to process video. It might be age-restricted or private." },
      { status: 500 }
    );
  }
}
