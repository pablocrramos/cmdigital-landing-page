import { Container } from "../layout/Container";
import { Section } from "../layout/Section";
import { Card } from "../molecules";
import { CardGhostLink } from "../molecules/Card";

interface Feature {
  title: string;
  description: string;
  ghostLink: CardGhostLink;
}

interface FeaturesSectionProps {
  features?: Feature[];
}

const defaultFeatures: Feature[] = [
  {
    title: "Tu negocio se mueve rápido y tus documentos no?",
    description:
      "En veces los obstáculos están en las cosas más sencillas, como el copiado, escaneo y manejo de documentos importantes.",
    ghostLink: { label: "Descubre cómo lo solucionamos", href: "#" },
  },
  {
    title: "En cada paso, en cada impresión",
    description:
      "CM Digital se encarga de que ahorres tiempo y recursos al momento de copiar y escanear.",
    ghostLink: { label: "Descubre cómo lo solucionamos", href: "#" },
  },
];

export function FeaturesSection({ features = defaultFeatures }: FeaturesSectionProps) {
  return (
    <Section name_section="features" className="pt-14!">
      <Container className="space-y-16 md:space-y-24">
        {features.map((feature, index) => (
          <Card
            key={index}
            className="min-h-225 md:min-h-200 lg:min-h-178"
            title={feature.title}
            description={feature.description}
            ghostLink={feature.ghostLink}
          >
            Hello world
          </Card>
        ))}
      </Container>
    </Section>
  );
}
