import { cn } from "@/lib/utils";

interface EyebrowProps {
  children: React.ReactNode;
  className?: string;
  inverse?: boolean;
}

export default function Eyebrow({ children, className, inverse }: EyebrowProps) {
  return (
    <div className={cn("flex flex-col items-start gap-2", className)}>
      <div
        className={cn(
          "w-11 h-[3px] rounded-full",
          inverse ? "bg-orange-soft" : "bg-orange"
        )}
      />
      <span
        className={cn(
          "text-xs font-bold uppercase tracking-[0.08em] font-sans",
          inverse ? "text-orange-soft" : "text-orange"
        )}
      >
        {children}
      </span>
    </div>
  );
}
