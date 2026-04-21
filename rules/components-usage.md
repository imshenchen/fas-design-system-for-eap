# FAS Design System — Usage Guidelines

> **Audience**: Any AI system generating UI for Delta DIAAuto products (EAP+, DIAWorks, etc.).
> Framework-agnostic — describes visual and interaction design decisions, not implementation details.

---

## Foundations

- **Colors**: Always use semantic color tokens (`var(--primary)`, `var(--error)`, etc.). Never hardcode hex values.
- **Dark Mode**: Achieved by toggling CSS token values via `[data-theme="dark"]`. Component structure never changes.
- **Border radius**: Default **4px**; use 8px for larger surfaces (modals, cards); 50% for circular elements only.
- **Typography**: Latin characters and numbers → Roboto; Chinese → Noto Sans TC.
- **Icons**: Google Material Symbols, `filled` variant, 20px standard size.

---

## Spacing System

All spacing values are **multiples of 4px**. Choose a value based on the semantic relationship between content — not by visual intuition.

| Value | Name | When to use |
|-------|------|-------------|
| **4px** | Micro | Minimum internal spacing: icon-to-label gap, badge offsets, adjacent icon gaps |
| **8px** | Tight | Items **within the same group**: fields within a form section, rows within a card |
| **12px** | Compact | Compact lists or table padding; spacing between a form label and its input |
| **16px** | Default | **General-purpose spacing**: content within a card, paragraphs, fields within a form group. Use this when unsure. |
| **24px** | Loose | **Between different groups on the same page**: separating multiple form sections or information clusters |
| **32px** | Section | **Between independent content blocks**: DataTable vs. filter panel above it, card vs. card, major page divisions |

### Selection rules

- **Closer relationship → smaller gap**: same group → 8px; across groups → 24px; across blocks → 32px.
- **Default to 16px** when unsure, then adjust based on visual density.
- **Never use off-system values** (e.g. 10px, 15px, 20px). If a nudge is needed, pick the adjacent tier.
- Page-level outer padding is fixed at **32px** (enforced by the layout wrapper — do not re-specify).

### Common examples

```
Inside a card
  ├── Card title → content body: 16px
  ├── Label + value pair (same group): 8px
  └── Card → adjacent card: 32px

Form page
  ├── Fields within the same section: 16px
  ├── Field label → input: 4–8px
  ├── Between field groups within a section: 24px
  └── Between independent sections ("Basic Info" vs. "Advanced Settings"): 32px

DataTable page
  ├── TopBar → Table: 8px (same functional group visually)
  ├── DataTable → filter panel above: 24px
  └── FeatureTitle → main content: 32px (handled by the padding wrapper)
```

---

## Layout

### Page structure

```
NavigationBar (60px, sticky, z-100)
├── SideMenu (280px expanded / 80px collapsed, sticky top: 60px)
└── Main content area (flex: 1, background: var(--bg-surface-dim))
    ├── FeatureTitle (sticky, no padding wrapper)
    └── <div style="padding: 32px"> — feature content </div>
```

`<main>` uses `padding: 0; overflow: auto`. Do not apply padding directly to `<main>`.

- **FeatureTitle** is placed directly inside `<main>`, outside the padding wrapper, so it stays flush to the NavBar when sticky.
- All feature content below FeatureTitle lives inside a `padding: 32px` wrapper `<div>`.

```html
<main style="padding: 0; overflow: auto">
  <FeatureTitle ... />
  <div style="padding: 32px">
    {/* page content */}
  </div>
</main>
```

### Z-index scale

| Layer | z-index |
|-------|---------|
| Sticky table header | 10 |
| Side menu (overlay) | 50 |
| Navigation bar | 100 |
| Dropdown / picker | 200 |
| Dialog | 300 |
| Tooltip | 400 |
| Snackbar | 500 |

---

## Navigation

### NavigationBar

Fixed at the top of the page (60px height, sticky, z-100). Contains logo, app name, global actions, and user avatar.

### SideMenu

Permanent left navigation. Expanded: 280px; collapsed: 80px (icon-only).

- Section headers are non-clickable; styled with primary color at a larger font size.
- L1 items include an icon; show expand arrow when children exist.
- L2 items are indented with a guide line; selected state uses a light-blue background.
- In collapsed mode, only icons are visible; hovering shows a Tooltip with the label.
- Version number is fixed at the bottom and does not scroll with menu items.

