# Magazine Bleed & Tilt 3D Icon Layout (Stitch x Ponytail Mode)
Date: 2026-07-05
Status: Approved for Spec Review

## 1. Goal & Context
Mengatasi tampilan ikon 3D pada kartu Eksplorasi E-Modul agar sesuai 100% dengan estetika gambar referensi Rusia (Google Stitch style). Ikon harus berukuran besar, mepet/terpotong oleh batas border kanan dan bawah (*editorial bleed*), memiliki kemiringan sudut rotasi yang dinamis dan berbeda di tiap kartu, serta dijamin tidak menabrak paragraf teks atau tombol CTA.

## 2. Architecture & Design Principles (Ponytail Mode)
- **Zero HTML Churn:** Tidak ada perubahan struktur DOM/HTML pada kartu. Kita hanya memperbarui parameter cache buster stylesheet (`v=staggeredbento7`) di `index.html`.
- **Magazine Bleed via Overflow Clipping:** Kartu memiliki `overflow: hidden;` dan `border-radius: 22px`. Dengan memposisikan ikon di koordinat negatif (`right: -16px; bottom: -12px;`) dan ukuran besar (`145px x 145px`), bagian luar ikon akan terpotong secara natural oleh lengkungan kartu.
- **Strict Text Zone Protection:** Paragraf di dalam `.quick-card-body p` diberikan `max-width: 60%` dan `padding-right: 110px` untuk mengunci area teks hanya di zona kiri kartu, mencegah tabrakan dengan ikon 3D di zona kanan.

## 3. Component Specifications (`pages.css`)

### A. Icon Sizing & Bleed Positioning
```css
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
```

### B. Dynamic Rotations Per Card (Staggered HIG Rhythm)
```css
/* Kartu 1: Materi Pembelajaran */
.staggered-bento-grid > :nth-child(1) .quick-card-icon {
  transform: rotate(-12deg);
}
.staggered-bento-grid > :nth-child(1):hover .quick-card-icon {
  transform: scale(1.12) translateY(-8px) rotate(-16deg);
}

/* Kartu 2: Prompt Library */
.staggered-bento-grid > :nth-child(2) .quick-card-icon {
  transform: rotate(10deg);
}
.staggered-bento-grid > :nth-child(2):hover .quick-card-icon {
  transform: scale(1.12) translateY(-8px) rotate(14deg);
}

/* Kartu 3: Evaluasi */
.staggered-bento-grid > :nth-child(3) .quick-card-icon {
  transform: rotate(-6deg);
}
.staggered-bento-grid > :nth-child(3):hover .quick-card-icon {
  transform: scale(1.12) translateY(-8px) rotate(-10deg);
}

/* Kartu 4: Tentang */
.staggered-bento-grid > :nth-child(4) .quick-card-icon {
  transform: rotate(12deg);
}
.staggered-bento-grid > :nth-child(4):hover .quick-card-icon {
  transform: scale(1.12) translateY(-8px) rotate(16deg);
}
```

### C. Text Zone Protection & Responsive Sizing
```css
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

@media (max-width: 768px) {
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

## 4. Verification Plan
- **Visual Check:** Verifikasi di browser (`index.html`) bahwa keempat ikon kini mepet dan terpotong di pinggiran kanan/bawah kartu.
- **Rotation Check:** Verifikasi tiap ikon memiliki kemiringan unik (-12deg, +10deg, -6deg, +12deg).
- **Text Collision Check:** Verifikasi teks di Kartu 1 & Kartu 2 terbungkus rapi di kolom kiri tanpa mengenai ikon 3D.
