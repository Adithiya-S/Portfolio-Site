"use client";

import { useState, useMemo } from "react";
import { projectTypes, featureOptions, timelineOptions } from "@/data/estimator";
import { getWhatsAppUrl, getMailtoUrl } from "@/lib/contact";
import { Button } from "@/components/ui/Button";
import { MessageSquare, Mail, Copy, Check, Sparkles } from "lucide-react";

export function Estimator() {
  const [selectedType, setSelectedType] = useState<string>(projectTypes[0].id);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([
    "lead-pipeline",
    "whatsapp-direct",
  ]);
  const [selectedTimeline, setSelectedTimeline] = useState<string>(timelineOptions[1].id);
  const [copied, setCopied] = useState<boolean>(false);

  const currentType = useMemo(
    () => projectTypes.find((t) => t.id === selectedType) ?? projectTypes[0],
    [selectedType]
  );

  const currentTimeline = useMemo(
    () => timelineOptions.find((t) => t.id === selectedTimeline) ?? timelineOptions[1],
    [selectedTimeline]
  );

  const activeFeatureNames = useMemo(() => {
    return featureOptions
      .filter((f) => selectedFeatures.includes(f.id))
      .map((f) => f.name);
  }, [selectedFeatures]);

  const generatedMessage = useMemo(() => {
    const featuresList =
      activeFeatureNames.length > 0
        ? activeFeatureNames.join(", ")
        : "Standard core architecture";

    return `Hi Adithiya! I was exploring your portfolio project estimator:
• Project: ${currentType.name}
• Key Features: ${featuresList}
• Target Timeline: ${currentTimeline.label} (${currentTimeline.sub})

Could we discuss a ballpark quote and your current availability?`;
  }, [currentType, activeFeatureNames, currentTimeline]);

  const toggleFeature = (id: string) => {
    setSelectedFeatures((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(generatedMessage);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
    }
  };

  return (
    <section id="estimator" className="py-24 sm:py-32 px-5 sm:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="max-w-3xl mb-16 sm:mb-20">
        <h2 className="text-[clamp(2.2rem,1.5rem+3vw,3.75rem)] font-semibold tracking-[-0.035em] leading-[1.04] text-[var(--ink)]">
          Estimate your project scope.
        </h2>
        <p className="mt-4 text-[clamp(1.0625rem,1rem+0.25vw,1.1875rem)] text-[#dedbd6] leading-relaxed max-w-2xl">
          Pick what you need. As you select features, watch your WhatsApp inquiry format in real time.
          Send it directly to get an exact quote within 12 hours.
        </p>
      </div>

      <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        {/* Left Form Column (Cols 1-7) */}
        <div className="lg:col-span-7 space-y-12">
          {/* Step 1: Project Type */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-sm font-semibold text-[var(--accent)]">
                Step 1
              </span>
              <span className="text-base font-semibold text-[var(--ink)]">
                Select your project type
              </span>
            </div>

            <div className="grid sm:grid-cols-2 gap-3">
              {projectTypes.map((type) => {
                const isSelected = selectedType === type.id;
                return (
                  <button
                    key={type.id}
                    type="button"
                    onClick={() => setSelectedType(type.id)}
                    className={`p-4 text-left transition-colors duration-150 focus-visible:outline-none ${
                      isSelected
                        ? "bg-[#25201a] text-[var(--ink)]"
                        : "bg-[var(--surface)] hover:bg-[#1f1a14] text-[#dedbd6]"
                    }`}
                  >
                    <span className="flex items-center justify-between font-semibold text-base text-[var(--ink)]">
                      <span>{type.name}</span>
                      {isSelected && (
                        <span className="w-2 h-2 rounded-full bg-[var(--accent)]" />
                      )}
                    </span>
                    <span className="block text-sm text-[var(--muted)] mt-1.5 leading-normal">
                      {type.description}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 2: Features Multi-select */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold text-[var(--accent)]">
                  Step 2
                </span>
                <span className="text-base font-semibold text-[var(--ink)]">
                  Choose key features
                </span>
              </div>
              <span className="text-sm text-[var(--muted)]">
                {selectedFeatures.length} selected
              </span>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {featureOptions.map((f) => {
                const isChecked = selectedFeatures.includes(f.id);
                return (
                  <button
                    key={f.id}
                    type="button"
                    role="checkbox"
                    aria-checked={isChecked}
                    onClick={() => toggleFeature(f.id)}
                    className={`px-3.5 py-2 text-sm font-medium transition-colors duration-150 focus-visible:outline-none flex items-center gap-2 ${
                      isChecked
                        ? "bg-[var(--accent)] text-[var(--accent-ink)]"
                        : "bg-[var(--surface)] text-[#dedbd6] hover:bg-[#221d17]"
                    }`}
                  >
                    <span>{f.name}</span>
                    {isChecked ? (
                      <Check className="w-3.5 h-3.5" />
                    ) : (
                      <span className="text-[var(--muted)]">+</span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 3: Target Timeline */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-sm font-semibold text-[var(--accent)]">
                Step 3
              </span>
              <span className="text-base font-semibold text-[var(--ink)]">
                Desired timeline
              </span>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {timelineOptions.map((t) => {
                const isSelected = selectedTimeline === t.id;
                return (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => setSelectedTimeline(t.id)}
                    className={`p-3.5 text-left transition-colors duration-150 focus-visible:outline-none ${
                      isSelected
                        ? "bg-[#25201a] text-[var(--ink)]"
                        : "bg-[var(--surface)] hover:bg-[#1f1a14] text-[#dedbd6]"
                    }`}
                  >
                    <span className="block font-semibold text-base text-[var(--ink)]">
                      {t.label}
                    </span>
                    <span className="block text-sm text-[var(--muted)] mt-0.5">
                      {t.sub}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Live Preview Column (Cols 8-12) */}
        <aside className="lg:col-span-5 sticky top-28 self-start" aria-label="Live Inquiry Preview">
          <div className="bg-[var(--surface)] p-6 sm:p-7">
            {/* Live Message Header */}
            <div className="flex items-center justify-between pb-4">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[var(--accent)]" />
                <span className="text-sm font-semibold text-[var(--ink)]">
                  Live WhatsApp Preview
                </span>
              </div>
              <span className="flex items-center gap-1.5 text-sm text-[#1fc27a]">
                <span className="w-2 h-2 rounded-full bg-[#1fc27a]" />
                Formats live
              </span>
            </div>

            {/* Simulated Chat Message Balloon */}
            <div className="p-4 sm:p-5 bg-[#100e0b] text-[var(--ink)]">
              <p className="text-sm whitespace-pre-wrap leading-relaxed text-[#dedbd6]">
                {generatedMessage}
              </p>
            </div>

            {/* Direct Action Buttons */}
            <div className="mt-6 space-y-3">
              <Button
                href={getWhatsAppUrl(generatedMessage)}
                target="_blank"
                size="lg"
                variant="primary"
                className="w-full gap-2.5"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>Send inquiry on WhatsApp</span>
              </Button>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={handleCopy}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2.5 text-sm font-medium bg-[#1a1612] text-[#dedbd6] hover:text-[var(--ink)] hover:bg-[#221d18] transition-colors focus-visible:outline-none"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-[#1fc27a]" />
                      <span>Copied to clipboard</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Copy message</span>
                    </>
                  )}
                </button>

                <a
                  href={getMailtoUrl(
                    `Project Inquiry: ${currentType.name}`,
                    generatedMessage
                  )}
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 text-sm font-medium bg-[#1a1612] text-[#dedbd6] hover:text-[var(--ink)] hover:bg-[#221d18] transition-colors focus-visible:outline-none"
                  aria-label="Send via email client instead"
                >
                  <Mail className="w-4 h-4" />
                  <span>Email</span>
                </a>
              </div>
            </div>

            <p className="mt-4 text-sm text-[var(--muted)] text-center">
              Direct reply within 12 hours · Fixed quote with no obligations
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}
