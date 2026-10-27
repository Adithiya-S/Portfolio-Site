import Image from "next/image";
import { projects } from "@/data/projects";
import { ExternalLink } from "lucide-react";

export function ProjectMarquee() {
  // Double list for a seamless CSS infinite loop
  const displayItems = [...projects, ...projects];

  return (
    <div className="relative w-full overflow-hidden py-10 sm:py-14 bg-[#110e0b]">
      {/* Full-width media span for layout detection */}
      <svg className="w-full h-32 absolute inset-0 opacity-0 pointer-events-none" aria-hidden="true" />

      {/* Visual Header / Accessibility Title */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 mb-6 flex items-center justify-between text-sm text-[var(--muted)]">
        <span className="font-medium text-[var(--ink)]">Selected live deployments</span>
        <span className="hidden sm:inline">Pause on hover</span>
      </div>

      <div className="marquee-container relative w-full overflow-hidden" tabIndex={0} aria-label="Live project previews carousel">
        <div className="marquee-track flex gap-6 px-4">
          {displayItems.map((project, idx) => (
            <article
              key={`${project.slug}-${idx}`}
              className="flex-shrink-0 w-[300px] sm:w-[420px] bg-[var(--surface)] group transition-colors duration-150"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#120f0c]">
                <Image
                  src={project.media.cover}
                  alt={project.media.alt}
                  width={project.media.width}
                  height={project.media.height}
                  className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
                  loading={idx < 4 ? "eager" : "lazy"}
                />
              </div>

              <div className="p-4 sm:p-5 flex items-center justify-between">
                <div>
                  <p className="text-sm sm:text-base font-semibold text-[var(--ink)]">
                    {project.name}
                  </p>
                  <p className="text-sm text-[var(--muted)] mt-0.5">
                    {project.industry} · {project.kind}
                  </p>
                </div>

                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-[var(--muted)] hover:text-[var(--accent)] transition-colors focus-visible:outline-none"
                  aria-label={`Open ${project.name} live site in a new tab`}
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
