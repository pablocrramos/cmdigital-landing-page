import { Container } from "../layout/Container";
import { InlineSection } from "../layout/InlineSection";
import { Section } from "../layout/Section";
import { ComponentCard } from "../molecules";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
}

export function HeroSection({
  title = "Soluciones que potencializan \b Inteligencia digital para ti.",
  subtitle = "CMDigital es tu aliado con manejo de documentos, soluciones de oficina, transformación digital o incluso sistemas a la medida de tu negocio.",
}: HeroSectionProps) {
  return (
    <Section>
      <Container>
        <div className="grid gap-6 md:grid-cols-2 lg:items-center">
          {/* Content — ocupa la mitad en lg, completo en mobile */}
          <div className="space-y-4">
            <h1
              className="font-medium font-heading tracking-tight leading-tight"
              style={{ fontSize: "clamp(1.5rem, 3.5vw, 3rem)" }}
            >
              {title}
            </h1>
            <p
              className="font-sans font-normal tracking-tight text-foreground"
              style={{ fontSize: "clamp(0.875rem, 1.5vw, 1.125rem)" }}
            >
              {subtitle}
            </p>
          </div>
        </div>
      </Container>
      <Container>
        <InlineSection name_section="hero-design" className="md:pb-0!">
          <ComponentCard>Hello World</ComponentCard>
        </InlineSection>
      </Container>
    </Section>
  );
}
