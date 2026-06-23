/**
 * evaluasi-engine.js
 * Handles rendering of evaluation instrument and score calculation.
 */

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('evaluasi-form-container');
  if (!container || !window.evaluasiData) return;

  const data = window.evaluasiData;
  let totalBobot = 0;

  // Render Form
  let html = '<form id="evaluasi-form">';

  data.forEach((dimensi, dIndex) => {
    html += `
      <div class="eval-dimensi-card">
        <div class="eval-dimensi-header">
          <i class="fas ${dimensi.icon}"></i>
          <h3>${dIndex + 1}. ${dimensi.dimensi}</h3>
        </div>
        <div class="eval-kriteria-list">
    `;

    dimensi.kriteria.forEach((k) => {
      totalBobot += k.bobot;
      
      html += `
        <div class="eval-kriteria-item">
          <div class="eval-kriteria-text">${k.pertanyaan}</div>
          <div class="eval-kriteria-options">
            <label class="eval-radio eval-radio-yes">
              <input type="radio" name="kriteria_${k.id}" value="${k.bobot}" required>
              <span>Ya</span>
            </label>
            <label class="eval-radio eval-radio-no">
              <input type="radio" name="kriteria_${k.id}" value="0" required>
              <span>Tidak</span>
            </label>
          </div>
        </div>
      `;
    });

    html += `
        </div>
      </div>
    `;
  });

  html += `
      <div class="text-center mt-8">
        <button type="submit" class="btn btn-primary btn-lg" style="width: 100%; max-width: 400px;">
          <i class="fas fa-calculator"></i> Hitung Kelayakan Media
        </button>
      </div>
    </form>
  `;

  container.innerHTML = html;

  // Handle Form Submission
  const form = document.getElementById('evaluasi-form');
  const resultBox = document.getElementById('evaluasi-result');
  const scoreVal = document.getElementById('eval-score-val');
  const scoreDesc = document.getElementById('eval-score-desc');
  const resultMsg = document.getElementById('eval-score-msg');

  form.addEventListener('submit', function(e) {
    e.preventDefault();

    // Gather values
    let score = 0;
    const formData = new FormData(form);
    
    // Check if all answered (should be handled by 'required' attribute, but just in case)
    let answered = 0;
    let totalQuestions = 0;
    
    data.forEach(d => totalQuestions += d.kriteria.length);

    for (let [key, value] of formData.entries()) {
      score += parseFloat(value);
      answered++;
    }

    if (answered < totalQuestions) {
      if(window.showToast) window.showToast("Harap jawab semua pertanyaan!", "warning");
      return;
    }

    // Calculate percentage
    const finalScore = Math.round((score / totalBobot) * 100);

    // Determine category
    let category = "";
    let colorClass = "";
    let message = "";

    if (finalScore >= 85) {
      category = "Sangat Layak";
      colorClass = "score-great";
      message = "Media pembelajaran AI Anda sangat baik dan siap diimplementasikan di kelas. Anda telah mempertimbangkan aspek pedagogik, konten, dan teknis dengan sangat matang.";
    } else if (finalScore >= 70) {
      category = "Layak dengan Revisi Kecil";
      colorClass = "score-good";
      message = "Media ini sudah baik, namun perhatikan kembali komponen yang Anda jawab 'Tidak'. Sedikit penyempurnaan akan membuat media ini lebih optimal.";
    } else if (finalScore >= 50) {
      category = "Kurang Layak (Perlu Revisi Besar)";
      colorClass = "score-poor";
      message = "Media ini berisiko jika langsung digunakan. Silakan perbaiki aspek konten (halusinasi) dan pastikan kesesuaian dengan karakteristik siswa.";
    } else {
      category = "Tidak Layak";
      colorClass = "score-poor";
      message = "Media ini tidak memenuhi standar pedagogik. Disarankan untuk merancang ulang media dengan prompt yang lebih spesifik dan melakukan verifikasi manual secara menyeluruh.";
    }

    // Update UI
    scoreVal.textContent = finalScore + "%";
    scoreVal.className = "eval-score-val " + colorClass;
    scoreDesc.textContent = category;
    resultMsg.textContent = message;

    resultBox.classList.add('show');
    
    // Scroll to result
    setTimeout(() => {
      resultBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 100);
  });
});
