import { cn } from "@/lib/utils";
import { ArrowLink } from "@/components/atoms/ArrowLink";

export interface CardGhostLink {
  href: string;
  label: string;
}

interface CardProps {
  title: string;
  description: string;
  ghostLink: CardGhostLink;
  children: React.ReactNode;
  className?: string;
}

export function Card({ title, description, ghostLink, children, className }: CardProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-3 w-full h-full overflow-hidden rounded-2xl bg-card border border-(--card-border)",
        className
      )}
    >
      <div className="col-span-2 h-full lg:px-5.5 lg:py-4.5">{children}</div>
      <div className="col-span-1 flex flex-col p-8 justify-center">
        <h3 className="font-heading font-medium text-2xl leading-snug">{title}</h3>
        <p className="font-sans font-normal text-base text-muted-foreground pt-2 pb-5 leading-relaxed">
          {description}
        </p>
        <ArrowLink href={ghostLink.href}>{ghostLink.label}</ArrowLink>
      </div>
    </div>
  );
}
