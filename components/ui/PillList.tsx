import { Building2 } from "lucide-react";

interface PillListProps {
  items: string[];
}

export default function PillList({ items }: PillListProps) {
  return (
    <div className="flex flex-wrap gap-3 justify-center">
      {items.map((item, i) => (
        <span
          key={i}
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border border-gray-200 rounded-pill shadow-xs font-sans font-semibold text-sm text-navy-midnight"
        >
          <Building2 className="w-4 h-4 text-orange" aria-hidden="true" />
          {item}
        </span>
      ))}
    </div>
  );
}
