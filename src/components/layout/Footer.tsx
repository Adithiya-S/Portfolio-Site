import { siteConfig } from "@/data/site";
import { ExternalLink } from "lucide-react";

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-[var(--surface)] text-[var(--ink)] py-16 sm:py-20 px-5 sm:px-8">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-10 items-start">
        {/* Left Column (Cols 1-5): Wordmark & Statement */}
        <div className="lg:col-span-5">
          <a
            href="#"
            className="inline-block text-xl font-semibold tracking-tight text-[var(--ink)] focus-visible:outline-none"
            aria-label="Adithiya - Back to top"
          >
            <span>{siteConfig.author}</span>
            <span className="text-[var(--accent)] font-normal">.dev</span>
          </a>

          <p className="mt-3 text-base text-[#dedbd6] leading-relaxed max-w-sm">
            {siteConfig.role}. Building fast, reliable websites and full-stack web apps for small businesses and startups.
          </p>

          <p className="mt-4 text-sm text-[var(--muted)]">
            Based in {siteConfig.city}, {siteConfig.country}. Available worldwide.
          </p>
        </div>

        {/* Middle Column (Cols 6-8): Quick Navigation */}
        <div className="lg:col-span-3">
          <span className="block text-sm font-semibold text-[var(--accent)] mb-3">
            Navigation
          </span>
          <ul className="space-y-2 text-sm text-[#dedbd6]">
            <li>
              <a href="#work" className="hover:text-[var(--ink)] transition-colors">
                Selected Work
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-[var(--ink)] transition-colors">
                Services
              </a>
            </li>
            <li>
              <a href="#skills" className="hover:text-[var(--ink)] transition-colors">
                Skills &amp; Standards
              </a>
            </li>
            <li>
              <a href="#process" className="hover:text-[var(--ink)] transition-colors">
                How We Work
              </a>
            </li>
            <li>
              <a href="#estimator" className="hover:text-[var(--ink)] transition-colors">
                Project Estimator
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:text-[var(--ink)] transition-colors">
                FAQ
              </a>
            </li>
          </ul>
        </div>

        {/* Right Column (Cols 9-12): Verified Direct Channels */}
        <div className="lg:col-span-4">
          <span className="block text-sm font-semibold text-[var(--accent)] mb-3">
            Connect &amp; Verify
          </span>
          <ul className="space-y-2 text-sm text-[#dedbd6]">
            <li>
              <a
                href={`https://wa.me/${siteConfig.phone.raw}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-[var(--accent)] transition-colors"
              >
                <span>WhatsApp ({siteConfig.phone.formatted})</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </li>
            <li>
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center gap-1.5 hover:text-[var(--accent)] transition-colors"
              >
                <span>Email ({siteConfig.email})</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </li>
            <li>
              <a
                href={siteConfig.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-[var(--ink)] transition-colors"
              >
                <span>GitHub profile</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </li>
            <li>
              <a
                href={siteConfig.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-[var(--ink)] transition-colors"
              >
                <span>LinkedIn profile</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </li>
          </ul>

          <p className="mt-8 text-sm text-[var(--muted)]">
            © {currentYear} {siteConfig.author}. Built with Next.js &amp; Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}
