import { services } from "@/data/services";
import { getWhatsAppUrl, contactMessages } from "@/lib/contact";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

export function Services() {
  return (
    <section id="services" className="py-24 sm:py-32 px-5 sm:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="max-w-3xl mb-16 sm:mb-20">
        <h2 className="text-[clamp(2.2rem,1.5rem+3vw,3.75rem)] font-semibold tracking-[-0.035em] leading-[1.04] text-[var(--ink)]">
          What I can build for you.
        </h2>
        <p className="mt-4 text-[clamp(1.0625rem,1rem+0.25vw,1.1875rem)] text-[#dedbd6] leading-relaxed max-w-2xl">
          Direct engineering and product design for small business owners and startups.
          No bloated agency retainers, no templates, and no junior hand-offs.
        </p>
      </div>

      {/* 4 Full-Width Editorial Rows */}
      <div className="space-y-12 sm:space-y-16">
        {services.map((service) => (
          <div
            key={service.id}
            className="grid lg:grid-cols-12 gap-8 items-start py-6 sm:py-8"
          >
            {/* Left Column (Cols 1-5): Title, Summary with Timeline */}
            <div className="lg:col-span-5">
              <h3 className="text-2xl sm:text-3xl font-semibold text-[var(--ink)] tracking-tight">
                {service.name}
              </h3>

              <p className="mt-3 text-base text-[#dedbd6] leading-relaxed">
                {service.line} Delivered in {service.timeline}.
              </p>
            </div>

            {/* Right Column (Cols 6-12): Deliverables & CTA */}
            <div className="lg:col-span-7 flex flex-col sm:flex-row sm:items-end justify-between gap-6 lg:pl-6">
              <div>
                <p className="text-sm font-semibold text-[var(--muted)] mb-3">
                  Deliverables include
                </p>
                <ul className="space-y-2">
                  {service.deliverables.map((d, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-base text-[#dedbd6]">
                      <span className="text-[var(--accent)] font-bold select-none">·</span>
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex-shrink-0 pt-2 sm:pt-0">
                <Button
                  href={getWhatsAppUrl(contactMessages.serviceQuote(service.name))}
                  target="_blank"
                  size="md"
                  variant="primary"
                  className="gap-2 w-full sm:w-auto"
                >
                  <span>Get a quote</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
