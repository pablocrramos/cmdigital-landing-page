"use client";

import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Container } from "../layout/Container";
import { Button } from "../ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import NavLogoMobile from "@/img/nav-icons/nav-mobile.svg";
import NavLogoWeb from "@/img/nav-icons/nav-web.svg";

const serviciosItems = [
  {
    label: "Gestión Documental",
    href: "/servicios/gestion-documental",
    description: "Digitaliza, organiza y accede a tus documentos desde cualquier lugar",
  },
  {
    label: "Soluciones de Oficina",
    href: "/servicios/soluciones-oficina",
    description: "Equipos multifuncionales Ricoh con servicio completo incluido",
  },
  {
    label: "Sistemas a la Medida",
    href: "/servicios/sistemas-medida",
    description: "Software y automatización adaptados a los procesos de tu empresa",
  },
];

interface NavbarProps {
  logo?: React.ReactNode;
  className?: string;
}

export function Navbar({ logo, className }: NavbarProps) {
  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b border-(--card-border) bg-background/95 backdrop-blur-sm",
        className
      )}
    >
      <Container>
        <nav className="flex h-14 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="block">
            {logo ?? (
              <>
                <Image
                  src={NavLogoMobile}
                  alt="CM Digital"
                  className="block md:hidden h-7 w-auto"
                />
                <Image src={NavLogoWeb} alt="CM Digital" className="hidden md:block h-8 w-auto" />
              </>
            )}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            <NavigationMenu>
              <NavigationMenuList>
                {/* Servicios */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="pr-6 text-sm text-foreground bg-transparent hover:bg-transparent hover:text-muted-foreground data-[state=open]:text-muted-foreground">
                    Servicios
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="bg-background">
                    <ul className="grid gap-0.5 p-0 w-72">
                      {serviciosItems.map((item) => (
                        <li key={item.href}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={item.href}
                              className="block rounded-md p-2 hover:text-muted-foreground transition-colors"
                            >
                              <div className="text-sm font-normal font-heading">{item.label}</div>
                              <div className="text-xs text-muted-foreground mt-0.5">
                                {item.description}
                              </div>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Nosotros */}
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link
                      href="/nosotros"
                      className={cn(
                        navigationMenuTriggerStyle(),
                        "px-6 text-sm text-foreground bg-transparent hover:bg-transparent hover:text-muted-foreground"
                      )}
                    >
                      Nosotros
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                {/* Contacto */}
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link
                      href="/contacto"
                      className={cn(
                        navigationMenuTriggerStyle(),
                        "px-6 text-sm text-foreground bg-transparent hover:bg-transparent hover:text-muted-foreground"
                      )}
                    >
                      Contacto
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-2">
            <Button
              asChild
              size="sm"
              className="hidden md:inline-flex rounded-md font-heading font-normal"
            >
              <Link href="/contacto">Solicitar cotización</Link>
            </Button>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon-lg" className="md:hidden text-foreground">
                  <Menu className="h-5 w-5 text-foreground size-7" />
                  <span className="sr-only">Abrir menú</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-72">
                <nav className="flex flex-col mt-10 gap-1">
                  <p className="px-2 py-1 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    Servicios
                  </p>
                  {serviciosItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-2 py-2 text-base hover:text-muted-foreground text-foreground transition-colors rounded-md hover:bg-card"
                    >
                      {item.label}
                    </Link>
                  ))}
                  <div className="my-2 border-t border-(--card-border)" />
                  <Link
                    href="/nosotros"
                    className="block px-2 py-2 text-base hover:text-muted-foreground text-foreground transition-colors rounded-md hover:bg-card"
                  >
                    Nosotros
                  </Link>
                  <Link
                    href="/contacto"
                    className="block px-2 py-2 text-base hover:text-muted-foreground text-foreground transition-colors rounded-md hover:bg-card"
                  >
                    Contacto
                  </Link>
                  <div className="mt-4">
                    <Button asChild className="w-full font-heading font-normal">
                      <Link href="/contacto">Solicitar cotización</Link>
                    </Button>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </Container>
    </header>
  );
}
