---
name: "Krit Daowaset Portfolio"
description: "A reliable, modern, UX-minded portfolio for Front-End and Web App work."
colors:
  deep-ink: "#07111f"
  section-ink: "#0a1422"
  slate-panel: "#0f172a"
  slate-deep: "#020617"
  slate-line: "#ffffff1a"
  text-primary: "#ffffff"
  text-body: "#cbd5e1"
  text-muted: "#94a3b8"
  text-faint: "#64748b"
  teal-signal: "#2dd4bf"
  teal-soft: "#5eead4"
  teal-pale: "#99f6e4"
  rose-signal: "#fb7185"
  rose-soft: "#fda4af"
  cyan-route: "#67e8f9"
typography:
  display:
    fontFamily: "Leelawadee UI, Tahoma, Noto Sans Thai, Noto Sans, Arial, sans-serif"
    fontSize: "clamp(2.25rem, 5vw, 3.75rem)"
    fontWeight: 900
    lineHeight: 1.08
    letterSpacing: "0"
  headline:
    fontFamily: "Leelawadee UI, Tahoma, Noto Sans Thai, Noto Sans, Arial, sans-serif"
    fontSize: "clamp(1.875rem, 3vw, 2.25rem)"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "0"
  title:
    fontFamily: "Leelawadee UI, Tahoma, Noto Sans Thai, Noto Sans, Arial, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: "0"
  body:
    fontFamily: "Leelawadee UI, Tahoma, Noto Sans Thai, Noto Sans, Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 2
    letterSpacing: "0"
  label:
    fontFamily: "Leelawadee UI, Tahoma, Noto Sans Thai, Noto Sans, Arial, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "0.2em"
rounded:
  md: "6px"
  lg: "8px"
  full: "9999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "12px"
  lg: "16px"
  xl: "24px"
  2xl: "32px"
  3xl: "48px"
  section: "80px"
components:
  button-primary:
    backgroundColor: "{colors.teal-signal}"
    textColor: "{colors.slate-deep}"
    rounded: "{rounded.lg}"
    padding: "12px 24px"
    height: "48px"
  button-secondary:
    backgroundColor: "#ffffff0d"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.lg}"
    padding: "12px 24px"
    height: "48px"
  card-default:
    backgroundColor: "#ffffff0a"
    textColor: "{colors.text-body}"
    rounded: "{rounded.lg}"
    padding: "24px"
  chip-accent:
    backgroundColor: "#2dd4bf1a"
    textColor: "{colors.teal-pale}"
    rounded: "{rounded.lg}"
    padding: "4px 12px"
---

# Design System: Krit Daowaset Portfolio

## 1. Overview

**Creative North Star: "The Global Craft Console"**

This system should feel like a focused developer cockpit: dark, precise, responsive, and globally connected. The globe visual is not decoration; it carries the story of Thai craft meeting international web standards. The page should feel production-ready before the visitor reads a sentence.

The interface uses a deep navy base, crisp white hierarchy, translucent panels, and teal action signals. Rose and cyan appear as route lights, proof markers, and secondary energy, not as competing brand colors. The design rejects generic portfolio templates, cluttered resume pages, and loud saturated color for its own sake.

**Key Characteristics:**
- Dark technical atmosphere with calm, readable contrast.
- Teal-led action system supported by rare rose and cyan route signals.
- Compact 8px radius surfaces with subtle borders and glass-like depth.
- Large confident headlines paired with long-line Thai/English body readability.
- Motion and 3D presence that support proof of craft without hurting performance.

## 2. Colors

The palette is a deep navy interface with teal as the trust/action signal and rose/cyan as live network energy.

### Primary
- **Teal Signal**: The main action color for primary buttons, active pills, globe atmosphere, route arcs, focus rings, and small proof markers.
- **Teal Soft**: A softer supporting teal for badges, icon blocks, subtle glows, and hover borders.

### Secondary
- **Rose Signal**: A restrained contrast signal for section kickers, globe route arcs, numbered markers, and accent glow. It should stay rare.

### Tertiary
- **Cyan Route**: A cool technical light used by the globe and route visuals. It should read as network energy, not as a second CTA color.

### Neutral
- **Deep Ink**: The primary page base for hero and main content surfaces.
- **Section Ink**: The alternate dark band used to separate page rhythm without adding heavy dividers.
- **Slate Panel**: The raised panel and navbar surface, especially when paired with translucency.
- **Slate Deep**: The strongest dark for CTA text, image frames, and deep overlays.
- **Text Primary**: Main heading and high-emphasis copy.
- **Text Body**: Body copy and supporting descriptions.
- **Text Muted**: Secondary metadata, card details, and helper text.
- **Text Faint**: Small labels and quiet metadata only.

### Named Rules
**The Teal Means Action Rule.** Teal is reserved for actions, active states, proof markers, and the globe's sense of motion. Do not spend it on random decoration.

**The Rose Is A Signal Rule.** Rose should appear as a rare secondary cue. If every section has rose, the system becomes noisy.

**The Dark Surface Rule.** Keep page bases in the deep navy family. Do not drift into black-only, purple-blue gradients, beige, or generic SaaS gray.

## 3. Typography

**Display Font:** Leelawadee UI with Tahoma, Noto Sans Thai, Noto Sans, Arial, sans-serif fallback.
**Body Font:** Leelawadee UI with the same Thai-safe fallback stack.
**Label/Mono Font:** Cascadia Code / Consolas is available for code-like use only, not as the brand voice.

