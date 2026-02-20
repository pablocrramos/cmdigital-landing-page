import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function ComponentCard({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-3 w-full h-full overflow-hidden rounded-sm bg-card border border-(--card-border)",
        className
      )}
    >
      <div className="col-span-2">{children}</div>
    </div>
  );
}
