# Apple Sleek Glass & Tactile Tile Card Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Transform the 4 quick exploration cards in `index.html` and `assets/css/pages.css` into premium Apple Sleek Glass & Tactile Tiles with Edge-to-Edge Gradient Headers and Solid Apple Matte Capsule buttons, removing any generic AI boilerplate look.

**Architecture:** We utilize standard HTML/CSS structure where `.quick-card` acts as a unified 28px tactile surface. The top zone (`.quick-card-header`) stretches edge-to-edge with a soft linear gradient fading to transparent over white, housing the original 2.5D SVG vector and crisp typography. The bottom zone (`.quick-card-footer`) contains a solid matte capsule button (`.card-pill-btn`) with smooth translateY micro-lift physics.

**Tech Stack:** Vanilla HTML5, Vanilla CSS3 (Custom Design System tokens).

## Global Constraints

- Never change any Indonesian copy text or SVG vector geometry across all 4 cards (`Materi Pembelajaran`, `Bank Prompt AI`, `Evaluasi & Kuis`, `Tentang Penulis`).
- Always update cache busters to `?v=cardredesign2` for all stylesheet links in `index.html`.
- Ensure zero duplicate or conflicting legacy `.quick-card` styles remain in `assets/css/pages.css`.

---

### Task 1: Clean Legacy Styles in `pages.css` & Update Cache Buster in `index.html`

**Files:**
- Modify: `index.html:20-25`
- Modify: `assets/css/pages.css:135-200`

**Interfaces:**
- Consumes: Existing stylesheet link tags in `index.html`.
- Produces: Clean baseline in `pages.css` (removing lines 136-197 legacy `.quick-card` rules) and `?v=cardredesign2` cache busters in `index.html`.

- [ ] **Step 1: Check `index.html` stylesheet links**
Inspect lines 20-25 of `index.html` to confirm current cache buster parameters.

- [ ] **Step 2: Update cache buster parameters in `index.html`**
Update `assets/css/main.css?v=...`, `assets/css/pages.css?v=...`, and `assets/css/components.css?v=...` to `?v=cardredesign2`.

- [ ] **Step 3: Remove legacy duplicate `.quick-card` definitions in `pages.css`**
Locate legacy block around lines 136-197 in `assets/css/pages.css` (which defines `.quick-card`, `.quick-card:hover`, `.quick-card-icon`, `.quick-card h3`, `.quick-card p`, `.quick-card .card-arrow`). Remove or replace with comments indicating styles moved to the main card section around line 1600+.

- [ ] **Step 4: Verify syntax and git diff**
Run `git diff index.html` to verify only stylesheet URLs changed.

- [ ] **Step 5: Commit**
```bash
git add index.html assets/css/pages.css
git commit -m "refactor: clean legacy card styles and update cache buster to cardredesign2"
```

---

### Task 2: Implement Apple Sleek Glass & Tactile Tile Styles in `pages.css`

**Files:**
- Modify: `assets/css/pages.css:1600-1780`

**Interfaces:**
- Consumes: The HTML anatomy `.quick-card.card-theme-* > .quick-card-header + .quick-card-body + .quick-card-footer`.
- Produces: Full Apple Tactile Tile visual styling with Edge-to-Edge Gradient Header and Solid Apple Matte Capsule CTA.

- [ ] **Step 1: Locate existing 3-zone exploration card styles in `pages.css`**
Inspect the styling block around lines 1650-1780 where `.quick-card`, `.quick-card-header`, `.quick-card-body`, and `.quick-card-footer` are defined.

