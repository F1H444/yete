import { NextRequest } from "next/server";
import ytdl from "@distube/ytdl-core";

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
      options = { quality: "highestaudio", filter: "audioonly" };
      contentType = "audio/mpeg";
      ext = "mp3";
    } else {
      options = { quality: "highest", filter: (f: any) => f.container === "mp4" && f.hasVideo && f.hasAudio };
      contentType = "video/mp4";
      ext = "mp4";
    }

    const stream = ytdl(url, options);

    return new Response(stream as any, {
      headers: {
        "Content-Type": contentType,
        "Content-Disposition": `attachment; filename="${title.replace(/[^a-zA-Z0-9]/g, "_")}.${ext}"`,
        "Transfer-Encoding": "chunked",
      },
    });
  } catch (error) {
    console.error("Streaming error:", error);
    return new Response("Failed to stream content", { status: 500 });
  }
}