### FeatureTitle

Sticky page-title bar (56px) displayed below the NavigationBar. Contains breadcrumb navigation and optional right-side action buttons.

- `topOffset` defaults to NavBar height (60px). If `<main>` has `overflow: auto`, set `topOffset` to `0` (sticky is relative to `<main>`).
- Right-side `actions`: maximum **two buttons** — primary action uses `contained`, secondary uses `outlined`.
- **Button placement rule**: place action buttons in FeatureTitle **only on edit pages**. On list/detail pages, keep buttons inside the content area.
- Breadcrumb non-terminal items must provide `onClick` for navigation; the last item is plain text (current page) with no `onClick`.
- **Breadcrumb depth**: the first breadcrumb level must always be the **currently selected item in the SideMenu** (the active leaf node). Do not skip it or replace it with a parent section name.

### Breadcrumbs

Maximum 5 levels. The current page is the last item, non-clickable, and rendered in a darker text color.

### Tab

Active tab is indicated by an underline indicator. Never use background color to indicate the active state.

### Stepper

Completed steps show a checkmark; the active step is filled with the primary color; future steps use gray.

### Pagination

First-page and last-page buttons are disabled when already on the first or last page.

---

## Buttons

Three visual hierarchy levels: **Contained > Outlined > Text**

- Only **one** `contained` button per page area, always paired with the primary color.
- `outlined` is the default general-purpose button.
- `text` is for toolbars and space-constrained contexts.
- Destructive actions use the Error color — prefer `outlined` style (not `contained`) for destructive buttons.
- Button text never wraps. Pair with a Tooltip if text may be truncated.

---

## Form Components

- Text inputs default to `outlined` style, size `M` (40px height).
- Error state: show helper text below the input in the error/danger color.
- Use **Checkbox** for options that take effect on form submission; use **Switch** for settings that take effect immediately.
- Checkbox supports an **indeterminate** state for partial selection (e.g. select-all in a table).

---

## Feedback & Notifications

**Alert**  
Inline messages are embedded in the content area; full-page banners are placed at the top of the page. Only use alerts for errors and successes that require explicit user awareness. Avoid overusing informational alerts.

**Snackbar**  
Brief global notification, auto-dismisses after 4 seconds. Displayed at the top-center of the screen. Use Alert or Dialog for important errors — not Snackbar.

**Dialog**  
Use when the user must confirm before proceeding; always includes a background overlay. Destructive-action confirm buttons use the Error color.  
Dialogs may contain form fields, but **only for simple, brief inputs**. If the form has many fields or requires multi-level interaction, use a full page instead of a Dialog.

---

## Data Display

### DataTable & MasterDetailTable

- Header row has a slightly darker background.
- Striped (zebra) rows are optional but improve readability for dense data.
- Selected rows use a light-blue background.
- Sort icons appear clearly only on column hover.

**Sequence column (required)**  
Every DataTable and MasterDetailTable **must include a sequence column** as the first data column.
- Column header: `#`
- Values: sequential integers `1 → n` based on the current page's display order. Never use a database ID or business key.
- Fixed width; not sortable; not filterable.

### DataTableTopBar

The title bar for DataTable sits **above** the table's border box — transparent background, not wrapped inside the table's border frame.

- **Title is required**: every DataTable must have a `title` so users understand what the table represents.
- **Style selection**:
  - No "Add" button and no multi-select actions → use the minimal **Row 1 only** style (title + counts). Do not show the action row.
  - Has actions → show both rows (Row 1: title / tabs / counts; Row 2: action buttons / search).
- **Layout**: TopBar and DataTable render independently. DataTable retains its own white background and border; TopBar is transparent and sits above it.

### Card

Used for factory dashboards, monitoring panels, etc.
- On a `#fafafa` page background: use `elevated` style (drop shadow).
- On a white background: use `outlined` style (border).
- Border radius: always 4px.

---

## Dark Mode

Toggle by setting `document.documentElement.setAttribute('data-theme', 'dark')`.  
Remove the attribute to return to light mode.  
Component structure is unchanged; CSS variables update automatically.  
The toggle UI is controlled by the application — the design system does not provide a built-in toggle component.
