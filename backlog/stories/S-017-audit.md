# S-017 — Accessibility and performance audit

**Epic:** E7 Craft · **Approval:** no

## Goal
Meet the published floor.

> **Note (S-030):** the footer's build-metrics strip this goal originally referred to
> (gzipped bundle size, LCP, commit hash, deploy date) was removed by direct user
> request — see `backlog/BACKLOG.md`'s S-030 changelog entry. The "footer strip makes a
> claim" framing below is historical; the remaining acceptance criteria (Lighthouse,
> budgets, a11y, anti-patterns) still apply as written.

## Scope
- Lighthouse on the production build: performance ≥95, accessibility 100, best practices
  and SEO ≥95.
- Verify every budget in `docs/01-technical-spec.md`. Report actuals.
- Full keyboard pass from skip link to footer. Every interactive element reachable with a
  visible focus state.
- Screen reader pass on the skill bubbles, the timeline, and the command palette. (The
  resume chat and the settled dependency graph originally spec'd here were both dropped
  before this story — see `docs/01-technical-spec.md`/`docs/03-sections.md`'s "not
  built" notes — so neither needs a pass.)
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
- ~~Footer build strip reflects the real audited numbers~~ (removed in S-030 — the
  strip no longer exists)
