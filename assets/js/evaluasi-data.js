/**
 * evaluasi-data.js
 * Instrumen evaluasi kelayakan media pembelajaran berbasis AI.
 * 8 Dimensi × 1 Indikator × Skala 1–4 = Skor maks 32.
 * Selaras dengan Rubrik Penilaian di Bab 5 modul ini.
 */

const evaluasiData = [
  {
    dimensi: "Keselarasan Instruksional",
    id: "instruksional",
    icon: "ph-target",
    kritis: false,
    indikator: "Kesesuaian media dengan tujuan pembelajaran",
    options: [
      { val: 4, text: "Sepenuhnya selaras dengan semua tujuan" },
      { val: 3, text: "Selaras dengan sebagian besar tujuan" },
      { val: 2, text: "Selaras dengan beberapa tujuan" },
      { val: 1, text: "Tidak selaras dengan tujuan" }
    ]
  },
  {
    dimensi: "Akurasi Konten",
    id: "akurasi",
    icon: "ph-shield-check",
    kritis: true,
    indikator: "Kebenaran faktual dan konseptual",
    options: [
      { val: 4, text: "Seluruh konten akurat dan terverifikasi" },
      { val: 3, text: "Terdapat 1–2 ketidakakuratan minor" },
      { val: 2, text: "Terdapat ketidakakuratan yang perlu diperbaiki" },
      { val: 1, text: "Mengandung kesalahan faktual signifikan" }
    ]
  },
  {
    dimensi: "Kesesuaian Usia",
    id: "usia",
    icon: "ph-users",
    kritis: false,
    indikator: "Bahasa, visual, dan kompleksitas",
    options: [
      { val: 4, text: "Sangat sesuai karakteristik kognitif dan bahasa siswa" },
      { val: 3, text: "Sebagian besar sesuai dengan penyesuaian kecil" },
      { val: 2, text: "Perlu penyesuaian cukup besar" },
      { val: 1, text: "Tidak sesuai usia dan karakteristik siswa" }
    ]
  },
  {
    dimensi: "Kualitas Teknis",
    id: "teknis",
    icon: "ph-device-mobile",
    kritis: false,
    indikator: "Keterbacaan, estetika, dan fungsionalitas",
    options: [
      { val: 4, text: "Desain profesional, mudah dibaca, berfungsi sempurna" },
      { val: 3, text: "Kualitas baik dengan perbaikan kecil" },
      { val: 2, text: "Kualitas cukup dengan beberapa masalah teknis" },
      { val: 1, text: "Kualitas rendah, sulit dibaca atau tidak berfungsi" }
    ]
  },
  {
    dimensi: "Kesesuaian Nilai dan Karakter Sekolah",
    id: "nilai",
    icon: "ph-graduation-cap",
    kritis: true,
    indikator: "Konten dan visual sesuai nilai dan visi lembaga pendidikan",
    options: [
      { val: 4, text: "Sepenuhnya sesuai nilai, budaya, dan karakter sekolah" },
      { val: 3, text: "Sesuai dengan penyesuaian minor" },
      { val: 2, text: "Memerlukan revisi pada beberapa elemen" },
      { val: 1, text: "Mengandung elemen yang tidak sesuai" }
    ]
  },
  {
    dimensi: "Kontribusi Pedagogis Guru",
    id: "pedagogis",
    icon: "ph-chalkboard-teacher",
    kritis: false,
    indikator: "Tingkat modifikasi dan judgment guru",
    options: [
      { val: 4, text: "Modifikasi substansial mencerminkan keputusan pedagogis" },
      { val: 3, text: "Modifikasi baik di atas output AI mentah" },
      { val: 2, text: "Sedikit modifikasi dari output AI" },
      { val: 1, text: "Output AI digunakan tanpa modifikasi berarti" }
    ]
  },
  {
    dimensi: "Transparansi & Etika AI",
    id: "etika",
    icon: "ph-scales",
    kritis: false,
    indikator: "Kejelasan atribusi dan etika penggunaan AI",
    options: [
      { val: 4, text: "Atribusi jelas, prinsip etika diterapkan sepenuhnya" },
      { val: 3, text: "Atribusi ada, sebagian besar etika diterapkan" },
      { val: 2, text: "Atribusi tidak jelas, beberapa isu etika terabaikan" },
      { val: 1, text: "Tidak ada atribusi, isu etika signifikan diabaikan" }
    ]
  },
  {
    dimensi: "Perlindungan Privasi & Hak Cipta",
    id: "privasi",
    icon: "ph-lock",
    kritis: true,
    indikator: "Pengelolaan data dan penggunaan aset",
    options: [
      { val: 4, text: "Tidak ada data pribadi siswa, aset digunakan sesuai izin" },
      { val: 3, text: "Hampir tidak ada masalah privasi atau hak cipta" },
      { val: 2, text: "Terdapat isu minor yang perlu diperbaiki" },
      { val: 1, text: "Terdapat pelanggaran privasi atau hak cipta yang jelas" }
    ]
  }
];

window.evaluasiData = evaluasiData;
