import { AnnouncementBar, Navbar } from "@/components/organisms";
import { FeaturesSection, HeroSection, TrustSection } from "@/components/sections";

export default function Home() {
  return (
    <>
      <AnnouncementBar message="¡Nuevo! Aprovecha nuestra oferta de fin de temporada. Explora más →" />
      <Navbar />
      <main>
        <HeroSection />
        <TrustSection />
        <FeaturesSection />
      </main>
    </>
  );
}
