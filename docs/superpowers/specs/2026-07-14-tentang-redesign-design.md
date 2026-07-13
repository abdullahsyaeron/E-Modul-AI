# Spesifikasi Desain: Redesain Halaman Tentang

**Status:** Draft (Menunggu Review User)
**Tanggal:** 2026-07-14
**Topik:** Redesain Halaman `tentang.html` (Konsistensi Bahasa Desain Evaluasi)

---

## 1. Tujuan
Meningkatkan kenyamanan visual dan konsistensi halaman **Tentang** (`tentang.html`) dengan mengadopsi bahasa desain halaman **Evaluasi**:
- Kartu dengan sudut melengkung 16px (`var(--radius-xl)`).
- Border tipis `var(--color-border-soft)`.
- Bayangan melayang `var(--shadow-sm)` dan `var(--shadow-md)`.
- Header kartu transparan dengan garis pemisah tipis `var(--color-border-soft)` dan nomor lingkaran bernomor.
- Menghilangkan warna header gelap kaku `#0f172a` dan ikon Phospor di header untuk menyederhanakan visual (anti-slop).

---

## 2. Rencana Perubahan Halaman

### A. Kartu 1: Deskripsi Produk
- **Nomor Kepala:** `1` (lingkaran berlatar `var(--color-primary)` dengan teks putih).
- **Judul:** Deskripsi Produk
- **Meta/Sub-judul:** Mengenal E-Modul Pemanfaatan AI
- **Isi Kartu:**
  - Teks deskripsi utama menggunakan ukuran font tubuh standar (`var(--text-base)`) yang bersih.
  - Daftar poin fitur diubah dari poin bulat hitam bawaan HTML menjadi poin kustom dengan ikon centang tipis berwarna hijau (`ph-check-circle` atau serupa).

### B. Kartu 2: Tim Pengembang
- **Nomor Kepala:** `2`
- **Judul:** Tim Pengembang
- **Meta/Sub-judul:** Kolaborasi Penyusun dan Pembimbing
- **Isi Kartu:**
  - Menggunakan grid 2-kolom yang rapi pada desktop (`dev-grid` diperbarui) dan runtut 1-kolom di mobile.
  - Menghapus ad-hoc inline styles pada baris dosen pembimbing, menyamakan struktur CSS keduanya dengan `.dev-card`.
  - Avatar lingkaran menggunakan latar biru pudar (`var(--color-info-light)`) dengan ikon guru/wisuda berwarna biru (`var(--color-primary)`).

### C. Kartu 3: Referensi Pustaka
- **Nomor Kepala:** `3`
- **Judul:** Referensi Pustaka
- **Meta/Sub-judul:** Daftar Rujukan Teoretis dan Praktis
- **Isi Kartu:**
  - Setiap rujukan disajikan sebagai baris item minimalis (`.referensi-item`) dengan latar abu-abu pudar `var(--color-bg-alt)` dan border-radius halus `var(--radius-sm)`.
  - Jarak spasi vertikal yang seragam agar mudah dipindai.

---

## 3. Rencana CSS (`pages.css`)
- Ganti properti warna latar belakang `.profile-header` dari `#0f172a` menjadi transparan (`transparent`).
- Hapus warna teks paksa `color: white` pada `.profile-header h2` dan `.profile-header h3` (ubah menjadi `var(--color-text)`).
- Ganti gaya `.profile-card` agar senada dengan `.eval-card` (border, radius, shadow, header dengan nomor melingkar).
- Rapikan kelas `.dev-card` dan `.dev-grid` agar tidak menggunakan inline style.
