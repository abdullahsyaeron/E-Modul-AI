/**
 * carousel.js
 * Handles the 3D Cover Flow chapter carousel logic on the homepage hero section.
 */

document.addEventListener('DOMContentLoaded', () => {
  const track = document.getElementById('carousel-track');
  const cards = Array.from(document.querySelectorAll('.carousel-card'));
  const btnPrev = document.getElementById('carousel-prev');
  const btnNext = document.getElementById('carousel-next');
  const indicatorsContainer = document.getElementById('carousel-indicators');
  const descBox = document.getElementById('carousel-description');

  if (!track || cards.length === 0) return;

  const totalCards = cards.length;
  let activeIndex = 0; // Starts at Bab 1

  // Descriptions for each chapter
  const descriptions = [
    "Konteks dan landasan mengapa guru perlu memanfaatkan AI dalam pengembangan media pembelajaran.", // Bab 1
    "Fondasi konseptual yang diperlukan sebelum menggunakan AI untuk mengembangkan media pembelajaran.", // Bab 2
    "Memahami kedudukan etika, tanggung jawab guru, risiko etis, dan pedoman praktis pemanfaatan AI yang aman untuk siswa.", // Bab 3
    "Mempelajari strategi meta prompting, Model MAP-AI, dan panduan langkah demi langkah mengembangkan media berbantuan AI.", // Bab 4
    "Mengevaluasi media berbantuan AI secara sistematis dan merefleksikan proses pengembangan media untuk perbaikan berkelanjutan." // Bab 5
  ];

  // 1. Generate Indicators
  indicatorsContainer.innerHTML = '';
  cards.forEach((_, i) => {
    const indicator = document.createElement('div');
    indicator.classList.add('indicator');
    if (i === 0) indicator.classList.add('active');
    indicator.addEventListener('click', () => setActiveIndex(i));
    indicatorsContainer.appendChild(indicator);
  });
  const indicators = Array.from(indicatorsContainer.querySelectorAll('.indicator'));

  // 2. Update Card Classes Function
  function updateCarousel() {
    cards.forEach((card, i) => {
      // Clear all classes
      card.classList.remove('active', 'prev', 'next', 'far-prev', 'far-next');

      // Calculate relative positions in a circular queue of 5 cards
      let offset = i - activeIndex;

      // Handle wrapping
      if (offset < -2) offset += totalCards;
      if (offset > 2) offset -= totalCards;

      if (offset === 0) {
        card.classList.add('active');
      } else if (offset === -1) {
        card.classList.add('prev');
      } else if (offset === 1) {
        card.classList.add('next');
      } else if (offset === -2) {
        card.classList.add('far-prev');
      } else if (offset === 2) {
        card.classList.add('far-next');
      }
    });

    // Update indicators
    indicators.forEach((indicator, i) => {
      if (i === activeIndex) {
        indicator.classList.add('active');
      } else {
        indicator.classList.remove('active');
      }
    });

    // Update dynamic description text with a smooth fade animation
    if (descBox) {
      descBox.classList.remove('fade-in');
      setTimeout(() => {
        descBox.textContent = descriptions[activeIndex] || "";
        descBox.classList.add('fade-in');
      }, 150);
    }
  }

  // 3. Set Active Index
  function setActiveIndex(index) {
    activeIndex = (index + totalCards) % totalCards;
    updateCarousel();
  }

  // 4. Bind Control Buttons
  if (btnPrev) btnPrev.addEventListener('click', () => setActiveIndex(activeIndex - 1));
  if (btnNext) btnNext.addEventListener('click', () => setActiveIndex(activeIndex + 1));

  // 5. Bind Click Directly on Cards
  cards.forEach((card, i) => {
    card.addEventListener('click', () => {
      if (i !== activeIndex) {
        setActiveIndex(i);
      }
    });
  });

  // 6. Touch/Drag Swiping Logic
  let startX = 0;
  let isDragging = false;

  const handleDragStart = (xPos) => {
    startX = xPos;
    isDragging = true;
  };

  const handleDragEnd = (xPos) => {
    if (!isDragging) return;
    isDragging = false;
    
    const diffX = xPos - startX;
    const threshold = 40; // 40px threshold

    if (diffX > threshold) {
      setActiveIndex(activeIndex - 1); // Swipe right -> prev card
    } else if (diffX < -threshold) {
      setActiveIndex(activeIndex + 1); // Swipe left -> next card
    }
  };

  // Touch Events
  track.addEventListener('touchstart', (e) => {
    handleDragStart(e.touches[0].clientX);
  }, { passive: true });

  track.addEventListener('touchend', (e) => {
    handleDragEnd(e.changedTouches[0].clientX);
  }, { passive: true });

  // Mouse Drag Events
  track.addEventListener('mousedown', (e) => {
    handleDragStart(e.clientX);
    // Prevent default selection text dragging
    e.preventDefault();
  });

  window.addEventListener('mouseup', (e) => {
    if (isDragging) {
      handleDragEnd(e.clientX);
    }
  });

  // Initial Run
  updateCarousel();
});
