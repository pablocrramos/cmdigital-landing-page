import { Container } from "../layout/Container";
import { Section } from "../layout/Section";

interface TrustSectionProps {
  title?: string;
  logoCount?: number;
}

export function TrustSection({
  title = "Confiados por marcas que construyen el futuro",
  logoCount = 8,
}: TrustSectionProps) {
  return (
    <Section>
      <Container>
        <p
          className="mb-8 text-center text-foreground"
          style={{ fontSize: "clamp(0.875rem, 1.5vw, 1.125rem)" }}
        >
          {title}
        </p>
        <div className="grid w-full gap-3 grid-cols-[repeat(auto-fill,minmax(9rem,1fr))]">
          {" "}
          {Array.from({ length: logoCount }).map((_, i) => (
            <div
              key={i}
              className="flex w-full items-center justify-center rounded-md border border-(--card-border) bg-card py-4"
              aria-label={`Logo ${i + 1}`}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
