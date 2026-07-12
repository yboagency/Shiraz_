# Shiraz Afghan Restaurant Website

A premium, frontend-only website built from scratch for **Shiraz Afghan Restaurant** in Hayes, London. The site presents the brand, showcases food and atmosphere, provides a full internal menu, includes legal pages, and works across desktop, tablet, and mobile devices.

**Repository:** [https://github.com/KhaanFaizan/Shiraz.git](https://github.com/KhaanFaizan/Shiraz.git)

---

## Project Overview

This project is a **custom frontend website** for Shiraz Afghan Restaurant. It was designed and built to deliver a high-end restaurant experience online — not as a generic template, but as a purpose-built site aligned with the restaurant’s brand, menu, and customer journey.

| Aspect | Detail |
|--------|--------|
| **Framework** | [Next.js](https://nextjs.org/) (App Router) |
| **Type** | Frontend-only — **no backend or database** |
| **Purpose** | Brand presentation, menu browsing, contact information, legal compliance pages |
| **Devices supported** | Desktop, iPad/tablet, and mobile/iPhone |
| **Content model** | Static/hardcoded frontend content (menu items, text, images) |

The website is **deployment-ready** and can be hosted on platforms such as Vercel after the code is pushed to GitHub.

---

## Project Purpose

This website was created to:

- **Replace and improve** the older deployed website experience with a more polished, modern design
- **Create a visually premium** restaurant website that reflects Shiraz’s quality and authenticity
- **Improve animations and user experience** with smooth scroll reveals, hover effects, and section transitions
- **Add a custom internal menu page** (`/menu`) instead of relying on an external menu link
- **Add legal pages** — Privacy Policy, Cookie Policy, and Terms & Conditions — linked from the footer
- **Maintain responsive design** so the site looks and works well on desktop, tablet, and mobile

There is **no online ordering, payment, or booking backend** at this stage. Reservations and contact are handled through **phone and email links**.

---

## Tech Stack

| Technology | Role in this project |
|------------|----------------------|
| **Next.js 15** | Main framework — routing, page structure, metadata (SEO), production build |
| **React 19** | UI components for all homepage sections, menu page, and legal pages |
| **TypeScript** | Type-safe component and page code (`.tsx` files) |
| **Custom CSS** | Primary styling via `public/css/chunk2.css`, plus layered styles in `animations.css`, `menu.css`, and `privacy.css` |
| **next/font (Google Fonts)** | Self-hosted font loading for Bentham, Varela Round, Catamaran, and Bilbo Swash Caps |
| **Local public assets** | Images, icons, backgrounds, and menu food photos served from the `public/` folder |
| **IntersectionObserver (JavaScript)** | Lightweight scroll-reveal behaviour without heavy animation libraries |

**Not included in this project:**

- No backend server or API
- No database
- No CMS (Content Management System)
- No Framer Motion or similar animation library
- No analytics/tracking scripts (tracker-free by design)

---

## Why Framer Motion Was Not Used

Framer Motion is a powerful React animation library, but it was **intentionally not used** in this project. That was a deliberate, performance-conscious decision:

- The site mainly needs **visual, scroll, and hover animations** — not complex gesture-driven or physics-based motion
- **CSS animations are lighter and faster**, especially on mobile devices where battery and performance matter
- Avoiding Framer Motion **reduces JavaScript bundle size**, helping pages load faster
- It **avoids hydration and layout complexity** that can occur when mixing server-rendered pages with client-side animation libraries
- It **reduces risk** of breaking delicate responsive layouts, sticky navigation, parallax-style backgrounds, and image positioning
- **CSS-based animations are sufficient** for the premium effects used here: fade-in reveals, image zoom on hover, Ken Burns–style image transitions, shimmer, sticky bars, and section polish

The result is a smooth, premium feel without adding unnecessary JavaScript overhead.

---

## Main Features

### Homepage

The homepage is a single scrolling experience made up of custom-designed sections:

- **Premium hero section** — full-screen introduction with brand logo, headline, and call-to-action
- **Animated / reveal sections** — content fades and slides into view as the user scrolls
- **Food & Drink showcase** — three featured menu cards (Starters, Main Dishes, Desserts) with images and descriptions
- **Clickable homepage menu cards** — each card links to the matching category on the internal `/menu` page (e.g. `/menu#cat-starters`)
- **About Us section** — image slider with landscape/portrait photos and feature highlights
- **Testimonials / quote section** — brand quote with scroll reveal
- **The Experience section** — photo gallery grid showcasing the restaurant atmosphere
- **Reservation section** — “Book a table” presentation with phone-based reservation CTA (Call to Book)
- **Find Us / Contact section** — address, opening hours, phone, email, and Google Maps link
- **Footer** — navigation links, hours, social links, and legal page links

### Full Menu Page (`/menu`)

A custom menu page built entirely within this project:

- **Internal `/menu` route** — no external menu dependency
- **Premium custom design** — dark, restaurant-grade layout distinct from generic templates
- **Sticky category navigation bar** — quick access to all menu sections
- **Smooth scroll to categories** — clicking a category scrolls to that section
- **Active category highlighting** — the current section is highlighted as the user scrolls
- **Food categories with local images** — starters, main courses, kebabs, biryani, karahi, seafood, pasta, sides, desserts, drinks, and more
- **Dish cards** — each card shows an image, category tag, dish name, and short description
- **Show More / Show Less** — categories with more than three dishes expand and collapse on demand
- **Chef’s Signatures featured strip** — highlighted signature dishes at the top of the menu
- **Responsive design** — optimised layouts for desktop, tablet, and mobile
- **Mobile performance optimisations** — sticky category bar and scroll behaviour tuned to reduce jitter on real devices

### Legal Pages

Three standalone legal pages, each with consistent header/footer and readable layout:

| Route | Page |
|-------|------|
| `/privacy-policy` | Privacy Policy |
| `/cookie-policy` | Cookie Policy |
| `/terms-and-conditions` | Terms & Conditions |

- Linked internally from the **footer** on every page
- Styled with dedicated legal-page CSS (`public/css/privacy.css`)
- Content aligned with the current **tracker-free, static website** behaviour (no analytics cookies described as active)

### Responsive Design

The site is built to adapt across screen sizes:

- **Desktop** — full multi-column layouts, panel-style sections, hover interactions
- **iPad / tablet** — adjusted grids, spacing, and navigation behaviour
- **Mobile / iPhone** — stacked layouts, mobile menu, horizontal scrolling category nav on the menu page where needed
- **No intentional horizontal overflow** — layouts are designed to stay within the viewport width

### Animations & UI Enhancements

- Scroll reveal animations (IntersectionObserver + CSS transitions)
- Image hover zoom on menu and gallery cards
- About Us image transition / Ken Burns–style crossfade effect
- Menu card hover polish (lift, border glow, image scale)
- Footer and contact link hover effects
- Testimonials section reveal
- Reduced heavy blur effects on mobile for better performance
- Sticky menu category bar with scroll-synced active state

---

## Project Folder Structure

Below is the important structure of the project. Paths reflect what the Next.js app uses in production.

```
Shiraz/
├── app/                          # Next.js App Router — pages and layout
│   ├── layout.tsx                # Root layout, fonts, global CSS links, SEO metadata
│   ├── page.tsx                  # Homepage (assembles all homepage sections)
│   ├── globals.css               # Minimal base reset
│   ├── menu/
│   │   └── page.tsx              # Full menu page route (/menu)
│   ├── privacy-policy/
│   │   └── page.tsx              # Privacy Policy (/privacy-policy)
│   ├── cookie-policy/
│   │   └── page.tsx              # Cookie Policy (/cookie-policy)
│   └── terms-and-conditions/
│       └── page.tsx              # Terms & Conditions (/terms-and-conditions)
│
├── components/                   # Reusable React components
│   ├── Header.tsx                # Site header and navigation
│   ├── Hero.tsx                  # Homepage hero section
│   ├── About.tsx                 # About Us section with image slider
│   ├── MenuSection.tsx           # Homepage Food & Drink showcase
│   ├── Testimonials.tsx          # Quote / testimonials section
│   ├── Gallery.tsx               # The Experience gallery
│   ├── Reservation.tsx           # Reservation / Call to Book section
│   ├── Contact.tsx               # Find Us / contact section
│   ├── Footer.tsx                # Site footer
│   ├── MenuPage.tsx              # Full menu page content and logic
│   └── ScrollReveal.tsx          # Homepage scroll-reveal behaviour
│
├── public/                       # Static assets served at the site root
│   ├── css/
│   │   ├── chunk2.css            # Main site styles (homepage, shared layout)
│   │   ├── animations.css        # Animations, hover polish, section overrides
│   │   ├── menu.css              # Menu page–specific styles
│   │   └── privacy.css           # Legal pages styles
│   ├── pictures/                 # Logos, icons, section images, backgrounds
│   ├── food/                     # Menu dish images organised by category
│   ├── favicons/                 # Favicons and web manifest
│   ├── mobilebg/                 # Mobile background textures (referenced in CSS)
│   └── media/                    # Self-hosted font files (referenced in CSS)
│
├── css/                          # Legacy/static CSS copy (parallel to public/css)
├── js/                           # Legacy static JavaScript (main.js)
├── pictures/                     # Legacy/static image copies at project root
├── index.html                    # Legacy static HTML homepage (pre–Next.js reference)
│
├── package.json                  # Project dependencies and npm scripts
├── package-lock.json             # Locked dependency versions
├── next.config.ts                # Next.js configuration (standalone output)
├── tsconfig.json                 # TypeScript configuration
├── .gitignore                    # Files excluded from Git (node_modules, .env, etc.)
└── README.md                     # This documentation file
```

**Notes for non-developers:**

- **`app/`** = where each page “lives” in the Next.js project
- **`components/`** = reusable building blocks (header, hero, menu, footer, etc.)
- **`public/`** = images, CSS, and files the browser loads directly
- **`public/food/`** = all menu dish photos, organised by food category

---

## How the Project Was Built

The website was developed in stages, focusing on quality and responsiveness at each step:

1. **Homepage layout** — established the overall page structure, typography, and premium visual direction
2. **Premium restaurant sections** — built Hero, About, Food & Drink, Gallery, Reservation, Contact, and Footer as separate components
3. **Image-based Food & Drink section** — added the three homepage menu cards with photography and links to the internal menu
4. **About Us slider and animations** — implemented the image carousel with crossfade transitions and scroll reveals
5. **Internal `/menu` page** — designed and built from scratch with category navigation, dish grids, and Show More / Show Less
6. **Local food images** — organised dish photos under `public/food/` by category (starters, main course, sides, desserts, drinks, etc.)
7. **Responsive behaviour** — refined layouts and spacing for tablet and mobile breakpoints
8. **Legal pages** — added Privacy Policy, Cookie Policy, and Terms & Conditions with consistent styling
9. **Mobile and tablet fixes** — addressed sticky navigation, scroll performance, and spacing on real devices
10. **Optimisation** — tuned scroll reveal, sticky category bar, and blur effects for smoother mobile performance

---

## Current Limitations

This version of the website is **frontend-only**. The following are **not** included:

| Limitation | What it means in practice |
|------------|---------------------------|
| **No backend** | No server-side logic for forms, orders, or user accounts |
| **No CMS** | Menu items and page text are edited directly in code files |
| **No admin panel** | Staff cannot update the menu or content through a dashboard |
| **No online ordering** | Customers cannot place food orders through the website |
| **No online booking form** | There is no form that submits reservations to a system |
| **No payment system** | No card payments or checkout flow |
| **No database** | No stored customer, order, or booking data |
| **No analytics/tracking** | No Google Analytics or similar trackers are currently installed |
| **Phone/email contact only** | Bookings and enquiries use `tel:` and `mailto:` links |
| **Static menu content** | Dish names, descriptions, and images are hardcoded in `MenuPage.tsx` |

The Reservation section displays a **“Call to Book”** button that dials the restaurant phone number — it does not submit data anywhere.

---

## Future Improvements

Possible next phases if the business wants to expand the platform:

- **Backend / admin panel** — allow staff to update menu items, prices, and descriptions without editing code
- **CMS integration** — connect to a content system (e.g. Sanity, Contentful) for easier updates
- **Online booking system** — integrated table reservations with confirmation emails
- **Online ordering** — click-and-collect or delivery ordering flow
- **Analytics with proper cookie consent** — traffic insights with GDPR-compliant consent banner
- **SEO expansion** — structured data, blog content, location landing pages
- **Image optimisation / CDN** — faster global image delivery
- **Automated deployment pipeline** — CI/CD for testing and deploying on every Git push
- **Accessibility testing** — formal WCAG audit and improvements

Any backend or admin functionality would be a **separate development phase** from this frontend release.

---

## Local Setup Instructions

Follow these steps to run the website on your computer for review or development.

### Prerequisites

- **Node.js** (LTS version recommended) — download from [https://nodejs.org/](https://nodejs.org/)
- **Git** — download from [https://git-scm.com/](https://git-scm.com/)

### Steps

1. **Clone the repository**

```bash
git clone https://github.com/KhaanFaizan/Shiraz.git
cd Shiraz
```

2. **Install dependencies**

```bash
npm install
```

3. **Start the development server**

```bash
npm run dev
```

4. **Open the site in your browser**

Visit: **http://localhost:3000**

5. **Test a production build (recommended before deployment)**

```bash
npm run build
npm start
```

Then open **http://localhost:3000** again to confirm the production build works.

### Useful npm commands

| Command | Purpose |
|---------|---------|
| `npm run dev` | Start local development server with hot reload |
| `npm run build` | Create an optimised production build |
| `npm start` | Run the production build locally |
| `npm run lint` | Run Next.js code lint checks |

---

## GitHub Push Instructions

The project repository is:

**https://github.com/KhaanFaizan/Shiraz.git**

### First-time push (new local project)

```bash
git init
git add .
git status
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/KhaanFaizan/Shiraz.git
git push -u origin main
```

### If the remote already exists

```bash
git remote set-url origin https://github.com/KhaanFaizan/Shiraz.git
git push -u origin main
```

### If GitHub rejects the push (existing README or unrelated history)

Option A — pull and merge first:

```bash
git pull origin main --allow-unrelated-histories
git push -u origin main
```

Option B — if you intentionally want to replace remote history (use with caution):

```bash
git push -u origin main --force
```

> **Note:** Force push overwrites remote history. Only use this if the team agrees the remote content should be replaced.

### Ongoing updates

```bash
git add .
git commit -m "Describe your changes here"
git push origin main
```

---

## Deployment

This is a **frontend Next.js application**. Deployment means hosting the built site so visitors can access it on the internet.

### A. Vercel Deployment (Recommended)

[Vercel](https://vercel.com/) is made by the creators of Next.js and is the **easiest and safest** option for this project.

**Step-by-step:**

1. Push your latest code to GitHub (see section above)
2. Go to [https://vercel.com/](https://vercel.com/) and sign in (GitHub login works well)
3. Click **Add New Project**
4. **Import** the GitHub repository: `KhaanFaizan/Shiraz`
5. Confirm settings:
   - **Framework Preset:** Next.js (should auto-detect)
   - **Install Command:** `npm install`
   - **Build Command:** `npm run build`
   - **Output settings:** use default Next.js settings (do not override unless instructed)
6. Click **Deploy**
7. Wait for the build to finish — Vercel will provide a live URL (e.g. `https://shiraz-xxx.vercel.app`)
8. Open the live URL and verify homepage, `/menu`, and legal pages
9. **Optional:** connect a custom domain (e.g. `shirazafghan.co.uk`) in Vercel project settings
10. Future pushes to the `main` branch on GitHub will **automatically redeploy** the site

### B. Manual Deployment on a Hosting Server

If deploying outside Vercel:

| Hosting type | Guidance |
|--------------|----------|
| **Shared hosting (static only)** | Standard Next.js apps require Node.js. Static-only hosts may not support this project without additional static-export configuration. **Vercel is strongly recommended.** |
| **VPS / Node.js server** | Install Node.js, clone the repo, run `npm install`, then `npm run build`, then `npm start`. The project is configured with `output: "standalone"` in `next.config.ts` for production server deployment. |
| **Docker / cloud VM** | Same as VPS — build with `npm run build`, run with `npm start` or use the standalone output. |

For most teams, **Vercel remains the simplest path** with the least risk of misconfiguration.

### C. Deployment Checklist

Before considering deployment complete, verify:

- [ ] `npm run build` completes without errors locally
- [ ] All images load correctly on the live site
- [ ] Homepage loads and all sections display properly
- [ ] `/menu` page works — categories, dish cards, Show More / Show Less
- [ ] Legal pages work: `/privacy-policy`, `/cookie-policy`, `/terms-and-conditions`
- [ ] Header and footer links work (including anchor links to homepage sections)
- [ ] Mobile view checked on a real phone or browser dev tools
- [ ] iPad / tablet view checked
- [ ] Desktop view checked
- [ ] No broken external menu links (menu should stay on internal `/menu`)
- [ ] No critical errors in the browser console
- [ ] Phone (`020 8569 0777`) and email links work on mobile

---

## Environment Variables

**Currently, no environment variables are required** to run or deploy this project.

If future features are added — such as analytics, a booking API, CMS integration, or payment processing — environment variables will likely be needed (for example API keys stored in a `.env.local` file).

**Important:** `.env` files must **never** be committed to GitHub. They are already listed in `.gitignore`.

---

## Final Notes for CEO / Team Lead

This project delivers a **frontend-ready, premium restaurant website** that can be deployed to production after pushing to GitHub and connecting to Vercel (or a compatible Node.js host).

**What you have today:**

- A polished brand website with homepage storytelling, photography, and animations
- A full internal menu page — no dependency on an external menu URL
- Legal pages ready for footer linking
- Responsive design for desktop, tablet, and mobile
- A clean, maintainable Next.js codebase

**What would be a separate phase:**

- Backend systems, admin dashboards, online ordering, live booking forms, payments, or analytics with consent management

**Recommended next step for go-live:**

1. Review the site locally (`npm run dev`) or on a Vercel preview URL
2. Push the approved version to GitHub
3. Deploy on Vercel
4. Connect the production domain when ready

The current focus of this release is **brand presentation, responsive UI, internal menu browsing, and legal-page readiness** — giving Shiraz Afghan Restaurant a modern digital presence without the complexity of backend infrastructure.

---

*Documentation last updated for the Next.js frontend version of the Shiraz Afghan Restaurant website.*
