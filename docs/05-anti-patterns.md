# 05 — Anti-patterns

Run this checklist at step 6 of every story. Any hit is a defect, not a preference.

## Visual tells

These read as machine-generated regardless of subject. They are the specific reason this
site would fail its one job.

- [ ] Uppercase letterspaced eyebrow label above a heading
- [ ] Monospace used for anything that is not data
- [ ] Metadata joined with middle dots (`A · B · C`) as a decorative string
- [ ] Numbered markers on content that is not a sequence
- [ ] A single word in a headline coloured, italicised, or bolded for emphasis
- [ ] Everything chopped into identical rounded cards with one radius and one grey shadow
- [ ] Gradient washes used as decoration
- [ ] `→` appended to button or link text
- [ ] More than one accent colour, or the accent used on static, non-interactive elements
- [ ] Inter (or the framework default sans) used for display type

## Motion tells

- [ ] Fade-and-rise on section scroll entry — forbidden, see `CLAUDE.md`
- [ ] Counters that animate upward
- [ ] Typewriter text
- [ ] Tilt-on-hover cards, cursor followers, particle fields, marquees
- [ ] Parallax on content
- [ ] Ambient motion whose position or timing encodes nothing
- [ ] Reduced-motion handled by shortening durations rather than disabling motion

## Content tells

- [ ] Any claim of production use, uptime, users, or traffic
- [ ] ~~A metric without its condition line~~ (moot as of S-033 — Featured projects no
  longer carries a metrics row at all; still applies if a metric is ever reintroduced
  anywhere on the site)
- [ ] ~~A project missing its "What breaks at scale" block~~ (removed in S-032 — the
  block no longer exists site-wide, so this check no longer applies)
- [ ] An invented company, date, metric, or URL where a token belongs
- [ ] Banned vocabulary from `04-content-rules.md`
- [ ] Skill proficiency bars, percentages, or star ratings
- [ ] An error message that apologises or says "something went wrong"
- [ ] Copy in a component instead of `src/content/`

## Engineering

- [ ] Arbitrary Tailwind values for colour, type, or spacing
- [ ] A dependency added that is not in `01-technical-spec.md`
- [ ] Performance budget exceeded
- [ ] An interactive element without a visible focus state
- [ ] A heading level skipped
- [ ] Build metrics hardcoded rather than injected at build time
- [ ] `any` in TypeScript

## The removal pass

At the end of each story, find one element that could be removed without losing meaning,
and remove it. Density is earned by data, not by decoration.
