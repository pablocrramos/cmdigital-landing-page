import { cn } from "@/lib/utils";

interface AnnouncementBarProps {
  message: string;
  className?: string;
}

export function AnnouncementBar({ message, className }: AnnouncementBarProps) {
  return (
    <div
      className={cn(
        "bg-brand px-4 py-2 text-center text-sm text-brand-foreground",
        className
      )}
    >
      {message}
    </div>
  );
}
