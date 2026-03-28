import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/button";
import { DocumentManagementMockup } from "@/components/molecules/DocumentManagementMockup";
import manageImg from "@/img/hero/manage.png";

const features = [
  {
    title: "Captura inteligente",
    description:
      "Digitaliza documentos físicos con reconocimiento OCR para hacerlos buscables y editables automáticamente.",
  },
  {
    title: "Organización centralizada",
    description:
      "Un solo repositorio para todos tus documentos, con carpetas, etiquetas y metadatos personalizados.",
  },
  {
    title: "Flujos de aprobación",
    description:
      "Automatiza la revisión y firma de documentos con flujos de trabajo adaptados a tus procesos.",
  },
  {
    title: "Búsqueda instantánea",
    description:
      "Encuentra cualquier documento en segundos por contenido, fecha, autor o cualquier criterio.",
  },
  {
    title: "Control de versiones",
    description:
      "Historial completo de cambios y versiones de cada documento, con trazabilidad total.",
  },
  {
    title: "Acceso seguro",
    description:
      "Permisos por usuario y por área, con cifrado y registro de actividad para cumplimiento normativo.",
  },
];

const areas = [
  {
    name: "Recursos Humanos",
    desc: "Expedientes, contratos, nómina y evaluaciones en un solo lugar.",
  },
  {
    name: "Área Legal",
    desc: "Contratos, acuerdos y documentos legales con control de versiones y fechas.",
  },
  {
    name: "Finanzas y Contabilidad",
    desc: "Facturas, estados financieros y reportes organizados y siempre disponibles.",
  },
  {
    name: "Operaciones",
    desc: "Manuales, procedimientos y registros operativos accesibles para todo el equipo.",
  },
];

export default function GestionDocumentalPage() {
  return (
    <main>
      {/* ── Hero ── */}
      <section className="bg-surface-dark text-white py-16 md:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <Link
                  href="/"
                  className="text-white/50 text-sm hover:text-white/80 transition-colors"
                >
                  Inicio
                </Link>
                <span className="text-white/30 text-sm">›</span>
                <Link href="/servicios/gestion-documental" className="text-white/80 text-sm">
                  Gestión Documental
                </Link>
              </div>
              <h1
                className="font-heading font-medium leading-tight"
                style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)" }}
              >
                Gestión Documental inteligente para tu empresa
              </h1>
              <p className="text-white/70 text-lg leading-relaxed">
                Olvídate del papel desorganizado y los archivos perdidos. Centraliza, digitaliza y
                controla todos tus documentos desde una sola plataforma.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button
                  asChild
                  size="lg"
                  className="bg-brand hover:bg-brand/90 font-heading font-normal rounded-md border-0"
                >
                  <Link href="/contacto">Solicitar demo gratuito</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="bg-transparent text-white border-white/40 hover:bg-white/10 font-heading font-normal rounded-md"
                >
                  <Link href="#como-funciona">Ver cómo funciona →</Link>
                </Button>
              </div>
            </div>
            {/* Mini mockup preview */}
            <div
              className="hidden lg:block rounded-xl overflow-hidden border border-white/10 shadow-2xl"
              style={{ height: 380 }}
            >
              <DocumentManagementMockup />
            </div>
          </div>
        </Container>
      </section>

      {/* ── Qué incluye ── */}
      <Section muted name_section="como-funciona">
        <Container>
          <div className="space-y-10">
            <div className="max-w-xl space-y-2">
              <h2 className="font-heading font-medium text-3xl">¿Qué incluye el servicio?</h2>
              <p className="text-muted-foreground">
                Una solución completa que cubre todo el ciclo de vida de tus documentos.
              </p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((f) => (
                <div
                  key={f.title}
                  className="rounded-xl bg-background border border-(--card-border) p-6 space-y-2"
                >
                  <div className="size-2 rounded-full bg-brand" />
                  <h3 className="font-heading font-semibold">{f.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{f.description}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* ── Visual + texto ── */}
      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="relative aspect-4/3 rounded-xl overflow-hidden border border-(--card-border) bg-card">
              <Image src={manageImg} alt="Gestión de documentos" fill className="object-cover" />
            </div>
            <div className="space-y-6">
              <h2 className="font-heading font-medium text-3xl leading-tight">
                Del papel al digital en un solo paso
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Nuestros equipos multifuncionales Ricoh trabajan directamente con la plataforma de
                gestión documental: escanea, indexa y archiva automáticamente sin pasos intermedios.
              </p>
              <ul className="space-y-3">
                {[
                  "Integración directa con equipos Ricoh",
                  "Compatible con ERP y sistemas existentes",
                  "Implementación en menos de 2 semanas",
                  "Capacitación incluida para tu equipo",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm">
                    <span className="size-5 rounded-full bg-brand/10 flex items-center justify-center text-brand shrink-0">
                      <svg viewBox="0 0 16 16" fill="none" className="size-3">
                        <path
                          d="M3 8l3.5 3.5L13 4.5"
                          stroke="currentColor"
                          strokeWidth={1.5}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── Áreas que beneficia ── */}
      <Section muted>
        <Container>
          <div className="space-y-8">
            <div className="max-w-xl space-y-2">
              <h2 className="font-heading font-medium text-3xl">Ideal para cualquier área</h2>
              <p className="text-muted-foreground">
                La gestión documental beneficia a toda la organización.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {areas.map((area) => (
                <div
                  key={area.name}
                  className="rounded-xl bg-background border border-(--card-border) p-5 space-y-2"
                >
                  <h3 className="font-heading font-semibold text-sm">{area.name}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{area.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* ── CTA ── */}
      <section className="bg-surface-dark py-16">
        <Container>
          <div className="flex flex-col items-center text-center gap-6">
            <h2 className="font-heading font-medium text-white text-3xl max-w-lg">
              ¿Listo para transformar la gestión de tus documentos?
            </h2>
            <p className="text-white/70 max-w-md text-sm">
              Agenda una demo sin costo y te mostramos cómo funciona con los procesos de tu empresa.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-brand hover:bg-brand/90 font-heading font-normal rounded-md border-0"
              >
                <Link href="/contacto">Solicitar demo gratuito</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="bg-transparent text-white border-white/40 hover:bg-white/10 font-heading font-normal rounded-md"
              >
                <Link href="/contacto">Hablar con ventas</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
