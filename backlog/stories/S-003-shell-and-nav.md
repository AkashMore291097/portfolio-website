# S-003 — App shell, section scaffold, nav rail

**Epic:** E1 Foundation · **Approval:** no

## Goal
Eight empty, correctly spaced, correctly labelled sections you can scroll and navigate.

## Scope
- `Section` layout component: semantic `<section>`, `id`, `aria-labelledby`, the standard
  heading treatment (serif title, hairline rule, no eyebrow), and `--space-section` rhythm.
- Eight placeholder sections in scroll order from `docs/03-sections.md`.
- `NavRail`: fixed left, ≥1024px, eight numbered items, real anchor links.
- `useActiveSection` hook — `IntersectionObserver`, `rootMargin: "-45% 0px -45% 0px"`.
- Below 1024px: 2px top scroll-progress bar.
- Landmarks: one `header`, one `main`, one `footer`. Skip-to-content link, visible on focus.

## Constraints
- Section spacing defined once. No per-section margin overrides — this is where CSS
  specificity collisions usually start.
- No scroll-entry animation on sections. See `CLAUDE.md` motion policy.

## Acceptance
- [ ] Tab order runs skip link → rail → sections in visual order
- [ ] Active rail state changes at the viewport midline, not the top edge
- [ ] Heading outline is one `h1` then eight `h2`, no skips
- [ ] Rail hidden below 1024px, progress bar shown
- [ ] No layout shift on scroll
