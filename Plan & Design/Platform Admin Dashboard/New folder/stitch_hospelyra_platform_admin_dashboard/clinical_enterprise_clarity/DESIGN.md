---
name: Clinical Enterprise Clarity
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#45464d'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#76777d'
  outline-variant: '#c6c6cd'
  surface-tint: '#565e74'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#131b2e'
  on-primary-container: '#7c839b'
  inverse-primary: '#bec6e0'
  secondary: '#006398'
  on-secondary: '#ffffff'
  secondary-container: '#5bb8fe'
  on-secondary-container: '#00476e'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#00201d'
  on-tertiary-container: '#0c9488'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dae2fd'
  primary-fixed-dim: '#bec6e0'
  on-primary-fixed: '#131b2e'
  on-primary-fixed-variant: '#3f465c'
  secondary-fixed: '#cce5ff'
  secondary-fixed-dim: '#93ccff'
  on-secondary-fixed: '#001d31'
  on-secondary-fixed-variant: '#004b73'
  tertiary-fixed: '#89f5e7'
  tertiary-fixed-dim: '#6bd8cb'
  on-tertiary-fixed: '#00201d'
  on-tertiary-fixed-variant: '#005049'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  display-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 26px
    fontWeight: '700'
    lineHeight: 34px
    letterSpacing: -0.015em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.015em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 24px
    letterSpacing: -0.005em
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
  label-lg:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
  label-sm:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.04em
  micro-caption:
    fontFamily: Inter
    fontSize: 10px
    fontWeight: '600'
    lineHeight: 12px
    letterSpacing: 0.06em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 0.75rem
  gutter-desktop: 1.5rem
  margin: 2rem
  margin-mobile: 1rem
  margin-desktop: 2rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2rem
---

## Brand & Style

This design system embodies high-assurance clinical governance, precision data architecture, and modern enterprise software standards. Built specifically for platform administrators overseeing mission-critical healthcare infrastructures, hospital networks, multi-tenant nodes, and compliance pipelines, the aesthetic communicates absolute reliability, intellectual calm, and unyielding operational authority.

The visual style merges Modern Corporate SaaS with high-density Information Architecture:
- **Clinical Precision:** Crisp lines, high legibility, strict contrast boundaries, and zero frivolous ornamentation.
- **Assurance & Restraint:** Purposeful application of deep slate navy foundations tempered by luminous medical teal/cyan accents that direct platform telemetry and critical operations without cognitive fatigue.
- **Dense Ergonomics:** Structural density designed for prolonged administrative workflows, audits, complex entity mapping, and real-time tenant health monitoring.

## Colors

The palette establishes an immediate sense of enterprise stability and clinical focus. High contrast ratios (WCAG AAA for text, AA minimum for data visualization and badges) are sustained across the board.

### Palette Architecture
- **Primary Canvas & Structural Core (`#0f172a` & `#1e293b`):** Deep Navy anchors navigation bars, primary CTAs, persistent shell sidebars, high-priority system banners, and core interactive states.
- **Clinical Accent System (`#0284c7` & `#0d9488`):** Precision Teal and Clinical Cyan provide contextual highlights for active links, primary system telemetry, selected table rows, active focus rings, and forward-moving progress metrics.
- **Neutral Foundations:**
  - Base Background: `#f8fafc` (crisp slate tint reducing optical glare over extended shifts).
  - Surface Card/Panel: `#ffffff` (immaculate, elevated white for structured data containers).
  - Subtle Borders & Dividers: `#e2e8f0` (clean, quiet bounding boxes) and `#cbd5e1` (interactive boundaries).
  - Typography Muted: `#64748b` (metadata, helper text, and column headers).
  - Typography Primary: `#0f172a` (high-readability dark slate navy).

### Semantic & Status Tokens
Status indicators operate on an explicit background-tint + solid-accent pairing for instant triage:
- **Active / Operational / Approved:** Emerald (`#059669` fill, `#ecfdf5` background, `#a7f3d0` border).
- **Pending / In Review / Trial:** Amber (`#d97706` fill, `#fffbeb` background, `#fde68a` border).
- **Suspended / Critical Alert / Expired:** Rose (`#e11d48` fill, `#fff1f2` background, `#fecdd3` border).
- **Platform Superadmin / Governance Roles:** Indigo (`#4f46e5` fill, `#eef2ff` background, `#c7d2fe` border).

