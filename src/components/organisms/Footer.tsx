import Link from "next/link";
import { Container } from "../layout/Container";

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
    label: "Empresa",
    links: [
      { label: "Nosotros", href: "/nosotros" },
      { label: "Clientes", href: "/nosotros#clientes" },
      { label: "Alianzas", href: "/nosotros#alianzas" },
    ],
  },
  {
    label: "Contacto",
    links: [
      { label: "Solicitar cotización", href: "/contacto" },
      { label: "Soporte técnico", href: "/contacto#soporte" },
      { label: "WhatsApp", href: "https://wa.me/528112345678" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-(--card-border) bg-background">
      <Container>
        {/* Main row */}
        <div className="flex flex-col gap-10 py-12 md:flex-row md:justify-between">
          {/* Brand */}
          <div className="max-w-xs space-y-3">
            <Link href="/" className="font-heading font-semibold text-lg">
              ( CM Digital )
            </Link>
            <p className="text-sm text-muted-foreground">
              Distribuidor autorizado Ricoh. Soluciones de impresión y gestión documental para
              empresas del noreste de México.
            </p>
            <p className="text-xs text-muted-foreground">Monterrey, Nuevo León · México</p>
          </div>

          {/* Nav columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {footerNav.map((group) => (
              <div key={group.label} className="space-y-3">
                <p className="font-heading text-sm font-medium">{group.label}</p>
                <ul className="space-y-2">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
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
        <div className="flex flex-col gap-2 border-t border-(--card-border) py-6 text-sm text-muted-foreground sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} CM Digital. Todos los derechos reservados.</p>
          <p>Distribuidor autorizado Ricoh</p>
        </div>
      </Container>
    </footer>
  );
}
