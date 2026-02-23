import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "YeTe | YouTube Downloader",
  description: "Fast, Bold, Functional YouTube MP3/MP4 Downloader.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased selection:bg-red-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
