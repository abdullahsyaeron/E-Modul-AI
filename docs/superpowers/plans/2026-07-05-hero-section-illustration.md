# Hero Section Illustration & Apple HIG Bento Refinement Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Menambahkan ilustrasi 3D berkualitas tinggi (Dosen Ahli Media & Siswa) sebagai lapisan background terintegrasi di dalam wadah kartu melengkung ala Apple HIG (`.hero-card`), mempertegas kontras teks dengan overlay gradasi putih dan warna hitam pekat (`.highlight-black`), serta menjamin responsivitas penuh di layar mobile.

**Architecture:** Menerapkan struktur Bento Card eksklusif di dalam `.hero-section`. Wadah `.hero-card` menggunakan `border-radius: 24px`, `overflow: hidden`, dan paduan 3 lapisan background (gradasi biru-abu, gambar ilustrasi `hero-bg.png`, dan overlay kontras putih di tengah). Di layar mobile (<768px), gambar background dinonaktifkan agar teks tetap mudah dibaca dan tidak bertumpuk.

**Tech Stack:** HTML5, Vanilla CSS3 (Custom Properties / Design Tokens), AI Image Generation (`generate_image`).

## Global Constraints

- Tidak boleh menggunakan placeholder (gambar wajib langsung di-generate atau disediakan sistem auto-load).
- Pertahankan struktur komentar dan dokumentasi yang tidak terkait langsung dengan perubahan ini.
- Gunakan bahasa Indonesia untuk semua teks antarmuka dan dokumentasi pengguna.
- Perbarui parameter cache buster pada link CSS di `index.html` menjadi `v=herobento1`.

---

### Task 1: Pengadaan Aset Gambar & Panduan README

**Files:**
- Create: `assets/images/hero/README.txt`
- Create/Generate: `assets/images/hero/hero-bg.png`

**Interfaces:**
- Produces: File gambar `assets/images/hero/hero-bg.png` yang akan dikonsumsi oleh properti `background-image` di `pages.css`.

- [ ] **Step 1: Buat file panduan README.txt untuk manajemen aset gambar hero**

Buat file `assets/images/hero/README.txt` dengan konten berikut:

```text
PANDUAN MEMASUKKAN ILUSTRASI HERO SECTION (AUTO-LOAD)
=====================================================

Folder ini menyimpan gambar ilustrasi 3D utama yang ditampilkan pada latar belakang
Hero Card di halaman utama (index.html).

NAMA FILE UTAMA:
----------------
hero-bg.png

CARA MENGGANTI GAMBAR DENGAN HASIL GENERATE GEMINI ANDA:
--------------------------------------------------------
1. Siapkan gambar ilustrasi Anda dengan format .png (rasio landscape, sarankan min. 1400x700px).
2. Ubah nama file gambar Anda menjadi: hero-bg.png
3. Salin dan timpa (overwrite) file hero-bg.png yang ada di folder ini: assets/images/hero/
4. Refresh browser Anda (tekan Ctrl+F5 atau Cmd+Shift+R untuk membersihkan cache).

SARAN KOMPOSISI GAMBAR:
-----------------------
- Sisi Kanan: Karakter dosen / pengajar berdiri di samping meja.
- Sisi Kiri: Siswa mendengarkan / belajar.
- Area Tengah: Biarkan relatif bersih/kosong agar teks judul e-modul dapat terbaca dengan jelas.
```

- [ ] **Step 2: Generate gambar ilustrasi 3D menggunakan tool generate_image**

