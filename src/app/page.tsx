import Navbar from "@/components/Navbar";
import TrustedBySection from "@/components/TrustedBySection";
import VideoSection from "@/components/VideoSection";
import Services from "@/components/Services";
import Events from "@/components/Events";
import ImpactMetrics from "@/components/ImpactMetrics";
import Footer from "@/components/Footer";
import HeroSectionOne from "@/components/ui/hero-section-demo-1";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col w-full">
      <Navbar />
      <div className="w-full">
        <HeroSectionOne />
      </div>
      <TrustedBySection />
      <VideoSection />
      <Services />
      <Events />
      <ImpactMetrics />
      <Footer />
    </div>
  );
}
