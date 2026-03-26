import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/button";
import digitalizationImg from "@/img/hero/digitalization.png";

const soluciones = [
  {
    title: "Automatización de procesos",
    description:
      "Elimina tareas manuales y repetitivas con flujos de trabajo inteligentes que mueven información entre sistemas automáticamente.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        className="size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
        />
      </svg>
    ),
  },
  {
    title: "Integración con sistemas existentes",
    description:
      "Conectamos la plataforma documental con tu ERP, CRM o cualquier sistema que uses actualmente, sin interrumpir tu operación.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        className="size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v2.25A2.25 2.25 0 006 10.5zm0 9.75h2.25A2.25 2.25 0 0010.5 18v-2.25a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25V18A2.25 2.25 0 006 20.25zm9.75-9.75H18a2.25 2.25 0 002.25-2.25V6A2.25 2.25 0 0018 3.75h-2.25A2.25 2.25 0 0013.5 6v2.25a2.25 2.25 0 002.25 2.25z"
        />
      </svg>
    ),
  },
  {
    title: "Dashboards e indicadores",
    description:
      "Visualiza el desempeño de tu operación en tiempo real con reportes personalizados, gráficas y alertas configurables.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        className="size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
        />
      </svg>
    ),
  },
  {
    title: "Firma electrónica",
    description:
      "Flujos de aprobación y firma digital con validez legal, que aceleran los tiempos de ciclo de tus contratos y documentos.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        className="size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
        />
      </svg>
    ),
  },
  {
    title: "Portal de clientes y proveedores",
    description:
      "Interfaces personalizadas para que tus clientes o proveedores envíen, consulten y gestionen documentos de forma autónoma.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        className="size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
        />
      </svg>
    ),
  },
  {
    title: "Cumplimiento y auditoría",
    description:
      "Registro completo de accesos, cambios y aprobaciones para auditorías internas o externas y cumplimiento normativo.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        className="size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
        />
      </svg>
    ),
  },
];

const proceso = [
  {
    n: "01",
    title: "Diagnóstico",
    desc: "Analizamos tus procesos actuales, cuellos de botella y oportunidades de mejora.",
  },
  {
    n: "02",
    title: "Diseño de solución",
    desc: "Proponemos la arquitectura técnica y el flujo de trabajo optimizado.",
  },
  {
    n: "03",
    title: "Desarrollo e integración",
    desc: "Implementamos la solución y la conectamos con tus sistemas existentes.",
  },
  {
    n: "04",
    title: "Capacitación y go-live",
    desc: "Entrenamos a tu equipo y acompañamos el arranque hasta la operación estable.",
  },
];

