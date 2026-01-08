# Smile Handyman - AI Coding Agent Instructions

## Project Overview
**Smile Handyman** is a Next.js 16 landing/service website for a Manhattan-based handyman and tech support business. It's a marketing site with multiple component-based sections showcasing services, FAQs, and company information.

### Technology Stack
- **Framework**: Next.js 16.1.1 (App Router)
- **UI**: React 19.2.3 with TypeScript
- **Styling**: Tailwind CSS v4 (modern @theme syntax)
- **Animations**: Framer Motion v12
- **Icons**: Lucide React
- **Build**: Next.js standard build/dev/start scripts

### Key Commands
```bash
npm run dev      # Start dev server (http://localhost:3000)
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Architecture & Data Flow

### Page Structure (App Router)
- **Root Layout** (`app/layout.tsx`): Wraps all pages with Navbar, Footer, and LiveChatFAB
- **Home Page** (`app/page.tsx`): Renders section components in sequence: Hero → Services → FAQ → About
- **Metadata**: Centralized in layout.tsx (SEO titles, OpenGraph, keywords)
- **Sub-pages**: Privacy policy has dedicated route (`app/privacy-policy/page.tsx`)

### Component Architecture
All components in `components/` are self-contained React modules:
- **Hero.tsx**: Landing hero section with CTA buttons (uses Framer Motion for entrance animations)
- **Services.tsx**: Grid of 6 service cards (Computer Repair, Wi-Fi, TV Mounting, Smart Home, IKEA Assembly, LED Lights)
- **FAQ.tsx**: Accordion-style Q&A section
- **About.tsx**: Company information and trust signals
- **Navbar.tsx**: Navigation with smooth scroll links
- **Footer.tsx**: Contact, links, and branding
- **LiveChatFAB.tsx**: Floating action button (likely for chat integration)

### Component Patterns
- Components marked with `"use client"` directive (Hero, Services, FAQ - client-side animations/interactivity)
- Styling uses Tailwind classes directly (no CSS modules)
- Motion animations: `initial`/`animate`/`whileInView` with `transition` and `viewport={{ once: true }}`
- Icons from lucide-react: `<Monitor />`, `<Wifi />`, `<Tv />`, `<Home />`, `<Hammer />`, `<Zap />`, `<Star />`, etc.
- Links use Next.js `<Link>` component for SPA navigation with hash anchors (`#home`, `#services`, `#faq`)
- Color classes follow pattern: primary blue (blue-900, blue-800), secondary colors per service (sky, purple, green, orange, yellow)

## Key Development Patterns

### Styling Conventions
- **Tailwind v4 syntax**: Uses `@theme inline` in globals.css with CSS custom properties
- **Spacing**: Consistent use of container width (`mx-auto px-4 md:px-6`), sections with padding (`py-20`)
- **Responsive**: Mobile-first with `md:` and `lg:` breakpoints
- **Colors**: Brand blue (blue-900 primary), slate-50 for backgrounds, gray-600 for text
- **Typography**: Geist Sans (default), Geist Mono (code) loaded via next/font

### Animation Patterns (Framer Motion)
```tsx
// Standard entrance animation
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>

// Scroll-triggered animation (for cards below hero)
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ delay: index * 0.1 }}
>
```

### SEO & Metadata
- Titles use template pattern: "Page Name | Smile Handyman"
- OpenGraph tags for social sharing (og:title, og:description, og:url, og:type)
- Keywords target local service keywords (Manhattan, NYC, neighborhood-specific)
- Keywords array in metadata for search optimization

## Cross-Component Integration Points
- **Navigation**: Navbar links scroll to hash anchors that match section IDs (`id="services"`, `id="home"`, `id="faq"`)
- **Layout Integration**: All pages inherit Navbar/Footer from root layout (no duplication)
- **Services Data**: Services array defined as local const in Services.tsx (not external API)
- **No Database**: Static content - all services, FAQs, about info are hardcoded

## Critical Workflow Notes
1. **Development**: `npm run dev` enables hot reload for component changes
2. **Type Safety**: Full TypeScript strict mode enabled - always type function props
3. **ESLint**: Uses Next.js recommended config + TypeScript rules (eslint-config-next)
4. **Path Alias**: `@/*` maps to root directory (use `@/components/...` for imports)
5. **No API Routes Yet**: This is a static marketing site - no backend integration visible

## Common Tasks & Patterns

### Adding a New Service Card
1. Update `services` array in `components/Services.tsx` with new object (icon, title, description, color)
2. Use lucide-react icon: `import { YourIcon } from "lucide-react"`
3. Follow color pattern: `bg-[color]-100 text-[color]-600` for icon container
4. Grid auto-renders cards - no component changes needed

### Updating SEO Metadata
- Edit `metadata` object in `app/layout.tsx`
- Update title template, description, keywords for global defaults
- Per-page overrides go in respective page.tsx files

### Adding a New Page/Route
1. Create directory: `app/newpage/`
2. Add `page.tsx` with default export component
3. Layout.tsx automatically wraps with Navbar/Footer
4. Use path alias imports: `@/components/ComponentName`

## Code Quality Standards
- **Linting**: Run `npm run lint` - fix any violations (component imports, unused vars, etc.)
- **Type Checking**: TypeScript strict mode enforces types - no `any` without justification
- **Component Pattern**: Functional components with hooks, "use client" when animations/events needed
- **Naming**: Components PascalCase, files match component names

## External Dependencies & Versions
- Next.js 16.1.1 (latest stable) - use App Router patterns, not Pages Router
- React 19.2.3 - modern hooks API
- Tailwind v4 - uses new @theme syntax, avoid Tailwind v3 patterns
- Framer Motion 12.23.26 - animation library, see Services.tsx for scroll-trigger examples
