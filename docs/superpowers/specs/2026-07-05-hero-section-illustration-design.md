# Spesifikasi Desain: Hero Section Illustration & Apple HIG Bento Refinement

**Tanggal**: 2026-07-05  
**Status**: Disetujui (Approved by User)  
**Tujuan**: Menyempurnakan Hero Section pada `index.html` dengan menambahkan ilustrasi 3D berkualitas tinggi (Dosen Ahli Media & Siswa) sebagai lapisan background terintegrasi di dalam wadah kartu melengkung ala Apple HIG, meningkatkan kontras teks, dan menerapkan responsivitas penuh.

---

## 1. Latar Belakang & Tujuan
Berdasarkan masukan dari Dosen Ahli Media, Hero Section pada halaman utama (`index.html`) membutuhkan ilustrasi visual yang representatif untuk menggambarkan proses pembelajaran interaktif berbasis AI. 

Desain baru ini menggabungkan ilustrasi 3D (dihasilkan melalui AI/Gemini) ke dalam wadah kartu eksklusif (`.hero-card`) dengan sudut melengkung 24px dan gradasi biru-pucat ke abu-abu lembut, menjaga kebersihan visual sekaligus mempertegas pesan utama e-modul.

---

## 2. Arsitektur Komponen & Layout

### 2.1 Wadah Utama (`.hero-wrapper` & `.hero-card`)
- **`.hero-wrapper`**: Bagian luar kartu tetap mempertahankan warna latar `#ffffff` murni dengan padding proporsional (`50px 20px`) untuk memberi nafas visual (*breathing room*).
- **`.hero-card`**:
  - **Dimensi**: `max-width: 1200px`, `width: 100%`, `min-height: 480px`.
  - **Batas Visual**: `border-radius: 24px`, `overflow: hidden`, dan `position: relative`.
  - **Background Layer**: Menggunakan perpaduan 3 elemen yang disatukan secara harmonis:
    1. Warna dasar gradasi halus: `linear-gradient(to right, rgba(219, 234, 254, 0.4), rgba(243, 244, 246, 0.5), rgba(219, 234, 254, 0.4))`
    2. Gambar ilustrasi utuh: `url('../images/hero/hero-bg.png')` dengan posisi `center bottom` dan ukuran `cover` (atau `contain` dengan perataan bawah).
    3. Overlay pelindung kontras teks di bagian tengah kartu.

### 2.2 Overlay Kontras Teks (Desktop)
Untuk mencegah teks menabrak atau bersaing dengan detail ilustrasi (siswa di kiri, dosen di kanan):
- Dilakukan injeksi *gradient mask* putih lembut tepat di area tengah kartu: `linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.88) 32%, rgba(255,255,255,0.88) 68%, rgba(255,255,255,0) 100%)`.
- Teks utama (`.hero-content`) ditempatkan dengan `z-index: 2` dan `max-width: 700px` tepat di pusat area overlay putih tersebut.

### 2.3 Tipografi & Penekanan Warna (`.highlight-black`)
- Teks **"Artificial Intelligence"** pada judul utama `<h1 class="hero-title">` yang sebelumnya menggunakan kelas `.accent` (biru `#0066cc`), diganti dengan kelas `.highlight-black`.
- Definisi CSS: `.highlight-black { color: #000000 !important; font-weight: 800; }`.
- Perubahan ini memberikan penekanan eksekutif yang kuat dan meningkatkan keterbacaan di atas latar belakang terang.

---

## 3. Strategi Responsif (Desktop vs Mobile)

### 3.1 Layar Desktop & Tablet Lebar (≥ 768px)
- Ilustrasi 3D penuh ditampilkan sebagai background layer.
- Tombol CTA (`Mulai Belajar` dan `Cara Penggunaan`) berdampingan secara horizontal di tengah bawah teks deskripsi.

### 3.2 Layar Mobile (< 768px)
- **Masalah**: Pada layar sempit vertikal, gambar landscape lebar akan terdesak dan membuat teks bertumpuk dengan karakter ilustrasi.
- **Solusi**:
  - `background-image` untuk ilustrasi **dinonaktifkan** (`background-image: none !important`), atau diganti dengan versi warna gradasi murni.
  - Padding dalam kartu disesuaikan menjadi `clamp(2rem, 5vw, 3rem)`.
  - Teks dan tombol CTA tetap mengalir rapi tanpa gangguan visual latar belakang.

---

## 4. Pengadaan & Manajemen Aset Gambar

### 4.1 Generasi Gambar AI
- Gambar ilustrasi akan dibuat menggunakan tool AI terintegrasi (`generate_image`) dengan parameter:
  - **Prompt**: *A premium 3D illustration for an e-learning website hero section, designed inside a clean horizontal rectangular card container... On the right side: An Indonesian female teacher wearing a neat formal blouse, long skirt, and modest hijab... On the left side: A small group of 2-3 Asian students sitting neatly... Composition: The center area is left clean for text. Minimalist design, soft lighting, claymation 3D vector style.*
- Aset gambar disimpan di: `assets/images/hero/hero-bg.png`.

### 4.2 Panduan README untuk User
- Dibuatkan file `assets/images/hero/README.txt` yang berisi instruksi cara mengganti file `hero-bg.png` dengan gambar hasil generate Gemini milik user sendiri sewaktu-waktu tanpa mengubah satu baris kode pun.

---

## 5. Rencana Verifikasi

### 5.1 Verifikasi Visual Desktop
- Membuka `index.html` di browser desktop (lebar ≥ 1200px).
- Memastikan sudut melengkung 24px rapi tidak ada gambar bocor (*clip/overflow hidden*).
- Memastikan teks "Artificial Intelligence" berwarna hitam pekat (`#000000`).
- Memastikan kontras teks deskripsi dan tombol mudah dibaca di atas area tengah.

### 5.2 Verifikasi Visual Mobile
- Menguji pada resolusi mobile (lebar 375px dan 425px).
- Memastikan gambar background disembunyikan dengan mulus dan gradasi biru-abu tetap memberi kesan elegan.
