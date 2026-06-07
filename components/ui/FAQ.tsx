"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface FAQItem {
  q: string;
  a: string;
}

interface FAQProps {
  items: FAQItem[];
}

export default function FAQ({ items }: FAQProps) {
  const [open, setOpen] = useState<number>(0);

  return (
    <div className="grid gap-3 max-w-3xl mx-auto">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div
            key={i}
            className="bg-white border border-gray-200 rounded-md overflow-hidden"
          >
            <button
              onClick={() => setOpen(isOpen ? -1 : i)}
              className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left bg-transparent border-0 cursor-pointer"
            >
              <span className="font-display font-bold text-lg text-navy-midnight">
                {item.q}
              </span>
              <ChevronDown
                className={cn(
                  "w-5 h-5 text-orange flex-shrink-0 transition-transform duration-200",
                  isOpen && "rotate-180"
                )}
                aria-hidden="true"
              />
            </button>
            {isOpen && (
              <div className="px-6 pb-5 text-gray-600 text-base leading-relaxed">
                {item.a}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
