"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ChevronDown,
  Megaphone,
  FolderCog,
  CloudCog,
  ShieldCheck,
  Users,
  RefreshCw,
  ListChecks,
  Lightbulb,
  BadgeCheck,
  Zap,
  Bot,
  Film,
  Sparkles,
  ArrowRight,
  Building2,
  Heart,
  BookOpen,
  Phone,
  UserCircle2,
  ChevronRight,
} from "lucide-react";
import { CONSULT_HREF } from "@/lib/navigation";
import { cn } from "@/lib/utils";
import Button from "@/components/ui/Button";

/* ─── data ────────────────────────────────────────────────────────────────── */

const SERVICES_MENU = [
  {
    icon: Megaphone,
    label: "Marketing",
    tagline: "Reach more people. Grow your mission.",
    href: "/services/marketing",
  },
  {
    icon: FolderCog,
    label: "SharePoint Setup",
    tagline: "Smarter systems. Stronger collaboration.",
    href: "/services/sharepoint-setup",
  },
  {
    icon: CloudCog,
    label: "Salesforce Build-Outs",
    tagline: "A CRM built around your care model.",
    href: "/services/salesforce-build-outs",
  },
  {
    icon: ShieldCheck,
    label: "IT Services",
    tagline: "Secure, reliable technology support.",
    href: "/services/it-services",
  },
  {
    icon: Users,
    label: "Staffing Support",
    tagline: "The right people, when you need them.",
    href: "/services/staffing-support",
  },
  {
    icon: RefreshCw,
    label: "Operational Support",
    tagline: "Better processes. Better outcomes.",
    href: "/services/operational-support",
  },
  {
    icon: ListChecks,
    label: "Business Process Services",
    tagline: "Run the back office, done right.",
    href: "/services/business-process-services",
  },
  {
    icon: Lightbulb,
    label: "Consulting Services",
    tagline: "Guidance for the decisions that matter.",
    href: "/services/consulting",
  },
  {
    icon: BadgeCheck,
    label: "Licensure Services",
    tagline: "Open and stay compliant with confidence.",
    href: "/services/licensure",
  },
  {
    icon: Zap,
    label: "Automation",
    tagline: "Make, n8n, and Temporal workflows.",
    href: "/services/automation",
  },
  {
    icon: Bot,
    label: "AI Development",
    tagline: "Custom AI agents and Claude integrations.",
    href: "/services/ai-development",
  },
  {
    icon: Film,
    label: "Video Editing",
    tagline: "Professional video, polished and on brand.",
    href: "/services/video-editing",
  },
  {
    icon: Sparkles,
    label: "Motion Graphics",
    tagline: "Animation that brings brands to life.",
    href: "/services/motion-graphics",
  },
];

const INDUSTRIES_MENU = {
  featured: {
    label: "Behavioral Health Organizations",
    desc: "We focus exclusively on behavioral health, so every solution is built for the realities of mission-driven care.",
    href: "/industries/behavioral-health",
    cta: "Explore Behavioral Health",
  },
  links: [
    {
      icon: Heart,
      label: "Behavioral Health",
      desc: "Our primary industry focus.",
      href: "/industries/behavioral-health",
    },
    {
      icon: Building2,
      label: "Human Services",
      desc: "Community-based organizations.",
      href: "/industries",
    },
    {
      icon: BookOpen,
      label: "Nonprofits",
      desc: "Mission-driven organizations.",
      href: "/industries",
    },
    {
      icon: Building2,
      label: "All Industries",
      desc: "See the full picture.",
      href: "/industries",
    },
  ],
};

const ABOUT_MENU = {
  featured: {
    label: "Built around people and the systems that support them.",
    desc: "Creative Works is a Phoenix-based professional services firm dedicated to strengthening behavioral health organizations.",
    href: "/about",
    cta: "Our Story",
  },
  links: [
    {
      icon: UserCircle2,
      label: "About Creative Works",
      desc: "Our story, mission, and values.",
      href: "/about",
    },
    {
      icon: Users,
      label: "Leadership",
      desc: "Meet Brian, Sierra, and Wayne.",
      href: "/about/leadership",
    },
    {
      icon: BookOpen,
      label: "Case Studies",
      desc: "Real results for real organizations.",
      href: "/case-studies",
    },
    {
      icon: Phone,
      label: "Contact Us",
      desc: "Phoenix, AZ · 602-402-5121",
      href: "/contact",
    },
  ],
};

