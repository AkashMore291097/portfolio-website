# S-015 — Contact and footer with build metrics

**Epic:** E6 Close · **Approval:** no

## Goal
The close.

## Scope
- Contact: 200px padding, centred `display-md` statement, `CopyLink` email at `data` 20px
  that is also a real `mailto:` anchor, `Download resume` primary, GitHub and LinkedIn
  text links.
- Footer: 1px top border, name and tagline left, links right.
- Build strip in `data-sm`: gzipped bundle size, LCP, commit hash linked to GitHub, deploy
  date. Injected at build time via Vite `define`, from bundle stats and
  `git rev-parse --short HEAD`.
- Copyright line, sentence case.

## Constraints
- No contact form in v1.
- Build metrics are generated or removed. A hardcoded value here would undercut the exact
  claim the strip is making.
- The centred contact statement is the only centred block on the page — do not centre the
  footer to match.

## Acceptance
- [ ] Copy confirmation appears and clears after 1.6s
- [ ] Middle-click and right-click on the email behave as a normal link
- [ ] Build values change between two builds with different commits
- [ ] Resume downloads with a sensible filename
- [ ] Build fails loudly if a metric cannot be generated
