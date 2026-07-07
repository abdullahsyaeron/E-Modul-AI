# Global Padding Audit & Standardization Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Implement Adaptive Responsive Padding (Option C - Apple HIG Standard) across all callout boxes (`.highlight-box`), quotes (`blockquote`), summary cards (`.profile-card`), interactive quizzes, and tables in the E-Modul AI codebase to eliminate tight text-to-border collisions.

**Architecture:** We will define responsive padding rules in `assets/css/components.css` and `assets/css/pages.css` using standard px tokens (24px-32px for desktop >= 768px, 16px-20px for mobile < 768px). We will also clean up conflicting inline padding styles across `materi-bab1.html` through `materi-bab5.html` so all containers inherit the responsive design cleanly.

**Tech Stack:** Vanilla CSS, HTML5.

## Global Constraints

- Never modify educational text or theories in any chapter HTML file.
- Maintain Apple Sleek Glass & Tactile Tile aesthetic (clean white backgrounds, smooth border-radius, proper breathing room).
- All changes must be verified without breaking existing interactive quiz engines or tab switching logic.
- Update cache busters on CSS links if needed or ensure CSS rules override cleanly.

---

### Task 1: Standarisasi Padding Kotak Sorotan (`.highlight-box`), Kutipan (`blockquote`), & Tabel di `components.css`

**Files:**
- Modify: `assets/css/components.css:920-980`

**Interfaces:**
- Consumes: Existing `.content-body` selector hierarchy.
- Produces: Responsive padding rules for `.highlight-box`, `blockquote`, `.chapter-tujuan`, and `.content-body table`.

- [ ] **Step 1: Write / verify baseline grep check for highlight-box in components.css**

Run: `grep -n "highlight-box" "d:/APPS/xampp/htdocs/E-Modul Skripsi/assets/css/components.css"`
Expected: Line ~921 showing `.content-body .highlight-box,` without padding rules.

- [ ] **Step 2: Add Desktop & Mobile Responsive Padding Rules to `components.css`**

In `assets/css/components.css`, modify the rules around line 920 to add padding and micro-spacing, and update the `@media (max-width: 768px)` block:

```css
.content-body blockquote,
.content-body .highlight-box,
.chapter-tujuan {
  border-left: 0;
  background: rgba(0, 102, 204, 0.055);
  border: 1px solid rgba(0, 102, 204, 0.12);
  border-radius: 20px;
  padding: 24px 28px;
}

/* Micro-spacing inside callouts and quotes */
.content-body .highlight-box > p:first-of-type,
.content-body blockquote > p:first-of-type {
  margin-top: 0;
}

.content-body .highlight-box > p:last-of-type,
.content-body blockquote > p:last-of-type {
  margin-bottom: 0;
}

.content-body .highlight-box ul,
.content-body .highlight-box ol,
.content-body blockquote ul,
.content-body blockquote ol {
  padding-left: 24px;
  margin-bottom: 0;
}

.content-body .highlight-box li,
.content-body blockquote li {
  margin-bottom: 8px;
}

.content-body table th,
.content-body table td {
  padding: 16px 20px;
}
```

And inside `@media (max-width: 768px)` (around line 964):
```css
  .content-body blockquote,
  .content-body .highlight-box,
  .chapter-tujuan {
    padding: 16px 20px;
    border-radius: 16px;
  }

  .content-body .highlight-box ul,
  .content-body .highlight-box ol,
  .content-body blockquote ul,
  .content-body blockquote ol {
    padding-left: 20px;
  }

  .content-body table th,
  .content-body table td {
    padding: 12px 14px;
  }
```

- [ ] **Step 3: Verify the CSS modification syntax**

Run: `grep -E "padding: 24px 28px|padding: 16px 20px" "d:/APPS/xampp/htdocs/E-Modul Skripsi/assets/css/components.css"`
Expected: Matches showing the new desktop and mobile padding rules.

- [ ] **Step 4: Commit Task 1**

```bash
git add assets/css/components.css
git commit -m "style(css): implement adaptive responsive padding for highlight-box, blockquote, and tables"
```

---

### Task 2: Standarisasi Padding Kartu Rangkuman (`.profile-card`) & Kotak Kuis di `pages.css`

**Files:**
- Modify: `assets/css/pages.css:495-600`
- Modify: `assets/css/pages.css:1410-1460`

**Interfaces:**
- Consumes: Adaptive padding tokens from Task 1.
- Produces: Consistent Apple HIG padding for summary cards and quiz components.

- [ ] **Step 1: Check existing padding on `.profile-card` and `.quiz-container`**

Run: `grep -n -E "profile-card|quiz-container|profile-body" "d:/APPS/xampp/htdocs/E-Modul Skripsi/assets/css/pages.css"`
Expected: Shows line numbers where profile-card and quiz-container are styled.

