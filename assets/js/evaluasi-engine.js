/**
 * evaluasi-engine.js
 * Renders the evaluation instrument and calculates the score.
 * 8 dimensions × scale 1–4 = max score 32.
 * Aligned with the rubric in Chapter 5 of this module.
 */

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('evaluasi-form-container');
  if (!container || !window.evaluasiData) return;

  const data = window.evaluasiData;
  const MAX_SCORE = 32;

  // ─── Render Form ────────────────────────────────────────────────────────────
  let html = '<form id="evaluasi-form" novalidate>';

  data.forEach((dimensi, dIndex) => {
    const kritisAttr = dimensi.kritis ? 'data-kritis="true"' : '';

    html += `
      <div class="eval-row" ${kritisAttr} id="eval-row-${dimensi.id}">
        <div class="eval-row-label">
          <span class="eval-row-num">${dIndex + 1}</span>
          <div class="eval-row-text">
            <div class="eval-row-dimensi">${dimensi.dimensi}${dimensi.kritis ? ' <span class="eval-kritis-dot" title="Dimensi kritis — skor 1 akan memblokir penggunaan media"></span>' : ''}</div>
            <div class="eval-row-indikator">${dimensi.indikator}</div>
          </div>
        </div>
        <div class="eval-row-options" role="radiogroup" aria-label="${dimensi.dimensi}">
    `;

    dimensi.options.forEach(opt => {
      html += `
        <label class="eval-opt" title="Skor ${opt.val}">
          <input type="radio" name="dim_${dimensi.id}" value="${opt.val}" required>
          <span class="eval-opt-body">
            <span class="eval-opt-score">${opt.val}</span>
            <span class="eval-opt-text">${opt.text}</span>
          </span>
        </label>
      `;
    });

    html += `
        </div>
      </div>
    `;
  });

  html += `
    <div class="eval-actions">
      <button type="submit" class="btn btn-primary" id="eval-submit-btn">
        <i class="ph ph-calculator-fill"></i> Hitung Kelayakan Media
      </button>
    </div>
  </form>`;

  container.innerHTML = html;

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
        firstUnanswered = document.getElementById(`eval-row-${d.id}`);
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

    // Build result
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
        <i class="ph ph-warning-octagon-fill"></i>
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
