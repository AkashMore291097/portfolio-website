# S-001 — Project setup and tooling

**Epic:** E1 Foundation · **Approval:** no

## Goal
A running Vite + React 19 + TypeScript app with linting, formatting, and a verify script.
Nothing visual yet.

## Scope
- `npm create vite@latest` — react-ts template. Verify current versions with `npm view`
  before installing; do not pin from memory.
- Tailwind v4 via `@tailwindcss/vite`. No `tailwind.config.js` — v4 config is CSS-first.
- ESLint flat config with `typescript-eslint`, `react-hooks`, `jsx-a11y`. Prettier.
- `tsconfig`: `strict`, `noUncheckedIndexedAccess`, `noImplicitOverride`, path alias `@/`.
- Scripts: `dev`, `build`, `preview`, `verify` (`tsc --noEmit && eslint . && vite build`).
- Directory skeleton from `CLAUDE.md`, each folder holding a `.gitkeep`.
- `.env.example` with `ANTHROPIC_API_KEY=`. `.gitignore` covers `.env`, `dist`, `node_modules`.
- `README.md`: what it is, how to run, where the specs live.

## Out of scope
Any component, any styling beyond the Tailwind import, the API function.

## Acceptance
- [ ] `npm run dev` serves a blank page with no console errors
- [ ] `npm run verify` exits 0
- [ ] A deliberate type error fails `verify`
- [ ] An unused import fails lint
- [ ] Installed dependency list matches `docs/01-technical-spec.md` exactly
