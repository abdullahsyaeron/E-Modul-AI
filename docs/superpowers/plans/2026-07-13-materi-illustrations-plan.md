# Rencana Implementasi: Regenerasi Ilustrasi JPG Otentik & Anti-AI (Localhost)

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Meregenerasi 4 gambar JPG realistis di localhost menggunakan prompt anti-AI baru yang sesuai dengan keadaan otentik sekolah di Indonesia, serta memverifikasi hasilnya tanpa mengubah markup HTML yang sudah ada.

**Architecture:** 
1. **Regenerasi Aset**: Memanggil tool `generate_image` dengan 4 prompt baru yang mendeskripsikan secara spesifik elemen lokal (seragam batik harian, papan mading gabus kelas, ruang guru riil, dsb.) dan mematikan filter artistik AI bawaan.
2. **Penyalinan Aset**: Menyalin hasil gambar baru dengan format JPG ke direktori `assets/images/materi/`, menimpa aset lama.
3. **Verifikasi**: Melakukan pemeriksaan file dan pemuatan lokal.

**Tech Stack:** HTML5, JPG Images, Image Generation.

## Global Constraints
- Gambar JPG tidak boleh memiliki cacat AI (distorsi jemari, wajah artifisial, asimetri mata, atau teks latar belakang rusak).
- Pencahayaan gambar harus natural (fluorescent kelas atau cahaya jendela), bukan lighting studio dramatis.
- Seluruh gambar harus merefleksikan nuansa dan kultur sekolah di Indonesia (seragam sekolah putih-biru, batik guru harian, mading kelas gabus, tumpukan buku cetak lokal).

---

### Task 1: Regenerasi & Pengadaan Aset Gambar JPG Anti-AI

**Files:**
- Create/Overwrite: `assets/images/materi/guru-merancang-media.jpg`
- Create/Overwrite: `assets/images/materi/pengawasan-etis-siswa.jpg`
- Create/Overwrite: `assets/images/materi/mockup-poster-fotosintesis.jpg`
- Create/Overwrite: `assets/images/materi/diskusi-evaluasi-guru.jpg`

**Interfaces:**
- Consumes: Tool `generate_image` untuk pembuatan aset gambar.
- Produces: 4 file JPG baru yang diintegrasikan secara otomatis di browser karena menggunakan nama berkas yang sama.

- [ ] **Step 1: Generate Gambar 1.2 (guru-merancang-media.jpg - Ruang Guru)**

Jalankan tool `generate_image` dengan parameter berikut:
Prompt: `"A candid documentary photo of a 40-year-old Indonesian female teacher wearing a simple casual brown batik blouse and a plain cream hijab. She is sitting at her cluttered wooden teacher's desk in a natural school staff room. On her desk are a modern laptop, stack of student exercise books with colorful paper covers, a glass of hot tea in a clear glass mug on a saucer, and a pen holder. Warm natural light coming from a nearby window, shot on 35mm lens, f/2.8, realistic skin texture, soft shadows, natural documentary color grading, authentic everyday life --ar 16:9"`
ImageName: `"guru_merancang_media_new"`

- [ ] **Step 2: Salin Gambar 1.2 ke folder materi**

Salin gambar hasil generate di atas ke `assets/images/materi/guru-merancang-media.jpg` (timpa file lama).

- [ ] **Step 3: Generate Gambar 3.2 (pengawasan-etis-siswa.jpg - Di Kelas)**

Jalankan tool `generate_image` dengan parameter berikut:
Prompt: `"A candid photojournalism style photo of a friendly Indonesian female teacher wearing a green batik dress, standing next to a wooden classroom desk. Two Indonesian junior high school students (a boy and a girl in neat white and blue uniforms) are sitting at the desk, looking at a tablet screen together. The classroom background features a green wall, wooden windows, and student art projects on the wall. Natural diffused light from the window, realistic skin, unposed authentic interaction, shot on DSLR, 50mm lens, natural everyday color palette --ar 16:9"`
ImageName: `"pengawasan_etis_siswa_new"`

- [ ] **Step 4: Salin Gambar 3.2 ke folder materi**

Salin gambar hasil generate di atas ke `assets/images/materi/pengawasan-etis-siswa.jpg` (timpa file lama).

- [ ] **Step 5: Generate Gambar 4.2 (mockup-poster-fotosintesis.jpg - Mading Gabus)**

Jalankan tool `generate_image` dengan parameter berikut:
Prompt: `"A realistic snapshot of a clean educational poster about 'Proses Fotosintesis' written in Indonesian, pinned onto a cork bulletin board (mading) inside an Indonesian classroom. The poster features simple, clear scientific diagrams of plants, sunlight, water, and chemical formulas. Surrounding the poster on the corkboard are a handwritten class schedule (jadwal piket) and colorful paper announcements. Part of the classroom wall and wooden window frame are visible in the background under natural daylight, authentic school environment, realistic texture --ar 16:9"`
ImageName: `"mockup_poster_fotosintesis_new"`

- [ ] **Step 6: Salin Gambar 4.2 ke folder materi**

Salin gambar hasil generate di atas ke `assets/images/materi/mockup-poster-fotosintesis.jpg` (timpa file lama).

- [ ] **Step 7: Generate Gambar 5.2 (diskusi-evaluasi-guru.jpg - Batik Harian Nusantara)**

Jalankan tool `generate_image` dengan parameter berikut:
Prompt: `"A candid, natural photo of three Indonesian high school teachers (two women wearing casual batik shirts and one man in a collared batik shirt) sitting around a wooden table in a brightly lit school staff room. They are looking at a laptop screen together, discussing casually. Paper worksheets with evaluation rubrics are spread on the table. Standard fluorescent ceiling lights mixed with daylight, natural expressions, realistic skin texture, documentary photo style, neutral color grading, zero studio styling --ar 16:9"`
ImageName: `"diskusi_evaluasi_guru_new"`

- [ ] **Step 8: Salin Gambar 5.2 ke folder materi**

Salin gambar hasil generate di atas ke `assets/images/materi/diskusi-evaluasi-guru.jpg` (timpa file lama).

- [ ] **Step 9: Commit gambar baru**

```bash
git add assets/images/materi/guru-merancang-media.jpg assets/images/materi/pengawasan-etis-siswa.jpg assets/images/materi/mockup-poster-fotosintesis.jpg assets/images/materi/diskusi-evaluasi-guru.jpg
git commit -m "feat(materi): perbarui 4 foto materi dengan aset realistis anti-AI dan berciri khas Indonesia"
```

---

### Task 2: Verifikasi & Ledger Update

**Files:**
- Modify: `.superpowers/sdd/progress.md` (Update status)

- [ ] **Step 1: Jalankan skrip verifikasi HTML**

Jalankan:
`python "C:\Users\Aspire 5\.gemini\antigravity\scratch\check_html.py"`
Pastikan status: `Verification PASSED!`.

- [ ] **Step 2: Perbarui progress.md**

Tambahkan baris keterangan revisi pada progress ledger dan commit perubahan ledger.
