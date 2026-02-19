import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-2 font-bold tracking-tight text-foreground", className)}>
      <span>Ignite</span>
    </div>
  );
}
