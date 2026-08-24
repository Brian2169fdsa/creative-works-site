import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  Megaphone, FolderCog, ShieldCheck, Users, RefreshCw, Compass,
  CloudCog, FileText,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { RESOURCES } from "@/lib/site-content";
import Section from "@/components/ui/Section";
import CTASection from "@/components/ui/CTASection";
import Breadcrumb from "@/components/ui/Breadcrumb";
import Button from "@/components/ui/Button";
import { CONSULT_HREF } from "@/lib/navigation";

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

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return RESOURCES.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const resource = RESOURCES.find((r) => r.slug === slug);
  if (!resource) return {};
  return {
    title: resource.title,
    description: resource.excerpt,
    openGraph: {
      title: `${resource.title} | Creative Works`,
      description: resource.excerpt,
    },
  };
}

export default async function ResourceArticlePage({ params }: Props) {
  const { slug } = await params;
  const resource = RESOURCES.find((r) => r.slug === slug);
  if (!resource) notFound();

  const related = RESOURCES.filter(
    (r) => r.slug !== slug && r.category === resource.category
  ).slice(0, 3);

  return (
    <>
      {/* Article Hero */}
      <section className="bg-cloud py-16">
        <div className="max-w-container mx-auto px-6">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Resources", href: "/resources" },
              { label: resource.title },
            ]}
          />
          <div className="max-w-3xl">
            <span className="inline-flex items-center text-xs font-bold uppercase tracking-[0.06em] text-white bg-orange rounded-pill px-3 py-1.5 mb-5">
              {resource.category}
            </span>
            <h1 className="font-display font-extrabold text-4xl md:text-5xl tracking-tight leading-tight text-navy-midnight">
              {resource.title}
            </h1>
            <div className="flex gap-4 mt-5 text-sm text-gray-500">
              <span>{resource.date}</span>
              <span aria-hidden="true">·</span>
              <span>{resource.readTime}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Image Placeholder */}
      <Section pad="pt-10 pb-0">
        <div className="max-w-3xl mx-auto aspect-[16/9] rounded-xl bg-cloud border border-gray-200 flex items-center justify-center">
          {(() => {
            const CategoryIcon = CATEGORY_ICONS[resource.category] || FileText;
            return (
              <div className="w-24 h-24 rounded-2xl bg-orange/10 border border-orange/20 flex items-center justify-center">
                <CategoryIcon className="w-12 h-12 text-orange/50" aria-hidden="true" />
              </div>
            );
          })()}
        </div>
      </Section>

      {/* Article Body */}
      <Section>
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 leading-relaxed font-medium">
              {resource.excerpt}
            </p>
            <p className="text-gray-600 leading-relaxed">
              Behavioral health organizations operate under unique pressures.
              Every system, process, and tool decision has downstream effects on
              staff capacity, care quality, and mission sustainability. This
              article explores practical approaches your team can apply
              immediately, without a large budget or dedicated technical staff.
            </p>
            <h2 className="font-display font-bold text-2xl text-navy-midnight mt-8 mb-4">
              Where to Begin
            </h2>
            <p className="text-gray-600 leading-relaxed">
              The most effective organizations we work with share one trait:
              they start with clarity. Before investing in new tools or hiring
              consultants, they take time to understand what is actually broken
              and why. This foundation changes everything.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Start by asking your team where they lose the most time. Not where
              they think the problem is, but where time actually disappears.
              Common answers include document retrieval, staff onboarding, and
              communication gaps between programs.
            </p>

            {/* Pull Quote */}
            <blockquote className="border-l-4 border-orange pl-6 my-8">
              <p className="text-xl font-display font-semibold text-navy-midnight italic leading-snug">
                &ldquo;The organizations that make the most progress are the
                ones willing to look honestly at how work actually happens,
                before trying to improve it.&rdquo;
              </p>
            </blockquote>

            <h2 className="font-display font-bold text-2xl text-navy-midnight mt-8 mb-4">
              Practical Next Steps
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Once you have identified your highest-friction areas, the next
              step is documentation. Not a formal audit, just a clear description
              of how things work today. This single exercise typically surfaces
              three to five improvement opportunities that can be acted on
              immediately.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Creative Works helps behavioral health organizations do exactly
              this through our Discovery and Operations Assessment. In four to
              six weeks, we review your systems, staffing, marketing, and
              operations, and deliver a prioritized roadmap your team can act on
              right away.
            </p>
          </div>

          <div className="mt-12 p-8 bg-cloud border border-gray-200 rounded-xl">
            <h3 className="font-display font-bold text-xl text-navy-midnight mb-3">
              Want guidance specific to your organization?
            </h3>
            <p className="text-gray-600 mb-5">
              Schedule a consultation and we will apply these insights directly
              to your team&apos;s situation.
            </p>
            <Button href={CONSULT_HREF} arrow size="lg">
              Schedule a Consultation
            </Button>
          </div>
        </div>
      </Section>

      {/* Related Articles */}
      {related.length > 0 && (
        <Section tone="cloud">
          <h2 className="font-display font-bold text-2xl text-navy-midnight mb-8">
            Related Articles
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {related.map((r) => (
              <Link
                key={r.slug}
                href={`/resources/${r.slug}`}
                className="flex flex-col bg-white border border-gray-200 rounded-lg p-6 gap-3 hover:shadow-md hover:-translate-y-0.5 transition-all no-underline"
              >
                <span className="text-xs font-bold uppercase tracking-[0.06em] text-white bg-orange rounded-pill px-3 py-1 self-start">
                  {r.category}
                </span>
                <h3 className="font-display font-bold text-base text-navy-midnight leading-snug">
                  {r.title}
                </h3>
                <div className="text-xs text-gray-400 mt-auto">
                  {r.date} · {r.readTime}
                </div>
              </Link>
            ))}
          </div>
        </Section>
      )}

      <CTASection
        title="Ready to apply these insights?"
        body="Schedule a consultation and let us help you strengthen the systems behind your care."
        buttonLabel="Schedule a Consultation"
        href={CONSULT_HREF}
      />
    </>
  );
}
