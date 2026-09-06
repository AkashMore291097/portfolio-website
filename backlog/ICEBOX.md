# Icebox

Anything out of scope for the current story goes here instead of getting built.
Do not implement from this file without it being promoted to a story first.

## Deferred by decision

- **Contact form** — needs a backend and attracts spam; `mailto:` converts as well.
- **Blog / writing section** — only worth it with three real posts ready.
- **Light mode** — a theme toggle used as the only personality is a tell. Revisit only if
  the dark palette proves to be a problem for a real reader.
- **Case-study sub-pages** — the site is single-page by brief. If a project needs 1500
  words, that is a repository README.
- **Analytics** — add Plausible post-launch if wanted. Never Google Analytics.
- **Multi-turn chat memory** — v1 is single-turn and says so.
- **i18n** — no.

## Raised during build

<!-- Append: date, story that surfaced it, one line. -->
- 2026-09-06, S-001: four dev dependencies not listed in `docs/01-technical-spec.md` were
  installed because they are structurally required, not stylistic choices: `@types/node`
  (Node types for `vite.config.ts`, `api/`, `scripts/`), `@eslint/js` and `globals` (both
  required by any ESLint 9 flat config, which `typescript-eslint` 8.x needs), and `tsx`
  (needed to actually run the documented `npm run embed` command against a `.ts` file).
  Recommend adding these four to the spec's dev dependency list rather than treating them
  as drift.
- 2026-09-06, S-002: Geist and Geist Mono woff2 files in `public/fonts` are full Unicode
  charset, not Latin-subsetted (Instrument Serif is, via `@fontsource`'s pre-built
  subset). True subsetting needs a tool like `fonttools`/`pyftsubset`, not currently in
  the stack. User chose to accept the full-charset files as-is (already 45-50 kB per
  weight, static not variable) rather than add a Python subsetting toolchain for one
  build step. Revisit only if font payload becomes a real budget problem.
- 2026-09-06, S-002: prod JS bundle is 194 kB / 60 kB gzip, over the 90 kB budget in
  `docs/01-technical-spec.md`. Confirmed via `dist/` grep that this is 100% React
  19 + ReactDOM runtime from S-001's scaffold, not S-002 code (Styleguide/primitives are
  correctly tree-shaken out). Not fixed here — no story yet owns bundle-size work against
  the framework baseline itself; likely lands in S-017 (perf audit) or needs its own
  story if React's floor alone exceeds budget.
- 2026-09-06, S-003: Tailwind v4's Vite plugin content-scans the whole project by
  default, including `CLAUDE.md`. That file quotes `text-[#ff0000]` and `p-[13px]` as
  *examples of forbidden syntax* in prose, and Tailwind dutifully generated both as real
  (unused, dead) utility classes in the shipped CSS. Not a defect in `src/` — no file
  under `src/` uses arbitrary values — but it means the compiled CSS isn't literally free
  of arbitrary-value classes. Fixing requires scoping Tailwind's source scanning (e.g. an
  `@source not` exclusion for root docs/markdown), which is a build-config change outside
  S-003's file list. Flagging rather than fixing under scope creep.
- 2026-09-06, S-005: Hero's `h1` name fades in via opacity over 500ms as part of the load
  sequence. CLS stays 0 (no layout-affecting properties animate), but Chrome's LCP metric
  can in some cases score time-to-visible rather than time-to-first-paint for animated
  opacity. Kept the fade (short, starts at t=0, so risk is low) rather than force the h1
  fully opaque on first paint. Needs a real Lighthouse run to confirm the 1.2s LCP budget
  still holds — that's S-017's job, not guessed here.
