# Rencana Implementasi Penambahan Ilustrasi & Diagram E-Modul AI (Localhost)

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Menambahkan 5 diagram konsep interaktif berbasis SVG inline dan 4 gambar realistis berbasis PNG ke dalam halaman bab materi e-modul secara lokal, lengkap dengan styling CSS pendukung dan penulisan keterangan gambar (caption) ilmiah.

**Architecture:** 
1. **CSS styling**: Membuat kontainer ilustrasi responsif (`.illustration-container`), penataan gambar (`.illustration-img`), dan penataan bagan SVG (`.illustration-svg`) beserta caption teks (`.illustration-caption`) di `pages.css`.
2. **Inline SVG**: Menuliskan kode SVG terstruktur secara inline di berkas HTML bab materi untuk memaksimalkan ketajaman teks, aksesibilitas, dan skalabilitas.
3. **PNG Generation**: Menghasilkan 4 gambar realistis menggunakan tool `generate_image` sesuai prompt spec, menyimpannya di `assets/images/materi/`, dan menampilkannya menggunakan tag `<img>` di HTML.

**Tech Stack:** HTML5, CSS3, Inline SVG, PNG Images.

## Global Constraints
- Seluruh teks dalam diagram SVG harus menggunakan bahasa Indonesia baku sesuai konten materi.
- Teks di dalam SVG harus menggunakan font-family `var(--font-body)` (Inter) atau `var(--font-heading)` (Outfit).
- Gambar PNG tidak boleh memiliki cacat AI (distorsi jemari, tulisan latar rusak, mata asimetris).
- Responsivitas harus dijaga penuh menggunakan `viewBox` pada SVG dan `max-width: 100%` pada gambar.
- Tidak boleh menggunakan placeholder (misal: "TODO", "TBD"). Semua kode dan prompt wajib lengkap.

---

### Task 1: Infrastruktur CSS & Persiapan Lingkungan

**Files:**
- Modify: `assets/css/pages.css:2520-2541` (Tambahkan kelas di akhir file)

**Interfaces:**
- Produces: Aturan CSS `.illustration-container`, `.illustration-svg`, `.illustration-img`, dan `.illustration-caption` yang dikonsumsi oleh berkas HTML bab.

- [ ] **Step 1: Tambahkan aturan CSS baru di akhir berkas pages.css**

