import Link from "next/link";
import { CONSULT_HREF } from "@/lib/navigation";

export default function AnyVerticalNote() {
  return (
    <section className="max-w-container mx-auto px-6 py-8">
      <div className="rounded-xl border border-orange/20 bg-orange/5 px-8 py-7 flex flex-col md:flex-row items-start md:items-center gap-5 md:gap-10">
        <div className="flex-1">
          <p className="text-xs font-bold uppercase tracking-[0.08em] text-orange mb-2">
            Behavioral Health Experts. Open to Every Vertical.
          </p>
          <p className="text-base text-navy-midnight leading-relaxed">
            Our deepest expertise is in behavioral health — we know the workflows, the compliance landscape, and the operational realities of care-delivery organizations inside and out. But the systems challenges mission-driven organizations face are remarkably consistent across verticals. If you are working in a field we have not listed, we would love to talk. Chances are, we can help.
          </p>
        </div>
        <Link
          href={CONSULT_HREF}
          className="flex-shrink-0 inline-flex items-center gap-2 bg-orange text-white font-semibold rounded-pill px-6 py-3 text-sm hover:bg-orange/90 transition-colors whitespace-nowrap"
        >
          Let&apos;s Talk &rarr;
        </Link>
      </div>
    </section>
  );
}
