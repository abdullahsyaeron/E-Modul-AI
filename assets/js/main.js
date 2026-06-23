/**
 * main.js — Shared JavaScript for E-Modul AI website
 * Handles: navbar toggle, active nav detection, scroll effects, progress bar
 */

/* ============================================================
   NAVBAR — Mobile Toggle
   ============================================================ */
function initNavbar() {
  const toggle = document.getElementById('navbar-toggle');
  const mobileNav = document.getElementById('navbar-mobile');
  const overlay = document.getElementById('nav-overlay');

  if (!toggle || !mobileNav) return;

  // Toggle open/close
  toggle.addEventListener('click', function (e) {
    e.stopPropagation();
    const isOpen = mobileNav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', isOpen);
    toggle.classList.toggle('active', isOpen);
    if (overlay) overlay.classList.toggle('active', isOpen);
  });

  // Close on outside click
  document.addEventListener('click', function (e) {
    if (!mobileNav.contains(e.target) && !toggle.contains(e.target)) {
      closeMobileNav();
    }
  });

  // Close on overlay click
  if (overlay) {
    overlay.addEventListener('click', closeMobileNav);
  }

  // Close on nav link click (mobile)
  mobileNav.querySelectorAll('.nav-link').forEach(function (link) {
    link.addEventListener('click', closeMobileNav);
  });

  // Close on Escape key
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeMobileNav();
  });

  function closeMobileNav() {
    mobileNav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.classList.remove('active');
    if (overlay) overlay.classList.remove('active');
  }
}

/* ============================================================
   ACTIVE NAV LINK DETECTION
   ============================================================ */
function initActiveNav() {
  // Get the current page filename
  const path = window.location.pathname;
  const page = path.split('/').pop() || 'index.html';

  // Map filenames to nav link hrefs
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link, .navbar-mobile .nav-link');

  navLinks.forEach(function (link) {
    const href = link.getAttribute('href');
    if (!href) return;

    const linkPage = href.split('/').pop();

    // Active if exact match OR if it's the index and we're at root
    const isActive =
      linkPage === page ||
      (page === '' && linkPage === 'index.html') ||
      (page === 'index.html' && linkPage === 'index.html') ||
      // Materi pages — mark "Materi" nav as active for all BAB pages
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
  const navbar = document.querySelector('.navbar');
  const backToTop = document.getElementById('back-to-top');

  if (!navbar && !backToTop) return;

  function onScroll() {
    const scrollY = window.scrollY || document.documentElement.scrollTop;

    // Navbar scrolled shadow
    if (navbar) {
      navbar.classList.toggle('scrolled', scrollY > 20);
    }

    // Back to top visibility
    if (backToTop) {
      backToTop.classList.toggle('visible', scrollY > 400);
    }
  }

  // Use passive listener for performance
  window.addEventListener('scroll', onScroll, { passive: true });

  // Back to top click
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
   TOAST NOTIFICATION UTILITY
   ============================================================ */
function showToast(message, type) {
  // Remove any existing toast
  const existing = document.querySelector('.toast');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.className = 'toast' + (type ? ' ' + type : '');
  toast.innerHTML = '<i class="fas fa-check-circle"></i> ' + message;
  document.body.appendChild(toast);

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
    }, 300);
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
    showToast('Gagal menyalin. Silakan salin secara manual.', '');
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
});
