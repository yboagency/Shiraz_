(function () {
  "use strict";

  /* --- Nav + logo morph on scroll --- */
  var nav = document.querySelector(".nav");
  var logo = document.querySelector(".hero-logo--morph");

  function onScroll() {
    var scrolled = window.scrollY > 40;
    nav.classList.toggle("nav--scrolled", scrolled);
    logo.classList.toggle("is-scrolled", scrolled);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* --- Mobile menu --- */
  var toggle = document.querySelector(".mobile-toggle");
  var mobileMenu = document.querySelector(".mobile-menu-links");
  var closeBtn = document.querySelector(".menu-close");

  function setMenu(open) {
    mobileMenu.classList.toggle("open", open);
    toggle.setAttribute("aria-expanded", String(open));
  }
  toggle.addEventListener("click", function () {
    setMenu(!mobileMenu.classList.contains("open"));
  });
  closeBtn.addEventListener("click", function () { setMenu(false); });
  mobileMenu.querySelectorAll("a").forEach(function (a) {
    a.addEventListener("click", function () { setMenu(false); });
  });

  /* --- Hero video fade-in --- */
  var video = document.querySelector(".hero-bg");
  if (video) {
    var showVideo = function () { video.classList.add("is-ready"); };
    if (video.readyState >= 3) showVideo();
    else video.addEventListener("canplay", showVideo, { once: true });
    /* Fallback so the poster never stays hidden */
    setTimeout(showVideo, 2500);
  }

  /* --- About slider (crossfade + arrows + autoplay) --- */
  var slides = Array.prototype.slice.call(document.querySelectorAll(".about-landscape"));
  var current = 0;
  var sliderTimer = null;

  function goTo(index) {
    var next = (index + slides.length) % slides.length;
    if (next === current) return;
    var from = slides[current];
    var to = slides[next];
    to.classList.add("active", "fading");
    // Force a frame so the fade transition runs
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        to.classList.remove("fading");
      });
    });
    from.classList.add("fading");
    setTimeout(function () {
      from.classList.remove("active", "fading");
    }, 700);
    current = next;
  }

  function restartAutoplay() {
    if (sliderTimer) clearInterval(sliderTimer);
    sliderTimer = setInterval(function () { goTo(current + 1); }, 5000);
  }

  if (slides.length > 1) {
    document.querySelector(".about-arrow-left").addEventListener("click", function () {
      goTo(current - 1); restartAutoplay();
    });
    document.querySelector(".about-arrow-right").addEventListener("click", function () {
      goTo(current + 1); restartAutoplay();
    });
    restartAutoplay();
  }

  /* --- Scroll reveal --- */
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: "0px 0px -40px 0px" });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("is-visible"); });
  }

  /* --- Hero action buttons --- */
  document.querySelectorAll("[data-scroll]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var target = document.querySelector(btn.getAttribute("data-scroll"));
      if (target) target.scrollIntoView({ behavior: "smooth" });
    });
  });
  document.querySelectorAll("[data-href]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      window.location.href = btn.getAttribute("data-href");
    });
  });
})();
