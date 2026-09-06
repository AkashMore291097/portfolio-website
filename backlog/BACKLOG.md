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
| S-007 | Experience timeline | E2 | no | done |
| S-008 | Featured projects band | E3 | yes | done |
| S-009 | Architecture diagrams and demo video | E3 | no | redefined — see changelog |
| S-010 | Embedding pipeline and chat API | E4 | no | skipped — see changelog |
| S-011 | Resume chat UI and retrieval trace | E4 | yes | skipped — see changelog |
| S-012 | AI capability blocks | E4 | no | skipped — see changelog |
| S-013 | Skills system graph | E5 | yes | done |
| S-014 | Skills category list | E5 | no | done — folded into S-013 |
| S-015 | Contact and footer with build metrics | E6 | no | done |
| S-016 | Command palette | E7 | no | done |
| S-017 | Accessibility and performance audit | E7 | no | done — see changelog |
| S-018 | Interaction polish: press states and disclosure discoverability | E7 | no | done |
| S-019 | Remove dead code, reconcile stale docs | E7 | no | done |
| S-020 | Remove Experience section | E2 | no | done — see changelog |
| S-021 | About: add photo figure, borrowed from user reference | E2 | no | done — see changelog |
| S-022 | About: move photo to right, remove facts column | E2 | no | done — see changelog |
| S-023 | About: wire up real avatar, move photo to left | E2 | no | done — see changelog |
| S-024 | About: fix excess whitespace, reinstate facts | E2 | no | done — see changelog |
| S-025 | About: enlarge avatar to fill its column | E2 | no | done — see changelog |
| S-026 | Fill in positioningStatement, contactStatement, tagline | E2 | no | done — see changelog |
| S-027 | Open external links (resume, GitHub, LinkedIn, repos) in new tab | E7 | no | done — see changelog |
| S-028 | Hero: tighten gap above the availability strip | E2 | no | done — see changelog |
| S-029 | Section heading underline: line → signal colour | E7 | no | done — see changelog |
| S-030 | Footer: remove name/tagline and build strip, keep links + copyright | E6 | no | done — see changelog |
| S-031 | Replace dummy Featured projects with real projects | E3 | no | done — see changelog |
| S-032 | Remove "What breaks at scale" from Featured projects | E3 | no | done — see changelog |
| S-033 | Featured projects: remove metrics row, rewrite copy (partial — see changelog) | E3 | no | done — see changelog |
| S-034 | Featured projects: rewrite feature bullets as capability-led copy | E3 | no | done — see changelog |
| S-035 | Remove em-dashes from user-visible copy | E3 | no | done — see changelog |
| S-036 | Add Ecommerce Order Agent as a 4th Featured project | E3 | no | done — see changelog |
| S-037 | Add missing tech-stack icons (LangGraph) | E3 | no | done — see changelog |

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
- 2026-09-06, S-007: added `Experience` (`src/components/sections/Experience.tsx`) and
  `useActiveIndex`, a ref-based generalization of `useActiveSection`'s midline
  `IntersectionObserver` pattern for tracking the active entry within one section rather
  than across pages. Timeline rule fill is pure CSS: `animation-timeline: view()` scoped
  behind `@supports` (Chrome/Edge only today; unsupported browsers keep the static
  unfilled rule rather than a broken one), zero JS scroll listeners. Reduced motion
  forces the rule to a fully filled, unanimated `--color-line` bar. Added
  `--size-timeline-node` (7px) and `--width-timeline-rail` (24px) tokens rather than
  arbitrary values for the story's explicit node size and rail layout. Caught two defects
  before they shipped: an early draft joined role and dates with a literal `·`, which
  `docs/05-anti-patterns.md` explicitly flags as a decorative-metadata tell — rebuilt as
  two separate flex items instead; and the story's "below 768px" breakpoint had drifted
  to Tailwind's `sm:` (640px) in a first draft — corrected to `md:` (768px). Also
  verified a minifier concern rather than assuming it was a bug: Lightning CSS
  re-serializes `animation-range-start`/`-end` into a compact shorthand
  (`entry cover 0%`); confirmed by round-tripping both the shorthand and longhand forms
  through the build that it's a correct equivalent serialization, not corruption, before
  settling on the explicit longhand for source readability. `npm run verify` passes on a
  clean rebuild.
- 2026-09-06, S-008: added `Projects` (`src/components/sections/Projects.tsx`) — three
  full-width bands separated by `border-t border-line`, alternating text/visual sides via
  `md:flex-row-reverse` on odd entries, with `order-1`/`order-2` forcing the visual slot
  first on mobile per the story's explicit "stack visual-first" requirement. Each band:
  `Project N of 3` (mono, `data-sm` — a genuine sequence number per
  `docs/02-design-system.md`, not decoration), serif name, problem sentence before solution
  paragraph, a `Metric` row (condition line required by the primitive's props, not
  optional), a `Chip` row for stack, a repository link, and a `Disclosure` for "What breaks
  at scale" reusing the existing primitive unmodified. The visual column is an empty
  bordered `--color-surface` slot reserved for S-009's diagrams/video — flagged in ICEBOX
  as intentionally inert rather than decorative. Closing GitHub-profile text link added
  beneath the three bands. Added two fixed strings (`viewRepositoryLabel`,
  `githubProfileLabel`) and a `projectOfLabel(order, total)` helper to `strings.ts` rather
  than composing the sequence string inline in the component. No case-study link rendered:
  `Project`/`docs/04-content-rules.md` define no `caseStudyUrl` field or token, so it was
  omitted rather than invented — logged in ICEBOX in case a real link is wanted later. No
  new `tokens.css` entries needed — layout uses only existing spacing/fraction utilities.
  `npm run verify` passes.
