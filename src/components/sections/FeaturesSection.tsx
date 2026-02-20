import { Container } from "../layout/Container";
import { Section } from "../layout/Section";
import { FeatureBlock } from "../molecules/FeatureBlock";

interface Feature {
  title: string;
  description: string;
  linkText?: string;
  linkHref?: string;
}

interface FeaturesSectionProps {
  features?: Feature[];
}

const defaultFeatures: Feature[] = [
  {
    title: "Tu negocio se mueve rápido y tus documentos no?",
    description:
      "En veces los obstáculos están en las cosas más sencillas, como el copiado, escaneo y manejo de documentos importantes.",
    linkText: "Ir al link",
    linkHref: "#",
  },
  {
    title: "En cada paso, en cada impresión",
    description:
      "CM Digital se encarga de que ahorres tiempo y recursos al momento de copiar y escanear.",
    linkText: "Ir al link",
    linkHref: "#",
  },
];

export function FeaturesSection({ features = defaultFeatures }: FeaturesSectionProps) {
  return (
    <Section muted>
      <Container className="space-y-16 md:space-y-24">
        {features.map((feature, index) => (
          <FeatureBlock
            key={index}
            title={feature.title}
            description={feature.description}
            linkText={feature.linkText}
            linkHref={feature.linkHref}
            reverse={index % 2 !== 0}
          />
        ))}
      </Container>
    </Section>
  );
}
