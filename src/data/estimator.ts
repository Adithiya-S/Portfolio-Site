export interface ProjectTypeOption {
  id: string;
  name: string;
  description: string;
  typicalTimeline: string;
}

export interface FeatureOption {
  id: string;
  name: string;
  category: "core" | "workflow" | "growth";
}

export interface TimelineOption {
  id: string;
  label: string;
  sub: string;
}

export const projectTypes: ProjectTypeOption[] = [
  {
    id: "business-site",
    name: "Business Website",
    description: "Fast, high-converting digital storefront for your company, studio, or consultancy.",
    typicalTimeline: "1–3 weeks",
  },
  {
    id: "webapp",
    name: "Full-Stack Web App",
    description: "Custom platform with database, authenticated accounts, and business dashboards.",
    typicalTimeline: "3–8 weeks",
  },
  {
    id: "ai-feature",
    name: "AI Feature / Automation",
    description: "Smart document assistant, conversational search, or process automation pipeline.",
    typicalTimeline: "2–4 weeks",
  },
  {
    id: "redesign",
    name: "Redesign & Performance",
    description: "Transform an outdated or sluggish site into a fast, modern editorial web experience.",
    typicalTimeline: "1–3 weeks",
  },
];

export const featureOptions: FeatureOption[] = [
  { id: "lead-pipeline", name: "Lead Pipeline & Enquiries", category: "core" },
  { id: "admin-dashboard", name: "Custom Admin Dashboard", category: "core" },
  { id: "whatsapp-direct", name: "WhatsApp Direct Actions", category: "growth" },
  { id: "auth-accounts", name: "Secure Auth & User Accounts", category: "workflow" },
  { id: "database-schema", name: "Relational Database (PostgreSQL/MySQL)", category: "core" },
  { id: "payment-gateway", name: "Payment Gateway Integration", category: "workflow" },
  { id: "ai-assistant", name: "Document Q&A / AI Assistant", category: "growth" },
  { id: "google-sync", name: "Google Calendar & Email Sync", category: "workflow" },
  { id: "seo-audit", name: "Core Web Vitals & Technical SEO", category: "growth" },
];

export const timelineOptions: TimelineOption[] = [
  { id: "urgent", label: "Urgent", sub: "Under 2 weeks" },
  { id: "standard", label: "Standard", sub: "3–4 weeks" },
  { id: "flexible", label: "Flexible", sub: "6+ weeks" },
];
