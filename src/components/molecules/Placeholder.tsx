import { cn } from "@/lib/utils";

interface PlaceholderProps {
  className?: string;
  aspectRatio?: "video" | "square" | "wide";
}

export function Placeholder({ className, aspectRatio = "video" }: PlaceholderProps) {
  const aspectClasses = {
    video: "aspect-video",
    square: "aspect-square",
    wide: "aspect-[2/1]",
  };

  return (
    <div
      className={cn(
        "w-full rounded-lg bg-muted",
        aspectClasses[aspectRatio],
        className
      )}
    />
  );
}
