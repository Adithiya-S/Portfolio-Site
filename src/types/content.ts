/**
 * Content types for every data file in `src/data`.
 * Components strictly consume these interfaces.
 */

export interface NavLink {
  readonly label: string;
  readonly href: `#${string}`;
}

export interface ProjectMedia {
  /** Local path under /public, e.g. "/projects/aura/cover.webp". */
  readonly cover: string;
  readonly alt: string;
  readonly width: number;
  readonly height: number;
}

export interface Project {
  readonly slug: string;
  readonly name: string;
  readonly kind: string;
  readonly industry: string;
  readonly liveUrl: string;
  readonly problem: string;
  readonly built: string;
  readonly highlights: readonly [string, string, string];
  readonly stack: readonly string[];
  readonly details: readonly string[];
  readonly media: ProjectMedia;
  readonly flagship?: true;
}

export interface Service {
  readonly id: string;
  readonly name: string;
  readonly line: string;
  readonly deliverables: readonly string[];
  readonly timeline: string;
}

export interface SkillGroup {
  readonly id: "core" | "leveling-up";
  readonly label: string;
  readonly items: readonly string[];
}

export interface ProcessStep {
  readonly id: string;
  readonly name: string;
  readonly body: string;
}

export interface FaqItem {
  readonly id: string;
  readonly question: string;
  readonly answer: string;
}

export interface EstimatorOption {
  readonly id: string;
  readonly label: string;
}

export interface EstimatorStepData {
  readonly id: "type" | "features" | "timeline";
  readonly question: string;
  readonly multi: boolean;
  readonly options: readonly EstimatorOption[];
}
