import Image, { type StaticImageData } from "next/image";
import { Container } from "../layout/Container";
import { Section } from "../layout/Section";
import { ServiceCard } from "../molecules";
import Copier from "../../img/hero/copier.png";
import Manage from "../../img/hero/manage.png";
import Digitalization from "../../img/hero/digitalization.png";

interface Service {
  title: string;
  description: string;
  link: { href: string; label: string };
  image?: StaticImageData;
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
    image: Copier,
  },
  {
    title: "Soluciones de oficina",
    description:
      "Equipamos tu espacio de trabajo con tecnología pensada para que tu equipo sea más productivo desde el primer día.",
    link: { href: "#", label: "Descubre cómo lo hacemos" },
    image: Manage,
  },
  {
    title: "Sistemas a la medida",
    description:
      "Desarrollamos software adaptado a los procesos únicos de tu negocio, sin compromisos ni soluciones genéricas.",
    link: { href: "#", label: "Descubre cómo lo hacemos" },
    image: Digitalization,
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
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              link={service.link}
            >
              {service.image && (
                <div className="relative h-full w-full rounded-sm overflow-hidden">
                  <Image src={service.image} alt={service.title} fill className="object-cover" />
                </div>
              )}
            </ServiceCard>
          ))}
        </div>
      </Container>
    </Section>
  );
}
