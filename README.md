# Adithiya Shankaranarayanan — Freelance Developer Portfolio

A fast, editorial portfolio website built for small business owners and startups. Crafted with Next.js 16 App Router, React 19, Tailwind CSS v4, and strict adherence to the award-winning editorial principles of `design-taste-frontend`.

---

## 🌟 Key Features

- **Warm Black & Gold Design System**: High-contrast, zero-rest-glow palette (`#0c0a08` obsidian ground, `#181512` warm surface, `#c9a45a` antique champagne gold) with `Hanken Grotesk` typography.
- **Pure CSS Marquee**: Smooth, GPU-accelerated infinite horizontal scroll showcasing 5 real production client screenshots. Pauses on hover, disables on `prefers-reduced-motion`.
- **Proof Strip & Selected Work**: Highlighting 5 live projects across 5 industries (Nrityeswarra, AURA, Crossfade, Akzorium, Kompac Building Solutions) with technical deep-dive modal dialogs and live links.
- **4 Service Rows**: Honest breakdown of deliverables and turnaround timelines (Business Websites, Full-Stack Web Apps, AI-Powered Features, Redesigns & Performance).
- **Interactive Mini Project Estimator**: Real-time project scope calculator with live WhatsApp preview card and copy-to-clipboard functionality.
- **Zero-Backend Contact Architecture**: All client actions route directly to WhatsApp (`wa.me/917397254456`) or direct email (`sgadithiya@gmail.com`).
- **Dynamic SEO & Social Sharing**: Complete JSON-LD structured data (`Person` & `ProfessionalService`), sitemap at `/sitemap.xml`, `/robots.txt`, and automated 1200x630 OpenGraph card generation via `@vercel/og`.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router, Turbopack, Cache Components)
- **Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Typography**: [Hanken Grotesk](https://fonts.google.com/specimen/Hanken+Grotesk) via `next/font/google`
- **Icons**: [Lucide React](https://lucide.dev/)
- **Social Cards**: `@vercel/og` (Edge Image Generation)

---

## 📂 Project Structure

```
├── public/
│   ├── projects/          # High-resolution screenshots of client sites
│   └── favicon.ico
├── src/
│   ├── app/
│   │   ├── globals.css          # Design tokens, color system, fluid typography
│   │   ├── layout.tsx           # SEO metadata, font definitions, JSON-LD schema
│   │   ├── page.tsx             # Single-page assembled layout
│   │   ├── opengraph-image.tsx  # Dynamic 1200x630 OpenGraph image
│   │   ├── robots.ts            # Crawler configuration
│   │   └── sitemap.ts           # Dynamic XML sitemap
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx       # Sticky high-contrast navigation bar
│   │   │   ├── Footer.tsx       # Architectural footer with verified links
│   │   │   └── PersistentCta.tsx# Fixed bottom-right quick WhatsApp trigger
│   │   ├── sections/
│   │   │   ├── Hero.tsx         # Disciplined 2-line headline & dual CTA
│   │   │   ├── ProjectMarquee.tsx# Pure CSS marquee
│   │   │   ├── ProofStrip.tsx   # Verified metrics & tech stack
│   │   │   ├── SelectedWork.tsx # Editorial split-stage case studies
│   │   │   ├── Services.tsx     # 4 full-width service tiers
│   │   │   ├── Skills.tsx       # Production tools & transparency note
│   │   │   ├── Process.tsx      # 4-stage delivery process
│   │   │   ├── Estimator.tsx    # Live WhatsApp message estimator
│   │   │   ├── Faq.tsx          # Unboxed editorial accordion
│   │   │   └── FinalCta.tsx     # Contact form with live WhatsApp generator
│   │   ├── ui/
│   │   │   └── Button.tsx       # Primary gold & secondary ghost buttons
│   │   └── work/
│   │       └── ProjectModal.tsx # Accessible project deep-dive dialog
│   ├── data/
│   │   ├── site.ts              # Author, SEO, contact channels, and socials
│   │   ├── projects.ts          # 5 client case studies and media
│   │   ├── services.ts          # 4 service offerings
│   │   ├── skills.ts            # Production tools & leveling up
│   │   ├── process.ts           # 4 delivery phases
│   │   ├── faq.ts               # 6 honest client Q&As
│   │   └── estimator.ts         # Estimator options & template
│   ├── lib/
│   │   └── contact.ts           # WhatsApp wa.me & mailto URL helpers
│   └── types/
│       └── content.ts           # TypeScript interfaces
```

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the site in your browser.

### 3. Build for Production
```bash
npm run build
npm run start
```

---

## 🎨 Design-Taste Quality Audits

The codebase is audited using the automated meters from `design-taste-frontend`:

```bash
# 1. Run static source code linter (verifies no banned patterns)
node C:\Users\thisi\.agents\skills\design-taste-frontend\scripts\lint.mjs src

# 2. Run multi-viewport headless inspector (1440px desktop, 768px tablet, 390px mobile)
node C:\Users\thisi\.agents\skills\design-taste-frontend\scripts\inspect.mjs http://localhost:3000
```
- **Lint Result**: `0 FAIL, 0 WARN`
- **Inspector Result**: `0 FAIL` across all viewports

---

## ✏️ Customization & Updating Content

- **Contact Channels**: Edit `src/data/site.ts` to update your email, phone number, or social links.
- **Projects**: Edit `src/data/projects.ts` to add or update case studies, screenshots, and live URLs.
- **Services & Pricing Scope**: Edit `src/data/services.ts` and `src/data/estimator.ts`.
- **Frequently Asked Questions**: Edit `src/data/faq.ts`.

---

## 🚢 Deploying to Vercel

1. Push this repository to your GitHub account (`git push origin main`).
2. Log in to [Vercel](https://vercel.com/) and click **Add New Project**.
3. Import your repository. Vercel automatically detects Next.js.
4. Click **Deploy**.
5. Once deployed, add your custom domain in **Project Settings → Domains**.
