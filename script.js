// =========================================================
// TTSET GLOBAL LTD — Intern Portfolio Template
// Vanilla JS: no build step, no dependencies.
// =========================================================

document.addEventListener('DOMContentLoaded', function () {

  // ---- Footer year ----
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ---- Mobile nav toggle ----
  var navToggle = document.getElementById('navToggle');
  var siteNav = document.getElementById('siteNav');
  if (navToggle && siteNav) {
    navToggle.addEventListener('click', function () {
      var isOpen = siteNav.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
    siteNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        siteNav.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // ---- Typed terminal line in hero ----
  // [EDIT] Replace these lines with your own track / focus areas
  var lines = [
    'whoami --track "Software Engineering & Data Analytics"',
    'ttset-intern --status "July 2026 Cohort"',
    'echo "Open to junior roles and collaboration"'
  ];
  var typedEl = document.getElementById('typedLine');
  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (typedEl) {
    if (reducedMotion) {
      typedEl.textContent = lines[0];
    } else {
      var lineIndex = 0, charIndex = 0, deleting = false;

      function tick() {
        var current = lines[lineIndex];

        if (!deleting) {
          typedEl.textContent = current.slice(0, charIndex + 1);
          charIndex++;
          if (charIndex === current.length) {
            deleting = true;
            setTimeout(tick, 1600); // pause at full line
            return;
          }
        } else {
          typedEl.textContent = current.slice(0, charIndex - 1);
          charIndex--;
          if (charIndex === 0) {
            deleting = false;
            lineIndex = (lineIndex + 1) % lines.length;
          }
        }
        setTimeout(tick, deleting ? 30 : 45);
      }
      tick();
    }
  }

  // ---- Project filter ----
  var filterButtons = document.querySelectorAll('.filter-btn');
  var projectCards = document.querySelectorAll('.project-card');
  var emptyState = document.getElementById('emptyState');

  filterButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      filterButtons.forEach(function (b) {
        b.classList.remove('is-active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('is-active');
      btn.setAttribute('aria-selected', 'true');

      var filter = btn.getAttribute('data-filter');
      var visibleCount = 0;

      projectCards.forEach(function (card) {
        var match = filter === 'all' || card.getAttribute('data-category') === filter;
        card.style.display = match ? '' : 'none';
        if (match) visibleCount++;
      });

      if (emptyState) emptyState.hidden = visibleCount !== 0;
    });
  });

  // ---- Scroll reveal ----
  var revealTargets = document.querySelectorAll(
    '.section-title, .about-grid, .skills-grid, .timeline-item, .project-card, .cert-item'
  );
  revealTargets.forEach(function (el) { el.classList.add('reveal'); });

  if ('IntersectionObserver' in window && !reducedMotion) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    revealTargets.forEach(function (el) { observer.observe(el); });
  } else {
    revealTargets.forEach(function (el) { el.classList.add('is-visible'); });
  }

});
