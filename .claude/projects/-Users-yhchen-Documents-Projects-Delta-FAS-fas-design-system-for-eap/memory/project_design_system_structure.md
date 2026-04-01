---
name: FAS Design System Structure
description: Project structure and tooling setup for fas-design-system-for-eap monorepo
type: project
---

Monorepo with three workspaces: `fas-design-system`, `showcase`, `eap+`.

**Why:** User wants a design system component library that syncs to Storybook and has a live preview page for all component styles.

**How to apply:** When adding new components to `fas-design-system`, also:
1. Create a `ComponentName.css` file with class-based styles using CSS variables
2. Import the CSS in `src/styles/index.css`
3. Create a `ComponentName.stories.tsx` file for Storybook
4. Add a preview section to `showcase/src/App.tsx`

## Workspace Structure
- `fas-design-system/` — component library with Storybook
  - `src/tokens/tokens.css` — CSS custom properties (light + dark mode)
  - `src/styles/index.css` — global styles entry point (imports all component CSS)
  - `src/.storybook/` — Storybook config using `@storybook/react-vite` + `@storybook/addon-themes`
  - Components use class names like `fas-{component}--{modifier}`
- `showcase/` — Vite + React gallery app, imports CSS directly from fas-design-system src
  - Runs on `localhost:5173` (`npm run showcase` from root)
- Storybook runs on `localhost:6006` (`npm run storybook` from root)

## Key CSS Architecture
- All colors use CSS custom properties defined in `tokens.css`
- Dark mode via `[data-theme="dark"]` selector
- Components output BEM-style class names; CSS is separate (not CSS-in-JS)
- Storybook `preview.ts` uses `withThemeByDataAttribute` decorator for Light/Dark toggle
