import { ArrowLink } from "@/components/atoms/ArrowLink";
import { Placeholder } from "./Placeholder";

interface ServiceCardLink {
  href: string;
  label: string;
}

export interface ServiceCardProps {
  title: string;
  description: string;
  link: ServiceCardLink;
  children?: React.ReactNode;
}

export function ServiceCard({ title, description, link, children }: ServiceCardProps) {
  return (
    <div className="flex flex-col overflow-hidden rounded-sm border border-(--card-border) bg-card min-h-170 md:min-h-155 lg:min-h-140">
      <div className="flex flex-col px-6 py-4">
        <h3
          className="font-heading font-normal pb-0.5"
          style={{ fontSize: "clamp(0.8rem, 3.5vw, 1.15rem)" }}
        >
          {title}
        </h3>
        <p className="text-md text-muted-foreground pb-4">{description}</p>
        <ArrowLink href={link.href}>{link.label}</ArrowLink>
      </div>

      <div className="mx-4 mb-4 flex-1">
        {children ?? <Placeholder aspectRatio="video" className="h-full min-h-64" />}
      </div>
    </div>
  );
}
