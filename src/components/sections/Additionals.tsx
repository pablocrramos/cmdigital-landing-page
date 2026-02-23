import { Container } from "../layout/Container";
import { Section } from "../layout/Section";
import { Card } from "../molecules";
import { Feature } from "./FeaturesSection";

const AdditionalFeature: Feature = {
  title: "Refacciones, toner o reparacion de tu equipo de impresión?",
  description:
    "LLamanos para conocer nuestra disponibilidad para cualquier producto que necesites.",
  ghostLink: { label: "Llamar ahora", href: "#" },
};

export function AdditionalFeatSection() {
  return (
    <Section name_section="features" className="pt-14!">
      <Container className="space-y-16 md:space-y-24">
        <Card
          key={0}
          className="min-h-155 md:min-h-140 lg:min-h-118"
          title={AdditionalFeature.title}
          description={AdditionalFeature.description}
          ghostLink={AdditionalFeature.ghostLink}
        >
          Image
        </Card>
      </Container>
    </Section>
  );
}
