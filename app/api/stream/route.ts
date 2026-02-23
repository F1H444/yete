import { NextRequest } from "next/server";
import ytdl from "@distube/ytdl-core";
import { Readable } from "stream";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const url = searchParams.get("url");
    const format = searchParams.get("format");
    const title = searchParams.get("title") || "download";

    if (!url || !ytdl.validateURL(url)) {
      return new Response("Invalid URL", { status: 400 });
    }

    const info = await ytdl.getInfo(url);
    
    let options: any = {};
    let contentType = "";
    let ext = "";

    if (format === "audio") {
      // Find the best audio format explicitly to avoid issues
      const audioFormat = ytdl.filterFormats(info.formats, "audioonly").sort((a, b) => {
        return (b.audioBitrate || 0) - (a.audioBitrate || 0);
      })[0];
      
      if (!audioFormat) {
        return new Response("Audio format not found", { status: 404 });
      }

      options = { format: audioFormat };
      contentType = "audio/mpeg";
      ext = "mp3";
    } else {
      const videoFormat = ytdl.filterFormats(info.formats, (f: any) => f.container === "mp4" && f.hasVideo && f.hasAudio).sort((a, b) => {
        return (b.height || 0) - (a.height || 0);
      })[0];

      if (!videoFormat) {
        return new Response("Video format not found", { status: 404 });
      }

      options = { format: videoFormat };
      contentType = "video/mp4";
      ext = "mp4";
    }

    const nodeStream = ytdl(url, options);
    // Convert Node.js Readable stream to Web ReadableStream for Next.js consistency
    const webStream = Readable.toWeb(nodeStream);

    return new Response(webStream as any, {
      headers: {
        "Content-Type": contentType,
        "Content-Disposition": `attachment; filename="${title.replace(/[^a-zA-Z0-9]/g, "_")}.${ext}"`,
      },
    });
  } catch (error) {
    console.error("Streaming error:", error);
    return new Response("Failed to stream content", { status: 500 });
  }
}
