import type { Metadata, Viewport } from "next";
import { Hanken_Grotesk } from "next/font/google";
import { site } from "@/data/site";
import { faqItems } from "@/data/faq";
import "./globals.css";

const hankenGrotesk = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0c0a08",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.seo.title,
  description: site.seo.description,
  authors: [{ name: site.fullName, url: site.social.github }],
  creator: site.fullName,
  keywords: [
    "Freelance Web Developer",
    "Chennai Web Developer",
    "Next.js Developer",
    "Full-Stack Web Apps",
    "Small Business Websites",
    "Adithiya Shankaranarayanan",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    title: site.seo.title,
    description: site.seo.description,
    siteName: `${site.name} — ${site.role}`,
    images: [
      {
        url: `${site.url}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: `${site.fullName} — ${site.role}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: site.seo.title,
    description: site.seo.description,
    images: [`${site.url}/opengraph-image`],
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GSC_VERIFICATION,
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/portfolio-logo.jpg", sizes: "516x516", type: "image/jpeg" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${site.url}/#person`,
        name: site.fullName,
        jobTitle: site.role,
        url: site.url,
        email: site.contact.email,
        address: {
          "@type": "PostalAddress",
          addressLocality: site.city,
          addressCountry: site.country,
        },
        sameAs: [site.social.github, site.social.linkedin],
        worksFor: [
          {
            "@type": "Organization",
            name: "Akzorium Media and Technologies",
          },
        ],
        alumniOf: {
          "@type": "EducationalOrganization",
          name: site.college,
        },
        knowsAbout: [
          "Web Development",
          "Full-Stack Development",
          "Next.js",
          "React",
          "TypeScript",
          "Tailwind CSS",
          "Database Architecture",
          "API Integration",
        ],
      },
      {
        "@type": "ProfessionalService",
        "@id": `${site.url}/#service`,
        name: `${site.fullName} — ${site.role}`,
        url: site.url,
        telephone: site.contact.whatsappDisplay,
        address: {
          "@type": "PostalAddress",
          addressLocality: site.city,
          addressCountry: site.country,
        },
        areaServed: ["Worldwide", "India", "Chennai"],
        knowsAbout: [
          "Freelance Web Development",
          "Small Business Websites",
          "Full-Stack Web Applications",
          "Custom Dashboards",
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: faqItems.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
    ],
  };

  return (
    <html lang="en" className={`${hankenGrotesk.variable} dark scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-[100svh] bg-[var(--bg)] text-[var(--ink)] antialiased font-sans selection:bg-[var(--accent)] selection:text-[var(--accent-ink)]">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[var(--accent)] focus:text-[var(--accent-ink)] focus:font-medium focus:text-sm"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
