# Spesifikasi Desain: Ilustrasi & Diagram Konsep E-Modul AI (Revisi Otentik & Anti-AI)

Dokumen ini mendokumentasikan spesifikasi desain visual untuk penambahan 5 diagram konsep (berformat SVG inline) dan 4 ilustrasi realistis (berformat JPG) ke dalam materi pembelajaran E-Modul AI (Bab 1 s.d. Bab 5) secara lokal (localhost). Revisi ini berfokus pada penghapusan total gaya gambar khas AI (AI slop) dan meningkatkan otentisitas kultural sekolah di Indonesia.

---

## 1. Kerangka CSS Baru (Styling & Kontainer)

Semua ilustrasi dan diagram menggunakan aturan CSS standar untuk menjamin responsivitas penuh, efek hover lembut, serta keterbacaan keterangan gambar (caption) ilmiah sesuai standar skripsi.

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

/* Responsivitas Gambar JPG */
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

Setiap diagram ditulis langsung menggunakan tag `<svg>` untuk mempertahankan ketajaman resolusi tinggi, integrasi warna dinamis, dan aksesibilitas ramah pembaca layar (screen reader).

### A. BAB 1: Gambar 1.1 Diagram Urgensi Pemanfaatan AI bagi Guru
*   **Target File**: [materi-bab1.html](file:///d:/APPS/xampp/htdocs/E-Modul%20Skripsi/materi-bab1.html)
*   **ViewBox**: `0 0 960 240` (Lebar panel diperluas ke 410px untuk mencegah teks terpotong)
*   **Deskripsi Visual**: Layout bento dua kolom seimbang. Kolom kiri (Hambatan Guru Konvensional) menggunakan warna merah pudar. Kolom kanan (Solusi Berbantuan AI) menggunakan warna hijau pudar. Panah transisi berlabel "Sinergi AI" di tengah ($x = 480$).

### B. BAB 2: Gambar 2.1 Alur Siklus Kerja Generative AI & Interaksi Guru
*   **Target File**: [materi-bab2.html](file:///d:/APPS/xampp/htdocs/E-Modul%20Skripsi/materi-bab2.html)
*   **ViewBox**: `0 0 800 220`
*   **Deskripsi Visual**: Alur linier empat simpul (Input Prompt -> Eksekusi AI -> Evaluasi & Kurasi oleh Guru -> Hasil Final) dengan warna latar belakang representatif dan tumpukan teks yang jelas.

### C. BAB 3: Gambar 3.1 Siklus Alur Penggunaan AI yang Etis & Bertanggung Jawab
*   **Target File**: [materi-bab3.html](file:///d:/APPS/xampp/htdocs/E-Modul%20Skripsi/materi-bab3.html)
*   **ViewBox**: `0 0 800 240`
*   **Deskripsi Visual**: Tiga lingkaran besar berukuran $r = 90$ disusun berdampingan secara berurutan dengan pemisah gap 60px untuk kejelasan membaca teks di layar mobile.

### D. BAB 4: Gambar 4.1 Skema Hierarki Model Konseptual MAP-AI
*   **Target File**: [materi-bab4.html](file:///d:/APPS/xampp/htdocs/E-Modul%20Skripsi/materi-bab4.html)
*   **ViewBox**: `0 0 1000 340` (Lebar puncak dan dasar diperbesar untuk kenyamanan teks Level 4)
*   **Deskripsi Visual**: Skema piramida 5 tingkat bertumpuk dari Pedagogical Intention di dasar hingga Integrasi & Evaluasi di puncak.

### E. BAB 5: Gambar 5.1 Matriks 8 Dimensi Evaluasi Kelayakan Media AI
*   **Target File**: [materi-bab5.html](file:///d:/APPS/xampp/htdocs/E-Modul%20Skripsi/materi-bab5.html)
*   **ViewBox**: `0 0 800 380`
*   **Deskripsi Visual**: Matriks grid 2x4 simetris dengan card putih bersih bermargin seragam `20px` di semua sisi, serta lebar card `175px` untuk meminimalkan pemotongan suku kata.

---

## 3. Spesifikasi Ilustrasi JPG Realistis (Anti-AI & Otentik Indonesia)

Untuk menjamin ilustrasi tidak terkesan artifisial, plastik, atau komersial Barat, semua prompt mengikuti panduan rekayasa prompt dokumenter (*candid photo, documentary style*) dan memuat batasan warna/pencahayaan yang ketat.

### A. Gambar 1.2: Guru Merancang Media Pembelajaran
*   **Target File**: [materi-bab1.html](file:///d:/APPS/xampp/htdocs/E-Modul%20Skripsi/materi-bab1.html)
*   **Lokasi**: Ruang Guru (Staff Room) sekolah Indonesia yang padat dan khas.
*   **Prompt**:
    > "A candid documentary photo of a 40-year-old Indonesian female teacher wearing a simple casual brown batik blouse and a plain cream hijab. She is sitting at her cluttered wooden teacher's desk in a natural school staff room. On her desk are a modern laptop, stack of student exercise books with colorful paper covers, a glass of hot tea in a clear glass mug on a saucer, and a pen holder. Warm natural light coming from a nearby window, shot on 35mm lens, f/2.8, realistic skin texture, soft shadows, natural documentary color grading, authentic everyday life --ar 16:9"
*   **Nama Berkas**: `guru-merancang-media.jpg`
*   **Path Tujuan**: `assets/images/materi/guru-merancang-media.jpg`

### B. Gambar 3.2: Pengawasan Etis Guru Terhadap Penggunaan Media oleh Siswa
*   **Target File**: [materi-bab3.html](file:///d:/APPS/xampp/htdocs/E-Modul%20Skripsi/materi-bab3.html)
*   **Lokasi**: Di dalam ruang kelas sekolah Indonesia saat jam belajar mandiri.
*   **Prompt**:
    > "A candid photojournalism style photo of a friendly Indonesian female teacher wearing a green batik dress, standing next to a wooden classroom desk. Two Indonesian junior high school students (a boy and a girl in neat white and blue uniforms) are sitting at the desk, looking at a tablet screen together. The classroom background features a green wall, wooden windows, and student art projects on the wall. Natural diffused light from the window, realistic skin, unposed authentic interaction, shot on DSLR, 50mm lens, natural everyday color palette --ar 16:9"
*   **Nama Berkas**: `pengawasan-etis-siswa.jpg`
*   **Path Tujuan**: `assets/images/materi/pengawasan-etis-siswa.jpg`

### C. Gambar 4.2: Mockup Hasil Cetak Poster Fotosintesis Berbantuan Canva AI
*   **Target File**: [materi-bab4.html](file:///d:/APPS/xampp/htdocs/E-Modul%20Skripsi/materi-bab4.html)
*   **Lokasi**: Papan mading gabus/flanel kelas.
*   **Prompt**:
    > "A realistic snapshot of a clean educational poster about 'Proses Fotosintesis' written in Indonesian, pinned onto a cork bulletin board (mading) inside an Indonesian classroom. The poster features simple, clear scientific diagrams of plants, sunlight, water, and chemical formulas. Surrounding the poster on the corkboard are a handwritten class schedule (jadwal piket) and colorful paper announcements. Part of the classroom wall and wooden window frame are visible in the background under natural daylight, authentic school environment, realistic texture --ar 16:9"
*   **Nama Berkas**: `mockup-poster-fotosintesis.jpg`
*   **Path Tujuan**: `assets/images/materi/mockup-poster-fotosintesis.jpg`

### D. Gambar 5.2: Diskusi Dewan Guru dalam Evaluasi Kelayakan Media AI
*   **Target File**: [materi-bab5.html](file:///d:/APPS/xampp/htdocs/E-Modul%20Skripsi/materi-bab5.html)
*   **Lokasi**: Ruang guru / ruang rapat sekolah.
*   **Prompt**:
    > "A candid, natural photo of three Indonesian high school teachers (two women wearing casual batik shirts and one man in a collared batik shirt) sitting around a wooden table in a brightly lit school staff room. They are looking at a laptop screen together, discussing casually. Paper worksheets with evaluation rubrics are spread on the table. Standard fluorescent ceiling lights mixed with daylight, natural expressions, realistic skin texture, documentary photo style, neutral color grading, zero studio styling --ar 16:9"
*   **Nama Berkas**: `diskusi-evaluasi-guru.jpg`
*   **Path Tujuan**: `assets/images/materi/diskusi-evaluasi-guru.jpg`

---

## 4. Panduan Penolakan Cacat AI (Negative Constraints)

Semua aset gambar harus disaring secara manual pasca-generate untuk menolak:
1.  **AI Color Grading**: Warna yang terlalu jenuh (highly saturated), kontras tinggi, atau tone warna oranye-biru dramatis khas generator default.
2.  **AI Plastic Texture**: Tekstur kulit manusia yang terlalu halus (airbrushed) tanpa pori-pori atau kerutan alami.
3.  **Anomali Objek**: Bentuk jari tangan yang cacat (lebih dari lima, tidak lengkap, atau menyatu), tulisan teks latar belakang yang tidak bermakna (lorem ipsum acak), serta asimetri mata pada wajah.
