# Spesifikasi Desain: Standardisasi Tipografi Menyeluruh (Apple HIG & LabSpace Style)
**Tanggal:** 2026-07-05  
**Proyek:** E-Modul Pemanfaatan Artificial Intelligence dalam Pengembangan Media Pembelajaran  
**Status:** Approved for Spec Review  

---

## 1. Latar Belakang & Tujuan
Dari hasil audit tipografi menyeluruh terhadap berkas CSS aktif (`main.css`, `components.css`, dan `pages.css`), ditemukan lebih dari 40 aturan ukuran teks (*font-size*) yang tidak konsisten:
- Penggunaan satuan yang bercampur aduk antara *hardcoded pixel* (`11px`, `13px`, `15px`, `16px`), *hardcoded rem/em* (`0.75em`, `0.85rem`, `1.125rem`, `1.5rem`), dan variabel CSS.
- Penggunaan rumus `clamp()` yang terlalu agresif pada teks tubuh (*body text*) di `--text-base` dan `--text-sm`, menyebabkan ukuran huruf melompat-lompat secara tidak natural saat ukuran jendela peramban diubah.
- Ketidakselarasan hierarki visual antar komponen (misalnya tombol, kartu, navigasi, dan header bab memiliki ukuran font yang beragam tanpa standar yang jelas).

**Tujuan Desain:**  
Menerapkan sistem tipografi bergaya Apple Human Interface Guidelines (HIG) dan LabSpace yang bersih, stabil, dan nyaman dibaca dalam jangka waktu lama (terutama untuk membaca materi pembelajaran panjang), sekaligus membersihkan seluruh nilai *hardcoded* agar pemeliharaan kode di masa depan menjadi sangat mudah.

---

## 2. Arsitektur Token Tipografi (`main.css`)
Sistem token pada `:root` di `main.css` akan direstrukturisasi dengan aturan yang tegas:
1. **Teks Tubuh (*Body / UI Text*):** Menggunakan ukuran tetap (*fixed rem/px*) agar stabil, dapat diprediksi, dan memberikan kenyamanan maksimal saat membaca teks panjang.
2. **Teks Judul (*Headings / Banners*):** Menggunakan skala *fluid clamp* yang halus agar proporsional dan responsif di berbagai ukuran resolusi layar (Mobile, Tablet, Desktop).

### Tabel Skala Token Baru:
| Token | Nilai CSS | Setara Px | Peruntukan Utama |
| :--- | :--- | :--- | :--- |
| `--text-xs` | `0.75rem` | 12px | Badge, label keterangan, *footnote*, *timestamp*, angka meta |
| `--text-sm` | `0.875rem` | 14px | Teks sekunder, deskripsi kartu pendek, navigasi, tombol kecil, tabel |
| `--text-base` | `1rem` | 16px | **Standar Body Text**, paragraf materi, input form, tombol utama |
| `--text-lg` | `1.125rem` | 18px | Paragraf pengantar (*lead paragraph*), judul kartu, sub-bagian kecil |
| `--text-xl` | `clamp(1.25rem, 2vw, 1.5rem)` | 20px - 24px | Judul section kecil, judul modal, header tab navigasi materi |
| `--text-2xl` | `clamp(1.5rem, 2.5vw, 1.875rem)` | 24px - 30px | Judul bab materi, judul halaman (*page header*) |
| `--text-3xl` | `clamp(1.875rem, 3.5vw, 2.25rem)` | 30px - 36px | Judul section utama, angka statistik besar pada bento grid |
| `--text-4xl` | `clamp(2.25rem, 5vw, 3rem)` | 36px - 48px | Judul Hero Section / Banner eksplorasi utama |

---

## 3. Standardisasi Komponen Global (`components.css`)
Seluruh nilai *hardcoded* pada `components.css` akan disapu bersih dan digantikan oleh token resmi:
- **Tombol (`.btn`, `.btn-lg`, `.btn-sm`, `.tab-btn`):**
  - Tombol standar & tab materi: `font-size: var(--text-base);` (16px) dengan `font-weight: 600`.
  - Tombol kecil / *pill*: `font-size: var(--text-sm);` (14px).
- **Kartu & Bento Grid (`.card`, `.quick-card`, `.bento-item`):**
  - Judul kartu (`h3`, `h4`): `font-size: var(--text-lg);` (18px) dengan `font-weight: 600`.
  - Deskripsi kartu (`p`): `font-size: var(--text-sm);` (14px) dengan `line-height: 1.5`.
- **Elemen Navigasi & Header (`.navbar`, `.chapter-header`):**
  - Menu navigasi: `font-size: var(--text-sm);` (14px).
  - Judul bab utama: `font-size: var(--text-2xl);`.
- **Elemen Mikro Pembelajaran (`.tool-icon`, `.tool-info`, `.timeline-number`):**
  - Ikon tool: `font-size: var(--text-xl);`.
  - Judul tool: `font-size: var(--text-xs);`.
  - Angka timeline: `font-size: var(--text-sm);`.

---

## 4. Standardisasi Halaman Spesifik (`pages.css`)
Menghapus seluruh anomali ukuran font pada file gaya halaman:
- **Hero Section:**
  - Judul utama (`.hero-title`): `font-size: var(--text-4xl);`.
  - Deskripsi (`.hero-desc`): `font-size: var(--text-base);` dengan `line-height: 1.65` (16px stabil).
- **Halaman Materi Pembelajaran (`materi.html`):**
  - Teks paragraf materi (`.materi-content p`, `.materi-main p`): Standar wajib `font-size: var(--text-base);` (16px) dengan `line-height: 1.7` agar tidak melelahkan mata.
  - Sub-judul bab (`h2`, `h3`): Menggunakan `--text-2xl` dan `--text-xl`.
- **Prompt Library & Evaluasi (`prompt.html`, `evaluasi.html`):**
  - Kartu prompt & kuis: Teks instruksi menggunakan `--text-base`, sementara penjelasan teknis atau opsi jawaban menggunakan `--text-sm`.
- **Tentang E-Modul (`tentang.html`):**
  - Profil pengembang dan referensi: Nama/judul menggunakan `--text-lg`, deskripsi/posisi menggunakan `--text-sm`.

---

## 5. Strategi Verifikasi & Pengujian
1. **Verifikasi Statis (Grep Check):**
   - Menjalankan `grep_search` pada `main.css`, `components.css`, dan `pages.css` untuk memastikan tidak ada lagi nilai `font-size: .*px` atau `font-size: .*rem/em` yang liar (kecuali definisi pada token `:root` di `main.css`).
2. **Verifikasi Visual (Konsistensi Antar-Halaman):**
   - Memastikan tidak ada pergeseran tata letak (*layout shift*) atau teks yang terpotong pada komponen tombol, kartu, navigasi, dan hero banner setelah migrasi ke token baru.
   - Memastikan teks materi pembelajaran pada `materi.html` konsisten berukuran 16px (1rem) yang nyaman dibaca di layar Desktop maupun Mobile.
