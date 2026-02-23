import { AnnouncementBar, Footer, Navbar } from "@/components/organisms";
import {
  FeaturesSection,
  HeroSection,
  MetricsSection,
  Services,
  TrustSection,
} from "@/components/sections";
import { AdditionalFeatSection } from "@/components/sections/Additionals";

export default function Home() {
  return (
    <>
      <AnnouncementBar message="¡Nuevo! Aprovecha nuestra oferta de fin de temporada. Explora más →" />
      <Navbar />
      <main>
        <HeroSection />
        <TrustSection />
        <FeaturesSection />
        <Services />
        <MetricsSection />
        <AdditionalFeatSection />
      </main>
      <Footer />
    </>
  );
}
