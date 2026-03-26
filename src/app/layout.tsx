import type { Metadata } from "next";
import { Archivo, Roboto } from "next/font/google";
import "./globals.css";
import { AnnouncementBar, Footer, Navbar } from "@/components/organisms";
import { WhatsAppButton } from "@/components/organisms/WhatsAppButton";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "CM Digital — Soluciones de impresión y gestión documental",
  description:
    "Distribuidor autorizado Ricoh en el noreste de México. Renta de equipos multifuncionales, gestión documental y sistemas a la medida para tu empresa.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${archivo.variable} ${roboto.variable} antialiased`}>
        <AnnouncementBar message="Distribuidor autorizado Ricoh · Atención en Monterrey y noreste de México — Solicita tu cotización →" />
        <Navbar />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
