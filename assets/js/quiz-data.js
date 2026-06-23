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
      question: "BENAR atau SALAH: Selama informasi berasal dari AI yang populer, guru tidak perlu melakukan pengecekan ulang.",
      options: ["Benar", "Salah"],
      correct: 1,
      explanation: "Guru wajib memverifikasi (fact-checking) semua informasi dari AI generatif manapun, karena AI rentan berhalusinasi atau memberikan fakta yang salah."
    },
    {
      question: "BENAR atau SALAH: Jika identitas siswa disamarkan menjadi Siswa A, Siswa B, dan Siswa C, risiko pelanggaran privasi dapat dikurangi.",
      options: ["Benar", "Salah"],
      correct: 0,
      explanation: "Menganonimkan data (de-identifikasi) sebelum memasukkannya ke platform AI adalah langkah krusial untuk melindungi privasi siswa."
    },
    {
      question: "BENAR atau SALAH: Semakin banyak AI digunakan dalam pembelajaran, semakin kecil peran guru.",
      options: ["Benar", "Salah"],
      correct: 1,
      explanation: "Peran guru tidak mengecil, melainkan bergeser dari sekadar pembuat konten teknis menjadi perancang pembelajaran, kurator, dan pengambil keputusan pedagogis."
    },
    {
      question: "BENAR atau SALAH: Output AI yang sesuai secara akademik belum tentu sesuai dengan nilai dan budaya sekolah.",
      options: ["Benar", "Salah"],
      correct: 0,
      explanation: "Kebenaran akademis berbeda dengan kesesuaian norma/akidah. Guru harus memastikan konten AI selaras dengan karakter dan budaya spesifik sekolah."
    },
    {
      question: "BENAR atau SALAH: Guru tetap bertanggung jawab terhadap dampak penggunaan media yang dikembangkan dengan bantuan AI.",
      options: ["Benar", "Salah"],
      correct: 0,
      explanation: "Tanggung jawab profesional dan etis terhadap proses dan hasil belajar siswa tetap sepenuhnya berada di tangan guru, bukan pada mesin AI."
    },
    {
      question: "Seorang guru menggunakan ChatGPT untuk membuat soal evaluasi. Setelah digunakan, ditemukan beberapa jawaban benar yang sebenarnya tidak sesuai dengan referensi resmi. Tanggung jawab utama atas kesalahan tersebut berada pada...",
      options: [
        "Pengembang ChatGPT",
        "Platform AI yang digunakan",
        "Guru sebagai pengguna dan validator media",
        "Siswa yang mengerjakan soal"
      ],
      correct: 2,
      explanation: "Dalam penggunaan AI untuk pendidikan, tanggung jawab profesional tidak berpindah kepada teknologi. Guru tetap bertanggung jawab terhadap akurasi konten yang digunakan dalam pembelajaran."
    },
    {
      question: "Perhatikan tindakan berikut:\n1. Memasukkan daftar nilai siswa ke ChatGPT untuk dianalisis.\n2. Mengganti identitas siswa menjadi kode anonim sebelum dianalisis.\n3. Memverifikasi fakta yang dihasilkan AI sebelum digunakan.\n4. Menggunakan output AI tanpa revisi karena berasal dari platform terpercaya.\nTindakan yang mencerminkan penggunaan AI secara etis adalah...",
      options: [
        "1 dan 4",
        "2 dan 3",
        "1 dan 3",
        "2 dan 4"
      ],
      correct: 1,
      explanation: "Prinsip etika AI menuntut perlindungan privasi siswa (tindakan 2) dan keharusan verifikasi terhadap seluruh output yang dihasilkan AI (tindakan 3)."
    },
    {
      question: "Seorang guru menggunakan AI untuk membuat presentasi tentang keberagaman budaya Indonesia. Setelah ditinjau, beberapa ilustrasi yang dihasilkan menampilkan stereotip terhadap kelompok budaya tertentu. Apa tindakan yang paling tepat?",
      options: [
        "Menggunakan presentasi tersebut karena informasi utamanya benar.",
        "Menghapus seluruh presentasi dan tidak menggunakan AI lagi.",
        "Merevisi atau mengganti ilustrasi yang berpotensi menimbulkan bias.",
        "Mengabaikan ilustrasi karena siswa lebih fokus pada teks."
      ],
      correct: 2,
      explanation: "Guru harus mengevaluasi output AI dari aspek akurasi maupun bias yang mungkin muncul akibat data pelatihan AI. Mengganti visual yang bias adalah langkah korektif yang wajib."
    },
    {
      question: "Sebuah video pembelajaran yang dibuat dengan AI memiliki desain visual yang sangat menarik. Namun isi materi tidak sepenuhnya mendukung tujuan pembelajaran yang telah ditetapkan. Berdasarkan prinsip etika dan desain pembelajaran, keputusan terbaik adalah...",
      options: [
        "Tetap menggunakan video karena menarik perhatian siswa.",
        "Mengurangi durasi video.",
        "Merevisi konten agar selaras dengan tujuan pembelajaran.",
        "Menambahkan lebih banyak animasi."
      ],
      correct: 2,
      explanation: "Aspek estetika tidak boleh mengalahkan keselarasan instruksional. Media yang baik pertama-tama harus mendukung pencapaian tujuan pembelajaran."
    },
    {
      question: "Manakah situasi berikut yang menunjukkan hilangnya judgment pedagogis guru?",
      options: [
        "Guru menggunakan AI untuk membuat draft media lalu melakukan revisi.",
        "Guru meminta rekan sejawat meninjau media yang dibuat.",
        "Guru menggunakan seluruh output AI tanpa mengevaluasi kesesuaiannya.",
        "Guru memverifikasi fakta dari sumber lain."
      ],
      correct: 2,
      explanation: "Hilangnya judgment (penilaian kritis) pedagogis terjadi ketika guru menyerahkan keputusan instruksional kepada AI secara mentah tanpa proses evaluasi profesional."
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
