"use client";

import { useState } from "react";
import { Language, translations } from "./lib/translations";
import Header from "./components/Header";
import Hero from "./components/Hero";
import DownloaderForm from "./components/DownloaderForm";
import FeatureCards from "./components/FeatureCards";
import HowItWorks from "./components/HowItWorks";
import Stats from "./components/Stats";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

/**
 * Home — Single landing page with all sections.
 */
export default function Home() {
  const t = translations["id"];

  return (
    <main className="relative min-h-screen">
      <Header t={t.nav} />
      <Hero t={t.hero} />
      <DownloaderForm t={t.downloader} />
      <FeatureCards t={t.features} />
      <Stats t={t.stats} />
      <HowItWorks t={t.how} />
      <FAQ t={t.faq} />
      <Footer t={t.footer} />
    </main>
  );
}