Buka [pages.css](file:///d:/APPS/xampp/htdocs/E-Modul%20Skripsi/assets/css/pages.css) dan tambahkan kode berikut di baris paling bawah:

```css
/* ============================================================
   KONTEN ILUSTRASI & DIAGRAM KONSEP
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

.illustration-svg {
  width: 100%;
  max-width: 680px;
  height: auto;
  display: block;
}

.illustration-img {
  width: 100%;
  max-width: 680px;
  height: auto;
  border-radius: var(--radius-sm);
  object-fit: cover;
  border: 1px solid var(--color-border-soft);
}

.illustration-caption {
  font-size: var(--text-xs);
  color: var(--color-text-muted);
  text-align: center;
  font-style: italic;
  margin-top: var(--space-2);
  line-height: 1.4;
  max-width: 600px;
}
```

- [ ] **Step 2: Verifikasi CSS**

Buka e-modul di browser (`http://localhost/E-Modul Skripsi/index.html`) dan periksa Developer Tools (F12) Console untuk memastikan tidak ada error pemuatan stylesheet `pages.css`.

- [ ] **Step 3: Commit perubahan CSS**

```bash
git add assets/css/pages.css
git commit -m "style(materi): tambah kelas kontainer ilustrasi dan diagram responsif"
```

---

### Task 2: Integrasi Diagram SVG Bab 1 & Bab 2

**Files:**
- Modify: `materi-bab1.html:184-188`
- Modify: `materi-bab2.html:180-184`

**Interfaces:**
- Consumes: Aturan CSS dari Task 1.
- Produces: Diagram Gambar 1.1 di Bab 1 dan Gambar 2.1 di Bab 2.

- [ ] **Step 1: Sisipkan SVG Gambar 1.1 pada materi-bab1.html**

Buka [materi-bab1.html](file:///d:/APPS/xampp/htdocs/E-Modul%20Skripsi/materi-bab1.html) dan cari baris di bawah heading `h2 id="sub3"` (Urgensi Pemanfaatan AI bagi Guru). Sisipkan kode berikut setelah paragraf pertama (di atas paragraf yang dimulai dengan "Hasil survei..."):

```html
                <div class="illustration-container">
                    <svg class="illustration-svg" viewBox="0 0 800 240" xmlns="http://www.w3.org/2000/svg">
                        <!-- Background panel kiri: Hambatan -->
                        <rect x="10" y="10" width="340" height="220" rx="14" fill="#fff5f5" stroke="#fecaca" stroke-width="1.5"/>
                        <text x="30" y="45" font-family="Outfit, sans-serif" font-size="18" font-weight="bold" fill="#b3261e">Hambatan Guru (Konvensional)</text>
                        <circle cx="45" cy="90" r="4" fill="#b3261e"/>
                        <text x="60" y="95" font-family="Inter, sans-serif" font-size="14" fill="#4b5563">Keterbatasan Waktu Administrasi & Mengajar</text>
                        <circle cx="45" cy="130" r="4" fill="#b3261e"/>
                        <text x="60" y="135" font-family="Inter, sans-serif" font-size="14" fill="#4b5563">Keterbatasan Keahlian Teknis & Desain</text>
                        <circle cx="45" cy="170" r="4" fill="#b3261e"/>
                        <text x="60" y="175" font-family="Inter, sans-serif" font-size="14" fill="#4b5563">Tuntutan Kontekstualisasi Nilai/Budaya Lokal</text>
                        
                        <!-- Panah Tengah -->
                        <path d="M370 120 H430 M420 110 L430 120 L420 130" stroke="#0066cc" stroke-width="3" fill="none" stroke-linecap="round"/>
                        <rect x="365" y="85" width="70" height="22" rx="6" fill="#e0f2fe" />
                        <text x="400" y="100" font-family="Inter, sans-serif" font-size="10" font-weight="bold" fill="#0066cc" text-anchor="middle">Sinergi AI</text>

                        <!-- Background panel kanan: Solusi -->
                        <rect x="450" y="10" width="340" height="220" rx="14" fill="#f0fdf4" stroke="#bbf7d0" stroke-width="1.5"/>
                        <text x="470" y="45" font-family="Outfit, sans-serif" font-size="18" font-weight="bold" fill="#247a3d">Solusi Berbantuan AI</text>
                        <circle cx="485" cy="90" r="4" fill="#247a3d"/>
                        <text x="500" y="95" font-family="Inter, sans-serif" font-size="14" fill="#4b5563">Drafting Cepat Rencana & Materi Belajar</text>
                        <circle cx="485" cy="130" r="4" fill="#247a3d"/>
                        <text x="500" y="135" font-family="Inter, sans-serif" font-size="14" fill="#4b5563">Otomatisasi Struktur Desain Media (Canva/Gamma)</text>
                        <circle cx="485" cy="170" r="4" fill="#247a3d"/>
                        <text x="500" y="175" font-family="Inter, sans-serif" font-size="14" fill="#4b5563">Adaptasi Konten Sesuai Karakteristik Siswa</text>
                    </svg>
                    <div class="illustration-caption">Gambar 1.1: Diagram Analisis Hambatan Kerja Guru vs Solusi Efisiensi Berbantuan AI</div>
                </div>
```

- [ ] **Step 2: Sisipkan SVG Gambar 2.1 pada materi-bab2.html**

Buka [materi-bab2.html](file:///d:/APPS/xampp/htdocs/E-Modul%20Skripsi/materi-bab2.html) dan cari heading `h2 id="sub2"` (Konsep dan Karakteristik Generative AI). Sisipkan kode berikut setelah paragraf kedua (di atas paragraf yang dimulai dengan "Dalam konteks modul ini..."):

```html
                <div class="illustration-container">
                    <svg class="illustration-svg" viewBox="0 0 800 220" xmlns="http://www.w3.org/2000/svg">
                        <!-- Step 1: Input -->
                        <rect x="10" y="60" width="160" height="80" rx="10" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
                        <text x="90" y="95" font-family="Outfit, sans-serif" font-size="14" font-weight="bold" fill="#1e293b" text-anchor="middle">1. Input Prompt</text>
                        <text x="90" y="115" font-family="Inter, sans-serif" font-size="11" fill="#64748b" text-anchor="middle">(Niat Pedagogis Guru)</text>
                        
                        <path d="M170 100 H210 M200 95 L210 100 L200 105" stroke="#94a3b8" stroke-width="2" fill="none"/>

                        <!-- Step 2: Generasi -->
                        <rect x="210" y="60" width="160" height="80" rx="10" fill="#e0f2fe" stroke="#0066cc" stroke-width="1.5"/>
                        <text x="290" y="95" font-family="Outfit, sans-serif" font-size="14" font-weight="bold" fill="#0369a1" text-anchor="middle">2. Eksekusi AI</text>
                        <text x="290" y="115" font-family="Inter, sans-serif" font-size="11" fill="#0284c7" text-anchor="middle">(Proses Generasi Draf)</text>

                        <path d="M370 100 H410 M400 95 L410 100 L400 105" stroke="#94a3b8" stroke-width="2" fill="none"/>

                        <!-- Step 3: Evaluasi -->
                        <rect x="410" y="60" width="160" height="80" rx="10" fill="#fef3c7" stroke="#d97706" stroke-width="1.5"/>
                        <text x="490" y="95" font-family="Outfit, sans-serif" font-size="14" font-weight="bold" fill="#b45309" text-anchor="middle">3. Evaluasi & Kurasi</text>
                        <text x="490" y="115" font-family="Inter, sans-serif" font-size="11" fill="#d97706" text-anchor="middle">(Supervisis & Edit Guru)</text>

                        <path d="M570 100 H610 M600 95 L610 100 L600 105" stroke="#94a3b8" stroke-width="2" fill="none"/>

                        <!-- Step 4: Final -->
                        <rect x="610" y="60" width="180" height="80" rx="10" fill="#f0fdf4" stroke="#247a3d" stroke-width="1.5"/>
                        <text x="700" y="95" font-family="Outfit, sans-serif" font-size="14" font-weight="bold" fill="#15803d" text-anchor="middle">4. Hasil Final</text>
                        <text x="700" y="115" font-family="Inter, sans-serif" font-size="11" fill="#16a34a" text-anchor="middle">(Media Terkontekstualisasi)</text>

                        <!-- Loop balik Umpan Balik -->
                        <path d="M490 60 V20 H90 V60" fill="none" stroke="#d97706" stroke-dasharray="4,4" stroke-width="1.5"/>
                        <text x="290" y="15" font-family="Inter, sans-serif" font-size="10" fill="#d97706" text-anchor="middle">Re-prompting / Perbaikan Prompt</text>
                    </svg>
                    <div class="illustration-caption">Gambar 2.1: Skema Alur Kerja Iteratif Antara Prompting Guru, Generasi AI, dan Kurasi Pedagogis</div>
                </div>
```

- [ ] **Step 3: Verifikasi Tampilan Bab 1 & 2**

Buka `http://localhost/E-Modul Skripsi/materi-bab1.html` dan `materi-bab2.html` di browser. Pastikan diagram SVG termuat dengan benar, teks terbaca jelas, dan tidak ada elemen yang melimpah (overflow).

- [ ] **Step 4: Commit Bab 1 & Bab 2**

```bash
git add materi-bab1.html materi-bab2.html
git commit -m "feat(materi): integrasi diagram konsep SVG Gambar 1.1 dan Gambar 2.1"
```

---

### Task 3: Integrasi Diagram SVG Bab 3, Bab 4, & Bab 5

**Files:**
- Modify: `materi-bab3.html:310-314`
- Modify: `materi-bab4.html:237-241`
- Modify: `materi-bab5.html:150-154`

**Interfaces:**
- Consumes: Aturan CSS dari Task 1.
- Produces: Diagram Gambar 3.1 di Bab 3, Gambar 4.1 di Bab 4, dan Gambar 5.1 di Bab 5.

- [ ] **Step 1: Sisipkan SVG Gambar 3.1 pada materi-bab3.html**

Buka [materi-bab3.html](file:///d:/APPS/xampp/htdocs/E-Modul%20Skripsi/materi-bab3.html) dan cari heading `h2 id="sub5"` (Pedoman Praktis Penggunaan AI yang Etis dan Bertanggung Jawab). Sisipkan kode berikut di bawah paragraf pertama (di atas tabel):

```html
                <div class="illustration-container">
                    <svg class="illustration-svg" viewBox="0 0 800 240" xmlns="http://www.w3.org/2000/svg">
                        <!-- Lingkaran 1: Perencanaan -->
                        <circle cx="160" cy="120" r="90" fill="#f0fdfa" stroke="#0d9488" stroke-width="1.5" opacity="0.9"/>
                        <text x="160" y="85" font-family="Outfit, sans-serif" font-size="15" font-weight="bold" fill="#0f766e" text-anchor="middle">1. Perencanaan</text>
                        <text x="160" y="110" font-family="Inter, sans-serif" font-size="11" fill="#115e59" text-anchor="middle">Analisis Relevansi Nilai</text>
                        <text x="160" y="130" font-family="Inter, sans-serif" font-size="11" fill="#115e59" text-anchor="middle">Tujuan Pembelajaran Real</text>
                        <text x="160" y="150" font-family="Inter, sans-serif" font-size="11" fill="#115e59" text-anchor="middle">Tanpa Mengambil Karya Orang</text>

                        <!-- Lingkaran 2: Produksi -->
                        <circle cx="400" cy="120" r="90" fill="#eff6ff" stroke="#2563eb" stroke-width="1.5" opacity="0.9"/>
                        <text x="400" y="85" font-family="Outfit, sans-serif" font-size="15" font-weight="bold" fill="#1d4ed8" text-anchor="middle">2. Produksi</text>
                        <text x="400" y="110" font-family="Inter, sans-serif" font-size="11" fill="#1e40af" text-anchor="middle">Validasi Bias & Stereotip</text>
                        <text x="400" y="130" font-family="Inter, sans-serif" font-size="11" fill="#1e40af" text-anchor="middle">Atribusi Kredit Konten AI</text>
                        <text x="400" y="150" font-family="Inter, sans-serif" font-size="11" fill="#1e40af" text-anchor="middle">Privasi Data Siswa Aman</text>

                        <!-- Lingkaran 3: Diseminasi -->
                        <circle cx="640" cy="120" r="90" fill="#fcf7ff" stroke="#7c3aed" stroke-width="1.5" opacity="0.9"/>
                        <text x="640" y="85" font-family="Outfit, sans-serif" font-size="15" font-weight="bold" fill="#6d28d9" text-anchor="middle">3. Evaluasi & Diseminasi</text>
                        <text x="640" y="110" font-family="Inter, sans-serif" font-size="11" fill="#5b21b6" text-anchor="middle">Uji Akurasi Bebas Halusinasi</text>
                        <text x="640" y="130" font-family="Inter, sans-serif" font-size="11" fill="#5b21b6" text-anchor="middle">Kelayakan Teknis & Pedagogik</text>
                        <text x="640" y="150" font-family="Inter, sans-serif" font-size="11" fill="#5b21b6" text-anchor="middle">Umpan Balik Guru & Siswa</text>
                    </svg>
                    <div class="illustration-caption">Gambar 3.1: Siklus 3 Fase Alur Penggunaan AI yang Etis dalam Siklus Hidup Media Pembelajaran</div>
                </div>
```

- [ ] **Step 2: Sisipkan SVG Gambar 4.1 pada materi-bab4.html**

Buka [materi-bab4.html](file:///d:/APPS/xampp/htdocs/E-Modul%20Skripsi/materi-bab4.html) dan cari heading `h2 id="sub3"` (Model Konseptual MAP-AI). Sisipkan kode berikut setelah paragraf pertama (di atas sub-heading atau tabel):

```html
                <div class="illustration-container">
                    <svg class="illustration-svg" viewBox="0 0 800 340" xmlns="http://www.w3.org/2000/svg">
                        <!-- Level 5: Puncak -->
                        <polygon points="400,20 280,100 520,100" fill="#dbeafe" stroke="#1d4ed8" stroke-width="1.5"/>
                        <text x="400" y="75" font-family="Outfit, sans-serif" font-size="13" font-weight="bold" fill="#1e40af" text-anchor="middle">5. INTEGRASI & EVALUASI</text>
                        
                        <!-- Level 4 -->
                        <polygon points="280,100 220,160 580,160 520,100" fill="#bfdbfe" stroke="#1d4ed8" stroke-width="1.5"/>
                        <text x="400" y="135" font-family="Outfit, sans-serif" font-size="13" font-weight="bold" fill="#1e40af" text-anchor="middle">4. EKSEKUSI PLATFORM (Canva, Gamma, Vids, Quizizz)</text>

                        <!-- Level 3 -->
                        <polygon points="220,160 160,220 640,220 580,160" fill="#93c5fd" stroke="#1d4ed8" stroke-width="1.5"/>
                        <text x="400" y="195" font-family="Outfit, sans-serif" font-size="13" font-weight="bold" fill="#1e40af" text-anchor="middle">3. PROMPT CHAINING (Rantai Modul Prompt)</text>

                        <!-- Level 2 -->
                        <polygon points="160,220 100,280 700,280 640,220" fill="#60a5fa" stroke="#1d4ed8" stroke-width="1.5"/>
                        <text x="400" y="255" font-family="Outfit, sans-serif" font-size="13" font-weight="bold" fill="#1e40af" text-anchor="middle">2. META PROMPTING (Perancangan Instruksi di ChatGPT)</text>

                        <!-- Level 1: Dasar -->
                        <polygon points="100,280 40,340 760,340 700,280" fill="#3b82f6" stroke="#1d4ed8" stroke-width="1.5"/>
                        <text x="400" y="315" font-family="Outfit, sans-serif" font-size="14" font-weight="bold" fill="#ffffff" text-anchor="middle">1. PEDAGOGICAL INTENTION (Tujuan Belajar & Nilas Karakter Sekolah)</text>
                    </svg>
                    <div class="illustration-caption">Gambar 4.1: Skema Hierarki Model MAP-AI (Model Pemanfaatan AI Berbasis Meta Prompting) dalam Pengembangan Media</div>
                </div>
```

- [ ] **Step 3: Sisipkan SVG Gambar 5.1 pada materi-bab5.html**

Buka [materi-bab5.html](file:///d:/APPS/xampp/htdocs/E-Modul%20Skripsi/materi-bab5.html) dan cari heading `h2 id="sub1"` (A. Evaluasi Formatif Media Berbantuan AI). Sisipkan kode berikut setelah paragraf pertama (di atas sub-heading B):

```html
                <div class="illustration-container">
                    <svg class="illustration-svg" viewBox="0 0 800 380" xmlns="http://www.w3.org/2000/svg">
                        <!-- Grid 2x4 untuk 8 Dimensi Evaluasi -->
                        <!-- Baris 1 Kolom 1 -->
                        <rect x="20" y="20" width="170" height="150" rx="12" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
                        <text x="105" y="60" font-family="Outfit, sans-serif" font-size="14" font-weight="bold" fill="#1e293b" text-anchor="middle">1. Kelayakan Isi</text>
                        <text x="105" y="90" font-family="Inter, sans-serif" font-size="11" fill="#475569" text-anchor="middle">Akurasi materi,</text>
                        <text x="105" y="110" font-family="Inter, sans-serif" font-size="11" fill="#475569" text-anchor="middle">bebas miskonsepsi,</text>
                        <text x="105" y="130" font-family="Inter, sans-serif" font-size="11" fill="#475569" text-anchor="middle">kedalaman konten.</text>

                        <!-- Baris 1 Kolom 2 -->
                        <rect x="210" y="20" width="170" height="150" rx="12" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
                        <text x="295" y="60" font-family="Outfit, sans-serif" font-size="14" font-weight="bold" fill="#1e293b" text-anchor="middle">2. Desain Visual</text>
                        <text x="295" y="90" font-family="Inter, sans-serif" font-size="11" fill="#475569" text-anchor="middle">Estetika, tata letak,</text>
                        <text x="295" y="110" font-family="Inter, sans-serif" font-size="11" fill="#475569" text-anchor="middle">keseimbangan warna,</text>
                        <text x="295" y="130" font-family="Inter, sans-serif" font-size="11" fill="#475569" text-anchor="middle">kontras teks.</text>

                        <!-- Baris 1 Kolom 3 -->
                        <rect x="400" y="20" width="170" height="150" rx="12" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
                        <text x="485" y="60" font-family="Outfit, sans-serif" font-size="14" font-weight="bold" fill="#1e293b" text-anchor="middle">3. Pedagogik</text>
                        <text x="485" y="90" font-family="Inter, sans-serif" font-size="11" fill="#475569" text-anchor="middle">Membantu pemahaman,</text>
                        <text x="485" y="110" font-family="Inter, sans-serif" font-size="11" fill="#475569" text-anchor="middle">memicu ketertarikan,</text>
                        <text x="485" y="130" font-family="Inter, sans-serif" font-size="11" fill="#475569" text-anchor="middle">sesuai tujuan belajar.</text>

                        <!-- Baris 1 Kolom 4 -->
                        <rect x="610" y="20" width="170" height="150" rx="12" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
                        <text x="695" y="60" font-family="Outfit, sans-serif" font-size="14" font-weight="bold" fill="#1e293b" text-anchor="middle">4. Keterbacaan</text>
                        <text x="695" y="90" font-family="Inter, sans-serif" font-size="11" fill="#475569" text-anchor="middle">Ukuran huruf tepat,</text>
                        <text x="695" y="110" font-family="Inter, sans-serif" font-size="11" fill="#475569" text-anchor="middle">bahasa komunikatif,</text>
                        <text x="695" y="130" font-family="Inter, sans-serif" font-size="11" fill="#475569" text-anchor="middle">navigasi teratur.</text>

                        <!-- Baris 2 Kolom 1 -->
                        <rect x="20" y="200" width="170" height="150" rx="12" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
                        <text x="105" y="240" font-family="Outfit, sans-serif" font-size="14" font-weight="bold" fill="#1e293b" text-anchor="middle">5. Relevansi Nilai</text>
                        <text x="105" y="270" font-family="Inter, sans-serif" font-size="11" fill="#475569" text-anchor="middle">Integrasi nilai lokal,</text>
                        <text x="105" y="290" font-family="Inter, sans-serif" font-size="11" fill="#475569" text-anchor="middle">budaya luhur,</text>
                        <text x="105" y="310" font-family="Inter, sans-serif" font-size="11" fill="#475569" text-anchor="middle">karakter sekolah.</text>

                        <!-- Baris 2 Kolom 2 -->
                        <rect x="210" y="200" width="170" height="150" rx="12" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
                        <text x="295" y="240" font-family="Outfit, sans-serif" font-size="14" font-weight="bold" fill="#1e293b" text-anchor="middle">6. Akurasi Konten</text>
                        <text x="295" y="270" font-family="Inter, sans-serif" font-size="11" fill="#475569" text-anchor="middle">Bebas halusinasi AI,</text>
                        <text x="295" y="290" font-family="Inter, sans-serif" font-size="11" fill="#475569" text-anchor="middle">verifikasi fakta,</text>
                        <text x="295" y="310" font-family="Inter, sans-serif" font-size="11" fill="#475569" text-anchor="middle">sumber sahih.</text>

                        <!-- Baris 2 Kolom 3 -->
                        <rect x="400" y="200" width="170" height="150" rx="12" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
                        <text x="485" y="240" font-family="Outfit, sans-serif" font-size="14" font-weight="bold" fill="#1e293b" text-anchor="middle">7. Aksesibilitas</text>
                        <text x="485" y="270" font-family="Inter, sans-serif" font-size="11" fill="#475569" text-anchor="middle">Mudah diakses,</text>
                        <text x="485" y="290" font-family="Inter, sans-serif" font-size="11" fill="#475569" text-anchor="middle">kompatibel multi-alat,</text>
                        <text x="485" y="310" font-family="Inter, sans-serif" font-size="11" fill="#475569" text-anchor="middle">bebas kendala teknis.</text>

                        <!-- Baris 2 Kolom 4 -->
                        <rect x="610" y="200" width="170" height="150" rx="12" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
                        <text x="695" y="240" font-family="Outfit, sans-serif" font-size="14" font-weight="bold" fill="#1e293b" text-anchor="middle">8. Tanggung Jawab</text>
                        <text x="695" y="270" font-family="Inter, sans-serif" font-size="11" fill="#475569" text-anchor="middle">Bebas bias data,</text>
                        <text x="695" y="290" font-family="Inter, sans-serif" font-size="11" fill="#475569" text-anchor="middle">atribusi karya AI,</text>
                        <text x="695" y="310" font-family="Inter, sans-serif" font-size="11" fill="#475569" text-anchor="middle">aman bagi siswa.</text>
                    </svg>
                    <div class="illustration-caption">Gambar 5.1: Matriks Visual 8 Dimensi Evaluasi Kelayakan Media Pembelajaran Berbantuan AI</div>
                </div>
```

- [ ] **Step 4: Verifikasi Tampilan Bab 3, 4, & 5**

Buka `http://localhost/E-Modul Skripsi/materi-bab3.html`, `materi-bab4.html`, dan `materi-bab5.html` di browser. Pastikan seluruh diagram SVG baru termuat tanpa error pemuatan XML, responsif saat viewport di-resize, dan warna menyatu dengan tema.

- [ ] **Step 5: Commit Bab 3, Bab 4, & Bab 5**

```bash
git add materi-bab3.html materi-bab4.html materi-bab5.html
git commit -m "feat(materi): integrasi diagram konsep SVG Gambar 3.1, Gambar 4.1, dan Gambar 5.1"
```

---

### Task 4: Pengadaan & Integrasi Gambar PNG Realistis Bab 1 & Bab 3

**Files:**
- Create: `assets/images/materi/guru-merancang-media.png`
- Create: `assets/images/materi/pengawasan-etis-siswa.png`
- Modify: `materi-bab1.html:200-205`
- Modify: `materi-bab3.html:370-375`

**Interfaces:**
- Consumes: Tool `generate_image` untuk pengadaan aset.
- Produces: File ilustrasi PNG dan integrasinya di berkas HTML Bab 1 dan Bab 3.

- [ ] **Step 1: Generate Gambar 1.2 (guru-merancang-media.png)**

Jalankan tool `generate_image` dengan parameter berikut:
Prompt: `"A highly realistic photo of a middle-aged Indonesian female high school teacher, smiling warmly, wearing a neat traditional blue batik teacher uniform. She is sitting at her clean wooden desk in a bright classroom, working on a modern laptop. The background shows a white board with simple, clean educational diagrams. Warm daylight, shot on DSLR, highly detailed, realistic skin texture, professional photo --ar 16:9"`
ImageName: `"guru_merancang_media"`

- [ ] **Step 2: Generate Gambar 3.2 (pengawasan-etis-siswa.png)**

Jalankan tool `generate_image` dengan parameter berikut:
Prompt: `"A realistic documentary photo of a friendly Indonesian female teacher standing beside two Indonesian junior high school students (a boy and a girl wearing neat white and blue uniforms) in a clean, modern school library. They are looking at a tablet screen together, smiling naturally. Warm ambient lighting, highly realistic details, shot on 35mm lens, authentic classroom interaction --ar 16:9"`
ImageName: `"pengawasan_etis_siswa"`

- [ ] **Step 3: Pindahkan dan verifikasi berkas gambar ke direktori materi**

Pastikan file `guru-merancang-media.png` dan `pengawasan-etis-siswa.png` dipindahkan (atau disalin) ke `d:\APPS\xampp\htdocs\E-Modul Skripsi\assets\images\materi/`.

- [ ] **Step 4: Sisipkan Gambar 1.2 ke dalam materi-bab1.html**

Buka [materi-bab1.html](file:///d:/APPS/xampp/htdocs/E-Modul%20Skripsi/materi-bab1.html) dan cari baris penutup sub-bab C (sebelum sub-bab D). Sisipkan gambar pendukung berikut:

```html
                <div class="illustration-container">
                    <img class="illustration-img" src="assets/images/materi/guru-merancang-media.png" alt="Guru Merancang Media AI" loading="lazy">
                    <div class="illustration-caption">Gambar 1.2: Potret Guru Berkolaborasi dengan Alat AI untuk Efisiensi Persiapan Pembelajaran</div>
                </div>
```

- [ ] **Step 5: Sisipkan Gambar 3.2 ke dalam materi-bab3.html**

Buka [materi-bab3.html](file:///d:/APPS/xampp/htdocs/E-Modul%20Skripsi/materi-bab3.html) dan cari sub-bab **F. Studi Kasus Singkat** (setelah Kasus Bu Hasna). Sisipkan gambar berikut setelah teks keputusan:

```html
                <div class="illustration-container">
                    <img class="illustration-img" src="assets/images/materi/pengawasan-etis-siswa.png" alt="Pengawasan Etis Guru" loading="lazy">
                    <div class="illustration-caption">Gambar 3.2: Guru Melakukan Pendampingan Pembelajaran Menggunakan Media Digital di Perpustakaan</div>
                </div>
```

- [ ] **Step 6: Verifikasi pemuatan gambar di browser**

Buka halaman Bab 1 dan Bab 3 di localhost. Pastikan gambar PNG berhasil termuat dengan baik tanpa ada broken image.

- [ ] **Step 7: Commit gambar dan perubahan HTML**

```bash
git add assets/images/materi/guru-merancang-media.png assets/images/materi/pengawasan-etis-siswa.png materi-bab1.html materi-bab3.html
git commit -m "feat(materi): pengadaan dan integrasi foto realistis Gambar 1.2 dan Gambar 3.2"
```

---

### Task 5: Pengadaan & Integrasi Gambar PNG Realistis Bab 4 & Bab 5

**Files:**
- Create: `assets/images/materi/mockup-poster-fotosintesis.png`
- Create: `assets/images/materi/diskusi-evaluasi-guru.png`
- Modify: `materi-bab4.html:450-455`
- Modify: `materi-bab5.html:300-305`

**Interfaces:**
- Consumes: Tool `generate_image` untuk pengadaan aset.
- Produces: File ilustrasi PNG dan integrasinya di berkas HTML Bab 4 and Bab 5.

- [ ] **Step 1: Generate Gambar 4.2 (mockup-poster-fotosintesis.png)**

Jalankan tool `generate_image` dengan parameter berikut:
Prompt: `"A professional photo of a clean educational poster about 'Fotosintesis' (Photosynthesis process) framed neatly on a light classroom wall. The poster has clean vector diagrams of a green plant, sun, and water, with readable indonesian text. Natural classroom background with wooden desks and warm lighting, soft depth of field, high-end mockup --ar 16:9"`
ImageName: `"mockup_poster_fotosintesis"`

- [ ] **Step 2: Generate Gambar 5.2 (diskusi-evaluasi-guru.png)**

Jalankan tool `generate_image` dengan parameter berikut:
Prompt: `"A realistic group photo of three Indonesian high school teachers (two women and one man, wearing neat PGRI batik and khaki uniforms) sitting around a table in a bright staff room, looking at a laptop screen together and discussing, smiling and pointing at the screen. Rubric paper worksheets are on the table. Professional lighting, highly detailed, realistic skin textures, shot on DSLR --ar 16:9"`
ImageName: `"diskusi_evaluasi_guru"`

- [ ] **Step 3: Pindahkan berkas gambar ke direktori materi**

Pastikan file `mockup-poster-fotosintesis.png` dan `diskusi-evaluasi-guru.png` disalin ke `d:\APPS\xampp\htdocs\E-Modul Skripsi\assets\images\materi/`.

- [ ] **Step 4: Sisipkan Gambar 4.2 ke dalam materi-bab4.html**

Buka [materi-bab4.html](file:///d:/APPS/xampp/htdocs/E-Modul%20Skripsi/materi-bab4.html) dan cari penutup bagian **Canva (Media Poster)** pada sub-bab E. Sisipkan gambar pendukung berikut:

```html
                                        <div class="illustration-container">
                                            <img class="illustration-img" src="assets/images/materi/mockup-poster-fotosintesis.png" alt="Mockup Poster Fotosintesis" loading="lazy">
                                            <div class="illustration-caption">Gambar 4.2: Mockup Hasil Desain Poster Fotosintesis Menggunakan Canva AI di Dinding Kelas</div>
                                        </div>
```

- [ ] **Step 5: Sisipkan Gambar 5.2 ke dalam materi-bab5.html**

Buka [materi-bab5.html](file:///d:/APPS/xampp/htdocs/E-Modul%20Skripsi/materi-bab5.html) dan cari sub-bab **E. Rencana Tindak Lanjut** (di atas Rangkuman). Sisipkan gambar berikut setelah paragraf penutup:

```html
                <div class="illustration-container">
                    <img class="illustration-img" src="assets/images/materi/diskusi-evaluasi-guru.png" alt="Diskusi Evaluasi Kelayakan Media" loading="lazy">
                    <div class="illustration-caption">Gambar 5.2: Diskusi Dewan Guru (MGMP) dalam Rangka Evaluasi Formatif Kelayakan Media Berbantuan AI</div>
                </div>
```

- [ ] **Step 6: Verifikasi pemuatan gambar di browser**

Buka halaman Bab 4 dan Bab 5 di localhost. Pastikan gambar PNG berhasil termuat dengan baik tanpa ada broken image.

- [ ] **Step 7: Commit gambar dan perubahan HTML**

```bash
git add assets/images/materi/mockup-poster-fotosintesis.png assets/images/materi/diskusi-evaluasi-guru.png materi-bab4.html materi-bab5.html
git commit -m "feat(materi): pengadaan dan integrasi foto realistis Gambar 4.2 and Gambar 5.2"
```

---

## Risks & mitigations

- **Risiko: Render SVG rusak karena kesalahan sintaks tag XML.**
  - *Mitigasi*: Pengujian langsung di browser modern (Chrome/Edge) dengan menginspeksi elemen SVG menggunakan devtools.
- **Risiko: Detail wajah/tangan pada gambar PNG tidak realistis (AI slop).**
  - *Mitigasi*: Melakukan kurasi manual setelah proses `generate_image` selesai. Jika hasil kurang memuaskan, generate ulang dengan prompt yang lebih spesifik.

## Rollback plan

Jika terjadi error yang merusak tata letak halaman materi, jalankan perintah git reset berikut untuk mengembalikan keadaan ke titik sebelum penambahan:

```bash
git reset --hard a9dafd7
```
*(atau commit hash terbaru yang valid)*
