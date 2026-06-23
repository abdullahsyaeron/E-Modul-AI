/**
 * quiz-engine.js
 * Engine to render and handle quiz logic for each chapter.
 * Depends on quizData from quiz-data.js
 */

function initQuiz(babId) {
  const container = document.getElementById('quiz-container');
  if (!container) return;

  // Check if data exists
  if (!window.quizData || !window.quizData[babId]) {
    container.innerHTML = '<div class="alert alert-danger">Data kuis tidak ditemukan.</div>';
    return;
  }

  const questions = window.quizData[babId];
  let userAnswers = new Array(questions.length).fill(null);
  let isSubmitted = false;

  // Build UI
  let html = `
    <div class="quiz-header">
      <i class="fas fa-tasks text-primary" style="font-size: 1.5rem;"></i>
      <h3>Kuis Pemahaman ${babId.toUpperCase()}</h3>
    </div>
    <div class="quiz-questions-wrapper">
  `;

  questions.forEach((q, qIndex) => {
    html += `
      <div class="quiz-question" id="q-${qIndex}">
        <div class="quiz-question-num">Pertanyaan ${qIndex + 1} dari ${questions.length}</div>
        <div class="quiz-question-text">${q.question}</div>
        <div class="quiz-options">
    `;

    q.options.forEach((opt, optIndex) => {
      html += `
        <label class="quiz-option" data-q="${qIndex}" data-opt="${optIndex}">
          <input type="radio" name="quiz-${babId}-q${qIndex}" value="${optIndex}">
          <div class="quiz-option-text">${opt}</div>
        </label>
      `;
    });

    html += `
        </div>
        <div class="quiz-pembahasan" id="pembahasan-${qIndex}">
          <strong><i class="fas fa-info-circle"></i> Pembahasan:</strong><br>
          ${q.explanation}
        </div>
      </div>
    `;
  });

  html += `
    </div>
    <div class="quiz-actions">
      <button class="btn btn-primary btn-lg" id="btn-submit-quiz">
        <i class="fas fa-check-double"></i> Cek Jawaban
      </button>
    </div>
    <div class="quiz-result" id="quiz-result">
      <div class="quiz-score" id="quiz-score-val">0</div>
      <div class="quiz-score-label" id="quiz-score-label">Nilai Anda</div>
      <p id="quiz-score-msg" class="text-muted"></p>
      <button class="btn btn-secondary mt-4" id="btn-retry-quiz">
        <i class="fas fa-redo"></i> Coba Lagi
      </button>
    </div>
  `;

  container.innerHTML = html;

  // Bind Events
  const options = container.querySelectorAll('.quiz-option');
  const btnSubmit = document.getElementById('btn-submit-quiz');
  const btnRetry = document.getElementById('btn-retry-quiz');

  // Option Click Handling
  options.forEach(opt => {
    opt.addEventListener('click', function(e) {
      if (isSubmitted) {
        e.preventDefault();
        return;
      }
      
      const qIndex = parseInt(this.getAttribute('data-q'));
      const optIndex = parseInt(this.getAttribute('data-opt'));
      
      // Update state
      userAnswers[qIndex] = optIndex;
      
      // Update UI selection
      const siblings = document.querySelectorAll(`.quiz-option[data-q="${qIndex}"]`);
      siblings.forEach(s => s.classList.remove('selected'));
      this.classList.add('selected');
      
      // Automatically check radio
      const radio = this.querySelector('input[type="radio"]');
      if(radio) radio.checked = true;
    });
  });

  // Submit Handling
  btnSubmit.addEventListener('click', function() {
    // Validation: Check if all answered
    if (userAnswers.includes(null)) {
      if(window.showToast) {
        window.showToast('Harap jawab semua pertanyaan terlebih dahulu!', 'warning');
      } else {
        alert('Harap jawab semua pertanyaan terlebih dahulu!');
      }
      return;
    }

    isSubmitted = true;
    let correctCount = 0;

    // Check answers
    questions.forEach((q, qIndex) => {
      const userAns = userAnswers[qIndex];
      const isCorrect = userAns === q.correct;
      
      if (isCorrect) correctCount++;

      // UI updates for options
      const opts = document.querySelectorAll(`.quiz-option[data-q="${qIndex}"]`);
      opts.forEach((opt, optIndex) => {
        opt.style.pointerEvents = 'none'; // disable clicks
        
        if (optIndex === q.correct) {
          opt.classList.add('correct');
          if (userAns === q.correct) {
             opt.innerHTML += '<i class="fas fa-check text-success" style="margin-left:auto;"></i>';
          }
        } else if (optIndex === userAns && !isCorrect) {
          opt.classList.add('wrong');
          opt.innerHTML += '<i class="fas fa-times text-danger" style="margin-left:auto;"></i>';
        }
      });

      // Show pembahasan
      const pembahasan = document.getElementById(`pembahasan-${qIndex}`);
      if (pembahasan) {
        pembahasan.classList.add('show');
      }
    });

    // Calculate Score (0-100)
    const score = Math.round((correctCount / questions.length) * 100);
    
    // Show Results
    btnSubmit.style.display = 'none';
    const resultBox = document.getElementById('quiz-result');
    const scoreVal = document.getElementById('quiz-score-val');
    const scoreMsg = document.getElementById('quiz-score-msg');
    
    resultBox.classList.add('show');
    
    // Animate score counter
    let currentScore = 0;
    const timer = setInterval(() => {
      scoreVal.textContent = currentScore;
      if (currentScore >= score) {
        clearInterval(timer);
        scoreVal.textContent = score; // final value
        
        // Color coding
        scoreVal.className = 'quiz-score'; // reset
        if (score >= 80) {
          scoreVal.classList.add('score-great');
          scoreMsg.innerHTML = "<strong>Luar biasa!</strong> Pemahaman Anda sangat baik.";
        } else if (score >= 60) {
          scoreVal.classList.add('score-good');
          scoreMsg.innerHTML = "<strong>Bagus!</strong> Anda sudah memahami konsep dasarnya.";
        } else {
          scoreVal.classList.add('score-poor');
          scoreMsg.innerHTML = "<strong>Perlu Peningkatan.</strong> Silakan pelajari kembali materi bab ini.";
        }
      } else {
        currentScore += Math.max(1, Math.floor(score/20)); // speed
      }
    }, 30);
    
    // Scroll to results slightly
    setTimeout(() => {
      resultBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 500);
  });

  // Retry Handling
  btnRetry.addEventListener('click', function() {
    // Reset state and re-render
    isSubmitted = false;
    userAnswers.fill(null);
    initQuiz(babId);
    
    // Scroll back to top of quiz
    container.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
}

// Auto-init if data-bab attribute exists on #quiz-container
document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('quiz-container');
  if (container && container.hasAttribute('data-bab')) {
    initQuiz(container.getAttribute('data-bab'));
  }
});
