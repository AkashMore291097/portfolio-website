# S-005 — Hero

**Epic:** E2 Narrative · **Approval:** yes — stop after the plan

## Goal
The first screen, and the LCP element.

## Scope
- 7/5 split, full viewport, min 640px. Layout per `docs/03-sections.md` §1.
- Name `h1` in `display-xl`, title in `body-lg` signal, statement at 60ch.
- `View work` primary, `Download resume` ghost, GitHub and LinkedIn icon links.
- `Updated September 2026` line beneath in `body-sm`.
- Bottom strip: availability dot, location, live-computed timezone.
- Abstract SVG schematic, 5–7 nodes, one signal pulse every 5s.
- The hero load sequence — the page's single orchestrated motion moment. ~900ms, staggered
  ~80ms, fires once on first paint.

## Constraints
- Resume stays visually secondary to `View work`. Present and obvious, not competing.
- No `⌘K` hint, no scroll-down chevron, no typewriter effect on the title.
- Time is computed, not hardcoded.
- Sequence must not delay LCP — the name paints immediately and animates in place.

## Acceptance
- [ ] LCP under 1.2s throttled 4G
- [ ] CLS 0 through the entire load sequence
- [ ] Reduced motion renders the final state with no animation and no pulse
- [ ] Readable and correctly stacked at 360px
- [ ] Sequence does not replay on scroll or on re-render
