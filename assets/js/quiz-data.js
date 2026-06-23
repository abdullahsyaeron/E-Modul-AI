/**
 * quiz-data.js
 * Contains all quiz questions, options, and explanations for each BAB
 */

const quizData = {
  bab1: [
    {
      question: "Apa definisi paling tepat untuk Artificial Intelligence (AI) dalam konteks modern?",
      options: [
        "Robot fisik yang dapat bergerak dan berbicara layaknya manusia secara sempurna",
        "Sistem komputer yang mampu melakukan tugas yang biasanya membutuhkan kecerdasan manusia",
        "Aplikasi kalkulator canggih yang hanya bisa memproses data angka dalam jumlah besar",
        "Jaringan internet yang menghubungkan seluruh komputer di dunia tanpa campur tangan manusia"
      ],
      correct: 1,
      explanation: "AI dalam konteks modern merujuk pada sistem komputer atau perangkat lunak yang dirancang untuk meniru fungsi kognitif manusia seperti belajar, bernalar, dan memecahkan masalah."
    },
    {
      question: "Manakah dari berikut ini yang BUKAN merupakan contoh penerapan AI dalam kehidupan sehari-hari?",
      options: [
        "Sistem rekomendasi film pada platform streaming seperti Netflix",
        "Asisten suara virtual seperti Siri atau Google Assistant",
        "Mesin ketik manual tradisional",
        "Fitur pengenalan wajah pada smartphone"
      ],
      correct: 2,
      explanation: "Mesin ketik manual murni merupakan perangkat mekanis tanpa komponen komputasi apalagi kecerdasan buatan."
    },
    {
      question: "Apa yang membedakan 'Generative AI' dengan AI tradisional?",
      options: [
        "Generative AI hanya bisa menganalisis data, sedangkan AI tradisional bisa membuat data baru",
        "Generative AI mampu menciptakan konten baru (teks, gambar, audio) dari prompt, bukan sekadar memilah atau mengklasifikasi data",
        "Generative AI membutuhkan robot fisik untuk bekerja, sedangkan AI tradisional hanya berupa software",
        "Tidak ada perbedaan, keduanya adalah istilah yang sama"
      ],
      correct: 1,
      explanation: "Keunikan Generative AI (seperti ChatGPT atau Midjourney) adalah kemampuannya menghasilkan/menciptakan output (konten) yang sama sekali baru berdasarkan pola yang telah dipelajarinya."
    },
    {
      question: "Bagaimana cara kerja dasar dari sebagian besar model AI modern seperti Large Language Models (LLM)?",
      options: [
        "Mencari jawaban secara langsung di Google Search dan menyalinnya",
        "Memprediksi kata selanjutnya berdasarkan pola statistik dari miliaran data teks yang telah dipelajarinya",
        "Memiliki database berisi semua jawaban yang sudah diprogram secara manual oleh manusia",
        "Menghubungi pakar manusia secara real-time untuk menjawab pertanyaan"
      ],
      correct: 1,
      explanation: "LLM seperti ChatGPT bekerja menggunakan prinsip probabilitas statistik; mereka memprediksi token/kata apa yang paling masuk akal muncul selanjutnya berdasarkan konteks prompt dan data latihannya."
    },
    {
      question: "Dalam konteks pendidikan, apa keuntungan utama menggunakan AI?",
      options: [
        "Menggantikan peran guru sepenuhnya di kelas",
        "Membuat siswa tidak perlu lagi belajar karena AI bisa mengerjakan semua tugas",
        "Membantu personalisasi pembelajaran dan mempercepat pembuatan materi ajar bagi guru",
        "Membuat biaya pendidikan menjadi sangat mahal karena lisensi software"
      ],
      correct: 2,
      explanation: "AI berfungsi sebagai 'co-pilot' yang membantu guru bekerja lebih efisien (misal: membuat RPP, soal kuis, ilustrasi) dan memungkinkan adaptasi materi sesuai kebutuhan siswa."
    }
  ],
  
  bab2: [
    {
      question: "Platform AI mana yang paling tepat digunakan jika Anda ingin membuat ilustrasi visual/gambar untuk presentasi pelajaran Sejarah?",
      options: [
        "ChatGPT",
        "Midjourney atau Canva Text-to-Image",
        "Suno AI",
        "Grammarly"
      ],
      correct: 1,
      explanation: "Midjourney dan Canva Text-to-Image adalah contoh Generative AI berbasis gambar (Image Generation) yang tepat untuk membuat ilustrasi visual."
    },
    {
      question: "Apa fungsi utama dari AI berbasis Audio/Musik seperti Suno AI atau ElevenLabs?",
      options: [
        "Membuat ringkasan dokumen teks yang panjang",
        "Menerjemahkan teks menjadi suara narasi yang natural (Text-to-Speech) atau membuat musik dari teks",
        "Mengedit foto profil siswa agar terlihat profesional",
        "Menghitung nilai rata-rata ujian siswa secara otomatis"
      ],
      correct: 1,
      explanation: "Tools seperti ElevenLabs unggul dalam Text-to-Speech (suara narator), sedangkan Suno AI dapat menciptakan lagu lengkap berdasarkan lirik atau deskripsi teks."
    },
    {
      question: "Jika seorang guru Bahasa Inggris ingin meminta AI membuatkan cerita pendek berserta soal pemahaman bacaan (reading comprehension), tool mana yang paling efisien?",
      options: [
        "DALL-E 3",
        "HeyGen",
        "ChatGPT atau Claude",
        "Remove.bg"
      ],
      correct: 2,
      explanation: "ChatGPT dan Claude adalah Large Language Models (AI Teks) yang sangat mumpuni dalam membuat narasi (cerita), menyusun soal evaluasi, dan memberikan kunci jawaban."
    },
    {
      question: "Apa kemampuan utama dari platform seperti HeyGen atau Synthesia dalam konteks media pembelajaran?",
      options: [
        "Membuat video presenter virtual (avatar) yang berbicara sesuai skrip teks yang kita ketik",
        "Mendeteksi plagiarisme pada esai siswa",
        "Membuat mind map secara otomatis",
        "Mendesain logo sekolah"
      ],
      correct: 0,
      explanation: "Platform AI Video Generatif seperti HeyGen dan Synthesia dapat mengubah skrip teks menjadi video avatar fotorealistik yang membacakan materi layaknya manusia asli."
    },
    {
      question: "Guru Budi ingin membuat slide presentasi lengkap dengan desain, teks materi, dan gambar hanya dengan memasukkan topik 'Sistem Tata Surya'. Platform AI apa yang sebaiknya ia gunakan?",
      options: [
        "Gamma.app atau Tome",
        "Midjourney",
        "ElevenLabs",
        "Microsoft Excel"
      ],
      correct: 0,
      explanation: "Gamma.app dan Tome adalah platform AI khusus untuk pembuatan presentasi utuh. Mereka mengombinasikan generasi teks, pencarian layout, dan pembuatan gambar sekaligus dalam satu prompt."
    }
  ],

  bab3: [
    {
      question: "Apa yang dimaksud dengan 'Prompt' dalam interaksi dengan AI generatif?",
      options: [
        "Kode pemrograman rumit yang harus dihafal",
        "Sistem operasi yang menjalankan AI",
        "Instruksi atau teks masukan yang diberikan pengguna kepada AI untuk menghasilkan output",
        "Biaya berlangganan bulanan untuk menggunakan AI"
      ],
      correct: 2,
      explanation: "Prompt adalah teks instruksi yang kita ketikkan. Kualitas output AI sangat bergantung pada seberapa jelas dan spesifik prompt yang kita berikan (Garbage in, Garbage out)."
    },
    {
      question: "Manakah struktur prompt yang paling komprehensif dan menghasilkan output terbaik?",
      options: [
        "Buatkan soal matematika.",
        "Saya butuh soal cerita matematika tentang pecahan untuk anak SD kelas 4, berikan 5 soal beserta kunci jawabannya.",
        "Matematika SD pecahan",
        "Tolong bantu saya"
      ],
      correct: 1,
      explanation: "Prompt kedua memiliki Konteks (anak SD kelas 4), Topik (matematika pecahan), Format (5 soal cerita), dan Instruksi tambahan (kunci jawaban)."
    },
    {
      question: "Dalam formula 'CREATE' untuk menyusun prompt, huruf 'R' merujuk pada Role (Peran). Apa tujuannya?",
      options: [
        "Meminta AI untuk bernyanyi",
        "Memerintahkan AI untuk bertindak sebagai persona/profesi tertentu (misal: 'Bertindaklah sebagai Guru Biologi ahli')",
        "Mengulangi pertanyaan sampai AI menjawab benar",
        "Menghapus jawaban AI sebelumnya"
      ],
      correct: 1,
      explanation: "Memberikan 'Role' (Peran) pada awal prompt membantu LLM menyesuaikan gaya bahasa, kedalaman materi, dan perspektif sesuai profesi yang diminta."
    },
    {
      question: "Mengapa penting memberikan 'Konteks' audiens dalam prompt pembuatan materi pembelajaran?",
      options: [
        "Agar AI bisa menagih biaya lebih mahal",
        "Konteks tidak penting, AI tahu segalanya secara otomatis",
        "Agar AI menyesuaikan tingkat kesulitan bahasa dan analogi yang tepat (misal: bahasa untuk anak SD berbeda dengan mahasiswa)",
        "Agar AI bisa mencari data pribadi siswa"
      ],
      correct: 2,
      explanation: "Konteks audiens (usia, jenjang, kemampuan) memastikan materi tidak terlalu kekanak-kanakan atau terlalu rumit, melainkan pas dengan sasaran pembaca."
    },
    {
      question: "Apa yang harus dilakukan jika output dari AI tidak sesuai dengan harapan Anda?",
      options: [
        "Berhenti menggunakan AI selamanya",
        "Membuat akun baru",
        "Melakukan iterasi prompt dengan memberikan umpan balik (feedback) dan instruksi perbaikan kepada AI",
        "Melaporkan aplikasi AI ke pihak berwajib"
      ],
      correct: 2,
      explanation: "Prompt engineering adalah proses iteratif. Anda bisa merespons output AI dengan koreksi, misalnya: 'Buat bahasanya lebih sederhana' atau 'Soal nomor 3 terlalu sulit, ganti dengan yang lebih mudah'."
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
