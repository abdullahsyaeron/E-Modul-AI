/**
 * evaluasi-engine.js
 * Renders evaluation instrument and calculates score.
 * 8 Dimensi × Skala 1–4 = Skor maks 32.
 * Interpretasi: 28–32 Sangat Layak, 22–27 Layak, 16–21 Cukup Layak, <16 Belum Layak.
 * Selaras dengan Rubrik Penilaian Media di Bab 5 modul ini.
 */

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('evaluasi-form-container');
  if (!container || !window.evaluasiData) return;

  const data = window.evaluasiData;
  const MAX_SCORE = 32; // 8 dimensi × 4 poin

  // ─── Render Form ────────────────────────────────────────────────────────────
  let html = '<form id="evaluasi-form">';

  // Info strip
  html += `
    <div class="eval-info-strip">
      <i class="ph ph-info"></i>
      <span>Rubrik ini terdiri dari <strong>8 dimensi</strong> dengan skor maksimal <strong>32 poin</strong>, selaras dengan instrumen di <a href="materi-bab5.html#sub2">Bab 5 modul ini</a>.</span>
    </div>
  `;

  data.forEach((dimensi, dIndex) => {
    const kritisTag = dimensi.kritis
      ? `<span class="eval-kritis-badge"><i class="ph ph-warning-circle"></i> Kritis</span>`
      : '';

    html += `
      <div class="eval-card" id="eval-card-${dimensi.id}">
        <div class="eval-card-header">
          <div class="eval-card-num">${dIndex + 1}</div>
          <div class="eval-card-meta">
            <div class="eval-card-title">
              <i class="ph ${dimensi.icon}"></i>
              ${dimensi.dimensi}
              ${kritisTag}
            </div>
            <div class="eval-card-indikator">${dimensi.indikator}</div>
          </div>
        </div>
        <div class="eval-options-grid">
    `;

    dimensi.options.forEach(opt => {
      const scoreClass = opt.val === 4 ? 'opt-great' : opt.val === 3 ? 'opt-good' : opt.val === 2 ? 'opt-warn' : 'opt-poor';
      html += `
        <label class="eval-option ${scoreClass}" data-val="${opt.val}">
          <input type="radio" name="dim_${dimensi.id}" value="${opt.val}" required>
          <div class="eval-option-inner">
            <div class="eval-option-score">${opt.val}</div>
            <div class="eval-option-text">${opt.text}</div>
          </div>
        </label>
      `;
    });

    html += `
        </div>
      </div>
    `;
  });

  html += `
    <div class="text-center mt-8">
      <button type="submit" class="btn btn-primary btn-lg eval-submit-btn" id="eval-submit-btn">
        <i class="ph ph-calculator"></i> Hitung Kelayakan Media
      </button>
    </div>
  </form>`;

  container.innerHTML = html;

  // ─── Interactive: highlight selected option ──────────────────────────────
  container.addEventListener('change', (e) => {
    if (e.target.type !== 'radio') return;
    const card = e.target.closest('.eval-card');
    card.querySelectorAll('.eval-option').forEach(opt => opt.classList.remove('selected'));
    e.target.closest('.eval-option').classList.add('selected');

    // Update progress indicator
    updateProgress();
  });

  function updateProgress() {
    const total = data.length;
    let answered = 0;
    data.forEach(d => {
      if (document.querySelector(`input[name="dim_${d.id}"]:checked`)) answered++;
    });
    const btn = document.getElementById('eval-submit-btn');
    if (btn) {
      btn.textContent = '';
      const icon = document.createElement('i');
      icon.className = 'ph ph-calculator';
      btn.appendChild(icon);
      btn.appendChild(document.createTextNode(` Hitung Kelayakan (${answered}/${total})`));
    }
  }

  // ─── Handle Submit ──────────────────────────────────────────────────────────
  const form = document.getElementById('evaluasi-form');
  const resultBox = document.getElementById('evaluasi-result');
  const scoreVal = document.getElementById('eval-score-val');
  const scoreDesc = document.getElementById('eval-score-desc');
  const resultMsg = document.getElementById('eval-score-msg');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    let totalScore = 0;
    let answered = 0;
    const criticalWarnings = [];

    data.forEach(d => {
      const checked = document.querySelector(`input[name="dim_${d.id}"]:checked`);
      if (checked) {
        const val = parseInt(checked.value);
        totalScore += val;
        answered++;
        if (d.kritis && val === 1) {
          criticalWarnings.push(d.dimensi);
        }
      }
    });

    if (answered < data.length) {
      if (window.showToast) window.showToast('Harap jawab semua pertanyaan!', 'warning');
      return;
    }

    // ─── Determine category ───────────────────────────────────────────────
    let category, colorVar, message;

    if (totalScore >= 28) {
      category = 'Sangat Layak';
      colorVar = '#059669';
      message = 'Media ini memenuhi semua dimensi dengan sangat baik dan dapat langsung digunakan dalam pembelajaran di kelas.';
    } else if (totalScore >= 22) {
      category = 'Layak';
      colorVar = '#0ea5e9';
      message = 'Media ini layak digunakan setelah melakukan revisi minor pada indikator yang mendapat skor rendah.';
    } else if (totalScore >= 16) {
      category = 'Cukup Layak';
      colorVar = '#f59e0b';
      message = 'Media ini memerlukan revisi substansial pada beberapa dimensi sebelum dapat digunakan di kelas.';
    } else {
      category = 'Belum Layak';
      colorVar = '#ef4444';
      message = 'Media ini perlu dikembangkan ulang secara menyeluruh. Tinjau kembali setiap dimensi rubrik dari awal.';
    }

    // ─── Update result UI ─────────────────────────────────────────────────
    scoreVal.textContent = `${totalScore} / ${MAX_SCORE}`;
    scoreVal.style.color = colorVar;
    scoreDesc.textContent = category;
    scoreDesc.style.color = colorVar;
    resultMsg.textContent = message;

    // ─── Critical warnings ────────────────────────────────────────────────
    const existingWarnings = resultBox.querySelector('.eval-critical-warnings');
    if (existingWarnings) existingWarnings.remove();

    if (criticalWarnings.length > 0) {
      const warnDiv = document.createElement('div');
      warnDiv.className = 'eval-critical-warnings';
      warnDiv.innerHTML = `
        <div class="eval-critical-header">
          <i class="ph ph-warning-octagon"></i> Peringatan Kritis
        </div>
        <p>Skor 1 terdeteksi pada dimensi berikut. Media <strong>tidak boleh digunakan</strong> sebelum dimensi ini diperbaiki, terlepas dari total skor:</p>
        <ul>
          ${criticalWarnings.map(d => `<li><i class="ph ph-x-circle"></i> ${d}</li>`).join('')}
        </ul>
      `;
      resultBox.querySelector('.mt-6').before(warnDiv);
    }

    resultBox.classList.add('show');
    setTimeout(() => {
      resultBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 100);
  });
});
