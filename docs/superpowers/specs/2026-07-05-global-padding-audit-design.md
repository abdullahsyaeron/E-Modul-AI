# Spec Desain: Audit & Standarisasi Global Padding E-Modul AI (Opsi C - Adaptive Responsive)

**Tanggal:** 2026-07-05  
**Tujuan:** Standarisasi menyeluruh terhadap jarak bantalan (*padding*) dari teks ke garis batas (*border line*) pada seluruh kontainer, kotak sorotan (*callout*), kutipan, kartu rangkuman/refleksi, tabel, dan mesin kuis di E-Modul AI menggunakan standar **Apple HIG (Human Interface Guidelines)** dengan arsitektur **Adaptive Responsive Padding (Opsi C)**.

---

## 1. Latar Belakang & Akar Masalah

Berdasarkan audit visual dan analisis kode sumber pada `assets/css/components.css` baris 920–927, ditemukan bahwa kelas kontainer utama seperti `.highlight-box` dan `blockquote` memiliki lengkungan sudut yang besar (`border-radius: 20px`) dan garis batas kiri yang tebal (`border-left: 4px solid ...`), namun **tidak memiliki aturan properti `padding` horizontal yang didefinisikan secara eksplisit**.

Akibatnya, elemen teks (`<p>`) dan ikon (`<i>`) di dalamnya menempel langsung pada tepi batas box. Ketika lengkungan *border-radius* digambar oleh peramban, garis border tersebut memotong masuk ke dalam area teks, menyebabkan tampilan visual yang terlalu mepet, sesak (*crowded*), dan menurunkan ergonomi membaca.

---

## 2. Arsitektur Adaptive Responsive Padding (Opsi C)

Desain ini menerapkan filosofi **"Mewah di Desktop, Ringkas di Mobile"** untuk memberikan ruang napas (*breathing room*) maksimal tanpa membuang ruang vertikal pada layar ponsel yang terbatas.

### A. Standar Resolusi Desktop & Tablet (`width >= 768px`)
Pada resolusi layar besar, kita memberikan *internal padding* berstandar Apple HIG yang luas, memberi kesan *depth* dan kenyamanan visual tingkat tinggi:

1. **Kotak Sorotan (`.content-body .highlight-box`) & Kutipan (`.content-body blockquote`)**
   - **Padding:** `24px 28px` (`1.5rem 1.75rem`).
   - **Spasi Judul ke Isi:** Jarak bawah (*margin-bottom*) pada wadah judul/ikon adalah `12px` (`0.75rem`).
   - **Daftar Bersusun (`<ul>`, `<ol>`):** `padding-left: 24px` (`1.5rem`) agar *bullet point* atau nomor tidak menabrak garis batas kiri.

2. **Kartu Rangkuman & Refleksi (`.profile-card` di akhir bab materi)**
   - **Padding Header:** `18px 28px` (`1.125rem 1.75rem`).
   - **Padding Body/Konten:** `28px 32px` (`1.75rem 2rem`).

3. **Mesin Kuis Interaktif (`.quiz-container`, `.quiz-question`, `.quiz-pembahasan`, `.quiz-result`)**
   - **Padding Kotak Pertanyaan:** `24px 28px`.
   - **Padding Kotak Pembahasan & Hasil:** `24px 28px`.
   - **Padding Opsi Jawaban (`.quiz-option`):** `16px 20px` (meningkatkan area sentuh / *hit target*).

4. **Tabel Materi (`.content-body table th`, `.content-body table td`)**
   - **Padding Sel:** `16px 20px` (`1rem 1.25rem`).

---

### B. Standar Resolusi Mobile (`width < 768px` via `@media (max-width: 768px)`)
Pada layar ponsel, padding secara otomatis menyusut (*scale down*) sekitar 30-40% agar informasi tetap rapi namun hemat ruang layar:

1. **Kotak Sorotan & Kutipan:**
   - **Padding:** `16px 20px` (`1rem 1.25rem`).
   - **Daftar Bersusun:** `padding-left: 20px` (`1.25rem`).

2. **Kartu Rangkuman & Refleksi:**
   - **Padding Header:** `14px 20px`.
   - **Padding Body/Konten:** `20px 24px` (`1.25rem 1.5rem`).

3. **Mesin Kuis Interaktif:**
   - **Padding Kotak Pertanyaan & Pembahasan:** `16px 20px`.
   - **Padding Opsi Jawaban:** `14px 16px`.

4. **Tabel Materi:**
   - **Padding Sel:** `12px 14px`.

---

## 3. Aturan Ergonomi Tambahan (*Micro-Spacing Rules*)

Untuk mencegah ketimpangan spasi vertikal (*double margin/padding*) di dalam kontainer tertutup, aturan berikut akan diterapkan pada CSS:

- **Penataan Paragraf Pertama & Terakhir:**
  ```css
  .content-body .highlight-box > p:first-of-type,
  .content-body blockquote > p:first-of-type {
    margin-top: 0;
  }
  .content-body .highlight-box > p:last-of-type,
  .content-body blockquote > p:last-of-type {
    margin-bottom: 0;
  }
  ```
- **Penataan Indentasi Daftar Bersusun:** Memastikan setiap elemen `<li>` memiliki jarak antar-baris `0.5rem` (`8px`) agar mudah discan oleh mata.

---

## 4. Rencana File yang Diubah (*Target Files*)

1. **`assets/css/components.css`**
   - Memodifikasi blok aturan pada baris 920–927 dengan menambahkan properti padding berstandar Opsi C.
   - Menambahkan aturan *micro-spacing* untuk elemen `<p>`, `<ul>`, dan `<ol>` di dalam `.highlight-box` dan `blockquote`.
   - Menyetel padding pada tabel (`th`, `td`).
   - Menambahkan *override query responsive* pada blok `@media (max-width: 768px)`.

2. **`assets/css/pages.css`**
   - Memperbarui padding pada `.profile-card`, `.profile-header`, `.quiz-container`, `.quiz-question`, `.quiz-option`, `.quiz-pembahasan`, dan `.quiz-result` agar konsisten dengan token Adaptive Responsive.

3. **`materi-bab3.html` & `materi-bab4.html` (serta bab lainnya bila diperlukan)**
   - Membersihkan *inline style padding* yang berpotensi menimpa (*override*) aturan kelas responsif CSS yang baru dibuat, sehingga seluruh kontainer tunduk pada sistem standar Apple HIG yang harmonis.

---

## 5. Rencana Verifikasi & Pengujian (*Verification Plan*)

1. **Inspeksi Visual Resolusi Multi-Device:**
   - Memeriksa tampilan di Desktop (`1440px`), Tablet (`768px`), dan Mobile (`375px`).
2. **Audit Khusus Kotak Kritis:**
   - Memastikan kotak "Pertanyaan Pemantik", "Catatan Penting", dan "Perhatian Etis" di `materi-bab3.html` dan `materi-bab4.html` memiliki jarak bantalan yang lega dari garis border kiri maupun lengkungan sudut *border-radius*.
3. **Audit Mesin Kuis & Rangkuman:**
   - Memastikan kotak kuis interaktif di akhir setiap bab tidak mengalami pergeseran tata letak yang merusak fungsionalitas klik opsi jawaban.
