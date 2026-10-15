---
name: Clinical Precision
colors:
  surface: '#faf8ff'
  surface-dim: '#d2d9f4'
  surface-bright: '#faf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f3ff'
  surface-container: '#eaedff'
  surface-container-high: '#e2e7ff'
  surface-container-highest: '#dae2fd'
  on-surface: '#131b2e'
  on-surface-variant: '#3d4947'
  inverse-surface: '#283044'
  inverse-on-surface: '#eef0ff'
  outline: '#6d7a77'
  outline-variant: '#bcc9c6'
  surface-tint: '#006a61'
  primary: '#00685f'
  on-primary: '#ffffff'
  primary-container: '#008378'
  on-primary-container: '#f4fffc'
  inverse-primary: '#6bd8cb'
  secondary: '#4648d4'
  on-secondary: '#ffffff'
  secondary-container: '#6063ee'
  on-secondary-container: '#fffbff'
  tertiary: '#006860'
  on-tertiary: '#ffffff'
  tertiary-container: '#248279'
  on-tertiary-container: '#f3fffc'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#89f5e7'
  primary-fixed-dim: '#6bd8cb'
  on-primary-fixed: '#00201d'
  on-primary-fixed-variant: '#005049'
  secondary-fixed: '#e1e0ff'
  secondary-fixed-dim: '#c0c1ff'
  on-secondary-fixed: '#07006c'
  on-secondary-fixed-variant: '#2f2ebe'
  tertiary-fixed: '#9cf2e8'
  tertiary-fixed-dim: '#80d5cb'
  on-tertiary-fixed: '#00201d'
  on-tertiary-fixed-variant: '#00504a'
  background: '#faf8ff'
  on-background: '#131b2e'
  surface-variant: '#dae2fd'
typography:
  headline-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.025em
  headline-xl-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 22px
    fontWeight: '700'
    lineHeight: 30px
    letterSpacing: -0.015em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 22px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.015em
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
    letterSpacing: -0.01em
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
    fontWeight: '600'
    lineHeight: 20px
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.025em
  data-tabular:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 18px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1rem
  gutter-desktop: 1.5rem
  margin: 1rem
  margin-tablet: 1.5rem
  margin-desktop: 2rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 0.75rem
  space-lg: 1.25rem
  space-xl: 2rem
---

## Brand & Style

This design system embodies high-reliability enterprise healthcare operations. It balances uncompromising clinical precision with humane approachability, mitigating cognitive fatigue for hospital administrators, nursing leads, and department chiefs navigating high-stakes environments.

### Visual Philosophy
- **Style Archetype:** Modern Corporate Clinical, pairing structured information architecture with calm, airy ergonomics.
- **Atmosphere:** Clean, serene, impeccably structured, and decisive.
- **Information Density:** High utility and data-dense without visual clutter; spatial clarity dictates speed of operational intervention.

## Colors

The palette pairs high-contrast slate neutrals with focused teal and functional status hues, rigorously maintaining WCAG 2.1 AAA/AA conformance across all data states.

### Core Canvas & Surfaces
- **Canvas Base:** `#F8FAFC` (Slate 50) provides a soft, anti-glare foundation for prolonged monitor use.
- **Surface Level 1 (Cards, Tables, Panels):** `#FFFFFF` (Pure White).
- **Surface Level 2 (Dividers, Inputs, Wells):** `#F1F5F9` (Slate 100).
- **Hairline Borders:** `#E2E8F0` (Slate 200).

### Typography & Neutrals
- **Text Primary (Headings, Crucial Metrics):** `#0F172A` (Slate 900).
- **Text Secondary (Subheads, Meta, Form Labels):** `#334155` (Slate 700).
- **Text Muted (Placeholders, Inactive Timestamps):** `#64748B` (Slate 500).

### Semantic & Departmental Operational Roles
- **Primary Operational Accent:** `#0D9488` (Teal 600) for primary actions, active telemetry tabs, and critical focus states. Pressed/Hover: `#0F766E` (Teal 700).
- **Secondary (In-Progress / Staging):** `#6366F1` (Indigo 500) paired with `#EEF2FF` (Indigo 50) background.
- **Success / Confirmed / Discharged:** `#10B981` (Emerald 500) paired with `#ECFDF5` (Emerald 50) background.
- **Warning / Triage Wait / Pending Review:** `#F59E0B` (Amber 500) paired with `#FFFBEB` (Amber 50) background.
- **Emergency / Code Alert / Critical Delays:** `#EF4444` (Rose 500) paired with `#FEF2F2` (Rose 50) background.

## Typography

The typography hierarchy uses Plus Jakarta Sans for structural navigation and major headers to provide an open, approachable presence. Inter handles all body text, operational labels, and dense tabular data.

### Formatting Rules
- **Tabular Numerics:** All medical vital ranges, bed occupancy rates, and timestamps must use `font-feature-settings: 'tnum' 1, 'cv05' 1` to prevent jitter during real-time data refreshes.
- **Hierarchy Distinction:** Section headers use semibold and bold weights of Plus Jakarta Sans with negative tracking (`-0.015em` to `-0.025em`) to anchor clinical modules firmly.

