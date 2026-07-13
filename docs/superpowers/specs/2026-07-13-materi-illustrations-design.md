# Spesifikasi Desain: Ilustrasi & Diagram Konsep E-Modul AI

Dokumen ini mendokumentasikan spesifikasi desain visual untuk penambahan 5 diagram konsep (berformat SVG inline) dan 4 ilustrasi realistis (berformat PNG) ke dalam materi pembelajaran E-Modul AI (Bab 1 s.d. Bab 5) secara lokal (localhost).

---

## 1. Kerangka CSS Baru (Styling & Kontainer)

Semua ilustrasi dan diagram baru akan menggunakan aturan CSS standar untuk menjamin responsivitas penuh, efek hover lembut ala Apple HIG, serta keterbacaan keterangan gambar (caption) ilmiah.

### Penambahan di [pages.css](file:///d:/APPS/xampp/htdocs/E-Modul%20Skripsi/assets/css/pages.css)

```css
/* ============================================================
   KONTEN ILUSTRASI & DIAGRAM
   ============================================================ */
.illustration-container {
  background: var(--color-surface);
  border: 1px solid var(--color-border-soft);
  border-radius: var(--radius-md);
  padding: var(--space-6);
  margin: var(--space-8) 0;
  box-shadow: var(--shadow-sm);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-4);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.illustration-container:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}

/* Responsivitas Diagram SVG */
.illustration-svg {
  width: 100%;
  max-width: 680px;
  height: auto;
  display: block;
}

/* Responsivitas Gambar PNG */
.illustration-img {
  width: 100%;
  max-width: 680px;
  height: auto;
  border-radius: var(--radius-sm);
  object-fit: cover;
  border: 1px solid var(--color-border-soft);
}

/* Teks Keterangan (Caption) Ilmiah */
.illustration-caption {
  font-size: var(--text-xs);
  color: var(--color-text-muted);
  text-align: center;
  font-style: italic;
  margin-top: var(--space-2);
  line-height: 1.4;
}
```

---

## 2. Spesifikasi Diagram Konsep SVG (Inline HTML)

Setiap diagram akan ditulis langsung menggunakan tag `<svg>` untuk mempertahankan ketajaman resolusi tinggi, integrasi warna dinamis, dan aksesibilitas ramah pembaca layar (screen reader).

