# Spesifikasi Desain: Apple HIG Staggered Bento Board Redesign (Eksplorasi E-Modul)

**Tanggal:** 2026-07-05  
**Status:** Draft untuk Review Pengguna  
**Konteks:** Redesign area "Eksplorasi E-Modul" di `index.html` terinspirasi dari layout irama gelombang (*staggered wave rhythm*) dengan filosofi minimalis Apple HIG.

---

## 1. Tujuan & Filosofi Desain

Mengubah presentasi grid statis 2x2 pada area **Eksplorasi E-Modul** menjadi layout **Staggered Bento Board 1x4** di dalam kontainer biru Apple Blue melengkung.
Desain ini menjawab kebutuhan visual yang *"simple, namun tidak membosankan"* dengan memecah kekakuan grid horizontal dan menciptakan irama naik-turun secara alami, tanpa menambahkan elemen dekoratif yang tidak fungsional (seperti penjepit kertas skeuomorfik).

---

## 2. Keputusan Arsitektur Visual (Hasil Grill-Me)

### A. Panggung Latar: The Apple Blue Hero Box
- **Selector:** Mengubah area kontainer Eksplorasi E-Modul (saat ini `.section.tile.tile-blue`) menjadi kontainer khusus `.eksplorasi-hero-box`.
- **Warna Latar:** Solid Apple Blue (`#007AFF` / `var(--color-primary)`).
- **Geometri:** Sudut melengkung halus `border-radius: 32px` (`var(--radius-2xl)`) di sekeliling box kontainer.
- **Padding Dalam:**
  - Desktop (`>= 1024px`): `padding: 64px 40px;`
  - Tablet (`768px - 1023px`): `padding: 48px 32px;`
  - Mobile (`< 768px`): `padding: 36px 20px;`
- **Tipografi Header:** Judul seksi ("Eksplorasi E-Modul") dan label ("Akses Cepat") diubah menjadi warna putih bersih (`#FFFFFF`). Deskripsi seksi menggunakan putih semi-transparan (`rgba(255, 255, 255, 0.85)`).

### B. Tata Letak Kartu: 1x4 Staggered Bento Grid
- **Desktop (`>= 1024px`):** 
  - 4 kartu ditampilkan dalam **1 baris horizontal (4 kolom)** menggunakan `grid-template-columns: repeat(4, 1fr); gap: 24px;`.
  - **Irama Gelombang (Vertical Staggering):**
    - Kartu 1 (*Modul Pembelajaran*): `transform: translateY(0);`
    - Kartu 2 (*Koleksi Prompt*): `transform: translateY(24px);`
    - Kartu 3 (*Evaluasi Kualitas Media*): `transform: translateY(0);`
    - Kartu 4 (*Informasi*): `transform: translateY(24px);`
  - Area bawah kontainer diberikan ekstra padding bawah (`padding-bottom: 88px;`) untuk mengakomodasi pergeseran ke bawah (`+24px`) pada kartu ke-2 dan ke-4 agar tidak memotong batas box biru.

- **Tablet (`768px - 1023px`):**
  - Menjadi grid **2 baris x 2 kolom** (`grid-template-columns: repeat(2, 1fr); gap: 20px;`).
  - Staggered vertikal diterapkan per kolom: Kolom kiri (`nth-child(odd)`) di `translateY(0)`, Kolom kanan (`nth-child(even)`) turun `translateY(16px)`.

- **Mobile (`< 768px`):**
  - Menjadi tumpukan vertikal **1 kolom** (`grid-template-columns: 1fr; gap: 16px;`).
  - Staggered dinonaktifkan (`transform: none;`) demi kenyamanan dan keterbacaan berurutan saat *scrolling* dengan jempol di HP.

### C. Anatomi Kartu: Pure Apple HIG Sleek Glass
- **Kartu Murni (Tanpa Penjepit Kertas):** Mempertahankan kebersihan estetika Apple HIG murni tanpa elemen skeuomorfik.
- **Visual:** Latar belakang putih bersih (`background: #FFFFFF;`), sudut melengkung `border-radius: 24px`, border halus `1px solid rgba(0,0,0,0.06)`, dan bayangan lembut `var(--shadow-lg)`.
- **Anatomi 3-Zona Tetap Utuh:**
  1. *Header:* Ikon 2.5D Phosphor + Judul Modul.
  2. *Body:* Deskripsi 2 baris teks.
  3. *Footer:* Sublabel abu-abu + Tombol panah kapsul warna biru Apple (`#007AFF`).
- **Interaksi Hover (Desktop):**
  - Saat disorot mouse, kartu terangkat ke atas (*hover elevation*) disertai peningkatan bayangan (*box-shadow*).
  - Kartu 1 & 3: `hover -> translateY(-8px)`
  - Kartu 2 & 4: `hover -> translateY(16px)` (terangkat 8px dari posisi awalnya di `24px`).

---

## 3. Strategi Implementasi & File yang Dilibatkan

1. **`index.html` (Baris ~94-198):**
   - Menambahkan wrapper `<div class="eksplorasi-hero-box">` di dalam section Eksplorasi E-Modul.
   - Menambahkan kelas pendukung pada kontainer grid jika diperlukan (atau cukup menargetkan `.quick-access-grid` di dalam `.eksplorasi-hero-box`).
2. **`assets/css/pages.css`:**
   - Menambahkan blok aturan baru untuk `.eksplorasi-hero-box`, modifikasi header teks putih, dan sistem grid staggered responsif di bagian bawah file.
   - Memperbarui versi *cache buster* pada link CSS di `index.html` (misal: `v=staggeredbento1`).

---

## 4. Kriteria Verifikasi (Pre-flight & Post-flight)
- **Zero Content Alteration:** Seluruh teks judul, deskripsi kartu, ikon SVG, dan tautan (`materi.html`, `prompt.html`, `evaluasi.html`, `tentang.html`) tidak berubah satu karakter pun.
- **Responsive Check:** Menguji inspeksi visual pada 3 *breakpoint* (1200px Desktop, 800px Tablet, 375px Mobile).
- **Cascade Cleanliness:** Memastikan aturan CSS tidak bertabrakan dengan bagian *tile* lain di website.
