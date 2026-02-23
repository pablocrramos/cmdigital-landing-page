import Image, { StaticImageData } from "next/image";
import { Container } from "../layout/Container";
import { Section } from "../layout/Section";

import AcreLogo from "@/img/logos/acre.svg";
import RedexpressLogo from "@/img/logos/redexpress.svg";
import NuevoleonLogo from "@/img/logos/nuevoleon.svg";
import InovaLogo from "@/img/logos/inova_logo.svg";
import MagnaLogo from "@/img/logos/magna.svg";
import FanasaLogo from "@/img/logos/fanasa.svg";
import JaverLogo from "@/img/logos/javer.svg";
import UanlLogo from "@/img/logos/uanl.svg";

interface Logo {
  src: StaticImageData;
  alt: string;
}

const defaultLogos: Logo[] = [
  { src: AcreLogo, alt: "Acre" },
  { src: RedexpressLogo, alt: "Red Express" },
  { src: NuevoleonLogo, alt: "Nuevo León" },
  { src: InovaLogo, alt: "Inova" },
  { src: MagnaLogo, alt: "Magna" },
  { src: FanasaLogo, alt: "Fanasa" },
  { src: JaverLogo, alt: "Javer" },
  { src: UanlLogo, alt: "UANL" },
];

interface TrustSectionProps {
  title?: string;
  logos?: Logo[];
}

export function TrustSection({
  title = "Confiados por marcas que construyen el futuro",
  logos = defaultLogos,
}: TrustSectionProps) {
  return (
    <Section>
      <Container>
        <p
          className="mb-8 text-center text-foreground"
          style={{ fontSize: "clamp(0.875rem, 1.5vw, 1.125rem)" }}
        >
          {title}
        </p>
        <div className="grid w-full gap-3 grid-cols-[repeat(auto-fill,minmax(9rem,1fr))]">
          {logos.map((logo) => (
            <div
              key={logo.alt}
              className="flex items-center justify-center rounded-md border border-(--card-border) bg-card px-5 py-5"
            >
              <div className="relative h-8 w-full">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  className="object-contain object-center"
                />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
