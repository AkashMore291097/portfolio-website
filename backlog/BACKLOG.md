# Backlog

One story at a time. Do not start a story until the one above it is `done`.
Update the status column and the changelog at the bottom as you finish each.

## Epics

| Epic | Goal |
|---|---|
| E1 Foundation | Repo, tooling, tokens, primitives, shell. Nothing visible to a visitor. |
| E2 Narrative | Hero, About, Experience — the sections that establish who this is. |
| E3 Proof | Featured projects and their diagrams. The heaviest section. |
| E4 Differentiator | Resume chat pipeline, chat UI, capability blocks. |
| E5 Stack | Skills graph and category list. |
| E6 Close | Contact, footer, build metrics. |
| E7 Craft | Command palette, accessibility and performance audit. |

## Stories

| # | Story | Epic | Approval | Status |
|---|---|---|---|---|
| S-001 | Project setup and tooling | E1 | no | done |
| S-002 | Design tokens and UI primitives | E1 | yes | done |
| S-003 | App shell, section scaffold, nav rail | E1 | no | done |
| S-004 | Content layer and types | E1 | no | done |
| S-005 | Hero | E2 | yes | done |
| S-006 | About | E2 | no | done |
| S-007 | Experience timeline | E2 | no | todo |
| S-008 | Featured projects band | E3 | yes | todo |
| S-009 | Architecture diagrams and demo video | E3 | no | todo |
| S-010 | Embedding pipeline and chat API | E4 | no | todo |
| S-011 | Resume chat UI and retrieval trace | E4 | yes | todo |
| S-012 | AI capability blocks | E4 | no | todo |
| S-013 | Skills system graph | E5 | yes | todo |
| S-014 | Skills category list | E5 | no | todo |
| S-015 | Contact and footer with build metrics | E6 | no | todo |
| S-016 | Command palette | E7 | no | todo |
| S-017 | Accessibility and performance audit | E7 | no | todo |

`Approval: yes` means stop after the plan and wait for a human before implementing.
These are the stories where the visual direction is hardest to reverse.

## Changelog

<!-- One line per completed story: date, story id, what changed. -->
- 2026-09-06, S-001: scaffolded Vite 6 + React 19 + TypeScript 5.9 (strict) + Tailwind v4,
  ESLint 9 flat config (typescript-eslint strict, jsx-a11y, react-hooks), Prettier, repo
  directory skeleton, `.env.example`, `.gitignore`, README. `npm run verify` passes;
  confirmed a deliberate type error and an unused import both fail it. Pinned to TS 5.9
  and Vite 6.4 rather than the newer TS 7 / Vite 8 majors — TS 7 breaks typescript-eslint
  outright (see ICEBOX). Four dev deps outside the spec's exact list were required; logged
  in ICEBOX.md.
- 2026-09-06, S-002: added `@theme` tokens (six colours, eight type steps, spacing,
  three radii, two durations) to `src/styles/tokens.css`; self-hosted Instrument Serif,
  Geist, and Geist Mono as woff2 in `public/fonts` (extracted from `@fontsource` / `geist`
  npm packages, not added as dependencies), Instrument Serif preloaded in `index.html`;
  added the `.bg-grid` 48px/1.5%-opacity background utility; built Button, Chip, Panel,
  Metric, CopyLink, Disclosure in `src/components/ui/` (`Metric.condition` is a required
  prop — omitting it fails typecheck); added a dev-only `/styleguide` route
  (`src/components/dev/Styleguide.tsx`, gated on `import.meta.env.DEV`, confirmed absent
  from the prod bundle by grepping `dist/`). `npm run verify` passes. Geist/Geist Mono
  files are full-charset statics, not Latin-subsetted — no subsetting tool is in the
  stack; flagged to the user and accepted as-is (see ICEBOX). Prod JS bundle is 194 kB
  (60 kB gzip), over the 90 kB budget, but confirmed to be pure React 19/ReactDOM runtime
  from S-001 with none of this story's code included — pre-existing, out of scope here.
