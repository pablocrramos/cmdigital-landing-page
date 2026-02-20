import { ArrowLink } from "../atoms/ArrowLink";
import { Container } from "../layout/Container";
import { Section } from "../layout/Section";
import { Placeholder } from "../molecules";

interface Service {
  title: string;
  description: string;
  link: { href: string; label: string };
}

interface ServicesSectionProps {
  title?: string;
  subtitle?: string;
  services?: Service[];
}

const defaultServices: Service[] = [
  {
    title: "Manejo de documentos",
    description:
      "Optimiza el flujo de copias, escaneos e impresiones de tu empresa con equipos de alto rendimiento y soporte especializado.",
    link: { href: "#", label: "Descubre cómo lo hacemos" },
  },
  {
    title: "Soluciones de oficina",
    description:
      "Equipamos tu espacio de trabajo con tecnología pensada para que tu equipo sea más productivo desde el primer día.",
    link: { href: "#", label: "Descubre cómo lo hacemos" },
  },
  {
    title: "Sistemas a la medida",
    description:
      "Desarrollamos software adaptado a los procesos únicos de tu negocio, sin compromisos ni soluciones genéricas.",
    link: { href: "#", label: "Descubre cómo lo hacemos" },
  },
];

export function Services({
  title = "Conoce nuestros servicios",
  services = defaultServices,
}: ServicesSectionProps) {
  return (
    <Section name_section="services">
      <Container className="space-y-6">
        {/* Header */}
        <div className="max-w-xl">
          <h2
            className="font-heading font-normal tracking-tight leading-tight"
            style={{ fontSize: "clamp(1.3rem, 3vw, 1.6rem)" }}
          >
            {title}
          </h2>
        </div>

        {/* Cards grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col overflow-hidden rounded-md border border-(--card-border) bg-card"
            >
              {/* Text content */}
              <div className="flex flex-col gap-4 p-6">
                <h3 className="font-heading font-semibold text-lg">{service.title}</h3>
                <p className="text-sm text-muted-foreground">{service.description}</p>
                <ArrowLink href={service.link.href}>{service.link.label}</ArrowLink>
              </div>

              {/* Visual slot */}
              <div className="mx-4 mb-4 flex-1">
                <Placeholder aspectRatio="video" className="h-full min-h-64" />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
