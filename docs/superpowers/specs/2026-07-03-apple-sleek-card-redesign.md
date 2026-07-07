# Design Specification: Apple Sleek Glass & Tactile Tile Redesign

**Date:** 2026-07-03  
**Target Section:** Eksplorasi E-Modul (4 Quick Exploration Cards in `index.html` & `assets/css/pages.css`)

---

## 1. Executive Summary & Vibe
The previous 3-zone exploration card layout utilized pastel "pill box" headers that felt disconnected and resembled standard AI-generated boilerplate templates ("AI slop"). This redesign elevates the 4 exploration cards (`Materi Pembelajaran`, `Bank Prompt AI`, `Evaluasi & Kuis`, `Tentang Penulis`) into **Apple Sleek Glass & Tactile Tiles**. 

Inspired by modern Apple iOS/macOS hardware and software surfaces, the cards become unified tactile tiles featuring an **Edge-to-Edge Gradient Header** that smoothly dissolves into a pristine white description area, capped with a **Solid Apple Matte Capsule Button**.

---

## 2. Key Architectural Decisions

### 2.1 Elimination of Inner Boxed Containers
- Removed `.quick-card-header` inner pill box styling (`background: #...`, `padding`, `border-radius: 18px` around the icon and heading).
- The card itself (`.quick-card`) acts as a single cohesive tile (`border-radius: 28px`, `overflow: hidden`, `border: 1px solid rgba(0, 0, 0, 0.06)`).

### 2.2 Edge-to-Edge Gradient Header Zone
- The top area of the card (`.quick-card-header`) spans edge-to-edge (`width: 100%`, `padding: 28px 28px 20px 28px`).
- It applies a soft radial/linear gradient blend based on the card theme, dissolving downward into pure white (`#FFFFFF`):
  - **Theme Blue (Materi):** `linear-gradient(180deg, #EFF6FF 0%, rgba(239, 246, 255, 0) 100%)`
  - **Theme Gold (Prompt):** `linear-gradient(180deg, #FEFCE8 0%, rgba(254, 252, 232, 0) 100%)`
  - **Theme Emerald (Evaluasi):** `linear-gradient(180deg, #ECFDF5 0%, rgba(236, 253, 245, 0) 100%)`
  - **Theme Purple (Tentang):** `linear-gradient(180deg, #FAF5FF 0%, rgba(250, 245, 255, 0) 100%)`
- Contains the original 2.5D SVG vector alongside a crisp, semibold heading (`font-size: 1.25rem`, `font-weight: 600`, `letter-spacing: -0.01em`).

### 2.3 Pristine White Body & Typography
- The description body (`.quick-card-body`) rests on pure white (`background: #FFFFFF`, `padding: 0 28px 24px 28px`).
- Body text styled with high-contrast neutral slate (`color: #475569`, `font-size: 0.98rem`, `line-height: 1.6`).

### 2.4 Solid Apple Matte Capsule CTA (`.card-pill-btn`)
- Located in `.quick-card-footer` (`padding: 0 28px 28px 28px`, `background: #FFFFFF`, removing any harsh dividing lines or borders).
- The capsule button uses a solid matte finish matching the card theme:
  - **Blue:** `background: #2563EB; color: #FFFFFF;`
  - **Gold:** `background: #D97706; color: #FFFFFF;`
  - **Emerald:** `background: #059669; color: #FFFFFF;`
  - **Purple:** `background: #7C3AED; color: #FFFFFF;`
- Shape & Interaction: `border-radius: 9999px; padding: 10px 20px; font-weight: 600; font-size: 0.9rem; transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);`.
- On hover: The capsule lifts slightly (`transform: translateY(-1.5px)`) and emits a soft ambient shadow matching its theme color (`box-shadow: 0 6px 16px rgba(...)`).

---

## 3. Strict Constraints & Verbatim Preservation
1. **Verbatim Text Copy:** All headings, descriptions, sublabels, and button texts across all 4 cards must remain 100% identical to existing copy.
2. **2.5D SVG Vectors:** All inline `<svg>` paths and vector geometry must be preserved verbatim.
3. **Cache Buster:** CSS references in `index.html` updated to cache buster parameter `?v=cardredesign2`.

---

## 4. Responsive Behavior
- **Desktop (`> 1024px`):** 4-column or 2x2 grid (`grid-template-columns: repeat(auto-fit, minmax(260px, 1fr))`), minimum card height `320px`.
- **Mobile (`< 768px`):** Single column stack, padding adjusted to `22px`, touch targets maintained at `min-height: 44px`.
