# Spesifikasi Desain: Redesign Kartu Eksplorasi E-Modul

Tanggal: 2026-07-03
Status: Approved oleh User

## 1. Latar Belakang & Tujuan
User meminta agar kartu pada section **Eksplorasi E-Modul** di halaman Dashboard (`index.html`) diubah tata letak visualnya (*layouting*) meniru struktur gambar referensi ("Patient Tracking Summary").
Desain baru ini harus mengadopsi anatomi 3-zona yang modern, terstruktur, dan bersih, **tanpa mengubah isi konten deskripsi ataupun ikon 2.5D SVG eksisting**.

## 2. Anatomi Kartu Baru (3-Zona)

Setiap kartu (`.quick-card`) memiliki kontainer utama berlapis warna putih (`#FFFFFF`), sudut membulat (`border-radius: 26px`), bayangan transparan halus (`box-shadow`), dan efek hover yang lembut (`translateY(-1.5px)`).

Di dalam kartu terbagi menjadi 3 zona:

### A. Zona Atas: Inner Pastel Pill Box (`.quick-card-header`)
- Boks internal dengan sudut membulat (`border-radius: 18px`), bantalan dalam (`padding: 14px 18px`), dan latar belakang warna pastel lembut.
- Memuat tata letak horizontal (*flexbox row*, `align-items: center`, `gap: 14px`):
  - **Ikon 2.5D Vector (`.quick-card-icon`)**: Ikon SVG eksisting yang dipertahankan utuh.
  - **Judul Menu (`<h3>`)**: Teks judul menu dengan bobot font *semi-bold* (600) dan warna teks kontras yang harmonis dengan latar pastel.

Skema Warna Pastel per Kartu:
1. **Materi Pembelajaran (`.card-theme-blue`)**:
   - Background: `#E8F2FF`
   - Warna Judul: `#0052B3`
2. **Prompt Library (`.card-theme-gold`)**:
   - Background: `#FFF8E7`
   - Warna Judul: `#8C6322`
3. **Evaluasi (`.card-theme-emerald`)**:
   - Background: `#E8F8F2`
   - Warna Judul: `#167948`
4. **Tentang (`.card-theme-purple`)**:
   - Background: `#F0E8FF`
   - Warna Judul: `#5B21B6`

### B. Zona Tengah: Deskripsi (`.quick-card-body`)
- Area putih dengan bantalan proporsional (`margin-top: 18px`, `margin-bottom: 24px`).
- Memuat teks deskripsi menu (`<p>`) dengan warna teks `#48484A`, ukuran font `0.98rem`, dan *line-height* `1.6`.

### C. Zona Bawah: Footer Row (`.quick-card-footer`)
- Baris penutup di dasar kartu (*flexbox row*, `justify-content: space-between`, `align-items: center`).
- **Kiri (Sub-label)**: Kapsul teks kecil berwarna abu-abu redup (`#6E6E73`, font-size `0.85rem`):
  - Materi Pembelajaran: *"Modul Interaktif"*
  - Prompt Library: *"Koleksi AI"*
  - Evaluasi: *"Instrumen"*
  - Tentang: *"Informasi"*
- **Kanan (Tombol Pill Aksi)**: Tombol berbentuk pil (`border-radius: 99px`, `padding: 8px 16px`, `font-size: 0.88rem`, `font-weight: 600`) berisikan teks aksi dan ikon panah (`ph ph-arrow-right`):
  - *"Mulai Belajar ➔"*
  - *"Lihat Prompt ➔"*
  - *"Mulai Evaluasi ➔"*
  - *"Baca Selengkapnya ➔"*

## 3. Berkas yang Dipengaruhi
- `index.html`: Struktur HTML dari 4 kartu `.quick-card` pada section Eksplorasi E-Modul.
- `assets/css/pages.css`: Penyesuaian aturan CSS untuk `.quick-card`, `.quick-card-header`, `.quick-card-body`, dan `.quick-card-footer`.

## 4. Kriteria Evaluasi
- Kartu memiliki tampilan tepat seperti anatomi 3-zona referensi.
- Ikon 2.5D tidak mengalami kecacatan atau perubahan bentuk.
- Transisi hover tetap halus (`translateY(-1.5px)`).
- Responsif pada tampilan layar desktop maupun seluler.
