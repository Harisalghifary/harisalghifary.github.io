# harisalghifary.github.io

Personal site for Haris Salman — software engineer working on AI and onchain products.
Built with Next.js 15 (App Router), React 19, TypeScript, and Tailwind CSS. Exported as
static HTML for GitHub Pages.

## Commands

```bash
npm run dev    # local dev server
npm run build  # static export to ./out
npm run start  # serve the production build
```

The site is deployed by `.github/workflows` on every push to `main`.

## Structure

```
app/
  page.tsx                 home (hero, about, stack, experience, selected work)
  projects/page.tsx        work index with search + group filters
  projects/[slug]/page.tsx project case study
  blog/page.tsx            writing index (dev.to content fetched at build time)
  blog/[slug]/page.tsx     article
  not-found.tsx            404
components/
  site-nav.tsx             fixed glass nav + mobile menu
  hero-card.tsx            the "business card" in the hero
  project-cover.tsx        real screenshot or generated placeholder cover
  project-card.tsx         grid card (work index)
  project-row.tsx          list row (home)
  projects-browser.tsx     client-side search/filter
  blog-browser.tsx         client-side search/tag filter
  contact-cta.tsx          shared contact block
  footer.tsx
  section-heading.tsx
  tech-stack.tsx
  experience.tsx
lib/
  projects.ts              single source of truth for all project content
  devto.ts                 dev.to fetch + fallback posts
  utils.ts                 cn()
```

## Adding or publishing a project

Everything lives in `lib/projects.ts`. To add a project, append an object:

```ts
{
  slug: "my-project",          // stable URL: /projects/my-project
  title: "My Project",
  tagline: "One line for cards.",
  summary: "Two or three sentences for the detail page.",
  group: "ai",                 // "ai" | "onchain" | "product"
  status: "shipped",           // "shipped" | "in-progress" | "archived"
  featured: true,              // shows on the home page
  draft: false,
  year: "2026",
  category: "Fintech",         // displayed on the cover
  role: "Solo build",
  stack: ["Go", "Next.js"],
  features: ["..."],
  challenges: ["..."],
  results: ["..."],
  links: { live: "https://...", repo: "https://..." },
}
```

`draft: true` hides a project from the site and from generated routes. The three projects
still waiting on copy (ChainMind, Bandar Swing Tracker, GitLab Duo CI/CD) are seeded that
way. Set `draft: false` once the write-up is ready.

To use a real screenshot, drop it in `public/projects/<slug>.png` and set
`cover: "/projects/<slug>.png"`. Without a cover, `project-cover.tsx` renders a
deterministic placeholder, so nothing ever looks broken.

## Design tokens

Defined once in `app/globals.css` and mapped through `tailwind.config.ts`.

| Token | Value | Use |
| --- | --- | --- |
| `background` | `#0A0A0A` | page canvas |
| `surface` | `#121212` | cards, nav base |
| `border` | `#242424` | hairlines |
| `foreground` | `#F5F5F5` | primary text |
| `muted-foreground` | `#A5A5A5` | secondary text |
| `brand` | `#5DD674` | accent, used sparingly |
| `brand-muted` | `#162F29` | tinted result cards |
| `ring` | `#569F8C` | focus outlines |

Radii: 6px default, 8px cards, full for buttons and pills. Type: Geist Sans
(`app/fonts`), display `clamp(2.25rem → 4rem)/1.05`. Motion: 200ms,
`cubic-bezier(0.22, 1, 0.36, 1)`, all transitions respect `prefers-reduced-motion`.

Use the semantic classes (`bg-surface`, `border-border`, `text-muted-foreground`,
`text-brand`) rather than raw Tailwind colors, so the palette stays in one place.