## Typography

The type system blends the structural modernity of **Plus Jakarta Sans** for dashboards, section headers, and metric titles with the neutral, hyper-legible utility of **Inter** for dense transactional UI, clinical parameters, form inputs, and tabular datasets.

### Typographic Rules
- **Tabular Figures:** Always apply `font-feature-settings: "tnum" 1` across all data tables, metric tiles, timestamps, patient counts, bed occupancies, and licensing numbers to prevent vertical alignment jitter.
- **Micro-Labels & Enterprise Badges:** Use `label-sm` or `micro-caption` set in uppercase with tracking between `+0.04em` and `+0.06em` to maintain legibility when rendered in condensed badge borders.
- **Hierarchy Restraint:** Maintain a disciplined visual contrast. Dashboard widgets and data headers should rarely exceed `headline-sm` or `headline-md`, ensuring the screen space favors live clinical telemetry over decorative titles.

## Layout & Spacing

The layout is built upon an 8pt architectural rhythm using an adaptable fluid-grid system that accommodates persistent administrative navigation sidebars and multi-pane clinical inspection views.

### Screen Adaptations & Grid
- **Desktop (>= 1280px):** 12-column layout with a fixed-width collapsible navigation rail (240px expanded / 64px collapsed). Inner canvas utilizes `margin-desktop` (32px) and standard `gutter-desktop` (24px) for metric card arrays and 3-column split details.
- **Tablet (768px – 1279px):** 8-column layout. Navigation folds to a floating off-canvas drawer. Data grids support horizontal scrolling containers with frozen identifier columns. Gutter defaults to `gutter` (24px).
- **Mobile (< 768px):** 4-column layout. Section margins compress to `margin-mobile` (16px), and gutters compress to `gutter-mobile` (12px). Tables gracefully degrade to stacked summary cards.

### Layout Rhythm
- Inner component groupings (avatar with title, badge with label) utilize `space-xs` (4px) to `space-sm` (8px).
- Internal card padding defaults to `space-lg` (24px) for summary widgets and `space-md` (16px) for compact tabular headers.
- Stacked dashboard sections maintain `space-xl` (32px) distance.

## Elevation & Depth

To avoid visual pollution and maintain maximum analytical focus, this design system bypasses dramatic drop shadows in favor of a **Layered Surface Architecture** backed by low-contrast outlines and micro-diffused ambient shadows.

### Elevation Hierarchy
1. **Canvas Level (Flat / Ground):** Slate `#f8fafc`. Background on which all workspace containers rest.
2. **Surface Level 1 (Cards, Data Tables, Panels):** Pure White `#ffffff` with a continuous 1px border of `#e2e8f0`. Accompanied by micro-shadow `shadow-xs`: `0px 1px 2px 0px rgba(15, 23, 42, 0.05)`.
3. **Surface Level 2 (Flyouts, Hover States, Dropdowns):** Pure White `#ffffff` with a 1px border of `#cbd5e1` and `shadow-sm`: `0px 4px 6px -1px rgba(15, 23, 42, 0.07), 0px 2px 4px -2px rgba(15, 23, 42, 0.05)`.
4. **Surface Level 3 (Modals, Slide-over Drawers):** Pure White `#ffffff` encased in a 1px border of `#94a3b8` (opacity 40%), layered over an enterprise backdrop scrim (`#0f172a` at 45% opacity with 4px backdrop blur). Shadow: `0px 20px 25px -5px rgba(15, 23, 42, 0.12), 0px 8px 10px -6px rgba(15, 23, 42, 0.08)`.

### Border Integrity
Every container boundary relies on crisp, 1px geometric borders. Depth is communicated by sharp delineation rather than floating distance.

## Shapes

The design system employs a **Rounded** (Token `2`) geometry to introduce ergonomic softening to technical hospital data while preserving enterprise rigidity.

