# 02 — Design system

The whole visual argument: an instrument panel built by someone who reads schematics.
Dense where there is data, quiet everywhere else. One accent, spent carefully.

## Colour

Six values. Defined once in `src/styles/tokens.css` under Tailwind v4 `@theme`.

```css
@theme {
  --color-base:      #0A0A0B;  /* page */
  --color-surface:   #141416;  /* raised panels, chat, expanded blocks */
  --color-line:      #232327;  /* all rules and borders */
  --color-ink:       #EDEDEF;  /* primary text */
  --color-muted:     #7A7A85;  /* secondary text, logos at rest, annotations */
  --color-signal:    #FFB020;  /* the accent */
}
```

`--color-signal` is permitted in exactly four places: interactive states (hover, focus,
active nav), live data (metric figures, graph pulses), the primary button fill, and the
availability indicator. It never appears as a heading colour, a border on a static card,
or a gradient. If a seventh colour is needed, the design is wrong.

Contrast check: `--color-muted` on `--color-base` is 5.4:1 — fine for body, not for text
below 14px. Small annotations use `--color-ink` at 70% opacity instead.

## Type

Two families, sharply distinct.

| Role | Family | Notes |
|---|---|---|
| Display | **Instrument Serif** | Name, section headings, the contact statement. Regular weight only; it has one. |
| Text + data | **Geist** / **Geist Mono** | Same superfamily, so sans and mono share proportions and the page stays coherent. |

Self-hosted woff2, Latin subset. Instrument Serif preloaded (hero LCP element).

Scale — a 1.333 fourth from a 16px base, rounded to the 8px grid where it lands close:

```
display-xl   72px / 1.05 / -0.02em   serif    hero name (clamp 44 → 72)
display-lg   40px / 1.15 / -0.01em   serif    section headings (clamp 30 → 40)
display-md   28px / 1.25             serif    project names, contact statement
body-lg      19px / 1.65             sans     about prose only
body         16px / 1.6              sans     default
body-sm      14px / 1.55             sans     bullets, captions
data         13px / 1.4  / 0.02em    mono     metrics, tech chips, graph labels
data-sm      12px / 1.4  / 0.02em    mono     trace panel, footer build strip
```

**Mono is for data, not for labels.** Metrics, tech names, similarity scores, latencies,
commit hashes — yes. Section eyebrows, button text, captions, navigation — no. Mono
sprayed on every small string is template chrome and reads as costume.

**Sentence case throughout.** No uppercase-with-letterspacing labels anywhere, including
section headings and buttons. It is the most common tell in this genre and the site's
credibility rests on not looking generated.

Body line length caps at 70ch; the about paragraph at 62ch.

## Layout

12 columns, 1200px max, 24px gutters, 8px baseline. Section vertical rhythm: 160px
desktop / 96px mobile, defined once as `--space-section` and never overridden per section.

Content is left-aligned by default. The only centred block on the page is the contact
statement, and it is centred precisely because nothing else is.

Background: a fixed 1px grid at 1.5% opacity, 48px cells, rendered as a CSS
`repeating-linear-gradient` on a fixed pseudo-element. Content scrolls over it. It must
be barely perceptible — if it is legible as a grid at a glance, halve the opacity.

## Section headings

One treatment, used everywhere, no eyebrow label:

```
Featured projects                             ← display-lg, serif
────────────────────────────────────────      ← 1px --color-signal, full content width
```

The underline was `--color-line` through S-027; changed to `--color-signal` in S-029 by
direct user request, applying the site's one existing accent colour more visibly rather
than introducing a new one — see `backlog/BACKLOG.md`'s S-029 changelog entry. It is
still one treatment applied to every section via the shared `Section` component, not a
per-section colour.

Numbers appear in exactly two places, both genuine sequences: the nav rail (scroll order)
and project ordering (`Project 1 of 3`). They do not appear above section headings, where
they would encode nothing.

## Primitives (`src/components/ui/`)

- **Button** — `primary` (signal fill, base text) and `ghost` (1px line border, ink text,
  signal border on hover). Two variants, one size, 4px radius. No arrow glyph appended
  to the label.
- **Chip** — tech tag. 1px `--color-line`, no fill, `data` type, 2px radius, 4/10px
  padding. Optional 14px monochrome logo, `--color-muted` at rest.
- **Panel** — `--color-surface` on 1px `--color-line`, 6px radius. Chat and expandable
  blocks.
- **Metric** — figure in `data` at 24px `--color-signal`, label beneath in `body-sm`
  `--color-muted`, condition line in `data-sm`. The condition line is required, never
  optional. See `docs/04-content-rules.md`.
- **CopyLink** — text that copies on click and swaps to a confirmation for 1.6s.
- **Disclosure** — a generic expander primitive (triangle rotates, height animates 200ms,
  user-triggered motion so it's fine). Originally used for `What breaks at scale` in
  Featured projects; that usage was removed in S-032, but the primitive itself remains,
  demonstrated in the dev styleguide, and is available for any future expandable block.

Radius vocabulary: 2px chips, 4px buttons, 6px panels. Three values, assigned by
hierarchy rather than one radius applied to everything.

## Motion

Two primitives only.

**Hero sequence** — fires once on first paint, ~900ms total, then never again. Grid
fades in, name sets, then title, statement, buttons, and the schematic's first pulse,
staggered ~80ms. One orchestrated moment carries more weight than reveals on every
section.

**Interaction response** — 160ms `ease-out` on hover and focus; 200ms on disclosure
height; chat streaming at its natural token rate.

The skills graph is the one exception to "no ambient motion", and it earns it by encoding
information: it settles into a real dependency layout, then pulses along one genuine
request path every 6s with a caption naming that path. Node positions never change after
settling.

Forbidden: scroll-triggered fade-and-rise on sections, parallax on content, counters that
count up, typewriter text, tilt-on-hover, cursor followers, particles, marquees.

Under `prefers-reduced-motion: reduce`: hero renders final state, graph renders settled
with pulses off, disclosure snaps, chat still streams (it reflects real work, not
decoration).

## Breakpoints

`sm 640 · md 768 · lg 1024 · xl 1280`. Single column below 768. Nav rail becomes a 2px
top progress bar below 1024. Type scales ~20% down, section spacing ~40% down. The
graph keeps a simplified 9-node variant on mobile rather than being hidden — it is doing
identity work, not decoration.
