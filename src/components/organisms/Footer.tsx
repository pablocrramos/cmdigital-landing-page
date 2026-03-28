import Link from "next/link";
import Image from "next/image";
import { Container } from "../layout/Container";
import NavLogoWeb from "@/img/nav-icons/nav-web.svg";

const footerNav = [
  {
    label: "Servicios",
    links: [
      { label: "Gestión Documental", href: "/servicios/gestion-documental" },
      { label: "Soluciones de Oficina", href: "/servicios/soluciones-oficina" },
      { label: "Sistemas a la Medida", href: "/servicios/sistemas-medida" },
    ],
  },
  {
    label: "Contacto",
    links: [
      { label: "Solicitar cotización", href: "/contacto" },
      { label: "WhatsApp", href: "https://wa.me/528115538428" },
    ],
  },
  {
    label: "Empresa",
    links: [{ label: "Nosotros", href: "/nosotros" }],
  },
];

export function Footer() {
  return (
    <footer className="relative bg-surface-dark text-white overflow-hidden">
      <Container className="relative z-10">
        {/* Main row */}
        <div className="flex flex-col gap-10 py-16 md:pb-28 pt-16 md:flex-row md:justify-between">
          {/* Brand */}
          <div className="max-w-xs space-y-3">
            <Link href="/" className="block">
              <Image
                src={NavLogoWeb}
                alt="CM Digital"
                className="h-8 w-auto brightness-0 invert opacity-80"
              />
            </Link>
            <h2 className="text-xl font-medium text-white/50 leading-relaxed">
              Servicios digitales sin fricción. <br />
              Crecemos contigo.
            </h2>
          </div>
          {/* Nav columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {footerNav.map((group) => (
              <div key={group.label} className="space-y-3">
                <p className="font-heading text-sm font-medium text-white">{group.label}</p>
                <ul className="space-y-2">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-white/50 transition-colors hover:text-white"
                        {...(link.href.startsWith("http")
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        {/* Bottom bar */}
        <div className="flex flex-col gap-2 py-16 text-sm text-white/40 sm:flex-row sm:justify-between" />
      </Container>

      {/* Large watermark text — Superhuman style */}
      <div
        aria-hidden="true"
        className="pointer-events-none select-none absolute bottom-0 left-0 right-0 z-0 overflow-hidden"
      >
        <p
          className="font-heading font-bold text-center whitespace-nowrap text-white/6 leading-none"
          style={{ fontSize: "clamp(3rem, 15vw, 14rem)" }}
        >
          CMDIGITAL
        </p>
      </div>
    </footer>
  );
}
