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
- 2026-09-06, S-008: each project band's visual column is an empty bordered
  `--color-surface` slot with no content — intentionally inert, reserved for S-009's
  architecture diagram/demo video. Not a removal-pass violation since it's structural
  (the alternating-side layout needs the column to exist), but flagging so it isn't
  mistaken for finished work if S-009 slips.
- 2026-09-06, S-008: no "Read case study" link rendered per project. `Project`
  (`src/content/types.ts`) and `docs/04-content-rules.md`'s token list define no
  `caseStudyUrl` field/token, and case-study sub-pages are already out of scope (see
  "Deferred by decision" above — single-page brief). If a real per-project case-study
  link is wanted later (e.g. a README anchor or external write-up), it needs a field
  added to `Project` first, not invented here.
- 2026-09-06, S-009: `src/content/projects.ts` holds fabricated dummy content (three
  fake projects — names, problems, solutions, features, metrics, stacks, limits — all
  invented) at the user's explicit request, to be replaced with real project data before
  launch. This is the one file in the repo that is knowingly non-compliant with
  `CLAUDE.md` rule #4 by deliberate exception, not oversight — flagged here so it isn't
  missed during a pre-launch content pass. The file's own header comment carries the
  same warning.
- 2026-09-06, S-009: the project band's visual column (diagram/video) from S-008 was
  removed entirely per user direction — no real screenshots or footage exist. If real
  demo videos or diagrams become available later, reintroducing a visual column is a new
  story, not a revival of the original S-009 scope as written (which assumed real
  per-project architecture data that still doesn't exist).
- 2026-09-06, S-010/S-011/S-012: `docs/01-technical-spec.md`'s entire "Resume chat
  architecture" section and `docs/03-sections.md`'s §5 "AI work" section describe a
  build that will not happen — the user explicitly skipped the embedding pipeline, chat
  API, chat UI, and capability blocks. The `@anthropic-ai/sdk` runtime dependency listed
  in `01-technical-spec.md` is also no longer needed and was never installed. Not editing
  those docs now since docs are read-only during stories per `CLAUDE.md`, but anyone
  reading them as the current spec will be misled until they're updated or annotated.
  `profile.ts`/`capabilities.ts` content written for that section (skills/capabilities
  generic stack names from S-004) is now unused — harmless as dead content, not deleted
  since it costs nothing to leave and doesn't affect the build.
- 2026-09-06, S-013: **superseded by the entry below** — the settled dependency graph
  this note originally referred to no longer exists.
- 2026-09-06, S-013 (final): the Skills section is now categorized bubbles with
  continuous floating animation and always-on real brand colours — a full, explicit,
  user-requested reversal of two rules in `docs/02-design-system.md` and `03-sections.md`:
  (1) "not floating bubbles" / "position carries meaning, nothing may reposition" — the
  entire settled-force-graph concept these docs specify is gone; (2) "monochrome logos,
  signal only on hover" — every bubble shows real brand hex always. This is the one place
  in the site where both the six-colour discipline and the ambient-motion policy are
  deliberately broken. If `docs/02-design-system.md`/`03-sections.md` are ever revised,
  update the Skills section spec to match what's actually built rather than treating this
  as drift to "fix" back to the original design. The Skills category list (S-014) is now
  effectively folded into this — there is no separate plain-list story left to do; confirm
  with the user before touching S-014 whether it still means anything distinct.
- 2026-09-06, S-015: `Profile.contactStatement` and `Profile.tagline` are new fields with
  no corresponding token in `docs/04-content-rules.md`'s placeholder list — added
  `{{CONTACT_STATEMENT}}` and `{{TAGLINE}}` following the existing pattern rather than
  inventing copy. If `04-content-rules.md` is ever revised, add both to its token list.
- 2026-09-06, S-015: gzipped bundle size and LCP are not in the footer's build strip.
  Bundle size needs a post-build read of `dist/` (Vite's `define` runs before the bundle
  exists) — the user explicitly declined adding that extra build step when asked. LCP
  needs a real Lighthouse/browser run, which nothing in this repo produces yet; deferred
  to S-017's performance audit, which is the natural place a real measurement would come
  from. Do not hardcode either value later without a real generation step behind it —
  that is exactly the failure mode the strip exists to avoid.
- 2026-09-06, S-015: both "Download resume" buttons (Hero, Contact) assume the resume
  file will be a `.pdf` (`download="<Full-Name>-Resume.pdf"`) since `Profile.resumePath`
  is still the `{{RESUME_PATH}}` placeholder and no real file exists to check against.
  Confirm the actual format once a real resume file is added — if it's not a PDF, update
  the filename extension in both `Hero.tsx` and `Contact.tsx`.
- 2026-09-06, S-023: `public/assets/avatar.png` (the About photo) is 1.3MB, but it only
  ever renders at 160×160px in the UI — nearly all of that weight is invisible to a
  visitor. Flagged to the user and they explicitly chose to leave it unoptimized for now.
  Revisit with a real resize/compress pass (e.g. down to ~320×320 for retina, re-encoded
  as an optimized PNG or WebP) — this is exactly the kind of budget gap S-017's
  performance audit should catch and report if it's still unaddressed by then.
- 2026-09-06, S-023: `About`'s photo is a full-colour illustrated avatar, not grayscale —
  a deliberate, confirmed exception to `docs/03-sections.md` §2's documented grayscale
  photo rule (the user explicitly chose "keep full colour" when asked, reasoning it's a
  branded illustration rather than a plain photo). If a plain photograph replaces it
  later, reconsider whether the grayscale rule should apply to that image instead.
- 2026-09-06, S-031: `{{PROJECT_1_REPO_URL}}`/`{{PROJECT_2_REPO_URL}}`/
  `{{PROJECT_3_REPO_URL}}` in `content/projects.ts` are real, live placeholders (not
  dummy-data ones) — Finvesto, DocGPT, and the AI CRM Sales Assistant are real projects
  the user owns, waiting only on the actual GitHub URLs, which the user said they'd
  supply separately. Fill these in as soon as the URLs are available; do not treat them
  as generic unfinished-content placeholders to defer indefinitely.
- 2026-09-06, S-031: same story surfaced a real security finding, independent of the
  portfolio site itself — the identical, real-looking OpenAI API key sits in a local
  `.env` file in all four analyzed project repos (`finvesto-api`, `doc-gpt-api`,
  `ai-crm-sales-assistant`, `ecommerce-order-agent`), confirmed gitignored/untracked in
  each, but live in plaintext on disk. Flagged to the user directly; recommend rotating
  it in the OpenAI dashboard regardless of whether any of these repos go public.
- 2026-09-06, S-036: Featured projects now carries **four** projects, breaking
  `docs/03-sections.md`'s documented "three projects, not six" rule. This is a
  deliberate, confirmed exception, not drift: the user asked why the Ecommerce Order
  Agent had been left out, was given the honest reasoning (4th on technical depth, and
  most similar in kind to the CRM Sales Assistant — both single-tool FastAPI/LangGraph
  agents over MySQL, so featuring both spends two of three slots on nearly the same
  demonstration) plus the counter-argument (its `scope_check` guardrail node is arguably
  a better safety story than the CRM assistant's naive `startswith("select")` check and
  total absence of auth), and chose to add it as a 4th rather than swap it in or leave it
  out. The original rule's reasoning still stands and is preserved in the spec: this is
  the heaviest section, each project gets a full-width band, and a longer list dilutes
  the strongest work. If a fifth is ever proposed, re-read that reasoning first. Also
  note two of the four now read as near-duplicates in kind, which is the specific cost
  the rule existed to prevent — worth revisiting if the section starts feeling repetitive.
- 2026-09-06, S-036: `{{PROJECT_4_REPO_URL}}` joins the three existing project repo-URL
  placeholders as a real, live token awaiting the user's actual GitHub link. Same note as
  the S-031 entry above: these are real projects the user owns, not dummy content.
- 2026-09-06, S-017: `index.html` has no `og:image` meta tag. No real screenshot or social
  preview graphic exists for this site, and none was fabricated to fill the gap. If one is
  wanted, it needs a real screenshot (or a deliberately designed share-card image) added to
  `public/`, then wired in — not invented here.
- 2026-09-06, S-017: `public/robots.txt` and `public/sitemap.xml` both reference
  `{{SITE_URL}}` — a real, live placeholder (no real production domain is documented
  anywhere in the repo). This is currently the one thing holding Lighthouse's SEO score to
  92 instead of ≥95 (the `robots-txt` audit correctly flags the token as an invalid
  sitemap URL). Fill in the real domain the moment it's known; no code change needed
  beyond that. **Resolved 2026-09-06:** user supplied the real production URL
  (`https://akash-more-dev.vercel.app`) — filled into `robots.txt`'s `Sitemap:` line,
  `sitemap.xml`'s `<loc>`, and added `og:url` to `index.html`. Re-run Lighthouse against
  the deployed site to confirm SEO now clears 95.
- 2026-09-06, S-017: LCP/FCP measured (2.4s / 2.2s) against a local Lighthouse run on
  `vite preview` on this dev machine, not against a real Vercel deployment or genuine
  throttled-4G conditions. `docs/01-technical-spec.md`'s ≤1.2s LCP budget should be
  re-verified against the actual production URL once deployed — this local number is a
  useful signal, not a confirmed pass/fail against that budget.
- 2026-09-06, S-017: `public/favicon.svg`'s monogram ("AM") renders in a generic system
  serif, not Instrument Serif — standalone SVG favicons can't load the site's self-hosted
  woff2 font. Not fixable without either an ICO/PNG favicon baked from a real rendered
  image (which would need an image tool not available here) or accepting the mismatch.
  Flagging so it isn't mistaken for an oversight if noticed later.
