# S-008 — Featured projects band

**Epic:** E3 Proof · **Approval:** yes — stop after the plan

## Goal
The heaviest section. Three full-width alternating bands.

## Scope
- Band layout per `docs/03-sections.md` §4. Alternating text/visual sides, 1px rule between.
- `Project N of 3`, serif name, problem sentence, solution paragraph.
- Metric row using the `Metric` primitive with its condition line.
- Chips, repository link, optional case-study link.
- `What breaks at scale` disclosure, collapsed, `--color-surface` when open.
- Visual column left as a slot — S-009 fills it.
- One GitHub profile link closing the section.

## Constraints
- **Not a card grid.** Bands, alternating, no shared box.
- Problem stated before solution, always.
- No production claims. No metric without a condition. Enforced by types from S-004,
  verified by eye here.
- Disclosure animation is user-triggered and therefore permitted.

## Acceptance
- [ ] Three bands alternate correctly and stack visual-first on mobile
- [ ] Every metric group shows a condition line
- [ ] Every project shows a populated limits block
- [ ] Disclosure is keyboard operable with correct `aria-expanded`
- [ ] Anti-pattern checklist passes, content section included
