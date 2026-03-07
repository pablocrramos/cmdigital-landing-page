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
        "grid grid-cols-3 w-full h-full overflow-hidden rounded-md bg-card border border-(--card-border)",
        className
      )}
    >
      <div className="col-span-2 lg:px-5.5 lg:py-4.5">{children}</div>
      <div className="col-span-1 flex flex-col p-6 justify-center">
        <h3 className="font-heading font-medium text-2xl">{title}</h3>
        <p className="font-heading font-normal text-2xl text-muted-foreground pb-4">
          {description}
        </p>
        <ArrowLink href={ghostLink.href}>{ghostLink.label}</ArrowLink>
      </div>
    </div>
  );
}
