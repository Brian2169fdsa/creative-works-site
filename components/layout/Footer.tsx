import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Linkedin, Facebook, Twitter, Youtube } from "lucide-react";
import { CONTACT } from "@/lib/site-content";
import { SERVICES } from "@/lib/services";
import { CONSULT_HREF } from "@/lib/navigation";

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Customers", href: "/customers" },
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/contact" },
];

const INDUSTRY_LINKS = [
  { label: "Behavioral Health", href: "/industries/behavioral-health" },
  { label: "All Industries", href: "/industries" },
  { label: "Schedule a Consultation", href: CONSULT_HREF },
];

export default function Footer() {
  return (
    <footer className="bg-navy-deep text-white">
      <div className="max-w-container mx-auto px-6 pt-16 pb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand column */}
        <div>
          <Image
            src="/images/logo-full-white.png"
            alt="Creative Works"
            width={160}
            height={36}
            className="h-9 w-auto mb-4"
          />
          <p className="text-sm text-white/60 leading-relaxed max-w-[34ch] mb-5">
            Full-service professional support for behavioral health
            organizations, marketing, SharePoint, IT, staffing, and operations.
          </p>
          <div className="flex gap-2.5">
            {[
              { Icon: Linkedin, label: "LinkedIn" },
              { Icon: Facebook, label: "Facebook" },
              { Icon: Twitter, label: "Twitter" },
              { Icon: Youtube, label: "YouTube" },
            ].map(({ Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:border-white/50 transition-colors"
              >
                <Icon className="w-4 h-4" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-[0.08em] text-white mb-4">
            Quick Links
          </h4>
          <nav className="grid gap-2.5">
            {QUICK_LINKS.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="text-sm text-white/60 hover:text-white transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-[0.08em] text-white mb-4">
            Services
          </h4>
          <nav className="grid gap-2.5">
            {SERVICES.map((s) => (
              <Link
                key={s.slug}
                href={s.href}
                className="text-sm text-white/60 hover:text-white transition-colors"
              >
                {s.eyebrow}
              </Link>
            ))}
          </nav>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-[0.08em] text-white mb-4">
            Contact Us
          </h4>
          <div className="grid gap-4">
            <div className="flex gap-3 items-start text-sm text-white/60">
              <MapPin
                className="w-4 h-4 text-orange-soft flex-shrink-0 mt-0.5"
                aria-hidden="true"
              />
              {CONTACT.city}
            </div>
            <a
              href={CONTACT.phoneHref}
              className="flex gap-3 items-center text-sm text-white/60 hover:text-white transition-colors"
            >
              <Phone
                className="w-4 h-4 text-orange-soft flex-shrink-0"
                aria-hidden="true"
              />
              {CONTACT.phone}
            </a>
            <a
              href={`mailto:${CONTACT.email}`}
              className="flex gap-3 items-center text-sm text-white/60 hover:text-white transition-colors"
            >
              <Mail
                className="w-4 h-4 text-orange-soft flex-shrink-0"
                aria-hidden="true"
              />
              {CONTACT.email}
            </a>

            {/* Industries */}
            <div className="mt-2">
              <h5 className="text-xs font-bold uppercase tracking-[0.08em] text-white mb-3">
                Industries
              </h5>
              <nav className="grid gap-2">
                {INDUSTRY_LINKS.map((l) => (
                  <Link
                    key={l.label}
                    href={l.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {l.label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-container mx-auto px-6 py-5 flex flex-wrap items-center justify-between gap-4 text-xs text-white/50">
          <span>© 2026 Creative Works. All rights reserved.</span>
          <div className="flex gap-6">
            <Link
              href="/privacy-policy"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="hover:text-white transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
