import { cn } from "@/lib/utils";

interface ImageFrameProps {
  children: React.ReactNode;
  /** Classes for the inner image container (aspect ratio, shadow). */
  className?: string;
  /** Tune accent colors for navy sections. */
  dark?: boolean;
  /** Mirror the accents when the image sits on the left of its section. */
  flip?: boolean;
}

const DOTS = Array.from({ length: 24 }, (_, i) => ({
  cx: 6 + (i % 6) * 16,
  cy: 6 + Math.floor(i / 6) * 16,
}));

export default function ImageFrame({
  children,
  className,
  dark,
  flip,
}: ImageFrameProps) {
  return (
    <div className="relative">
      {/* Offset gradient backplate */}
      <div
        aria-hidden="true"
        className={cn(
          "absolute inset-0 rounded-xl",
          flip ? "-translate-x-3 translate-y-3" : "translate-x-3 translate-y-3",
          dark
            ? "bg-gradient-to-br from-orange/45 via-orange/15 to-white/10"
            : "bg-gradient-to-br from-orange/35 via-orange/10 to-navy-midnight/10"
        )}
      />
      {/* Ring accent */}
      <div
        aria-hidden="true"
        className={cn(
          "absolute -top-5 z-10 w-20 h-20 rounded-full border-[3px] pointer-events-none",
          flip ? "-right-4" : "-left-4",
          dark ? "border-orange-soft/60" : "border-orange/40"
        )}
      />
      {/* Dot grid accent */}
      <svg
        aria-hidden="true"
        viewBox="0 0 96 60"
        className={cn(
          "absolute -bottom-5 z-10 w-24 h-[60px] pointer-events-none",
          flip ? "-left-4" : "-right-4",
          dark ? "text-white/40" : "text-orange/50"
        )}
      >
        {DOTS.map((d, i) => (
          <circle key={i} cx={d.cx} cy={d.cy} r="2.5" fill="currentColor" />
        ))}
      </svg>
      <div className={cn("relative rounded-xl overflow-hidden", className)}>
        {children}
      </div>
    </div>
  );
}
