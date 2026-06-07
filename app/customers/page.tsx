import type { Metadata } from "next";
import Image from "next/image";
import { ExternalLink, Monitor } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import CTASection from "@/components/ui/CTASection";
import Eyebrow from "@/components/ui/Eyebrow";
import { CONSULT_HREF } from "@/lib/navigation";

export const metadata: Metadata = {
  title: "Customers | Creative Works",
  description:
    "Organizations that trust Creative Works to build their digital infrastructure, automate their operations, and strengthen the systems behind their mission.",
  openGraph: {
    title: "Customers | Creative Works",
    description: "Real partnerships. Real results. Organizations we are proud to serve.",
  },
};

const CUSTOMERS = [
  {
    name: "Phoenix Rising Window Cleaning",
    label: "customers/1",
    fullName: null,
    category: "Home Services",
    location: "Phoenix, AZ",
    services: ["Brand Development", "Website Design and Development", "Marketing", "Social Media Management", "Google Ads", "AI Development", "Automation"],
    bio: "Creative Works built Phoenix Rising Window Cleaning from the ground up as a true end-to-end partner. We developed their complete brand identity - name presence, logo, and a clean \"crystal-clear, Phoenix strong\" visual language that feels premium and local at once - then designed and built their full website, including service pages, online booking, pricing, a before/after gallery, and a service-area experience covering the entire Phoenix metro. Beyond the build, we run the whole growth engine: marketing strategy, social media management, and Google Ads campaigns that turn searches into booked jobs. And under the hood, we deployed custom AI and automation to streamline quoting, scheduling, and customer follow-up - so the team can focus on spotless glass while the back office runs itself. From brand to booking to lead generation, Phoenix Rising runs on infrastructure we designed, built, and manage end to end - the full package.",
    primaryHref: "https://phoenix-rising-web.vercel.app",
    primaryLabel: "Visit Site",
    secondaryHref: null,
    secondaryLabel: null,
    screenshot: null,
  },
  {
    name: "Cholla Behavioral Health",
    label: "customers/2",
    category: "Behavioral Health Provider",
    location: "Phoenix, AZ",
    services: ["Website Design and Development", "AI Development", "Automation"],
    bio: "Creative Works partnered with Cholla Behavioral Health to design and build their website - a clean, patient-centered digital presence that reflects Cholla's mission of bridging behavioral health, physical health, and social support through compassionate, evidence-based care. Beyond the site, we delivered custom AI and automation solutions to streamline Cholla's operations, strengthen how the team connects with prospective clients, and create faster, more seamless pathways to care. Our goal throughout was simple: give a Phoenix-based treatment provider the kind of modern, reliable digital infrastructure that lets their clinicians focus on what they do best - helping people get well.",
    primaryHref: "#",
    primaryLabel: "Visit Site",
    secondaryHref: null,
    secondaryLabel: null,
    screenshot: null,
  },
  {
    name: "ABCAC",
    label: "customers/3",
    fullName: "Arizona Board for Certification of Addiction Counselors",
    category: "Certification Board",
    location: "Arizona",
    services: ["Website Development", "Member Portal", "AI Development", "Automation"],
    bio: "Creative Works partnered with the Arizona Board for Certification of Addiction Counselors (ABCAC) to build and modernize their entire digital presence. We developed their current website along with a brand-new member portal that gives Arizona's addiction counseling professionals one trusted place to apply for certification, register for IC&RC exams, manage recertifications and CEUs, and handle credential reciprocity. We are now rolling out a fully redesigned, faster site launching soon - built on a modern Next.js and Vercel stack, cleaner, mobile-first, and built to scale with ABCAC's 1,200+ certified professionals. Beyond design and development, we delivered custom AI and automation solutions that streamline credentialing workflows, reduce manual administrative load, and create a smoother experience for both staff and applicants. Our goal was to give a respected, IC&RC-recognized certification board the kind of reliable, modern infrastructure that lets them focus on setting the standard for addiction counselor certification in Arizona.",
    primaryHref: "https://aback.org",
    primaryLabel: "Visit Current Site",
    secondaryHref: "https://abcac.vercel.app",
    secondaryLabel: "Preview New Site",
    screenshot: null,
  },
  {
    name: "Da Vinci Consulting Services",
    label: "customers/4",
    fullName: null,
    category: "Behavioral Health Consulting",
    location: "Arizona",
    services: ["Website Development", "Brand Development", "Marketing"],
    bio: "Creative Works partnered with Da Vinci Consulting Services to build their digital presence and brand from the ground up. We designed and developed their website - a clean, professional platform that clearly communicates Da Vinci's full range of behavioral healthcare consulting services, from Medicaid credentialing and Joint Commission preparation to compliance training, leadership development, and operational consulting. Beyond the build, we led brand development and marketing strategy, shaping a polished, trustworthy identity that reflects the firm's 13+ years of expertise and its reputation for results-driven, compassionate consulting. The result is a cohesive brand and online presence that positions Da Vinci as a go-to partner for behavioral health organizations looking to strengthen compliance, streamline operations, and grow sustainably.",
    primaryHref: "https://davinciconsultingservices.com",
    primaryLabel: "Visit Site",
    secondaryHref: null,
    secondaryLabel: null,
    screenshot: null,
  },
  {
    name: "Rooted Practice",
    label: "customers/5",
    fullName: null,
    category: "Clinical Resources and E-Commerce",
    location: "Nationwide",
    services: ["Website Design and Development", "Marketing"],
    bio: "Creative Works partnered with Rooted Practice to design and develop their digital storefront and lead their marketing. We built a clean, professional e-commerce experience that makes it easy for therapists, group facilitators, and recovery centers to browse and purchase Rooted Practice's research-based clinical tools - from IOP and PHP curricula and facilitator kits to grief modules, mindfulness decks, and curated psychology book collections. Alongside the build, we developed a marketing strategy that positions Rooted Practice as a trusted, trauma-informed resource used by clinicians nationwide, driving visibility, traffic, and sales across the behavioral health field. The result is a polished, credible platform that turns deep clinical expertise into ready-to-use resources behavioral health professionals can put to work the same day.",
    primaryHref: "https://www.rooted-practice.com",
    primaryLabel: "Visit Site",
    secondaryHref: null,
    secondaryLabel: null,
    screenshot: null,
  },
  {
    name: "At the Crossroads Therapy",
    label: "customers/6",
    fullName: null,
    category: "Telehealth and Counseling",
    location: "Arizona",
    services: ["Website Design and Development", "Marketing"],
    bio: "Creative Works partnered with At the Crossroads Therapy to build their website and drive their marketing. We designed and developed a warm, trustworthy telehealth platform that clearly presents their virtual counseling services - individual therapy, group counseling, CBT, and trauma-informed substance use care - with streamlined online scheduling that makes taking the first step simple. We paid special attention to the practice's mission of serving veterans, first responders, and law enforcement, shaping messaging that speaks directly to those who have spent their lives in service. On the marketing side, we built a strategy to grow the practice's reach and connect more individuals to compassionate, research-based care, anywhere they are. The result is a professional, approachable online presence built to meet people exactly where they are in their recovery journey.",
    primaryHref: "https://www.atthecrossroadstherapy.com",
    primaryLabel: "Visit Site",
    secondaryHref: null,
    secondaryLabel: null,
    screenshot: null,
  },
];

