import type { Project } from "@/types/content";

export const projects: readonly Project[] = [
  {
    slug: "nrityeswarra",
    name: "Nrityeswarra",
    kind: "Dance academy management platform",
    industry: "Dance",
    liveUrl: "https://www.nrityeswarra.art/",
    flagship: true,
    problem:
      "Running a dance academy meant juggling enquiries, attendance, class packages and fees across chats and spreadsheets.",
    built:
      "A custom management platform for the academy, plus a fast public marketing site. The owner now runs leads, students, batches, attendance and invoices from one dashboard.",
    highlights: [
      "Enquiries move through a pipeline and convert to student records in one click.",
      "Attendance automatically uses up 8-class packages and warns before a package expires.",
      "Classes sync to Google Calendar, so the schedule is always on her phone.",
    ],
    stack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind v4",
      "MySQL (17 relational tables)",
      "Custom JWT auth (jose + bcrypt)",
      "Route guards",
      "Google Calendar API",
    ],
    details: [
      "Integer-based currency handling to avoid float errors.",
      "Complete invoice lifecycle management.",
      "Automated recurring session generator.",
      "Dark and light theming modes.",
      "Zero-framework marketing site with SEO and sub-second load times.",
    ],
    media: {
      cover: "/projects/nrityeswarra/cover.webp",
      alt: "Nrityeswarra dance academy platform live screenshot",
      width: 1440,
      height: 900,
    },
  },
  {
    slug: "aura",
    name: "AURA",
    kind: "AI study companion",
    industry: "Education / AI",
    liveUrl: "https://aura-aistudycompanion.vercel.app",
    problem:
      "Students lose hours to distraction, and most study tools either do nothing about it or watch you through a cloud camera.",
    built:
      "A full-stack study app that tracks focus through the webcam without any video leaving the device. It includes an AI tutor that answers from the student's own notes and slides, and flashcards that schedule themselves.",
    highlights: [
      "Gaze and drowsiness detection runs entirely in the browser.",
      "Upload PDFs, Word, PowerPoint or Excel files and the AI tutor quizzes you from them.",
      "Spaced-repetition flashcards and a focus analytics dashboard.",
    ],
    stack: [
      "React 19",
      "Vite",
      "Tailwind",
      "Framer Motion",
      "Chart.js",
      "FastAPI (Python)",
      "SQLAlchemy",
      "PostgreSQL (Supabase)",
      "Google Gemini API",
      "MediaPipe FaceMesh",
      "YOLOv8",
      "Google Sign-In",
    ],
    details: [
      "SM-2 spaced repetition algorithm for retention.",
      "RAG-style document tutoring with Socratic, deep-dive, and quiz modes.",
      "Phone detection runs locally in the browser.",
      "API rate limiting and sanitized markdown output.",
      "JWT + bcrypt authentication.",
      "Frontend deployed on Vercel, backend on Render (Docker).",
    ],
    media: {
      cover: "/projects/aura/cover.webp",
      alt: "AURA AI study companion focus dashboard screenshot",
      width: 1440,
      height: 900,
    },
  },
  {
    slug: "crossfade",
    name: "Crossfade Art House",
    kind: "Pottery studio website with a CMS",
    industry: "Art & Studio",
    liveUrl: "https://crossfadearthouse.com/",
    problem:
      "An art studio needed a site with real personality, plus a way to update workshops and blog posts without calling a developer.",
    built:
      "A hand-designed, retro-editorial website with an admin panel. The owner manages workshops, private classes, custom orders, blog posts and gallery photos on her own.",
    highlights: [
      "Admin dashboard with full content management and comment moderation.",
      "Gallery with a keyboard-friendly lightbox and an automatic image-compression pipeline for fast loading.",
      "Booking and commission enquiry flows built into the site.",
    ],
    stack: [
      "React 19",
      "Vite",
      "Tailwind",
      "Framer Motion",
      "PHP",
      "MySQL",
    ],
    details: [
      "Offline-first mock API that auto-switches to the production backend.",
      "Sharp-based image optimization pipeline for gallery assets.",
      "Custom retro-editorial design system.",
    ],
    media: {
      cover: "/projects/crossfade/cover.webp",
      alt: "Crossfade Art House editorial website screenshot",
      width: 1440,
      height: 900,
    },
  },
  {
    slug: "akzorium",
    name: "Akzorium Media & Tech",
    kind: "Digital agency website",
    industry: "Agency",
    liveUrl: "https://www.akzorium.com/",
    problem:
      "A digital agency needed a site that looks as premium as the work it sells, and turns visitors into leads.",
    built:
      "A dark, cinematic agency site with a scroll-driven animation, a project cost calculator, and lead capture that lands directly in the team's inbox.",
    highlights: [
      "Apple-style scroll animation built from a 240-frame image sequence, with a lightweight fallback on mobile.",
      "Multi-step project calculator that turns visitors into qualified enquiries.",
      "Leads arrive as formatted emails, and WhatsApp is one tap away.",
    ],
    stack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind v4",
      "Framer Motion",
      "Nodemailer",
    ],
    details: [
      "Dynamic island navigation system.",
      "Spring-physics desktop cursor response.",
      "Programmatic dark design system with cinematic pacing.",
    ],
    media: {
      cover: "/projects/akzorium/cover.webp",
      alt: "Akzorium Media and Technologies agency site screenshot",
      width: 1440,
      height: 900,
    },
  },
  {
    slug: "kompac",
    name: "Kompac Building Solutions",
    kind: "Building materials business website",
    industry: "Building Materials",
    liveUrl: "https://kompacwpc.com/",
    problem:
      "A construction-materials company needed a clear, fast site to explain technical products (WPC doors, uPVC windows, epoxy rebar coating, house lifting) to customers.",
    built:
      "A seven-page site with a clean design system, product pages with spec tables, and an enquiry form. No framework and no third-party scripts, so it loads very quickly.",
    highlights: [
      "Each product has its own page with specs and FAQs.",
      "Fast on slow mobile connections.",
      "Per-page SEO so customers can find each product.",
    ],
    stack: ["Vite", "Vanilla JavaScript", "Custom CSS"],
    details: [
      "Lightweight zero-dependency architecture for instant mobile performance.",
      "Individual specification tables and architectural CAD references.",
    ],
    media: {
      cover: "/projects/kompac/cover.webp",
      alt: "Kompac Building Solutions product showcase screenshot",
      width: 1440,
      height: 900,
    },
  },
];
