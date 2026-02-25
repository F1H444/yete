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

    const itag = searchParams.get("itag");

    const info = await ytdl.getInfo(url);
    
    let options: any = {};
    let contentType = "";
    let ext = "";

    if (itag) {
      const selectedFormat = info.formats.find(f => f.itag.toString() === itag);
      if (selectedFormat) {
        options = { format: selectedFormat };
        contentType = format === "audio" ? "audio/mpeg" : (selectedFormat.container === "mp4" ? "video/mp4" : "video/webm");
        ext = format === "audio" ? "mp3" : (selectedFormat.container || "mp4");
        console.log(`Direct stream via itag ${itag}: ${contentType}`);
      }
    } 

    if (!options.format) {
      // Fallback logic if itag not found or not provided
      if (format === "audio") {
        const audioFormat = ytdl.chooseFormat(info.formats, { quality: "highestaudio" });
        if (!audioFormat) return new Response("Audio format not found", { status: 404 });
        options = { format: audioFormat };
        contentType = "audio/mpeg";
        ext = "mp3";
      } else {
        const videoFormat = ytdl.filterFormats(info.formats, "videoandaudio").sort((a, b) => (b.height || 0) - (a.height || 0))[0];
        if (!videoFormat) return new Response("Video format not found", { status: 404 });
        options = { format: videoFormat };
        contentType = videoFormat.container === "mp4" ? "video/mp4" : "video/webm";
        ext = videoFormat.container || "mp4";
      }
    }

    const nodeStream = ytdl(url, {
      ...options,
      // Optimize for speed and reliability
      requestOptions: {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
        }
      }
    });

    const webStream = Readable.toWeb(nodeStream);

    const safeTitle = title.replace(/[^\x20-\x7E]/g, "").replace(/[\\/:*?"<>|]/g, "_");
    const encodedTitle = encodeURIComponent(safeTitle);

    const headers: Record<string, string> = {
      "Content-Type": contentType,
      "Content-Disposition": `attachment; filename*=UTF-8''${encodedTitle}.${ext}`,
      "Cache-Control": "public, max-age=3600",
    };

    // If we have content length from the format, add it to headers for a progress bar
    if (options.format?.contentLength) {
      headers["Content-Length"] = options.format.contentLength;
    }

    return new Response(webStream as any, { headers });
  } catch (error: any) {
    console.error("Streaming error Trace:", error.message || error);
    return new Response(`Error: ${error.message}`, { status: 500 });
  }
}
