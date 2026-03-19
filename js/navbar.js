// ==========================================
//   AI Doctor - Mobile Navbar Handler
// ==========================================

document.addEventListener('DOMContentLoaded', function () {

  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('navLinks');
  const overlay   = document.getElementById('navOverlay');

  function openMenu() {
    hamburger.classList.add('open');
    hamburger.setAttribute('aria-expanded', 'true');
    navLinks.classList.add('open');
    overlay.classList.add('active');
    document.body.classList.add('nav-open');
  }

  function closeMenu() {
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    navLinks.classList.remove('open');
    overlay.classList.remove('active');
    document.body.classList.remove('nav-open');
  }

  hamburger.addEventListener('click', function () {
    if (navLinks.classList.contains('open')) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  // Close when clicking overlay
  overlay.addEventListener('click', closeMenu);

  // Close when a nav link is clicked (smooth page navigation on mobile)
  navLinks.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', closeMenu);
  });

  // Close on Escape key
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeMenu();
  });

  // Mark active link
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  navLinks.querySelectorAll('a').forEach(function (link) {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

});
