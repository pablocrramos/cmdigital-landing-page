import { cn } from "@/lib/utils";

interface ContainerProps {
 children: React.ReactNode;
 className?: string;
}

export function Container({ children, className }: ContainerProps) {
 return (
  <div className={cn("mx-auto w-full lg:max-w-325 md:px-6 px-4", className)}>
   {children}
  </div>
 );
}
