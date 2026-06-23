/**
 * prompt-data.js
 * Database of prompt templates for various teaching needs.
 */

const promptDatabase = [
  // ================= CATEGORY: PERENCANAAN =================
  {
    id: 'p1',
    category: 'perencanaan',
    title: 'Penyusunan RPP / Modul Ajar',
    description: 'Membuat draf Rencana Pelaksanaan Pembelajaran atau Modul Ajar berdasarkan Kurikulum Merdeka.',
    prompt: 'Bertindaklah sebagai Guru Ahli dan Pengembang Kurikulum. Buatkan draf Modul Ajar / RPP untuk mata pelajaran [Mata Pelajaran] kelas [Kelas/Fase] dengan topik "[Topik Materi]".\n\nModul ajar harus mencakup:\n1. Tujuan Pembelajaran (berdasarkan taksonomi Bloom)\n2. Pemahaman Bermakna & Pertanyaan Pemantik\n3. Kegiatan Pendahuluan (15 menit)\n4. Kegiatan Inti dengan metode [Metode Pembelajaran, misal: PBL/Inquiry] (60 menit)\n5. Kegiatan Penutup & Refleksi (15 menit)\n\nSesuaikan bahasa agar mudah dipahami oleh siswa dengan karakteristik [Karakteristik Siswa, misal: aktif, suka visual]. Format dalam bentuk tabel dan poin-poin yang rapi.'
  },
  {
    id: 'p2',
    category: 'perencanaan',
    title: 'Ide Ice Breaking / Apersepsi',
    description: 'Mencari ide aktivitas pembuka kelas yang relevan dengan materi.',
    prompt: 'Saya akan mengajar materi "[Topik Materi]" untuk siswa kelas [Kelas]. Berikan saya 3 ide aktivitas apersepsi atau ice breaking yang:\n1. Membutuhkan waktu maksimal 10 menit\n2. Relevan dengan topik tersebut\n3. Menggunakan properti sederhana yang ada di kelas (kertas, spidol) atau tanpa properti sama sekali\n4. Memancing rasa ingin tahu siswa sebelum masuk ke materi inti.'
  },

  // ================= CATEGORY: MATERI =================
  {
    id: 'p3',
    category: 'materi',
    title: 'Analogi Konsep Sulit',
    description: 'Menjelaskan konsep yang abstrak menjadi konkret menggunakan analogi keseharian.',
    prompt: 'Bertindaklah sebagai guru yang sangat pandai bercerita. Tolong jelaskan konsep "[Konsep yang sulit, misal: Gaya Gravitasi / Inflasi Ekonomi]" kepada siswa kelas [Kelas].\n\nGunakan analogi dari kehidupan sehari-hari yang sangat akrab dengan dunia mereka (seperti [Minat Siswa, misal: game online, makanan, olahraga]). Hindari jargon akademis yang rumit. Buat penjelasannya maksimal 3 paragraf dan akhiri dengan satu pertanyaan pemantik.'
  },
  {
    id: 'p4',
    category: 'materi',
    title: 'Skrip Video Pembelajaran',
    description: 'Membuat naskah lengkap untuk direkam menjadi video materi.',
    prompt: 'Buatkan skrip video pembelajaran berdurasi sekitar [Durasi] menit tentang "[Topik Materi]". Audiens video ini adalah [Target Audiens].\n\nFormat skrip menjadi dua kolom:\n- Kolom VISUAL: Menjelaskan apa yang tampil di layar (teks, animasi, atau B-roll).\n- Kolom AUDIO: Teks narasi (voice-over) yang akan saya bacakan.\n\nGunakan gaya bahasa yang [Tone, misal: ceria, semi-formal] dan sertakan sapaan pembuka serta penutup yang interaktif.'
  },
  {
    id: 'p5',
    category: 'materi',
    title: 'Ide Visual Presentasi (Midjourney/Canva)',
    description: 'Prompt untuk men-generate gambar ilustrasi presentasi yang estetik.',
    prompt: 'Saya sedang membuat slide presentasi tentang "[Topik Materi]". Berikan saya 5 prompt bahasa Inggris (untuk dimasukkan ke Midjourney/Canva AI) yang akan menghasilkan gambar ilustrasi yang indah dan relevan.\n\nSyarat gambar:\n- Gaya visual: [Style, misal: 3D Pixar style / Watercolor / Realistic]\n- Tidak boleh ada teks/tulisan di dalam gambar\n- Aspek rasio 16:9 (untuk presentasi)\n\nSertakan juga saran di slide bagian mana gambar tersebut sebaiknya diletakkan.'
  },

  // ================= CATEGORY: EVALUASI =================
  {
    id: 'p6',
    category: 'evaluasi',
    title: 'Soal Pilihan Ganda (HOTS)',
    description: 'Membuat soal pilihan ganda berbasis High Order Thinking Skills.',
    prompt: 'Buatkan [Jumlah] soal Pilihan Ganda (A, B, C, D) tentang "[Topik Materi]" untuk tingkat [Jenjang Pendidikan].\n\nSyarat soal:\n1. 80% dari soal harus bertipe HOTS (High Order Thinking Skills - Menganalisis, Mengevaluasi, Mencipta).\n2. Gunakan studi kasus atau cerita pendek sebagai stimulus sebelum pertanyaan.\n3. Pilihan jawaban pengecoh (distractor) harus masuk akal.\n\nSertakan Kunci Jawaban dan Pembahasan logis mengapa jawaban tersebut benar di bagian akhir.'
  },
  {
    id: 'p7',
    category: 'evaluasi',
    title: 'Rubrik Penilaian Proyek',
    description: 'Menyusun rubrik penilaian objektif untuk tugas praktik/proyek.',
    prompt: 'Siswa saya akan mengerjakan tugas proyek berupa "[Deskripsi Tugas/Proyek, misal: Membuat poster kampanye lingkungan]".\n\nTolong buatkan rubrik penilaian yang komprehensif. Rubrik harus memiliki:\n1. 4 Kriteria Penilaian utama (misal: Konten, Kreativitas, dll)\n2. 4 Tingkat Pencapaian (Sangat Baik, Baik, Cukup, Kurang) beserta rentang nilainya\n3. Deskripsi indikator yang sangat jelas dan terukur untuk setiap pertemuan sel grid.\n\nFormat output menggunakan tabel Markdown.'
  },

  // ================= CATEGORY: INTERAKSI =================
  {
    id: 'p8',
    category: 'interaksi',
    title: 'Skenario Roleplay / Simulasi',
    description: 'Membuat skenario untuk praktik langsung (bermain peran) di kelas.',
    prompt: 'Rancang sebuah skenario Roleplay (Bermain Peran) berdurasi 15 menit untuk materi "[Topik Materi]".\n\nSkenario harus mencakup:\n1. Latar Belakang Cerita (Konteks)\n2. 3-4 Peran/Karakter yang akan dimainkan oleh siswa, lengkap dengan sifat dan tujuan rahasia masing-masing karakter.\n3. Konflik utama yang harus mereka selesaikan bersama melalui negosiasi atau penerapan materi terkait.\n4. Pertanyaan panduan untuk sesi de-briefing (refleksi) setelah roleplay selesai.'
  },
  {
    id: 'p9',
    category: 'interaksi',
    title: 'Pembuat Gamifikasi (Game Rules)',
    description: 'Mengubah materi membosankan menjadi sebuah permainan kelas.',
    prompt: 'Saya ingin melakukan review materi "[Topik Materi]" dengan cara bermain game di dalam kelas tanpa menggunakan gadget/HP. Jumlah siswa saya [Jumlah Siswa] orang.\n\nCiptakan aturan permainan yang:\n1. Melibatkan kompetisi antar kelompok\n2. Memiliki sistem poin atau reward\n3. Memaksa siswa untuk mengingat dan menerapkan materi tersebut\n4. Menyenangkan dan membuat mereka banyak bergerak.\nJelaskan alat yang dibutuhkan, cara bermain, dan cara menentukan pemenang.'
  }
];

// Export to global window
window.promptDatabase = promptDatabase;
