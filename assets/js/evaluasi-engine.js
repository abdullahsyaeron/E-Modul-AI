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
    .likert-options { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; margin-top: 15px; }
    .eval-radio-scale { cursor: pointer; flex: 1; height: 100%; display: block; position: relative; }
    .eval-radio-scale input { position: absolute; opacity: 0; width: 0; height: 0; }
    .eval-radio-content { 
      height: 100%; display: flex; flex-direction: column; justify-content: center; align-items: center; 
      padding: 15px 10px; border-radius: 12px; border: 2px solid #e2e8f0; background: white; 
      color: #64748b; transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1); text-align: center;
      box-shadow: 0 1px 3px rgba(0,0,0,0.05);
    }
    
    .eval-radio-scale:hover .eval-radio-content { 
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0,0,0,0.08);
      border-color: #cbd5e1;
    }
    
    /* Unique colors for each scale */
    .eval-radio-scale input[value="1"]:checked + .eval-radio-content { 
      background: #fef2f2; border-color: #ef4444; color: #991b1b; 
      box-shadow: 0 4px 12px rgba(239, 68, 68, 0.15); 
    }
    .eval-radio-scale input[value="1"]:checked + .eval-radio-content .scale-val { color: #dc2626; }
    
    .eval-radio-scale input[value="2"]:checked + .eval-radio-content { 
      background: #fffbeb; border-color: #f59e0b; color: #92400e; 
      box-shadow: 0 4px 12px rgba(245, 158, 11, 0.15); 
    }
    .eval-radio-scale input[value="2"]:checked + .eval-radio-content .scale-val { color: #d97706; }
    
    .eval-radio-scale input[value="3"]:checked + .eval-radio-content { 
      background: #f0fdf4; border-color: #22c55e; color: #166534; 
      box-shadow: 0 4px 12px rgba(34, 197, 94, 0.15); 
    }
    .eval-radio-scale input[value="3"]:checked + .eval-radio-content .scale-val { color: #16a34a; }
    
    .eval-radio-scale input[value="4"]:checked + .eval-radio-content { 
      background: #eff6ff; border-color: #3b82f6; color: #1e3a8a; 
      box-shadow: 0 4px 12px rgba(59, 130, 246, 0.15); 
    }
    .eval-radio-scale input[value="4"]:checked + .eval-radio-content .scale-val { color: #2563eb; }

    .scale-val { font-size: 1.5rem; font-weight: 800; margin-bottom: 6px; color: #334155; transition: color 0.2s ease; font-family: var(--font-heading); }
    .scale-text { font-size: 0.85rem; line-height: 1.3; font-weight: 500; }
    
    .eval-kriteria-item { border-bottom: 1px solid #f1f5f9; padding: 24px 0; }
    .eval-kriteria-item:last-child { border-bottom: none; padding-bottom: 0; }
    .eval-kriteria-text { font-size: 1.1rem; color: #0f172a; line-height: 1.5; }
    
    @media (max-width: 640px) { .likert-options { grid-template-columns: repeat(2, 1fr); gap: 8px; } }
  `;
  document.head.appendChild(style);

  // Render Form
  let html = '<form id="evaluasi-form">';

  data.forEach((dimensi, dIndex) => {
    html += `
      <div class="eval-dimensi-card" style="border-radius: 16px; overflow: hidden; border: 1px solid #e2e8f0; box-shadow: 0 4px 20px rgba(0,0,0,0.04); margin-bottom: 30px;">
        <div class="eval-dimensi-header" style="background: linear-gradient(135deg, #0f172a, #1e293b); padding: 20px 24px;">
          <i class="fas ${dimensi.icon}" style="color: #38bdf8;"></i>
          <h3 style="margin: 0; color: white; font-size: 1.25rem;">Dimensi ${dIndex + 1} &mdash; ${dimensi.dimensi}</h3>
        </div>
        <div class="eval-kriteria-list" style="padding: 10px 24px 24px 24px; background: #fafafa;">
    `;

    dimensi.kriteria.forEach((k, kIndex) => {
      html += `
        <div class="eval-kriteria-item" style="flex-direction: column; align-items: flex-start;">
          <div class="eval-kriteria-text" style="font-weight: 600; margin-bottom: 12px; width: 100%;">
            <span style="display: inline-flex; align-items: center; justify-content: center; width: 28px; height: 28px; border-radius: 50%; background: #e0f2fe; color: #0369a1; font-size: 0.85rem; font-weight: bold; margin-right: 10px; vertical-align: top; margin-top: 2px;">${kIndex + 1}</span>
            <span style="display: inline-block; width: calc(100% - 45px);">${k.indikator}</span>
          </div>
          <div class="likert-options" style="width: 100%; padding-left: 38px;">
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
