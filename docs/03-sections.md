# 03 — Sections

Scroll order, top to bottom, as originally spec'd:

**Hero → About → Experience → Featured projects → AI work → Skills → Contact → Footer**

**As actually built** (AI work was explicitly skipped — see §5 below — and Experience
was removed by direct user decision after S-017: a personal portfolio for a POC-driven
GenAI differentiator doesn't need a company-history section, and Featured projects
already carries the "what have you built" argument — see `backlog/BACKLOG.md`'s S-020
changelog entry):

**Hero → About → Featured projects → Skills → Contact → Footer**

Weighting is deliberate and unequal. Featured projects takes the largest share of the
page's vertical space. About, Skills, and Contact stay compact. Do not "balance" them.

---

## Persistent chrome

### Nav rail
Fixed left, 64px wide, vertically centred, desktop ≥1024px only. Six items (originally
spec'd as eight, before AI work and Experience were both dropped — see §5 and §3), each
a number and a hairline tick.
Active item's tick fills `--color-signal` and its number goes
to `--color-ink`. Driven by `IntersectionObserver` with `rootMargin: "-45% 0px -45% 0px"`
so the active state changes at the viewport midline, not the top edge.

Below 1024px: a 2px fixed top bar showing scroll progress in `--color-signal`.

Keyboard: rail items are real links to section IDs, tab-reachable, and the page respects
`scroll-behavior: smooth` unless reduced motion is set.

### Command palette
`⌘K` / `Ctrl+K`. Overlay on `--color-surface`, fuzzy filter over: jump to each of the
five real content sections (Footer is chrome, not a jump destination), download resume,
copy email, open GitHub, open LinkedIn. (The originally-spec'd "ask the resume chat"
action is gone along with the chat section itself — see §5.) Arrow keys navigate, Enter
runs, Escape closes, focus returns to the trigger. Focus is trapped while open.

It is genuinely useful on a long page — that is why it is here. There is no visible
"press ⌘K" hint in the hero; the people who will use it already try it.

---

## 1. Hero

Full viewport height, minimum 640px. Content on columns 1–7, schematic on 8–12.

```
┌──────────────────────────────────────────────────────────┐
│                                                          │
│  Firstname Lastname                    ╭──────────────╮  │
│  Backend & GenAI engineer              │   system     │  │
│                                        │   schematic  │  │
│  One sentence on what you build and    │   (svg)      │  │
│  what you are good at. Two lines max.  ╰──────────────╯  │
│                                                          │
│  [ View work ]  [ Download resume ]   ◯ GitHub ◯ LinkedIn│
│  Updated September 2026                                  │
│                                                          │
├──────────────────────────────────────────────────────────┤
│  ● Available for work        Pune, India      IST         │
└──────────────────────────────────────────────────────────┘
```

- Name: `display-xl` serif, `--color-ink`. This is the `<h1>` and the LCP element.
- Title: `body-lg` sans, `--color-signal`. Sentence case, not mono, not uppercase.
- Statement: `body` sans, `--color-muted`, max 2 lines at 60ch.
- Buttons: `View work` primary (scrolls to Featured projects), `Download resume` ghost.
  Resume is deliberately secondary — present and obvious, but the hierarchy points at the
  work first. Social links are icon-only, 20px, `--color-muted` → `--color-signal` on hover.
- Beneath the buttons, one line in `body-sm`: `Updated September 2026`. Plain sentence,
  not a middle-dot metadata string.
- Bottom strip: 1px top border, `data` type. Availability dot pulses 2s (disabled under
  reduced motion). Time is computed live from the browser, not hardcoded.

**Schematic:** abstract SVG, 5–7 nodes, hand-authored paths, no labels. A `--color-signal`
pulse travels one path every 5s. It must read as an architecture graph, not as generic
geometry — but it stays abstract, because the labelled version lives in Skills and two
labelled graphs on one page compete.

Mobile: schematic moves below the buttons at 40% scale; bottom strip stacks to two lines.

---

## 2. About

Asymmetric. Photo on columns 1–3 (tightened to fit its own content rather than a wide
near-empty grid track), prose + facts stacked on columns 5–12. (Layout has moved several
times by direct user request — see `backlog/BACKLOG.md`'s S-021/S-022/S-023/S-024
changelog entries. The facts row was removed in S-022 then reinstated, stacked beneath
the prose rather than in its own column, in S-024 once the section read as too sparse
with just one paragraph next to a small photo in a wide column.)

Prose: 3–4 sentences, `body-lg`, 62ch. Covers years, what you build, why systems, where
GenAI fits. It should sound like a person talking, not a LinkedIn summary. No greeting,
no wave emoji, no "passionate about".

Facts: four items, 2-up on narrow / 4-up from `sm` up, stacked beneath the prose in the
same column (not a separate column — that read as too empty next to a single paragraph).
Value in `data` at `--color-ink`, label beneath in `body-sm` `--color-muted`. Currently:
years shipping, focus, featured projects, location.

Photo: a figure, up to 256px circle (scales to fill its column width, capped at 256px —
sized up from the original 160px in S-025 so it fills its column rather than floating
small inside it), left-aligned. `Profile.photoPath` now points at a real, user-supplied
illustrated avatar (`public/assets/avatar.png`) — it is a deliberate, confirmed exception
to the grayscale rule below (see `backlog/ICEBOX.md`'s S-023 entry): it renders full
colour as the user explicitly chose, being a branded illustration rather than a plain
photograph. Falls back to a plain muted-outline placeholder circle only if `photoPath` is
ever unset. If a plain photograph replaces this avatar later, apply the original rule to
it instead: grayscale, ≤160px, sentence-case caption beneath — the 256px cap and
column-filling behaviour are specific to this branded-avatar exception, not the general
photo rule.

---

## 3. Experience — NOT BUILT

This section (a company-history timeline) was explicitly removed by direct user
decision after S-017 — see `backlog/BACKLOG.md`'s S-020 changelog entry. Reasoning: this
is a personal portfolio built around a POC-driven GenAI differentiator, not a resume
site; a company-employment timeline doesn't serve that story, and Featured projects
already carries the "what have you built" argument on its own. It does not exist in
scroll order today. The spec that used to live here is kept below purely for reference;
it is not pending work.

<details>
<summary>Historical spec (not built)</summary>

Timeline on a single 1px vertical rule at column 2. Each role is a node: 7px square,
`--color-base` fill, `--color-line` border, `--color-signal` border when its entry is the
one nearest the viewport midline.

Per entry:
```
■  Company name                              Role · 2023 — Present
   ─────────────────────────────────────────────────────────────
   Impact bullet leading with the number where one exists.
   Second bullet.
   Third bullet.
   [Node.js] [PostgreSQL] [Redis] [AWS]
```

- Company: `display-md` serif. Role and dates: `body-sm` `--color-muted`, right-aligned
  on the same baseline, stacking beneath on mobile.
- Bullets: `body`, 2–3 per role, maximum. Each states an outcome, not a duty. "Cut order
  sync from 40 min to 90 s by batching writes" — not "responsible for order sync".
- Chips at the bottom of each entry.

The vertical rule fills with `--color-signal` from top to current scroll position, using a
CSS scroll-driven animation (`animation-timeline: view()`), no JS. This is the one place
scroll-linked progress genuinely represents something: position in a chronological list.
Under reduced motion the rule renders fully filled at `--color-line`.

Most recent role first. No logos — company wordmarks in mixed brand colours would break
the palette.

</details>

---

## 4. Featured projects

The heaviest section. Full-width bands, alternating text/visual sides, separated by a 1px
`--color-line` rule. **Not a card grid** — cards force every project into the same box and
flatten your strongest work into a thumbnail.

Per project:

```
Project 1 of 3
Ledger Sync                              ╭────────────────────────╮
                                         │  architecture diagram   │
The problem in one strong sentence that   │  (hand-authored svg)   │
names the constraint, not the feature.   ╰────────────────────────╯
                                         ╭────────────────────────╮
Two or three sentences on the approach   │  demo.mp4, looping,     │
and the decision that mattered.          │  muted, poster frame    │
                                         ╰────────────────────────╯

[Python] [FAISS] [FastAPI] [Postgres]

View repository        Read case study
```

(Two things originally spec'd here were removed by direct user request, both logged in
`backlog/BACKLOG.md`'s changelog: the "What breaks at scale" disclosure beneath the repo
link — S-032 — and the metrics row (figure/label/condition triples) — S-033. Neither
`Project.limits` nor `Project.metrics` exist anymore; the `Metric` and `Disclosure` UI
primitives themselves are untouched and still demonstrated in the dev styleguide, just
unused in Featured projects now. As of S-033, each project is problem, solution,
features, and stack only — no numeric claims at all, which sidesteps the honesty
constraint below entirely rather than needing a condition line for anything.)

- **Problem before solution.** The project is framed as an engineering problem, not a
  product. Problem framing is judged on reasoning; product framing invites "how many
  users?", which is the wrong conversation for a POC.
- **Diagram**: real components and real edges — client, API, queue, store, model. Node
  labels in `data`. Same visual language as the skills graph so the page feels authored
  by one hand.
- **Video**: 30–45s, muted, looping, `playsInline`, `preload="none"`, poster frame,
  `IntersectionObserver`-triggered. Caption beneath in `body-sm`. Pause control is
  keyboard-reachable. If no video exists yet, render the diagram alone — do not
  substitute a screenshot of an IDE.

Originally spec'd as "three projects, not six", on the reasoning that this is the
heaviest section and each project gets a full-width band, so a longer list dilutes the
strongest work rather than showcasing it. As of S-036 it carries **four**, by direct
user request: the Ecommerce Order Agent was added alongside the AI CRM Sales Assistant
even though the two are similar in kind (both single-tool FastAPI/LangGraph agents over
MySQL). Logged as a deliberate, confirmed exception in `backlog/ICEBOX.md`, not drift.
If a fifth is ever proposed, re-read the original reasoning above before agreeing.

At the end of the section, one text link to the GitHub profile.

---

## 5. AI work — NOT BUILT

This whole section (resume chat, retrieval trace, capability blocks) was explicitly
skipped by direct user decision — see `backlog/BACKLOG.md`'s S-010/S-011/S-012 changelog
entries for the reasoning (the Featured projects section was judged sufficient to
showcase the work). It does not exist in scroll order today. The spec that used to live
here is kept in git history for reference only; it is not pending work.

The site's real scroll order today is: **Hero → About → Featured projects → Skills →
Contact → Footer.**

---

## 6. Skills

Shipped as continuously floating, always-brand-coloured logo bubbles grouped into
categories (Backend, Frontend, GenAI & LLM, Cloud & Tools) — a full, explicit, user-
requested departure from the force-directed dependency graph originally spec'd below.
See `backlog/ICEBOX.md`'s S-013 entries for the reasoning: both "not floating bubbles"
and "monochrome logos, signal only on hover" (the two rules this section used to encode)
are deliberately broken here at the user's request. If this spec is ever revised, update
it to describe the bubbles rather than reading the paragraphs below as current.

Each bubble is a fixed-size circle: a real per-tool `simple-icons` brand mark at full
colour where one exists (e.g. React's cyan, Node's green), or a short initialism for
terms with no logo (concepts like RAG/MCP, or brands simple-icons doesn't carry, e.g.
AWS) — every bubble the same diameter regardless. Bubbles drift continuously via a
`translateY` keyframe with a per-bubble randomised-but-deterministic duration/delay/
amplitude so they don't move in lockstep; the animation pauses while the section is
off-screen (`IntersectionObserver`) and never runs at all under
`prefers-reduced-motion: reduce`.

No proficiency bars, no percentages, no star ratings. "React — 85%" is unverifiable, and
quantifying yourself against nothing reads junior.

---

### Historical spec (not built) — force-directed skills graph

The paragraphs below describe the originally-planned Skills section: a settled
dependency graph plus a plain category list beneath it. Neither exists in the current
build (see the note above) — kept for reference only.

Two parts.

**The system graph.** Force-directed, `d3-force`, rendered as SVG by our own code. Nodes
are technologies carrying their monochrome `simple-icons` path in `--color-muted`; edges
are real relationships (Node → Postgres, LangChain → vector store, React → Node). The
simulation runs on mount, settles in ~2s, then `stop()`s permanently. Positions are fixed
after settling.

Every 6s a pulse traverses one genuine path, lighting nodes in sequence to
`--color-signal`, with a caption beneath naming it:
`Request path: React → Node → Redis → Postgres`. **Only light moves — nodes never
reposition.** This is what separates it from the floating-logo-bubbles pattern: position
carries meaning, and nothing shifts under a reader mid-sentence.

Interaction: hover a node to highlight its edges and dim the rest; drag a node and let the
simulation re-settle (restart alpha, then stop again). Engineers will play with it.

Accessibility: `role="img"` with a summarising `aria-label`, plus the full stack as a
visually-hidden list. Simulation pauses on `visibilitychange` and never runs under reduced
motion — it renders pre-settled from cached coordinates.

Mobile: simplified 9-node variant, drag disabled, pulses retained.

**The category list.** Six rows beneath the graph, hairline-separated. Category name in
`display-md` serif on columns 1–3, a one-line sentence of context beneath it in `body-sm`,
chips filling columns 4–12.

---

## 7. Contact

The page exhaling. 200px vertical padding, content centred, nothing else on screen.

- `display-md` serif statement, two lines max, active voice, specific about what you want.
  Not "Let's build something amazing together".
- Email as a `CopyLink` in `data` at 20px. Click copies; label swaps to `Copied` for 1.6s.
  It is also a real `mailto:` anchor so middle-click and right-click behave normally.
- `Download resume` primary button.
- GitHub and LinkedIn as text links beneath.

No contact form in v1. A form needs a backend, attracts spam, and recruiters copy the
address anyway.

---

## 8. Footer

Thin, 1px top border. One row: copyright on the left, GitHub/LinkedIn/email on the right.

(Originally spec'd with a name + tagline block on the left and a build-metrics strip
beneath — gzipped bundle size, LCP, commit hash, deploy date — proving those numbers
were real rather than decorative. Both were removed by direct user request in S-030 —
see `backlog/BACKLOG.md`'s changelog. `Profile.tagline` no longer exists; the
`__BUILD_COMMIT__`/`__BUILD_DATE__` Vite `define` machinery in `vite.config.ts` was
removed with it, confirmed unreferenced elsewhere first. S-017's audit no longer has a
build strip to verify — its acceptance criteria were updated to match.)