Gunakan tool `generate_image` dengan argumen berikut untuk membuat demonstrasi gambar nyata tanpa placeholder:
- Prompt: `A premium 3D illustration for an e-learning website hero section, designed inside a clean horizontal rectangular card container with rounded corners. The overall background inside the card is a very subtle, soft gradient of light bright blue and pale gray. On the right side: An Indonesian female teacher wearing a neat, elegant, non-tight long-sleeved formal blouse, a long skirt, and a well-fitted modest hijab covering her chest. She is a friendly Asian woman with professional proportions, standing beside a minimalist desk with an open laptop, facing and looking towards the left side to teach. On the left side: A small group of 2-3 Asian students sitting neatly, looking towards the right side at the teacher with enthusiastic and cheerful expressions. Composition: The center area between the teacher and students is left completely empty and clean for text placement. The entire 3D illustration is neatly contained and clipped inside the rounded card boundaries, with no elements overlapping or spilling outside the card. Minimalist design, soft professional lighting, cohesive claymation/clean 3D vector style, no robots, no sci-fi elements.`
- ImageName: `hero_bg_illustration`

- [ ] **Step 3: Salin gambar hasil generate ke path tujuan**

Salin file gambar yang baru di-generate ke dalam direktori proyek: `assets/images/hero/hero-bg.png`.

- [ ] **Step 4: Commit aset gambar dan README**

```bash
git add assets/images/hero/README.txt assets/images/hero/hero-bg.png
git commit -m "feat(hero): tambah panduan README dan generate gambar ilustrasi 3D hero section"
```

---

### Task 2: Perbarui CSS Hero Section (`pages.css`)

**Files:**
- Modify: `assets/css/pages.css:1575-1630`

**Interfaces:**
- Consumes: Aset gambar dari Task 1 (`assets/images/hero/hero-bg.png`).
- Produces: Kelas CSS `.hero-card`, `.highlight-black`, dan pembaruan `.hero-section` untuk dikonsumsi oleh `index.html`.

- [ ] **Step 1: Ganti aturan CSS Hero Section di `pages.css`**

Cari blok aturan `.hero-section` di sekitar baris 1576 hingga 1627, lalu ganti dengan aturan baru berikut:

```css
/* ============================================================
   APPLE-INSPIRED PAGE REFINEMENT & BENTO HERO CARD
   ============================================================ */
.hero-section {
  min-height: auto;
  padding-top: clamp(2.5rem, 5vw, 4rem);
  padding-bottom: clamp(2.5rem, 5vw, 4rem);
  background: #ffffff;
  animation: none;
  isolation: isolate;
  display: flex;
  justify-content: center;
}

.hero-section .container {
  width: 100%;
  max-width: 1240px;
}

/* Apple HIG Bento Hero Card Container */
.hero-card {
  position: relative;
  width: 100%;
  min-height: 480px;
  border-radius: 24px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: clamp(2.5rem, 5vw, 4rem) 2rem;
  /* 3 Lapisan: Gradasi halus + Gambar Ilustrasi 3D */
  background:
    linear-gradient(to right, rgba(219, 234, 254, 0.4), rgba(243, 244, 246, 0.5), rgba(219, 234, 254, 0.4)),
    url('../images/hero/hero-bg.png');
  background-position: center bottom;
  background-size: cover;
  background-repeat: no-repeat;
  box-shadow: 0 10px 30px -5px rgba(0, 0, 0, 0.05), 0 1px 3px 0 rgba(0, 0, 0, 0.03);
}

/* Overlay Kontras Teks di Tengah Kartu */
.hero-card::before {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  left: 15%;
  right: 15%;
  background: radial-gradient(ellipse at center, rgba(255, 255, 255, 0.92) 0%, rgba(255, 255, 255, 0.85) 45%, rgba(255, 255, 255, 0) 100%);
  pointer-events: none;
  z-index: 1;
}

.hero-content {
  max-width: 740px;
  text-align: center;
  position: relative;
  z-index: 2;
  margin: 0 auto;
}

.hero-title {
  font-size: clamp(2.2rem, 4.5vw, 3.6rem);
  line-height: 1.12;
  letter-spacing: -0.02em;
  color: #111827;
  margin-bottom: 1.5rem;
}

.hero-title .accent {
  color: #0066cc;
}

/* Penekanan teks hitam pekat sesuai instruksi user */
.highlight-black {
  color: #000000 !important;
  font-weight: 800;
}

.hero-desc {
  max-width: 680px;
  font-size: clamp(1rem, 1.6vw, 1.15rem);
  line-height: 1.65;
  color: #4b5563;
  margin: 0 auto 2rem auto;
}

.hero-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.page-body.bg-alt .hero-section {
  padding-top: clamp(2.5rem, 5vw, 4rem) !important;
  padding-bottom: clamp(2.5rem, 5vw, 4rem) !important;
}

/* Responsif Mobile (<768px): Sembunyikan gambar latar agar teks tidak bertumpuk */
@media (max-width: 768px) {
  .hero-card {
    min-height: auto;
    padding: 2.5rem 1.5rem;
    background: linear-gradient(135deg, rgba(219, 234, 254, 0.6), rgba(243, 244, 246, 0.8));
    border-radius: 20px;
  }
  .hero-card::before {
    display: none;
  }
  .hero-title {
    font-size: 2rem;
  }
}
```

