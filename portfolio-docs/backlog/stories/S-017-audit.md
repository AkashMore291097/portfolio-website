# S-017 — Accessibility and performance audit

**Epic:** E7 Craft · **Approval:** no

## Goal
Meet the published floor. The footer strip makes a claim; this story makes it true.

## Scope
- Lighthouse on the production build: performance ≥95, accessibility 100, best practices
  and SEO ≥95.
- Verify every budget in `docs/01-technical-spec.md`. Report actuals.
- Full keyboard pass from skip link to footer. Every interactive element reachable with a
  visible focus state.
- Screen reader pass on the chat, the graph, the timeline, and the palette.
- Reduced motion pass — confirm motion is disabled, not merely shortened.
- Contrast audit at every type size.
- Meta tags, Open Graph, favicon, `og:image`, `robots.txt`, `sitemap.xml`.
- Run `docs/05-anti-patterns.md` across the whole site, not one section.

## Constraints
- Fix causes, not symptoms. A contrast failure means the token is wrong.
- If a budget cannot be met, report the tradeoff — do not silently relax it.

## Acceptance
- [ ] All Lighthouse thresholds met, numbers reported
- [ ] Every performance budget met, actuals recorded in the changelog
- [ ] Zero automated a11y violations
- [ ] Full anti-pattern checklist passes site-wide
- [ ] Footer build strip reflects the real audited numbers