## Layout & Spacing

This design system uses a 12-column fluid grid system pinned to an 8px base rhythm (with a 4px sub-grid for dense clinical widgets).

### Breakpoints & Layout Adaptations
- **Mobile (< 768px):** 4 columns, 16px (`1rem`) margins and gutters. Single-column card stacking with persistent bottom quick-action triggers.
- **Tablet (768px - 1023px):** 8 columns, 24px (`1.5rem`) margins, 16px gutters. Collapsible secondary inspection drawers.
- **Desktop (≥ 1024px):** 12 columns, 32px (`2rem`) margins, 24px (`1.5rem`) gutters. Fixed utility sidebar (compact 64px or expanded 256px), with fluid main stage supporting split clinical views (e.g., patient list on left 5 columns, real-time telemetry card stack on right 7 columns).

## Elevation & Depth

Visual hierarchy relies on low-contrast structural outlines complemented by tinted ambient shadows to maintain clinical focus without muddy gradients.

### Layer Tiers
- **Flat Ground (Layer 0):** Canvas base `#F8FAFC`.
- **Structural Modules (Layer 1):** Solid white `#FFFFFF` cards, framed with a 1px solid border in `#E2E8F0` and an ultra-subtle ambient drop shadow: `0 1px 3px 0 rgba(15, 23, 42, 0.04), 0 1px 2px -1px rgba(15, 23, 42, 0.03)`.
- **Active / Hover State (Layer 2):** Elevated cards, active bed monitors, and hover cards: 1px border `#CBD5E1` with shadow `0 4px 6px -1px rgba(15, 23, 42, 0.07), 0 2px 4px -2px rgba(15, 23, 42, 0.05)`.
- **Overlays & Drawers (Layer 3):** Modal windows, emergency triage drawers, and popovers: 1px border `#CBD5E1` with shadow `0 20px 25px -5px rgba(15, 23, 42, 0.1), 0 8px 10px -6px rgba(15, 23, 42, 0.08)`. Backdrops must use `#0F172A` with 40% opacity and an 8px backdrop blur.

## Shapes

The design system employs a soft rounding scale (`roundedness: 1`), creating an architectural, clinical feel.
- **Standard UI Elements (Buttons, Inputs, Badges, Tabs):** `0.25rem` (4px).
- **Cards & Data Panels (`rounded-lg`):** `0.5rem` (8px).
- **Modals & Flyout Sheets (`rounded-xl`):** `0.75rem` (12px).
- **Status Indicators & Triage Pills:** Full radius (`9999px`) reserved strictly for circular presence dots and status tags to contrast against rectangular data grids.

## Components

### Buttons
- **Primary:** Background `#0D9488`, text `#FFFFFF`, border none, hover `#0F766E`, active `#115E59`.
- **Secondary:** Background `#FFFFFF`, text `#0F172A`, border 1px solid `#E2E8F0`, hover background `#F8FAFC`, hover border `#CBD5E1`.
- **Destructive/Emergency:** Background `#EF4444`, text `#FFFFFF`, hover `#DC2626`.
- **Padding:** 8px 16px (`body-md`), height 36px (compact desktop) or 44px (touch tablet).

### Badges & Status Chips
- **Geometry:** Height 22px, `rounded-full` (9999px), padding 2px 10px. Type size `label-sm`.
- **Confirmed/Completed:** Background `#ECFDF5`, text `#065F46`, border 1px solid `#A7F3D0`.
- **Pending/Awaiting:** Background `#FFFBEB`, text `#92400E`, border 1px solid `#FDE68A`.
- **Emergency/Critical:** Background `#FEF2F2`, text `#991B1B`, border 1px solid `#FECACA`, prefixed with a 6px pulsing dot.
- **In-Progress:** Background `#EEF2FF`, text `#3730A3`, border 1px solid `#C7D2FE`.

### Data Tables & Lists
- **Header:** Height 40px, background `#F8FAFC`, text `#334155`, font `label-md`, uppercase with 0.05em letter spacing, border bottom 1px solid `#E2E8F0`.
- **Rows:** Height 48px, background `#FFFFFF`, alternating hover state `#F1F5F9`, border bottom 1px solid `#F1F5F9`.
- **Cell Alignment:** Numeric patient data, beds, and metric values must right-align; text left-aligns.

### Input Fields & Controls
- **Text Inputs:** Height 36px, background `#FFFFFF`, border 1px solid `#CBD5E1`, text `#0F172A`, placeholder `#94A3B8`, focus ring 2px solid `#0D9488` with zero ring-offset.
- **Checkboxes & Radios:** 16x16px, border 1.5px solid `#94A3B8`, checked background `#0D9488`, checked mark white.

### Clinical Metric Cards
- **Structure:** Level 1 elevation, padding 16px (`space-lg`), containing clear visual hierarchy: metadata category (`label-sm`, `#64748B`), bold numeric metric (`headline-md`, `#0F172A`), and bottom trend delta chip.