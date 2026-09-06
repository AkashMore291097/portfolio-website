# S-007 — Experience timeline

**Epic:** E2 Narrative · **Approval:** no

## Goal
Chronological roles on a single rule, with a scroll-driven fill.

## Scope
- 1px vertical rule at column 2, square nodes per role.
- Entry layout per `docs/03-sections.md` §3: serif company, muted role and dates
  right-aligned on the same baseline, 2–3 outcome bullets, chips.
- Rule fills with `--color-signal` to scroll position using CSS `animation-timeline: view()`.
  No JS scroll listener.
- Active node highlights at the viewport midline.

## Constraints
- The fill is the only scroll-linked effect on the site. It is permitted because position
  in a chronological list is real information.
- No company logos — brand colours would break the palette.
- Bullets state outcomes. Reject any bullet beginning "Responsible for".

## Acceptance
- [ ] Rule fill tracks scroll with no JS listener
- [ ] Reduced motion renders the rule fully filled in `--color-line`, unanimated
- [ ] Role and dates stack beneath the company below 768px
- [ ] No scroll jank at 60fps
