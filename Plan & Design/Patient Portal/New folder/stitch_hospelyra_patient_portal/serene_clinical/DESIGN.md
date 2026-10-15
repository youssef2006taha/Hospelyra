---
name: Serene Clinical
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
  on-surface-variant: '#3e4948'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#6e7979'
  outline-variant: '#bec9c8'
  surface-tint: '#016a6a'
  primary: '#005454'
  on-primary: '#ffffff'
  primary-container: '#0d6e6e'
  on-primary-container: '#9dedec'
  inverse-primary: '#84d4d3'
  secondary: '#006a6a'
  on-secondary: '#ffffff'
  secondary-container: '#97eeee'
  on-secondary-container: '#006e6e'
  tertiary: '#2b4595'
  on-tertiary: '#ffffff'
  tertiary-container: '#455eaf'
  on-tertiary-container: '#d8deff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#a0f0f0'
  primary-fixed-dim: '#84d4d3'
  on-primary-fixed: '#002020'
  on-primary-fixed-variant: '#004f50'
  secondary-fixed: '#9af1f1'
  secondary-fixed-dim: '#7dd5d4'
  on-secondary-fixed: '#002020'
  on-secondary-fixed-variant: '#004f50'
  tertiary-fixed: '#dce1ff'
  tertiary-fixed-dim: '#b6c4ff'
  on-tertiary-fixed: '#00164e'
  on-tertiary-fixed-variant: '#264191'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  display-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.015em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 26px
    fontWeight: '600'
    lineHeight: 34px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  title-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 26px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 26px
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
  label-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 14px
    letterSpacing: 0.04em
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
  margin: 2.5rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system anchors a patient-first healthcare experience designed to reduce cognitive load and medical anxiety. The visual tone blends modern clinical precision with genuine hospitality: calm, reassuring, pristine, and profoundly accessible. 

The aesthetic is built on an elevated Warm Modern Clinical style:
- **Atmosphere:** Expansive whitespace, warm stone backgrounds, crisp clinical-white cards, and deeply calming oceanic teals.
- **Audience:** Patients navigating stressful medical contexts, family caregivers coordinating records, and clinic administrative coordinators requiring instant clarity.
- **Emotional Intent:** Reassurance, clarity, authority, and unconditional digital accessibility across all age demographics and abilities.
- **Design Principles:** Zero ambiguity, gentle transitions, generous tactile tap targets, and transparent status communication.

## Colors

The color system centers around restorative deep teals and stabilizing slate tones, counterbalanced by gentle therapeutic surface washes.

- **Primary Deep Teal (`#0D6E6E`):** Represents clinical competence and restorative calm. Used for primary interactive triggers, active navigation markers, and brand anchors. Hover transitions deepen to `#095252`.
- **Secondary Sage Teal (`#2B8A8A`):** Balances mid-tier actions, progress tracks, and secondary visual accents. Tinted backgrounds utilize ultra-light sage (`#E6F4F1`).
- **Tertiary Deep Slate Blue (`#1E3A8A`):** Evokes institutional longevity, security, and medical authority. Reserved for primary text, structural headers, and clinical data markers.
- **Neutral Foundation:** Background canvas rests on `#F8FAFC` (Slate Tint 50), with intermediate panel surfaces on `#FFFFFF` and delicate framing strokes on `#E2E8F0`. Body typography sits on `#334155` for high-contrast accessibility.
- **Clinical Semantic Indicators:**
  - *Confirmed / Completed (Emerald):* `#059669` fill, `#ECFDF5` container.
  - *Pending / Triage (Amber):* `#D97706` fill, `#FFFBEB` container.
  - *Cancelled / Immediate Attention (Rose):* `#DC2626` fill, `#FEF2F2` container.
  - *Informational / Records (Slate Blue):* `#2563EB` fill, `#EFF6FF` container.

## Typography

The typography uses **Plus Jakarta Sans** across all levels, marrying clinical precision with soft, approachable geometry.

- **Legibility & Comfort:** Body line-heights are scaled to 1.6x for relaxed readability, ensuring critical instructions, lab results, and medication guidelines can be digested effortlessly under strain.
- **Hierarchy:** High visual weight contrast between section headers (`600`/`700` weight) and body text (`400` weight) establishes clear scanning paths for rapid comprehension.
- **Numbers & Data:** Tabular numerals are enabled on data displays, dosage indicators, and schedule timestamps to eliminate optical jitter across list alignments.

## Layout & Spacing

The layout philosophy uses a disciplined 12-column responsive fluid grid with strict maximum content bounds (1280px) to prevent patient data forms and clinical tables from stretching beyond comfortable gaze angles.

- **Canvas Hierarchy:** 
  - Desktop (1024px+): 12 columns, 1.5rem gutters, 2.5rem outer canvas margin.
  - Tablet (640px - 1023px): 8 columns, 1rem gutters, 2rem outer canvas margin.
  - Mobile (under 640px): 4 columns, 1rem gutters, 1.25rem outer canvas margin. Reflows all side-by-side scheduling interactions into stacked vertical workflows.
