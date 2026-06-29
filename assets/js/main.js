/* ============================================================
   LENIS SMOOTH SCROLL (Premium Upgrade)
   ============================================================ */
function initLenis() {
  if (typeof Lenis !== 'undefined') {
    const lenis = new Lenis({
      duration: 0.8, // Halus Responsif
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 2
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }
}
/**
 * main.js — Shared JavaScript for E-Modul AI website
 * Handles: navbar toggle, active nav detection, scroll effects, progress bar
 */

/* ============================================================
   NAVBAR — Mobile Toggle
   ============================================================ */
function initNavbar() {
  const toggle = document.getElementById('navbar-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  if (!toggle || !mobileMenu) return;

  // Toggle open/close
  toggle.addEventListener('click', function (e) {
    e.stopPropagation();
    const isOpen = mobileMenu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', isOpen);
  });

  // Close on outside click
  document.addEventListener('click', function (e) {
    if (!mobileMenu.contains(e.target) && !toggle.contains(e.target)) {
      closeMobileNav();
    }
  });

  // Close on Escape key
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeMobileNav();
  });

  function closeMobileNav() {
    mobileMenu.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  }
}

/* ============================================================
   ACTIVE NAV LINK DETECTION
   ============================================================ */
function initActiveNav() {
  const path = window.location.pathname;
  const page = path.split('/').pop() || 'index.html';

  const navLinks = document.querySelectorAll('.navbar-nav a, .mobile-menu a, .materi-nav-list a');

  navLinks.forEach(function (link) {
    const href = link.getAttribute('href');
    if (!href) return;

    const linkPage = href.split('/').pop();

    const isActive =
      linkPage === page ||
      (page === '' && linkPage === 'index.html') ||
      (page === 'index.html' && linkPage === 'index.html') ||
      (linkPage === 'materi.html' && page.startsWith('materi-bab'));

    if (isActive) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

/* ============================================================
   SCROLL EFFECTS — Navbar shadow + Back-to-top
   ============================================================ */
function initScrollEffects() {
  const backToTop = document.getElementById('back-to-top');

  if (!backToTop) return;

  function onScroll() {
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    if (backToTop) {
      backToTop.classList.toggle('visible', scrollY > 400);
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });

  if (backToTop) {
    backToTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}

/* ============================================================
   READING PROGRESS BAR
   Only active on pages that have #reading-progress element
   ============================================================ */
function initReadingProgress() {
  const bar = document.getElementById('reading-progress');
  if (!bar) return;

  function updateProgress() {
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    if (docHeight <= 0) return;
    const scrolled = window.scrollY || document.documentElement.scrollTop;
    const pct = Math.min(100, (scrolled / docHeight) * 100);
    bar.style.width = pct + '%';
  }

  window.addEventListener('scroll', updateProgress, { passive: true });
  updateProgress(); // Run once on load
}

/* ============================================================
   SMOOTH SCROLL for anchor links
   ============================================================ */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const navHeight = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-height')) || 68;
      const top = target.getBoundingClientRect().top + window.scrollY - navHeight - 16;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
}

/* ============================================================
   TOAST NOTIFICATION UTILITY (Dynamic Island Style)
   ============================================================ */
function showToast(message, type) {
  let container = document.querySelector('.toast-container');
  if (!container) {
      container = document.createElement('div');
      container.className = 'toast-container';
      document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast-dynamic' + (type ? ' ' + type : '');
  
  let icon = 'check-circle';
  let color = '#34C759'; // iOS Green
  if (type === 'error') {
      icon = 'alert-circle';
      color = '#FF3B30'; // iOS Red
  }

  toast.innerHTML = `<i data-lucide="${icon}" style="width:16px;height:16px;color:${color};"></i> ${message}`;
  container.appendChild(toast);

  if (window.lucide) {
      window.lucide.createIcons({ root: toast });
  }

  // Trigger animation
  requestAnimationFrame(function () {
    requestAnimationFrame(function () {
      toast.classList.add('show');
    });
  });

  // Auto-hide after 2.5s
  setTimeout(function () {
    toast.classList.remove('show');
    setTimeout(function () {
      if (toast.parentNode) toast.remove();
    }, 400); // Spring transition duration
  }, 2500);
}

// Expose globally so other scripts can use it
window.showToast = showToast;

/* ============================================================
   COPY TO CLIPBOARD UTILITY
   ============================================================ */
function copyToClipboard(text, successMessage) {
  successMessage = successMessage || 'Berhasil disalin!';

  if (navigator.clipboard && window.isSecureContext) {
    // Modern Clipboard API
    navigator.clipboard.writeText(text).then(function () {
      showToast(successMessage, 'success');
    }).catch(function () {
      fallbackCopy(text, successMessage);
    });
  } else {
    // Fallback for older browsers / non-HTTPS
    fallbackCopy(text, successMessage);
  }
}

function fallbackCopy(text, successMessage) {
  var textarea = document.createElement('textarea');
  textarea.value = text;
  textarea.style.position = 'fixed';
  textarea.style.opacity = '0';
  textarea.style.top = '0';
  textarea.style.left = '0';
  document.body.appendChild(textarea);
  textarea.focus();
  textarea.select();
  try {
    document.execCommand('copy');
    showToast(successMessage, 'success');
  } catch (err) {
    showToast('Gagal menyalin. Silakan salin secara manual.', 'error');
  }
  document.body.removeChild(textarea);
}

// Expose globally
window.copyToClipboard = copyToClipboard;

/* ============================================================
   MODAL UTILITY
   ============================================================ */
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (!modal) return;
  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
  // Focus trap: focus first focusable element
  const focusable = modal.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
  if (focusable) focusable.focus();
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (!modal) return;
  modal.classList.add('hidden');
  document.body.style.overflow = '';
}

// Close modal on overlay click
document.addEventListener('click', function (e) {
  if (e.target.classList.contains('modal-overlay')) {
    e.target.classList.add('hidden');
    document.body.style.overflow = '';
  }
});

// Close modal on Escape
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    const openModal = document.querySelector('.modal-overlay:not(.hidden)');
    if (openModal) {
      openModal.classList.add('hidden');
      document.body.style.overflow = '';
    }
  }
});

window.openModal = openModal;
window.closeModal = closeModal;


/* ============================================================
   INIT ALL on DOMContentLoaded
   ============================================================ */
document.addEventListener('DOMContentLoaded', function () {
  initNavbar();
  initActiveNav();
  initScrollEffects();
  initReadingProgress();
  initSmoothScroll();
  initLenis();
  initScrollReveal();
  initTabs();
  initSidebarScrollspy();
});

/* ============================================================
   TABS NAVIGATION FOR BAB 3
   ============================================================ */
function initTabs() {
  const tabBtns = document.querySelectorAll('.tab-btn');
  if (!tabBtns.length) return;

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-tab');
      if (!targetId) return;

      const container = btn.closest('.materi-tabs-container');
      if (!container) return;

      // Remove active class from all buttons and contents
      container.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      container.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));

      // Add active class
      btn.classList.add('active');
      const targetContent = document.getElementById(targetId);
      if (targetContent) {
        targetContent.classList.add('active');
      }
    });
  });
}

