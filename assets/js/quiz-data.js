/**
 * quiz-data.js
 * Contains all quiz questions, options, and explanations for each BAB
 */

const quizData = {
  bab1: [
    {
      question: "Seorang guru menggunakan AI untuk membuat infografis yang sangat menarik secara visual. Namun setelah digunakan, siswa tetap mengalami kesulitan memahami materi. Berdasarkan konsep media pembelajaran, penyebab yang paling mungkin adalah...",
      options: [
        "Media tidak menggunakan AI terbaru",
        "Media tidak dirancang berdasarkan kebutuhan belajar siswa",
        "Desain visual terlalu sederhana",
        "Guru kurang menggunakan animasi"
      ],
      correct: 1, // B is index 1
      explanation: "Media pembelajaran harus dirancang berdasarkan tujuan pembelajaran dan karakteristik peserta didik, bukan sekadar menarik secara visual."
    },
    {
      question: "Guru A menggunakan AI untuk membuat poster, sedangkan Guru B menggunakan AI untuk membuat video. Kriteria utama yang seharusnya menentukan pilihan jenis media tersebut adalah...",
      options: [
        "Popularitas platform AI",
        "Kemudahan penggunaan aplikasi",
        "Kesesuaian media dengan karakteristik materi dan tujuan pembelajaran",
        "Jumlah fitur AI yang tersedia"
      ],
      correct: 2, // C is index 2
      explanation: "Kriteria utama dalam memilih media adalah kesesuaiannya dengan materi dan tujuan pembelajaran yang ingin dicapai."
    },
    {
      question: "Perhatikan pernyataan berikut:\n1. AI dapat mempercepat produksi media.\n2. AI dapat menggantikan seluruh keputusan pembelajaran guru.\n3. AI membantu mengatasi keterbatasan teknis guru.\n4. AI perlu diawasi dan diverifikasi oleh guru.\nPernyataan yang benar adalah...",
      options: [
        "1 dan 2",
        "1, 3, dan 4",
        "2 dan 3",
        "Semua benar"
      ],
      correct: 1, // B is index 1
      explanation: "Pernyataan 2 salah, karena AI adalah asisten, sedangkan keputusan pedagogis tetap berada sepenuhnya di tangan guru. Pernyataan 1, 3, dan 4 benar."
    },
    {
      question: "Seorang guru meminta AI membuat media pembelajaran tanpa menjelaskan karakteristik siswa maupun tujuan pembelajaran. Risiko terbesar dari tindakan tersebut adalah...",
      options: [
        "Proses pembuatan menjadi lebih lama",
        "Media tidak relevan dengan kebutuhan belajar siswa",
        "AI tidak dapat menghasilkan output",
        "File media menjadi terlalu besar"
      ],
      correct: 1, // B is index 1
      explanation: "Tanpa konteks yang spesifik (karakteristik siswa dan tujuan), AI akan menghasilkan output umum yang kemungkinan besar tidak relevan dengan kebutuhan belajar di kelas tersebut."
    },
    {
      question: "Menurut Anda, peran utama guru dalam penggunaan AI adalah...",
      options: [
        "Operator teknologi",
        "Pengawas penggunaan perangkat",
        "Pengambil keputusan pedagogis",
        "Pengguna aplikasi"
      ],
      correct: 2, // C is index 2
      explanation: "Peran utama guru bukan sekadar menjadi operator teknis, melainkan pengambil keputusan pedagogis yang menentukan tujuan dan relevansi konten yang dihasilkan AI."
    }
  ],
  
  bab2: [
    {
      question: "Guru ingin menjelaskan proses fotosintesis yang melibatkan tahapan dan perubahan yang berlangsung secara berurutan. Media yang paling tepat adalah...",
      options: [
        "Poster",
        "Video pembelajaran",
        "Tabel teks",
        "Brosur"
      ],
      correct: 1,
      explanation: "Proses yang melibatkan tahapan dan perubahan (dinamis) paling efektif dijelaskan menggunakan media berbasis waktu seperti video pembelajaran."
    },
    {
      question: "AI menghasilkan informasi berikut:\n\"Indonesia memiliki 40 provinsi sejak tahun 2020.\"\nGuru langsung memasukkan informasi tersebut ke media pembelajaran. Kesalahan utama guru adalah...",
      options: [
        "Tidak menggunakan platform AI premium",
        "Tidak menerapkan prinsip verifikasi",
        "Terlalu percaya pada teknologi",
        "Tidak menggunakan gambar"
      ],
      correct: 1,
      explanation: "AI rentan mengalami halusinasi atau memberikan fakta yang salah. Guru wajib memverifikasi semua informasi faktual yang dihasilkan oleh AI sebelum menggunakannya."
    },
    {
      question: "Mengapa kualitas prompt sangat memengaruhi kualitas output AI?",
      options: [
        "Karena AI hanya bekerja berdasarkan instruksi yang diterima",
        "Karena AI selalu menghasilkan jawaban berbeda",
        "Karena AI tidak memiliki data",
        "Karena AI hanya memahami bahasa Inggris"
      ],
      correct: 0,
      explanation: "AI generatif beroperasi sangat bergantung pada instruksi spesifik (prompt). Kualitas dan relevansi output berbanding lurus dengan kejelasan instruksi yang diberikan."
    },
    {
      question: "Guru menemukan bahwa gambar yang dihasilkan AI menampilkan representasi budaya yang stereotipikal. Kasus ini menunjukkan keterbatasan AI berupa...",
      options: [
        "Halusinasi",
        "Prompt error",
        "Bias data",
        "Gangguan sistem"
      ],
      correct: 2,
      explanation: "AI mempelajari pola dari data latihannya. Jika data tersebut mengandung bias budaya atau stereotip, AI akan mereproduksinya dalam gambar yang dihasilkan (bias data)."
    },
    {
      question: "Manakah tindakan yang paling tepat ketika menggunakan AI dalam pengembangan media?",
      options: [
        "Menggunakan output AI tanpa revisi",
        "Menjadikan output AI sebagai draft awal yang diverifikasi",
        "Menyalin seluruh hasil AI",
        "Menghilangkan proses evaluasi"
      ],
      correct: 1,
      explanation: "AI sebaiknya diposisikan sebagai asisten (co-pilot) untuk mempercepat pembuatan draft awal. Guru tetap harus mengevaluasi, memverifikasi, dan menyempurnakannya."
    }
  ],

  bab3: [
    {
      question: "Guru ingin membuat video pembelajaran menggunakan AI. Langkah pertama dalam Model MAP-AI adalah...",
      options: [
        "Membuat video",
        "Menentukan tujuan pembelajaran",
        "Menulis prompt",
        "Memilih platform"
      ],
      correct: 1,
      explanation: "Langkah paling awal dalam Model MAP-AI (maupun desain instruksional lainnya) selalu berawal dari merumuskan tujuan pembelajaran sebelum menyentuh AI."
    },
    {
      question: "Seorang guru meminta ChatGPT langsung membuat materi presentasi lengkap.\nGuru lain meminta ChatGPT:\n• menganalisis materi\n• menyusun tujuan\n• membuat outline\n• membuat prompt Gamma\nPendekatan kedua lebih baik karena...",
      options: [
        "Lebih cepat",
        "Menggunakan prompt chaining yang lebih sistematis",
        "Menghasilkan lebih banyak slide",
        "Lebih mudah disalin"
      ],
      correct: 1,
      explanation: "Pendekatan kedua adalah contoh penerapan Prompt Chaining. Hal ini memastikan output AI selaras secara bertahap dan lebih terstruktur dibanding prompt sekali jadi."
    },
    {
      question: "Dalam Model MAP-AI, kapan proses revisi perlu dilakukan?",
      options: [
        "Hanya setelah media selesai",
        "Jika ditemukan ketidaksesuaian terhadap kriteria evaluasi",
        "Setelah presentasi kepada siswa",
        "Setelah semester berakhir"
      ],
      correct: 1,
      explanation: "Proses revisi bersifat iteratif dan dilakukan setiap kali ditemukan output yang tidak selaras dengan kriteria evaluasi (tujuan, karakteristik siswa, akurasi fakta)."
    },
    {
      question: "Manakah contoh penerapan prinsip kontekstualisasi?",
      options: [
        "Menggunakan output AI apa adanya",
        "Menyesuaikan media dengan karakteristik siswa dan konteks sekolah",
        "Menggunakan AI terbaru",
        "Membuat media sebanyak mungkin"
      ],
      correct: 1,
      explanation: "Prinsip kontekstualisasi berarti menyesuaikan konten umum dari AI agar relevan dengan budaya sekolah, latar belakang siswa, dan lingkungan belajar lokal."
    },
    {
      question: "Seorang guru memperoleh media yang menarik tetapi tidak mendukung tujuan pembelajaran. Prinsip yang dilanggar adalah...",
      options: [
        "Iterasi",
        "Verifikasi",
        "Goal-Driven",
        "Prompt Chaining"
      ],
      correct: 2,
      explanation: "Prinsip Goal-Driven menekankan bahwa tujuan pembelajaran adalah panglima. Visual yang indah tidak ada gunanya jika melenceng dari kompetensi yang harus dicapai."
    }
  ],

  bab4: [
    {
      question: "Langkah PERTAMA yang paling esensial sebelum menggunakan AI untuk membuat media pembelajaran adalah?",
      options: [
        "Membeli lisensi AI termahal",
        "Menentukan Tujuan Pembelajaran dan mengidentifikasi karakteristik siswa",
        "Mencari gambar di Google",
        "Mencetak buku panduan"
      ],
      correct: 1,
      explanation: "AI hanyalah alat (tool). Tanpa rumusan tujuan pembelajaran (kompetensi dasar/indikator) yang jelas, output AI tidak akan memiliki arah pedagogik yang benar."
    },
    {
      question: "Jika Anda ingin membuat modul berbasis teks, bagaimana alur penggunaan AI yang paling disarankan?",
      options: [
        "Minta AI membuat semuanya dalam 1 prompt pendek, lalu langsung cetak",
        "Gunakan pendekatan bertahap: minta AI buatkan silabus/outline dulu, revisi outline, lalu minta AI kembangkan per sub-bab",
        "Suruh siswa yang membuat modulnya menggunakan AI",
        "Salin langsung artikel dari Wikipedia"
      ],
      correct: 1,
      explanation: "Pendekatan 'Step-by-step' (membuat outline dulu sebelum konten penuh) meminimalkan risiko AI berhalusinasi dan memberikan kontrol lebih besar bagi guru untuk mengoreksi struktur."
    },
    {
      question: "Dalam pembuatan media Video Pembelajaran, AI dapat membantu dalam tahapan apa saja?",
      options: [
        "Hanya saat merekam video",
        "Hanya saat mengedit video",
        "Menulis skrip (ChatGPT), membuat storyboard visual (Midjourney), hingga men-generate video/suara narator (HeyGen/ElevenLabs)",
        "AI tidak bisa digunakan untuk membuat video"
      ],
      correct: 2,
      explanation: "AI dapat dilibatkan secara end-to-end dalam produksi video: mulai dari pra-produksi (ideasi, skrip), produksi (generasi aset visual/audio), hingga pasca-produksi (editing otomatis)."
    },
    {
      question: "Bagaimana cara terbaik mengintegrasikan hasil gambar dari AI (misal Canva AI) ke dalam presentasi kelas?",
      options: [
        "Memasukkan semua gambar acak tanpa keterangan",
        "Memastikan gambar relevan dengan teks, memiliki resolusi baik, dan menambah pemahaman konsep (bukan sekadar dekorasi)",
        "Membuat gambar yang penuh dengan teks agar siswa sibuk membaca",
        "Menjadikan gambar sebagai background yang menutupi teks materi utama"
      ],
      correct: 1,
      explanation: "Prinsip multimedia dalam pembelajaran (Mayer) menyatakan bahwa elemen visual harus selaras dengan teks dan berfungsi memfasilitasi pemrosesan kognitif, bukan menjadi distraksi."
    },
    {
      question: "Setelah AI selesai meng-generate media pembelajaran, apa peran guru selanjutnya?",
      options: [
        "Langsung membagikannya ke siswa tanpa dibaca",
        "Menghapusnya kembali",
        "Bertindak sebagai Kurator: memverifikasi fakta, menyesuaikan konteks lokal, dan memastikan keselarasan dengan kurikulum",
        "Mengganti nama AI menjadi namanya sendiri agar terlihat pintar"
      ],
      correct: 2,
      explanation: "Human-in-the-loop sangat penting. AI bisa salah (halusinasi). Guru harus mengkurasi, memvalidasi kebenaran materi, dan memberikan sentuhan humanis/kontekstual sebelum digunakan di kelas."
    }
  ],

  bab5: [
    {
      question: "Apa yang dimaksud dengan fenomena 'AI Hallucination' (Halusinasi AI)?",
      options: [
        "Kondisi di mana komputer server AI mengalami overheating",
        "Ketika AI menolak untuk menjawab prompt dari pengguna",
        "Keadaan di mana AI menghasilkan informasi yang terdengar sangat meyakinkan tetapi faktanya salah atau tidak eksis",
        "Saat AI bisa memprediksi masa depan dengan akurat"
      ],
      correct: 2,
      explanation: "Halusinasi terjadi karena AI memprediksi teks berdasarkan pola statistik, sehingga ia bisa menyusun kalimat yang sangat logis dan terstruktur dengan baik tentang fakta atau sumber yang sebenarnya fiktif."
    },
    {
      question: "Tindakan apa yang paling tepat untuk menghindari penyebaran misinformasi akibat Halusinasi AI?",
      options: [
        "Mempercayai 100% semua output AI asalkan tata bahasanya bagus",
        "Melakukan fact-checking silang (verifikasi) informasi dari AI dengan sumber buku/jurnal/website yang kredibel",
        "Menggunakan font ukuran kecil agar kesalahan tidak terlihat oleh siswa",
        "Hanya menggunakan AI di malam hari"
      ],
      correct: 1,
      explanation: "Guru wajib menjadi validator fakta (fact-checker). AI generatif saat ini bukanlah search engine berbasis fakta mutlak, melainkan mesin probabilitas bahasa."
    },
    {
      question: "Terkait Hak Cipta (Copyright) dari gambar yang dihasilkan oleh AI seperti Midjourney, apa sikap yang paling aman bagi pendidik?",
      options: [
        "Mengklaim gambar tersebut sebagai lukisan tangan sendiri",
        "Menjual gambar tersebut ke penerbit buku",
        "Menggunakan untuk keperluan edukasi non-komersial di kelas sambil memberi keterangan bahwa gambar dihasilkan oleh AI",
        "Mematenkan gambar tersebut ke dirjen HAKI"
      ],
      correct: 2,
      explanation: "Hukum hak cipta karya AI masih dalam wilayah abu-abu. Namun untuk keperluan edukasi kelas (fair use), sangat aman digunakan asalkan transparan (mendeklarasikan bahwa itu buatan AI)."
    },
    {
      question: "Mengapa menginput data pribadi siswa (nama lengkap, nilai, alamat) ke dalam platform AI publik seperti ChatGPT gratis sangat TIDAK disarankan?",
      options: [
        "Karena AI akan mengejek nilai siswa yang jelek",
        "Karena AI publik dapat menggunakan data yang dimasukkan (prompt) sebagai bahan latihan model mereka, sehingga melanggar privasi data siswa",
        "Karena ChatGPT tidak mengerti bahasa Indonesia",
        "Karena akan membuat proses komputasi melambat"
      ],
      correct: 1,
      explanation: "Banyak platform AI versi gratis yang mencantumkan dalam Terms of Service bahwa mereka berhak menggunakan log percakapan pengguna untuk melatih versi AI berikutnya, yang berisiko membocorkan data sensitif."
    },
    {
      question: "Sikap etis apa yang sebaiknya ditanamkan guru kepada siswa terkait penggunaan AI dalam mengerjakan tugas?",
      options: [
        "Melarang total penggunaan teknologi apapun di sekolah",
        "Menyuruh siswa menggunakan AI untuk copy-paste seluruh jawaban tugas agar nilai bagus",
        "Mengajarkan transparansi (mengutip penggunaan AI) dan memfungsikan AI sebagai teman diskusi/brainstorming, bukan sebagai joki tugas",
        "Menghukum siswa yang tahu tentang AI"
      ],
      correct: 2,
      explanation: "Melarang AI secara total adalah kemunduran. Literasi AI yang etis adalah mengajarkan siswa memanfaatkannya sebagai alat bantu kognitif (tutor, partner brainstorming) namun tetap mengedepankan pemikiran orisinal."
    }
  ]
};

// Global export
window.quizData = quizData;
