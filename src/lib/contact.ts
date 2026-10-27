import { site } from "@/data/site";

export function getWhatsAppUrl(message: string): string {
  return `https://wa.me/${site.contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function getMailtoUrl(body: string, subject = "Project enquiry from your portfolio"): string {
  return `mailto:${site.contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export const contactMessages = {
  general: "Hi Adithiya, I found your portfolio and I'd like to discuss a project.",
  projectCard: (projectName: string) =>
    `Hi Adithiya, I saw your ${projectName} project and I'd like something similar. Can we talk?`,
  serviceQuote: (serviceName: string) =>
    `Hi Adithiya, I'm interested in ${serviceName}. Can you tell me how we can get started?`,
  estimator: ({ type, features, timeline }: { type: string; features: string[]; timeline: string }) =>
    `Hi Adithiya, here's my project summary:\n- Type: ${type}\n- Features: ${features.length > 0 ? features.join(", ") : "Not specified"}\n- Timeline: ${timeline}\nCan we discuss this?`,
  contactForm: ({ name, need, budget, timeline }: { name: string; need: string; budget?: string; timeline?: string }) => {
    let msg = `Hi Adithiya, my name is ${name.trim()}.\nI need: ${need.trim()}`;
    if (budget?.trim()) msg += `\nBudget: ${budget.trim()}`;
    if (timeline?.trim()) msg += `\nTimeline: ${timeline.trim()}`;
    return msg;
  },
} as const;
