import Link from "next/link";
import { type LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
}

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  href,
}: ServiceCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-card hover:-translate-y-1 hover:shadow-lg transition-all duration-200 p-7 flex flex-col gap-4">
      <div className="w-12 h-12 rounded-md bg-orange/10 border border-orange/20 flex items-center justify-center text-orange">
        <Icon className="w-6 h-6" aria-hidden="true" />
      </div>
      <h3 className="font-display font-bold text-xl text-navy-midnight">
        {title}
      </h3>
      <p className="text-gray-600 text-base leading-relaxed flex-1">
        {description}
      </p>
      <Link
        href={href}
        className="inline-flex items-center gap-2 text-orange font-bold text-sm hover:text-orange-burnt transition-colors"
      >
        Learn More <span aria-hidden="true">→</span>
      </Link>
    </div>
  );
}
