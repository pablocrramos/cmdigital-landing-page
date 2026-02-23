import { cn } from "@/lib/utils";

interface InlineSectionProps {
  children: React.ReactNode;
  className?: string;
  muted?: boolean;
  name_section?: string;
}

export function InlineSection({
  children,
  className,
  muted = false,
  name_section,
}: InlineSectionProps) {
  return (
    <section
      className={cn("py-12 md:py-10", muted && "bg-background-muted", className)}
      data-section-name={name_section}
    >
      {children}
    </section>
  );
}
