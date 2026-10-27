import { processSteps } from "@/data/process";

export function Process() {
  return (
    <section id="process" className="py-24 sm:py-32 px-5 sm:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="max-w-3xl mb-16 sm:mb-20">
        <h2 className="text-[clamp(2.2rem,1.5rem+3vw,3.75rem)] font-semibold tracking-[-0.035em] leading-[1.04] text-[var(--ink)]">
          How we work together.
        </h2>
        <p className="mt-4 text-[clamp(1.0625rem,1rem+0.25vw,1.1875rem)] text-[#dedbd6] leading-relaxed max-w-2xl">
          From our first WhatsApp conversation to domain launch. No surprise costs, no disappearing acts, and no junior hand-offs.
        </p>
      </div>

      {/* Semantic Step List */}
      <ol className="space-y-12 sm:space-y-16 list-none p-0 m-0">
        {processSteps.map((step, idx) => (
          <li
            key={step.name}
            className="grid lg:grid-cols-12 gap-8 items-start py-6 sm:py-8"
          >
            {/* Left Column (Cols 1-5): Step Title & Narrative */}
            <div className="lg:col-span-5">
              <h3 className="text-2xl sm:text-3xl font-semibold text-[var(--ink)] tracking-tight">
                {step.name}
              </h3>

              <p className="mt-3 text-base text-[#dedbd6] leading-relaxed">
                <span className="font-semibold text-[var(--accent)]">Phase {idx + 1}. </span>
                {step.summary}
              </p>
            </div>

            {/* Right Column (Cols 6-12): Verified Deliverables */}
            <div className="lg:col-span-7 lg:pl-6">
              <p className="text-sm font-semibold text-[var(--muted)] mb-3">
                Phase deliverables
              </p>
              <ul className="space-y-2.5">
                {step.deliverables.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-base text-[#dedbd6]">
                    <span className="text-[var(--accent)] font-bold select-none">·</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
