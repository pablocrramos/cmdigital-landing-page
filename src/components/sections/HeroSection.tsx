import { Button } from "../ui/button";
import { Container } from "../layout/Container";
import { Section } from "../layout/Section";
import { Placeholder } from "../molecules/Placeholder";

interface HeroSectionProps {
 title?: string;
 highlight?: string;
 subtitle?: string;
 description?: string;
 ctaText?: string;
 ctaHref?: string;
}

export function HeroSection({
 title = "Soluciones que hola mundo",
 highlight = "potencializan",
 subtitle = "Inteligencia digital para ti.",
 description = "Configura tu sitio con manejo de documentos, soluciones en oficina, transformación digital y mucho más a la medida de tu negocio.",
 ctaText = "Contáctanos",
 ctaHref = "#contacto",
}: HeroSectionProps) {
 return (
  <Section>
   <Container>
    <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
     {/* Content */}
     <div className="space-y-6">
      <h1 className="text-2xl font-bold tracking-tight md:text-4xl lg:text-6xl">
       {title}
       <span className="text-brand md:text-xs"></span>
       {subtitle}
      </h1>
      <p className="text-sm text-muted-foreground md:text-md">{description}</p>
      <Button asChild className="bg-brand hover:bg-brand/90">
       <a href={ctaHref}>{ctaText}</a>
      </Button>
     </div>

     {/* Visual Placeholder */}
     <Placeholder
      aspectRatio="video"
      className="min-h-[300px] lg:min-h-[400px]"
     />
    </div>
   </Container>
  </Section>
 );
}
