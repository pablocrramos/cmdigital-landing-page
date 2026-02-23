export interface StatCardProps {
  value: string;
  description: string;
}

export function StatCard({ value, description }: StatCardProps) {
  return (
    <div className="flex flex-col rounded-md border border-(--card-border) bg-card p-6 min-h-50">
      <p
        className="font-heading font-medium leading-none tracking-tight"
        style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}
      >
        {value}
      </p>
      <div className="flex-1" />
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
}
