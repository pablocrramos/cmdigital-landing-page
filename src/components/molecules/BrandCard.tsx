import { Placeholder } from "./Placeholder";

export interface BrandCardProps {
  name: string;
  description: string;
  logo?: React.ReactNode;
}

export function BrandCard({ description, logo }: BrandCardProps) {
  return (
    <div className="flex flex-col rounded-md border border-(--card-border) bg-card p-6 min-h-50">
      <div className="flex-1">
        {logo ?? <Placeholder aspectRatio="wide" className="max-w-40" />}
      </div>
      <p className="mt-4 text-sm text-muted-foreground">{description}</p>
    </div>
  );
}
