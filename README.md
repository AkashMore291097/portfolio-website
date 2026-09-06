# Portfolio website

A single-page portfolio for a backend / full-stack engineer whose differentiator is
applied GenAI work (RAG, agents, voice, MCP tooling). Static site, no CMS, no auth, one
serverless function for the resume chat.

## Specs

Read before touching anything:

- [`CLAUDE.md`](./CLAUDE.md) — ground rules, workflow, repo layout, motion policy
- [`docs/00-index.md`](./docs/00-index.md) — documentation index and precedence order
- [`docs/01-technical-spec.md`](./docs/01-technical-spec.md) — stack, dependencies, chat
  architecture, performance budget, accessibility, deploy
- [`docs/02-design-system.md`](./docs/02-design-system.md) — colour, type, layout,
  primitives, motion
- [`docs/03-sections.md`](./docs/03-sections.md) — every section: layout, behaviour, states
- [`docs/04-content-rules.md`](./docs/04-content-rules.md) — honesty constraints, voice,
  placeholder tokens
- [`docs/05-anti-patterns.md`](./docs/05-anti-patterns.md) — checklist run at the end of
  every story
- [`backlog/BACKLOG.md`](./backlog/BACKLOG.md) — stories and status
- [`backlog/ICEBOX.md`](./backlog/ICEBOX.md) — deferred scope

## Running

```
npm install
cp .env.example .env      # fill in ANTHROPIC_API_KEY for the chat function
npm run dev                # Vite dev server
npm run build               # Production build
npm run verify               # tsc --noEmit && eslint . && vite build
npm run embed                 # Regenerate resume-chat embeddings from src/content
```

## Layout

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
