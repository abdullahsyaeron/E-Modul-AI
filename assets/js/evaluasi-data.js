/**
 * evaluasi-data.js
 * Instrumen evaluasi kelayakan media pembelajaran berbasis AI.
 * Terdiri dari 3 dimensi utama: Pedagogik, Materi/Konten, dan Desain Visual.
 */

const evaluasiData = [
  {
    dimensi: "Pedagogik & Instruksional",
    id: "pedagogik",
    icon: "fa-graduation-cap",
    kriteria: [
      {
        id: "p1",
        pertanyaan: "Apakah media pembelajaran secara jelas selaras dengan Tujuan Pembelajaran / Capaian Pembelajaran yang ingin dicapai?",
        bobot: 1
      },
      {
        id: "p2",
        pertanyaan: "Apakah media menyediakan interaktivitas atau memancing siswa untuk berpikir aktif (bukan sekadar membaca pasif)?",
        bobot: 1
      },
      {
        id: "p3",
        pertanyaan: "Apakah bahasa yang digunakan oleh AI sudah disesuaikan dengan tingkat usia, kognitif, dan karakteristik siswa?",
        bobot: 1
      },
      {
        id: "p4",
        pertanyaan: "Apakah media memberikan kesempatan bagi siswa untuk melakukan refleksi atau evaluasi mandiri?",
        bobot: 1
      }
    ]
  },
  {
    dimensi: "Keakuratan Materi & Konten",
    id: "konten",
    icon: "fa-book",
    kriteria: [
      {
        id: "k1",
        pertanyaan: "Apakah seluruh fakta, data, dan konsep yang di-generate oleh AI telah diverifikasi kebenarannya oleh guru (bebas halusinasi)?",
        bobot: 1.5 // Bobot lebih tinggi karena krusial
      },
      {
        id: "k2",
        pertanyaan: "Apakah materi bebas dari bias budaya, gender, atau stereotip negatif yang mungkin dibawa oleh algoritma AI?",
        bobot: 1
      },
      {
        id: "k3",
        pertanyaan: "Apakah contoh atau studi kasus yang disajikan relevan dengan konteks lokal dan kehidupan keseharian siswa di Indonesia?",
        bobot: 1
      },
      {
        id: "k4",
        pertanyaan: "Apakah alur penyajian materi logis dan sistematis (dari mudah ke sulit, atau dari konkret ke abstrak)?",
        bobot: 1
      }
    ]
  },
  {
    dimensi: "Desain Visual & Teknis",
    id: "visual",
    icon: "fa-palette",
    kriteria: [
      {
        id: "v1",
        pertanyaan: "Apakah gambar/ilustrasi dari AI (Midjourney/Canva) relevan dengan teks materi dan membantu pemahaman, bukan sekadar dekorasi?",
        bobot: 1
      },
      {
        id: "v2",
        pertanyaan: "Apakah teks mudah dibaca (ukuran font cukup, kontras warna antara teks dan background jelas)?",
        bobot: 1
      },
      {
        id: "v3",
        pertanyaan: "Apakah media tidak memuat terlalu banyak informasi dalam satu halaman/slide (menghindari Cognitive Overload)?",
        bobot: 1
      },
      {
        id: "v4",
        pertanyaan: "Jika menggunakan AI Audio/Video (HeyGen/ElevenLabs), apakah suara narator terdengar jelas, intonasinya tepat, dan tidak mengganggu konsentrasi?",
        bobot: 1
      }
    ]
  }
];

window.evaluasiData = evaluasiData;
