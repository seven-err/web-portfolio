# Plan: Christian's Full-Stack Developer Portfolio

## Context
Build a polished, single-page portfolio for Christian — a BSIT student and aspiring full-stack developer. The brief requires a dark-theme, modern minimalist aesthetic with a single cyan accent color, responsive layout (desktop/tablet/mobile), and six sections: Hero, About, Skills, Projects, Education, Contact.

---

## Aesthetic Direction

**Stance:** Technical dark — clean, structured, confident. Slightly editorial grid (asymmetric compositions in Hero/About), but precise and data-driven in Skills/Projects. Avoids generic SaaS-blue in favor of electric cyan.

**Fonts (Google Fonts):**
- Display/headings: **Plus Jakarta Sans** (700/800) — modern, sharp, not overused
- Body: **Inter** (400/500) — highly legible, ubiquitous in dev contexts for a reason
- Mono labels (skill badges, tech stack chips): **Geist Mono** (400) — clean, dev-native

**Palette (dark mode always-on):**
- Background: `#09090b` (near-black, zinc-950)
- Card: `#111113` (slightly lifted surface)
- Secondary surface: `#18181b` (zinc-900)
- Border: `rgba(255,255,255,0.08)` (subtle hairline)
- Foreground: `#fafafa`
- Muted text: `#71717a`
- Accent (cyan): `#22d3ee` (Tailwind cyan-400) — used on CTAs, icons, highlights, active nav
- Accent foreground: `#09090b`

---

## Files to Modify

| File | Change |
|------|--------|
| `src/styles/fonts.css` | Add Google Fonts imports for Plus Jakarta Sans, Inter, Geist Mono |
| `src/styles/theme.css` | Update `:root` and `.dark` tokens to match dark palette above; preserve `@theme inline` block |
| `src/app/App.tsx` | Full implementation — replace placeholder |

---

## Implementation Plan

### `src/styles/fonts.css`
```css
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Inter:wght@400;500;600&family=Geist+Mono:wght@400;500&display=swap');
```

### `src/styles/theme.css`
Update `:root` tokens (the app is always dark, so `:root` itself carries the dark values; the `.dark` block stays for the Tailwind class contract):
- `--background: #09090b`
- `--foreground: #fafafa`
- `--card: #111113`
- `--card-foreground: #fafafa`
- `--primary: #22d3ee` (cyan accent)
- `--primary-foreground: #09090b`
- `--secondary: #18181b`
- `--secondary-foreground: #fafafa`
- `--muted: #18181b`
- `--muted-foreground: #71717a`
- `--accent: #22d3ee`
- `--accent-foreground: #09090b`
- `--border: rgba(255,255,255,0.08)`
- `--radius: 0.75rem`
- Keep `@theme inline` block untouched

### `src/app/App.tsx`
Single-file React component with useState for mobile nav, smooth scroll via anchor links.

**Component structure:**
```
<App>
  <Navbar />           — fixed, blur backdrop, logo + nav links + hamburger
  <HeroSection />      — z-pattern: text left, abstract visual right
  <AboutSection />
  <SkillsSection />
  <ProjectsSection />
  <EducationSection />
  <ContactSection />
  <Footer />
</App>
```

**Navbar:**
- Fixed top, `backdrop-blur-md bg-background/80`, max-w-[1280px] centered
- Logo: "Christian" in Plus Jakarta Sans bold with cyan dot or accent
- Links: Home · About · Skills · Projects · Education · Contact
- Hover/active: cyan color, subtle underline
- Mobile: hamburger icon (Menu/X from lucide-react), slide-down menu

**Hero Section:**
- Full viewport height, two-column grid on desktop (lg:grid-cols-2)
- Left: badge "BSIT Student", large H1 "Aspiring Full-Stack Developer", name "Christian" in cyan, intro text, two buttons ("View Projects" → primary cyan; "Contact Me" → outline)
- Right: abstract developer visual — SVG/CSS art depicting a terminal/code window with glowing cyan lines, or a stylized bracket `{ }` composition with floating tech labels

**About Section:**
- Two-column: left = paragraph text, right = three highlight cards (Full-Stack Dev, Database Systems, Mobile App Prototypes)
- Cards: `bg-card border border-border rounded-xl p-6`, icon + title + short description
- Icon: lucide-react icons (Code2, Database, Smartphone)

**Skills Section:**
- Section heading + four grouped category blocks
- Each category: label header in mono font + flex-wrap badge grid
- Badge style: `bg-secondary text-foreground text-sm font-mono rounded-md px-3 py-1 border border-border`
- Categories: Frontend, Backend/Database, Programming, Tools

**Projects Section:**
- Three cards in responsive grid (1-col mobile, 3-col desktop)
- Card: image placeholder (gradient bg with icon), project name, description, tech stack chips, "View Project" button
- Consistent card height, buttons aligned to card bottom

**Education Section:**
- Clean centered layout
- Single education entry: BSIT, College of Computer Studies
- Timeline-style or card style with graduation cap icon

**Contact Section:**
- Centered layout, large CTA heading
- Contact detail rows: GitHub (link), Location, Email
- Social link buttons with icons (Github, MapPin, Mail from lucide-react)
- Primary CTA button: "Get In Touch"

**Footer:**
- Simple centered: "© 2024 Christian. Built with React & TypeScript."

---

## Responsive Behavior
- `max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8` on all sections
- Hero: `lg:grid-cols-2` → single column on mobile, visual below text
- About: `lg:grid-cols-2` → stacked on mobile
- Skills: always single column with wrapped badges
- Projects: `sm:grid-cols-2 lg:grid-cols-3` → single column mobile
- Navbar: hamburger menu on `md:hidden` breakpoint

---

## Verification
1. Check all six sections render with correct content
2. Navbar sticky behavior and mobile hamburger toggle
3. Smooth scroll to sections on nav link click
4. Responsive layout at ~768px and ~1280px
5. Accent color (cyan) consistent across buttons, icons, highlights, hover states
6. No console errors, no broken layouts
