# <p align="center">🚀 YETE.IO — Premium YouTube Extractor</p>

<img width="1919" height="1079" alt="image" src="https://github.com/user-attachments/assets/b54c7bef-0858-4569-bab1-e56866f1525b" />

<p align="center">
  <strong>The Ultimate High-Performance YouTube Content Extraction Tool.</strong><br>
  <em>Engineered for Speed. Designed for Precision. Powered by Modern Tech.</em>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js" />
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind" />
  <img src="https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white" alt="Framer Motion" />
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
</p>

---

## ⚡ Core Capabilities

YETE.io is not just another downloader; it's a high-performance utility designed to provide the cleanest extraction experience for YouTube content.

- **💎 Sharp 4K Extraction**: Download video in native resolutions up to 4K without quality loss.
- **🎵 Studio Audio**: Extract pristine MP3 audio at maximum 320kbps bitrate.
- **🛡️ Pure Privacy**: No tracking, no accounts. Your data remains yours.
- **📱 Mobile Optimized**: Fully responsive architecture for Android, iOS, and Desktop.
- **🌪️ Hyper Speed**: Multi-threaded extraction engine for instant processing.
- **🔒 Secure Core**: Verified safe downloads with encrypted server-side streaming.

---

## 🛠️ Technical Architecture

### The Tech Stack

- **Frontend**: [Next.js 16 (App Router)](https://nextjs.org/) for blazing fast transitions and SEO.
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/) with a custom **Glassmorphism Design System**.
- **Animations**: [Framer Motion](https://www.framer.com/motion/) for fluid, premium micro-interactions.
- **Backend**: [Next.js API Routes](https://nextjs.org/docs/app/building-your-application/routing/route-handlers) handling complex extraction logic.
- **Engine**: [@distube/ytdl-core](https://www.npmjs.com/package/@distube/ytdl-core) for reliable media parsing.
- **Icons**: [Lucide React](https://lucide.dev/) for a sharp, modern UI.

### Key Innovation: Streaming Proxy

To overcome client-side restrictions and ensure 100% reliable downloads, YETE.io implements a **Server-Side Streaming Proxy**.
Instead of serving direct YouTube URLs (which are often throttled or blocked), our engine:

1.  Fetches the stream server-side.
2.  Proxies the data through our `/api/stream` route.
3.  Injects proper `Content-Disposition` headers to force a clean, renamed download.

---

## 🚀 Getting Started

To run the YETE.io engine locally:

1.  **Clone & Install**:

    ```bash
    git clone https://github.com/your-username/yete.git
    cd yete
    npm install
    ```

2.  **Launch Dev Server**:

    ```bash
    npm run dev
    ```

3.  **Access Dashboard**:
    Open [http://localhost:3000](http://localhost:3000)

---

## 🌑 Aesthetic Identity

YETE.io follows a **"YouTube Red/White"** theme but elevated with:

- **Solid Black Backgrounds**: `#0a0a0a` for maximum contrast and focus.
- **Elegant Glassmorphism**: High-end backdrop blur effects for UI components.
- **Premium Typography**: Pairing `Outfit` (Headings) and `Plus Jakarta Sans` (Body).
- **Zero Gradients**: A clean, modern look achieved through solid geometry and subtle borders.

---
