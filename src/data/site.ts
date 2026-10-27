export const site = {
  name: "Adithiya",
  fullName: "Adithiya Shankaranarayanan",
  role: "Freelance Full-Stack Web Developer",
  college: "SRM IST Ramapuram",
  contractRole: "Contract Web Developer at Akzorium",
  location: "Chennai, India",
  city: "Chennai",
  country: "India",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://adithiya-dev.vercel.app",

  contact: {
    whatsappNumber: "917397254456",
    whatsappDisplay: "+91 73972 54456",
    email: "sgadithiya@gmail.com",
    replyHours: 12,
  },

  social: {
    github: "https://github.com/Adithiya-S",
    linkedin: "https://www.linkedin.com/in/adithiya-shankaranarayanan-53049b309/",
  },

  seo: {
    title: "Adithiya | Freelance Web Developer for Small Businesses",
    description:
      "Adithiya is a freelance web developer building fast websites and full-stack web apps for small businesses. 5 projects live. Fast replies on WhatsApp.",
  },
} as const;

export const siteConfig = {
  author: site.fullName,
  role: site.role,
  city: site.city,
  country: site.country,
  url: site.url,
  email: site.contact.email,
  replyTime: "12 hours",
  phone: {
    raw: site.contact.whatsappNumber,
    formatted: site.contact.whatsappDisplay,
  },
  socials: {
    github: site.social.github,
    linkedin: site.social.linkedin,
  },
} as const;
