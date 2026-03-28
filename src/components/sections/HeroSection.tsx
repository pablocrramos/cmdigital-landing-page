import Link from "next/link";
import Image from "next/image";
import { Container } from "../layout/Container";
import { InlineSection } from "../layout/InlineSection";
import { Section } from "../layout/Section";
import { Carousel } from "../molecules";
import { Button } from "../ui/button";
import copierImg from "@/img/hero/copier.png";
import manageImg from "@/img/hero/manage.png";
import digitalizationImg from "@/img/hero/digitalization.png";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
}

export function HeroSection({
  title = "Impresión y documentos,\nsin complicaciones.",
  subtitle = "CM Digital es tu aliado con equipos multifuncionales Ricoh, gestión documental y sistemas a la medida — todo con servicio completo incluido.",
}: HeroSectionProps) {
  return (
    <Section className="py-20 md:py-28">
      <Container>
        <div className="grid gap-10 md:grid-cols-2 lg:items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-(--card-border) bg-card px-3 py-1 text-xs text-muted-foreground">
              <span className="size-1.5 rounded-full bg-brand" />
              Distribuidor autorizado Ricoh
            </div>
            <h1
              className="font-medium font-heading tracking-tight leading-tight whitespace-pre-line"
              style={{ fontSize: "clamp(1.75rem, 4vw, 3.25rem)" }}
            >
              {title}
            </h1>
            <p
              className="font-sans font-normal text-muted-foreground"
              style={{ fontSize: "clamp(0.9rem, 1.5vw, 1.125rem)" }}
            >
              {subtitle}
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg" className="font-heading font-normal rounded-md">
                <Link href="/contacto">Solicitar cotización</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="font-heading font-normal rounded-md"
              >
                <Link href="/servicios/soluciones-oficina">Ver servicios →</Link>
              </Button>
            </div>
          </div>

          {/* Visual — carousel de imágenes de producto */}
          <div className="relative overflow-hidden rounded-xl border border-(--card-border) bg-card aspect-4/3">
            <Carousel
              items={[
                <div key={1} className="w-full h-full relative">
                  <Image
                    src={copierImg}
                    alt="Equipo multifuncional Ricoh"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>,
                <div key={2} className="w-full h-full relative">
                  <Image
                    src={manageImg}
                    alt="Gestión de documentos"
                    fill
                    className="object-cover"
                  />
                </div>,
                <div key={3} className="w-full h-full relative">
                  <Image
                    src={digitalizationImg}
                    alt="Digitalización de documentos"
                    fill
                    className="object-cover"
                  />
                </div>,
              ]}
              className="w-full h-full"
            />
          </div>
        </div>
      </Container>

      {/* Stats bar */}
      <Container>
        <InlineSection name_section="hero-stats" className="md:pb-0!">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              { value: "20+", label: "Años de experiencia" },
              { value: "500+", label: "Clientes activos" },
              { value: "98%", label: "Cumplimiento de SLA" },
              { value: "24h", label: "Tiempo de respuesta" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl bg-card border border-(--card-border) px-5 py-4"
              >
                <p className="font-heading font-semibold text-2xl">{stat.value}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{stat.label}</p>
              </div>
            ))}
          </div>
        </InlineSection>
      </Container>
    </Section>
  );
}
