# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Smile Handyman** is a bilingual (English/Korean) marketing website for a Manhattan-based handyman and tech support business. Built with Next.js 16 App Router, it's a static site with server actions for contact form email delivery.

## Technology Stack

- **Framework**: Next.js 16.1.1 (App Router)
- **Language**: TypeScript (strict mode)
- **UI**: React 19.2.3
- **Styling**: Tailwind CSS v4 (uses modern `@theme inline` syntax)
- **Animations**: Framer Motion v12
- **Icons**: Lucide React
- **Email**: Resend API (via server actions)
- **Analytics**: Vercel Speed Insights, Google Ads (on Korean page)

## Common Commands

```bash
npm run dev      # Start development server (http://localhost:3000)
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Architecture & Key Patterns

### App Router Structure

- **Root Layout** (`app/layout.tsx`): Global wrapper with Navbar, Footer, and LiveChatFAB. Contains SEO metadata and JSON-LD structured data.
- **Home Pages**:
  - English: `app/page.tsx` (renders Hero → Services → FAQ → About → ContactForm)
  - Korean: `app/ko/page.tsx` (renders Korean component variants with Google Ads tracking)
- **Path Alias**: `@/*` maps to project root (use `@/components/...` for imports)

### Internationalization Pattern

The site supports English (default) and Korean (`/ko` route):
- English components: `components/*.tsx`
- Korean components: `components/ko/*KO.tsx` (e.g., `HeroKO.tsx`, `ServicesKO.tsx`)
- Each route has its own page file with localized metadata
- Korean page includes Google Ads gtag.js and specialized structured data

### Component Architecture

All components in `components/` are self-contained React modules:
- Use `"use client"` directive when using hooks, Framer Motion, or event handlers
- Client components: Hero, Services, FAQ, ContactForm (animations/interactivity)
- Server components: Navbar, Footer (static content)
- Components use Tailwind classes directly (no CSS modules)

### Server Actions Pattern

Email functionality uses Next.js server actions:
- `app/actions.ts` contains `sendEmail()` server action
- Uses Resend API with `RESEND_API_KEY` from `.env.local`
- ContactForm components call this action with FormData
- Returns `{ success: boolean, error?: string }`
- On success, redirects to `/thank-you` page

### Styling Conventions (Tailwind v4)

- **Theme Syntax**: Uses `@theme inline` in `globals.css` with CSS custom properties
- **Responsive**: Mobile-first with `md:` and `lg:` breakpoints
- **Colors**:
  - Primary: `blue-900`, `blue-800`
  - Accent: `orange-500`, `orange-600`
  - Backgrounds: `slate-50`, `white`
  - Text: `gray-900`, `gray-600`
- **Typography**: Geist Sans (default), Geist Mono (monospace) loaded via next/font
- **Spacing**: Sections use `py-20`, containers use `mx-auto px-4 md:px-6`

### Framer Motion Animation Patterns

Standard entrance animation:
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
```

Scroll-triggered animation (for cards/sections):
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ delay: index * 0.1 }}
>
```

### SEO & Metadata

- Metadata centralized in `app/layout.tsx` with template pattern
- Title template: `"%s | Smile Handyman"`
- OpenGraph tags for social sharing (og:title, og:description, og:url, og:type)
- JSON-LD structured data for LocalBusiness schema
- Google Search Console verification via metadata
- Alternates for language variants (English ↔ Korean)

### Navigation & Routing

- Navbar uses hash anchors (`#services`, `#faq`, `#contact-form`) that match section IDs
- Smooth scroll behavior enabled via CSS
- All sections have `scroll-mt-28` utility for proper scroll offset
- Korean route (`/ko`) has separate page with Korean components

## Critical Integration Points

### Data Flow for Contact Form
1. User fills form in `ContactForm.tsx` or `ContactFormKO.tsx`
2. Form calls `handleSubmit()` with FormData
3. `sendEmail()` server action sends email via Resend API
4. On success, router pushes to `/thank-you` or `/ko/thank-you`
5. On error, displays error message in form

### Layout Inheritance
- All pages automatically inherit Navbar/Footer from `app/layout.tsx`
- No need to duplicate these components in page files
- LiveChatFAB floats on all pages via root layout

### Services Data Structure
Services are defined as arrays in component files:
```tsx
const services = [
  {
    icon: <Monitor className="w-6 h-6" />,
    title: "Service Name",
    description: "Service description",
    color: "bg-blue-100 text-blue-600",
  },
  // ...
];
```
Grid auto-renders cards - no additional component changes needed when adding services.

## Development Workflow

1. **Add New Service**: Update `services` array in `Services.tsx` or `ServicesKO.tsx`
2. **Add New Page**: Create `app/newpage/page.tsx` with default export (Layout wraps automatically)
3. **Update SEO**: Edit metadata object in page files or root layout
4. **Localization**: Create Korean variant in `components/ko/` and update `app/ko/page.tsx`

## Environment Variables

Required in `.env.local`:
- `RESEND_API_KEY`: API key for Resend email service

## Important Notes

- This is a static marketing site with no database
- All content (services, FAQs, about info) is hardcoded in components
- TypeScript strict mode is enabled - always type function props
- ESLint uses Next.js recommended config + TypeScript rules
- Tailwind v4 syntax differs from v3 - use `@theme inline` pattern, not traditional config
