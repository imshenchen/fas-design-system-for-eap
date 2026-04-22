# FAS Design System — AI Usage Guidelines

This folder holds the design-system rules that AI tools (Claude, Cursor, GitHub Copilot, etc.) should load as context, so generated code follows the FAS Design System.

## Files

| File | Purpose |
|------|---------|
| `usage-guidelines.md` | Install, imports, naming rules, core rules for AI (this file) |
| `components-usage.md` | Design principles: visual hierarchy, interaction rules, layout |

---

## Loading in AI tools

### Claude Code
In your project root, create `CLAUDE.md` and add:
```
@path/to/fas-design-system/rules/usage-guidelines.md
@path/to/fas-design-system/rules/components-usage.md
```

### Cursor
Paste each `.md` file's content into `.cursorrules` or the `Rules for AI` field in Cursor's settings.

### GitHub Copilot
Create `.github/copilot-instructions.md` and paste each `.md` file's content.

---

## Install

```bash
npm install @imshenchen/fas-design-system
```

## Import styles

Import once in your app's entry point (e.g. `main.tsx`):

```tsx
import '@imshenchen/fas-design-system/styles';
```

## Import components

```tsx
import { Button, TextField, DataTable } from '@imshenchen/fas-design-system';
```

## Design Tokens

Tokens are defined in `fas-design-system/src/tokens/tokens.ts` and exported in four groups:

- `cssVars` — CSS variable references, for React inline styles or styled-components (e.g. `cssVars.primary` = `'var(--primary)'`)
- `rawTokens` — Raw color values, for JS logic, chart palettes, etc.
- `spacing` — Spacing scale (4 px base unit; `spacing[4]` = `'16px'`)
- `zIndex` — Z-index scale (`zIndex.dialog` = `300`)

```tsx
import { cssVars, rawTokens, spacing, zIndex } from '@imshenchen/fas-design-system';
```

## Theme (Light / Dark)

Toggle via the `data-theme` attribute:

```tsx
document.documentElement.setAttribute('data-theme', 'dark');
document.documentElement.removeAttribute('data-theme'); // back to light
```

## Naming conventions

- Component class prefix: `fas-` (e.g. `fas-btn`, `fas-chip`)
- BEM structure: `fas-[component]__[element]--[modifier]`
- CSS variables have no prefix (e.g. `var(--primary)`, `var(--text-body)`, `var(--divider)`)

---

## Core rules (for AI)

1. **No hardcoded colors** — always reference CSS variables (`var(--primary)` etc.) or use `cssVars` / `rawTokens`.
2. **No hardcoded spacing** — use the `spacing` scale or 4 px multiples.
3. **Follow BEM naming** — class names must use the `fas-` prefix.
4. **No new variants** — only use the visual styles and behaviors described in `components-usage.md`.
5. **Dark Mode is mandatory** — component CSS must handle the `[data-theme="dark"]` state.
6. **Keep tokens in sync** — when a token changes, update every component that uses it.
7. **Re-verify tokens after every change** — after finishing any development or modification, audit the touched files to confirm every color, spacing, radius, shadow, z-index, and typography value comes from the design-system variables/tokens (`var(--…)`, `cssVars`, `rawTokens`, `spacing`, `zIndex`). Never ship hardcoded literals.

---

## Known pitfalls and workarounds

### CSS variables are not bundled
`@imshenchen/fas-design-system/styles` uses `var(--primary)` etc. internally but does not ship the token definitions.
Your app must provide its own `tokens.css` that defines every `:root` token (plus `[data-theme="dark"]` overrides) and imports it **before** the design-system styles.

### Some component styles may be missing
In certain versions, styles for `fas-btn`, `fas-chip`, `fas-datatable`, and `fas-feature-title` may be missing.
Add a `missing-components.css` with the missing rules (including the `[data-theme="dark"]` variants).

### CSS load order
Strict order is required:
1. `tokens.css` (custom token definitions)
2. `@imshenchen/fas-design-system/styles`
3. `missing-components.css` (patch styles)

Any other order will break variable resolution or allow styles to be overridden.

### Two icon fonts are required
- `Material Symbols Outlined` — used by NavBar and SideMenu
- `Material Icons` (legacy) — used by the FeatureTitle separator

Both must be loaded in `<head>` of `index.html`.

### FeatureTitle `topOffset` behavior
When `<main>` has `overflow: auto`, sticky positioning is relative to `<main>` rather than the viewport.
In that case set `topOffset` to `0`, not the NavBar height (60 px).
