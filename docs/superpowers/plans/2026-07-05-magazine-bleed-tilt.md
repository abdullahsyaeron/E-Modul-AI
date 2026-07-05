# Magazine Bleed & Tilt 3D Icon Layout Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Mengubah tata letak ikon 3D pada kartu Eksplorasi agar berukuran besar (`145px`), mepet/terpotong batas border kanan-bawah (*magazine bleed*), memiliki rotasi dinamis unik per kartu, dan terlindung dari tabrakan teks.

**Architecture:** Memanfaatkan `overflow: hidden` pada `.quick-card` untuk memotong bagian luar ikon 3D yang diposisikan pada koordinat negatif (`right: -16px; bottom: -12px;`), sekaligus membatasi lebar teks paragraf (`max-width: 60%`, `padding-right: 110px`) agar zona kiri dan kanan kartu terpisah mutlak.

**Tech Stack:** Vanilla CSS3, HTML5.

## Global Constraints
- Tidak merusak struktur DOM/HTML kartu yang sudah ada.
- Menjaga filosofi Ponytail Mode (hemat token, CSS ultra-ringkas).
- Menggunakan parameter cache buster `v=staggeredbento7` pada link stylesheet di `index.html`.

---

### Task 1: Implement Magazine Bleed, Dynamic Tilt & Text Protection in `pages.css`

**Files:**
- Modify: `d:/APPS/xampp/htdocs/E-Modul Skripsi/assets/css/pages.css:1762-1790`
- Modify: `d:/APPS/xampp/htdocs/E-Modul Skripsi/assets/css/pages.css:1904-1910`

**Interfaces:**
- Consumes: Aturan `.quick-card` dengan `overflow: hidden;` dan `position: relative;`.
- Produces: Tata letak ikon 3D mepet batas kanan-bawah dengan kemiringan unik per kartu dan zona teks yang terkunci di kiri.

- [ ] **Step 1: Update Icon Positioning, Bleed Dimensions, and Dynamic Rotations in `pages.css`**

Ganti aturan pada baris 1762-1790 di `assets/css/pages.css` dengan kode berikut:

```css
/* Russian Reference Style: 3D Icon Magazine Bleed & Dynamic Tilt */
.quick-card .quick-card-icon {
  position: absolute !important;
  right: -16px !important;
  bottom: -12px !important;
  width: 145px !important;
  height: 145px !important;
  margin: 0 !important;
  display: block !important;
  object-fit: contain !important;
  z-index: 5 !important;
  pointer-events: none;
  filter: drop-shadow(0 14px 22px rgba(0, 0, 0, 0.15));
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

/* Dynamic Rotations Per Card (Staggered HIG Rhythm) */
.staggered-bento-grid > :nth-child(1) .quick-card-icon {
  transform: rotate(-12deg);
}
.staggered-bento-grid > :nth-child(1):hover .quick-card-icon {
  transform: scale(1.12) translateY(-8px) rotate(-16deg);
}

.staggered-bento-grid > :nth-child(2) .quick-card-icon {
  transform: rotate(10deg);
}
.staggered-bento-grid > :nth-child(2):hover .quick-card-icon {
  transform: scale(1.12) translateY(-8px) rotate(14deg);
}

.staggered-bento-grid > :nth-child(3) .quick-card-icon {
  transform: rotate(-6deg);
}
.staggered-bento-grid > :nth-child(3):hover .quick-card-icon {
  transform: scale(1.12) translateY(-8px) rotate(-10deg);
}

.staggered-bento-grid > :nth-child(4) .quick-card-icon {
  transform: rotate(12deg);
}
.staggered-bento-grid > :nth-child(4):hover .quick-card-icon {
  transform: scale(1.12) translateY(-8px) rotate(16deg);
}

.quick-card-body p {
  color: #6E6E73;
  font-size: 0.98rem;
  line-height: 1.62;
  margin: 0;
  padding-right: 110px;
  max-width: 60%;
  position: relative;
  z-index: 2;
}
```

- [ ] **Step 2: Update Responsive Mobile Sizing in `pages.css`**

Ganti aturan pada baris 1904-1910 di `assets/css/pages.css` dengan kode berikut:

```css
  .quick-card .quick-card-icon {
    width: 115px !important;
    height: 115px !important;
    right: -10px !important;
    bottom: -8px !important;
  }
  .quick-card-body p {
    padding-right: 90px;
    max-width: 65%;
  }
}
```

- [ ] **Step 3: Commit Task 1 Changes**

```bash
git add assets/css/pages.css
git commit -m "style(icons): implement magazine bleed, dynamic tilt, and text zone protection"
```

---

### Task 2: Update Cache Buster in `index.html` & Visual Verification

**Files:**
- Modify: `d:/APPS/xampp/htdocs/E-Modul Skripsi/index.html:23`

**Interfaces:**
- Consumes: Aturan CSS baru dari `pages.css?v=staggeredbento7`.
- Produces: Halaman web siap verifikasi tanpa kendala cache browser.

- [ ] **Step 1: Update Cache Buster Version in `index.html`**

Ubah baris 23 di `index.html` menjadi:

```html
    <link rel="stylesheet" href="assets/css/pages.css?v=staggeredbento7">
```

- [ ] **Step 2: Commit Task 2 Changes**

```bash
git add index.html
git commit -m "chore(cache): bump pages.css version to v=staggeredbento7 for magazine bleed layout"
```
