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
  return (
    <main className="relative min-h-screen">
      <Header />
      <Hero />
      {/* Downloader is now partially integrated into Hero or follows immediately without divider */}
      <DownloaderForm />
      <FeatureCards />
      <Stats />
      <HowItWorks />
      <FAQ />
      <Footer />
    </main>
  );
}
