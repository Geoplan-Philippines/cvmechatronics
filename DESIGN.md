<!-- SEED: re-run $impeccable document once there's code to capture the actual tokens and components. -->

---
name: CV Mechatronics
description: Precision-installed mechatronic systems for modern Philippine properties.
colors:
  amber: "#ED9D18"
  navy: "#0E2646"
  paper: "#FCFBFC"
  navy-muted: "#5A6780"
  surface: "#F4F5F7"
  amber-deep: "#C8861A"
typography:
  display:
    fontFamily: "'Barlow Condensed', sans-serif"
    fontSize: "clamp(2.75rem, 5.5vw, 5rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "'Barlow Condensed', sans-serif"
    fontSize: "clamp(1.875rem, 3.5vw, 3rem)"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.015em"
  title:
    fontFamily: "'Barlow', sans-serif"
    fontSize: "clamp(1.125rem, 1.8vw, 1.5rem)"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "-0.01em"
  body:
    fontFamily: "'Barlow', sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: "0"
  label:
    fontFamily: "'Barlow', sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.04em"
rounded:
  xs: "4px"
  sm: "6px"
  md: "8px"
  lg: "12px"
  pill: "9999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "48px"
  section: "clamp(5rem, 9vw, 9rem)"
components:
  button-primary:
    backgroundColor: "{colors.amber}"
    textColor: "{colors.paper}"
    rounded: "{rounded.sm}"
    padding: "14px 32px"
  button-primary-hover:
    backgroundColor: "{colors.amber-deep}"
    textColor: "{colors.paper}"
    rounded: "{rounded.sm}"
    padding: "14px 32px"
  button-navy:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.paper}"
    rounded: "{rounded.sm}"
    padding: "14px 32px"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.navy}"
    rounded: "{rounded.sm}"
    padding: "13px 31px"
  button-ghost-hover:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.paper}"
    rounded: "{rounded.sm}"
    padding: "13px 31px"
---

# Design System: CV Mechatronics

## 1. Overview

**Creative North Star: "The Engineered Interior"**

CV Mechatronics installs systems that disappear into the fabric of a property — a gate that opens before you reach it, glass that clears at the touch of a button, cameras that watch without announcing themselves. The design system reflects this: authority without ostentation. Precision without coldness. The palette is amber and deep navy on a near-white field — the warmth of brushed hardware against a clean architectural canvas. Think Siemens's product catalog cross-referenced with a B&O showroom: functional inevitability, nothing gratuitous.

Typography is industrial and condensed at display scale — the narrow width reads like text stencilled on a steel panel, confident and non-decorative. Body copy opens to regular Barlow width for easy reading. Motion is choreographed at page load and scroll-triggered at the section level, with each reveal paced to the weight of what it reveals — not a uniform fade, but deliberate timing that respects the architecture of the page.

The navy `#0E2646` anchors dark sections (nav, hero overlays, footer, feature callouts) while the near-white `#FCFBFC` carries the light sections. Amber `#ED9D18` is the signal color: CTAs, active states, key icons, and highlights. It appears rarely and counts every time.

**Key Characteristics:**
- Deep navy + amber on near-white — unexpected for the category, immediately distinctive
- Condensed grotesque display + regular grotesque body — industrial precision, not editorial softness
- Semi-sharp corners (8px cards, 6px buttons, 4px tags) — considered, not playful
- Choreographed scroll entrances — motion serves the architecture of the page
- Flat-by-default elevation — navy surfaces and amber accents create depth without shadows
- Real photography required — actual gate, glass, and installation imagery

## 2. Colors: The Copper Blueprint Palette

Two strong anchors and a clean field. The amber reads as precision hardware; the navy reads as depth and authority; the near-white keeps everything open and legible.

### Primary
- **Amber / Copper Signal** (`#ED9D18` / `oklch(0.72 0.168 58)`): The brand's voice in color. Used exclusively for primary CTAs, active navigation states, key icons in dark sections, hover accents, and any single element that must command attention on a page. Never spread thin — its rarity is the point.

### Secondary
- **Deep Navy** (`#0E2646` / `oklch(0.21 0.060 255)`): The structural color. Dark section backgrounds, the site navigation, footer, heavy feature blocks, and body ink. It is the canvas that makes the amber read as gold rather than yellow.

### Tertiary
- **Amber Deep** (`#C8861A` / `oklch(0.64 0.155 56)`): The pressed state of amber. Used only for button `:hover` and `:active` on primary CTAs. Never as a standalone color.

### Neutral
- **Architectural Paper** (`#FCFBFC` / `oklch(0.990 0.002 316)`): The page background. Intentionally near-pure-white; the near-zero chroma keeps it from reading as cream or warm-neutral. Not a warm background — a clean one.
- **Surface Lift** (`#F4F5F7` / `oklch(0.965 0.006 258)`): Cards, form fields, and light-mode section separators. Provides subtle structure against the paper bg without a visible border.
- **Navy Muted** (`#5A6780` / `oklch(0.48 0.038 252)`): Secondary and supporting text in light sections. Minimum 4.5:1 contrast on the paper bg. Carries the navy hue as a tint — not gray, but a quieter version of the brand blue.

