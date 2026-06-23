# Design Spec: Notion-Inspired Redesign for E-Modul AI

## 1. Goal Description
The objective is to overhaul the existing E-Modul website's UI/UX, moving away from the generic "blue corporate/academic dashboard" aesthetic and transforming it into a clean, elegant, Notion-inspired reading experience. The focus will be on typography, generous whitespace, stark monochrome palettes, and eliminating heavy colored blocks and drop shadows.

## 2. Design Language & Constraints
- **Vibe:** Minimalist, calm, editorial, Linear/Notion-style.
- **Color Palette:**
  - Backgrounds: Pure white (`#ffffff`) or extremely faint gray (`#fafafa` / `var(--color-bg)`).
  - Text: Deep off-black for headings (`#111111`), dark gray for body (`#4b5563` or `#555555`).
  - Accents: Highly restrained. A subtle, muted blue or gray for borders.
  - Buttons: Solid black with white text, or ghost buttons with a 1px black border.
- **Typography:**
  - Sans-serif. Since the project uses Google Fonts, we will switch from the current font stack to a cleaner setup, likely prioritizing `Inter` as the primary font to mimic Notion.
  - No serifs unless explicitly needed for a specific "editorial" quote block.
- **Shapes:**
  - Borders: 1px solid, very light gray (`rgba(0,0,0,0.08)`).
  - Shadows: Almost entirely removed. If used, they must be extremely faint, diffuse, and tint-matched.
  - Radii: Subtly rounded (`4px` to `6px`), mimicking Notion's sharp but not completely harsh edges.

## 3. Structural Decisions

### 3.1. Navigation (Top Navbar)
- The global layout retains the top navigation bar per user choice.
- **Visuals:** The thick blue gradient and heavy shadow will be removed. The navbar will become pure white, slightly translucent (glassmorphism via `backdrop-filter: blur()`), with a very thin, crisp `border-bottom` (`1px solid #eaeaea`).
- **Links:** Text will be a neutral dark gray, turning pure black on hover. Active links will have a subtle black underline or bold weight rather than a blue highlight.

### 3.2. Dashboard Hero Section
- **Layout:** "Editorial Typography Focus."
- **Visuals:** The blue gradient background will be stripped out entirely, replaced with a pure white canvas. 
- **Typography:** The main headline will be massively scaled up (`text-5xl` to `text-6xl`), using tight tracking (`letter-spacing: -0.02em`) and dark black color.
- **CTA:** The "Mulai Belajar" button will become a stark black rectangle (`bg-black text-white`) with a subtle scale-down effect on click, matching Notion's primary action buttons.

### 3.3. Content & Dashboard Cards (Bento / Quick Access)
- **Cards:** White background, 1px light gray border, 0 shadow by default. On hover, a very faint shadow or a slight border darkening (e.g., to `#cccccc`) will occur.
- **Icons:** We will switch the FontAwesome icons to be monochromatic (black or dark gray) to maintain the clean aesthetic. 

### 3.4. Sidebar (Materi Pages)
- **Background:** Very subtle light gray (`#f9f9f9`) or white with a right-border, similar to Notion's left panel.
- **Active State (Scrollspy):** The active state will no longer be a thick blue background. It will be a very faint gray background (`rgba(0,0,0,0.04)`) with black, bolded text, matching how Notion highlights selected blocks.

## 4. Verification & Testing
- Audit contrast ratios for all gray-on-white text to ensure readability.
- Verify mobile responsiveness—the minimalist design must not feel "empty" on narrow screens; padding will be adjusted accordingly.
- Run a visual check on the `pages.css` and `main.css` overrides to ensure no legacy blue gradients leak through.
