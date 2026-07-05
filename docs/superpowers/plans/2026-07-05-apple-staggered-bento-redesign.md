# Implementation Plan: Apple HIG Staggered Bento Board Redesign (Eksplorasi E-Modul)

**Tanggal:** 2026-07-05  
**Spec Referensi:** `docs/superpowers/specs/2026-07-05-apple-staggered-bento-design.md`  

## Goal
Transform the static 2x2 grid in `index.html` (Eksplorasi E-Modul section) into an Apple HIG Staggered Bento Board 1x4 inside a sleek Apple Blue rounded hero banner (`#007AFF`, `border-radius: 32px`). This implements an organic wave rhythm (`translateY(0)` vs `translateY(24px)`) without decorative skeuomorphic paperclips, maintaining pure Apple Sleek Glass minimalism.

## Plan
1. **Task 1: Update Struktur HTML Eksplorasi E-Modul di `index.html`**
   - Files: `index.html`
   - Change: Tambahkan wrapper `.eksplorasi-hero-box` dan ubah kelas grid menjadi `.staggered-bento-grid`.
   - Verify: `grep_search` pada `index.html` untuk memastikan kelas baru terpasang dan teks judul modul tetap utuh.
2. **Task 2: Implementasi Gaya CSS Staggered Bento & Hero Box di `pages.css`**
   - Files: `assets/css/pages.css`
   - Change: Tambahkan styling `.eksplorasi-hero-box`, `.staggered-bento-grid`, aturan *vertical offset* (`translateY(24px)`), hover elevation, dan responsive queries.
   - Verify: `grep_search` pada `pages.css` untuk memeriksa sintaks grid dan properti transform.
3. **Task 3: Final Code Review & Walkthrough**
   - Files: `walkthrough.md`
   - Change: Buat laporan akhir dan verifikasi visual pada seluruh breakpoint.

## Risks & Mitigations
- **Risiko:** Kartu ke-2 dan ke-4 yang turun 24px dapat menabrak atau terpotong oleh batas bawah kontainer biru jika overflow hidden aktif atau padding kurang.
- **Mitigasi:** Kurasikan `padding-bottom: 40px` pada grid dan pastikan ruang dalam `.eksplorasi-hero-box` sangat lega.

## Rollback Plan
- Jika terjadi masalah layout, jalankan `git restore index.html assets/css/pages.css` untuk mengembalikan ke commit `dc549cc`.
