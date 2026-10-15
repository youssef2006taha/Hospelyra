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
  on-surface-variant: '#3e4947'
  inverse-surface: '#283044'
  inverse-on-surface: '#eef0ff'
  outline: '#6e7977'
  outline-variant: '#bdc9c6'
  surface-tint: '#006a63'
  primary: '#005c55'
  on-primary: '#ffffff'
  primary-container: '#0f766e'
  on-primary-container: '#a3faef'
  inverse-primary: '#80d5cb'
  secondary: '#006a61'
  on-secondary: '#ffffff'
  secondary-container: '#86f2e4'
  on-secondary-container: '#006f66'
  tertiary: '#005c52'
  on-tertiary: '#ffffff'
  tertiary-container: '#00776b'
  on-tertiary-container: '#84ffec'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#9cf2e8'
  primary-fixed-dim: '#80d5cb'
  on-primary-fixed: '#00201d'
  on-primary-fixed-variant: '#00504a'
  secondary-fixed: '#89f5e7'
  secondary-fixed-dim: '#6bd8cb'
  on-secondary-fixed: '#00201d'
  on-secondary-fixed-variant: '#005049'
  tertiary-fixed: '#71f8e4'
  tertiary-fixed-dim: '#4fdbc8'
  on-tertiary-fixed: '#00201c'
  on-tertiary-fixed-variant: '#005048'
  background: '#faf8ff'
  on-background: '#131b2e'
  surface-variant: '#dae2fd'
typography:
  display-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 30px
    fontWeight: '700'
    lineHeight: 38px
    letterSpacing: -0.02em
  headline-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.015em
  headline-xl-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 26px
    fontWeight: '600'
    lineHeight: 34px
    letterSpacing: -0.015em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.005em
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 24px
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
  label-md:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.04em
  tabular-nums:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 2rem
  margin-mobile: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system establishes an authoritative, calm, and hyper-efficient environment tailored for healthcare operations, clinical directors, hospital administrators, and medical practitioners. The visual language breaks away from cold, antiseptic blues and sterile legacy hospital software, deploying deep medical teal, energetic clinical emeralds, and warm porcelain tones to communicate trust, rapid decision-making, and regulatory compliance.

### Visual Aesthetic & Philosophy
- **Style Blend:** Modern SaaS meets clinical precision. It pairs structural clarity (crisp slate micro-borders, functional high-contrast text) with reassuring softness (diffused ambient shadows, pill-shaped metric badges, and rounded-xl view containers).
- **Emotional Intent:** To instill absolute composure during high-stress clinical workflows, eliminate perceptual clutter, and lower cognitive fatigue through strict typographic hierarchy and deliberate color rationing.
- **Atmosphere:** Clean, tactile, and highly legible across varied ambient light environments (e.g., bright surgical wards, dimly lit administrative stations, tablet triage carts).

## Colors

The palette is engineered around high WCAG AAA/AA accessibility standards, guaranteeing clear visibility of critical diagnostic parameters, bed occupancies, and triage schedules.

### Palette Roles & Distribution
- **Primary (`#0F766E` - Deep Medical Slate Teal):** The anchor of the platform. Used for primary calls-to-action, active sidebar states, verified record banners, and high-priority administrative switches.
- **Secondary (`#0D9488` - Clinical Teal):** Used for secondary interactions, active tab indicators, chart nodes, and focused form outlines.
- **Tertiary (`#14B8A6` - Vibrant Clinical Emerald):** High-visibility accent reserved for real-time status pulses, successful syncs, vitals stabilization, and metric trend indicators.
- **Neutral (`#0F172A` - Slate Charcoal):** Primary text and structural contrast point. Paired with supporting neutrals:
  - Surface Foundation: `#F8FAFC` (Clinical Off-White / Canvas)
  - Surface Raised / Cards: `#FFFFFF` (Pure Crisp White)
  - Surface Subdued: `#F1F5F9` (Muted Wells / Table Headers)
  - Borders & Dividers: `#E2E8F0` (Structural Micro-Borders)
  - Secondary Text: `#334155` / `#64748B` (Metadata, Timestamps, Inactive Labels)

### Semantic Alert Accents
- Critical / Triage Stat: `#DC2626`
- Warning / Pending Labs: `#D97706`
- Info / Operational Note: `#0284C7`

## Typography

The typographic pairing provides clarity at every tier: **Plus Jakarta Sans** introduces soft, balanced geometry to headlines, reducing cognitive intimidation; **Inter** handles data-dense body, labels, vitals telemetry, and dosage lists with maximum legibility.

### Rules & Hierarchy
- Enable `font-feature-settings: 'cv02', 'cv03', 'cv04', 'tnum'` across all data grids, medical records, medication volumes, and time-stamped operation feeds to prevent layout shifts during live data re-renders.
- Uppercase styling is strictly reserved for `label-sm` when tracking clinical categorization badges (e.g., `ICU`, `TRIAGE-1`, `DISCHARGED`), accompanied by `+0.04em` letter-spacing.
- Body text maintains a contrast ratio strictly above 4.5:1 against surfaces; key clinical headline data guarantees 7:1 against card backgrounds.

## Layout & Spacing

A disciplined, 12-column responsive fluid grid structured around an 8px base rhythm. This accommodates multi-pane operational dashboards, split-screen EHR (Electronic Health Record) views, and clinical schedule overviews without overcrowding.

