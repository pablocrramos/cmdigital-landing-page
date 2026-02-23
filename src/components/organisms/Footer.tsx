import Link from "next/link";
import { Container } from "../layout/Container";

const footerNav = [
  {
    label: "Servicios",
    links: [
      { label: "Desarrollo Web", href: "#desarrollo-web" },
      { label: "Diseño UI/UX", href: "#diseno" },
      { label: "Consultoría", href: "#consultoria" },
    ],
  },
  {
    label: "Nosotros",
    links: [
      { label: "Equipo", href: "#equipo" },
      { label: "Historia", href: "#historia" },
      { label: "Valores", href: "#valores" },
    ],
  },
  {
    label: "Contacto",
    links: [{ label: "Hablar con ventas", href: "#contacto" }],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-(--card-border) bg-background">
      <Container>
        {/* Main row */}
        <div className="flex flex-col gap-10 py-12 md:flex-row md:justify-between">
          {/* Brand */}
          <div className="max-w-xs space-y-2">
            <Link href="/" className="font-heading font-semibold text-lg">
              ( CM Digital )
            </Link>
            <p className="text-sm text-muted-foreground">
              Soluciones digitales que potencializan tu negocio.
            </p>
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
        <div className="border-t border-(--card-border) py-6 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} CM Digital. Todos los derechos reservados.</p>
        </div>
      </Container>
    </footer>
  );
}