- [ ] **Step 2: Verifikasi sintaks CSS**

Pastikan tidak ada kurung kurawal `{}` yang tertinggal atau salah tutup di file `assets/css/pages.css`.

- [ ] **Step 3: Commit perubahan CSS**

```bash
git add assets/css/pages.css
git commit -m "style(hero): implementasi bento hero card dengan ilustrasi 3D dan highlight hitam"
```

---

### Task 3: Perbarui Struktur HTML & Cache Buster (`index.html`)

**Files:**
- Modify: `index.html:23, 66-92`

**Interfaces:**
- Consumes: Kelas CSS dari Task 2 (`.hero-card`, `.highlight-black`).

- [ ] **Step 1: Perbarui cache buster di `index.html`**

Cari baris link CSS untuk `pages.css` di bagian `<head>` (sekitar baris 23):
```html
    <link rel="stylesheet" href="assets/css/pages.css?v=staggeredbento10">
```
Ganti menjadi:
```html
    <link rel="stylesheet" href="assets/css/pages.css?v=herobento1">
```

- [ ] **Step 2: Perbarui struktur HTML Hero Section**

Cari bagian `<section class="hero-section tile tile-light">` (sekitar baris 66 hingga 91), lalu ganti dengan struktur baru yang dibungkus `<div class="hero-card">` dan menggunakan kelas `.highlight-black`:

```html
    <section class="hero-section">
        <div class="container">
            <div class="hero-card">
                <div class="hero-content">
                    <h1 class="hero-title animate-stagger stagger-2">
                        E-Modul Pemanfaatan<br>
                        <span class="highlight-black">Artificial Intelligence</span> dalam<br>
                        Pengembangan Media Pembelajaran
                    </h1>
                    <p class="hero-desc animate-stagger stagger-3">
                        E-modul interaktif yang dirancang untuk membantu guru memahami, memanfaatkan, dan mengevaluasi penggunaan Artificial Intelligence secara efektif, etis, dan bertanggung jawab dalam pengembangan media pembelajaran.
                    </p>
                    <div class="hero-actions animate-stagger stagger-4">
                        <a href="materi.html" class="btn btn-primary btn-lg">
                            Mulai Belajar <i class="ph ph-arrow-right"></i>
                        </a>
                        <a href="#cara-penggunaan" class="btn btn-secondary btn-lg">
                            Cara Penggunaan
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
```

- [ ] **Step 3: Verifikasi tampilan di browser**

Buka atau refresh `index.html` di browser lokal untuk memastikan:
1. Kartu hero melengkung rapi dengan latar ilustrasi 3D di kanan (dosen) dan kiri (siswa).
2. Teks "Artificial Intelligence" berwarna hitam pekat (`#000000`).
3. Teks utama mudah dibaca berkat overlay putih di tengah.
4. Saat di-resize ke layar HP (<768px), gambar otomatis hilang dan menyisakan gradasi biru-abu yang rapi.

- [ ] **Step 4: Commit perubahan HTML**

```bash
git add index.html
git commit -m "feat(hero): terapkan struktur bento hero card dan cache buster v=herobento1"
```