- 2026-09-06, S-009: redefined, not built as written. User rejected the alternating
  visual-column layout from S-008 (no real screenshots/diagrams/video exist) and
  redirected scope: no diagrams, no `DemoVideo`, no visual column of any kind — replaced
  with more content per project instead. Reworked `Projects` to a single full-width
  column per band (alternation removed, since there's nothing to alternate against):
  problem/solution kept (required by `docs/04-content-rules.md`), a new `features` list
  (3-5 short capability statements) added ahead of metrics, and stack chips upgraded to
  carry real monochrome brand-mark icons via a new `src/content/techIcons.ts` lookup
  (hand-copied path data from the installed `simple-icons` package, same convention as
  Hero's GitHub icon — not imported at runtime) with a text-only fallback for tools
  `simple-icons` doesn't carry (e.g. LangGraph). Added `Project.features: string[]` to
  `types.ts`. **`projects.ts` is now explicit dummy data** — three fabricated projects
  with invented problems, solutions, features, metrics, and stacks, added at the user's
  direct, explicit request ("just add dummy projects I'll replace it with accurate one")
  as an intentional, called-out exception to `CLAUDE.md` rule #4 rather than a silent
  invention. Every dummy metric still carries a condition line and every project still
  carries a populated `limits` block, so the file continues to satisfy the type
  constraints and anti-pattern checklist structurally — only the content itself is
  fabricated and flagged as such in the file's own header comment. **This must be
  replaced with real project data before launch** — tracked here and in ICEBOX.
  `npm run verify` passes.
- 2026-09-06, S-010/S-011/S-012: all three skipped by explicit user decision — the whole
  E4 "Differentiator" epic (embedding pipeline, chat API, chat UI with retrieval trace,
  capability blocks) will not be built. Explained the purpose and rough UI of the chat
  section and, separately, of the capability blocks before the user declined both;
  reasoning given was that the Featured projects section is enough to showcase the work.
  Consequently removed the now-permanently-empty `ai-work` entry from
  `src/content/sections.ts` rather than leaving a placeholder slot with nothing behind
  it — nav rail is now 7 items (was 8), scroll order is Hero → About → Experience →
  Featured projects → Skills → Contact → Footer, renumbered accordingly. No other file
  needed a change: `NavRail` and `App.tsx`'s placeholder-section rendering both derive
  entirely from `sections.ts`. `npm run verify` passes. Flagged in ICEBOX: `docs/03-sections.md`
  and `docs/01-technical-spec.md` still fully describe the AI work section/chat
  architecture as part of the build — those docs are now stale against this decision and
  should be updated (or annotated as "not built") if anyone reads them as the current
  spec later.
- 2026-09-06, S-013: added `SkillsGraph` (`src/components/graph/SkillsGraph.tsx`) and
  `useSkillsGraph` (`src/hooks/`) — a `d3-force` simulation seeded from an evenly spaced
  ring layout, ticked 180 times synchronously on mount, then `.stop()`'d permanently;
  confirmed via a standalone script that `.stop()` halts d3-force's internal timer, so no
  ongoing tick work happens after settling. Reduced motion skips the simulation entirely
  and renders the same deterministic ring layout with no forces applied at all — not a
  paused/frozen simulation, one that never runs. Every 6s a pulse steps through one real
  connected chain (`react → node → redis`), validated at render time against the actual
  `graphEdges` array rather than trusted as a hardcoded literal, so a future content edit
  that breaks the chain silently drops the pulse instead of animating a fake path; caption
  beneath names it as a genuine sequence. Hover highlights a node's real edges and dims
  the rest; drag (via pointer events, `lg:` and above only) reheats just the dragged
  node's position, clamped to stay inside the viewBox — nodes never reposition on their
  own after settling, only light moves, per the design system's explicit rejection of the
  floating-logo pattern. `role="img"` with a summarising `aria-label` plus a visually-
  hidden `<ul>` of every node label. Added `src/content/graphIcons.ts` (hand-copied
  `simple-icons` path data for the 8 nodes that have a mark, same convention as
  `techIcons.ts`/Hero's GitHub icon — not imported at runtime) and corrected a pre-existing
  defect in `skills.ts`: FAISS had no real icon in `simple-icons` and was substituting
  Meta's logo as a stand-in, which misleadingly implied a Meta-branded tool; changed to
  render label-only. Bundle delta for the whole story (d3-force + component + 8 icons):
  +8.70 kB gzip, comfortably under the 20 kB budget in the acceptance criteria. Caught
  during self-critique: a node's drag-cursor class read `cursor-grab ... lg:cursor-grab`,
  a meaningless duplicate that implied a grab cursor below `lg` where dragging is actually
  disabled — removed the base class so only `lg:cursor-grab` applies. Category list
  (S-014) is a separate story; `Skills` currently renders only the graph. `npm run verify`
  passes.
- 2026-09-06, S-013 (revision): user reported the rendered graph as broken and asked for
  real logo colours instead of monochrome. Found and fixed a genuine layout defect: the
  original 480×320 viewBox clamped node positions to within `NODE_RADIUS` of every edge,
  but each node's label render at `node.y + 30` — a node clamped near the bottom edge put
  its label outside the viewBox entirely, clipping it. Fixed by widening the graph to
  560×420 and clamping to an asymmetric margin (extra room on the bottom specifically for
  the label), plus bumping `forceLink` distance/`forceManyBody` strength/collision radius
  to match the larger box so nodes settle with real separation instead of bunching.
  Added `--width-skills-graph` (640px) token to cap the SVG's rendered width on very wide
  screens rather than letting a 4:3 layout stretch sparse — a real token, not an arbitrary
  value. Separately, user explicitly asked for real brand-colour logos, overriding
  `docs/02-design-system.md`'s "monochrome logos, signal only on hover" rule for this
  graph specifically — confirmed as a deliberate, recorded exception before implementing
  (see ICEBOX). Reworked `src/content/graphIcons.ts` to carry each mark's real documented
  `simple-icons` brand hex alongside its path (React's cyan, Node's green, Redis's red,
  etc.), rendered at full strength always, not just on hover/pulse. Vercel's mark is
  documented as pure black, which would be invisible on `--color-base` — rendered in
  `--color-ink` instead as an accessibility fix, not a stylistic choice. Considered
  fetching true multi-tone logo image assets (e.g. Python's real two-tone mark) instead of
  single-path recoloured icons; confirmed simple-icons only ships single-color marks and,
  after asking, the user chose real-brand-hex single-tone marks over sourcing separate
  official image assets — no new asset pipeline added. `npm run verify` passes.
- 2026-09-06, S-013 (second revision — supersedes both entries above): user provided
  their real skill list and asked to replace the settled dependency graph entirely with
  categorized sections (Backend, Frontend, GenAI & LLM, Cloud & Tools) showing floating,
  continuously-animated circular logo bubbles — confirmed explicitly before building
  since this is the literal opposite of `docs/02-design-system.md`'s stated anti-pattern
  ("not floating bubbles") and S-013's own story text; recorded as a deliberate design
  reversal in ICEBOX, not a drift. Removed `SkillsGraph`/`useSkillsGraph` entirely along
  with the `d3-force`/`@types/d3-force` dependency (confirmed unused elsewhere before
  uninstalling). Simplified `SkillCategory`/added `Skill` in `types.ts` (dropped the
  graph-specific `GraphNode`/`GraphEdge`/`chips`/`context` shape). Rewrote `skills.ts`
  with the user's real tools, picking a representative subset per category rather than
  the full raw list. Renamed `graphIcons.ts` → `skillIcons.ts` and extended it with
  Express, JavaScript, MySQL, HTML5, CSS3, Jenkins, Git, GitHub Copilot (real brand hex,
  continuing the always-on-colour exception) — Express and GitHub Copilot are also
  documented pure black in simple-icons, same `--color-ink` fix as Vercel. AWS has no
  mark in simple-icons at all (Amazon doesn't permit it there); GenAI concept terms
  (RAG, LangGraph, Embeddings, Vector Databases, Agents, Prompt Engineering, MCP, Claude
  Code) have no logo by nature. Built `SkillBubble` (`src/components/ui/`) and
  `SkillBubbles` (`src/components/sections/`): each bubble floats via a `translateY`
  keyframe with per-bubble randomized-but-deterministic duration/delay/amplitude (seeded
  by index) so bubbles don't drift in lockstep. Caught during self-critique: a first
  draft forced every bubble to a fixed 64px circle, which would clip longer concept
  labels like "Prompt Engineering"; fixed so icon bubbles stay circular at a fixed size
  while label-only bubbles size to their content as a pill instead. Floating is
  controlled entirely in JS, not fought with CSS overrides: the `animation` inline style
  is only ever applied when `prefers-reduced-motion` is off AND an `IntersectionObserver`
  reports the section on-screen, so reduced motion disables it outright (not merely
  slows it) and it pauses while scrolled away rather than animating unseen. `npm run
  verify` passes.
- 2026-09-06, S-013 (third revision): discussed with the user whether every GenAI & LLM
  term earns its own bubble; recommended trimming "Embeddings"/"Agents"/"Prompt
  Engineering" as implied-by-RAG or too generic to carry signal, but the user's reply
  addressed only icons/sizing, not the content cut — kept every originally-provided term
  rather than silently dropping content they hadn't agreed to remove. Checked simple-icons
  directly for the three logos the user asked about: LangGraph and Claude Code both have
  real marks (added to `skillIcons.ts`); AWS does not exist in simple-icons at all
  (Amazon doesn't license it there) despite being asked for, and "Vector Databases" has
  no logo because it names a category, not a specific branded product — a
  superficially-matching `siVectorlogozone` icon exists but is "Vector Logo Zone," an
  unrelated logo-asset website, and was correctly not used. Asked the user how to handle
  both missing marks rather than guessing; they chose text-only for both. Reworked
  `SkillBubble` so every bubble — icon or not — renders as the same fixed 64px circle per
  the user's explicit "all circles should look same size" request (superseding the
  previous revision's variable-width pill for long labels): label-less bubbles show a
  short initialism inside the circle (an acronym for multi-word terms, the term itself if
  ≤4 characters) with the full label given beneath, same as icon bubbles. `npm run
  verify` passes.
- 2026-09-06: fixed a real, pre-existing, site-wide layout defect reported as "big gap
  between Skills and Projects" — not unique to those two sections. `docs/02-design-
  system.md` specifies 160px/96px as the rhythm BETWEEN sections, but `--spacing-section`
  was defined as the full 160px/96px and applied as both top AND bottom padding on every
  `<section>` (`Section.tsx`'s `py-section-mobile lg:py-section`), so every section
  boundary on the page stacked 320px/192px of whitespace instead of the intended 160px/
  96px — this affected every section pair (About/Experience, Experience/Projects,
  Projects/Skills, etc.), not just the one reported. Fixed by halving both tokens in
  `tokens.css` (`--spacing-section` 160px→80px, `--spacing-section-mobile` 96px→48px) so
  each section contributes half the rhythm per side and two adjacent sections' padding
  sums to the documented total rather than doubling it — `tokens.css` had actually
  anticipated this with a stale comment ("halved via md: override at call sites") that
  was never implemented. No component changes needed since `Section.tsx` already used the
  tokens correctly; only the token values were wrong. `npm run verify` passes; confirmed
  via the compiled CSS that `.py-section`/`.py-section-mobile` now resolve to the halved
  values.
- 2026-09-06, S-014: marked done without separate implementation — folded into S-013's
  rework. S-014 was originally a plain-text category list meant to sit beneath the
  settled dependency graph; once S-013 was rebuilt as categorized bubble clusters
  (Backend, Frontend, GenAI & LLM, Cloud & Tools), that distinction no longer existed —
  the categorization S-014 wanted is already the bubbles' own structure. Confirmed with
  the user rather than assuming; they chose to fold it in rather than add a duplicate
  plain-text list alongside the bubbles.
- 2026-09-06, S-015: added `Contact` (`src/components/sections/Contact.tsx`, centred
  statement, `CopyLink` email, "Download resume", GitHub/LinkedIn text links — the only
  centred block on the page) and `Footer` (`src/components/layout/Footer.tsx`, left-
  aligned name/tagline/links, a build strip, copyright line). Reworked `CopyLink` from a
  `<button>` to a real `<a href="mailto:...">` that `preventDefault()`s only the plain
  left-click (to copy instead of navigating) while leaving middle-click, modifier-clicks,
  and the context menu's "copy link address" untouched — satisfies the acceptance
  criterion that those behave as a normal link. Extended `Button` to optionally render as
  an anchor when given `href` (a discriminated union on the `href` prop, not a new
  component) so "Download resume" can be a real download link instead of an inert
  `<button>` — also fixed Hero's pre-existing non-functional resume button from S-005
  while touching this. Both resume buttons pass an explicit `download` filename
  (`<Full-Name>-Resume.pdf`) rather than relying on the browser's URL-derived default,
  which would otherwise show the literal `{{RESUME_PATH}}` placeholder token as a
  filename. Wired the footer's build strip to the existing `__BUILD_COMMIT__`/
  `__BUILD_DATE__` (from S-001's `vite.config.ts`, previously defined but never
  consumed): commit hash links to the real GitHub commit, deploy date is computed from
  the real build timestamp. Made `vite.config.ts`'s commit-hash lookup fail the
  *production* build loudly (throws, listing the underlying git error) if `git
  rev-parse` fails, rather than the previous silent `"unknown"` fallback — `npm run dev`
  keeps the lenient fallback so a checkout without git history isn't blocked locally.
  Verified this empirically, not just by reading the code: renamed `.git` away and ran
  `npm run build`, confirmed it fails with the intended error message, then restored the
  repository (a Windows file-handle lock meant the directory couldn't be renamed back
  directly; recovered by creating a fresh `.git`, copying the old directory's contents
  into it, confirming `git status`/`git log` were intact, then deleting the stale
  locked copy — a self-inflicted risk from testing directly against the live repo rather
  than a scratch copy, noted for future test methodology). Per the story's own
  "generate or remove" rule and `docs/03-sections.md`, **gzipped bundle size and LCP are
  intentionally omitted from the strip** — bundle size can't be known inside
  `vite.config.ts`'s `define` since that runs before the bundle exists (would need a
  post-build step the user declined to add), and LCP is fundamentally a browser/
  Lighthouse measurement with no real run wired into this repo yet (deferred to S-017).
  Caught and fixed one anti-pattern before shipping: an early footer draft joined the
  commit hash and deploy date with a literal `·`, the same middle-dot-metadata tell
  caught twice before in this project — rebuilt as two separate elements. Two new
  undocumented placeholder tokens added since `docs/04-content-rules.md` has no entries
  for them: `{{CONTACT_STATEMENT}}` (Profile.contactStatement) and `{{TAGLINE}}`
  (Profile.tagline, footer) — flagged in ICEBOX rather than invented. `npm run verify`
  passes.
- 2026-09-06, S-016: added `CommandPalette` (`src/components/layout/`), `useCommandPalette`
  (open/close state, global ⌘K/Ctrl+K listener, body-scroll lock compensated by the
  measured scrollbar width so there's no layout shift, focus restored to the trigger
  element on close), and a hand-written `fuzzyMatch` subsequence matcher
  (`src/lib/fuzzyMatch.ts`) — no `cmdk` or dialog library, per the story's explicit rule.
  Actions list adjusted for what the site actually has left after earlier scope
  decisions: jump commands cover the 6 real sections (Hero through Contact — Footer
  excluded as chrome, not a destination; the "AI work" section no longer exists), plus
  download resume, copy email, open GitHub, open LinkedIn. The originally-specified
  "ask the resume chat" action is gone since S-010/011/012 were skipped. Caught two real
  defects during self-critique, not before: (1) an initial version put `onKeyDown`
  Tab-handling on a plain click-catching backdrop `div`, which jsx-a11y correctly
  flagged as non-interactive-element-interactions — replaced the backdrop with a real
  `tabIndex={-1}` `<button>` so the click-outside-to-close behaviour is on a genuinely
  interactive element; (2) the initial focus-trap implementation redirected all Tab
  presses back to the search input, which meant the arrow-key-highlighted list item was
  only a background-colour highlight, never real DOM focus — a screen reader would never
  actually hear which command was selected. Fixed with the standard combobox/listbox ARIA
  pattern instead: `role="combobox"` + `aria-activedescendant` on the input,
  `role="listbox"`/`role="option"` on the list, list buttons set `tabIndex={-1}` so the
  input remains the one real focus point throughout, matching what a screen reader
  actually needs. Verified the bundle delta (+1.26 kB gzip) against the story's 6 kB
  budget with a before/after build diff, same method used throughout this project.
  `npm run verify` passes.
- 2026-09-06: user asked for a full-site UI/modernization audit ("current UI looking so
  simple... need to polish"), no code changed. Delegated a component-by-component audit
  (read every section/layout/ui/graph component plus tokens.css against docs/02, 03, 05)
  rather than guessing, with instructions to verify claims by reading code, not
  speculate. Corrected one of my own premature claims mid-audit: `.bg-grid` IS actually
  applied (`index.html`'s `<body>`), not orphaned as I first assumed — a reminder to
  verify before reporting, not just before fixing. Confirmed findings: (1) zero
  `:active`/press states exist anywhere on the site — every interactive element jumps
  from hover straight to its resulting action; (2) Projects' "What breaks at scale"
  `Disclosure` trigger has no hover state, so a mouse user gets no signal it's clickable;
  (3) `docs/01-technical-spec.md`/`03-sections.md` still fully describe the resume chat
  section and the settled dependency graph as built, though both were removed
  (S-010/011/012 skipped; S-013 replaced by SkillBubbles) — already flagged in ICEBOX
  when each decision was made, now confirmed still unresolved; (4) `capabilities.ts`/
  `Capability` type and five chat-related strings in `strings.ts` are genuinely dead,
  unreferenced code left over from those pivots; (5) Experience's `animation-timeline:
  view()` fallback in Firefox/Safari is a static, correctly-coloured unfilled rail —
  confirmed as the intended safe fallback, not a bug. Separately and importantly: About,
  Experience, and Projects — the three sections the docs weight at 70% of the page —
  are either raw `{{PLACEHOLDER}}` tokens or explicitly-labelled dummy data; this reads
  as the larger cause of "looks simple" than any CSS gap, but is a content problem, not a
  UI one. Asked the user whether new stories should cover UI polish only or also a
  content-intake story; they chose UI polish only, content to be handled separately.
  Wrote two new stories rather than one broad "polish" story, keeping each independently
  shippable and scoped to verified findings only: `S-018-interaction-polish.md` (press
  states site-wide, Disclosure hover fix) and `S-019-cleanup-stale-docs-and-dead-code.md`
  (delete the dead content/types, correct the two stale docs, fix S-017's own stale
  scope references). Deliberately did not write a story proposing new decorative
  affordances (gradients, shadows, generic "modern SaaS" texture) since the audit found
  no evidence those are missing by oversight — they're absent by explicit design-system
  rule, and manufacturing findings to pad the list was avoided per the audit's own
  instructions. Registered both in the Stories table as `todo`.
- 2026-09-06, S-018: added a real `active:` (press) state to every interactive element
  site-wide — `Button` (both variants, `motion-safe:active:scale-95` plus a further
  border/background step per variant), nav rail links, footer's GitHub/LinkedIn/Email/
  commit links, Contact's social links, Hero's GitHub/LinkedIn icon links, Projects'
  repository/GitHub-profile links, `CopyLink`, `Disclosure`'s trigger, and command
  palette rows — closing the single clearest gap the earlier UI audit found (every
  interactive element previously jumped from hover straight to its resulting action with
  no click feedback). Plain-text links use `active:opacity-70` (no natural further colour
  step past `--color-signal` hover); `Button` and command palette rows use a background/
  border step since they're already filled/bounded surfaces. Gave `Disclosure`'s trigger
  a real hover state too (`hover:text-signal`, `group-hover:stroke-signal` on the
  triangle) — it previously had none, so a mouse user got zero signal the "What breaks
  at scale" control was clickable. `Chip` deliberately untouched (static tags, not
  controls, per the story's own constraint) and no new colour or duration token was
  added — reused `--color-signal`/`--duration-interaction` throughout, confirmed by
  grepping `tokens.css` still has exactly 6 colours and 2 durations after the change.
  `Button`'s scale press specifically uses `motion-safe:active:scale-95` rather than
  plain `active:scale-95` so the transform is excluded outright under
  `prefers-reduced-motion: reduce` — verified in the compiled CSS that
  `.motion-safe\:active\:scale-95:active` sits inside
  `@media(prefers-reduced-motion:no-preference)`, not just relying on the global
  `transition-duration: 0.001ms` override (which would still apply the scale instantly
  rather than never applying it at all — a stricter, more correct reading of "disabled
  outright, not merely shortened" than what the global override alone guarantees).
  `npm run verify` passes.
- 2026-09-06, S-019: deleted `src/content/capabilities.ts` and the unused `Capability`
  interface in `types.ts` (the never-built AI-capability-blocks section's leftover
  content), and five unused chat-related fixed strings from `strings.ts`
  (`chatEmptyState`, `chatNoMatch`, `chatRateLimit`, `chatError`, `chatSingleTurnNote`) —
  confirmed zero references to any of them anywhere in `src/` both before and after
  deletion via grep, and `npm run verify` passing after each removal, per the story's own
  safety constraint ("if removing a type/string causes a failure, stop and report rather
  than forcing it through" — nothing did). Reconciled the two stale docs: `docs/01-
  technical-spec.md`'s "Resume chat architecture" section and dependency table now say
  plainly this was not built (with a pointer to the S-010/011/012 changelog for the
  reasoning) rather than reading as pending work, and its `motion`/`d3-force`/
  `@anthropic-ai/sdk` dependency entries are corrected to reflect what's actually
  installed. `docs/03-sections.md`'s §5 "AI work" is now a short "not built" note instead
  of the full original spec (kept as a clearly-labelled historical section further down
  the file, not deleted outright, since it's genuinely useful record of what was
  considered); §6 "Skills" now describes the shipped floating-bubble implementation as
  current, with the original force-directed-graph spec demoted to a labelled "historical,
  not built" subsection beneath it. Also fixed, while touching this file and clearly
  within the same drift: the top-of-file scroll order/weighting note, the nav rail's
  stale "eight items" (now seven), and the command palette's stale "ask the resume chat"
  action. Fixed `S-017-audit.md`'s own stale scope line per this story's explicit
  acceptance criterion. `npm run verify` passes.
- 2026-09-06, S-020: removed the Experience section entirely, by direct user request
  ("why to add company experience in this website" — a personal portfolio built around a
  POC-driven GenAI differentiator, not a resume site). Deleted
  `src/components/sections/Experience.tsx`, `src/content/experience.ts`, and
  `src/hooks/useActiveIndex.ts` (Experience's only consumer, confirmed via grep before
  deleting); removed the `Role` interface and `yearsExperience` field from
  `src/content/types.ts`/`profile.ts`; dropped the `experience` entry from
  `src/content/sections.ts` (nav rail and command palette both derive their lists from
  this file generically, so neither needed a direct edit — confirmed by reading both
  before making the change); removed the Experience-only `--size-timeline-node`/
  `--width-timeline-rail` tokens and the `timeline-fill` keyframe/`@supports`/reduced-
  motion rules from `tokens.css`. About's facts row used to include "Roles held"
  (`roles.length`) — asked the user what should replace it now that `roles` is gone;
  they chose a fourth "Focus" fact ("Backend & GenAI") over dropping to three facts, so
  `Profile.facts` keeps its 4-tuple shape. Updated `docs/03-sections.md` (scroll order,
  nav rail item count 7→6, command palette section count 6→5, §3 "Experience" marked
  "NOT BUILT" with the original spec kept in a collapsed historical `<details>` block
  rather than deleted, mirroring §5's existing AI-work pattern), `docs/01-technical-
  spec.md` (left as-is — its only Experience/timeline mentions are inside the
  already-"NOT BUILT" resume-chat section, not current spec), `docs/02-design-system.md`
  (example heading swapped from "Experience" to "Featured projects"), and
  `docs/04-content-rules.md` (the Experience-specific voice rule reworded to point at
  Featured projects instead; `{{YEARS_EXPERIENCE}}`/`{{COMPANY_N_*}}` placeholder tokens
  removed from the token list with a note explaining why). Confirmed zero remaining
  references to `Experience`/`experience`/`useActiveIndex`/`timeline-fill`/
  `timeline-node`/`timeline-rail`/`roles` anywhere in `src/` via grep, and `npm run
  verify` passes (build: 62 modules, CSS 24.87 kB / gzip 5.69 kB, JS 260.92 kB / gzip
  83.88 kB — both comfortably inside budget and smaller than before, as expected for a
  deleted section).
- 2026-09-06, S-021: user shared a screenshot of a different portfolio (bold purple
  background, large full-colour cartoon avatar, uppercase heading, boxed button) and
  asked for About to look "something like this." That reference conflicts with several
  documented rules (token-only colours, no uppercase heading treatment, the photo rule
  capping any image at 160px grayscale) — confirmed with the user before touching
  anything, and they chose to keep the current design system and borrow only the
  reference's layout idea (a photo figure alongside the prose), not its colours or type
  treatment. Added `Profile.photoPath?: string` (optional — `undefined` renders a plain
  muted-outline placeholder circle, not a literal token string, since no real photo
  exists yet; documented as the one genuinely-optional entry in `04-content-rules.md`'s
  placeholder-token list, with `{{PHOTO_PATH}}` added there for when a real one is
  supplied). `About.tsx` now renders a 160px circular figure above the prose on the left
  column (`size-40` — Tailwind's own default spacing scale, not an arbitrary value —
  `rounded-full`, `grayscale` filter applied once a real photo lands), matching the
  reference's basic composition while staying entirely inside the existing token palette.
  Did not add a resume button to About (asked the user explicitly; they chose to leave it
  text/facts-only, unchanged from S-006) and did not restructure `aboutParagraph` into two
  paragraphs (asked; they chose to keep it a single string). Updated `docs/03-sections.md`
  §2 to describe the photo figure as current, and its facts example list (dropped the
  stale "primary stack" example since facts don't currently include one). `npm run verify`
  passes (build: 62 modules, CSS 25.20 kB / gzip 5.73 kB, JS 261.26 kB / gzip 83.93 kB —
  still inside budget).
- 2026-09-06, S-022: moved the S-021 photo figure to the right column and removed the
  facts column entirely, by direct user request ("add avatar at right side and remove
  the right section no needed it"). `About.tsx` is now a simple two-column layout: prose
  on columns 1–7 (`w-about-prose`, unchanged), the 160px circular photo/placeholder
  figure on columns 9–12, right-aligned. Deleted `ProfileFact` from `types.ts` and
  `Profile.facts` from both the interface and `profile.ts` (confirmed it was the sole
  reference anywhere in `src/` via grep before deleting) — this also orphaned the
  `projects` import in `profile.ts` (it existed only to compute `projects.length` for
  the now-deleted "Featured projects" fact), removed too. Noted while reading
  `profile.ts` back before editing: the user has since filled in a real
  `aboutParagraph` (no longer the `{{ABOUT_PARAGRAPH}}` placeholder) and cleared
  `contactStatement`/`tagline` to empty strings directly in content, outside this
  story's scope — left untouched, not this story's concern. Updated `docs/03-sections.md`
  §2 to describe the new column layout and explicitly note `Profile.facts`/`ProfileFact`
  no longer exist, so a future reader doesn't go looking for them. `npm run verify`
  passes (build: 62 modules, CSS 25.33 kB / gzip 5.76 kB, JS 261.18 kB / gzip 84.00 kB —
  still inside budget).
- 2026-09-06, S-023: user supplied a real illustrated avatar (asked for it to be
  generated from a photo they shared; no image-generation tool is available in this
  environment, so they generated it themselves externally and added it directly to
  `public/assets/avatar.png`). Set `Profile.photoPath = "/assets/avatar.png"`
  (Vite serves `public/` from the site root, so this resolves correctly) and moved the
  photo back to the left column with prose on the right, by direct user request — the
  reverse of S-022's arrangement. Confirmed the file on disk actually matched the
  avatar shared in chat before wiring it up. Two decisions confirmed with the user rather
  than assumed: (1) kept the avatar full colour rather than applying the site's
  documented grayscale photo rule, since it's a deliberately illustrated/branded image,
  not a plain photograph — logged as a confirmed exception in `backlog/ICEBOX.md` and
  `docs/03-sections.md` §2, not silent drift; (2) flagged that `avatar.png` is 1.3MB
  while only ever rendering at 160×160px — nearly all of that weight is invisible to a
  visitor — and asked whether to downscale/compress it; the user chose to leave it
  as-is for now, logged in ICEBOX as a page-weight gap for S-017's performance audit to
  pick up if still unaddressed by then. `npm run verify` passes (build: 62 modules, CSS
  25.29 kB / gzip 5.75 kB, JS 261.08 kB / gzip 83.99 kB — both budgets still met, though
  note these numbers don't capture the unbundled 1.3MB static asset).
- 2026-09-06, S-024: user reported About "looking so blank, too much space available."
  Two distinct causes, confirmed with the user before fixing both: (1) the 160px avatar
  sat alone in a `col-span-4` grid track (~360px wide on the 1200px container) with a lot
  of dead space around the small circle; (2) the section overall reads sparse now that
  facts were removed in S-022 and only one paragraph remains. Fixed (1) by tightening the
  photo's grid track to `col-span-3`. Fixed (2) by reinstating `ProfileFact`/
  `Profile.facts` (removed in S-022, re-added here with the same real, already-known
  values: years shipping, focus, featured projects, location — `projects.length` reused
  from `content/projects.ts` as before, no new data invented) — but stacked beneath the
  prose in the same column this time (`grid-cols-2 sm:grid-cols-4`), not as its own
  separate column like the original S-006 design, since a separate facts column would
  have reintroduced the exact "wide track, sparse content" problem this story was fixing.
  Updated `docs/03-sections.md` §2 to describe the tightened photo column and the
  facts-stacked-beneath-prose arrangement. `npm run verify` passes (build: 62 modules,
  CSS 25.39 kB / gzip 5.77 kB, JS 261.60 kB / gzip 84.09 kB — still inside budget).
- 2026-09-06, S-025: user asked for the avatar to be "a little bit larger so it covers
  the left section" — S-024 had tightened the photo's grid track to `col-span-3` but
  the image itself stayed a fixed 160px, leaving visible margin inside that track. Made
  the image scale to fill its column (`w-full` on the figure and image, `aspect-square`
  to keep it a true circle at any width, `object-cover` unchanged) capped at `max-w-64`
  (256px — up from the fixed 160px) so it doesn't grow unbounded on very wide viewports.
  Updated `docs/03-sections.md` §2 to describe the new up-to-256px, column-filling
  behaviour as specific to this branded-avatar exception, not the general ≤160px photo
  rule (which still applies if a plain photograph ever replaces this avatar). `npm run
  verify` passes (build: 62 modules, CSS 25.54 kB / gzip 5.80 kB, JS 261.63 kB / gzip
  84.10 kB — still inside budget).
- 2026-09-06, S-026: user reported Hero "looking empty, too much empty space." Root
  cause: `Profile.positioningStatement` was an empty string, so the spec'd "one sentence
  on what you build and what you are good at" line rendered nothing, leaving a visible
  gap in the hero's vertical rhythm — not a CSS/layout bug. Went through several rounds
  of drafting (the user rejected multiple AI-drafted candidates before supplying their
  own longer bio text and asking for it distilled to 2 lines) and landed on: "I build
  backend systems, APIs, and modern web applications. Now focused on Generative AI and
  Agentic AI — RAG, agents, and LLM-powered workflows." — distilled from the user's own
  wording, not invented from scratch. While fixing this, flagged two more fields with the
  identical empty-string problem rather than waiting for separate bug reports:
  `Profile.contactStatement` (feeds Contact's centred statement) and `Profile.tagline`
  (feeds Footer's one-line tagline beneath the name) — both were also empty. User opted
  to fill both now: `contactStatement` = "I'm always open to interesting backend and
  GenAI problems. Reach out if you're building one." and `tagline` = "Backend & AI
  Application Developer" (matching `professionalTitle` verbatim, by the user's explicit
  choice over two other drafted options). `npm run verify` passes (build: 62 modules,
  CSS 25.56 kB / gzip 5.81 kB, JS 261.91 kB / gzip 84.20 kB — still inside budget).
- 2026-09-06, S-027: added `target="_blank" rel="noopener noreferrer"` to every
  external, same-page-losing link site-wide: Hero's resume button and GitHub/LinkedIn
  icon links; Contact's resume button and GitHub/LinkedIn text links; Footer's
  GitHub/LinkedIn links and the commit-hash link; Projects' per-project "View
  repository" links and the closing "See more on GitHub" link. `rel="noopener
  noreferrer"` added alongside every `target="_blank"` — leaving it off is a real
  security gap (`window.opener` access) even though this project has no comment
  threads/tabnabbing surface today; cheap enough to do correctly regardless.
  Deliberately left the two `mailto:` links (Footer's Email, Contact's `CopyLink`
  email) untouched — `mailto:` hands off to the OS mail client, not a browser
  navigation, so `target="_blank"` there only leaves a stray empty tab behind; noted
  this reasoning inline as a comment in `Footer.tsx` so it isn't "fixed" back by
  mistake later. The command palette's GitHub/LinkedIn actions were already correct
  (already used `window.open(url, "_blank", "noopener,noreferrer")` via its existing
  `openInNewTab` helper) — nothing to change there, confirmed by reading it before
  editing. `npm run verify` passes (build: 62 modules, CSS 25.56 kB / gzip 5.81 kB, JS
  262.37 kB / gzip 84.23 kB — still inside budget).
- 2026-09-06, S-028: user reported extra space between "Updated September 2026" and
  "Available for work" in Hero. Cause: two stacked paddings meet at that seam — the main
  content grid's `py-16` (64px bottom) and the bottom availability strip's own `py-4`
  (16px top) — visible because Hero's `min-h-hero-min` (640px) floor with
  `justify-center` means these are the two elements sitting closest to that internal
  boundary. Fixed by splitting the main grid's `py-16` into `pt-16 pb-8`, tightening only
  the bottom side of that seam — the top spacing and the strip's own padding are
  untouched, so the hero's overall vertical centering and top rhythm are unaffected.
  `npm run verify` passes (build: 62 modules, CSS 25.65 kB / gzip 5.83 kB, JS 262.37 kB /
  gzip 84.24 kB — still inside budget).
- 2026-09-06, S-029: user asked to colour About's and Featured projects' headings
  `#ffb020` — that hex is already `--color-signal` (the site's one accent colour,
  already used for buttons/hover/focus/the availability dot), so this wasn't actually a
  request for a new arbitrary colour. But per-section heading colours would break the
  documented "one heading treatment, used everywhere" rule, since every section shares
  one `Section` component. Asked the user to choose between a scoped 2-section exception
  or applying it everywhere; they redirected instead to a broader "the site looks basic,
  suggest UX improvements" ask. Rather than silently picking a direction, proposed a
  short list of options that stay inside the project's own constraints (one accent
  colour, motion limited to 3 sanctioned uses, no gradients/shadows) — heading underline
  colour, scroll-triggered diagram pulse (reusing the existing Hero/Skills pulse
  pattern), metric count-up on scroll, or a custom ask — and the user picked the smallest
  first: change every section heading's `<hr>` underline from `--color-line` to
  `--color-signal` in `Section.tsx`, the one shared component every section renders
  through. This keeps the "one treatment everywhere" rule intact (it's still one
  treatment, applied identically to every section) while genuinely adding visible colour
  site-wide rather than to two sections only. Other `border-line` uses (Footer's top
  border, Projects' per-entry separators, Disclosure, SkillBubbles category separators)
  were deliberately left alone — those are structural dividers, not the heading rule, and
  turning them signal too would dilute the accent rather than sharpen it. Updated
  `docs/02-design-system.md`'s Section headings example and rationale. `npm run verify`
  passes (build: 62 modules, CSS 25.70 kB / gzip 5.83 kB, JS 262.37 kB / gzip 84.24 kB —
  still inside budget). More UX/polish options from the same conversation remain
  unactioned — the user has not yet picked a next one.
- 2026-09-06, S-030: user asked to remove the name/tagline block and the build-metrics
  strip (commit hash, deploy date) from Footer, keeping only social links and the
  copyright line. Flagged before removing: the build strip was a deliberate, documented
  feature from S-015 (docs/03-sections.md explicitly frames it as "this only lands
  because it is measured", i.e. proof over decoration) and S-017's still-open audit has
  an acceptance criterion assuming it exists — user confirmed removing it entirely
  rather than just hiding the name/tagline. `Footer.tsx` now renders one row: copyright
  left, GitHub/LinkedIn/Email right (user specified this exact arrangement mid-edit).
  Followed through on the resulting dead code rather than leaving it orphaned: removed
  the now-unused `commitHash()` function and its loud-fail-on-build behaviour, the
  `__BUILD_COMMIT__`/`__BUILD_DATE__` Vite `define` block from `vite.config.ts`, and
  their `declare const` lines from `vite-env.d.ts` (confirmed unreferenced anywhere in
  `src/` first) — asked the user before doing this extra cleanup rather than assuming it.
  Also removed `Profile.tagline` from `types.ts`/`profile.ts` (confirmed unreferenced
  elsewhere first; asked the user before removing, since it's content not just code).
  Updated `docs/03-sections.md` §8 to describe the new one-row footer and note what was
  removed and why; updated `S-017-audit.md`'s goal statement and struck its now-moot
  "footer build strip" acceptance criterion rather than silently deleting it, so the
  removal is traceable. `npm run verify` passes (build: 62 modules, CSS 25.59 kB / gzip
  5.81 kB, JS 261.50 kB / gzip 84.09 kB — JS actually dropped, as expected for removed
  dead code).
- 2026-09-06, S-031: user asked whether office projects could go into Featured projects;
  the structural blocker (every entry requires a real, public `repoUrl`, and office code
  is typically proprietary) was surfaced before any content was written, and the user
  confirmed only a project with a genuinely public repo qualifies. User then pointed to
  four real personal projects already checked out in the parent workspace
  (`c:\portfolio\{finvesto-api,finvesto-web,doc-gpt-api,doc-gpt-web,
  ai-crm-sales-assistant,ecommerce-order-agent}`) and asked for them to be analyzed and
  written up, ranked best-to-normal. Delegated one Explore subagent per project (or
  paired repo) with instructions to verify every claim against actual code/config/README
  rather than infer or guess, and to explicitly flag anything security-sensitive.
  Synthesized all four reports, ranked by real technical depth/breadth (not buzzword
  density): Finvesto (full-stack finance tracker, ~8,570 LOC, 37 endpoints, cron jobs,
  Redis caching, rate limiting) > DocGPT (real per-user-isolated RAG pipeline over
  Qdrant, ~2,600 LOC, 7 endpoints) > AI CRM Sales Assistant (LangGraph SQL-generation
  agent, ~550 LOC, 2 endpoints) > Ecommerce Order Agent (LangGraph order-status agent
  with a scope-check guardrail node, ~350 LOC, 3 endpoints, most similar in kind to the
  CRM assistant). Per this project's own "three projects, not six" rule, proposed
  featuring the top 3 and leaving the 4th for the GitHub-profile link; user confirmed
  this selection and order. Rewrote `src/content/projects.ts` entirely with real
  problem/solution framing, real feature lists, and metrics that are actually
  verifiable from the code (lines of code, endpoint counts, migration counts — not
  fabricated latency/throughput numbers, since none of the four projects have any real
  benchmarks on record) each with a condition line naming its source, and honest
  "what breaks at scale" bullets drawn directly from real gaps the analysis found (no
  auth on the CRM assistant, shared-collection isolation risk in DocGPT, in-process cron
  with no distributed lock in Finvesto, etc.) — not invented weaknesses. `repoUrl` for
  all three uses `{{PROJECT_N_REPO_URL}}` placeholder tokens per this project's own
  content rules, since the user will supply the real GitHub links separately. Added
  three new verified `simple-icons` brand marks to `techIcons.ts` (Node.js, Express,
  MySQL, JavaScript reused existing verified paths from `skillIcons.ts`; JSON Web
  Tokens/Sequelize/Qdrant newly added, each confirmed against the installed
  `simple-icons` package directly rather than assumed) — confirmed no real OpenAI mark
  exists in `simple-icons` (only an unrelated "OpenAI Gym" icon, correctly not
  substituted), so OpenAI is omitted from all three stacks' displayed chips even though
  it's used internally by DocGPT and the CRM assistant. `npm run verify` passes (build:
  62 modules, CSS 25.59 kB / gzip 5.81 kB, JS 272.54 kB / gzip 86.34 kB — still under the
  90 kB gzip budget).

  **Security note, not a copy matter:** every one of the four analyzed projects has the
  same real-looking OpenAI API key sitting in a local, gitignored `.env` file (confirmed
  not committed to git history in any of the four repos). Flagged directly to the user:
  since the same live key has been sitting in plaintext across multiple project folders
  on this machine, it should be rotated in the OpenAI dashboard regardless of whether any
  repo is made public. Not an action taken by this story — purely a finding surfaced
  during the analysis.
- 2026-09-06, S-032: user asked to remove the "What breaks at scale" section from
  Featured projects. Flagged before removing: `docs/04-content-rules.md` called this
  "the highest-signal content on the page" and the section's own argument for reading as
  confidence rather than a disclaimer badge — a real content-strategy reversal, not
  tidying. User confirmed removal across all 3 projects. Removed the `Disclosure`
  usage and its `limits.map(...)` list from `Projects.tsx`; removed the `limits` field
  entirely from the `Project` interface in `types.ts`; removed the `limits` arrays from
  all 3 entries in `projects.ts`. Left the `Disclosure` UI primitive itself untouched —
  it's a generic expander, still demonstrated in the dev styleguide and used nowhere
  else, so nothing else depends on this removal. `strings.ts`'s `disclosureLabel`
  ("What breaks at scale") also left as-is since the Styleguide's own Disclosure demo
  still references it. Updated `docs/03-sections.md` §4 (struck the disclosure line from
  the ASCII mockup and its bullet, with a pointer to this changelog entry),
  `docs/04-content-rules.md` (marked the whole subsection "REMOVED" rather than deleting
  it outright, preserving the original reasoning for possible future reference),
  `docs/05-anti-patterns.md` (struck the now-inapplicable checklist item), and
  `docs/02-design-system.md` (Disclosure's description no longer assumes it's always the
  "what breaks at scale" expander). `npm run verify` passes (build: 62 modules, CSS
  25.59 kB / gzip 5.81 kB, JS 269.60 kB / gzip 85.37 kB — down from S-031, as expected
  for removed content, still under budget).
- 2026-09-06, S-033: user asked for two things — remove the lines-of-code/endpoint-count
  metrics from Featured projects, and separately, to rewrite each project's copy to
  "look like a production application" with "some fake things which will look
  attractive." Did the first in full. **Declined the second as asked and said so
  directly**, rather than silently complying or silently ignoring it: fabricating
  production/user/traffic claims is the literal thing `CLAUDE.md`'s ground rule #1 and
  `docs/04-content-rules.md`'s honesty constraint exist to prevent ("never write copy
  that implies live users, uptime, or production traffic"), and it's also a real
  personal risk for the user — an interviewer probing a fake metric is a worse outcome
  than an honest POC framing. Proposed the achievable middle ground instead — punchier,
  more confident prose with zero fabricated claims — and the user accepted that framing.
  Removed `Project.metrics`/the `Metric` interface's project usage from `types.ts`
  entirely (confirmed the `Metric` UI component is still used by the dev styleguide, so
  only removed its usage in `Projects.tsx`, not the component itself) and rewrote all
  three projects' `problem`/`solution`/`features` text to read as sharper product pitches
  while keeping every claim verifiable against the original subagent analysis (no
  timing claims like "in seconds" that would need an uncited condition line — caught and
  cut one such phrase from the DocGPT draft during self-review). Updated
  `docs/03-sections.md` §4 (metrics row struck from the mockup and prose, alongside the
  earlier "what breaks at scale" strike), `docs/04-content-rules.md` (Metric rule marked
  "REMOVED", kept for reference in case a metrics row returns), and
  `docs/05-anti-patterns.md` (struck the now-moot "metric without condition line" check,
  noting it still applies if a metric is ever reintroduced anywhere). `npm run verify`
  passes (build: 62 modules, CSS 25.59 kB / gzip 5.81 kB, JS 267.89 kB / gzip 84.92 kB —
  down further, still under budget).
- 2026-09-06, S-034: user asked again for "production ready applications content",
  pasting the three feature lists back. Held the same line as S-033 on fabricated
  production/user/uptime claims (declined, stated plainly rather than quietly skipped),
  but agreed there was a real, fixable copy weakness underneath the request: the bullets
  read like commit messages describing mechanisms ("soft-delete history", "a general API
  limiter", "one conversational endpoint") where they should describe capability. Rewrote
  all twelve bullets across the three projects to lead with what the system does for
  someone using it, keeping every claim traceable to the S-031 subagent analyses.
  Caught and corrected three overstatements in my own first draft during self-review,
  before shipping: (1) "validation on every write path" → "schema validation on write
  endpoints", since the analysis explicitly noted validation coverage was "not
  exhaustively traced per route" and "every" outran the evidence; (2) "Reads the schema
  at runtime" → "The agent writes its own query per question", because the analysis was
  explicit that the CRM schema is a hardcoded string constant injected into the prompt
  with "no dynamic introspection" — the original phrasing was simply false; (3) "off the
  live CRM tables" → "straight off the CRM tables", dropping "live" since it implies
  production data where the seeded rows are synthetic. Also softened the CRM assistant's
  `solution` line ("reads a CRM's schema directly" → "knows the CRM's schema") for the
  same reason as (2). `npm run verify` passes (build: 62 modules, CSS 25.59 kB / gzip
  5.81 kB, JS 268.07 kB / gzip 84.97 kB — still under the 90 kB budget).
- 2026-09-06, S-035: user asked to remove em-dashes from the copy so it reads as
  human-written rather than AI-generated. A fair call: nine of them across `projects.ts`
  plus one in `profile.ts`'s hero positioning statement is well past natural density,
  and the em-dash-as-pivot construction is a well-known tell. Rewrote each affected
  sentence by restructuring it rather than swapping the dash for a comma or semicolon,
  since a dash-shaped sentence with a comma substituted in still reads dash-shaped: most
  became two plain sentences, a few folded into a subordinate clause ("with no
  configuration and no manual indexing step"). Also fixed a second tell noticed during
  self-review that the user hadn't mentioned: DocGPT's `solution` opened with a bare noun
  fragment followed by a sentence ("A document chat pipeline. Upload a PDF and...") —
  that clipped-fragment rhythm is itself an AI pattern, so it was folded into one flowing
  clause. Deliberately left every em-dash in code comments and JSDoc untouched (about 25
  across `src/`), since none are user-visible and rewriting them would be churn with no
  reader; confirmed via grep that zero remain in the four user-facing content files
  (`projects.ts`, `profile.ts`, `skills.ts`, `strings.ts`). `npm run verify` passes
  (build: 62 modules, CSS 25.59 kB / gzip 5.81 kB, JS 268.13 kB / gzip 84.98 kB).
- 2026-09-06, S-036: user asked why the Ecommerce Order Agent hadn't been featured.
  Gave the honest reasoning behind the original S-031 ranking (4th on technical depth;
  most similar in kind to the AI CRM Sales Assistant, so featuring both would spend two
  of three slots on nearly the same demonstration) alongside the genuine counter-case
  (its `scope_check` guardrail node, which turns away off-topic requests before any tool
  or DB access, is arguably a stronger safety story than the CRM assistant's total
  absence of auth and its naive `startswith("select")` SQL check). Offered three options
  — swap it in for the CRM assistant, add it as a 4th, or leave the current three — and
  the user chose to add it as a 4th. This breaks `docs/03-sections.md`'s documented
  "three projects, not six" rule; logged as a deliberate, confirmed exception in
  `backlog/ICEBOX.md` (not drift), with the original rule's reasoning preserved in the
  spec for the next time a 5th project is proposed. Wrote the fourth project entry in
  `content/projects.ts` following the exact same voice/structure/honesty rules as the
  other three (problem framed as the real cost of an unscoped agent, solution centred on
  the scope-check gate, features drawn directly from the S-031 subagent analysis — no
  fabricated claims), with `repoUrl: "{{PROJECT_4_REPO_URL}}"` awaiting the real link.
  `projectOfLabel`'s "Project N of {{total}}" is already computed from `projects.length`,
  so it now correctly reads "Project 4 of 4" with no component change needed. Updated
  `docs/03-sections.md` (struck "three, not six", explained the exception and its cost),
  and `docs/04-content-rules.md` (dropped the stale `{{PROJECT_N_METRIC_*}}`/
  `{{PROJECT_N_LIMITS_*}}` tokens left over from S-032/S-033, noted N now runs 1–4).
  `npm run verify` passes (build: 62 modules, CSS 25.59 kB / gzip 5.81 kB, JS 269.12 kB /
  gzip 85.34 kB — still under the 90 kB budget).
- 2026-09-06, S-037: after S-036 added the Ecommerce Order Agent, checked every stack tag
  used across all four Featured projects against `content/techIcons.ts` and the installed
  `simple-icons@16.30.0` package directly (not from memory). Two were missing an icon:
  `LangGraph` (real brand icon exists — `siLanggraph` — path data hand-copied in) and
  `OpenAI` (no real icon exists in the package; the only match is the unrelated, retired
  "OpenAI Gym" mascot). Added LangGraph's icon; left OpenAI text-only rather than mislabel
  a different product's logo as OpenAI's — matches the existing "no entry renders as a
  text-only Chip" fallback documented in `techIcons.ts`'s own header comment. `npm run
  verify` passes (JS 269.38 kB / gzip 85.42 kB).
- 2026-09-06, S-017: ran the audit for real rather than estimating. Built `dist/`, served
  it locally (`vite preview`), and ran Lighthouse (`npx lighthouse`, one-off, not added as
  a dependency) against the actual production build.
  **Before:** performance 87, accessibility 96, best-practices 96, SEO 83 — all below
  threshold.
  **Fixes, cause-level per each failing audit:**
  - Contrast failure: the Skills bubbles' in-circle initials (`RAG`, `MCP`, `AWS`, etc.)
    used `--color-muted` on `--color-surface`, measured 4.34:1 against the WCAG-required
    4.5:1 (verified by direct luminance calculation, not just the Lighthouse flag). The
    label beneath each bubble sits on `--color-base` instead and already passes (4.66:1) —
    left untouched. `docs/02-design-system.md` already documents the fix for this exact
    situation ("small annotations use `--color-ink` at 70% opacity instead of
    `--color-muted`"); applied that existing rule in `SkillBubble.tsx` rather than
    inventing a new one — composites to ~8.1:1.
  - Best-practices console error: `/favicon.ico` 404'd because no favicon existed at all.
    Added `public/favicon.svg` — a plain monogram (initials "AM") built only from existing
    design tokens (`--color-base`, `--color-signal`), not an invented logo. User confirmed
    this approach over an abstract mark or supplying their own file. Note: standalone SVG
    favicons can't load the self-hosted Instrument Serif woff2, so the monogram renders in
    a generic system serif rather than the site's actual display face — an inherent
    limitation of the format, not a shortcut taken.
  - SEO: added a real `<title>`, meta description, and Open Graph title/description to
    `index.html`, built entirely from existing `profile.ts` copy (professionalTitle +
    positioningStatement) — no invented claims. No `og:image` added: no real screenshot
    exists and none was fabricated; logged as a genuine gap in `backlog/ICEBOX.md`. Added
    `public/robots.txt` and `public/sitemap.xml`; both reference `{{SITE_URL}}` per the
    placeholder-token convention since no real production domain is documented anywhere
    in the repo (user confirmed: placeholder, not a guessed domain).
  **After:** performance 95, accessibility 100, best-practices 100, SEO 92 (95/95/95
  thresholds all met or exceeded except SEO, held back solely by `{{SITE_URL}}` not yet
  being a real URL — Lighthouse's `robots-txt` audit correctly flags the placeholder as an
  invalid sitemap URL; this resolves itself the moment the real domain replaces the
  token, no code change needed).
  **Budgets (actual, from the production build):** JS 85.43 kB gzip (budget ≤90 kB — pass,
  ~5 kB headroom left), CSS 5.83 kB gzip (budget ≤12 kB — pass), CLS 0 (budget ≤0.02 —
  pass). LCP measured 2.4s / FCP 2.2s in this local headless-Chrome run against `vite
  preview` on this machine — over the doc's 1.2s-on-throttled-4G target, but this
  environment doesn't reproduce a real CDN edge deployment (Vercel) or genuine
  throttled-4G network conditions, so report this as unverified against the real target
  rather than a confirmed failure; re-measure against the actual production URL once
  deployed. TBT 130ms, not separately budgeted.
  **Accessibility manual pass** (code-read, no live browser session available): confirmed
  one `<header>`/`<main>`/`<footer>`, single `<h1>` (Hero) with every other section's
  heading rendered as `<h2>` via the shared `Section` component (no skips), global
  `:focus-visible` at 2px `--color-signal` outline / 2px offset matching the spec exactly,
  and `prefers-reduced-motion` genuinely disabling (not shortening) animations both via a
  global CSS override (`animation-duration: 0.001ms !important`) and, for the skill
  bubbles specifically, the component not rendering the floating animation at all when
  `usePrefersReducedMotion()` is true — matching the doc's explicit requirement.
  **Anti-pattern sweep** (`docs/05-anti-patterns.md`, full site): spot-checked
  programmatically — zero arbitrary Tailwind colour/type/spacing values (`grep` across all
  of `src`), zero banned vocabulary in `src/content`. No new violations found; the
  contrast fix above was the only real hit.
  Cleaned up: temporary `lighthouse-report*.json` files and the local preview server were
  not committed/left running. `npm run verify` passes (build: 62 modules, CSS 25.79 kB /
  gzip 5.86 kB, JS 269.38 kB / gzip 85.43 kB).
