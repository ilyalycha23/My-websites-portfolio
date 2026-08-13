(function () {
  var header = document.querySelector(".site-header");
  var toggle = document.getElementById("nav-toggle");
  var nav = document.getElementById("primary-nav");
  if (!header || !toggle || !nav) return;

  var mq = window.matchMedia("(max-width: 768px)");
  var dropdownWraps = nav.querySelectorAll(".nav-dropdown-wrap");
  var dropdownToggles = nav.querySelectorAll(".nav-dropdown__toggle");

  function setOpen(open) {
    if (!mq.matches) {
      header.classList.remove("site-header--nav-open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Открыть меню");
      return;
    }
    header.classList.toggle("site-header--nav-open", open);
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    toggle.setAttribute("aria-label", open ? "Закрыть меню" : "Открыть меню");
  }

  function closeDropdowns() {
    dropdownWraps.forEach(function (wrap) {
      wrap.classList.remove("is-open");
    });
    dropdownToggles.forEach(function (btn) {
      btn.setAttribute("aria-expanded", "false");
    });
  }

  toggle.addEventListener("click", function () {
    if (!mq.matches) return;
    setOpen(!header.classList.contains("site-header--nav-open"));
  });

  dropdownToggles.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      e.stopPropagation();
      if (!mq.matches) return;
      var wrap = btn.closest(".nav-dropdown-wrap");
      if (!wrap) return;
      var wasOpen = wrap.classList.contains("is-open");
      closeDropdowns();
      if (!wasOpen) {
        wrap.classList.add("is-open");
        btn.setAttribute("aria-expanded", "true");
      }
    });
  });

  document.addEventListener(
    "click",
    function (e) {
      if (!mq.matches) return;
      if (nav.contains(e.target)) return;
      closeDropdowns();
    },
    true
  );

  nav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      closeDropdowns();
      setOpen(false);
    });
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      setOpen(false);
      closeDropdowns();
    }
  });

  window.addEventListener("resize", function () {
    if (!mq.matches) {
      setOpen(false);
      closeDropdowns();
    }
  });
})();
