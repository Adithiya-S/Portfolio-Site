"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import type { Project } from "@/types/content";
import { getWhatsAppUrl, contactMessages } from "@/lib/contact";
import { Button } from "@/components/ui/Button";
import { X, ExternalLink, MessageSquare, CheckCircle2 } from "lucide-react";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 overflow-y-auto"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        ref={dialogRef}
        className="relative w-full max-w-3xl bg-[#14110e] p-6 sm:p-8 max-h-[90vh] overflow-y-auto text-[var(--ink)]"
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-[var(--muted)] hover:text-[var(--ink)] transition-colors focus-visible:outline-none"
          aria-label="Close project details"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="pr-8">
          <span className="text-sm font-semibold text-[var(--accent)]">
            {project.industry} · {project.kind}
          </span>
          <h2
            id="modal-project-title"
            className="text-2xl sm:text-3xl font-semibold tracking-tight text-[var(--ink)] mt-1"
          >
            {project.name}
          </h2>
        </div>

        {/* Real Screenshot Preview */}
        <div className="relative aspect-[16/10] w-full mt-6 overflow-hidden bg-[#0c0a08]">
          <Image
            src={project.media.cover}
            alt={project.media.alt}
            width={project.media.width}
            height={project.media.height}
            className="w-full h-full object-cover object-top"
          />
        </div>

        {/* Problem & Built */}
        <div className="mt-6 space-y-4 text-base leading-relaxed text-[#dedbd6]">
          <div>
            <h3 className="text-sm font-semibold text-[var(--ink)]">
              The challenge
            </h3>
            <p className="mt-1">{project.problem}</p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-[var(--ink)]">
              What was built
            </h3>
            <p className="mt-1">{project.built}</p>
          </div>
        </div>

        {/* Key Highlights */}
        <div className="mt-6">
          <h3 className="text-sm font-semibold text-[var(--ink)]">
            Key highlights
          </h3>
          <ul className="mt-2 space-y-2">
            {project.highlights.map((h, i) => (
              <li key={i} className="flex items-start gap-2.5 text-base text-[#dedbd6]">
                <CheckCircle2 className="w-4 h-4 text-[var(--accent)] flex-shrink-0 mt-1" />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Technical Deep Dive (Architecture Details) */}
        {project.details.length > 0 && (
          <div className="mt-6 pt-6 bg-[#1a1612] p-4">
            <h3 className="text-sm font-semibold text-[var(--accent)]">
              Technical architecture &amp; decisions
            </h3>
            <ul className="mt-2.5 space-y-2">
              {project.details.map((d, i) => (
                <li key={i} className="flex items-start gap-2 text-base text-[#ccc8c0]">
                  <span className="text-[var(--accent)]">·</span>
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Technology Chips */}
        <div className="mt-6">
          <h3 className="text-sm font-semibold text-[var(--ink)] mb-2">
            Technologies used
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((t) => (
              <span
                key={t}
                className="px-2.5 py-1 bg-[var(--surface)] text-[var(--ink)] text-sm font-medium"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 pt-6 flex flex-wrap items-center gap-4">
          <Button
            href={getWhatsAppUrl(contactMessages.projectCard(project.name))}
            target="_blank"
            variant="primary"
            size="md"
            className="gap-2"
          >
            <MessageSquare className="w-4 h-4 fill-current" />
            <span>I want something like this</span>
          </Button>

          <Button
            href={project.liveUrl}
            target="_blank"
            variant="secondary"
            size="md"
            className="gap-2"
          >
            <span>Visit live site</span>
            <ExternalLink className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
