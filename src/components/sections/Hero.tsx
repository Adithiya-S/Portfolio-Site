import Image from "next/image";
import { getWhatsAppUrl, contactMessages } from "@/lib/contact";
import { projects } from "@/data/projects";
import { Button } from "@/components/ui/Button";
import { ProjectMarquee } from "@/components/sections/ProjectMarquee";
import { ArrowRight, MessageSquare, ExternalLink } from "lucide-react";

export function Hero() {
  const flagship = projects[0]; // Nrityeswarra

  return (
    <section className="relative pt-32 sm:pt-40">
      <div className="pb-16 sm:pb-24 px-5 sm:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* Left Column (Columns 1-7): Headlines, Lead, CTAs */}
        <div className="lg:col-span-7">
          {/* Main H1 Headline strictly 2 lines at every breakpoint (390, 768, 1440) */}
          <h1 className="text-[clamp(1.75rem,1.2rem+3.5vw,4.5rem)] font-semibold tracking-[-0.035em] leading-[1.03] text-[var(--ink)]">
            <span className="block overflow-hidden pb-1 -mb-1">
              <span className="block animate-line-0">Fast websites &amp;</span>
            </span>
            <span className="block overflow-hidden pb-1 -mb-1">
              <span className="block animate-line-1">full-stack web apps.</span>
            </span>
          </h1>

          {/* Lead supporting paragraph set in neutral bone ink */}
          <p className="animate-rise-1 mt-6 text-[clamp(1.0625rem,1rem+0.25vw,1.1875rem)] text-[#e5e5e5] leading-relaxed max-w-xl">
            For small businesses and startups. From a sharp business website to a custom
            dashboard that runs your bookings, leads and payments. Built to load fast,
            look premium and be easy for you to manage.
          </p>

          {/* Dual CTAs */}
          <div className="animate-rise-2 mt-8 sm:mt-10 flex flex-wrap items-center gap-4">
            <Button
              href={getWhatsAppUrl(contactMessages.general)}
              target="_blank"
              size="lg"
              variant="primary"
              className="gap-2.5"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>Start a project</span>
            </Button>

            <Button
              href="#work"
              size="lg"
              variant="secondary"
              className="gap-2"
            >
              <span>See my work</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>

          {/* Trust Proof Line (minimum 13px) */}
          <div className="animate-rise-3 mt-12 flex flex-wrap items-center gap-y-2 text-[13px] sm:text-sm text-[var(--muted)]">
            <span>Student at SRM IST</span>
            <span className="mx-2.5 text-[#3d342a]">·</span>
            <span>Contract developer at Akzorium</span>
            <span className="mx-2.5 text-[#3d342a]">·</span>
            <span className="text-[var(--accent)] font-medium">5 projects live</span>
          </div>
        </div>

        {/* Right Column (Columns 8-12): Flagship Live Project Visual closes the grid */}
        <div className="lg:col-span-5 animate-rise-preview">
          <div className="bg-[var(--surface)] p-3 sm:p-4">
            <div className="flex items-center justify-between pb-3 px-1 text-[13px] text-[var(--muted)]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#1fc27a]" />
                <span className="text-[var(--ink)] font-medium">Flagship deployment</span>
              </div>
              <span>Next.js 16 · MySQL</span>
            </div>

            <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#120f0c]">
              <Image
                src={flagship.media.cover}
                alt={flagship.media.alt}
                width={flagship.media.width}
                height={flagship.media.height}
                priority
                className="w-full h-full object-cover object-top"
              />
            </div>

            <div className="pt-3.5 px-1 flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-[var(--ink)]">{flagship.name}</p>
                <p className="text-[13px] text-[var(--muted)]">{flagship.kind}</p>
              </div>

              <a
                href={flagship.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[13px] text-[var(--accent)] hover:underline focus-visible:outline-none"
              >
                <span>Live platform</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
      </div>
      <ProjectMarquee />
    </section>
  );
}
