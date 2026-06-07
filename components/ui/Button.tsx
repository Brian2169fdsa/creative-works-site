import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps {
  href?: string;
  variant?: "primary" | "secondary" | "inverse";
  size?: "sm" | "md" | "lg";
  arrow?: boolean;
  className?: string;
  children: React.ReactNode;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}

export default function Button({
  href,
  variant = "primary",
  size = "md",
  arrow = false,
  className,
  children,
  disabled,
  type = "button",
  onClick,
}: ButtonProps) {
  const base =
    "inline-flex items-center gap-2 font-semibold rounded-pill transition-all duration-200 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-offset-2";

  const variants = {
    primary:
      "bg-orange hover:bg-orange-burnt text-white shadow-cta disabled:opacity-50 disabled:cursor-not-allowed",
    secondary:
      "bg-white text-navy-midnight border border-navy-500 hover:bg-cloud disabled:opacity-50",
    inverse:
      "bg-white/10 text-white border border-white/30 hover:bg-white/20 disabled:opacity-50",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-5 py-2.5 text-sm",
    lg: "px-7 py-3.5 text-base",
  };

  const classes = cn(base, variants[variant], sizes[size], className);

  const content = (
    <>
      {children}
      {arrow && <span aria-hidden="true">→</span>}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} disabled={disabled} onClick={onClick} className={classes}>
      {content}
    </button>
  );
}
