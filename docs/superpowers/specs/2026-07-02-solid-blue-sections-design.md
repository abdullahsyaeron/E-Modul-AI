# Spesifikasi Desain: Penggunaan Warna Biru Solid (Option 1) pada Section Eksplorasi E-Modul & CTA

## Tanggal
2026-07-02

## 1. Tujuan (Goal)
Mengganti warna latar belakang pada dua section utama di halaman Dashboard (`index.html`):
1. **Section Eksplorasi E-Modul** (Akses Cepat 4 Modul)
2. **Section CTA "Siap Untuk Bertransformasi?"**

Sebelumnya kedua section tersebut menggunakan latar belakang gelap (`#1e1e20` / `.tile-dark`). Sesuai masukan dosen ahli media dan persetujuan pengguna (Option 1), latar belakang kedua section ini akan diubah menjadi **Warna Biru Solid Apple (`#006EE6`)**.

## 2. Pendekatan Desain (Option 1: Pure Apple Blue Solid)
* **Warna Latar:** `#006EE6` (Biru Apple) solid tanpa gradasi.
* **Teks Section Header / CTA:** Menggunakan warna putih (`#FFFFFF`) dengan label kontras tinggi (`rgba(255,255,255,0.8)`).
* **Kartu Eksplorasi (`.quick-card`):** Tetap berlatar putih bersih (`#FFFFFF`) dengan bayangan lembut, sehingga 4 kartu (Materi Pembelajaran, Prompt Library, Evaluasi, Tentang) terlihat sangat menonjol (*pop out*) di atas latar biru.
* **Tombol CTA (`Mulai Pembelajaran`):** Tombol berlatar putih (`background: #FFFFFF`) dengan teks berwarna biru (`color: #006EE6`), memberikan kontras dan interaktivitas optimal.

## 3. Komponen & File yang Dipengaruhi
* **CSS (`assets/css/main.css`):**
  * Pembuatan kelas utilitas baru `.tile-blue` untuk menggantikan penggunaan `.tile-dark` pada kedua section tersebut.
  * Definisi styling `.tile-blue` mencakup warna latar `#006EE6`, warna teks putih, serta styling untuk `.section-label` di dalamnya.
* **HTML (`index.html`):**
  * Mengganti kelas `tile-dark` menjadi `tile-blue` pada section **Eksplorasi E-Modul** (baris ~94).
  * Mengganti kelas `tile-dark` menjadi `tile-blue` pada section **Siap Untuk Bertransformasi?** (baris ~237).

## 4. Rencana Evaluasi Visual
Setelah perubahan diimplementasikan, pengguna dapat memeriksa hasil tampilan di browser localhost:
* Jika kontras `#006EE6` terlalu terang/menyengat, opsi cadangan selanjutnya (Option 2: Deep Navy Blue `#004394` atau Option 3: Ice Blue Tint) siap diterapkan.
