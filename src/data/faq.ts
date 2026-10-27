export interface FaqItem {
  question: string;
  answer: string;
}

export const faqItems: FaqItem[] = [
  {
    question: "Are you really a student? How does that affect my project?",
    answer:
      "I am a Computer Science student at SRM IST Ramapuram and work as a contract web developer at Akzorium Media & Tech. For you, this means modern engineering standards, responsive communication, and low overhead—you get senior-grade production code without paying inflated agency retainers.",
  },
  {
    question: "What do you need from me before we can start?",
    answer:
      "Just a rough idea of what your business does, links to sites you admire, and any existing branding or copy. If you don't have finished copy or photos yet, I help structure your content and wireframes during the discovery phase.",
  },
  {
    question: "How do payments and milestones work?",
    answer:
      "For standard websites, I work with a 50% deposit to begin architecture and design, and 50% on final launch and domain handover. For larger web apps, payments are split across three milestones (40/30/30). Every project is fixed-price with zero surprise fees.",
  },
  {
    question: "Do you provide support after the site goes live?",
    answer:
      "Yes. Every build includes 14 days of free post-launch support and bug fixes. I also record a personalized video walkthrough showing you how to update content, view inquiries, and manage your platform.",
  },
  {
    question: "What if I need updates or new features later?",
    answer:
      "You own 100% of your source code, domain, and database accounts. You can ping me on WhatsApp anytime for hourly feature updates, or easily hand off the clean TypeScript codebase to any developer in the future.",
  },
  {
    question: "Can we talk on the phone before I decide?",
    answer:
      "Yes. We can hop on a 20-minute Google Meet or WhatsApp call to review your project goals, check if we're a good fit, and answer any technical questions with no obligations.",
  },
];
