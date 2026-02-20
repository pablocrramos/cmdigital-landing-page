import { Container } from "../layout/Container";
import { Section } from "../layout/Section";

interface TrustSectionProps {
  title?: string;
  logoCount?: number;
}

export function TrustSection({
  title = "Confiados por marcas que construyen el futuro",
  logoCount = 6,
}: TrustSectionProps) {
  return (
    <Section className="py-12">
      <Container>
        <p className="mb-8 text-center text-sm text-muted-foreground">
          {title}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {Array.from({ length: logoCount }).map((_, i) => (
            <div
              key={i}
              className="h-8 w-24 rounded bg-muted"
              aria-label={`Logo ${i + 1}`}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
