# Typography Standardization Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Standardize typography across all E-Modul pages to Apple HIG & LabSpace style by converting 40+ hardcoded px/rem/em values to clean system variables and stabilizing body text to a readable 16px (1rem).

**Architecture:** Restructure CSS custom properties in `main.css` to use fixed rem values for body text (`--text-xs` through `--text-lg`) and smooth fluid `clamp()` scaling for headings (`--text-xl` through `--text-4xl`). Sweep and replace all hardcoded font sizes in `components.css` and `pages.css` with these standardized variables.

**Tech Stack:** Vanilla CSS3 (Custom Properties / Design Tokens), HTML5.

## Global Constraints

- Never use hardcoded pixel (`px`), `em`, or random `rem` values for `font-size` in component or page stylesheets; always reference `var(--text-*)`.
- Keep body text (`--text-base`) strictly at `1rem` (16px) across all screen sizes to prevent jumpy layout shifts during resizing and ensure reading comfort.
- Maintain existing visual hierarchy without altering non-typography styles (colors, spacing, animations).

---

### Task 1: Standardize Typography Tokens in `main.css`

**Files:**
- Modify: `d:/APPS/xampp/htdocs/E-Modul Skripsi/assets/css/main.css:60-71`

**Interfaces:**
- Consumes: Existing `:root` design system structure.
- Produces: Standardized `--text-*` variables consumed by `components.css` and `pages.css`.

- [ ] **Step 1: Check existing typography tokens in `main.css`**

Run verification check to see current clamp definitions:
```bash
grep -n "--text-" "d:/APPS/xampp/htdocs/E-Modul Skripsi/assets/css/main.css"
```
Expected: Shows `--text-xs` through `--text-6xl` using aggressive `clamp()` formulas on small text.

- [ ] **Step 2: Replace typography tokens with Apple HIG & LabSpace scale**

Use `replace_file_content` to update lines 60-71 in `main.css`:
```css
  /* Font sizes — Apple HIG & LabSpace Scale (Fixed Body + Fluid Headings) */
  --text-xs: 0.75rem;          /* 12px - Badges, captions, timestamps */
  --text-sm: 0.875rem;         /* 14px - Secondary text, cards, nav links */
  --text-base: 1rem;           /* 16px - Standard Body Text, paragraphs */
  --text-lg: 1.125rem;         /* 18px - Lead paragraphs, card titles */
  --text-xl: clamp(1.25rem, 2vw, 1.5rem);       /* 20-24px - Small section headers */
  --text-2xl: clamp(1.5rem, 2.5vw, 1.875rem);   /* 24-30px - Chapter headers */
  --text-3xl: clamp(1.875rem, 3.5vw, 2.25rem);  /* 30-36px - Major headings */
  --text-4xl: clamp(2.25rem, 5vw, 3rem);        /* 36-48px - Hero / Banner titles */
  --text-5xl: clamp(2.75rem, 7vw, 3.75rem);     /* 44-60px - Large display */
  --text-6xl: clamp(3.25rem, 9vw, 4.5rem);      /* 52-72px - Extra large display */
```

- [ ] **Step 3: Verify token replacement**

Run grep check:
```bash
grep -n "--text-base" "d:/APPS/xampp/htdocs/E-Modul Skripsi/assets/css/main.css"
```
Expected: `--text-base: 1rem;`

- [ ] **Step 4: Commit changes**

```bash
git add assets/css/main.css
git commit -m "style(tokens): standardize typography scale to Apple HIG fixed body & fluid headings"
```

---

### Task 2: Clean Up Hardcoded Typography in `components.css`

**Files:**
- Modify: `d:/APPS/xampp/htdocs/E-Modul Skripsi/assets/css/components.css`

**Interfaces:**
- Consumes: `--text-*` tokens from `main.css`.
- Produces: Standardized component typography for buttons, cards, navbar, timeline, and badges.

- [ ] **Step 1: Check hardcoded font sizes in `components.css`**

