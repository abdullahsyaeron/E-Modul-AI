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

  // Inject dynamic CSS for the Likert scale radio buttons
  const style = document.createElement('style');
  style.innerHTML = `
    .likert-options { display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; margin-top: 10px; }
    .eval-radio-scale { cursor: pointer; flex: 1; height: 100%; display: block; position: relative; }
    .eval-radio-scale input { position: absolute; opacity: 0; width: 0; height: 0; }
    .eval-radio-content { 
      height: 100%; display: flex; flex-direction: column; justify-content: center; align-items: center; 
      padding: 10px; border-radius: 8px; border: 2px solid var(--color-border); background: white; 
      color: var(--color-text-muted); transition: all 0.2s ease; text-align: center;
    }
    .eval-radio-scale:hover .eval-radio-content { background: var(--color-bg-alt); border-color: var(--color-text-muted); }
    .eval-radio-scale input:checked + .eval-radio-content { 
      background: rgba(14, 165, 233, 0.1); border-color: var(--color-primary); 
      color: var(--color-primary-dark); box-shadow: 0 2px 8px rgba(14, 165, 233, 0.2); 
    }
    .eval-radio-scale input:checked + .eval-radio-content .scale-val { color: var(--color-primary); }
    .scale-val { font-size: 1.25rem; font-weight: bold; margin-bottom: 4px; color: var(--color-text-dark); transition: color 0.2s ease; }
    .scale-text { font-size: 0.8rem; line-height: 1.3; }
    @media (max-width: 640px) { .likert-options { grid-template-columns: repeat(2, 1fr); } }
  `;
  document.head.appendChild(style);

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
        <div class="eval-kriteria-item" style="flex-direction: column; align-items: flex-start;">
          <div class="eval-kriteria-text" style="font-weight: 600; margin-bottom: 8px; width: 100%;">${k.indikator}</div>
          <div class="likert-options" style="width: 100%;">
      `;
      
      k.options.forEach(opt => {
          html += `
            <label class="eval-radio-scale">
              <input type="radio" name="kriteria_${k.id}" value="${opt.val}" required>
              <div class="eval-radio-content">
                <div class="scale-val">${opt.val}</div>
                <div class="scale-text">${opt.text}</div>
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
