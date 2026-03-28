import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/button";
import { PrinterDashboardMockup } from "@/components/molecules/PrinterDashboardMockup";
import copierImg from "@/img/hero/copier.png";
import ricohLogo from "@/img/logos/ricoh.svg";

const incluyeItems = [
  {
    title: "Equipo nuevo o seminuevo",
    desc: "Acceso a la línea completa de multifuncionales Ricoh sin inversión inicial.",
  },
  {
    title: "Instalación profesional",
    desc: "Configuración de red, drivers y conectividad a cargo de nuestros técnicos.",
  },
  {
    title: "Mantenimiento preventivo",
    desc: "Revisiones periódicas programadas para evitar fallas y maximizar la vida útil.",
  },
  {
    title: "Tóner y refacciones",
    desc: "Suministros originales incluidos. Nunca te quedarás sin tóner en un momento crítico.",
  },
  {
    title: "Soporte técnico",
    desc: "Atención telefónica y visita en sitio con tiempos de respuesta garantizados.",
  },
  {
    title: "Monitoreo remoto",
    desc: "Seguimiento en tiempo real del consumo, alertas preventivas y reportes de uso.",
  },
];

const ventajas = [
  { value: "100%", label: "Deducible de impuestos como gasto operativo" },
  { value: "24h", label: "Tiempo máximo de respuesta en sitio" },
  { value: "0", label: "Inversión inicial en equipo" },
  { value: "∞", label: "Escalabilidad según crece tu empresa" },
];

export default function SolucionesOficinaPage() {
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
                <Link href="/servicios/soluciones-oficina" className="text-white/80 text-sm">
                  Soluciones de Oficina
                </Link>
              </div>
              <h1
                className="font-heading font-medium leading-tight"
                style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)" }}
              >
                Impresión administrada, sin complicaciones
              </h1>
              <p className="text-white/70 text-lg leading-relaxed">
                Renta equipos multifuncionales Ricoh con servicio completo incluido. Nosotros nos
                encargamos de todo — tú solo enfócate en tu negocio.
              </p>
              <div className="flex items-center gap-3">
                <div className="relative h-7 w-20">
                  <Image
                    src={ricohLogo}
                    alt="Ricoh"
                    fill
                    className="object-contain object-left brightness-0 invert opacity-70"
                  />
                </div>
                <span className="text-white/40 text-sm">Distribuidor autorizado</span>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button
                  asChild
                  size="lg"
                  className="bg-brand hover:bg-brand/90 font-heading font-normal rounded-md border-0"
                >
                  <Link href="/contacto">Solicitar cotización</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="bg-transparent text-white border-white/40 hover:bg-white/10 font-heading font-normal rounded-md"
                >
                  <Link href="#que-incluye">Ver qué incluye →</Link>
                </Button>
              </div>
            </div>
            {/* Dashboard mockup */}
            <div
              className="hidden lg:block rounded-xl overflow-hidden border border-white/10 shadow-2xl"
              style={{ height: 380 }}
            >
              <PrinterDashboardMockup />
            </div>
          </div>
        </Container>
      </section>

      {/* ── Qué incluye ── */}
      <Section muted name_section="que-incluye">
        <Container>
          <div className="space-y-10">
            <div className="max-w-xl space-y-2">
              <h2 className="font-heading font-medium text-3xl">
                Todo incluido en un solo contrato
              </h2>
              <p className="text-muted-foreground">
                Sin sorpresas, sin costos ocultos. Un pago mensual fijo que cubre absolutamente
                todo.
              </p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {incluyeItems.map((item, i) => (
                <div
                  key={item.title}
                  className="rounded-xl bg-background border border-(--card-border) p-6 space-y-2"
                >
                  <div className="flex items-center gap-2">
                    <span className="size-6 rounded-full bg-brand flex items-center justify-center text-white text-xs font-heading font-bold shrink-0">
                      {i + 1}
                    </span>
                    <h3 className="font-heading font-semibold text-sm">{item.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed pl-8">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* ── Ventajas ── */}
      <Section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="space-y-6">
              <h2 className="font-heading font-medium text-3xl leading-tight">
                Renta vs. compra: la decisión inteligente
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Comprar un equipo implica una inversión fuerte, depreciación, mantenimientos
                imprevistos y quedar obsoleto en unos años. Con CM Digital accedes a tecnología de
                punta por un costo operativo fijo y deducible.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {ventajas.map((v) => (
                  <div
                    key={v.label}
                    className="rounded-xl bg-card border border-(--card-border) p-4 space-y-1"
                  >
                    <p className="font-heading font-semibold text-2xl text-brand">{v.value}</p>
                    <p className="text-xs text-muted-foreground leading-tight">{v.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative aspect-4/3 rounded-xl overflow-hidden border border-(--card-border) bg-card">
              <Image
                src={copierImg}
                alt="Equipos multifuncionales Ricoh"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </Section>

      {/* ── Cómo funciona ── */}
      <Section muted>
        <Container>
          <div className="space-y-10">
            <div className="max-w-xl space-y-2">
              <h2 className="font-heading font-medium text-3xl">Así de sencillo es empezar</h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-4">
              {[
                {
                  step: "01",
                  title: "Diagnóstico",
                  desc: "Evaluamos tus necesidades de impresión actuales sin costo.",
                },
                {
                  step: "02",
                  title: "Propuesta",
                  desc: "Te presentamos el equipo ideal y el costo mensual todo incluido.",
                },
                {
                  step: "03",
                  title: "Instalación",
                  desc: "Instalamos y configuramos el equipo en tu oficina.",
                },
                {
                  step: "04",
                  title: "Operación",
                  desc: "Nos encargamos de todo. Tú solo imprimes.",
                },
              ].map((s) => (
                <div key={s.step} className="space-y-3">
                  <p className="font-heading font-bold text-3xl text-brand/30">{s.step}</p>
                  <h3 className="font-heading font-semibold">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
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
              Deja de preocuparte por tus impresoras
            </h2>
            <p className="text-white/70 max-w-md text-sm">
              Solicita una cotización y te enviamos una propuesta personalizada en menos de 24
              horas.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-brand hover:bg-brand/90 font-heading font-normal rounded-md border-0"
            >
              <Link href="/contacto">Solicitar cotización gratuita</Link>
            </Button>
          </div>
        </Container>
      </section>
    </main>
  );
}
