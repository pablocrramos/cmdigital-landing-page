import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/button";
import ricohLogo from "@/img/logos/ricoh.svg";
import sharpLogo from "@/img/logos/sharp.svg";

const diferenciadores = [
  {
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
          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    title: "Distribuidor autorizado Ricoh",
    description:
      "Accede a la más reciente tecnología de equipos multifuncionales con respaldo oficial de marca.",
  },
  {
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
          d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    title: "20+ años de experiencia",
    description:
      "Dos décadas atendiendo empresas del noreste de México con soluciones de impresión y documentos.",
  },
  {
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
          d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"
        />
      </svg>
    ),
    title: "Técnicos certificados",
    description:
      "Nuestro equipo cuenta con certificaciones oficiales para el servicio y mantenimiento de equipos Ricoh.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        className="size-6"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
        />
      </svg>
    ),
    title: "Cobertura en el noreste",
    description:
      "Atendemos Monterrey y área metropolitana, así como ciudades clave del noreste de México.",
  },
  {
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
          d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
        />
      </svg>
    ),
    title: "Servicio integral",
    description:
      "Instalación, mantenimiento preventivo, refacciones, tóner y soporte — todo en un solo contrato.",
  },
  {
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
          d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605"
        />
      </svg>
    ),
    title: "Monitoreo y reportes",
    description:
      "Visibilidad en tiempo real del uso de tus equipos, alertas preventivas y reportes de consumo.",
  },
];

const valores = [
  {
    title: "Compromiso",
    description: "Nos involucramos como un socio real de tu negocio, no solo como un proveedor.",
  },
  {
    title: "Confiabilidad",
    description:
      "Cumplimos lo que prometemos. Cada contrato, cada visita de servicio, cada entrega.",
  },
  {
    title: "Innovación",
    description:
      "Adoptamos la tecnología más reciente para que nuestros clientes siempre estén a la vanguardia.",
  },
];

