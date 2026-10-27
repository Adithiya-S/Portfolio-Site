"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { site } from "@/data/site";
import { getWhatsAppUrl, contactMessages } from "@/lib/contact";
import { Button } from "@/components/ui/Button";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Skills", href: "#skills" },
  { label: "Process", href: "#process" },
  { label: "Estimator", href: "#estimator" },
  { label: "Contact", href: "#contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-200 ${scrolled
        ? "bg-[#14100c]"
        : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 h-18 flex items-center justify-between">
        {/* Brand wordmark */}
        <Link
          href="/"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="text-lg font-semibold tracking-tight text-[var(--ink)] hover:text-[var(--accent)] transition-colors focus-visible:outline-none"
        >
          {site.name}
          <span className="text-[var(--accent)] ml-1 text-sm font-normal">.dev</span>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-8" aria-label="Main Navigation">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-[var(--muted)] hover:text-[var(--ink)] transition-colors py-1 focus-visible:outline-none"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden md:flex items-center">
          <Button
            href={getWhatsAppUrl(contactMessages.general)}
            target="_blank"
            size="sm"
            variant="primary"
          >
            Start a project
          </Button>
        </div>

        {/* Mobile menu trigger */}
        <button
          type="button"
          className="md:hidden text-[var(--ink)] p-2 focus-visible:outline-none"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-[#18140f] px-6 py-6 space-y-4">
          <nav className="flex flex-col space-y-4" aria-label="Mobile Navigation">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-base text-[var(--ink)] hover:text-[var(--accent)] transition-colors py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-2">
            <Button
              href={getWhatsAppUrl(contactMessages.general)}
              target="_blank"
              size="md"
              variant="primary"
              className="w-full"
            >
              Start a project on WhatsApp
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
