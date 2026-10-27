export function ProofStrip() {
  const metrics = [
    { figure: "5", label: "Projects shipped", sub: "All live in production" },
    { figure: "5", label: "Industries", sub: "Dance, art, agency, materials, AI" },
    { figure: "12h", label: "Fast response", sub: "Direct replies on WhatsApp" },
  ];

  const technologies = [
    "Next.js",
    "React",
    "TypeScript",
    "MySQL",
    "PostgreSQL",
    "PHP",
    "Python",
    "Tailwind",
  ];

  return (
    <section className="py-20 sm:py-28 px-5 sm:px-8 max-w-7xl mx-auto">
      <h2 className="sr-only">Key Metrics and Core Technologies</h2>
      {/* 3 Metrics in a side-by-side editorial row */}
      <div className="grid grid-cols-3 gap-4 sm:gap-12 pb-16">
        {metrics.map((m) => (
          <div key={m.label} className="flex flex-col">
            <span className="text-[clamp(2.25rem,1.5rem+2.5vw,4.25rem)] font-semibold tracking-[-0.04em] text-[var(--ink)] leading-none">
              {m.figure}
            </span>
            <span className="mt-3 text-sm sm:text-base font-semibold text-[var(--ink)]">
              {m.label}
            </span>
            <span className="mt-1 text-sm text-[var(--muted)]">
              {m.sub}
            </span>
          </div>
        ))}
      </div>

      {/* Verified Stack statement reading as a continuous sentence */}
      <div className="pt-10 flex flex-wrap items-baseline gap-x-4 gap-y-3">
        <span className="text-sm font-semibold text-[var(--accent)]">
          Core stack
        </span>
        <div className="flex flex-wrap items-center gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-[var(--surface)] text-[var(--ink)] text-sm font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