export default function NosotrosPage() {
  return (
    <main>
      {/* ── Hero ── */}
      <section className="bg-surface-dark text-white py-16 md:py-24">
        <Container>
          <div className="max-w-2xl space-y-4">
            <p className="text-sm text-white/60 font-heading uppercase tracking-widest">Nosotros</p>
            <h1
              className="font-heading font-medium leading-tight"
              style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)" }}
            >
              Tu aliado tecnológico en el noreste de México
            </h1>
            <p className="text-white/70 text-lg leading-relaxed">
              Somos especialistas en soluciones de impresión y gestión documental. Más de 20 años
              ayudando a las empresas a trabajar más eficientemente.
            </p>
          </div>
        </Container>
      </section>

      {/* ── Misión y Visión ── */}
      <Section>
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-xl bg-card border border-(--card-border) p-8 space-y-3">
              <div className="size-10 rounded-lg bg-brand/10 flex items-center justify-center text-brand">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  className="size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                  />
                </svg>
              </div>
              <h2 className="font-heading font-semibold text-xl">Nuestra misión</h2>
              <p className="text-muted-foreground leading-relaxed">
                Ofrecer soluciones tecnológicas integrales que optimicen los procesos documentales y
                de impresión de las empresas, con equipos de alta calidad y un servicio
                personalizado que supere las expectativas.
              </p>
            </div>
            <div className="rounded-xl bg-card border border-(--card-border) p-8 space-y-3">
              <div className="size-10 rounded-lg bg-brand/10 flex items-center justify-center text-brand">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  className="size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h2 className="font-heading font-semibold text-xl">Nuestra visión</h2>
              <p className="text-muted-foreground leading-relaxed">
                Ser el aliado tecnológico de referencia en el noreste de México, reconocidos por la
                excelencia en servicio y la confianza que generamos en cada cliente a lo largo del
                tiempo.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── Por qué elegirnos ── */}
      <Section muted name_section="diferenciadores">
        <Container>
          <div className="space-y-10">
            <div className="max-w-xl space-y-2">
              <h2 className="font-heading font-medium text-3xl">¿Por qué elegirnos?</h2>
              <p className="text-muted-foreground">
                Más de dos décadas en el mercado nos han dado la experiencia para ofrecer un
                servicio que realmente marca la diferencia.
              </p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {diferenciadores.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl bg-background border border-(--card-border) p-6 space-y-3"
                >
                  <div className="size-10 rounded-lg bg-brand/10 flex items-center justify-center text-brand">
                    {item.icon}
                  </div>
                  <h3 className="font-heading font-semibold">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* ── Valores ── */}
      <Section name_section="valores">
        <Container>
          <div className="space-y-10">
            <div className="max-w-xl space-y-2">
              <h2 className="font-heading font-medium text-3xl">Nuestros valores</h2>
              <p className="text-muted-foreground">
                Los principios que guían cada decisión y cada interacción con nuestros clientes.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-3">
              {valores.map((v, i) => (
                <div key={v.title} className="space-y-3">
                  <div className="size-8 rounded-full bg-brand flex items-center justify-center text-white text-sm font-heading font-bold">
                    {i + 1}
                  </div>
                  <h3 className="font-heading font-semibold text-lg">{v.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{v.description}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* ── Alianzas ── */}
      <Section muted name_section="alianzas">
        <Container>
          <div className="space-y-8">
            <div className="max-w-xl space-y-2">
              <h2 className="font-heading font-medium text-3xl">Nuestras alianzas</h2>
              <p className="text-muted-foreground">
                Trabajamos con las marcas líderes en tecnología de impresión y gestión documental.
              </p>
            </div>
            <div className="flex flex-wrap gap-6 items-center">
              {[
                { name: "Ricoh", logo: ricohLogo, desc: "Distribuidor autorizado oficial" },
                { name: "Sharp", logo: sharpLogo, desc: "Equipos y soluciones de oficina" },
              ].map((brand) => (
                <div
                  key={brand.name}
                  className="flex items-center gap-4 rounded-xl bg-background border border-(--card-border) px-6 py-4 min-w-64"
                >
                  <div className="relative h-8 w-24 shrink-0">
                    <Image
                      src={brand.logo}
                      alt={brand.name}
                      fill
                      className="object-contain object-left"
                    />
                  </div>
                  <div>
                    <p className="text-xs font-medium font-heading">{brand.name}</p>
                    <p className="text-xs text-muted-foreground">{brand.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* ── Equipo (placeholders) ── */}
      <Section name_section="equipo">
        <Container>
          <div className="space-y-10">
            <div className="max-w-xl space-y-2">
              <h2 className="font-heading font-medium text-3xl">Nuestro equipo</h2>
              <p className="text-muted-foreground">
                Profesionales comprometidos con entregar el mejor servicio.
              </p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { area: "Ventas", rol: "Asesor comercial" },
                { area: "Soporte", rol: "Técnico certificado Ricoh" },
                { area: "Operaciones", rol: "Coordinación de servicio" },
                { area: "Sistemas", rol: "Integración y software" },
              ].map((m) => (
                <div
                  key={m.area}
                  className="rounded-xl border border-(--card-border) overflow-hidden"
                >
                  {/* Placeholder avatar */}
                  <div className="aspect-square bg-card flex items-center justify-center">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1}
                      className="size-12 text-muted-foreground/30"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                      />
                    </svg>
                  </div>
                  <div className="p-4">
                    <p className="font-heading font-medium text-sm">{m.area}</p>
                    <p className="text-xs text-muted-foreground">{m.rol}</p>
                  </div>
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
            <h2 className="font-heading font-medium text-white text-3xl max-w-xl">
              ¿Listo para optimizar tu operación?
            </h2>
            <p className="text-white/70 max-w-md">
              Cuéntanos tus necesidades y te preparamos una propuesta sin costo ni compromiso.
            </p>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-transparent text-white border-white/40 hover:bg-white/10 font-heading font-normal rounded-md"
            >
              <Link href="/contacto">Solicitar cotización gratuita</Link>
            </Button>
          </div>
        </Container>
      </section>
    </main>
  );
}
