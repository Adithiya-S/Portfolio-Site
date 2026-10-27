"use client";

import { useState } from "react";
import { faqItems } from "@/data/faq";

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="faq" className="py-24 sm:py-32 px-5 sm:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="max-w-3xl mb-14 sm:mb-16">
        <h2 className="text-[clamp(2.2rem,1.5rem+3vw,3.75rem)] font-semibold tracking-[-0.035em] leading-[1.04] text-[var(--ink)]">
          Frequently asked questions.
        </h2>
        <p className="mt-4 text-[clamp(1.0625rem,1rem+0.25vw,1.1875rem)] text-[#dedbd6] leading-relaxed max-w-[60ch]">
          Honest answers about timelines, payments, student status, and post-launch support.
        </p>
      </div>

      {/* Editorial Accordion */}
      <div className="max-w-3xl space-y-8">
        {faqItems.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <div key={item.question} className="py-2">
              <button
                type="button"
                onClick={() => toggle(index)}
                aria-expanded={isOpen}
                className="w-full flex items-start justify-between gap-6 text-left focus-visible:outline-none group cursor-pointer"
              >
                <span className="text-lg sm:text-xl font-semibold text-[var(--ink)] tracking-tight group-hover:text-[var(--accent)] transition-colors">
                  {item.question}
                </span>
                <span
                  className="flex-shrink-0 text-xl font-medium text-[var(--accent)] select-none pt-0.5"
                  aria-hidden="true"
                >
                  {isOpen ? "−" : "+"}
                </span>
              </button>

              {isOpen && (
                <div className="mt-4 pt-1">
                  <p className="text-base text-[#dedbd6] leading-relaxed max-w-[65ch]">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

