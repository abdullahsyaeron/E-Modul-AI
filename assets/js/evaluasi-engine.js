/**
 * evaluasi-engine.js
 * Renders the evaluation instrument and calculates the score.
 * 8 dimensi × skala 1–4 = skor maks 32.
 * Selaras dengan Rubrik Penilaian Media di Bab 5 modul ini.
 */

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('evaluasi-form-container');
  if (!container || !window.evaluasiData) return;

  const data = window.evaluasiData;
  const MAX_SCORE = 32;

  // ─── Render Form ────────────────────────────────────────────────────────────
  let html = '<form id="evaluasi-form" novalidate>';

  data.forEach((dimensi, dIndex) => {
    const kritisTag = dimensi.kritis
      ? `<span class="eval-kritis-badge">Kritis</span>`
      : '';

    html += `
      <div class="eval-card" id="eval-card-${dimensi.id}">
        <div class="eval-card-header">
          <div class="eval-card-num">${dIndex + 1}</div>
          <div class="eval-card-meta">
            <div class="eval-card-title">${dimensi.dimensi}${kritisTag ? ' ' + kritisTag : ''}</div>
            <div class="eval-card-indikator">${dimensi.indikator}</div>
          </div>
        </div>
        <div class="eval-options-grid">
    `;

    dimensi.options.forEach(opt => {
      const scoreClass = opt.val === 4 ? 'opt-great'
                       : opt.val === 3 ? 'opt-good'
                       : opt.val === 2 ? 'opt-warn'
                       : 'opt-poor';
      html += `
        <label class="eval-option ${scoreClass}">
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
        Hitung Kelayakan Media
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
  });

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
    let firstUnanswered = null;

    data.forEach(d => {
      const checked = document.querySelector(`input[name="dim_${d.id}"]:checked`);
      if (checked) {
        const val = parseInt(checked.value);
        totalScore += val;
        answered++;
        if (d.kritis && val === 1) criticalWarnings.push(d.dimensi);
      } else if (!firstUnanswered) {
        firstUnanswered = document.getElementById(`eval-card-${d.id}`);
      }
    });

    if (answered < data.length) {
      if (window.showToast) window.showToast('Harap jawab semua pertanyaan sebelum menghitung.', 'warning');
      if (firstUnanswered) firstUnanswered.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }

    // Determine category
    let category, colorHex, message;
    if (totalScore >= 28) {
      category = 'Sangat Layak';
      colorHex = 'var(--color-success)';
      message = 'Media memenuhi semua dimensi dengan sangat baik dan dapat langsung digunakan dalam pembelajaran.';
    } else if (totalScore >= 22) {
      category = 'Layak';
      colorHex = 'var(--color-primary)';
      message = 'Media layak digunakan setelah melakukan revisi minor pada indikator yang memperoleh skor rendah.';
    } else if (totalScore >= 16) {
      category = 'Cukup Layak';
      colorHex = 'var(--color-warning)';
      message = 'Media memerlukan revisi substansial pada beberapa dimensi sebelum digunakan di kelas.';
    } else {
      category = 'Belum Layak';
      colorHex = 'var(--color-danger)';
      message = 'Media perlu dikembangkan ulang secara menyeluruh. Tinjau setiap dimensi rubrik dari awal.';
    }

    scoreVal.textContent = `${totalScore} / ${MAX_SCORE}`;
    scoreVal.style.color = colorHex;
    scoreDesc.textContent = category;
    scoreDesc.style.color = colorHex;
    resultMsg.textContent = message;

    // Critical warnings
    const existingWarn = resultBox.querySelector('.eval-critical-block');
    if (existingWarn) existingWarn.remove();

    if (criticalWarnings.length > 0) {
      const warnEl = document.createElement('div');
      warnEl.className = 'eval-critical-block';
      warnEl.innerHTML = `
        <div>
          <strong>Peringatan:</strong> Skor 1 pada dimensi di bawah ini berarti media <em>tidak boleh digunakan</em> sebelum diperbaiki, terlepas dari total skor.
          <ul>${criticalWarnings.map(d => `<li>${d}</li>`).join('')}</ul>
        </div>
      `;
      resultMsg.after(warnEl);
    }

    resultBox.classList.add('show');
    setTimeout(() => resultBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' }), 80);
  });
});
