# Eksplorasi E-Modul Card Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Mengubah struktur layout 4 kartu pada section Eksplorasi E-Modul (`index.html`) menjadi anatomi 3-zona (Inner Pastel Pill Box, Deskripsi, Footer Row) sesuai spesifikasi tanpa merubah isi konten maupun ikon 2.5D SVG eksisting.

**Architecture:** Modifikasi struktur HTML kartu `.quick-card` menjadi 3 div anak (`.quick-card-header`, `.quick-card-body`, `.quick-card-footer`) dan pembaruan aturan gaya CSS terkait pada `assets/css/pages.css`.

**Tech Stack:** HTML5, Vanilla CSS

## Global Constraints
- Tidak mengubah isi teks judul dan deskripsi dari 4 kartu Eksplorasi E-Modul.
- Tidak mengubah atau merusak elemen SVG ikon 2.5D di dalam masing-masing kartu.
- Menambahkan parameter versi cache buster baru pada pemanggilan aset agar browser memuat CSS yang diperbarui.

---

### Task 1: Update Struktur HTML Kartu Eksplorasi E-Modul di `index.html`

**Files:**
- Modify: `index.html:103-165`

**Interfaces:**
- Consumes: Ikon 2.5D SVG eksisting dan copy teks deskripsi eksisting.
- Produces: Struktur kelas baru (`.quick-card`, `.quick-card-header`, `.card-theme-*`, `.quick-card-body`, `.quick-card-footer`, `.card-sublabel`, `.card-pill-btn`).

- [ ] **Step 1: Perbarui struktur HTML untuk 4 kartu pada section Eksplorasi E-Modul**

Ganti blok HTML kartu eksisting di `index.html` dengan markup 3-zona berikut:

```html
            <div class="quick-access-grid">
                <!-- Kartu 1: Materi Pembelajaran -->
                <a href="materi.html" class="quick-card card-theme-blue">
                    <div class="quick-card-header">
                        <div class="quick-card-icon card-icon-primary">
                            <svg width="38" height="38" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="6" y="8" width="36" height="32" rx="4" fill="#006EE6"/>
                                <path d="M12 14H36V36H12V14Z" fill="#E6F2FF"/>
                                <path d="M24 14V36" stroke="#006EE6" stroke-width="2"/>
                                <path d="M16 20H21" stroke="#0052B3" stroke-width="2" stroke-linecap="round"/>
                                <path d="M16 25H21" stroke="#0052B3" stroke-width="2" stroke-linecap="round"/>
                                <path d="M27 20H32" stroke="#0052B3" stroke-width="2" stroke-linecap="round"/>
                                <path d="M27 25H32" stroke="#0052B3" stroke-width="2" stroke-linecap="round"/>
                                <path d="M30 8V20L34 17L38 20V8H30Z" fill="#FFB300"/>
                            </svg>
                        </div>
                        <h3>Materi Pembelajaran</h3>
                    </div>
                    <div class="quick-card-body">
                        <p>Pelajari konsep dasar AI, tools generatif, dan strategi implementasinya dalam pembelajaran.</p>
                    </div>
                    <div class="quick-card-footer">
                        <span class="card-sublabel">Modul Interaktif</span>
                        <span class="card-pill-btn">Mulai Belajar <i class="ph ph-arrow-right"></i></span>
                    </div>
                </a>
                
                <!-- Kartu 2: Prompt Library -->
                <a href="prompt.html" class="quick-card card-theme-gold">
                    <div class="quick-card-header">
                        <div class="quick-card-icon card-icon-accent">
                            <svg width="38" height="38" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="8" y="14" width="32" height="26" rx="4" fill="#006EE6"/>
                                <path d="M14 20H34M14 26H28M14 32H24" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round"/>
                                <circle cx="34" cy="14" r="9" fill="#FFB300"/>
                                <path d="M34 9V11M34 17V19M29 14H31M37 14H39M30.5 10.5L31.8 11.8M36.2 16.2L37.5 17.5M37.5 10.5L36.2 11.8M31.8 16.2L30.5 17.5" stroke="#FFFFFF" stroke-width="1.8" stroke-linecap="round"/>
                            </svg>
                        </div>
                        <h3>Prompt Library</h3>
                    </div>
                    <div class="quick-card-body">
                        <p>Temukan ratusan template prompt siap pakai untuk berbagai mata pelajaran dan kebutuhan.</p>
                    </div>
                    <div class="quick-card-footer">
                        <span class="card-sublabel">Koleksi AI</span>
                        <span class="card-pill-btn">Lihat Prompt <i class="ph ph-arrow-right"></i></span>
                    </div>
                </a>
                
                <!-- Kartu 3: Evaluasi -->
                <a href="evaluasi.html" class="quick-card card-theme-emerald">
                    <div class="quick-card-header">
                        <div class="quick-card-icon card-icon-success">
                            <svg width="38" height="38" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="10" y="8" width="28" height="34" rx="4" fill="#006EE6"/>
                                <path d="M18 5H30V9H18V5Z" fill="#004394" rx="2"/>
                                <rect x="15" y="14" width="18" height="22" rx="2" fill="#FFFFFF"/>
                                <path d="M19 23L23 27L31 17" stroke="#FFB300" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M19 32H29" stroke="#006EE6" stroke-width="2" stroke-linecap="round"/>
                            </svg>
                        </div>
                        <h3>Evaluasi</h3>
                    </div>
                    <div class="quick-card-body">
                        <p>Gunakan instrumen interaktif untuk menilai kualitas media pembelajaran yang telah Anda buat.</p>
                    </div>
                    <div class="quick-card-footer">
                        <span class="card-sublabel">Instrumen</span>
                        <span class="card-pill-btn">Mulai Evaluasi <i class="ph ph-arrow-right"></i></span>
                    </div>
                </a>

                <!-- Kartu 4: Tentang -->
                <a href="tentang.html" class="quick-card card-theme-purple">
                    <div class="quick-card-header">
                        <div class="quick-card-icon card-icon-info">
                            <svg width="38" height="38" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="8" y="10" width="32" height="28" rx="4" fill="#006EE6"/>
                                <circle cx="24" cy="21" r="5" fill="#FFFFFF"/>
                                <path d="M16 32C16 28.5 19.5 28 24 28C28.5 28 32 28.5 32 32" fill="#E6F2FF"/>
                                <circle cx="35" cy="12" r="7" fill="#FFB300"/>
                                <path d="M35 9V13M35 15V15.5" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round"/>
                            </svg>
                        </div>
                        <h3>Tentang</h3>
                    </div>
                    <div class="quick-card-body">
                        <p>Kenali latar belakang pengembangan e-modul, profil pengembang, dan referensi yang digunakan.</p>
                    </div>
                    <div class="quick-card-footer">
                        <span class="card-sublabel">Informasi</span>
                        <span class="card-pill-btn">Baca Selengkapnya <i class="ph ph-arrow-right"></i></span>
                    </div>
                </a>
            </div>
```

