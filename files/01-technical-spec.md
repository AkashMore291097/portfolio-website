# 01 — Technical specification

## Version policy

Pin nothing from memory. Before installing, run `npm view <pkg> version` and use the
current stable major unless this document names a constraint. The versions below are the
baseline the specification was written against; if a newer major is out, check its
changelog for breaking changes and report before upgrading.

## Stack decision

| Layer | Choice | Why not the alternative |
|---|---|---|
| Build | Vite 6 | Next.js brings a router, RSC, and a server we do not need for one static page. Vite ships a smaller bundle, which matters because the footer publishes the bundle size. |
| UI | React 19 | Required by brief. Use the built-in `use`, Actions, and `useOptimistic` where they simplify the chat. |
| Language | TypeScript 5.x, `strict: true` | — |
| Styling | Tailwind CSS v4 | CSS-first `@theme` config keeps tokens in one CSS file rather than a JS object. No `tailwind.config.js` needed. |
| Motion | `motion` (Framer Motion successor) | Used **only** for the hero sequence and graph. Everything else is CSS transitions. If the hero can be done in CSS keyframes, drop this dependency entirely and note the saving. |
| Graph layout | `d3-force` only | Not full `d3`. We render nodes ourselves as SVG; we need the simulation, nothing else. ~12 kB vs ~270 kB. |
| Icons | `lucide-react` | Tree-shakeable, single visual voice. |
| Tech logos | `simple-icons` | Gives single-path monochrome SVGs, which is required — we recolour them to the token palette. Import individual icons, never the whole set. |
| Hosting | Vercel | Static output plus `/api` functions in one deploy. |
| Analytics | None in v1 | Add Plausible later if wanted. No Google Analytics. |

## Dependencies

Runtime:
```
react  react-dom  motion  d3-force  lucide-react  simple-icons
@anthropic-ai/sdk        (serverless function only)
```

Dev:
```
typescript  vite  @vitejs/plugin-react  tailwindcss  @tailwindcss/vite
eslint  typescript-eslint  eslint-plugin-react-hooks  eslint-plugin-jsx-a11y
prettier  vite-plugin-compression
@types/react  @types/react-dom  @types/d3-force
```

Explicitly **not** installed: any UI kit, any carousel library, any scroll-animation
library (AOS, GSAP ScrollTrigger, react-scroll), any icon font, `axios` (use `fetch`),
`lodash`, `moment`/`date-fns` (dates here are static strings).

## Resume chat architecture

The one live piece. Deliberately simple, and its simplicity is part of the honesty story.

**Build time** (`npm run embed`, `scripts/embed.ts`):
1. Read `src/content/*.ts` — experience, projects, about, skills.
2. Chunk to ~400 tokens with 60-token overlap, preserving a `source` label per chunk
   ("Experience — Company 2", "Project — Ledger Sync").
3. Embed each chunk. Write `public/embeddings.json` — array of
   `{ id, text, source, vector }`.
4. File is committed. Target under 400 kB; if larger, reduce chunk count, do not
   quantise.

**Request time** (`api/chat.ts`, Node runtime):
1. Accept `{ question: string }`. Reject over 500 chars.
2. Embed the question.
3. Cosine similarity in memory against the loaded JSON. Top 4 chunks above a 0.35 floor.
4. If nothing clears the floor, return the documented no-answer response — do not let
   the model improvise from parametric memory.
5. Call Claude with the chunks as context and a system prompt that forbids answering
   beyond them.
6. Stream the response. Return retrieval metadata alongside: chunk sources, similarity
   scores, retrieval ms, generation ms, token counts.

**Guards:** in-memory rate limit of 8 requests per IP per hour; `max_tokens` capped;
API key server-side only; no conversation history in v1 (single-turn — say so in the UI
rather than faking memory).

The retrieval trace panel is not decoration. It is the section's actual argument: it
shows the reader a working pipeline instead of a paragraph claiming one exists.

## Performance budget

Enforced, and published in the footer. If a story breaks a budget, the story is not done.

| Metric | Budget |
|---|---|
| JS, gzipped, initial | ≤ 90 kB |
| CSS, gzipped | ≤ 12 kB |
| LCP, throttled 4G | ≤ 1.2 s |
| CLS | ≤ 0.02 |
| Lighthouse perf / a11y | ≥ 95 / 100 |

Rules that follow from the budget: fonts self-hosted as `woff2`, subset to Latin,
`font-display: swap`, preloaded for the two used in the hero. Demo videos are
`preload="none"` with a poster frame, `IntersectionObserver`-loaded, muted, `playsInline`.
`embeddings.json` is fetched only when the chat section first enters the viewport.
Graph simulation stops after settling and on `visibilitychange`.

## Accessibility

- Landmarks: one `<header>`, one `<main>`, one `<footer>`, each section a `<section>`
  with `aria-labelledby` pointing at its heading.
- Heading order: one `<h1>` (the name), `<h2>` per section, no skips.
- Focus ring: 2px accent outline with 2px offset, visible on dark surfaces, never removed.
- The graph is decorative-plus: `role="img"` with an `aria-label` summarising the stack,
  and the same information available as a plain text list for screen readers.
- Chat: `aria-live="polite"` on the response region, `aria-busy` while streaming.
- `prefers-reduced-motion: reduce` disables the hero sequence (render final state),
  freezes the graph in its settled position, and disables pulses. It does not merely
  shorten durations.

## Deployment

Vercel, static output from `dist/`, `api/` as functions. Environment: `ANTHROPIC_API_KEY`
(server only). Build command `npm run build`; the build fails on typecheck or lint error.
Footer build metrics are injected at build time via Vite `define` from the bundle stats
and `git rev-parse --short HEAD` — never hardcoded.
