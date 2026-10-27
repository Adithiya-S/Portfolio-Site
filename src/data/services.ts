import type { Service } from "@/types/content";

export const services: readonly Service[] = [
  {
    id: "business-websites",
    name: "Business Websites",
    line: "A fast, polished website that makes your business look as good as it is, and turns visitors into enquiries.",
    deliverables: [
      "Custom responsive design",
      "Mobile-first architecture",
      "Core SEO & meta standards",
      "WhatsApp & contact integration",
      "Sub-second speed optimization",
    ],
    timeline: "1–3 weeks",
  },
  {
    id: "web-apps",
    name: "Full-Stack Web Apps",
    line: "Custom tools that replace spreadsheets and chat threads: admin dashboards, bookings, student or client management, content editing.",
    deliverables: [
      "Relational database design",
      "Secure authentication & route guards",
      "Admin control panel",
      "Workflow & booking automation",
      "Google Calendar or email integrations",
    ],
    timeline: "3–8 weeks",
  },
  {
    id: "ai-features",
    name: "AI-Powered Features",
    line: "Add smart features to your site or app, like a chat assistant that answers from your own documents, or automation that saves you hours.",
    deliverables: [
      "Document Q&A from notes and files",
      "Contextual conversational assistants",
      "Intelligent content generation tools",
      "Gemini & AI API integrations",
    ],
    timeline: "2–4 weeks",
  },
  {
    id: "redesign-performance",
    name: "Redesign & Performance",
    line: "Already have a site that feels slow, dated or confusing? I'll make it faster, cleaner and easier to use.",
    deliverables: [
      "Comprehensive performance audit",
      "Modern editorial UI redesign",
      "Core Web Vitals & accessibility fixes",
      "Technical SEO cleanup",
    ],
    timeline: "1–3 weeks",
  },
];