- **Rhythm Rules:** Form input fields and related helper text adhere to `space-xs` (0.25rem) to `space-sm` (0.5rem) proximity. Grouped cards maintain `space-md` (1rem) internal component gaps, while distinct record modules rely on `space-xl` (2.5rem) to signify safe thematic breaks.

## Elevation & Depth

Visual hierarchy avoids heavy drop shadows, instead using soft ambient light and tonal contrast to communicate elevation.

- **Surface Levels:**
  - *Canvas (Level 0):* Baseline `#F8FAFC`.
  - *Cards & Panels (Level 1):* `#FFFFFF` bounded by a crisp 1px stroke `#E2E8F0`, softened by an ambient tinted shadow: `0px 2px 8px -2px rgba(15, 23, 42, 0.04), 0px 1px 3px 0px rgba(15, 23, 42, 0.02)`.
  - *Dropdowns, Popovers & Hover Cards (Level 2):* Tinted lift: `0px 12px 24px -6px rgba(13, 110, 110, 0.08), 0px 4px 8px -2px rgba(15, 23, 42, 0.04)`.
  - *Modals & Overlays (Level 3):* Centered modal surfaces elevated via `0px 24px 48px -12px rgba(15, 23, 42, 0.16)`, over a backdrop scrim tinted with `#0F172A` at 35% opacity and a subtle 4px blur.
- **Tactile Feedback:** Actionable cards respond to hover states by gently shifting their border stroke from `#E2E8F0` to a tinted `#CCECE6`, without sudden upward shifts that cause visual distraction.

## Shapes

The design system enforces a roundedness factor of 2, delivering organic, friendly contours that soften clinical rigidity without sacrificing structural professionalism.

- **Base Elements (`rounded`, 0.5rem / 8px):** Input text boxes, interactive chips, status tags, and buttons.
- **Structural Containers (`rounded-lg`, 1rem / 16px):** Patient appointment summary cards, clinical result containers, prescription review panels.
- **Hero Modules & Dialogs (`rounded-xl`, 1.5rem / 24px):** Triage alert alerts, prescription review dialogs, modal window shells.
- **Pills (`rounded-full`):** Appointment status indicators, active counter badges, and avatar frames.

## Components

### Buttons
- **Primary:** Deep Teal (`#0D6E6E`) solid fill with white text, 48px minimum touch height on mobile/desktop, `rounded` (8px). Generous horizontal padding (`space-lg`), medium font weight (`600`).
- **Secondary:** Surface `#E6F4F1`, text color `#0D6E6E`, borderless.
- **Tertiary / Ghost:** Pure transparent background with `#1E3A8A` text; reveals `#F1F5F9` background on hover.

### Status Badges
Pill-shaped badges (`rounded-full`) with uppercase tracking (`label-sm`), featuring a centered 6px dot indicator alongside status copy:
- **Confirmed:** Emerald dot (`#059669`), emerald text (`#065F46`), background `#ECFDF5`.
- **Pending:** Amber dot (`#D97706`), amber text (`#92400E`), background `#FFFBEB`.
- **Completed:** Slate teal dot (`#0D6E6E`), slate teal text (`#134E4A`), background `#E6F4F1`.
- **Cancelled:** Rose dot (`#DC2626`), rose text (`#991B1B`), background `#FEF2F2`.

### Cards & Appointment Tiles
- Standard background is pure `#FFFFFF` over `#F8FAFC` canvas.
- Encased with a 1px border `#E2E8F0` and `rounded-lg` (16px) curvature.
- Internal padding is set to `space-lg` (1.5rem). 
- Appointment cards segment doctor profile, consultation specialization, timing pills, and call-to-actions into two clear zones divided by a soft dashed rule (`#F1F5F9`).

### Input Fields & Forms
- Input height is standardized to 48px to satisfy accessible tap requirements.
- Border stroke of 1.5px `#CBD5E1` on pure white fill.
- Focus state activates a 1.5px `#0D6E6E` perimeter stroke paired with a 3px soft outer ring in `rgba(13, 110, 110, 0.15)`.
- Helper and validation messages sit 4px (`space-xs`) beneath the input in `body-sm`, accompanied by leading clinical-grade micro-icons.

### Checkboxes & Radios
- Sized at 20px x 20px with a 44px invisible touch target wrapper.
- Unchecked: `#FFFFFF` fill with 1.5px `#94A3B8` outline.
- Checked: `#0D6E6E` fill with an optically centered white checkmark or nested radio circle.

### Lists & Clinical Metrics
- Medical records display using divider-separated rows with 16px vertical padding (`space-md`).
- Alternating subtle highlight colors are avoided; lists rely on hover-state surface shifts to `#F8FAFC` to assist tracking across wide screens.