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
    <main>
      <HeroSection />
      <TrustSection />
      <FeaturesSection />
      <Services />
      <MetricsSection />
      <AdditionalFeatSection />
    </main>
  );
}
