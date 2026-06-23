/**
 * evaluasi-engine.js
 * Handles rendering of evaluation instrument and score calculation.
 * Updated to handle 1-4 Likert scale options.
 */

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('evaluasi-form-container');
  if (!container || !window.evaluasiData) return;

  const data = window.evaluasiData;
  const maxScore = 56; // 14 indikator * 4 poin maksimal

  // Render Form
  let html = '<form id="evaluasi-form">';

  data.forEach((dimensi, dIndex) => {
    html += `
      <div class="eval-dimensi-card">
        <div class="eval-dimensi-header">
          <i class="fas ${dimensi.icon}"></i>
          <h3>Dimensi ${dIndex + 1} - ${dimensi.dimensi}</h3>
        </div>
        <div class="eval-kriteria-list">
    `;

    dimensi.kriteria.forEach((k) => {
      html += `
        <div class="eval-kriteria-item">
          <div class="eval-kriteria-text" style="font-weight: 600; margin-bottom: 8px;">${k.indikator}</div>
          <div class="eval-kriteria-options likert-options" style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; margin-top: 10px;">
      `;
      
      k.options.forEach(opt => {
          html += `
            <label class="eval-radio" style="flex-direction: column; text-align: center; justify-content: center; padding: 10px; font-size: 0.9rem;">
              <input type="radio" name="kriteria_${k.id}" value="${opt.val}" required>
              <div style="font-weight: bold; margin-bottom: 4px;">${opt.val}</div>
              <span style="display: block; line-height: 1.2;">${opt.text}</span>
            </label>
          `;
      });

      html += `
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
    const percentage = Math.round((score / maxScore) * 100);

    // Determine category based on interpretation table
    // 85–100% Sangat Layak
    // 70–84% Layak
    // 55–69% Cukup Layak
    // 40–54% Kurang Layak
    // <40% Tidak Layak
    
    let category = "";
    let colorClass = "";
    let message = "";

    if (percentage >= 85) {
      category = "Sangat Layak";
      colorClass = "score-great";
      message = "Media ini sangat layak dan dapat langsung digunakan dalam pembelajaran. Kualitas instruksional, konten, media, etika, dan peran guru sangat optimal.";
    } else if (percentage >= 70) {
      category = "Layak";
      colorClass = "score-good";
      message = "Media ini layak digunakan dengan beberapa perbaikan minor. Cek kembali indikator yang mendapatkan skor 1 atau 2.";
    } else if (percentage >= 55) {
      category = "Cukup Layak";
      colorClass = "score-average"; // Needs to be added or use warning color
      message = "Media ini cukup layak, namun memerlukan perbaikan atau revisi pada beberapa bagian yang masih kurang sebelum digunakan di kelas.";
    } else if (percentage >= 40) {
      category = "Kurang Layak";
      colorClass = "score-poor";
      message = "Media ini kurang layak digunakan. Terdapat masalah signifikan yang harus diatasi, terutama pada kesesuaian instruksional atau etika penggunaan AI.";
    } else {
      category = "Tidak Layak";
      colorClass = "score-poor";
      message = "Media ini tidak layak digunakan dalam pembelajaran. Disarankan untuk mengembangkan ulang media dari awal dengan memperhatikan kelima dimensi rubrik secara ketat.";
    }

    // Update UI
    scoreVal.textContent = percentage + "% (" + score + "/" + maxScore + ")";
    
    // Set custom color class if score-average is not defined in css
    if(colorClass === "score-average") {
      scoreVal.className = "eval-score-val";
      scoreVal.style.color = "#f59e0b"; // amber/warning
    } else {
      scoreVal.style.color = ""; // reset inline color
      scoreVal.className = "eval-score-val " + colorClass;
    }
    
    scoreDesc.textContent = category;
    resultMsg.textContent = message;

    resultBox.classList.add('show');
    
    // Scroll to result
    setTimeout(() => {
      resultBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 100);
  });
});
