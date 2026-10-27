"use client";

import { useState } from "react";
import Image from "next/image";
import { projects } from "@/data/projects";
import type { Project } from "@/types/content";
import { getWhatsAppUrl, contactMessages } from "@/lib/contact";
import { Button } from "@/components/ui/Button";
import { ProjectModal } from "@/components/work/ProjectModal";
import { ExternalLink, MessageSquare, Info, CheckCircle2 } from "lucide-react";

export function SelectedWork() {
  const [modalProject, setModalProject] = useState<Project | null>(null);

  return (
    <section id="work" className="py-24 sm:py-32 px-5 sm:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="max-w-3xl mb-16 sm:mb-20">
        <h2 className="text-[clamp(2.2rem,1.5rem+3vw,3.75rem)] font-semibold tracking-[-0.035em] leading-[1.04] text-[var(--ink)]">
          Real projects, live today.
        </h2>
        <p className="mt-4 text-[clamp(1.0625rem,1rem+0.25vw,1.1875rem)] text-[#dedbd6] leading-relaxed max-w-2xl">
          Each one solved a real problem for a real business. Inspect what I built,
          the architecture decisions, and visit the live application.
        </p>
      </div>

      {/* Editorial Case Studies with alternating split rhythm */}
      <div className="space-y-20 sm:space-y-28">
        {projects.map((project, idx) => {
          const isReverse = idx % 2 === 1;

          return (
            <article
              key={project.slug}
              className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center"
            >
              {/* Screenshot Preview Column */}
              <div
                className={`lg:col-span-6 ${
                  isReverse ? "lg:order-2" : "lg:order-1"
                }`}
              >
                <div className="bg-[var(--surface)] p-4 sm:p-5">
                  <div className="flex items-center justify-between pb-3 px-1 text-sm text-[var(--muted)]">
                    <span className="flex items-center gap-1.5 text-[#1fc27a]">
                      <span className="w-2 h-2 rounded-full bg-[#1fc27a]" />
                      Live in production
                    </span>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-[var(--accent)] hover:underline"
                    >
                      <span>Visit site</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#120f0c]">
                    <Image
                      src={project.media.cover}
                      alt={project.media.alt}
                      width={project.media.width}
                      height={project.media.height}
                      className="w-full h-full object-cover object-top hover:scale-[1.02] transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>

              {/* Story & Specifications Column */}
              <div
                className={`lg:col-span-6 ${
                  isReverse ? "lg:order-1" : "lg:order-2"
                }`}
              >
                <h3 className="text-2xl sm:text-3xl font-semibold text-[var(--ink)] tracking-tight">
                  {project.name}
                </h3>

                <div className="mt-2 flex flex-wrap items-center gap-2.5 text-sm text-[var(--muted)]">
                  <span className="font-semibold text-[var(--accent)]">
                    {project.industry}
                  </span>
                  <span>·</span>
                  <span>{project.kind}</span>
                  {project.flagship && (
                    <>
                      <span>·</span>
                      <span className="font-medium text-[#1fc27a]">
                        Flagship Platform
                      </span>
                    </>
                  )}
                </div>

                {/* Problem & Built */}
                <div className="mt-5 space-y-3 text-base text-[#dedbd6] leading-relaxed">
                  <p>
                    <strong className="text-[var(--ink)] font-semibold">The problem: </strong>
                    {project.problem}
                  </p>
                  <p>
                    <strong className="text-[var(--ink)] font-semibold">What I built: </strong>
                    {project.built}
                  </p>
                </div>

                {/* Highlights */}
                <div className="mt-5">
                  <p className="text-sm font-semibold text-[var(--muted)] mb-2">
                    Key highlights
                  </p>
                  <ul className="space-y-2">
                    {project.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-base text-[#dedbd6]">
                        <CheckCircle2 className="w-4 h-4 text-[var(--accent)] flex-shrink-0 mt-1" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Stack Chips */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 bg-[var(--surface)] text-[var(--ink)] text-sm font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="mt-6 pt-4 flex flex-wrap items-center gap-3 sm:gap-4">
                  <Button
                    href={getWhatsAppUrl(contactMessages.projectCard(project.name))}
                    target="_blank"
                    size="sm"
                    variant="primary"
                    className="gap-2"
                  >
                    <MessageSquare className="w-3.5 h-3.5 fill-current" />
                    <span>I want something like this</span>
                  </Button>

                  <Button
                    href={project.liveUrl}
                    target="_blank"
                    size="sm"
                    variant="secondary"
                    className="gap-1.5"
                  >
                    <span>Live site</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </Button>

                  <button
                    type="button"
                    onClick={() => setModalProject(project)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm text-[var(--muted)] hover:text-[var(--ink)] transition-colors focus-visible:outline-none"
                  >
                    <Info className="w-3.5 h-3.5" />
                    <span>Technical details</span>
                  </button>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {/* Expanded Modal */}
      <ProjectModal
        project={modalProject}
        onClose={() => setModalProject(null)}
      />
    </section>
  );
}
