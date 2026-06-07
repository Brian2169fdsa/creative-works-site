import { cn } from "@/lib/utils";
import Eyebrow from "./Eyebrow";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  lead?: string;
  align?: "left" | "center";
  inverse?: boolean;
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "left",
  inverse = false,
  className,
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <div
      className={cn(
        "mb-10",
        centered ? "text-center" : "text-left",
        className
      )}
    >
      {eyebrow && (
        <div className={cn(centered && "flex justify-center")}>
          <Eyebrow inverse={inverse}>{eyebrow}</Eyebrow>
        </div>
      )}
      <h2
        className={cn(
          "font-display font-extrabold tracking-tight leading-tight",
          "text-3xl md:text-4xl lg:text-[2.5rem]",
          eyebrow ? "mt-4" : "mt-0",
          inverse ? "text-white" : "text-navy-midnight"
        )}
      >
        {title}
      </h2>
      {lead && (
        <p
          className={cn(
            "mt-4 text-lg leading-relaxed max-w-2xl",
            inverse ? "text-white/70" : "text-gray-600",
            centered && "mx-auto"
          )}
        >
          {lead}
        </p>
      )}
    </div>
  );
}
