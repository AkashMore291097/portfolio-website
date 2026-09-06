# S-016 — Command palette

**Epic:** E7 Craft · **Approval:** no

## Goal
`⌘K` navigation. Useful on a long page, and a specific signal about who built the site.

## Scope
- `⌘K` / `Ctrl+K` opens an overlay on `--color-surface`.
- Fuzzy filter over: jump to each of the eight sections, download resume, copy email,
  open GitHub, open LinkedIn, ask the resume chat (focuses the input and pre-fills).
- Arrows navigate, Enter runs, Escape closes, focus returns to where it was.
- Focus trapped while open. `role="dialog"`, `aria-modal`, labelled.
- Body scroll locked while open, without layout shift from the scrollbar.

## Constraints
- No visible hint in the UI. The people who use it already try it.
- Hand-written. No `cmdk` or dialog library — see the dependency rules.
- Under 6 kB gzipped.

## Acceptance
- [ ] Opens on both shortcuts, does not fire while typing in the chat input
- [ ] Fully keyboard operable, focus trapped and correctly restored
- [ ] Escape and click-outside both close
- [ ] No scrollbar-induced layout shift on open
- [ ] Screen reader announces it as a dialog