- 2026-09-06, S-003: added `Section` (semantic `<section>`, `aria-labelledby`, hairline
  rule, `--space-section` rhythm via new `py-section`/`py-section-mobile` Tailwind
  utilities), `NavRail` (fixed left, 8 numbered anchor links, active tick driven by
  `useActiveSection`), `ScrollProgress` (2px top bar, <1024px only), `SkipLink`, and the
  `useActiveSection` hook (`IntersectionObserver`, `rootMargin: "-45% 0px -45% 0px"`).
  Added `src/content/sections.ts` as the single source of truth for section id/number/
  label, consumed by both `App.tsx` and `NavRail`. Wired eight placeholder sections into
  `App.tsx` in scroll order from `docs/03-sections.md`, inside one `header`/`main`/
  `footer` landmark set. Hero renders as the page's one `h1` (real name lands in S-005);
  About through Contact are `h2`; Footer gets a visually-hidden `h2` so the heading
  outline is complete even though `03-sections.md` gives Footer no visible title.
  `npm run verify` passes. Confirmed `NavRail`/`ScrollProgress` visibility classes are
  exact complements at the `lg:` breakpoint. No scroll-entry animation added, per motion
  policy.
- 2026-09-06, S-004: added `src/content/types.ts` (Profile, Role, Project, Metric,
  SkillCategory, GraphNode, GraphEdge, Capability) and one file per section —
  `profile.ts`, `experience.ts` (3 roles), `projects.ts` (3 projects), `skills.ts` (6
  categories + graph nodes/edges), `capabilities.ts` (4 blocks), `strings.ts` (fixed UI
  strings verbatim from `docs/04-content-rules.md`). `Project.limits` is typed as a
  3-or-4-tuple union — confirmed by a throwaway test file that a `Project` literal
  missing `limits` fails typecheck (`TS2741`), then removed the test file.
  `docs/04-content-rules.md` has no tokens for skills/capabilities tool names (they
  aren't employer/date/metric claims) or for two of About's four fact rows; asked the
  user rather than inventing new tokens — populated skills/capabilities with generic,
  clearly-swappable stack names, and derived two About facts (`roles.length`,
  `projects.length`) from real typed data instead. Also fixed three pre-existing
  hardcoded strings in S-003's `SkipLink`/`NavRail`/`ScrollProgress` (aria-labels) by
  routing them through the new `strings.ts`, since the fixture for that now exists.
  `npm run verify` passes.
- 2026-09-06, S-005: added `Hero` (`src/components/sections/Hero.tsx`), `HeroSchematic`
  (`src/components/graph/`, abstract 6-node/6-edge SVG, one signal pulse traversing a
  traced path every 5s via a CSS `stroke-dashoffset` keyframe sized to the path's real
  length), `usePrefersReducedMotion` hook, and a pure `formatLocalTime` helper in
  `src/lib/time.ts`. Added `Profile.available` (boolean) and `Profile.timezoneId` (IANA
  zone, separate from the `timezone` display label) to `types.ts`/`profile.ts` — asked
  the user before adding both since neither is a documented placeholder token. Added
  `--height-hero-min` (640px) and `--width-hero-statement` (60ch) tokens to `tokens.css`
  rather than using arbitrary Tailwind values for the story's explicit "full viewport,
  min 640px" / "statement at 60ch" constraints. Load sequence and pulse are pure CSS
  (opacity/transform and stroke-dashoffset only — no layout properties, so CLS stays 0);
  the `motion` library was not needed and was not added, per `01-technical-spec.md`'s
  note to drop it if CSS keyframes suffice. Reduced motion fully disables the pulse (the
  path isn't rendered at all, not just un-animated) and the reveal (global CSS forces
  opacity:1/no animation). Corrected the GitHub icon to the exact path data from the
  installed `simple-icons` package instead of an approximated one; LinkedIn has no mark
  in `simple-icons` (removed at LinkedIn's request) or in `lucide-react`, so that one
  icon is hand-authored — documented inline as the sanctioned exception. `npm run verify`
  passes. Flagged, not fixed: the 500ms opacity fade on the `h1` could in principle nudge
  Chrome's LCP timing later than a same-frame-opaque paint; kept the fade since it starts
  at time 0 and is short, to be confirmed against the real LCP budget in S-017's audit
  rather than guessed now.
- 2026-09-06, S-006: added `About` (`src/components/sections/About.tsx`), built on the
  existing `Section` layout component rather than duplicating its heading treatment.
  Asymmetric grid: prose (`profile.aboutParagraph`) on columns 1–5 capped at a new
  `--width-about-prose` token (62ch, same pattern as Hero's 60ch statement token), facts
  (`profile.facts`) on columns 7–12 as a `dl` with `divide-y`/`divide-line` hairlines,
  single column below 768px with prose first in DOM order (no `order-*` overrides
  needed, unlike Hero). `App.tsx` now derives the About/Footer section labels from
  `sections.ts` with a guard that throws if either entry is missing, rather than
  duplicating the label strings inline. `npm run verify` passes. No hardcoded prose in
  the component — the only literal string is the section title, sourced from
  `sections.ts`.
