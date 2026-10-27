export interface SkillItem {
  name: string;
  context: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  items: SkillItem[];
}

export const skillsData: SkillCategory[] = [
  {
    title: "Shipped on paid client projects",
    description: "Technologies I rely on every week to build, deploy, and maintain fast client applications.",
    items: [
      { name: "Next.js", context: "App Router, Server Actions, Turbopack" },
      { name: "React 19", context: "Modern hooks, concurrent features" },
      { name: "TypeScript", context: "Strict typing across client and server" },
      { name: "Tailwind CSS", context: "Design tokens, fluid typography" },
      { name: "PostgreSQL & Supabase", context: "Relational modeling, auth, row-level security" },
      { name: "MySQL", context: "Structured relational tables, performant queries" },
      { name: "Python", context: "FastAPI, document processing, AI pipelines" },
      { name: "PHP", context: "Custom backend endpoints, CMS architectures" },
      { name: "Framer Motion", context: "Micro-interactions, spring physics" },
    ],
  },
  {
    title: "Currently leveling up",
    description: "Actively studying and building internal tools with these to expand backend scalability.",
    items: [
      { name: "Docker", context: "Isolated container environments" },
      { name: "Redis", context: "In-memory caching and session queues" },
      { name: "Cloudflare Workers", context: "Edge routing and KV caching" },
    ],
  },
];

export const skillsFootnote =
  "Honest engineering note: I only list tools I have actually shipped to production or built non-trivial apps with. No inflated keyword lists.";