### Named Rules
**The Amber Reserve Rule.** Amber is used on ≤15% of any given light-mode screen. It is the signal, not the noise. If a second element on the same screen needs emphasis, use navy — not another amber element.

**The Text-on-Fills Rule.** Primary buttons (amber fill) use near-white text `#FCFBFC`. Navy fills use near-white text. Never dark text on amber or navy fills — the Helmholtz-Kohlrausch effect makes saturated fills appear brighter than their luminance suggests; dark text muddy-reads on both.

## 3. Typography

**Display Font:** Barlow Condensed (Google Fonts), with `system-ui, sans-serif` fallback
**Body / UI Font:** Barlow (Google Fonts), with `system-ui, sans-serif` fallback

**Character:** The narrow condensed width at display sizes reads like text stencilled on a precision-cut panel — industrial authority, not editorial decorativeness. The transition to regular Barlow at body scale is the contrast axis: the heading announces, the body explains. One family, two cuts, four weights. No font personality drift between levels.

### Hierarchy

- **Display** (Barlow Condensed 700, `clamp(2.75rem, 5.5vw, 5rem)`, line-height 1.1, tracking `-0.02em`): Hero headings only. Rendered in uppercase. `text-wrap: balance`. Never exceeds 5rem to avoid shouting.
- **Headline** (Barlow Condensed 700, `clamp(1.875rem, 3.5vw, 3rem)`, line-height 1.15, tracking `-0.015em`): Section headings (H2). Uppercase optional; title-case preferred for longer headings.
- **Title** (Barlow 600, `clamp(1.125rem, 1.8vw, 1.5rem)`, line-height 1.3, tracking `-0.01em`): Card headings, subsection labels (H3). Regular width — the contrast to condensed display is intentional.
- **Body** (Barlow 400, `1rem`, line-height 1.65, tracking `0`): All prose. Maximum 65ch line length. On dark (navy) sections add 0.05 to line-height (1.70).
- **Label** (Barlow 500, `0.8125rem`, line-height 1.4, tracking `0.04em`): Navigation items, button text, tags, metadata. Sentence case for nav/UI; uppercase only for short CTA labels (≤3 words).

### Named Rules
**The Condensed-for-Impact Rule.** Condensed Barlow is reserved for H1 and H2 only. Using it for body copy, labels, or card titles flattens the typographic hierarchy. The impact of condensed depends on scarcity.

**The Letter-Spacing Floor Rule.** Display letter-spacing never goes below `-0.02em`. At `clamp` maximums on wide viewports, `-0.03em` is the floor. Below that, characters touch and the type reads cramped.

## 4. Elevation

This system is **flat-by-default**. Depth is conveyed through tonal layering (paper → surface → navy) and color hierarchy (amber as the raised signal), not through shadows. Floating elements (dropdowns, tooltips, modals) use a single measured shadow; at-rest surfaces do not.

The navy section backgrounds create implicit depth by darkening the field — a navy `#0E2646` section below a light section reads as a lower tier without any shadow needed. Cards on the light bg use the `surface` token (`#F4F5F7`) as their fill; the 1-step lightness difference from paper is enough separation.

### Shadow Vocabulary
- **Hover lift** (`0 2px 8px rgba(14, 38, 70, 0.10)`): Applied only on hover to interactive cards and feature blocks. Not at rest. Never paired with a full border.
- **Floating** (`0 4px 20px rgba(14, 38, 70, 0.14)`): Dropdowns, tooltips, floating nav on scroll. Structural, not decorative.

### Named Rules
**The No-Rest-Shadow Rule.** No surface carries a shadow at its resting state. Shadows are a response to interaction (hover, focus, elevation) — not decoration. A card at rest: flat. A card on hover: 8px blur max.

**The One-Treatment Rule.** A border and a shadow are not combined on the same element. Pick one or neither. A `1px solid` border at rest becomes a shadow on hover; a shadow at rest does not also have a border.

## 5. Components

### Buttons

Buttons carry the system's decisiveness. Semi-sharp (6px radius). No pills — this brand doesn't round its edges.

- **Shape:** 6px radius (`{rounded.sm}`). Consistent across all variants.
- **Primary (amber):** `#ED9D18` background, `#FCFBFC` text. `font-weight: 500`, `letter-spacing: 0.04em`, `text-transform: uppercase`. Padding `14px 32px`. Hover: `#C8861A` bg, `translateY(-1px)`, `0 2px 8px rgba(14,38,70,0.12)`.
- **Navy:** `#0E2646` background, `#FCFBFC` text. Same padding and type treatment. Used alongside amber primary — never two amber buttons on the same screen.
- **Ghost:** Transparent bg, `1px solid #0E2646`, navy text. Hover: fills navy bg, text becomes paper. Transition `150ms ease-out`.
- **Focus:** `2px solid #ED9D18` focus ring, `2px offset`. Keyboard-accessible on all variants.