**Character:** The typography is direct, capable, and bilingual. It uses weight and scale rather than decorative type choices, which keeps Thai text readable and makes English technical labels feel crisp.

### Hierarchy
- **Display** (900, clamp(2.25rem, 5vw, 3.75rem), 1.08): Hero statements and major page introductions only.
- **Headline** (700, clamp(1.875rem, 3vw, 2.25rem), 1.15): Section headings and page-level supporting anchors.
- **Title** (700, 1.25rem, 1.4): Card titles, project titles, and compact panel headings.
- **Body** (400, 1rem, 2): Long Thai/English prose, project descriptions, and explanatory content. Keep long prose near 65-75ch.
- **Label** (600-700, 0.75-0.875rem, 0.16em-0.24em): Short uppercase technical labels, metadata, and badge text only.

### Named Rules
**The Thai Readability Rule.** Body copy must breathe. Keep line-height generous and never compress Thai text to chase a tighter layout.

**The Label Rarity Rule.** Uppercase tracked labels are allowed, but they must not become a repeated crutch above every heading.

## 4. Elevation

Depth is mostly tonal: translucent panels, 1px white borders at low opacity, backdrop blur, and dark overlays. Shadows exist, but they support spatial clarity rather than dramatic realism. The system should feel layered and precise, not heavy.

### Shadow Vocabulary
- **Nav Shell** (`0 25px 50px -12px rgba(0, 0, 0, 0.30)`): Fixed navbar and floating shell surfaces.
- **Panel Lift** (`0 25px 50px -12px rgba(0, 0, 0, 0.30)`): Image frames, project cards, and substantial panels.
- **CTA Glow** (`0 10px 15px -3px rgba(19, 78, 74, 0.30)`): Primary teal calls to action.
- **Globe Halo** (`0 0 80px rgba(45, 212, 191, 0.18)`): Placeholder and global craft motif only.

### Named Rules
**The Layer First Rule.** Use background opacity, border, blur, and contrast before adding heavier shadow.

**The Shadow Has A Job Rule.** Shadows appear on nav, image frames, CTAs, and globe elements. Flat repeated cards should rely on borders and tonal fill.

## 5. Components

### Buttons
- **Shape:** compact rounded rectangle (8px radius), 44-48px high.
- **Primary:** teal signal fill with slate-deep text, bold 0.875rem label, and 20-24px horizontal padding.
- **Hover / Focus:** primary brightens to soft teal; focus uses a 2px teal ring and dark offset. Secondary buttons shift border and white tint.
- **Secondary / Ghost:** transparent white fill, low-opacity white border, white text, and subtle hover fill.

### Chips
- **Style:** 8px radius, low-opacity teal or white fill, 1px border, small bold label.
- **State:** selected chips invert into teal fill with slate-deep text. Unselected chips remain translucent and quiet.

### Cards / Containers
- **Corner Style:** consistent 8px radius.
- **Background:** translucent white at 3-7% opacity or slate-deep overlays for denser content.
- **Shadow Strategy:** image frames and large project cards may use panel lift; smaller cards stay mostly flat.
- **Border:** 1px white at 10% opacity is the default divider language.
- **Internal Padding:** 16px for compact stats, 20px for info blocks, 24px for cards, 32px for larger project panels.

### Inputs / Fields
- **Style:** when added, inputs should follow the card language: slate-panel fill, white 10-15% border, 8px radius, 12px vertical padding, and body text color.
- **Focus:** teal border and a 2px teal focus ring. Never use browser-default blue.
- **Error / Disabled:** errors should use rose signal sparingly; disabled fields should lower opacity without losing legibility.

### Navigation

The nav is a fixed, centered, translucent slate shell with 8px radius, 1px white border, and backdrop blur. Active links invert to white fill with slate text. The brand lockup uses a teal square monogram and compact two-line identity. Mobile navigation expands inside the same shell and uses full-width stacked link rows.

### Globe Visual

The globe is the signature component. It should keep the deep navy globe body, teal atmosphere, cyan/teal/rose route arcs, and low-power performance defaults. On mobile or reduced motion, the placeholder halo is acceptable and should still feel intentional.

## 6. Do's and Don'ts

### Do:
- **Do** keep the primary page atmosphere in deep navy (`deep-ink` and `section-ink`) with high-contrast white and slate text.
- **Do** use teal for primary CTAs, active filters, focus rings, and proof markers.
- **Do** keep cards restrained: 8px radius, 1px low-opacity border, translucent fill, and only meaningful shadow.
- **Do** treat the globe as a brand proof object. It should reinforce front-end craft and international reach.
- **Do** preserve mobile readability with generous line-height and stable spacing.
- **Do** respect `prefers-reduced-motion` for globe loading and any future animated UI.

### Don't:
- **Don't** make the site look like a generic portfolio template.
- **Don't** make the page cluttered, noisy, or packed with unrelated decorative panels.
- **Don't** turn the portfolio into a rigid job-application page.
- **Don't** use overly loud, gimmicky, or harsh saturated color.
- **Don't** overuse rose, cyan, glow, blur, or glass effects until every surface competes for attention.
- **Don't** replace evidence with vague claims. Project cards, screenshots, and outcomes must stay central.