- [ ] **Step 2: Update versi cache buster di `index.html`**

Ganti `v=toast1` pada tautan CSS menjadi `v=cardredesign1`:

```html
    <!-- CSS -->
    <link rel="stylesheet" href="assets/css/main.css?v=cardredesign1">
    <link rel="stylesheet" href="assets/css/components.css?v=cardredesign1">
    <link rel="stylesheet" href="assets/css/pages.css?v=cardredesign1">
```

---

### Task 2: Perbarui Gaya CSS Kartu Eksplorasi E-Modul di `pages.css`

**Files:**
- Modify: `assets/css/pages.css:1672-1730`

**Interfaces:**
- Consumes: Kelas `.quick-card`, `.quick-card-header`, `.card-theme-*`, `.quick-card-body`, `.quick-card-footer`, `.card-sublabel`, `.card-pill-btn`.

- [ ] **Step 1: Ganti aturan CSS lama `.quick-card` dengan aturan desain 3-zona**

Cari blok CSS `.quick-card` di `pages.css` dan ganti dengan aturan berikut:

```css
/* Redesign Kartu Eksplorasi E-Modul 3-Zona */
.quick-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 270px;
  padding: clamp(1.25rem, 2.5vw, 1.75rem);
  border: 1px solid rgba(0, 0, 0, 0.05);
  background: #FFFFFF;
  border-radius: 26px;
  box-shadow: 0 4px 20px -2px rgba(0, 0, 0, 0.05), 0 1px 3px 0 rgba(0, 0, 0, 0.03);
  text-decoration: none;
  transition: transform var(--transition-base), box-shadow var(--transition-base);
}

.quick-card:hover {
  transform: translateY(-1.5px);
  box-shadow: 0 12px 28px -4px rgba(0, 0, 0, 0.09);
}

/* Zona 1: Inner Pastel Pill Box */
.quick-card-header {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 14px 18px;
  border-radius: 18px;
  transition: filter var(--transition-base);
}

.card-theme-blue .quick-card-header { background: #E8F2FF; }
.card-theme-gold .quick-card-header { background: #FFF8E7; }
.card-theme-emerald .quick-card-header { background: #E8F8F2; }
.card-theme-purple .quick-card-header { background: #F0E8FF; }

.quick-card-icon {
  width: 46px;
  height: 46px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.quick-card-icon svg {
  width: 38px;
  height: 38px;
}

.quick-card-header h3 {
  margin: 0;
  font-size: 1.15rem;
  font-weight: 700;
  letter-spacing: -0.01em;
}

.card-theme-blue .quick-card-header h3 { color: #0052B3; }
.card-theme-gold .quick-card-header h3 { color: #8C6322; }
.card-theme-emerald .quick-card-header h3 { color: #167948; }
.card-theme-purple .quick-card-header h3 { color: #5B21B6; }

/* Zona 2: Deskripsi Body */
.quick-card-body {
  margin: 16px 4px;
  flex-grow: 1;
}

.quick-card-body p {
  margin: 0;
  color: #48484A;
  font-size: 0.96rem;
  line-height: 1.6;
}

/* Zona 3: Footer Bar */
.quick-card-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 14px;
  border-top: 1px solid rgba(0, 0, 0, 0.05);
  margin-top: auto;
}

.card-sublabel {
  font-size: 0.82rem;
  font-weight: 500;
  color: #6E6E73;
  letter-spacing: 0.01em;
}

.card-pill-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 16px;
  background: #F5F5F7;
  color: #1D1D1F;
  border-radius: 99px;
  font-size: 0.85rem;
  font-weight: 600;
  transition: background var(--transition-base), transform var(--transition-base);
}

.quick-card:hover .card-pill-btn {
  background: #E5E5EA;
  transform: translateX(2px);
}
```

- [ ] **Step 2: Verifikasi Manual Visual**
Buka halaman `index.html` di browser (atau lakukan Hard Refresh `Ctrl + F5`) untuk memastikan 4 kartu Eksplorasi E-Modul tampil dengan anatomi 3-zona persis referensi.
