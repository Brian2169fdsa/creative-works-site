"use client";

import { useState } from "react";
import Link from "next/link";
import {
  FolderCog, Megaphone, ShieldCheck, Users, RefreshCw,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface CaseStudy {
  slug: string;
  title: string;
  client: string;
  category: string;
  icon: string;
  challenge: string;
  solution: string;
  result: string;
  services: string[];
}

const ICON_MAP: Record<string, LucideIcon> = {
  FolderCog,
  Megaphone,
  ShieldCheck,
  Users,
  RefreshCw,
};

const CATS = ["All", "SharePoint", "Marketing", "IT", "Staffing", "Operations"];

function CaseCard({ c }: { c: CaseStudy }) {
  const Icon = ICON_MAP[c.icon] || FolderCog;
  return (
    <article className="flex flex-col bg-white border border-gray-200 rounded-lg shadow-card overflow-hidden h-full">
      <div className="relative aspect-video bg-cloud flex items-center justify-center">
        <div className="text-center p-6 text-gray-400">
          <Icon className="w-8 h-8 mx-auto mb-2 text-orange/40" aria-hidden="true" />
          <p className="text-xs">{c.client}, drop a project photo</p>
        </div>
        <span className="absolute top-3 left-3 text-xs font-bold uppercase tracking-[0.06em] text-white bg-orange rounded-pill px-3 py-1">
          {c.category}
        </span>
      </div>
      <div className="flex flex-col gap-4 p-6 flex-1">
        <div className="flex items-center gap-3">
          <Icon className="w-7 h-7 text-orange" aria-hidden="true" />
        </div>
        <h3 className="font-display font-bold text-xl text-navy-midnight">
          {c.client}
        </h3>
        <div className="grid gap-3">
          {(["Challenge", "Solution", "Result"] as const).map((key) => (
            <div key={key}>
              <div
                className={`text-xs font-bold uppercase tracking-[0.08em] mb-1 ${
                  key === "Result" ? "text-orange" : "text-gray-400"
                }`}
              >
                {key}
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">
                {c[key.toLowerCase() as "challenge" | "solution" | "result"]}
              </p>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-2 mt-auto pt-2">
          {c.services.map((s) => (
            <span
              key={s}
              className="text-xs font-semibold text-navy-500 bg-cloud border border-gray-200 rounded-pill px-3 py-1"
            >
              {s}
            </span>
          ))}
        </div>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 text-orange font-bold text-sm hover:text-orange-burnt transition-colors"
        >
          Discuss a similar project <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
}

export default function CaseStudiesGrid({ cases }: { cases: CaseStudy[] }) {
  const [cat, setCat] = useState("All");
  const shown = cat === "All" ? cases : cases.filter((c) => c.category === cat);

  return (
    <section className="bg-white py-24">
      <div className="max-w-container mx-auto px-6">
        <div className="flex items-center gap-3 mb-4 flex-wrap">
          <span className="text-xs font-bold uppercase tracking-[0.08em] text-gray-400 bg-cloud border border-gray-200 rounded-pill px-3 py-1">
            Sample case studies, replace with your own
          </span>
        </div>
        <div className="flex flex-wrap gap-2.5 mb-8">
          {CATS.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`font-semibold text-sm px-5 py-2.5 rounded-pill border transition-all ${
                c === cat
                  ? "bg-orange text-white border-transparent"
                  : "bg-white text-navy-midnight border-gray-300 hover:border-gray-400"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {shown.map((c) => (
            <CaseCard key={c.slug} c={c} />
          ))}
        </div>
      </div>
    </section>
  );
}
