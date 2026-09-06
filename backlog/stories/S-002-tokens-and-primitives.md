# S-002 — Design tokens and UI primitives

**Epic:** E1 Foundation · **Approval:** yes — stop after the plan

## Goal
The visual vocabulary of the whole site, plus a route to eyeball it.

## Scope
- `src/styles/tokens.css` — Tailwind v4 `@theme` block with the six colours, the eight
  type steps, spacing scale, three radii, and the two motion durations from
  `docs/02-design-system.md`.
- Self-host Instrument Serif and Geist / Geist Mono as subset woff2 in `public/fonts`.
  `@font-face` with `font-display: swap`. Preload the serif.
- Background grid utility — fixed pseudo-element, 48px cells, 1.5% opacity.
- Primitives in `src/components/ui/`: `Button`, `Chip`, `Panel`, `Metric`, `CopyLink`,
  `Disclosure`. Each typed, each with a visible focus state.
- A dev-only `/styleguide` view (conditional on `import.meta.env.DEV`) rendering every
  token and every primitive in every state.

## Constraints
- `Metric` makes the condition line a **required** prop, not optional. The type system
  enforces `docs/04-content-rules.md`.
- `Button` has two variants and one size. No arrow glyph in the label.
- No uppercase transforms anywhere in the primitives.

## Acceptance
- [ ] Styleguide renders every primitive state including focus and disabled
- [ ] No arbitrary Tailwind values in any primitive
- [ ] `Metric` will not compile without a condition
- [ ] Contrast checked: ink and muted on base and surface both pass AA
- [ ] Fonts load with no layout shift; CLS is 0 on the styleguide
- [ ] Styleguide is absent from the production bundle