- [ ] **Step 2: Update `.profile-card` and `.quiz-*` rules in `pages.css`**

In `assets/css/pages.css`, update `.profile-header` and `.profile-body`:
```css
.profile-header {
  background: #0f172a;
  padding: 18px 28px;
  color: white;
  display: flex;
  align-items: center;
  gap: 12px;
  border-bottom: 1px solid rgba(255,255,255,0.1);
}

.profile-body {
  padding: 28px 32px;
  margin-top: 0;
  position: relative;
}
```

Update quiz containers (around line 495):
```css
.quiz-container {
  background: var(--color-surface);
  border-radius: var(--radius-xl);
  border: 1px solid var(--color-border);
  box-shadow: var(--shadow-md);
  overflow: hidden;
  margin-top: var(--space-8);
  margin-bottom: var(--space-8);
  padding: 28px 32px;
}

.quiz-question {
  padding: 20px 24px;
  background: var(--color-bg-alt);
  border-radius: var(--radius-lg);
  margin-bottom: var(--space-6);
  border: 1px solid var(--color-border-soft);
}

.quiz-option {
  padding: 16px 20px;
  border-radius: var(--radius-md);
  border: 1.5px solid var(--color-border);
  background: white;
  margin-bottom: var(--space-3);
  cursor: pointer;
  transition: var(--transition-base);
  display: flex;
  align-items: center;
  gap: var(--space-4);
}

.quiz-pembahasan {
  margin-top: var(--space-6);
  padding: 20px 24px;
  background: rgba(0, 122, 255, 0.05);
  border: 1px solid rgba(0, 122, 255, 0.2);
  border-radius: var(--radius-lg);
  display: none;
}
```

Add mobile overrides in `@media (max-width: 768px)` in `pages.css`:
```css
@media (max-width: 768px) {
  .profile-header { padding: 14px 20px; }
  .profile-body { padding: 20px 24px; }
  .quiz-container { padding: 20px 20px; }
  .quiz-question, .quiz-pembahasan { padding: 16px 18px; }
  .quiz-option { padding: 14px 16px; }
}
```

- [ ] **Step 3: Verify CSS modification in pages.css**

Run: `grep -E "padding: 28px 32px|padding: 18px 28px|padding: 16px 20px" "d:/APPS/xampp/htdocs/E-Modul Skripsi/assets/css/pages.css"`
Expected: Matches showing the updated padding rules.

- [ ] **Step 4: Commit Task 2**

```bash
git add assets/css/pages.css
git commit -m "style(css): standardize Apple HIG responsive padding for profile-card and quiz components"
```

---

### Task 3: Pembersihan Inline Padding pada Kontainer di Halaman Materi (`materi-bab1.html` - `materi-bab5.html`)

**Files:**
- Modify: `materi-bab1.html`
- Modify: `materi-bab2.html`
- Modify: `materi-bab3.html`
- Modify: `materi-bab4.html`
- Modify: `materi-bab5.html`

**Interfaces:**
- Consumes: Responsive classes from Task 1 and Task 2.
- Produces: Clean HTML markup without conflicting inline padding overrides.

- [ ] **Step 1: Check inline padding on highlight-box and profile-card across chapter files**

Run: `grep -n "style=" "d:/APPS/xampp/htdocs/E-Modul Skripsi/materi-bab"*.html | grep -E "highlight-box|profile-card"`
Expected: Shows lines where inline styles might contain hardcoded padding or tight formatting.

- [ ] **Step 2: Clean up inline style overrides in `materi-bab3.html` and `materi-bab4.html`**

In `materi-bab3.html` and `materi-bab4.html`:
- Ensure `<div class="highlight-box ...">` does not have conflicting inline `padding: ...` that would override our new responsive CSS rules.
- For Rangkuman and Refleksi cards using `<div class="profile-card" ...>`, ensure the inner body div uses class `profile-body` or has padding removed so it inherits `.profile-body` or standard card padding.

- [ ] **Step 3: Clean up inline style overrides in `materi-bab1.html`, `materi-bab2.html`, and `materi-bab5.html`**

In `materi-bab1.html`, `materi-bab2.html`, and `materi-bab5.html`:
- Check and clean up any inline padding on `.highlight-box` and `.profile-card`.

- [ ] **Step 4: Verify all chapter HTML files remain intact and clean**

Run: `grep -i -E "highlight-box|profile-card" "d:/APPS/xampp/htdocs/E-Modul Skripsi/materi-bab"*.html`
Expected: Shows all callout and card containers cleanly referencing CSS classes.

- [ ] **Step 5: Commit Task 3**

```bash
git add materi-bab1.html materi-bab2.html materi-bab3.html materi-bab4.html materi-bab5.html
git commit -m "refactor(html): clean up inline padding overrides across chapter files for responsive CSS inheritance"
```
