export interface ProcessStep {
  phase: number;
  name: string;
  summary: string;
  deliverables: string[];
}

export const processSteps: ProcessStep[] = [
  {
    phase: 1,
    name: "Discovery & Architecture",
    summary:
      "A 30-minute call or structured WhatsApp exchange. We define your customers, business goals, and required data. I deliver a fixed quote, written deliverables, and delivery timeline with no surprise charges.",
    deliverables: [
      "Fixed scope and clear price quote",
      "Site map and database data requirements",
      "Guaranteed delivery timeline",
    ],
  },
  {
    phase: 2,
    name: "Interactive Prototype",
    summary:
      "Before writing production backend code, you review a live interactive UI preview. We dial in typography, content hierarchy, mobile navigation, and user actions until you are fully satisfied.",
    deliverables: [
      "Mobile and desktop layout review",
      "Typography and color harmony aligned to your brand",
      "Feedback loop with fast direct iterations",
    ],
  },
  {
    phase: 3,
    name: "Build & Private Staging",
    summary:
      "Clean, modern engineering with strict TypeScript, responsive CSS, and fast databases. I provide you with a private staging link where you test the live application on your own phone before launch.",
    deliverables: [
      "Production-ready Next.js / React application",
      "Private staging URL for real-device testing",
      "Sub-second load times and mobile-first responsiveness",
    ],
  },
  {
    phase: 4,
    name: "Launch, SEO & Handover",
    summary:
      "We connect your custom domain, set up DNS, submit your sitemap to Google Search Console, and verify Core Web Vitals. I record a personalized video walkthrough so you have 100% control over your site.",
    deliverables: [
      "Domain and SSL setup with zero downtime",
      "SEO metadata, OpenGraph cards, and Google indexing",
      "Personalized video walkthrough + full source code ownership",
    ],
  },
];
