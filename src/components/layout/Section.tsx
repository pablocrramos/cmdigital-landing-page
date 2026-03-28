import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  muted?: boolean;
  dark?: boolean;
  name_section?: string;
}

export function Section({
  children,
  className,
  muted = false,
  dark = false,
  name_section,
}: SectionProps) {
  return (
    <section
      className={cn(
        "py-16 md:py-20",
        muted && "bg-background-muted",
        dark && "bg-surface-dark text-white",
        className
      )}
      data-section-name={name_section}
    >
      {children}
    </section>
  );
}