Run grep check:
```bash
grep -n "font-size:" "d:/APPS/xampp/htdocs/E-Modul Skripsi/assets/css/components.css"
```
Expected: Shows hardcoded values like `15px`, `13px`, `11px`, `0.875em`, `0.85rem`, `0.9rem`, `16px`, `14px`.

- [ ] **Step 2: Replace hardcoded font sizes in buttons, navbar, and badges**

Update `.btn`, `.btn-sm`, `.navbar`, and badge classes to use `var(--text-*)`:
- `.btn { font-size: var(--text-base); }` (was 0.875em / 15px)
- `.btn-sm { font-size: var(--text-sm); }`
- `.navbar-link { font-size: var(--text-sm); }` (was 15px / 14px)
- `.badge, .tag { font-size: var(--text-xs); }` (was 11px / 13px)
- `.tab-btn { font-size: var(--text-base); }` (was 1rem)
- `.tool-icon { font-size: var(--text-xl); }` (was 1.25rem)
- `.tool-info h4 { font-size: var(--text-xs); }` (was 0.85rem)
- `.timeline-number { font-size: var(--text-sm); }` (was 0.9rem)

- [ ] **Step 3: Verify no hardcoded px/em/rem remain in `components.css`**

Run grep check:
```bash
grep -E "font-size:[[:space:]]*[0-9]+(px|rem|em)" "d:/APPS/xampp/htdocs/E-Modul Skripsi/assets/css/components.css"
```
Expected: No output (or only legitimate clamp/calc if any).

- [ ] **Step 4: Commit changes**

```bash
git add assets/css/components.css
git commit -m "style(components): replace hardcoded font sizes with design system tokens"
```

---

### Task 3: Clean Up Hardcoded Typography in `pages.css` & Update Cache Buster

**Files:**
- Modify: `d:/APPS/xampp/htdocs/E-Modul Skripsi/assets/css/pages.css`
- Modify: `d:/APPS/xampp/htdocs/E-Modul Skripsi/index.html:21-25`

**Interfaces:**
- Consumes: `--text-*` tokens from `main.css`.
- Produces: Standardized typography across Hero, Materi, Prompt Library, Evaluasi, and Tentang pages.

- [ ] **Step 1: Check hardcoded font sizes in `pages.css`**

Run grep check:
```bash
grep -n "font-size:" "d:/APPS/xampp/htdocs/E-Modul Skripsi/assets/css/pages.css"
```
Expected: Shows hardcoded values like `1.5rem`, `0.7rem`, `1.125rem`, `1rem`, `0.8rem`, `0.85rem`, `16px`, `18px`.

- [ ] **Step 2: Replace hardcoded font sizes in page-specific sections**

Update `pages.css` rules:
- `.hero-desc { font-size: var(--text-base); }` (was 1rem / clamp)
- `.materi-content p, .materi-main p { font-size: var(--text-base); }` (was 16px / 1rem)
- `.prompt-card p, .eval-card p { font-size: var(--text-sm); }` (was 0.85rem / 0.8rem / 14px)
- `.tentang-section p { font-size: var(--text-base); }`
- `.meta-label, .footnote { font-size: var(--text-xs); }` (was 0.7rem / 11px)

- [ ] **Step 3: Update cache buster in `index.html`**

Use `replace_file_content` to update `index.html`:
```html
    <link rel="stylesheet" href="assets/css/pages.css?v=herobento14">
```

- [ ] **Step 4: Verify no hardcoded px remain in `pages.css`**

Run grep check:
```bash
grep -E "font-size:[[:space:]]*[0-9]+px" "d:/APPS/xampp/htdocs/E-Modul Skripsi/assets/css/pages.css"
```
Expected: No output.

- [ ] **Step 5: Commit changes**

```bash
git add assets/css/pages.css index.html
git commit -m "style(pages): standardize page typography tokens and update cache buster to herobento14"
```
