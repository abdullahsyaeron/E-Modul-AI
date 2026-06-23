/**
 * evaluasi-data.js
 * Instrumen evaluasi kelayakan media pembelajaran berbasis AI.
 * Menggunakan rubrik dengan 5 Dimensi dan 14 Indikator (Skala 1-4).
 */

const evaluasiData = [
  {
    dimensi: "Kesesuaian Instruksional",
    id: "instruksional",
    icon: "fa-bullseye",
    kriteria: [
      {
        id: "d1_1",
        indikator: "Kesesuaian tujuan",
        options: [
          { val: 1, text: "Tidak sesuai" },
          { val: 2, text: "Kurang sesuai" },
          { val: 3, text: "Sesuai" },
          { val: 4, text: "Sangat sesuai" }
        ]
      },
      {
        id: "d1_2",
        indikator: "Kesesuaian materi",
        options: [
          { val: 1, text: "Tidak sesuai" },
          { val: 2, text: "Kurang sesuai" },
          { val: 3, text: "Sesuai" },
          { val: 4, text: "Sangat sesuai" }
        ]
      },
      {
        id: "d1_3",
        indikator: "Kesesuaian karakteristik siswa",
        options: [
          { val: 1, text: "Tidak sesuai" },
          { val: 2, text: "Kurang sesuai" },
          { val: 3, text: "Sesuai" },
          { val: 4, text: "Sangat sesuai" }
        ]
      }
    ]
  },
  {
    dimensi: "Kualitas Konten",
    id: "konten",
    icon: "fa-book-open",
    kriteria: [
      {
        id: "d2_1",
        indikator: "Akurasi informasi",
        options: [
          { val: 1, text: "Banyak kesalahan" },
          { val: 2, text: "Beberapa kesalahan" },
          { val: 3, text: "Hampir seluruhnya benar" },
          { val: 4, text: "Seluruhnya benar" }
        ]
      },
      {
        id: "d2_2",
        indikator: "Kelengkapan materi",
        options: [
          { val: 1, text: "Sangat kurang" },
          { val: 2, text: "Kurang" },
          { val: 3, text: "Cukup" },
          { val: 4, text: "Sangat lengkap" }
        ]
      },
      {
        id: "d2_3",
        indikator: "Kejelasan penyajian",
        options: [
          { val: 1, text: "Tidak jelas" },
          { val: 2, text: "Kurang jelas" },
          { val: 3, text: "Jelas" },
          { val: 4, text: "Sangat jelas" }
        ]
      }
    ]
  },
  {
    dimensi: "Kualitas Media",
    id: "media",
    icon: "fa-palette",
    kriteria: [
      {
        id: "d3_1",
        indikator: "Keterbacaan",
        options: [
          { val: 1, text: "Buruk" },
          { val: 2, text: "Kurang" },
          { val: 3, text: "Baik" },
          { val: 4, text: "Sangat baik" }
        ]
      },
      {
        id: "d3_2",
        indikator: "Desain visual",
        options: [
          { val: 1, text: "Tidak menarik" },
          { val: 2, text: "Kurang menarik" },
          { val: 3, text: "Menarik" },
          { val: 4, text: "Sangat menarik" }
        ]
      },
      {
        id: "d3_3",
        indikator: "Kemudahan digunakan",
        options: [
          { val: 1, text: "Sulit" },
          { val: 2, text: "Agak sulit" },
          { val: 3, text: "Mudah" },
          { val: 4, text: "Sangat mudah" }
        ]
      }
    ]
  },
  {
    dimensi: "Etika Penggunaan AI",
    id: "etika",
    icon: "fa-balance-scale",
    kriteria: [
      {
        id: "d4_1",
        indikator: "Verifikasi fakta",
        options: [
          { val: 1, text: "Tidak dilakukan" },
          { val: 2, text: "Sebagian" },
          { val: 3, text: "Hampir seluruhnya" },
          { val: 4, text: "Seluruhnya" }
        ]
      },
      {
        id: "d4_2",
        indikator: "Privasi data",
        options: [
          { val: 1, text: "Berisiko" },
          { val: 2, text: "Ada kekurangan" },
          { val: 3, text: "Hampir sesuai" },
          { val: 4, text: "Sepenuhnya sesuai" }
        ]
      },
      {
        id: "d4_3",
        indikator: "Hak cipta dan atribusi",
        options: [
          { val: 1, text: "Tidak jelas" },
          { val: 2, text: "Kurang jelas" },
          { val: 3, text: "Cukup jelas" },
          { val: 4, text: "Sangat jelas" }
        ]
      }
    ]
  },
  {
    dimensi: "Kontribusi Pedagogis Guru",
    id: "pedagogis",
    icon: "fa-chalkboard-teacher",
    kriteria: [
      {
        id: "d5_1",
        indikator: "Modifikasi output AI",
        options: [
          { val: 1, text: "Tidak ada" },
          { val: 2, text: "Sedikit" },
          { val: 3, text: "Cukup banyak" },
          { val: 4, text: "Substansial" }
        ]
      },
      {
        id: "d5_2",
        indikator: "Kontekstualisasi",
        options: [
          { val: 1, text: "Tidak ada" },
          { val: 2, text: "Kurang" },
          { val: 3, text: "Baik" },
          { val: 4, text: "Sangat baik" }
        ]
      }
    ]
  }
];

window.evaluasiData = evaluasiData;
