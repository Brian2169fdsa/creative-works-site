import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft, ExternalLink, Monitor, Megaphone, FolderCog, CloudCog,
  ShieldCheck, Users, RefreshCw, ListChecks, Lightbulb, BadgeCheck,
  Zap, Bot, Film, Sparkles, Globe, Printer, LayoutTemplate, Cpu,
} from "lucide-react";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import CTASection from "@/components/ui/CTASection";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { CUSTOMERS, getCustomer } from "@/lib/customers";
import { CONSULT_HREF } from "@/lib/navigation";
import type { CustomerDeliverable } from "@/lib/customers";

export function generateStaticParams() {
  return CUSTOMERS.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const customer = getCustomer(slug);
  if (!customer) return {};
  return {
    title: `${customer.name} | Creative Works`,
    description: customer.tagline,
  };
}

const TYPE_ICONS: Record<CustomerDeliverable["type"], React.ComponentType<{ className?: string }>> = {
  Print: Printer,
  Digital: LayoutTemplate,
  Web: Globe,
  Social: Megaphone,
  Brand: Sparkles,
  Operations: ListChecks,
  Staffing: Users,
  AI: Cpu,
};

const TYPE_COLORS: Record<CustomerDeliverable["type"], string> = {
  Print: "bg-blue-50 text-blue-700 border-blue-100",
  Digital: "bg-purple-50 text-purple-700 border-purple-100",
  Web: "bg-green-50 text-green-700 border-green-100",
  Social: "bg-pink-50 text-pink-700 border-pink-100",
  Brand: "bg-orange/10 text-orange border-orange/20",
  Operations: "bg-teal-50 text-teal-700 border-teal-100",
  Staffing: "bg-indigo-50 text-indigo-700 border-indigo-100",
  AI: "bg-violet-50 text-violet-700 border-violet-100",
};

const SERVICE_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  marketing: Megaphone,
  "sharepoint-setup": FolderCog,
  "salesforce-build-outs": CloudCog,
  "it-services": ShieldCheck,
  "staffing-support": Users,
  "operational-support": RefreshCw,
  "business-process-services": ListChecks,
  consulting: Lightbulb,
  licensure: BadgeCheck,
  automation: Zap,
  "ai-development": Bot,
  "video-editing": Film,
  "motion-graphics": Sparkles,
};

