import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  muted?: boolean;
}

export function Section({ children, className, muted = false }: SectionProps) {
  return (
    <section
      className={cn(
        "py-16 md:py-20",
        muted && "bg-background-muted",
        className
      )}
    >
      {children}
    </section>
  );
}
