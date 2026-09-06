# CLAUDE.md

Operating instructions for Claude Code on this repository. Read this before any task.

## What this is

A single-page portfolio site for a backend / full-stack engineer whose differentiator is
applied GenAI work (RAG, agents, voice, MCP tooling). Static site, no CMS, no auth,
one serverless function for the resume chat.

The site has one job: convince a technical reader in 90 seconds that the author thinks
in systems, not just in tickets. Every design and code decision is judged against that.

## Non-negotiable ground rules

1. **Honesty about scope.** The featured projects are proofs-of-concept, not production
   systems. Never write copy that implies live users, uptime, or production traffic.
   Metrics must carry the condition they were measured under. See `docs/04-content-rules.md`.
2. **One story at a time.** Do not start a story until the previous one is marked `done`
   in `backlog/BACKLOG.md`. Do not batch stories.
3. **No scope creep.** If a story tempts you into refactoring something outside its
   listed files, stop and note it in `backlog/ICEBOX.md` instead.
4. **Ask before inventing content.** Placeholder content is defined in
   `docs/04-content-rules.md`. If a section needs real data you do not have, use the
   documented placeholder token (e.g. `{{COMPANY_1_NAME}}`) — never invent a plausible
   employer, metric, or date.
5. **Quality floor, unannounced.** Responsive to 360px, visible keyboard focus on every
   interactive element, `prefers-reduced-motion` fully respected, colour contrast AA.
   These are done as a matter of course, not called out in the UI.

## Workflow for every story

1. Read the story file in `backlog/stories/`.
2. Read `docs/02-design-system.md` and the relevant part of `docs/03-sections.md`.
3. State a one-paragraph plan and the exact file list you will touch. Wait for approval
   only if the story is marked `needs-approval: true`.
4. Implement.
5. Run `npm run verify` (typecheck + lint + build). It must pass.
6. Self-critique against the story's acceptance criteria, then against
   `docs/05-anti-patterns.md`. Fix what fails.
7. Update `backlog/BACKLOG.md`: move the story to `done`, add one line on what changed.
8. Stop. Do not auto-continue to the next story.

## Repository layout

```
src/
  components/
    layout/        Nav rail, section shell, footer
    sections/      One file per page section
    ui/            Button, Chip, Panel, CopyLink — primitives only
    graph/         Skills system-graph (force layout + SVG render)
    chat/          Resume chat panel + retrieval trace
  content/         All copy and data as typed TS objects. No copy in JSX.
  hooks/
  lib/             Pure helpers. No React imports.
  styles/
api/               Vercel serverless functions
scripts/           Build-time embedding generation
docs/              Specifications. Read-only during stories.
backlog/           Stories and state.
```

## Hard rules on code

- **All copy lives in `src/content/`.** A section component that contains a hardcoded
  English sentence is a bug. This keeps content editable without touching layout.
- **No CSS-in-JS, no styled-components.** Tailwind utilities plus design tokens defined
  in `src/styles/tokens.css`.
- **No arbitrary Tailwind values for colour, type, or spacing** (`text-[#ff0000]`,
  `p-[13px]`). If a value is not in the token set, the token set is wrong — fix the
  tokens and say so.
- **No component library.** No shadcn, no MUI, no Chakra. The primitives in `ui/` are
  hand-written and there are fewer than eight of them.
- **TypeScript strict.** No `any`, no non-null assertions except in documented
  narrowing helpers.
- **No barrel files** (`index.ts` re-exports). Import directly.
- Components stay under ~150 lines. Past that, extract.

## Motion policy

Motion is expensive attention. There are exactly three sanctioned uses:

1. The hero load sequence — one orchestrated reveal, once, on first paint.
2. The skills graph — force simulation settling, then periodic path pulses.
3. Response to a user action — expanding a panel, copying an email, streaming a chat
   reply.

Scroll-triggered fade-and-rise on every section is **forbidden**. It is the single
clearest tell of a templated build. Sections appear because the user scrolled to them;
that is sufficient.

## When you are unsure

State the ambiguity and the two options with a recommendation. Do not silently pick.
Do not ask about things already answered in `docs/`.

## Commands

```
npm run dev       Vite dev server
npm run build     Production build
npm run verify    tsc --noEmit && eslint . && vite build
npm run embed     Regenerate resume-chat embeddings from src/content
```