### Screen Adaptations
- **Desktop (1280px+):** Fixed 260px collapsible clinical navigation rail; 12-column layout with 24px (`1.5rem`) gutters and 32px (`2rem`) canvas margins. Max layout bounding box spans 1600px for ultra-wide command center monitors.
- **Tablet / Workstation on Wheels (768px - 1279px):** 8-column layout, compact 72px icon rail navigation, 20px gutters, and 24px margins. Sub-panes (such as patient history side-sheets) transition to sliding overlay drawers.
- **Mobile Handheld (320px - 767px):** 4-column layout with 16px (`1rem`) gutters and 16px margins. Multiphase clinical forms collapse into single-column vertical stacks with bottom bar validation triggers.

## Elevation & Depth

Visual hierarchy uses a refined hybrid of structural micro-outlines and ambient slate-tinted shadows. Heavy drops and stark black shadows are prohibited; depth simulates clinical workspace light:

- **Level 0 (Canvas Base):** Flat `#F8FAFC`, zero shadow.
- **Level 1 (Card & Section Containers):** Solid `#FFFFFF` fill bounded by a continuous 1px micro-border of `#E2E8F0`. Shadow: `0 1px 3px 0 rgba(15, 23, 42, 0.04), 0 1px 2px -1px rgba(15, 23, 42, 0.02)`.
- **Level 2 (Interactive Floating / Hover States):** Applied to active patient triage cards, selectable bed tiles, and dropdown panels. 1px border of `#CBD5E1`. Shadow: `0 4px 12px -2px rgba(15, 118, 110, 0.08), 0 2px 6px -1px rgba(15, 23, 42, 0.04)`.
- **Level 3 (Modals, Clinical Alerts, Slide-in Trays):** 1px border of `#E2E8F0`. Shadow: `0 20px 25px -5px rgba(15, 23, 42, 0.1), 0 8px 10px -6px rgba(15, 23, 42, 0.05)`.
- **Backdrop Blurs:** High-priority modal masks utilize `rgba(15, 23, 42, 0.35)` with an `8px` backdrop filter blur for focus during urgent operational overrides.

## Shapes

The design system adopts a balanced roundedness model (`roundedness: 2`), grounding high-density administrative workflows with soft, humane silhouettes.

### Corner Radius Mapping
- **Base (0.5rem / 8px):** Form controls, inputs, operational buttons, small status chips, and table row selections.
- **Large (1rem / 16px):** Metric widgets, EHR detail cards, clinical chart containers, and alert blocks.
- **Extra Large (1.5rem / 24px):** Global operational panels, modal dialog windows, sliding drawer corners, and outer dashboard views.
- **Fully Pill-Shaped (`9999px`):** Live telemetry indicators, patient tag markers, and floating fast-action triage buttons.

## Components

### Buttons
- **Primary:** Background `#0F766E`, solid white text, 8px border radius, 0 1px 2px rgba(0, 0, 0, 0.05). Hover state: `#0D9488`. Active state: `#115E59`. Focus ring: 2px offset with `#14B8A6`.
- **Secondary / Outline:** Background `#FFFFFF`, 1px border `#E2E8F0`, text `#0F172A`. Hover: background `#F8FAFC`, border `#CBD5E1`.
- **Destructive (Emergency / Terminate):** Background `#FEF2F2`, 1px border `#FCA5A5`, text `#B91C1C`. Hover: `#DC2626` background with white text.

### Chips & Status Badges
- Pill-shaped (`rounded-full`) or soft-rounded (6px) badges, 22px fixed height, `label-sm` font.
- **Normal / Low Risk:** `#CCFBF1` background, `#0F766E` text, optional animated `#14B8A6` beacon dot.
- **Critical / Urgent:** `#FEE2E2` background, `#991B1B` text.
- **Observation / In-Progress:** `#FEF3C7` background, `#92400E` text.

### Input Fields & Selects
- Height 40px, background `#FFFFFF`, 1px border `#CBD5E1`, text `#0F172A`, placeholder `#94A3B8`.
- Focus state: border `#0D9488` with a 3px soft tint ring (`rgba(13, 148, 136, 0.15)`).
- Error state: border `#EF4444`, ring `rgba(239, 68, 68, 0.15)`.

### Checkboxes & Radios
- Checkboxes: 18x18px, 4px corner radius, border 1.5px `#CBD5E1`. Checked state: `#0F766E` background with white check icon.
- Radios: 18x18px circular, checked state has a `#0F766E` concentric inner ring.

### Cards & Data Panels
- Background `#FFFFFF`, 16px (`rounded-lg`) border radius, 1px border `#E2E8F0`. Padding follows `space-lg` (24px).
- Optional card header: 1px bottom border `#F1F5F9`, internal padding 16px 24px, containing section titles and utility chips.

### Healthcare-Specific Components
- **Vitals Monitor Bar:** Compact card displaying heart rate, SpO2, and blood pressure with tabular numerical alignment and live teal trend mini-sparks.
- **Patient Bed Tile:** High-density, double-layered card with immediate visual indicators of admission status, attending physician, and allergy warnings.
- **Clinical Timeline Feed:** Vertical line (`#E2E8F0`) with 12px pill nodes colored by event category (medication pass, lab results, triage notes).