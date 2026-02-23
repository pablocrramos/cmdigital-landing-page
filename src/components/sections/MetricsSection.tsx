import { ArrowLink } from "../atoms/ArrowLink";
import { Container } from "../layout/Container";
import { Section } from "../layout/Section";
import { BrandCard, BrandCardProps, StatCard, StatCardProps } from "../molecules";

interface MetricsSectionProps {
  brandsTitle?: string;
  brands?: BrandCardProps[];
  statsTitle?: string;
  stats?: StatCardProps[];
  statsLink?: { href: string; label: string };
}

const defaultBrands: BrandCardProps[] = [
  {
    name: "Ricoh",
    description: "Empresa líder en la industria de los equipos multifuncionales.",
  },
  {
    name: "Ricoh",
    description: "Empresa líder en la industria de los equipos multifuncionales.",
  },
];

const defaultStats: StatCardProps[] = [
  { value: "25 años", description: "Creciendo en la industria de impresión." },
  { value: "9,500+", description: "Equipos instalados en todo Mexico." },
  { value: "Top 10", description: "Empresas mayor rendimiento por Ricoh." },
  { value: "10%", description: "Estados en los que estamos presentes." },
];

export function MetricsSection({
  brandsTitle = "Contamos con las mejores marcas",
  brands = defaultBrands,
  statsTitle = "Nuestros números no mienten",
  stats = defaultStats,
  statsLink = { href: "#", label: "Conoce nuestra historia" },
}: MetricsSectionProps) {
  return (
    <Section name_section="metrics">
      <Container className="space-y-12">
        {/* Brands */}
        <div className="space-y-6">
          <p
            className="text-center text-muted-foreground"
            style={{ fontSize: "clamp(0.875rem, 1.5vw, 1.125rem)" }}
          >
            {brandsTitle}
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {brands.map((brand, index) => (
              <BrandCard key={index} {...brand} />
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="space-y-6">
          <h2
            className="font-heading font-medium tracking-tight leading-tight"
            style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}
          >
            {statsTitle}
          </h2>
          <div className="grid gap-4 grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <StatCard key={index} {...stat} />
            ))}
          </div>
          <ArrowLink href={statsLink.href}>{statsLink.label}</ArrowLink>
        </div>
      </Container>
    </Section>
  );
}