/* ─── mega panel types ─────────────────────────────────────────────────────── */

type MegaKey = "Services" | "Industries" | "About" | null;

/* ─── component ────────────────────────────────────────────────────────────── */

export default function Header() {
  const pathname = usePathname();
  const [mega, setMega] = useState<MegaKey>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Close mega on route change
  useEffect(() => {
    setMega(null);
    setMobileOpen(false);
  }, [pathname]);

  const openMega = (key: MegaKey) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setMega(key);
  };

  const delayClose = () => {
    closeTimer.current = setTimeout(() => setMega(null), 120);
  };

  const isActive = (path: string) => {
    if (path === "/") return pathname === "/";
    return pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm backdrop-saturate-150 border-b border-gray-100">
      {/* ── top bar ── */}
      <div className="max-w-[1280px] mx-auto px-6 flex items-center justify-between gap-6 h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center flex-shrink-0">
          <Image
            src="/images/logo-full.png"
            alt="Creative Works"
            width={160}
            height={38}
            className="h-9 w-auto"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-0.5">
          {/* Home */}
          <Link
            href="/"
            className={cn(
              "px-3.5 py-2 text-sm font-semibold rounded-sm transition-colors",
              isActive("/") && pathname === "/"
                ? "text-orange"
                : "text-navy-midnight hover:text-orange"
            )}
          >
            Home
          </Link>

          {/* Services */}
          <button
            onMouseEnter={() => openMega("Services")}
            onMouseLeave={delayClose}
            onClick={() => setMega(mega === "Services" ? null : "Services")}
            className={cn(
              "inline-flex items-center gap-1 px-3.5 py-2 text-sm font-semibold rounded-sm transition-colors",
              isActive("/services") ? "text-orange" : "text-navy-midnight hover:text-orange"
            )}
            aria-expanded={mega === "Services"}
          >
            Services
            <ChevronDown
              className={cn(
                "w-3.5 h-3.5 transition-transform duration-200",
                mega === "Services" ? "rotate-180 text-orange" : "text-orange"
              )}
              aria-hidden="true"
            />
          </button>

          {/* Industries */}
          <button
            onMouseEnter={() => openMega("Industries")}
            onMouseLeave={delayClose}
            onClick={() => setMega(mega === "Industries" ? null : "Industries")}
            className={cn(
              "inline-flex items-center gap-1 px-3.5 py-2 text-sm font-semibold rounded-sm transition-colors",
              isActive("/industries") ? "text-orange" : "text-navy-midnight hover:text-orange"
            )}
            aria-expanded={mega === "Industries"}
          >
            Industries
            <ChevronDown
              className={cn(
                "w-3.5 h-3.5 transition-transform duration-200",
                mega === "Industries" ? "rotate-180 text-orange" : "text-orange"
              )}
              aria-hidden="true"
            />
          </button>

          {/* About */}
          <button
            onMouseEnter={() => openMega("About")}
            onMouseLeave={delayClose}
            onClick={() => setMega(mega === "About" ? null : "About")}
            className={cn(
              "inline-flex items-center gap-1 px-3.5 py-2 text-sm font-semibold rounded-sm transition-colors",
              isActive("/about") ? "text-orange" : "text-navy-midnight hover:text-orange"
            )}
            aria-expanded={mega === "About"}
          >
            About
            <ChevronDown
              className={cn(
                "w-3.5 h-3.5 transition-transform duration-200",
                mega === "About" ? "rotate-180 text-orange" : "text-orange"
              )}
              aria-hidden="true"
            />
          </button>

          <Link
            href="/resources"
            className={cn(
              "px-3.5 py-2 text-sm font-semibold rounded-sm transition-colors",
              isActive("/resources") ? "text-orange" : "text-navy-midnight hover:text-orange"
            )}
          >
            Resources
          </Link>

          <Link
            href="/customers"
            className={cn(
              "px-3.5 py-2 text-sm font-semibold rounded-sm transition-colors",
              isActive("/customers") ? "text-orange" : "text-navy-midnight hover:text-orange"
            )}
          >
            Customers
          </Link>

          <Link
            href="/contact"
            className={cn(
              "px-3.5 py-2 text-sm font-semibold rounded-sm transition-colors",
              isActive("/contact") ? "text-orange" : "text-navy-midnight hover:text-orange"
            )}
          >
            Contact
          </Link>
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-3">
          <div className="hidden lg:block">
            <Button href={CONSULT_HREF} size="sm" arrow>
              Schedule a Consultation
            </Button>
          </div>
          <button
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((v) => !v)}
            className="lg:hidden w-10 h-10 flex items-center justify-center border border-gray-200 rounded-sm bg-white text-navy-midnight"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* ── mega panels ── */}
      {mega && (
        <div
          className="hidden lg:block absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-lg z-40"
          onMouseEnter={() => openMega(mega)}
          onMouseLeave={delayClose}
        >
          <div className="max-w-[1280px] mx-auto px-6 py-6">
            {mega === "Services" && <ServicesMegaMenu />}
            {mega === "Industries" && <IndustriesMegaMenu />}
            {mega === "About" && <AboutMegaMenu />}
          </div>
        </div>
      )}

      {/* ── mobile menu ── */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white max-h-[80vh] overflow-y-auto">
          <div className="px-5 pb-6 pt-2">
            <MobileNavItem label="Home" href="/" onClick={() => setMobileOpen(false)} />

            <MobileAccordion
              label="Services"
              href="/services"
              expanded={mobileExpanded === "Services"}
              onToggle={() =>
                setMobileExpanded(mobileExpanded === "Services" ? null : "Services")
              }
            >
              {SERVICES_MENU.map((s) => (
                <MobileSubLink
                  key={s.href}
                  href={s.href}
                  label={s.label}
                  onClick={() => setMobileOpen(false)}
                />
              ))}
            </MobileAccordion>

            <MobileAccordion
              label="Industries"
              href="/industries"
              expanded={mobileExpanded === "Industries"}
              onToggle={() =>
                setMobileExpanded(mobileExpanded === "Industries" ? null : "Industries")
              }
            >
              {INDUSTRIES_MENU.links.map((l) => (
                <MobileSubLink
                  key={l.href + l.label}
                  href={l.href}
                  label={l.label}
                  onClick={() => setMobileOpen(false)}
                />
              ))}
            </MobileAccordion>

            <MobileAccordion
              label="About"
              href="/about"
              expanded={mobileExpanded === "About"}
              onToggle={() =>
                setMobileExpanded(mobileExpanded === "About" ? null : "About")
              }
            >
              {ABOUT_MENU.links.map((l) => (
                <MobileSubLink
                  key={l.href + l.label}
                  href={l.href}
                  label={l.label}
                  onClick={() => setMobileOpen(false)}
                />
              ))}
            </MobileAccordion>

            <MobileNavItem label="Resources" href="/resources" onClick={() => setMobileOpen(false)} />
            <MobileNavItem label="Customers" href="/customers" onClick={() => setMobileOpen(false)} />
            <MobileNavItem label="Contact" href="/contact" onClick={() => setMobileOpen(false)} />

            <div className="mt-5 pt-4 border-t border-gray-100">
              <Button href={CONSULT_HREF} arrow className="w-full justify-center">
                Schedule a Consultation
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

/* ─── Services mega menu ───────────────────────────────────────────────────── */

function ServicesMegaMenu() {
  return (
    <div className="grid grid-cols-[280px_1fr] gap-6">
      {/* Featured panel */}
      <div className="relative bg-navy-midnight rounded-xl overflow-hidden p-6 flex flex-col justify-between min-h-[260px]">
        {/* Phoenix watermark */}
        <Image
          src="/images/phoenix-mark.png"
          alt=""
          width={160}
          height={160}
          aria-hidden="true"
          className="absolute -bottom-4 -right-4 w-32 h-32 opacity-[0.07] pointer-events-none select-none"
        />
        <div className="relative rounded-lg overflow-hidden aspect-video mb-4 border border-white/10">
          <Image src="/images/mega-services.png" alt="Services" fill className="object-cover" />
        </div>
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-orange mb-2">
            Full-Service Support
          </p>
          <h3 className="font-display font-bold text-lg text-white leading-snug mb-2">
            Nine services. One trusted partner.
          </h3>
          <p className="text-xs text-white/60 leading-relaxed mb-4">
            Creative Works coordinates every operational function your organization needs.
          </p>
          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-orange hover:text-orange-soft transition-colors"
          >
            Explore All Services <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
          </Link>
        </div>
      </div>

      {/* Services grid */}
      <div className="grid grid-cols-3 xl:grid-cols-4 gap-1">
        {SERVICES_MENU.map((s) => (
          <Link
            key={s.href}
            href={s.href}
            className="group flex items-start gap-3 p-3 rounded-lg hover:bg-cloud transition-colors"
          >
            <div className="w-8 h-8 rounded-md bg-orange/10 border border-orange/20 flex items-center justify-center text-orange flex-shrink-0 mt-0.5 group-hover:bg-orange group-hover:text-white transition-colors">
              <s.icon className="w-4 h-4" aria-hidden="true" />
            </div>
            <div className="min-w-0">
              <p className="text-sm font-semibold text-navy-midnight group-hover:text-orange transition-colors leading-tight">
                {s.label}
              </p>
              <p className="text-xs text-gray-500 mt-0.5 leading-snug">{s.tagline}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

/* ─── Industries mega menu ─────────────────────────────────────────────────── */

function IndustriesMegaMenu() {
  return (
    <div className="grid grid-cols-[280px_1fr] gap-6">
      {/* Featured panel */}
      <div className="relative bg-navy-midnight rounded-xl overflow-hidden p-6 flex flex-col justify-between min-h-[240px]">
        <Image
          src="/images/phoenix-mark.png"
          alt=""
          width={160}
          height={160}
          aria-hidden="true"
          className="absolute -bottom-4 -right-4 w-32 h-32 opacity-[0.07] pointer-events-none select-none"
        />
        <div className="relative rounded-lg overflow-hidden aspect-video mb-4 border border-white/10">
          <Image src="/images/mega-industries.png" alt="Industries" fill className="object-cover" />
        </div>
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-orange mb-2">
            Our Focus
          </p>
          <h3 className="font-display font-bold text-lg text-white leading-snug mb-2">
            Built for behavioral health.
          </h3>
          <p className="text-xs text-white/60 leading-relaxed mb-4">
            {INDUSTRIES_MENU.featured.desc}
          </p>
          <Link
            href={INDUSTRIES_MENU.featured.href}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-orange hover:text-orange-soft transition-colors"
          >
            {INDUSTRIES_MENU.featured.cta} <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
          </Link>
        </div>
      </div>

      {/* Industry links */}
      <div className="grid grid-cols-2 gap-1 content-start">
        {INDUSTRIES_MENU.links.map((l) => (
          <Link
            key={l.href + l.label}
            href={l.href}
            className="group flex items-start gap-3 p-4 rounded-lg hover:bg-cloud transition-colors"
          >
            <div className="w-9 h-9 rounded-md bg-orange/10 border border-orange/20 flex items-center justify-center text-orange flex-shrink-0 mt-0.5 group-hover:bg-orange group-hover:text-white transition-colors">
              <l.icon className="w-4.5 h-4.5 w-[18px] h-[18px]" aria-hidden="true" />
            </div>
            <div>
              <p className="text-sm font-semibold text-navy-midnight group-hover:text-orange transition-colors">
                {l.label}
              </p>
              <p className="text-xs text-gray-500 mt-0.5 leading-snug">{l.desc}</p>
            </div>
          </Link>
        ))}
        {/* CTA card */}
        <div className="col-span-2 mt-2 p-4 bg-cloud rounded-lg border border-gray-200 flex items-center justify-between gap-4">
          <p className="text-sm text-gray-600">
            Not sure which industry fits? <span className="font-semibold text-navy-midnight">Let&apos;s talk.</span>
          </p>
          <Link
            href="/contact"
            className="flex-shrink-0 inline-flex items-center gap-1.5 text-sm font-semibold text-orange hover:text-orange-burnt transition-colors"
          >
            Contact Us <ChevronRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </div>
  );
}

/* ─── About mega menu ──────────────────────────────────────────────────────── */

function AboutMegaMenu() {
  return (
    <div className="grid grid-cols-[280px_1fr] gap-6">
      {/* Featured panel */}
      <div className="relative bg-navy-midnight rounded-xl overflow-hidden p-6 flex flex-col justify-between min-h-[240px]">
        <Image
          src="/images/phoenix-mark.png"
          alt=""
          width={160}
          height={160}
          aria-hidden="true"
          className="absolute -bottom-4 -right-4 w-32 h-32 opacity-[0.07] pointer-events-none select-none"
        />
        <div className="relative rounded-lg overflow-hidden aspect-video mb-4 border border-white/10">
          <Image src="/images/mega-about.png" alt="About Creative Works" fill className="object-cover" />
        </div>
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-orange mb-2">
            Creative Works
          </p>
          <h3 className="font-display font-bold text-base text-white leading-snug mb-2">
            {ABOUT_MENU.featured.label}
          </h3>
          <p className="text-xs text-white/60 leading-relaxed mb-4">
            {ABOUT_MENU.featured.desc}
          </p>
          <Link
            href={ABOUT_MENU.featured.href}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-orange hover:text-orange-soft transition-colors"
          >
            {ABOUT_MENU.featured.cta} <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
          </Link>
        </div>
      </div>

      {/* About links */}
      <div className="grid grid-cols-2 gap-1 content-start">
        {ABOUT_MENU.links.map((l) => (
          <Link
            key={l.href + l.label}
            href={l.href}
            className="group flex items-start gap-3 p-4 rounded-lg hover:bg-cloud transition-colors"
          >
            <div className="w-9 h-9 rounded-md bg-orange/10 border border-orange/20 flex items-center justify-center text-orange flex-shrink-0 mt-0.5 group-hover:bg-orange group-hover:text-white transition-colors">
              <l.icon className="w-[18px] h-[18px]" aria-hidden="true" />
            </div>
            <div>
              <p className="text-sm font-semibold text-navy-midnight group-hover:text-orange transition-colors">
                {l.label}
              </p>
              <p className="text-xs text-gray-500 mt-0.5 leading-snug">{l.desc}</p>
            </div>
          </Link>
        ))}
        {/* Schedule CTA */}
        <div className="col-span-2 mt-2 p-4 bg-orange/5 rounded-lg border border-orange/20 flex items-center justify-between gap-4">
          <p className="text-sm font-semibold text-navy-midnight">
            Ready to get started?
          </p>
          <Link
            href={CONSULT_HREF}
            className="flex-shrink-0 inline-flex items-center gap-1.5 text-sm font-bold text-orange hover:text-orange-burnt transition-colors"
          >
            Schedule a Consultation <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </div>
  );
}

/* ─── Mobile helpers ───────────────────────────────────────────────────────── */

function MobileNavItem({
  label,
  href,
  onClick,
}: {
  label: string;
  href: string;
  onClick: () => void;
}) {
  const pathname = usePathname();
  const active = href === "/" ? pathname === "/" : pathname.startsWith(href);
  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "block py-3 text-sm font-semibold border-b border-gray-100 transition-colors",
        active ? "text-orange" : "text-navy-midnight hover:text-orange"
      )}
    >
      {label}
    </Link>
  );
}

function MobileAccordion({
  label,
  href,
  expanded,
  onToggle,
  children,
}: {
  label: string;
  href: string;
  expanded: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const active = pathname.startsWith(href);
  return (
    <div className="border-b border-gray-100">
      <button
        onClick={onToggle}
        className={cn(
          "w-full flex items-center justify-between py-3 text-sm font-semibold transition-colors",
          active ? "text-orange" : "text-navy-midnight"
        )}
      >
        {label}
        <ChevronDown
          className={cn(
            "w-4 h-4 text-orange transition-transform duration-200",
            expanded && "rotate-180"
          )}
          aria-hidden="true"
        />
      </button>
      {expanded && (
        <div className="pb-2 pl-3 grid gap-0.5">{children}</div>
      )}
    </div>
  );
}

function MobileSubLink({
  href,
  label,
  onClick,
}: {
  href: string;
  label: string;
  onClick: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="flex items-center gap-2 py-2.5 text-sm text-gray-600 hover:text-orange transition-colors"
    >
      <ChevronRight className="w-3.5 h-3.5 text-orange flex-shrink-0" aria-hidden="true" />
      {label}
    </Link>
  );
}
