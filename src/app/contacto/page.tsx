"use client";

import { useState } from "react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";

const WHATSAPP_NUMBER = "528115538428";
const SERVICES = [
  "Gestión Documental",
  "Renta de equipo multifuncional",
  "Sistemas a la Medida",
  "Soporte técnico",
  "Otro",
];

const contactInfo = [
  {
    icon: (
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
          d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
        />
      </svg>
    ),
    label: "Teléfono",
    value: "(81) 1553 8428 · (81) 1636 9486",
    href: "tel:+528115538428",
  },
  {
    icon: (
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
          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
        />
      </svg>
    ),
    label: "Correo",
    value: "admcm@cmmonterrey.com",
    href: "mailto:admcm@cmmonterrey.com",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        className="size-5"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
        />
      </svg>
    ),
    label: "Ubicación",
    value: "Monterrey Centro, Nuevo León",
    href: "#",
  },
  {
    icon: (
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
          d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    label: "Horario",
    value: "Lunes a Viernes · 9:00 – 18:00",
    href: "#",
  },
];

export default function ContactoPage() {
  const [nombre, setNombre] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [servicio, setServicio] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const lines = [
      `*Nombre:* ${nombre}`,
      empresa ? `*Empresa:* ${empresa}` : null,
      `*Email:* ${email}`,
      telefono ? `*Teléfono:* ${telefono}` : null,
      servicio ? `*Servicio de interés:* ${servicio}` : null,
      mensaje ? `*Mensaje:* ${mensaje}` : null,
    ]
      .filter(Boolean)
      .join("\n");
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines)}`;
    window.open(url, "_blank");
  };

  const inputClass =
    "w-full rounded-lg border border-(--card-border) bg-card px-4 py-2.5 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition-colors";
  const labelClass = "block text-sm font-medium font-heading mb-1.5";

  return (
    <main>
      {/* ── Hero ── */}
      <section className="bg-surface-dark text-white py-16 md:py-20">
        <Container>
          <div className="max-w-2xl space-y-4">
            <p className="text-sm text-white/60 font-heading uppercase tracking-widest">Contacto</p>
            <h1
              className="font-heading font-medium leading-tight"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              Hablemos de tus necesidades
            </h1>
            <p className="text-white/70 text-lg">
              Cuéntanos qué necesitas y te preparamos una propuesta sin costo y sin compromiso.
            </p>
          </div>
        </Container>
      </section>

      {/* ── Formulario + Info ── */}
      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-5">
            {/* Form — col-span 3 */}
            <div className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className={labelClass}>Nombre *</label>
                    <input
                      required
                      type="text"
                      placeholder="Tu nombre completo"
                      value={nombre}
                      onChange={(e) => setNombre(e.target.value)}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className={labelClass}>Empresa</label>
                    <input
                      type="text"
                      placeholder="Nombre de tu empresa"
                      value={empresa}
                      onChange={(e) => setEmpresa(e.target.value)}
                      className={inputClass}
                    />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className={labelClass}>Correo electrónico *</label>
                    <input
                      required
                      type="email"
                      placeholder="correo@empresa.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className={labelClass}>Teléfono</label>
                    <input
                      type="tel"
                      placeholder="(81) 1234 5678"
                      value={telefono}
                      onChange={(e) => setTelefono(e.target.value)}
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label className={labelClass}>Servicio de interés</label>
                  <select
                    value={servicio}
                    onChange={(e) => setServicio(e.target.value)}
                    className={inputClass}
                  >
                    <option value="">Selecciona un servicio...</option>
                    {SERVICES.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className={labelClass}>Mensaje</label>
                  <textarea
                    rows={4}
                    placeholder="Cuéntanos más sobre lo que necesitas..."
                    value={mensaje}
                    onChange={(e) => setMensaje(e.target.value)}
                    className={inputClass + " resize-none"}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2.5 rounded-lg bg-[#25D366] text-white px-6 py-3 font-heading font-medium hover:bg-[#22c55e] transition-colors"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="size-5 shrink-0">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Enviar por WhatsApp
                </button>

                <p className="text-xs text-muted-foreground text-center">
                  Al enviar, se abrirá WhatsApp con tu información para que podamos atenderte
                  directamente.
                </p>
              </form>
            </div>

            {/* Contact info — col-span 2 */}
            <div className="lg:col-span-2 space-y-6">
              <div className="space-y-2">
                <h2 className="font-heading font-semibold text-xl">Información de contacto</h2>
                <p className="text-sm text-muted-foreground">
                  También puedes escribirnos directamente o visitarnos en nuestra oficina.
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((item) => (
                  <a key={item.label} href={item.href} className="flex items-start gap-3 group">
                    <div className="size-9 shrink-0 rounded-lg bg-card border border-(--card-border) flex items-center justify-center text-muted-foreground group-hover:text-brand group-hover:border-brand/30 transition-colors">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">{item.label}</p>
                      <p className="text-sm font-medium">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* WhatsApp directo */}
              <div className="rounded-xl bg-[#25D366]/10 border border-[#25D366]/30 p-5 space-y-3">
                <p className="font-heading font-semibold text-sm">
                  ¿Prefieres escribirnos directo?
                </p>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Nuestro equipo de ventas está disponible en WhatsApp para responder tus preguntas
                  rápidamente.
                </p>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-[#25D366] text-white px-4 py-2 text-sm font-medium hover:bg-[#22c55e] transition-colors"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="size-4">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Abrir WhatsApp
                </a>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
