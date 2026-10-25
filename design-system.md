# Appalachian Craft Tech (assets/08431ab788214f569819c6a7b65ec02f)

## Brand & Style

This design system expresses a synthesis of Appalachian craft heritage, Blue Ridge topography, and reliable, high-end technical execution. It rejects cold, clinical, hyper-abstract AI tropes (such as generic neon gradients, deep space purples, and glossy synthetic glass) in favor of tactile warmth, rooted authority, and workshop honesty. 

The aesthetic is editorial, humanistic, and architectural:
- **Atmosphere:** Sunlit timber workshops, field notebooks, weathered mountain granite, and crisp river pine.
- **Audience:** Regional business owners, operators, and visionary founders seeking a partner who speaks plain human language backed by deep technical mastery.
- **Emotional Resonance:** Quiet confidence, regional stewardship, bespoke craftsmanship, and clarity over complexity.
- **Design Philosophy:** Organic structural rhythm, generous negative space, deliberate typographic contrast, and restrained, high-intent accents.

## Layout & Spacing

The layout is built around a flexible 12-column structural grid system bounded by maximum reading measures to preserve editorial balance.

- **Canvas Scale:** Outer wrappers limit container widths to `1280px` for dense dashboard layouts and `1120px` for narrative marketing and case study pages.
- **Grid Adaptability:**
  - **Desktop (1024px+):** 12 columns with `2rem` gutters and `4rem` outer margin. Multi-column cards span 4 or 6 units.
  - **Tablet (768px – 1023px):** 8 columns with `1.5rem` gutters and `2.5rem` outer margin.
  - **Mobile (< 768px):** 4 columns with `1rem` gutters and `1.25rem` outer margin. Stacks vertically with explicit micro-rhythm rules.
- **Section Spacing:** Major content blocks must preserve breathing room (`space-2xl` to `6rem`) to reflect the uncrowded, expansive geography of the region.

## Elevation & Depth

Visual hierarchy uses physical material stacking rather than steep digital drops:

- **Surface Tonal Stacking:** Surfaces establish depth by transitioning from the ambient `#F7F4EE` canvas onto crisp `#FFFFFF` cards, framed with whisper-thin structural rules.
- **Border Rules:** All elevated containers utilize a delicate 1px boundary: `rgba(20, 46, 36, 0.08)` under ambient light, intensifying to `rgba(20, 46, 36, 0.16)` on card hover states.
- **Warm Diffused Shadows:** 
  - **Base Tile:** `0 1px 3px rgba(20, 46, 36, 0.04), 0 6px 16px -4px rgba(20, 46, 36, 0.06)`
  - **Floating Panel / Modal:** `0 4px 6px -1px rgba(20, 46, 36, 0.04), 0 20px 32px -8px rgba(20, 46, 36, 0.09)`
- **Atmospheric Layering:** Heavy drop shadows are strictly prohibited. Depth must evoke heavy cotton rag paper laid flat upon an oiled oak worktable.

## Components

### Buttons
- **Primary Button (Terracotta):** Solid `#D96B27` background, pure white text, `font-family: Plus Jakarta Sans`, weight 600, rounded to `1rem`. Subtle inset shadow `inset 0 1px 0 rgba(255,255,255,0.2)`. On hover, smooth transition to `#C05819` with a gentle 1px y-axis rise.
- **Secondary Button (Appalachian Pine):** Solid `#142E24` background, `#F7F4EE` text. For high-authority secondary intents.
- **Tertiary / Outline Button:** Background transparent, 1px border in `rgba(20, 46, 36, 0.2)`, text in `#1E2824`. On hover, fills with `#E8EFEA`.

### Cards & Lab Modules
- **Case Study & Implementation Tile:** Pure `#FFFFFF` surface, 1px border `rgba(20, 46, 36, 0.08)`, 24px corner radius, internal padding of `2rem`.
- **R&D Lab Experiment Card:** Surface in `#F0F4F1`, inset top badge in `Space Mono`, housing prototype status (`PROTOTYPE // V0.4`), featuring subtle hairline separating rules.

### Input Fields & Controls
- **Text Inputs:** Soft white `#FFFFFF` fill, 1px border `rgba(20, 46, 36, 0.14)`, rounded to `0.5rem`, padding `0.75rem 1rem`. Focus state triggers a clean 1.5px border in `#142E24` with zero garish glow.
- **Checkboxes & Radios:** Handcrafted 20px boxes, corner radius 4px (or full circle for radios). Unchecked: background `#FFFFFF`, border `rgba(20, 46, 36, 0.25)`. Checked: `#142E24` fill with `#F7F4EE` inner glyph.

### Badges & Chips
- **Laboratory Status Chip:** Monospaced (`Space Mono`), uppercase, 11px, tracking `0.06em`. Padded `0.25rem 0.625rem`. 
  - *Active Deployment:* Background `#E8EFEA`, text `#142E24`, dot indicator `#3B7A57`.
  - *Experimenting:* Background `rgba(223, 155, 52, 0.12)`, text `#945F0F`, dot indicator `#DF9B34`.

### Lists & Narrative Data Rows
- Minimalist hairline list structures with a trailing arrow or mono index (`01`, `02`, `03`). Separated by `1px solid rgba(20, 46, 36, 0.08)`. Hovering a row yields an interactive slide in terracotta tint (`#D96B27`).