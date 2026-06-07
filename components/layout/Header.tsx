"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { NAV, CONSULT_HREF } from "@/lib/navigation";
import { cn } from "@/lib/utils";
import Button from "@/components/ui/Button";

export default function Header() {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (key: string) => {
    if (key === "home") return pathname === "/";
    return pathname.startsWith("/" + key) ||
      (key === "services" && pathname.startsWith("/services")) ||
      (key === "industries" && pathname.startsWith("/industries"));
  };

  return (
    <header className="sticky top-0 z-50 bg-white/92 backdrop-blur-sm backdrop-saturate-150 border-b border-gray-100">
      <div className="max-w-container mx-auto px-6 flex items-center justify-between gap-6 py-3">
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

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV.map((item) => (
            <div
              key={item.key}
              className="relative"
              onMouseEnter={() => item.menu && setOpenMenu(item.label)}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <Link
                href={item.href}
                className={cn(
                  "inline-flex items-center gap-1 px-3.5 py-2 text-sm font-semibold rounded-sm transition-colors relative",
                  isActive(item.key)
                    ? "text-orange"
                    : "text-navy-midnight hover:text-orange"
                )}
              >
                {item.label}
                {item.menu && (
                  <ChevronDown
                    className="w-3 h-3 text-orange"
                    aria-hidden="true"
                  />
                )}
                {isActive(item.key) && (
                  <span
                    aria-hidden="true"
                    className="absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-orange rounded-full"
                  />
                )}
              </Link>

              {item.menu && openMenu === item.label && (
                <div className="absolute top-full left-0 min-w-[220px] bg-white border border-gray-100 rounded-md shadow-lg py-2 z-50">
                  {item.menu.map((m) => (
                    <Link
                      key={m.label}
                      href={m.href}
                      className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-cloud hover:text-navy-midnight transition-colors"
                      onClick={() => setOpenMenu(null)}
                    >
                      {m.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Desktop CTA + Mobile toggle */}
        <div className="flex items-center gap-3">
          <div className="hidden md:block">
            <Button href={CONSULT_HREF} size="sm" arrow>
              Schedule a Consultation
            </Button>
          </div>
          <button
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((v) => !v)}
            className="md:hidden w-10 h-10 flex items-center justify-center border border-gray-200 rounded-sm bg-white text-navy-midnight"
          >
            {mobileOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white px-6 pb-5">
          {NAV.map((item) => (
            <div key={item.key}>
              <Link
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "block py-3 font-semibold border-b border-gray-100 transition-colors",
                  isActive(item.key)
                    ? "text-orange"
                    : "text-navy-midnight hover:text-orange"
                )}
              >
                {item.label}
              </Link>
              {item.menu && (
                <div className="pl-4 bg-cloud/50">
                  {item.menu.map((m) => (
                    <Link
                      key={m.label}
                      href={m.href}
                      onClick={() => setMobileOpen(false)}
                      className="block py-2.5 text-sm text-gray-600 border-b border-gray-100 hover:text-orange transition-colors"
                    >
                      {m.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="mt-5">
            <Button
              href={CONSULT_HREF}
              arrow
              className="w-full justify-center"
            >
              Schedule a Consultation
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