### A. BAB 1: Gambar 1.1 Diagram Urgensi Pemanfaatan AI bagi Guru
* **Target File**: [materi-bab1.html](file:///d:/APPS/xampp/htdocs/E-Modul%20Skripsi/materi-bab1.html)
* **Penempatan**: Di bawah paragraf pertama di bawah heading `h2 id="sub3"`.
* **Deskripsi Visual**: 
  * Layout bento terpisah dua kolom.
  * Kolom kiri: Kotak latar belakang merah pudar (`rgba(179,38,30,0.06)`) bertuliskan "Hambatan Guru" (Waktu terbatas, Keahlian teknis desain kurang, Kebutuhan kontekstualisasi nilai sekolah).
  * Kolom kanan: Kotak latar belakang biru pudar (`rgba(0,102,204,0.06)`) bertuliskan "Solusi AI Generatif" (Drafting cepat, Template estetis otomatis, Konten terkontekstualisasi lewat meta-prompt).
  * Menampilkan panah alur dari Hambatan ke Solusi dengan label pusat "Kolaborasi Guru & AI".

### B. BAB 2: Gambar 2.1 Alur Siklus Kerja Generative AI & Interaksi Guru
* **Target File**: [materi-bab2.html](file:///d:/APPS/xampp/htdocs/E-Modul%20Skripsi/materi-bab2.html)
* **Penempatan**: Di bawah paragraf kedua di bawah heading `h2 id="sub2"`.
* **Deskripsi Visual**:
  * Alur sirkular berisi 4 simpul utama: 
    1. Input Prompt (Pedagogical Intent)
    2. Eksekusi AI Generator (Draf Awal)
    3. Evaluasi & Kurasi (Oleh Guru)
    4. Modifikasi Manual / Hasil Final
  * Terdapat anak panah melingkar dari langkah 3 kembali ke langkah 1 untuk menunjukkan proses *Prompt Refinement*.

### C. BAB 3: Gambar 3.1 Siklus Alur Penggunaan AI yang Etis & Bertanggung Jawab
* **Target File**: [materi-bab3.html](file:///d:/APPS/xampp/htdocs/E-Modul%20Skripsi/materi-bab3.html)
* **Penempatan**: Di bawah paragraf pertama di bawah heading `h2 id="sub5"`.
* **Deskripsi Visual**:
  * Tiga lingkaran besar bertautan (Fase Perencanaan, Fase Produksi, Fase Evaluasi/Diseminasi).
  * Masing-masing lingkaran memiliki warna gradasi pastel tersendiri dan memuat teks kriteria etika utama (seperti atribusi karya AI, validasi bias, kepatuhan hak cipta).

### D. BAB 4: Gambar 4.1 Skema Hierarki Model Konseptual MAP-AI
* **Target File**: [materi-bab4.html](file:///d:/APPS/xampp/htdocs/E-Modul%20Skripsi/materi-bab4.html)
* **Penempatan**: Di bawah paragraf pertama di bawah heading `h2 id="sub3"`.
* **Deskripsi Visual**:
  * Diagram piramida 5 tingkat bertumpuk.
  * Tingkat 1 (Paling bawah): **Tujuan Pembelajaran** (Pedagogical Intent).
  * Tingkat 2: **Meta-Prompting** (Perancangan instruksi ChatGPT).
  * Tingkat 3: **Prompt Chaining** (Struktur Rantai Instruksi Modular).
  * Tingkat 4: **Eksekusi Platform** (Canva, Gamma, Google Vids, Quizizz).
  * Tingkat 5 (Puncak): **Integrasi Media & Evaluasi Belajar**.

### E. BAB 5: Gambar 5.1 Matriks 8 Dimensi Evaluasi Kelayakan Media AI
* **Target File**: [materi-bab5.html](file:///d:/APPS/xampp/htdocs/E-Modul%20Skripsi/materi-bab5.html)
* **Penempatan**: Di bawah paragraf pertama di bawah heading `h2 id="sub1"`.
* **Deskripsi Visual**:
  * Matriks grid 2x4 yang bersih dengan ikon-ikon representatif untuk 8 Dimensi: Kelayakan Isi, Desain Visual, Pedagogik, Keterbacaan, Relevansi Nilai, Akurasi Konten, Aksesibilitas, dan Tanggung Jawab Etis.

---

## 3. Spesifikasi Ilustrasi PNG Realistis

Untuk memberikan visualisasi kontekstual nyata dalam ekosistem pendidikan Indonesia, 4 file PNG akan ditambahkan.

### A. Gambar 1.2: Guru Indonesia Merancang Media Pembelajaran Berbantuan AI
* **Target File**: [materi-bab1.html](file:///d:/APPS/xampp/htdocs/E-Modul%20Skripsi/materi-bab1.html)
* **Penempatan**: Di bawah teks penutup sub-bab C (sebelum sub-bab D).
* **Konsep Prompt AI**:
  > "A highly realistic photo of a middle-aged Indonesian female high school teacher, smiling warmly, wearing a neat traditional blue batik teacher uniform. She is sitting at her clean wooden desk in a bright classroom, working on a modern laptop. The background shows a white board with simple, clean educational diagrams. Warm daylight, shot on DSLR, highly detailed, realistic skin texture, professional photo --ar 16:9"
* **Nama Berkas**: `guru-merancang-media.png`
* **Path Tujuan**: `assets/images/materi/guru-merancang-media.png`

### B. Gambar 3.2: Pengawasan Etis Guru Terhadap Penggunaan Media oleh Siswa
* **Target File**: [materi-bab3.html](file:///d:/APPS/xampp/htdocs/E-Modul%20Skripsi/materi-bab3.html)
* **Penempatan**: Di bawah sub-bab **F. Studi Kasus Singkat** (setelah Kasus Bu Hasna).
* **Konsep Prompt AI**:
  > "A realistic documentary photo of a friendly Indonesian female teacher standing beside two Indonesian junior high school students (a boy and a girl wearing neat white and blue uniforms) in a clean, modern school library. They are looking at a tablet screen together, smiling naturally. Warm ambient lighting, highly realistic details, shot on 35mm lens, authentic classroom interaction --ar 16:9"
* **Nama Berkas**: `pengawasan-etis-siswa.png`
* **Path Tujuan**: `assets/images/materi/pengawasan-etis-siswa.png`

### C. Gambar 4.2: Mockup Hasil Cetak Poster Fotosintesis Berbantuan Canva AI
* **Target File**: [materi-bab4.html](file:///d:/APPS/xampp/htdocs/E-Modul%20Skripsi/materi-bab4.html)
* **Penempatan**: Di bawah bagian **Canva (Media Poster)** pada sub-bab E.
* **Konsep Prompt AI**:
  > "A professional photo of a clean educational poster about 'Fotosintesis' (Photosynthesis process) framed neatly on a light classroom wall. The poster has clean vector diagrams of a green plant, sun, and water, with readable indonesian text. Natural classroom background with wooden desks and warm lighting, soft depth of field, high-end mockup --ar 16:9"
* **Nama Berkas**: `mockup-poster-fotosintesis.png`
* **Path Tujuan**: `assets/images/materi/mockup-poster-fotosintesis.png`

### D. Gambar 5.2: Diskusi Dewan Guru dalam Evaluasi Kelayakan Media AI
* **Target File**: [materi-bab5.html](file:///d:/APPS/xampp/htdocs/E-Modul%20Skripsi/materi-bab5.html)
* **Penempatan**: Di bawah sub-bab **E. Rencana Tindak Lanjut** (sebelum Rangkuman).
* **Konsep Prompt AI**:
  > "A realistic group photo of three Indonesian high school teachers (two women and one man, wearing neat PGRI batik and khaki uniforms) sitting around a table in a bright staff room, looking at a laptop screen together and discussing, smiling and pointing at the screen. Rubric paper worksheets are on the table. Professional lighting, highly detailed, realistic skin textures, shot on DSLR --ar 16:9"
* **Nama Berkas**: `diskusi-evaluasi-guru.png`
* **Path Tujuan**: `assets/images/materi/diskusi-evaluasi-guru.png`

---

## 4. Rencana Validasi Desain

1. **Uji Validitas SVG**:
   * Memastikan dokumen HTML termuat tanpa error XML parser.
   * Melakukan pengujian responsivitas pada lebar viewport desktop (>1200px), tablet (768px - 1024px), dan mobile (<480px).
2. **Kualitas Gambar PNG**:
   * Melakukan kurasi terhadap gambar hasil generate agar 100% bebas dari cacat AI (tangan/jemari cacat, detail mata asimetris, distorsi objek latar).
   * Memastikan resolusi minimal gambar adalah 1400x700px (16:9 ratio).
