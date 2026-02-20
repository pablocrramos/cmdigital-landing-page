"use client";

import Link from "next/link";
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

const serviciosItems = [
 {
  label: "Desarrollo Web",
  href: "#desarrollo-web",
  description: "Sitios y aplicaciones a medida",
 },
 {
  label: "Diseño UI/UX",
  href: "#diseno",
  description: "Interfaces centradas en el usuario",
 },
 {
  label: "Consultoría",
  href: "#consultoria",
  description: "Estrategia y asesoramiento digital",
 },
];

const nosotrosItems = [
 {
  label: "Equipo",
  href: "#equipo",
  description: "Conoce a las personas detrás del proyecto",
 },
 {
  label: "Historia",
  href: "#historia",
  description: "Cómo empezamos y hacia dónde vamos",
 },
 {
  label: "Valores",
  href: "#valores",
  description: "Lo que nos guía en cada decisión",
 },
];

interface NavbarProps {
 logo?: React.ReactNode;
 className?: string;
}

export function Navbar({ logo, className }: NavbarProps) {
 return (
  <header className={cn("bg-background", className)}>
   <Container>
    <nav className="flex h-14 items-center justify-between">
     {/* Logo */}
     <Link href="/" className="text-xl font-heading font-semibold">
      {logo ?? "( CM Digital )"}
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
         <NavigationMenuContent>
          <ul className="grid gap-0.5 p-0 w-64">
           {serviciosItems.map((item) => (
            <li key={item.href}>
             <NavigationMenuLink asChild>
              <Link
               href={item.href}
               className="block rounded-md p-1 hover:bg-accent transition-colors"
              >
               <div className="text-sm font-normal font-heading">
                {item.label}
               </div>
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
         <NavigationMenuTrigger className="px-6 text-sm text-foreground bg-transparent hover:text-muted-foreground data-[state=open]:text-muted-foreground">
          Nosotros
         </NavigationMenuTrigger>
         <NavigationMenuContent>
          <ul className="grid gap-1 p-0 w-64">
           {nosotrosItems.map((item) => (
            <li key={item.href}>
             <NavigationMenuLink asChild>
              <Link
               href={item.href}
               className="block rounded-md p-1 hover:bg-accent transition-colors"
              >
               <div className="text-sm font-normal font-heading">
                {item.label}
               </div>
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

        {/* Contacto (link simple) */}
        <NavigationMenuItem>
         <NavigationMenuLink asChild>
          <Link
           href="#contacto"
           className={cn(
            navigationMenuTriggerStyle(),
            "px-6 text-sm text-foreground bg-transparent hover:bg-transparent hover:text-muted-foreground",
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
       variant="default"
       size="sm"
       className="hidden md:inline-flex text-sm rounded-sm font-medium py-0.5 px-4"
      >
       Login
      </Button>

      {/* Mobile Menu */}
      <Sheet>
       <SheetTrigger asChild>
        <Button
         variant="ghost"
         size="icon-lg"
         className="md:hidden text-foreground"
        >
         <Menu className="h-5 w-5 text-foreground size-7" />
         <span className="sr-only">Abrir menú</span>
        </Button>
       </SheetTrigger>
       <SheetContent side="right" className="w-72">
        <nav className="flex flex-col mt-32">
         <div>
          {serviciosItems.map((item) => (
           <Link
            key={item.href}
            href={item.href}
            className="block px-2 py-2 text-lg hover:text-muted-foreground text-foreground transition-colors"
           >
            {item.label}
           </Link>
          ))}
         </div>
         <div>
          {nosotrosItems.map((item) => (
           <Link
            key={item.href}
            href={item.href}
            className="block px-2 py-2 text-lg hover:text-muted-foreground text-foreground transition-colors"
           >
            {item.label}
           </Link>
          ))}
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
