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
| Motion | CSS keyframes/transitions only | The hero sequence turned out to need no JS animation library at all — dropped `motion`/Framer Motion entirely, per this row's own escape hatch. |
| Skills layout | CSS keyframes, no `d3-force` | The skills section shipped as floating logo bubbles (S-013's second revision), not the force-directed dependency graph originally spec'd here — see `docs/03-sections.md` §6. |
| Icons | `lucide-react` | Tree-shakeable, single visual voice. |
| Tech logos | `simple-icons` | Gives single-path monochrome SVGs, which is required — we recolour them to the token palette. Import individual icons, never the whole set. |
| Hosting | Vercel | Static output plus `/api` functions in one deploy. |
| Analytics | None in v1 | Add Plausible later if wanted. No Google Analytics. |

## Dependencies

Runtime:
```
react  react-dom  lucide-react  simple-icons
```

Dev:
```
typescript  vite  @vitejs/plugin-react  tailwindcss  @tailwindcss/vite
eslint  typescript-eslint  eslint-plugin-react-hooks  eslint-plugin-jsx-a11y
prettier  vite-plugin-compression
@types/react  @types/react-dom
```

Explicitly **not** installed: any UI kit, any carousel library, any scroll-animation
library (AOS, GSAP ScrollTrigger, react-scroll), any icon font, `axios` (use `fetch`),
`lodash`, `moment`/`date-fns` (dates here are static strings), `motion`/Framer Motion
(the hero sequence ships as CSS keyframes, per this table's own note below), `d3-force`
(the skills section shipped as floating logo bubbles instead of a force-directed graph —
see `docs/03-sections.md` §6), `@anthropic-ai/sdk` (the resume chat below was not built).

## Resume chat architecture — NOT BUILT

**This section describes a design that was explicitly skipped, not shipped.** The
embedding pipeline (`scripts/embed.ts`, `npm run embed`), the `api/chat.ts` serverless
function, and the chat UI (§5 "AI work" in `docs/03-sections.md`) do not exist in this
repository. The decision was made directly by the user after S-009, in favour of
featuring the projects and skills sections more heavily instead — see
`backlog/BACKLOG.md`'s S-010/S-011/S-012 changelog entries for the full reasoning. The
spec below is kept for historical reference only; do not treat it as pending work unless
a new story explicitly revives it.

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
Skill bubbles pause their floating animation while the section is off-screen (via
`IntersectionObserver`) and never animate at all under `prefers-reduced-motion: reduce`.

## Accessibility

- Landmarks: one `<header>`, one `<main>`, one `<footer>`, each section a `<section>`
  with `aria-labelledby` pointing at its heading.
- Heading order: one `<h1>` (the name), `<h2>` per section, no skips.
- Focus ring: 2px accent outline with 2px offset, visible on dark surfaces, never removed.
- `prefers-reduced-motion: reduce` disables the hero sequence (render final state) and
  the skill bubbles' floating animation entirely. It does not merely shorten durations.

## Deployment

Vercel, static output from `dist/`, `api/` as functions. Environment: `ANTHROPIC_API_KEY`
(server only). Build command `npm run build`; the build fails on typecheck or lint error.
Footer build metrics are injected at build time via Vite `define` from the bundle stats
and `git rev-parse --short HEAD` — never hardcoded.
