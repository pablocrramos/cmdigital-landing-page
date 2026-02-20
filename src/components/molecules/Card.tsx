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
        "grid grid-cols-3 w-full h-full overflow-hidden rounded-xl bg-card border border-(--card-border)",
        className
      )}
    >
      <div className="col-span-2">{children}</div>

      <div className="col-span-1 flex flex-col gap-4 p-6">
        <h3 className="font-heading font-semibold text-xl">{title}</h3>
        <p className="text-muted-foreground text-sm">{description}</p>
        <ArrowLink href={ghostLink.href}>{ghostLink.label}</ArrowLink>
      </div>
    </div>
  );
}
