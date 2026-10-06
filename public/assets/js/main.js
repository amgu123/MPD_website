// Media Planet — minimal progressive-enhancement JS (deferred, no framework)
(function () {
  "use strict";

  // --- Mobile nav toggle ---
  var navToggle = document.getElementById("navToggle");
  var mobileNav = document.getElementById("mobileNav");
  if (navToggle && mobileNav) {
    navToggle.addEventListener("click", function () {
      var isOpen = mobileNav.classList.toggle("hidden") === false;
      navToggle.setAttribute("aria-expanded", String(isOpen));
      navToggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
    });
    mobileNav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        mobileNav.classList.add("hidden");
        navToggle.setAttribute("aria-expanded", "false");
        navToggle.setAttribute("aria-label", "Open menu");
      });
    });
  }

  // --- Hero example chips fill the search input ---
  var search = document.getElementById("heroSearch");
  if (search) {
    document.querySelectorAll("[data-example], .hero-example").forEach(function (btn) {
      btn.addEventListener("click", function () {
        search.value = btn.textContent.trim();
        search.focus();
      });
    });
  }

  // --- Current year ---
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());
})();
