/**
 * prompt-data.js
 * Database of prompt templates for various teaching needs.
 * Updated based on Content Inventory Phase 2.
 */

const promptDatabase = [
  // ================= KATEGORI: ANALISIS INSTRUKSIONAL =================
  {
    id: 'a1',
    category: 'analisis',
    title: 'Analisis Kebutuhan Pembelajaran Berbasis AI',
    description: 'Membantu guru mengidentifikasi kebutuhan belajar siswa, tantangan pembelajaran, serta peluang pemanfaatan media.',
    prompt: `Saya adalah guru [mata pelajaran] kelas [kelas].
Saya akan mengajar topik:
[topik]

Karakteristik peserta didik:
[tuliskan usia, jenjang, kemampuan awal, atau karakteristik khusus]

Konteks pembelajaran:
[tuliskan kondisi kelas, fasilitas, kendala, atau kebutuhan khusus]

Bertindaklah sebagai instructional designer, ahli analisis kebutuhan pembelajaran, dan konsultan teknologi pendidikan.

Lakukan analisis kebutuhan pembelajaran dengan menghasilkan:
1. Gambaran karakteristik peserta didik.
2. Kebutuhan belajar yang perlu dipenuhi.
3. Kesulitan atau tantangan belajar yang mungkin muncul.
4. Kompetensi yang perlu dikembangkan.
5. Peluang pemanfaatan media pembelajaran.
6. Rekomendasi strategi pembelajaran yang sesuai.
7. Rekomendasi jenis media yang berpotensi digunakan.

Tampilkan hasil dalam format:
A. Profil Peserta Didik
B. Kebutuhan Pembelajaran
C. Tantangan Pembelajaran
D. Kompetensi yang Dikembangkan
E. Rekomendasi Strategi
F. Rekomendasi Media`
  },
  {
    id: 'a2',
    category: 'analisis',
    title: 'Analisis Materi dan Struktur Konten',
    description: 'Mengidentifikasi konsep inti, miskonsepsi, serta strategi penyajian materi.',
    prompt: `Saya adalah guru [mata pelajaran] kelas [kelas].

Topik yang akan diajarkan:
[topik]

Berikut materi yang akan digunakan:
[tempel materi atau unggah dokumen]

Bertindaklah sebagai ahli materi, instructional designer, dan pengembang kurikulum.

Lakukan analisis materi dengan menghasilkan:
1. Konsep inti yang wajib dipahami siswa.
2. Subkonsep pendukung.
3. Hubungan antar konsep.
4. Pengetahuan prasyarat yang diperlukan.
5. Potensi miskonsepsi yang mungkin muncul.
6. Bagian materi yang paling sulit dipahami siswa.
7. Bagian yang perlu divisualisasikan.
8. Rekomendasi media yang paling sesuai untuk setiap bagian.

Tampilkan hasil dalam format:
A. Konsep Inti
B. Peta Konsep
C. Pengetahuan Prasyarat
D. Potensi Miskonsepsi
E. Bagian yang Perlu Visualisasi
F. Rekomendasi Media`
  },
  {
    id: 'a3',
    category: 'analisis',
    title: 'Generator Tujuan Pembelajaran dan Indikator',
    description: 'Menghasilkan tujuan pembelajaran yang terukur dan siap digunakan.',
    prompt: `Saya adalah guru [mata pelajaran] kelas [kelas].

Topik:
[topik]

Karakteristik peserta didik:
[karakteristik]

Konsep utama yang akan diajarkan:
[konsep]

Bertindaklah sebagai instructional designer dan ahli perumusan tujuan pembelajaran.

Buatkan:
1. Tujuan pembelajaran menggunakan format ABCD.
2. Indikator pencapaian tujuan.
3. Aktivitas belajar yang mendukung setiap tujuan.
4. Bukti belajar yang dapat diamati.
5. Rekomendasi bentuk asesmen.

Tampilkan hasil dalam format:
A. Tujuan Pembelajaran
B. Indikator
C. Aktivitas Belajar
D. Bukti Belajar
E. Asesmen`
  },
  {
    id: 'a4',
    category: 'analisis',
    title: 'Analisis Referensi Desain',
    description: 'Mengubah contoh desain menjadi panduan visual yang dapat direplikasi.',
    prompt: `Saya akan mengunggah satu atau beberapa referensi desain.

Bertindaklah sebagai Designer, Graphic Designer Pendidikan, dan Media Learning Specialist.

Analisis referensi yang saya berikan dan identifikasi:
1. Gaya visual utama.
2. Hierarki informasi.
3. Tata letak.
4. Penggunaan warna.
5. Tipografi.
6. Jenis ilustrasi.
7. Elemen visual yang dominan.
8. Kelebihan desain.
9. Kekurangan desain.
10. Hal yang dapat diadaptasi untuk media pembelajaran.

Buatkan Design Brief yang dapat digunakan untuk menghasilkan desain baru dengan gaya yang serupa.

Tampilkan hasil dalam format:
A. Ringkasan Gaya Visual
B. Analisis Elemen Desain
C. Kelebihan dan Kekurangan
D. Design Brief`
  },
  {
    id: 'a5',
    category: 'analisis',
    title: 'Rekomendasi Media Pembelajaran Berbasis Analisis',
    description: 'Menentukan media terbaik berdasarkan tujuan, materi, dan karakteristik siswa.',
    prompt: `Saya adalah guru [mata pelajaran] kelas [kelas].

Topik:
[topik]

Tujuan pembelajaran:
[tempel tujuan]

Karakteristik peserta didik:
[tempel karakteristik]

Hasil analisis materi:
[tempel hasil analisis]

Bertindaklah sebagai instructional designer dan ahli media pembelajaran.

Analisis informasi yang diberikan kemudian:
1. Tentukan media yang paling sesuai.
2. Berikan alasan pedagogis.
3. Bandingkan poster, presentasi, video, dan kuis.
4. Jelaskan kelebihan dan keterbatasan masing-masing media.
5. Berikan rekomendasi media utama.
6. Berikan rekomendasi media pendukung.
7. Jelaskan urutan penggunaan media dalam pembelajaran.

Tampilkan hasil dalam format:
A. Analisis Kebutuhan Media
B. Perbandingan Media
C. Media Utama
D. Media Pendukung
E. Strategi Implementasi`
  },
  {
    id: 'a6',
    category: 'analisis',
    title: 'Generator Arah Desain Media (Design Direction)',
    description: 'Membantu guru menentukan arah desain yang paling sesuai sebelum membuat media dengan AI.',
    prompt: `Saya adalah guru [mata pelajaran] kelas [kelas].
Saya akan mengembangkan media pembelajaran tentang:
[topik]

Tujuan pembelajaran:
[tuliskan tujuan pembelajaran]

Karakteristik peserta didik:
[tuliskan usia, jenjang, kemampuan awal, dan karakteristik khusus]

Saya juga akan memberikan satu atau beberapa referensi desain yang saya sukai.

Bertindaklah sebagai:
- Instructional Designer
- Visual Learning Specialist
- Graphic Designer Pendidikan
- Creative Director

Analisis seluruh informasi yang saya berikan kemudian tentukan arah desain yang paling sesuai.

Buatkan:
1. Ringkasan kebutuhan visual pembelajaran.
2. Mood dan suasana desain yang direkomendasikan.
3. Gaya visual yang paling sesuai.
4. Gaya ilustrasi yang direkomendasikan.
5. Palet warna utama dan alasan pemilihannya.
6. Rekomendasi tipografi.
7. Rekomendasi tata letak.
8. Hierarki informasi yang disarankan.
9. Elemen visual yang perlu ditonjolkan.
10. Elemen visual yang sebaiknya dihindari.
11. Tingkat kompleksitas desain yang sesuai dengan karakteristik siswa.
12. Konsistensi visual yang perlu dijaga apabila media dikembangkan menjadi: poster, presentasi, video, kuis.

Susun hasil dalam format:
A. Ringkasan Kebutuhan Visual
B. Design Direction
C. Moodboard Deskriptif
D. Palet Warna
E. Tipografi
F. Layout dan Hierarki Informasi
G. Elemen Visual Utama
H. Hal yang Harus Dihindari
I. Panduan Konsistensi Antar Media
J. Design Brief Final`,
    exampleInput: `Mata Pelajaran: IPA
Kelas: VIII SMP
Topik: Sistem Pernapasan Manusia
Tujuan Pembelajaran: Siswa mampu mengidentifikasi organ-organ sistem pernapasan manusia dan menjelaskan fungsi masing-masing organ.
Karakteristik Peserta Didik:
- Usia 13–14 tahun
- Menyukai visual menarik
- Tingkat literasi sedang
- Mudah terdistraksi oleh teks yang terlalu panjang
Referensi:
- Poster infografis pendidikan modern
- Warna biru dan putih
- Flat illustration
- Layout bersih dan minimalis`,
    exampleOutput: `A. Ringkasan Kebutuhan Visual
Materi memerlukan visualisasi organ tubuh yang jelas dan mudah dikenali. Konsep bersifat konkret sehingga ilustrasi anatomi sederhana lebih efektif dibanding teks panjang.

B. Design Direction
Educational Modern Infographic, Clean, Friendly, Scientific, Student-Centered

C. Moodboard Deskriptif
Nuansa: profesional, edukatif, bersih, modern, terpercaya. Kesan yang ingin dibangun: "Belajar sains itu mudah dan menarik."

D. Palet Warna
Warna Utama: Biru Muda, Biru Tua, Putih. Warna Aksen: Hijau Mint. Alasan: Membangun kesan ilmiah, bersih, dan nyaman dibaca.

E. Tipografi
Judul: Poppins Bold. Isi: Open Sans. Karakter: Modern, ramah, mudah dibaca.

F. Layout
Hero Visual di bagian atas, Organ Pernapasan di tengah, Fungsi Organ dalam bentuk card, Fakta Menarik di bagian bawah.`
  },

  // ================= KATEGORI: PRODUKSI MEDIA PEMBELAJARAN =================
  {
    id: 'p1',
    category: 'produksi',
    title: 'Poster Pembelajaran Informatif (Canva AI)',
    description: 'Menghasilkan rancangan poster pembelajaran informatif, siap pakai untuk Canva. Prompt ini memanfaatkan ChatGPT sebagai Meta Prompting Tool.',
    prompt: `Saya adalah guru [mata pelajaran] kelas [kelas].
Saya ingin membuat poster pembelajaran tentang:
[topik]

Tujuan pembelajaran:
[tuliskan tujuan pembelajaran]

Karakteristik peserta didik:
[tuliskan usia, jenjang, kemampuan awal, dan karakteristik khusus siswa]

Materi yang akan digunakan:
[tempel materi atau unggah dokumen]

Apabila tersedia, berikut referensi desain yang saya sukai:
[unggah gambar atau jelaskan referensi]

Bertindaklah sebagai:
- Instructional Designer
- Ahli Desain Pembelajaran
- Graphic Designer Pendidikan
- Visual Learning Specialist

Tugas Anda adalah membantu saya merancang poster pembelajaran yang efektif secara instruksional dan menarik secara visual.

Buatkan:
1. Analisis singkat kebutuhan poster.
2. Struktur konten poster.
3. Hierarki informasi poster.
4. Judul poster yang menarik.
5. Teks poster yang sesuai dengan usia peserta didik.
6. Ringkasan materi yang paling penting untuk ditampilkan.
7. Fakta menarik atau informasi pendukung yang relevan.
8. Prompt visual yang siap digunakan pada Canva AI atau AI Image Generator.
9. Panduan desain yang mencakup: komposisi visual, warna, tipografi, gaya ilustrasi, ikon yang direkomendasikan, tata letak poster.

Pastikan:
- Seluruh informasi mendukung tujuan pembelajaran.
- Bahasa sesuai usia peserta didik.
- Informasi ringkas dan mudah dipahami.
- Pesan utama dapat dipahami dalam waktu kurang dari 5 detik.
- Visual mendukung pemahaman konsep.
- Desain sesuai prinsip pembelajaran visual.

Tampilkan hasil dalam format:
A. Analisis Kebutuhan Poster
B. Struktur Poster
C. Hierarki Informasi
D. Teks Poster
E. Prompt Visual Siap Pakai
F. Panduan Desain`,
    guide: `1. Salin dan Masukkan teks Prompt Utama di atas ke Chat GPT.
2. Setelah itu, berikan informasi kelas, topik, dll Anda (seperti pada Contoh Input) tepat di bawahnya di dalam kolom chat yang sama.
3. Setelah Chat GPT me-generate informasi pelengkap poster Anda, berikan instruksi lanjutan:
   **"Buat informasi yang ada menjadi sebuah prompt yang baik, detail, dan lengkap"**
4. Hasil akhir berupa prompt panjang siap dieksekusi oleh AI Generator gambar.`,
    exampleInput: `Mata Pelajaran: IPA Kelas: VIII SMP Topik: Sistem Pernapasan Manusia Tujuan Pembelajaran: Siswa mampu mengidentifikasi organ-organ sistem pernapasan manusia dan menjelaskan fungsi masing-masing organ. Karakteristik Peserta Didik: Usia 13–14 tahun Literasi sedang Menyukai visual menarik Mudah bosan dengan teks panjang`,
    exampleOutput: `(Hasil setelah instruksi pembuatan prompt akhir):
Saya adalah guru IPA kelas VIII SMP. Saya ingin membuat poster pembelajaran yang informatif, menarik secara visual...
Tujuan pembelajaran: Siswa mampu mengidentifikasi organ-organ sistem pernapasan manusia...
Prinsip desain yang harus digunakan: Visual lebih dominan, Terapkan prinsip Cognitive Load Theory...
Struktur poster yang harus dibuat:
A. Header (Judul menarik)
B. Visual Utama (Ilustrasi anatomi)
C. Organ dan Fungsi (Hidung, Faring, Laring...)
D. Alur Perjalanan Udara
E. Fakta Menarik
... (dan seterusnya hingga prompt ilustrasi siap pakai untuk Canva AI)`
  },
  {
    id: 'p2',
    category: 'produksi',
    title: 'Presentasi Pembelajaran (Gamma AI)',
    description: 'Membantu guru menghasilkan struktur presentasi, outline slide, aktivitas, dan prompt Gamma yang selaras.',
    prompt: `Saya adalah guru [mata pelajaran] kelas [kelas].
Saya ingin membuat presentasi pembelajaran menggunakan Gamma tentang:
[topik]

Tujuan pembelajaran:
[tuliskan tujuan pembelajaran]

Karakteristik peserta didik:
[tuliskan usia, jenjang, kemampuan awal, dan karakteristik khusus siswa]

Materi yang akan digunakan:
[tempel materi atau unggah dokumen]

Apabila tersedia, berikut referensi desain yang saya sukai:
[unggah gambar atau jelaskan referensi]

Bertindaklah sebagai:
- Instructional Designer
- Ahli Desain Pembelajaran
- Learning Experience Designer
- Ahli Presentasi Pendidikan

Tugas Anda adalah membantu saya merancang presentasi pembelajaran yang efektif secara instruksional dan menarik secara visual.

Buatkan:
1. Analisis kebutuhan presentasi.
2. Struktur presentasi yang sistematis.
3. Jumlah slide yang direkomendasikan.
4. Outline setiap slide.
5. Tujuan setiap slide.
6. Aktivitas atau pertanyaan pemantik yang relevan.
7. Saran visual untuk setiap slide.
8. Prompt lengkap yang siap digunakan pada Gamma AI.
9. Panduan desain presentasi.
10. Checklist evaluasi presentasi sebelum digunakan.

Pastikan:
- Seluruh slide mendukung tujuan pembelajaran.
- Setiap slide memiliki satu gagasan utama.
- Bahasa sesuai karakteristik peserta didik.
- Visual mendukung pemahaman konsep.
- Isi presentasi tidak terlalu padat.
- Struktur presentasi logis dan mudah diikuti.

Tampilkan hasil dalam format:
A. Analisis Kebutuhan Presentasi
B. Struktur Presentasi
C. Outline Slide
D. Aktivitas dan Pertanyaan Pemantik
E. Prompt Gamma Siap Pakai
F. Panduan Desain
G. Checklist Evaluasi`,
    guide: `1. Masukkan Prompt Utama ke Chat GPT.
2. Kemudian masukkan input Anda spesifik (seperti pada Contoh Input) di chat yang sama.
3. Setelah Chat GPT membalas dengan kerangka slide presentasi, ketik instruksi ini: 
   **"Buat informasi yang ada menjadi sebuah prompt yang baik, detail, dan lengkap"**
4. Salin hasil prompt utuh tersebut, lalu tempel (paste) langsung ke dalam Gamma.app untuk melakukan generate presentasi otomatis.`,
    exampleInput: `Mata Pelajaran: IPS
Kelas: VIII SMP
Topik: Revolusi Industri dan Dampaknya
Tujuan Pembelajaran: Siswa mampu menjelaskan pengertian Revolusi Industri, faktor penyebabnya, serta dampaknya.
Karakteristik Peserta Didik: Usia 13–14 tahun, Menyukai visual dan contoh nyata, Literasi sedang.`,
    exampleOutput: `SPESIFIKASI PRESENTASI:
· Platform: Gamma
· Maksimal 10 slide
· Setiap slide hanya memiliki satu gagasan utama
· Teks ringkas dan mudah dipahami

STRUKTUR PRESENTASI:
SLIDE 1 — COVER
Judul: "Revolusi Industri dan Dampaknya"
Visual: Ilustrasi pabrik abad ke-18

SLIDE 2 — PEMANTIK
Pertanyaan: "Bagaimana pakaian yang kita gunakan bisa diproduksi dalam jumlah banyak?"
...`
  },
  {
    id: 'p3',
    category: 'produksi',
    title: 'Video Pembelajaran (AI Video Generator)',
    description: 'Menghasilkan struktur video, storyboard, narasi, dan prompt AI Video yang selaras dengan tujuan.',
    prompt: `Saya adalah guru [mata pelajaran] kelas [kelas].
Saya ingin membuat video pembelajaran tentang:
[topik]

Tujuan pembelajaran:
[tuliskan tujuan pembelajaran]

Karakteristik peserta didik:
[tuliskan usia, jenjang, kemampuan awal, dan karakteristik khusus siswa]

Durasi video yang diinginkan:
[tuliskan durasi]

Materi yang akan digunakan:
[tempel materi atau unggah dokumen]

Apabila tersedia, berikut referensi desain atau gaya video yang saya sukai:
[unggah gambar, tautan, atau deskripsikan referensi]

Bertindaklah sebagai:
- Instructional Designer
- Learning Experience Designer
- Penulis Naskah Edukasi
- Sutradara Video Pembelajaran
- Ahli Multimedia Pembelajaran

Tugas Anda adalah membantu saya merancang video pembelajaran yang efektif secara instruksional dan menarik secara visual.

Buatkan:
1. Analisis kebutuhan video.
2. Struktur video pembelajaran.
3. Pembagian segmen video.
4. Storyboard setiap segmen.
5. Narasi setiap segmen.
6. Aktivitas atau pertanyaan pemantik pada awal video.
7. Pertanyaan refleksi pada akhir video.
8. Saran visual untuk setiap segmen.
9. Prompt lengkap yang siap digunakan pada AI Video Generator.
10. Checklist evaluasi video sebelum digunakan.

Pastikan:
- Seluruh segmen mendukung tujuan pembelajaran.
- Narasi sesuai karakteristik peserta didik.
- Bahasa mudah dipahami.
- Visual membantu menjelaskan konsep.
- Durasi sesuai dengan kemampuan fokus siswa.
- Video menerapkan prinsip segmentasi dan personalisasi.

Tampilkan hasil dalam format:
A. Analisis Kebutuhan Video
B. Struktur Video
C. Storyboard
D. Narasi Video
E. Aktivitas dan Refleksi
F. Prompt AI Video Siap Pakai
G. Checklist Evaluasi`,
    guide: `1. Masukkan Prompt Utama ke Chat GPT.
2. Kirim detail topik, tujuan, durasi (seperti pada Contoh Input).
3. Setelah kerangka storyboard dikonfirmasi oleh ChatGPT, perintahkan kembali: 
   **"Buat informasi yang ada menjadi sebuah prompt yang baik, detail, dan lengkap"**
4. Hasil akhirnya akan mencakup narasi sulih suara (Voice Over) dan *image prompt* yang bisa digunakan pada tools AI Video (misalnya Google Flow, HeyGen, dsb).`,
    exampleInput: `Mata Pelajaran: IPA
Kelas: VIII SMP
Topik: Fotosintesis
Tujuan: Siswa mampu menjelaskan proses fotosintesis dan faktor-faktor yang memengaruhinya.
Durasi: 5 menit`,
    exampleOutput: `SEGMENT 1 — PEMBUKA (0:00–0:30)
Narasi: "Pernahkah kalian berpikir bagaimana tumbuhan mendapatkan makanan?"
Visual: Tumbuhan hijau di taman, Matahari bersinar, Time-lapse biji tumbuh.

SEGMENT 2 — APA ITU FOTOSINTESIS? (0:30–1:15)
Narasi: "Fotosintesis adalah proses tumbuhan membuat makanan sendiri..."
Visual: Animasi air naik dari akar, CO2 masuk ke daun.

PROMPT AI VIDEO:
Prompt Segment 1: "Modern educational animation, green plant growing under bright morning sunlight, time-lapse seed germination, colorful garden environment..."`
  }
];

// Export to global window
window.promptDatabase = promptDatabase;
