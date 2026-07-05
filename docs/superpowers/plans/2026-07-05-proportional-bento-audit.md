# Implementation Plan: Proportional Bento Matrix Audit (Eksplorasi E-Modul)

**Tanggal:** 2026-07-05  
**Base Commit:** `37a3e92`  

## Goal
Audit dan perbaikan menyeluruh terhadap proporsi tata letak (*layout proportion*) pada area **Eksplorasi E-Modul** di `index.html` dan `pages.css`. Mengatasi masalah tinggi vertikal yang berlebihan, lebar kartu yang terlalu sempit, serta tabrakan tombol (*border collision*) dengan menghapus *sublabel* redundan di footer kartu sesuai instruksi pengguna.

## Plan
1. **Task 1: Hapus Sublabel Redundan & Update Versi CSS di `index.html`**
   - Files: `index.html`
   - Change: Hapus `<span class="card-sublabel">` pada 4 kartu dan ubah versi CSS menjadi `v=staggeredbento2`.
   - Verify: `grep_search` pada `index.html` untuk memastikan sublabel sudah bersih namun judul modul utama utuh 100%.
2. **Task 2: Implementasi Proporsi Bento & Resolusi Tabrakan di `pages.css`**
   - Files: `assets/css/pages.css`
   - Change: Terapkan padding baru pada `.eksplorasi-hero-box`, `.staggered-bento-grid`, `.quick-card`, dan `.card-pill-btn`.
   - Verify: `grep_search` pada `pages.css` untuk memeriksa nilai padding `20px` dan `min-height: 240px`.
3. **Task 3: Verifikasi Responsif & Walkthrough Laporan Akhir**
   - Files: `walkthrough.md`
   - Change: Buat laporan akhir pembuktian proporsi visual baru.

## Risks & Mitigations
- **Risiko:** Pada layar laptop resolusi menengah (misal 1024px - 1100px), tombol yang teksnya panjang seperti "Baca Selengkapnya ->" bisa terasa padat.
- **Mitigasi:** Penggunaan `padding: 10px 18px`, `font-size: 0.88rem`, dan penghapusan sublabel memberikan ruang hingga >200px, sangat lega untuk tombol tersebut.

## Rollback Plan
- Jika diperlukan, jalankan `git restore index.html assets/css/pages.css` untuk mengembalikan ke commit `37a3e92`.
