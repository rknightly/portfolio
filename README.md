# ryanknightly.com

Personal portfolio site built with [Astro](https://astro.build/) and [Tailwind CSS](https://tailwindcss.com/).

## Stack

- **Astro v5** — static site builder, compiles to pure HTML with zero JS by default
- **Tailwind CSS v4** — utility-first styling via Vite plugin
- **TypeScript** — typed content data

No frameworks (React, Vue, etc.), no animation libraries. Scroll animations use CSS + Intersection Observer.

## Project Structure

```
src/
├── pages/
│   └── index.astro          # Single-page entry point
├── layouts/
│   └── Layout.astro         # HTML shell, meta tags, scroll observer
├── components/
│   ├── Nav.astro            # Sticky nav, mobile hamburger menu
│   ├── Hero.astro           # Full-height intro section
│   ├── About.astro          # Bio + profile photo
│   ├── Experience.astro     # Work history timeline
│   ├── Projects.astro       # Project grid with "Show more" toggle
│   ├── ProjectCard.astro    # Individual project card
│   └── Footer.astro         # Social links
├── data/
│   └── index.ts             # All site content (projects, experience, etc.)
└── styles/
    └── global.css           # Tailwind directives + animation keyframes

public/images/               # Project screenshots + profile photo
```

## Development

```sh
npm install
npm run dev        # Start dev server at http://localhost:4321
npm run build      # Build to dist/
npm run preview    # Preview production build locally
```

## Deployment

Deployed to [Netlify](https://www.netlify.com/). Pushing to `master` triggers a production build. Pull requests get automatic deploy previews.