export default async function CustomerDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const customer = getCustomer(slug);
  if (!customer) notFound();

  return (
    <>
      {/* Hero */}
      <section className="bg-white pt-10 pb-0">
        <div className="max-w-container mx-auto px-6">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Customers", href: "/customers" },
              { label: customer.name },
            ]}
          />

          <div className="py-14 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.08em] text-orange mb-3">
                {customer.category} &middot; {customer.location}
              </p>
              <h1 className="font-display font-extrabold text-4xl md:text-5xl tracking-tight leading-tight text-navy-midnight mb-4">
                {customer.name}
                {customer.fullName && (
                  <span className="block text-xl font-medium text-gray-400 mt-2">{customer.fullName}</span>
                )}
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-7">{customer.tagline}</p>

              <div className="flex flex-wrap gap-2 mb-8">
                {customer.services.map((s) => (
                  <span
                    key={s}
                    className="text-xs font-semibold bg-orange/10 text-orange border border-orange/20 rounded-full px-3 py-1"
                  >
                    {s}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                {customer.primaryHref && customer.primaryHref !== "#" && (
                  <a
                    href={customer.primaryHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-orange text-white font-semibold rounded-pill px-5 py-2.5 text-sm hover:bg-orange/90 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" aria-hidden="true" />
                    {customer.primaryLabel}
                  </a>
                )}
                {customer.secondaryHref && (
                  <a
                    href={customer.secondaryHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border border-gray-200 text-navy-midnight font-semibold rounded-pill px-5 py-2.5 text-sm hover:border-orange hover:text-orange transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" aria-hidden="true" />
                    {customer.secondaryLabel}
                  </a>
                )}
                <Link
                  href="/customers"
                  className="inline-flex items-center gap-2 border border-gray-200 text-gray-600 font-semibold rounded-pill px-5 py-2.5 text-sm hover:border-orange hover:text-orange transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" aria-hidden="true" />
                  All Customers
                </Link>
              </div>
            </div>

            {/* Screenshot frame */}
            <div className="relative">
              <div aria-hidden="true" className="absolute -top-4 -right-4 w-24 h-24 rounded-full border-[3px] border-orange opacity-40 pointer-events-none" />
              <div className="rounded-xl overflow-hidden shadow-card border border-gray-200">
                <div className="bg-gray-100 border-b border-gray-200 px-4 py-2.5 flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <div className="flex-1 bg-white rounded-md px-3 py-1 text-xs text-gray-400 font-mono truncate border border-gray-200">
                    {customer.primaryHref && customer.primaryHref !== "#"
                      ? customer.primaryHref.replace("https://www.", "").replace("https://", "")
                      : customer.name.toLowerCase().replace(/\s+/g, "") + ".com"}
                  </div>
                </div>
                <div className="relative bg-gradient-to-br from-cloud to-gray-100 aspect-[16/10] flex flex-col items-center justify-center gap-3">
                  <Monitor className="w-12 h-12 text-gray-300" aria-hidden="true" />
                  <div className="text-center px-6">
                    <p className="text-sm font-semibold text-gray-400">{customer.name}</p>
                    <p className="text-xs text-gray-300 mt-1">Screenshot coming soon</p>
                    <p className="text-xs font-mono text-orange/60 mt-2 bg-orange/5 border border-orange/20 rounded px-2 py-0.5">
                      {customer.screenshotLabel}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results strip */}
      <section className="bg-navy-midnight py-10">
        <div className="max-w-container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {customer.results.map((r) => (
              <div key={r.label} className="text-center">
                <p className="font-display font-extrabold text-3xl text-orange">{r.stat}</p>
                <p className="text-sm text-white/60 mt-1">{r.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenge + Approach */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.08em] text-orange mb-3">The Challenge</p>
            <h2 className="font-display font-bold text-2xl text-navy-midnight mb-4">What they were up against.</h2>
            <p className="text-base text-gray-600 leading-relaxed">{customer.challenge}</p>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.08em] text-orange mb-3">Our Approach</p>
            <h2 className="font-display font-bold text-2xl text-navy-midnight mb-4">How we tackled it.</h2>
            <p className="text-base text-gray-600 leading-relaxed">{customer.approach}</p>
          </div>
        </div>
      </Section>

      {/* Overview */}
      <Section tone="cloud">
        <div className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.08em] text-orange mb-3">Partnership Overview</p>
          <p className="text-lg text-gray-700 leading-relaxed">{customer.bio}</p>
        </div>
      </Section>

      {/* The Work — Deliverables */}
      <Section>
        <SectionHeading
          eyebrow="The Work"
          title="What we built and delivered."
          lead="Every deliverable designed to move the needle — from brand and marketing materials to operational infrastructure and digital products."
          className="mb-10"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {customer.deliverables.map((d) => {
            const Icon = TYPE_ICONS[d.type] || LayoutTemplate;
            const colorClass = TYPE_COLORS[d.type];
            return (
              <div key={d.title} className="bg-white border border-gray-200 rounded-xl overflow-hidden flex flex-col">
                {/* Placeholder image area */}
                <div className="bg-gradient-to-br from-cloud to-gray-100 aspect-[4/3] flex flex-col items-center justify-center gap-2 border-b border-gray-100">
                  <Icon className="w-8 h-8 text-gray-300" aria-hidden="true" />
                  <p className="text-xs font-mono text-orange/60 bg-orange/5 border border-orange/20 rounded px-2 py-0.5">
                    {d.placeholder}
                  </p>
                </div>
                {/* Card content */}
                <div className="p-5 flex flex-col gap-2 flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-display font-bold text-base text-navy-midnight">{d.title}</h3>
                    <span className={`text-xs font-semibold border rounded-full px-2 py-0.5 flex-shrink-0 ${colorClass}`}>
                      {d.type}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 leading-relaxed">{d.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Section>

      {/* Services Used */}
      {customer.serviceslugs.length > 0 && (
        <Section tone="cloud">
          <SectionHeading
            eyebrow="Services Provided"
            title="How Creative Works supported this engagement."
            className="mb-8"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {customer.serviceslugs.map((slug) => {
              const Icon = SERVICE_ICONS[slug] || RefreshCw;
              const label = slug.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());
              return (
                <Link
                  key={slug}
                  href={`/services/${slug}`}
                  className="bg-white rounded-lg border border-gray-200 p-5 flex items-center gap-4 hover:border-orange hover:shadow-card transition-all group"
                >
                  <div className="w-10 h-10 rounded-md bg-orange/10 border border-orange/20 flex items-center justify-center text-orange group-hover:bg-orange group-hover:text-white transition-colors flex-shrink-0">
                    <Icon className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-display font-bold text-sm text-navy-midnight group-hover:text-orange transition-colors">{label}</p>
                    <p className="text-xs text-gray-400 mt-0.5">View service details →</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </Section>
      )}

      <CTASection
        title="Let us build something like this for your organization."
        body="Schedule a consultation and we will show you what Creative Works can create for you."
        buttonLabel="Schedule a Consultation"
        href={CONSULT_HREF}
      />
    </>
  );
}
