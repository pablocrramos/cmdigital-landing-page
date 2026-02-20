import { cn } from "@/lib/utils";
import Link from "next/link";

interface ArrowLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export function ArrowLink({ href, children, className }: ArrowLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center gap-1 font-medium text-brand hover:underline",
        className
      )}
    >
      {children}
      <span aria-hidden="true">→</span>
    </Link>
  );
}
