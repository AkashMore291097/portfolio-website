# 03 — Sections

Scroll order, top to bottom:

**Hero → About → Experience → Featured projects → AI work → Skills → Contact → Footer**

Weighting is deliberate and unequal. Experience, Featured projects, and AI work take
roughly 70% of the page's vertical space. About, Skills, and Contact stay compact.
Do not "balance" them.

---

## Persistent chrome

### Nav rail
Fixed left, 64px wide, vertically centred, desktop ≥1024px only. Eight items, each a
number and a hairline tick. Active item's tick fills `--color-signal` and its number goes
to `--color-ink`. Driven by `IntersectionObserver` with `rootMargin: "-45% 0px -45% 0px"`
so the active state changes at the viewport midline, not the top edge.

Below 1024px: a 2px fixed top bar showing scroll progress in `--color-signal`.

Keyboard: rail items are real links to section IDs, tab-reachable, and the page respects
`scroll-behavior: smooth` unless reduced motion is set.

### Command palette
`⌘K` / `Ctrl+K`. Overlay on `--color-surface`, fuzzy filter over: jump to each section,
download resume, copy email, open GitHub, open LinkedIn, ask the resume chat a question
(focuses the chat input and pre-fills). Arrow keys navigate, Enter runs, Escape closes,
focus returns to the trigger. Focus is trapped while open.

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

Asymmetric. Prose on columns 1–5, facts on 7–12.

Prose: 3–4 sentences, `body-lg`, 62ch. Covers years, what you build, why systems, where
GenAI fits. It should sound like a person talking, not a LinkedIn summary. No greeting,
no wave emoji, no "passionate about".

Facts: four rows, hairline-separated. Value in `data` at 20px `--color-ink`, label beneath
in `body-sm` `--color-muted`. E.g. years shipping, primary stack, focus, location.

No photo. If one is added later, treat it as a figure: grayscale, ≤160px, sentence-case
caption beneath.

---

## 3. Experience

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
                                          Recorded on a local run
340 ms      4.2×        500
p95 query   throughput  documents
Local, 500 docs, M2 Air  ← condition line, required

[Python] [FAISS] [FastAPI] [Postgres]

View repository        Read case study

▸ What breaks at scale
```

- **Problem before solution.** The project is framed as an engineering problem, not a
  product. Problem framing is judged on reasoning; product framing invites "how many
  users?", which is the wrong conversation for a POC.
- **Metrics** use the `Metric` primitive and every group carries its condition line. A
  number without its measurement conditions does not ship.
- **Diagram**: real components and real edges — client, API, queue, store, model. Node
  labels in `data`. Same visual language as the skills graph so the page feels authored
  by one hand.
- **Video**: 30–45s, muted, looping, `playsInline`, `preload="none"`, poster frame,
  `IntersectionObserver`-triggered. Caption beneath in `body-sm`. Pause control is
  keyboard-reachable. If no video exists yet, render the diagram alone — do not
  substitute a screenshot of an IDE.
- **What breaks at scale**: `Disclosure`, collapsed by default, `--color-surface` when
  open. 3–4 honest bullets naming the actual bottleneck and what would be needed to pass
  it. This is the highest-signal content on the page. It reads as confidence, not
  weakness, and it communicates the project's scope without a "POC" badge.

Three projects. Not six. At the end of the section, one text link to the GitHub profile.

---

## 5. AI work

This section deliberately breaks the page's layout pattern, because a pattern break marks
importance and this is the differentiator.

**Upper half — the resume chat.** Centred `Panel`, max 720px, the only centred layout
block above the contact statement.

```
╭──────────────────────────────────────────────────────╮
│  Ask about my experience                             │
│                                                      │
│  [ streamed answer appears here ]                    │
│                                                      │
│  ▸ Retrieval trace                                   │
│    Experience — Company 2          0.81              │
│    Project — Ledger Sync           0.74              │
│    Retrieval 42 ms · Generation 1.1 s · 612 tokens   │
│                                                      │
│  ┌────────────────────────────────────┐ [ Ask ]      │
│  │ Type a question                    │              │
│  └────────────────────────────────────┘              │
│  What has he built with RAG?  Strongest project?     │
╰──────────────────────────────────────────────────────╯
```

- Three suggested questions as chips beneath the input. People do not think of questions
  unprompted; without these the component sits unused.
- The **retrieval trace** is the point of the section. Sources, similarity scores,
  retrieval and generation latency, token count. Collapsed by default, expanded state
  persisted in `sessionStorage`. Anyone can claim RAG experience; showing scored chunks
  is proof.
- States: idle (empty, input focused), streaming (`aria-busy`, cursor block), answered,
  no-match (documented copy in `04-content-rules.md`, offers the contact link),
  rate-limited (states the limit plainly), error (says what failed and what to do — never
  "Oops! Something went wrong").
- Single-turn. Say so in one line beneath the input rather than simulating memory.

**Lower half — capability blocks.** 2×2, single column on mobile. Each: a small line
diagram in `--color-muted` (not an icon glyph), a `display-md` serif title, two lines of
`body-sm`. RAG pipelines, agents and tool use, voice, MCP tooling. Each names the real
libraries used, and links to the project below that demonstrates it where one exists.

---

## 6. Skills

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

No proficiency bars, no percentages, no star ratings. "React — 85%" is unverifiable, and
quantifying yourself against nothing reads junior.

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

Thin, 1px top border.

Left: name and a one-line tagline. Right: GitHub, LinkedIn, email.

Beneath, a `data-sm` build strip in `--color-muted`, values injected at build time and
never hardcoded: gzipped bundle size, LCP from the last Lighthouse run, commit hash
linked to GitHub, deploy date. This only lands because it is measured — if any value
cannot be generated at build time, remove that value rather than faking it.

Copyright line last, sentence case.
