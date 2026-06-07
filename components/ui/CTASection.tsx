import Button from "./Button";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface CTASectionProps {
  title: string;
  body?: string;
  buttonLabel?: string;
  href?: string;
  tone?: "orange" | "navy";
  className?: string;
}

export default function CTASection({
  title,
  body,
  buttonLabel = "Schedule a Consultation",
  href = "/schedule-consultation",
  tone = "orange",
  className,
}: CTASectionProps) {
  const isOrange = tone === "orange";

  return (
    <section
      className={cn(
        "relative py-20 overflow-hidden",
        isOrange
          ? "bg-gradient-to-br from-orange-soft via-orange to-orange-burnt"
          : "bg-navy-midnight",
        className
      )}
    >
      {/* Phoenix watermark */}
      <div className="absolute right-0 top-0 w-72 h-72 opacity-[0.07] pointer-events-none select-none">
        <Image
          src="/images/phoenix-mark.png"
          alt=""
          fill
          className="object-contain object-right-top"
          aria-hidden="true"
        />
      </div>

      <div className="max-w-container mx-auto px-6 relative text-center">
        <h2 className="font-display font-extrabold text-3xl md:text-4xl text-white tracking-tight leading-tight max-w-2xl mx-auto">
          {title}
        </h2>
        {body && (
          <p className="mt-4 text-lg text-white/80 max-w-xl mx-auto leading-relaxed">
            {body}
          </p>
        )}
        <div className="mt-8 flex justify-center">
          <Button
            href={href}
            variant={isOrange ? "inverse" : "primary"}
            size="lg"
            arrow
          >
            {buttonLabel}
          </Button>
        </div>
      </div>
    </section>
  );
}
