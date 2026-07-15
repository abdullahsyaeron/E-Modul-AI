# Spesifikasi Desain: Redesain Halaman Tentang

**Status:** Approved (Disetujui User)
**Tanggal:** 2026-07-15
**Topik:** Redesain Halaman `tentang.html` (Konsistensi Bahasa Desain Evaluasi & Kontras Tinggi)

---

## 1. Tujuan
Meningkatkan kenyamanan visual, proporsi tipografi, kontras warna, dan kelengkapan informasi pada halaman **Tentang** (`tentang.html`):
- Menghapus penomoran kartu (`1`, `2`, `3`) untuk visualisasi yang lebih bersih.
- Menyeimbangkan proporsi ukuran font heading kartu (`var(--text-xl)` = 20-24px) dengan teks body (`var(--text-base)` = 16px).
- Mengubah ikon profil pengembang/pembimbing/validator menjadi bentuk siluet avatar iOS dengan kontras tinggi (siluet abu-abu Slate-500 di atas lingkaran Slate-200).
- Melengkapi anggota tim pengembang dengan menambahkan 2 Validator Ahli.

---

## 2. Rencana Perubahan Halaman

### A. Kartu 1: Deskripsi Produk
- **Judul:** Deskripsi Produk
- **Meta/Sub-judul:** Mengenal E-Modul Pemanfaatan AI
- **Isi Kartu:**
  - Teks deskripsi utama menggunakan ukuran font tubuh standar (`var(--text-base)`) yang bersih.
  - Daftar poin fitur diubah dari poin bulat hitam bawaan HTML menjadi poin kustom dengan ikon centang tipis berwarna hijau (`ph-check-circle`).

### B. Kartu 2: Tim Pengembang
- **Judul:** Tim Pengembang
- **Meta/Sub-judul:** Kolaborasi Penyusun, Pembimbing, dan Validator
- **Isi Kartu:**
  - Grid 2-kolom yang rapi pada desktop (`dev-grid`) dan runtut 1-kolom di mobile.
  - Menggunakan 4 kartu dengan struktur `.dev-card` yang seragam untuk 4 anggota tim berikut:
    1. **Abdulloh Syaeron** — Pengembang Produk (Mahasiswa Teknologi Pendidikan)
    2. **Dr. Mukhammad Luqman Hakim, M.Pd.** — Dosen Pembimbing (Dosen Prodi Teknologi Pendidikan)
    3. **Sumiyati, M.Pd** — Validator Ahli Media (Dosen Teknologi Pendidikan)
    4. **Ariyawan Agung Nugroho, S.T., M.Pd.** — Validator Ahli Materi (Dosen Teknologi Pendidikan)
  - Avatar menggunakan SVG siluet iOS (kontras tinggi, siluet gelap `#64748b` di atas lingkaran `#e2e8f0`).

### C. Kartu 3: Referensi Pustaka
- **Judul:** Referensi Pustaka
- **Meta/Sub-judul:** Daftar Rujukan Teoretis dan Praktis
- **Isi Kartu:**
  - Setiap rujukan disajikan sebagai baris item minimalis (`.referensi-item`) dengan latar abu-abu pudar `var(--color-bg-alt)` dan border-radius halus `var(--radius-sm)`.

---

## 3. Rencana CSS (`pages.css`)
- Properti warna latar belakang `.profile-header` transparan (`transparent`).
- Heading kartu `.profile-header h2` dan `.profile-header h3` menggunakan `font-size: var(--text-xl)` (20-24px) untuk proporsi yang kuat.
- Container `.dev-avatar` menggunakan warna latar belakang Slate-200 (`#e2e8f0`) dengan `overflow: hidden` dan `position: relative`.
- Siluet SVG di dalam `.dev-avatar` menggunakan warna Slate-500 (`#64748b`).
