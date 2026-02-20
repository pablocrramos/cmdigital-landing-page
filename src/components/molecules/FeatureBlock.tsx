import { cn } from "@/lib/utils";
import { Placeholder } from "./Placeholder";
import { ArrowLink } from "../atoms/ArrowLink";

interface FeatureBlockProps {
  title: string;
  description: string;
  linkText?: string;
  linkHref?: string;
  reverse?: boolean;
  className?: string;
}

export function FeatureBlock({
  title,
  description,
  linkText = "Ir al link",
  linkHref = "#",
  reverse = false,
  className,
}: FeatureBlockProps) {
  return (
    <div
      className={cn(
        "grid gap-8 md:grid-cols-2 md:items-center md:gap-12",
        reverse && "md:[&>*:first-child]:order-2",
        className
      )}
    >
      <Placeholder aspectRatio="video" />
      <div className="space-y-4">
        <h3 className="text-xl font-semibold md:text-2xl">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
        <ArrowLink href={linkHref}>{linkText}</ArrowLink>
      </div>
    </div>
  );
}