### Cards / Containers

- **Corner Style:** 8px radius (`{rounded.md}`). Semi-sharp — not rectangular, not rounded.
- **Light sections:** `#F4F5F7` surface fill. No border at rest. Hover lift shadow applied on interactive cards.
- **Dark sections:** `rgba(255,255,255,0.06)` fill over navy bg — a barely-visible lift. `1px solid rgba(255,255,255,0.08)` border.
- **Padding:** `24px` default (`{spacing.lg}`). Compact variant: `16px` (`{spacing.md}`).
- **Nested cards:** Never. A card inside a card is always wrong.

### Inputs / Fields

- **Style:** `#F4F5F7` background, `1px solid rgba(14, 38, 70, 0.15)` border at rest, 6px radius (`{rounded.sm}`). Not plain white — the surface fill reads as intentional.
- **Focus:** Border becomes `2px solid #ED9D18` (amber). No glow, no blur — precise, like the brand.
- **Error:** Border `2px solid #C0392B`. No bg color change.
- **Disabled:** Opacity `0.45`. No style changes beyond that.
- **Label:** `font-weight: 500`, `0.8125rem`, navy ink. Positioned above the field (not floating).

### Navigation

- **Default:** Fixed top, full-width, `#FCFBFC` bg with `1px solid rgba(14, 38, 70, 0.08)` bottom border. Logo left, links right, amber CTA button far-right.
- **On dark hero:** Transparent over navy, paper-colored links and logo.
- **Scroll state:** Adds `box-shadow: 0 4px 20px rgba(14, 38, 70, 0.10)` once scrolled past 48px. Background solidifies if previously transparent.
- **Active state:** Amber `#ED9D18` 2px underline under the active nav item (not a bg color).
- **Mobile:** Hamburger icon (3-line, 20px). Menu slides in from the right as a full-height panel with navy `#0E2646` background, paper text.
- **Typography:** Barlow 500, `0.9rem`, `letter-spacing: 0.02em`.

### Tags / Badges

- **Shape:** 4px radius (`{rounded.xs}`). Not pills.
- **Amber variant:** `rgba(237, 157, 24, 0.12)` bg, `#8B5E00` text (navy-shifted amber for contrast on light bg). Used for status indicators and highlights.
- **Navy variant:** `rgba(14, 38, 70, 0.08)` bg, `#0E2646` text. For neutral labels and categories.
- **Typography:** Barlow 500, `0.75rem`, `letter-spacing: 0.03em`, sentence case.

### Signature: Section Divider Pattern

This system alternates between light (`#FCFBFC`) and dark (`#0E2646`) section backgrounds for visual rhythm. The transition between them is never gradual (no fade, no gradient bleed). Hard edges. The contrast between sections IS the layout — no border, no separator rule needed.

## 6. Do's and Don'ts

### Do:
- **Do** use amber (`#ED9D18`) sparingly — one primary CTA, one key accent per screen. Its rarity is its power.
- **Do** alternate light (paper) and dark (navy) section backgrounds for rhythm. The hard-edge contrast is the layout.
- **Do** use Barlow Condensed in uppercase at display sizes. At H3 / title scale, switch to regular Barlow width.
- **Do** keep border-radius at 8px for cards, 6px for buttons, 4px for tags. Semi-sharp throughout.
- **Do** use real photography of actual gate, smart glass, and lighting installations — not abstract tech visuals or colored placeholder divs.
- **Do** apply `text-wrap: balance` on H1–H3 and test at every breakpoint. A condensed font at large clamp sizes will overflow narrow containers.
- **Do** keep body text (`#0E2646`) at ≥4.5:1 on light sections, near-white (`#FCFBFC`) at ≥4.5:1 on navy sections.

### Don't:
- **Don't** use the dark glassmorphism + cyan-glow aesthetic from the reference landing page (cvmechatronics-landing-page/). It reads as generic SaaS, not a skilled local installer.
- **Don't** use warm beige/cream as the page background. `#FCFBFC` is near-white, not warm neutral — keep it there.
- **Don't** place two amber elements in the same view competing for attention. Amber is one voice.
- **Don't** add `box-shadow` to cards at resting state. Shadows are only a hover/interaction response.
- **Don't** pair a `1px solid` border with a large drop shadow (`blur ≥ 16px`) on the same element. Pick one.
- **Don't** use `border-radius` above 12px on any card or section container. 24px+ reads like a toy.
- **Don't** put gradient text (`background-clip: text`). Amber is a solid color; use it as solid ink.
- **Don't** add a small uppercase eyebrow label above every section heading. If a kicker appears, it's a brand system decision — not default scaffolding.
- **Don't** use numbered markers (`01 / 02 / 03`) above sections unless the section IS an ordered sequence (e.g., the installation process steps, where the order carries information).
- **Don't** use Barlow Condensed for body copy, labels, or UI text. It belongs at display scale only.
