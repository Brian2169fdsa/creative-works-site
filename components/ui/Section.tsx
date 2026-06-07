import { cn } from "@/lib/utils";

interface SectionProps {
  tone?: "white" | "cloud" | "navy";
  id?: string;
  children: React.ReactNode;
  className?: string;
  pad?: string;
}

export default function Section({
  tone = "white",
  id,
  children,
  className,
  pad,
}: SectionProps) {
  const tones = {
    white: "bg-white",
    cloud: "bg-cloud",
    navy: "bg-navy-midnight text-white",
  };

  return (
    <section
      id={id}
      className={cn(tones[tone], pad || "py-24", className)}
    >
      <div className="max-w-container mx-auto px-6">{children}</div>
    </section>
  );
}