export default function CustomersPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Customers"
        title="Organizations we are proud to serve."
        lead="We partner with behavioral health organizations and mission-driven firms to build the digital infrastructure, automation, and AI solutions that let their teams focus on the work that matters most."
        primary={{ label: "Schedule a Consultation", href: CONSULT_HREF }}
        secondary={{ label: "Our Services", href: "/services" }}
        tone="cloud"
      />

      <Section>
        <div className="grid grid-cols-1 gap-20">
          {CUSTOMERS.map((customer, idx) => (
            <div
              key={customer.name}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start ${
                idx % 2 === 1 ? "lg:direction-rtl" : ""
              }`}
            >
              {/* Odd rows: screenshot on left */}
              {idx % 2 === 1 && (
                <div className="hidden lg:block">
                  <ScreenshotFrame customer={customer} />
                </div>
              )}

              {/* Content */}
              <div>
                {/* Mobile screenshot */}
                <div className="lg:hidden mb-8">
                  <ScreenshotFrame customer={customer} />
                </div>

                <Eyebrow>{customer.category}</Eyebrow>
                <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight leading-snug text-navy-midnight mt-3 mb-1">
                  {customer.name}
                </h2>
                {customer.fullName && (
                  <p className="text-sm text-gray-500 mb-4">{customer.fullName}</p>
                )}

                <div className="flex flex-wrap gap-2 mb-5">
                  {customer.services.map((s) => (
                    <span
                      key={s}
                      className="text-xs font-semibold bg-orange/10 text-orange border border-orange/20 rounded-full px-3 py-1"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                <p className="text-base text-gray-600 leading-relaxed mb-7">{customer.bio}</p>

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
                </div>
              </div>

              {/* Even rows: screenshot on right */}
              {idx % 2 === 0 && (
                <div className="hidden lg:block">
                  <ScreenshotFrame customer={customer} />
                </div>
              )}
            </div>
          ))}
        </div>
      </Section>

      <Section tone="cloud">
        <SectionHeading
          align="center"
          eyebrow="Growing Every Year"
          title="More partnerships coming soon."
          lead="We are proud to work alongside organizations across behavioral health, certification, and consulting. More client stories are on the way."
          className="mb-0"
        />
      </Section>

      <CTASection
        title="Ready to become a customer?"
        body="Schedule a consultation and let us show you what we can build together."
        buttonLabel="Schedule a Consultation"
        href={CONSULT_HREF}
      />
    </>
  );
}

function ScreenshotFrame({
  customer,
}: {
  customer: (typeof CUSTOMERS)[0];
}) {
  return (
    <div className="relative">
      {/* Orange accent arc */}
      <div
        aria-hidden="true"
        className="absolute -top-4 -right-4 w-24 h-24 rounded-full border-[3px] border-orange opacity-50 pointer-events-none z-10"
      />
      {/* Browser chrome frame */}
      <div className="rounded-xl overflow-hidden shadow-card border border-gray-200">
        {/* Browser bar */}
        <div className="bg-gray-100 border-b border-gray-200 px-4 py-2.5 flex items-center gap-3">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <div className="w-3 h-3 rounded-full bg-yellow-400" />
            <div className="w-3 h-3 rounded-full bg-green-400" />
          </div>
          <div className="flex-1 bg-white rounded-md px-3 py-1 text-xs text-gray-400 font-mono truncate border border-gray-200">
            {customer.primaryHref && customer.primaryHref !== "#"
              ? customer.primaryHref.replace("https://", "")
              : customer.name.toLowerCase().replace(/\s+/g, "") + ".com"}
          </div>
        </div>
        {/* Screenshot area */}
        <div className="relative bg-gradient-to-br from-cloud to-gray-100 aspect-[16/10] flex flex-col items-center justify-center gap-3">
          <Monitor className="w-12 h-12 text-gray-300" aria-hidden="true" />
          <div className="text-center px-6">
            <p className="text-sm font-semibold text-gray-400">{customer.name}</p>
            <p className="text-xs text-gray-300 mt-1">Screenshot coming soon</p>
            <p className="text-xs font-mono text-orange/60 mt-2 bg-orange/5 border border-orange/20 rounded px-2 py-0.5">{customer.label}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