export default function SistemasMedidaPage() {
  return (
    <main>
      {/* ── Hero ── */}
      <section className="bg-[#1a2e45] text-white py-16 md:py-24">
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
                <Link href="/servicios/sistemas-medida" className="text-white/80 text-sm">
                  Sistemas a la Medida
                </Link>
              </div>
              <h1
                className="font-heading font-medium leading-tight"
                style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)" }}
              >
                Automatización y sistemas adaptados a tu negocio
              </h1>
              <p className="text-white/70 text-lg leading-relaxed">
                No te adaptes a un software genérico. Desarrollamos flujos de trabajo, integraciones
                y portales a la medida de tus procesos y necesidades específicas.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button
                  asChild
                  size="lg"
                  className="bg-brand hover:bg-brand/90 font-heading font-normal rounded-md border-0"
                >
                  <Link href="/contacto">Hablar con un especialista</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="bg-transparent text-white border-white/40 hover:bg-white/10 font-heading font-normal rounded-md"
                >
                  <Link href="#soluciones">Ver soluciones →</Link>
                </Button>
              </div>
            </div>
            {/* Visual */}
            <div className="relative aspect-4/3 rounded-xl overflow-hidden border border-white/10 shadow-2xl">
              <Image
                src={digitalizationImg}
                alt="Digitalización y automatización"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* ── Soluciones ── */}
      <Section muted name_section="soluciones">
        <Container>
          <div className="space-y-10">
            <div className="max-w-xl space-y-2">
              <h2 className="font-heading font-medium text-3xl">¿Qué podemos construir para ti?</h2>
              <p className="text-muted-foreground">
                Cada empresa tiene retos únicos. Estas son las soluciones que más frecuentemente
                desarrollamos.
              </p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {soluciones.map((s) => (
                <div
                  key={s.title}
                  className="rounded-xl bg-background border border-(--card-border) p-6 space-y-3"
                >
                  <div className="size-10 rounded-lg bg-brand/10 flex items-center justify-center text-brand">
                    {s.icon}
                  </div>
                  <h3 className="font-heading font-semibold">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.description}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* ── Proceso ── */}
      <Section>
        <Container>
          <div className="space-y-10">
            <div className="max-w-xl space-y-2">
              <h2 className="font-heading font-medium text-3xl">Nuestro proceso de trabajo</h2>
              <p className="text-muted-foreground">
                Un enfoque estructurado que garantiza entregas a tiempo y resultados que funcionan.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {proceso.map((p) => (
                <div
                  key={p.n}
                  className="rounded-xl bg-card border border-(--card-border) p-6 space-y-3"
                >
                  <p className="font-heading font-bold text-3xl text-brand/30">{p.n}</p>
                  <h3 className="font-heading font-semibold">{p.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* ── Visual + texto ── */}
      <Section muted>
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="space-y-6">
              <h2 className="font-heading font-medium text-3xl leading-tight">
                Tu operación, digitalizada de principio a fin
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Combinamos el hardware de impresión de Ricoh con soluciones de software inteligente
                para crear un ecosistema digital completo: desde la captura del documento físico
                hasta su almacenamiento, aprobación y archivo automático.
              </p>
              <ul className="space-y-3">
                {[
                  "Sin interrupciones en tu operación durante la implementación",
                  "Soporte técnico post-implementación incluido",
                  "Escalable a medida que tu empresa crece",
                  "Cumplimiento con normativas de protección de datos",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm">
                    <span className="size-5 rounded-full bg-brand/10 flex items-center justify-center text-brand shrink-0 mt-0.5">
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
            <div className="rounded-xl bg-[#1a2e45] p-8 space-y-6 text-white">
              <h3 className="font-heading font-semibold text-lg">¿Por dónde empezar?</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Una consulta de diagnóstico de 30 minutos es suficiente para entender tus
                necesidades y presentarte opciones concretas.
              </p>
              <ul className="space-y-3 text-sm">
                {[
                  "Sin costo ni compromiso",
                  "Análisis del proceso actual",
                  "Propuesta preliminar en 48h",
                ].map((i) => (
                  <li key={i} className="flex items-center gap-2 text-white/80">
                    <span className="size-1.5 rounded-full bg-brand shrink-0" />
                    {i}
                  </li>
                ))}
              </ul>
              <Button
                asChild
                size="lg"
                className="w-full bg-brand hover:bg-brand/90 font-heading font-normal rounded-md border-0"
              >
                <Link href="/contacto">Agendar diagnóstico</Link>
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── CTA ── */}
      <section className="bg-[#1a2e45] py-16">
        <Container>
          <div className="flex flex-col items-center text-center gap-6">
            <h2 className="font-heading font-medium text-white text-3xl max-w-lg">
              Cuéntanos tu reto y lo resolvemos juntos
            </h2>
            <p className="text-white/70 max-w-md text-sm">
              Nuestro equipo de especialistas está listo para analizar tu caso y proponer la
              solución más eficiente.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-brand hover:bg-brand/90 font-heading font-normal rounded-md border-0"
            >
              <Link href="/contacto">Hablar con un especialista</Link>
            </Button>
          </div>
        </Container>
      </section>
    </main>
  );
}