- [ ] **Step 2: Replace with Apple Sleek Glass & Tactile Tile CSS rules**
Replace that block with:
```css
/* ==========================================================================
   EKSPLORASI E-MODUL (APPLE SLEEK GLASS & TACTILE TILE REDESIGN)
   ========================================================================== */

.quick-access-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
  gap: 28px;
  margin-top: 24px;
}

.quick-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 310px;
  background: #FFFFFF;
  border: 1px solid rgba(0, 0, 0, 0.06);
  border-radius: 28px;
  overflow: hidden;
  text-decoration: none;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.035);
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.quick-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 16px 36px rgba(0, 0, 0, 0.08);
  border-color: rgba(0, 0, 0, 0.12);
}

/* Edge-to-Edge Gradient Header Zone */
.quick-card-header {
  width: 100%;
  padding: 28px 28px 22px 28px;
  display: flex;
  align-items: center;
  gap: 16px;
  background: transparent;
}

.quick-card-icon {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  background: transparent;
  box-shadow: none;
}

.quick-card-icon svg {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.quick-card-header h3 {
  font-size: 1.25rem;
  font-weight: 600;
  letter-spacing: -0.01em;
  line-height: 1.35;
  margin: 0;
}

/* Theme Edge-to-Edge Gradients & Heading Colors */
.card-theme-blue .quick-card-header {
  background: linear-gradient(180deg, #EFF6FF 0%, rgba(255, 255, 255, 0) 100%);
}
.card-theme-blue .quick-card-header h3 { color: #1E40AF; }

.card-theme-gold .quick-card-header {
  background: linear-gradient(180deg, #FEFCE8 0%, rgba(255, 255, 255, 0) 100%);
}
.card-theme-gold .quick-card-header h3 { color: #92400E; }

.card-theme-emerald .quick-card-header {
  background: linear-gradient(180deg, #ECFDF5 0%, rgba(255, 255, 255, 0) 100%);
}
.card-theme-emerald .quick-card-header h3 { color: #065F46; }

.card-theme-purple .quick-card-header {
  background: linear-gradient(180deg, #FAF5FF 0%, rgba(255, 255, 255, 0) 100%);
}
.card-theme-purple .quick-card-header h3 { color: #5B21B6; }

/* Pristine White Body Zone */
.quick-card-body {
  background: #FFFFFF;
  padding: 0 28px 24px 28px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.quick-card-body p {
  color: #475569;
  font-size: 0.98rem;
  line-height: 1.62;
  margin: 0;
}

/* Footer Zone & Solid Apple Matte Capsule CTA */
.quick-card-footer {
  background: #FFFFFF;
  padding: 0 28px 28px 28px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.card-sublabel {
  font-size: 0.85rem;
  font-weight: 600;
  color: #64748B;
  letter-spacing: 0.01em;
}

.card-pill-btn {
  border-radius: 9999px;
  padding: 10px 20px;
  font-size: 0.9rem;
  font-weight: 600;
  color: #FFFFFF;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  border: none;
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
}

.card-pill-btn i {
  font-size: 1rem;
  transition: transform 0.25s ease;
}

.quick-card:hover .card-pill-btn {
  transform: translateY(-1.5px);
}
.quick-card:hover .card-pill-btn i {
  transform: translateX(3px);
}

/* Theme Solid Matte Colors for Capsule Button */
.card-theme-blue .card-pill-btn {
  background: #2563EB;
  box-shadow: 0 4px 12px rgba(37, 99, 235, 0.25);
}
.card-theme-blue:hover .card-pill-btn {
  background: #1D4ED8;
  box-shadow: 0 6px 18px rgba(37, 99, 235, 0.35);
}

.card-theme-gold .card-pill-btn {
  background: #D97706;
  box-shadow: 0 4px 12px rgba(217, 119, 6, 0.25);
}
.card-theme-gold:hover .card-pill-btn {
  background: #B45309;
  box-shadow: 0 6px 18px rgba(217, 119, 6, 0.35);
}

.card-theme-emerald .card-pill-btn {
  background: #059669;
  box-shadow: 0 4px 12px rgba(5, 150, 105, 0.25);
}
.card-theme-emerald:hover .card-pill-btn {
  background: #047857;
  box-shadow: 0 6px 18px rgba(5, 150, 105, 0.35);
}

.card-theme-purple .card-pill-btn {
  background: #7C3AED;
  box-shadow: 0 4px 12px rgba(124, 58, 237, 0.25);
}
.card-theme-purple:hover .card-pill-btn {
  background: #6D28D9;
  box-shadow: 0 6px 18px rgba(124, 58, 237, 0.35);
}

@media (max-width: 768px) {
  .quick-card {
    min-height: auto;
    border-radius: 24px;
  }
  .quick-card-header {
    padding: 22px 22px 18px 22px;
  }
  .quick-card-body {
    padding: 0 22px 20px 22px;
  }
  .quick-card-footer {
    padding: 0 22px 22px 22px;
  }
}
```

- [ ] **Step 3: Verify CSS integrity**
Review `git diff assets/css/pages.css` to confirm exact rule application.

- [ ] **Step 4: Commit**
```bash
git add assets/css/pages.css
git commit -m "feat: implement Apple Sleek Glass and Tactile Tile card styles"
```
