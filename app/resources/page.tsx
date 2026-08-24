import type { Metadata } from "next";
import Link from "next/link";
import {
  Megaphone, FolderCog, ShieldCheck, Users, RefreshCw, Compass,
  CloudCog, FileText,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import CTASection from "@/components/ui/CTASection";
import Eyebrow from "@/components/ui/Eyebrow";
import Button from "@/components/ui/Button";
import NewsletterForm from "@/components/NewsletterForm";
import { RESOURCES } from "@/lib/site-content";
import { CONSULT_HREF } from "@/lib/navigation";

export const metadata: Metadata = {
  title: "Resources and Insights | Behavioral Health Leaders",
  description:
    "Practical insights for behavioral health leaders, guidance on marketing, SharePoint, IT, staffing, operations, and leadership from Phoenix Creative Works.",
  openGraph: {
    title: "Resources and Insights | Phoenix Creative Works",
    description: "Practical insights for behavioral health leaders.",
  },
};

const CATS = [
  { name: "Marketing", icon: Megaphone },
  { name: "SharePoint", icon: FolderCog },
  { name: "IT Services", icon: ShieldCheck },
  { name: "Staffing", icon: Users },
  { name: "Operations", icon: RefreshCw },
  { name: "BH Leadership", icon: Compass },
];

const CATEGORY_ICONS: Record<string, LucideIcon> = {
  Marketing: Megaphone,
  SharePoint: FolderCog,
  IT: ShieldCheck,
  "IT Services": ShieldCheck,
  Staffing: Users,
  Operations: RefreshCw,
  "BH Leadership": Compass,
  Salesforce: CloudCog,
};

const featured = RESOURCES.find((r) => r.featured);
const articles = RESOURCES.filter((r) => !r.featured).slice(0, 6);

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources and Insights"
        title="Practical insights for behavioral health leaders."
        lead="Guidance on the systems behind care, marketing, SharePoint, IT, staffing, operations, and leadership. Written for the people doing the work."
        tone="cloud"
        align="center"
      />

      {/* Featured Article */}
      {featured && (
        <Section>
          <Link
            href={`/resources/${featured.slug}`}
            className="no-underline grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-white border border-gray-200 rounded-xl shadow-card p-8 hover:shadow-lg transition-shadow"
          >
            <div className="relative rounded-lg overflow-hidden aspect-[5/3.4] bg-cloud flex items-center justify-center">
              {(() => {
                const CategoryIcon = CATEGORY_ICONS[featured.category] || FileText;
                return (
                  <div className="w-24 h-24 rounded-2xl bg-orange/10 border border-orange/20 flex items-center justify-center">
                    <CategoryIcon className="w-12 h-12 text-orange/50" aria-hidden="true" />
                  </div>
                );
              })()}
            </div>
            <div>
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.06em] text-white bg-orange rounded-pill px-3 py-1.5">
                Featured · {featured.category}
              </span>
              <h2 className="font-display font-extrabold text-2xl md:text-3xl text-navy-midnight mt-4 leading-snug">
                {featured.title}
              </h2>
              <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                {featured.excerpt}
              </p>
              <div className="flex gap-4 mt-5 text-sm text-gray-400">
                <span>{featured.date}</span>
                <span aria-hidden="true">·</span>
                <span>{featured.readTime}</span>
              </div>
              <div className="mt-5 inline-flex items-center gap-2 text-orange font-bold">
                Read the article <span aria-hidden="true">→</span>
              </div>
            </div>
          </Link>
        </Section>
      )}

      {/* Category Navigation */}
      <Section tone="cloud">
        <SectionHeading
          align="center"
          eyebrow="Browse by Topic"
          title="Find insights for your role."
          className="mb-9"
        />
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {CATS.map((c) => (
            <a
              key={c.name}
              href="#articles"
              className="flex items-center gap-3 p-5 bg-white border border-gray-200 rounded-md shadow-xs hover:shadow-sm hover:border-orange/40 transition-all no-underline"
            >
              <c.icon
                className="w-5 h-5 text-orange flex-shrink-0"
                aria-hidden="true"
              />
              <span className="font-semibold text-sm text-navy-midnight">
                {c.name}
              </span>
            </a>
          ))}
        </div>
      </Section>

      {/* Articles Grid */}
      <Section id="articles">
        <SectionHeading
          eyebrow="Latest Articles"
          title="From the Phoenix Creative Works team."
          className="mb-10"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {articles.map((a, i) => (
            <Link
              key={i}
              href={`/resources/${a.slug}`}
              className="flex flex-col bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden hover:shadow-md hover:-translate-y-0.5 transition-all no-underline"
            >
              <div className="aspect-video bg-cloud flex items-center justify-center border-b border-gray-100">
                {(() => {
                  const CategoryIcon = CATEGORY_ICONS[a.category] || FileText;
                  return (
                    <div className="w-16 h-16 rounded-xl bg-orange/10 border border-orange/20 flex items-center justify-center">
                      <CategoryIcon className="w-8 h-8 text-orange/50" aria-hidden="true" />
                    </div>
                  );
                })()}
              </div>
              <div className="p-6 flex flex-col gap-3 flex-1">
                <span className="text-xs font-bold uppercase tracking-[0.06em] text-white bg-orange rounded-pill px-3 py-1 self-start">
                  {a.category}
                </span>
                <h3 className="font-display font-bold text-lg text-navy-midnight leading-snug">
                  {a.title}
                </h3>
                <div className="mt-auto flex gap-4 text-xs text-gray-400">
                  <span>{a.date}</span>
                  <span aria-hidden="true">·</span>
                  <span>{a.readTime}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* Newsletter CTA */}
      <Section tone="navy">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <Eyebrow inverse>Stay In The Loop</Eyebrow>
            <h2 className="font-display font-extrabold text-2xl md:text-3xl text-white mt-4">
              Insights for behavioral health leaders, in your inbox.
            </h2>
            <p className="mt-3 text-white/70">
              Occasional, practical, and never spammy. Unsubscribe anytime.
            </p>
          </div>
          <NewsletterForm />
        </div>
      </Section>

      <CTASection
        title="Prefer to just talk it through?"
        body="Schedule a consultation and we will share guidance specific to your organization."
        buttonLabel="Schedule a Consultation"
        href={CONSULT_HREF}
      />
    </>
  );
}
