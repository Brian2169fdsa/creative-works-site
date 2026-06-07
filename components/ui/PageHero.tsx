import Image from "next/image";
import { cn } from "@/lib/utils";
import Button from "./Button";
import Eyebrow from "./Eyebrow";
import Breadcrumb from "./Breadcrumb";

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  lead?: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
  breadcrumb?: { label: string; href?: string }[];
  tone?: "cloud" | "white" | "navy";
  image?: string;
  imageAlt?: string;
  placeholder?: string;
  align?: "left" | "center";
}

export default function PageHero({
  eyebrow,
  title,
  lead,
  primary,
  secondary,
  breadcrumb,
  tone = "cloud",
  image,
  imageAlt,
  align,
}: PageHeroProps) {
  const dark = tone === "navy";
  const bg =
    tone === "navy"
      ? "bg-navy-midnight"
      : tone === "white"
      ? "bg-white"
      : "bg-cloud";

  const hasMedia = !!image;
  const centered = align === "center" || !hasMedia;

  return (
    <section className={cn(bg, "py-20 relative overflow-hidden")}>
      {dark && (
        <div className="absolute right-0 top-0 w-72 h-72 opacity-[0.06] pointer-events-none">
          <Image
            src="/images/phoenix-mark.png"
            alt=""
            fill
            className="object-contain object-right-top"
            aria-hidden="true"
          />
        </div>
      )}
      <div className="max-w-container mx-auto px-6 relative">
        <div
          className={cn(
            "grid gap-12 items-center",
            hasMedia ? "grid-cols-1 lg:grid-cols-2" : "grid-cols-1",
            centered && !hasMedia ? "text-center max-w-3xl mx-auto" : ""
          )}
        >
          <div>
            {breadcrumb && <Breadcrumb items={breadcrumb} />}
            {eyebrow && (
              <div
                className={cn(
                  centered && !hasMedia ? "flex justify-center" : ""
                )}
              >
                <Eyebrow inverse={dark}>{eyebrow}</Eyebrow>
              </div>
            )}
            <h1
              className={cn(
                "font-display font-extrabold tracking-tight leading-tight",
                "text-4xl md:text-5xl lg:text-[3.25rem]",
                eyebrow ? "mt-4" : "mt-0",
                dark ? "text-white" : "text-navy-midnight"
              )}
            >
              {title}
            </h1>
            {lead && (
              <p
                className={cn(
                  "mt-5 text-xl leading-relaxed max-w-2xl",
                  dark ? "text-white/70" : "text-gray-600",
                  centered && !hasMedia ? "mx-auto" : ""
                )}
              >
                {lead}
              </p>
            )}
            {(primary || secondary) && (
              <div
                className={cn(
                  "flex flex-wrap gap-4 mt-8",
                  centered && !hasMedia ? "justify-center" : ""
                )}
              >
                {primary && (
                  <Button href={primary.href} size="lg" arrow>
                    {primary.label}
                  </Button>
                )}
                {secondary && (
                  <Button
                    href={secondary.href}
                    variant={dark ? "inverse" : "secondary"}
                    size="lg"
                    arrow
                  >
                    {secondary.label}
                  </Button>
                )}
              </div>
            )}
          </div>

          {image && (
            <div className="relative rounded-xl overflow-hidden aspect-[5/3.4] shadow-lg">
              <Image
                src={image}
                alt={imageAlt || ""}
                fill
                className="object-cover"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