### Corner Radius Allocation
- **Standard Radius (`8px` / `0.5rem`):** Buttons, single-line text inputs, dropdown triggers, multi-select tags, table container borders, and card enclosures.
- **Large Radius (`rounded-lg` / `12px` - `16px`):** Top-level modal dialogues, dashboard summary cards, and administrative drawer flyouts.
- **Pill Radius (`9999px`):** Reserved exclusively for status indicators, micro-chips, and contextual numeric notification badges. Form controls and cards must never be pill-shaped.

## Components

### Buttons
- **Primary:** Background `#0f172a`, text `#ffffff`, border none, border-radius 8px, height 38px (medium). Hover: `#1e293b`. Active focus ring: 2px offset with `#0284c7`.
- **Secondary / Subtle:** Background `#ffffff`, border 1px solid `#e2e8f0`, text `#1e293b`. Hover: `#f8fafc`, border `#cbd5e1`.
- **Accent (Clinical Action):** Background `#0284c7`, text `#ffffff`. Hover: `#0369a1`.
- **Destructive:** Background `#ffffff`, border 1px solid `#fecdd3`, text `#e11d48`. Hover: `#fff1f2`.

### Status Badges & Chips
- Structure: 22px height, pill-shaped (`9999px`), inline-flex alignment, padding `2px 8px`.
- Indicator: Must include a 6px solid circular dot preceding the label with `4px` gap.
- **Emerald Badge (Active):** `#ecfdf5` background, `#047857` text, `#10b981` dot.
- **Amber Badge (Trial / Warning):** `#fffbeb` background, `#b45309` text, `#f59e0b` dot.
- **Rose Badge (Suspended):** `#fff1f2` background, `#be123c` text, `#f43f5e` dot.
- **Indigo Badge (Superadmin):** `#eef2ff` background, `#4338ca` text, `#6366f1` dot.

### Dense Data Tables
- Container: White background with 1px `#e2e8f0` outer bounding border.
- Header: Sticky positioning, height 40px, background `#f8fafc`, text uppercase `label-sm` in `#64748b`, 1px solid `#e2e8f0` bottom divider.
- Rows: Height 48px, horizontal padding 16px, typography `body-sm` (`#0f172a`), numbers in tabular format.
- Zebra / Hover state: Default background `#ffffff`, alternate rows `#fafafa` (optional via density settings), row hover transition to `#f1f5f9` (200ms ease). Active selected row: `#f0f9ff` with 2px solid `#0284c7` left border.

### Filter Bars & Search Inputs
- Filter Bar Container: Integrated directly above the table header with unified 1px border. Height 56px, background `#ffffff`.
- Search Input: Left-aligned search icon (`#94a3b8`), placeholder "Filter tenants, license IDs, or administrators...", height 36px, border 1px solid `#e2e8f0`. Focus transition to border `#0284c7` and ring `rgba(2, 132, 199, 0.15)`.
- Multi-select Chips: Removable chip embedded inside inputs with subtle close "x" icon (`#64748b` hover to `#0f172a`).

### Form Controls (Checkboxes & Radios)
- Checkboxes: 16px × 16px, 4px border-radius, 1px solid `#cbd5e1`. Checked: `#0f172a` fill with crisp white checkmark vector.
- Radios: 16px × 16px circular boundary. Selected: 5px solid inner dot `#0284c7`.

### Cards & Metric Tiles
- Surface: `#ffffff`, 1px solid `#e2e8f0`, radius 12px, padding 20px.
- Structure: Micro-label title at top (`label-sm`, `#64748b`), primary metric in `display-lg` (`#0f172a`, tabular), dynamic delta badge appended at bottom with comparative timeline description.

### Modal Dialogs
- Max width presets: 480px (confirmation), 640px (entity editing), 960px (audit log inspector).
- Surface: Rounded-lg (12px), pure white, 1px border `#cbd5e1`. Header includes title in `headline-sm` with a secondary dismissal icon button. Footer has `#f8fafc` background with a 1px top border and right-aligned action buttons.