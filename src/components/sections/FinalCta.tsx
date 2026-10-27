"use client";

import { useState } from "react";
import { siteConfig } from "@/data/site";
import { getWhatsAppUrl, getMailtoUrl } from "@/lib/contact";
import { Button } from "@/components/ui/Button";
import { MessageSquare, Mail, Phone, MapPin, Clock } from "lucide-react";

export function FinalCta() {
  const [name, setName] = useState("");
  const [details, setDetails] = useState("");

  const formattedWhatsAppUrl = getWhatsAppUrl(
    name
      ? `Hi Adithiya, I'm ${name.trim()}. ${details.trim() || "I'd like to talk about building a website / web app."}`
      : details.trim() || "Hi Adithiya, I'd like to discuss building a website / web app."
  );

  const formattedMailtoUrl = getMailtoUrl(
    name ? `Project Inquiry from ${name.trim()}` : "Project Inquiry",
    details.trim() || "Hi Adithiya, I'd like to discuss building a website / web app."
  );

  return (
    <section id="contact" className="py-24 sm:py-32 px-5 sm:px-8 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column (Cols 1-7): Headings & Quick Contact Form */}
        <div className="lg:col-span-7">
          <h2 className="text-[clamp(2.2rem,1.5rem+3vw,3.75rem)] font-semibold tracking-[-0.035em] leading-[1.04] text-[var(--ink)]">
            Let&apos;s build together.
          </h2>

          <p className="mt-4 text-[clamp(1.0625rem,1rem+0.25vw,1.1875rem)] text-[#dedbd6] leading-relaxed max-w-xl">
            Direct engineering that grows your business. Fixed quotes, fast replies, and no junior hand-offs.
            Tell me a bit about what you need, or message me directly on WhatsApp.
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              window.open(formattedWhatsAppUrl, "_blank");
            }}
            className="mt-10 space-y-5"
          >
            <div>
              <label
                htmlFor="contact-name"
                className="block text-sm font-semibold text-[var(--ink)] mb-2"
              >
                Your name or company
              </label>
              <input
                id="contact-name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Maya Sharma / Zenith Studio"
                className="w-full px-4 py-3 bg-[var(--surface)] text-[var(--ink)] placeholder:text-[var(--muted)] text-base focus-visible:outline-none"
              />
            </div>

            <div>
              <label
                htmlFor="contact-details"
                className="block text-sm font-semibold text-[var(--ink)] mb-2"
              >
                What would you like to build?
              </label>
              <textarea
                id="contact-details"
                rows={4}
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                placeholder="Briefly describe what your business does and what you need (e.g. high-converting business site, custom booking dashboard, performance overhaul)..."
                className="w-full px-4 py-3 bg-[var(--surface)] text-[var(--ink)] placeholder:text-[var(--muted)] text-base focus-visible:outline-none resize-y"
              />
            </div>

            {/* Direct Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Button
                type="submit"
                size="lg"
                variant="primary"
                className="gap-2.5"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>Chat on WhatsApp</span>
              </Button>

              <Button
                href={formattedMailtoUrl}
                size="lg"
                variant="secondary"
                className="gap-2"
              >
                <Mail className="w-4 h-4" />
                <span>Send via Email</span>
              </Button>
            </div>
          </form>
        </div>

        {/* Right Column (Cols 8-12): Verified Direct Contact Details */}
        <aside className="lg:col-span-5 bg-[var(--surface)] p-6 sm:p-8 space-y-6" aria-label="Direct contact channels">
          <h3 className="text-xl font-semibold text-[var(--ink)] tracking-tight">
            Direct channels
          </h3>

          <div className="space-y-4">
            <a
              href={`https://wa.me/${siteConfig.phone.raw}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-base text-[#dedbd6] hover:text-[var(--ink)] transition-colors"
            >
              <div className="p-2.5 bg-[#120f0c] text-[var(--accent)] flex-shrink-0">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <span className="block text-sm text-[var(--muted)]">WhatsApp</span>
                <span className="font-semibold">{siteConfig.phone.formatted}</span>
              </div>
            </a>

            <a
              href={`mailto:${siteConfig.email}`}
              className="flex items-center gap-3 text-base text-[#dedbd6] hover:text-[var(--ink)] transition-colors"
            >
              <div className="p-2.5 bg-[#120f0c] text-[var(--accent)] flex-shrink-0">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <span className="block text-sm text-[var(--muted)]">Email</span>
                <span className="font-semibold">{siteConfig.email}</span>
              </div>
            </a>

            <div className="flex items-center gap-3 text-base text-[#dedbd6]">
              <div className="p-2.5 bg-[#120f0c] text-[var(--accent)] flex-shrink-0">
                <Clock className="w-4 h-4" />
              </div>
              <div>
                <span className="block text-sm text-[var(--muted)]">Response guarantee</span>
                <span className="font-semibold">{siteConfig.replyTime} reply time</span>
              </div>
            </div>

            <div className="flex items-center gap-3 text-base text-[#dedbd6]">
              <div className="p-2.5 bg-[#120f0c] text-[var(--accent)] flex-shrink-0">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <span className="block text-sm text-[var(--muted)]">Based in</span>
                <span className="font-semibold">Chennai, India (Serving clients worldwide)</span>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
