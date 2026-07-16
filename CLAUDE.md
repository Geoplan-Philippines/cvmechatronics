# Claude Code Project Instructions

## Skills

Project-specific skills are located in:

- `.claude/skills`

Use the relevant skill when the task matches the skill description.

## Design Context

This project carries design-system context for the `/impeccable` skill and any agent doing UI work:

- `PRODUCT.md` — strategic context: register (`product`), users, purpose, brand personality, anti-references, design principles, accessibility.
- `DESIGN.md` — visual system: colors, typography, elevation, components, do's & don'ts (sourced from `app.preset.ts` + `styles.css`).

Read both before designing or reviewing UI. The theming source of truth remains `src/app/app.preset.ts` and `src/styles.css` (see `.claude/rules/theming.md`).