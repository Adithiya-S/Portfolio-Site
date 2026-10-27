import { skillsData, skillsFootnote } from "@/data/skills";

export function Skills() {
  const [productionGroup, exploringGroup] = skillsData;

  return (
    <section id="skills" className="py-24 sm:py-32 bg-[var(--surface)]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <h2 className="text-[clamp(2.2rem,1.5rem+3vw,3.75rem)] font-semibold tracking-[-0.035em] leading-[1.04] text-[var(--ink)]">
            Technologies and standards.
          </h2>
          <p className="mt-4 text-[clamp(1.0625rem,1rem+0.25vw,1.1875rem)] text-[#dedbd6] leading-relaxed max-w-2xl">
            Directly applied across production databases, modern server components, and responsive frontends.
          </p>
        </div>

        {/* 2-Column Split: Production tools vs Exploring */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Production Group (Cols 1-7) */}
          <div className="lg:col-span-7">
            <h3 className="text-xl sm:text-2xl font-semibold text-[var(--ink)] tracking-tight">
              {productionGroup.title}
            </h3>
            <p className="mt-2 text-base text-[#dedbd6] leading-relaxed">
              {productionGroup.description}
            </p>

            <div className="mt-8 space-y-4">
              {productionGroup.items.map((item) => (
                <div
                  key={item.name}
                  className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 pb-2.5"
                >
                  <span className="text-base font-semibold text-[var(--ink)]">
                    {item.name}
                  </span>
                  <span className="text-sm text-[#dedbd6]">
                    {item.context}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Leveling Up Group + Honest Footnote (Cols 8-12) */}
          <div className="lg:col-span-5 space-y-10">
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-[var(--ink)] tracking-tight">
                {exploringGroup.title}
              </h3>
              <p className="mt-2 text-base text-[#dedbd6] leading-relaxed">
                {exploringGroup.description}
              </p>

              <div className="mt-8 space-y-4">
                {exploringGroup.items.map((item) => (
                  <div
                    key={item.name}
                    className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 pb-2.5"
                  >
                    <span className="text-base font-semibold text-[var(--ink)]">
                      {item.name}
                    </span>
                    <span className="text-sm text-[#dedbd6]">
                      {item.context}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Honest Engineering Footnote */}
            <div className="p-5 bg-[#14110e] text-[#ccc8c0]">
              <span className="block text-sm font-semibold text-[var(--accent)] mb-1">
                Transparency guarantee
              </span>
              <p className="text-sm leading-relaxed text-[#dedbd6]">
                {skillsFootnote}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
