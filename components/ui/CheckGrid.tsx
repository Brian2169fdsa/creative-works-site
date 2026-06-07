import { cn } from "@/lib/utils";
import { CheckCircle2, AlertCircle, type LucideIcon } from "lucide-react";

type CheckItem = string | { title: string; desc?: string };

interface CheckGridProps {
  items: CheckItem[];
  columns?: 1 | 2 | 3;
  icon?: "check" | "alert";
  inverse?: boolean;
}

export default function CheckGrid({
  items,
  columns = 2,
  icon = "check",
  inverse = false,
}: CheckGridProps) {
  const Icon: LucideIcon = icon === "alert" ? AlertCircle : CheckCircle2;

  const gridCols = {
    1: "grid-cols-1",
    2: "grid-cols-1 sm:grid-cols-2",
    3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
  };

  return (
    <div className={cn("grid gap-x-8 gap-y-4", gridCols[columns])}>
      {items.map((item, i) => {
        const obj = typeof item === "string" ? { title: item } : item;
        return (
          <div key={i} className="flex gap-3">
            <Icon
              className="w-5 h-5 text-orange flex-shrink-0 mt-0.5"
              aria-hidden="true"
            />
            <div>
              <span
                className={cn(
                  "font-semibold text-base",
                  inverse ? "text-white" : "text-navy-midnight",
                  obj.desc ? "font-bold" : ""
                )}
              >
                {obj.title}
              </span>
              {obj.desc && (
                <p
                  className={cn(
                    "text-sm mt-0.5 leading-snug",
                    inverse ? "text-white/70" : "text-gray-600"
                  )}
                >
                  {obj.desc}
                </p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