/* ============================================================
   SIDEBAR SCROLLSPY
   ============================================================ */
function initSidebarScrollspy() {
  const sidebarLinks = document.querySelectorAll('.sidebar-nav-item a');
  if (sidebarLinks.length === 0) return;

  const sections = Array.from(sidebarLinks).map(link => {
    const targetId = link.getAttribute('href');
    if (targetId && targetId.startsWith('#')) {
      const el = document.querySelector(targetId);
      return { link, el };
    }
    return null;
  }).filter(item => item && item.el);

  if (sections.length === 0) return;

  function onScroll() {
    let currentActive = null;
    const viewportOffset = 250; // Activate when element is within 250px from the top

    sections.forEach(item => {
      const rect = item.el.getBoundingClientRect();
      if (rect.top <= viewportOffset) {
        currentActive = item;
      }
    });

    if (!currentActive && sections.length > 0) {
      currentActive = sections[0];
    }

    if (currentActive) {
      sidebarLinks.forEach(link => link.classList.remove('active'));
      currentActive.link.classList.add('active');
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  setTimeout(onScroll, 100);
}

/* ============================================================
   SCROLL REVEAL ANIMATION (Premium Upgrade)
   ============================================================ */
function initScrollReveal() {
  const revealElements = document.querySelectorAll('.bab-card, .eval-dimensi-card, .materi-content img, .materi-content blockquote');
  if (!revealElements.length) return;

  revealElements.forEach(el => el.classList.add('reveal-item'));

  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -40px 0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, obs) => {
    // Process intersecting entries
    const intersecting = entries.filter(e => e.isIntersecting);
    intersecting.forEach((entry, i) => {
      setTimeout(() => {
        entry.target.classList.add('is-revealed');
      }, i * 80); // Stagger by 80ms
      obs.unobserve(entry.target);
    });
  }, observerOptions);

  revealElements.forEach(el => observer.observe(el));
}
