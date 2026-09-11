(function () {
  "use strict";

  var header = document.getElementById("site-header");
  var blade = document.getElementById("scroll-blade");
  var menu = document.getElementById("mobile-nav");
  var openBtn = document.getElementById("menu-open");
  var closeBtn = document.getElementById("menu-close");
  var cursor = document.getElementById("cursor");
  var tabs = Array.prototype.slice.call(
    document.querySelectorAll('[role="tab"]')
  );

  var headerTop =
    "fixed inset-x-0 top-0 z-50 border-b border-transparent bg-gradient-to-b from-ink/80 to-transparent transition-[background,border-color] duration-200";
  var headerSolid =
    "fixed inset-x-0 top-0 z-50 border-b border-brass/20 bg-ink/90 backdrop-blur-md transition-[background,border-color] duration-200";
  var tabOn =
    "min-h-11 flex-1 border-b-2 border-brass px-2 text-center font-display text-xl italic text-bone transition-colors duration-150 sm:text-2xl";
  var tabOff =
    "min-h-11 flex-1 px-2 text-center font-display text-xl italic text-bone-dim transition-colors duration-150 hover:text-bone sm:text-2xl";

  function onScroll() {
    if (header) {
      header.className = window.scrollY > 24 ? headerSolid : headerTop;
    }
    if (blade) {
      var max = document.documentElement.scrollHeight - window.innerHeight;
      var p = max > 0 ? window.scrollY / max : 0;
      blade.style.transform = "scaleX(" + p + ")";
    }
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  function menuNodes() {
    if (!menu) {
      return [];
    }
    return Array.prototype.slice.call(menu.querySelectorAll("a, button"));
  }

  function openMenu() {
    if (!menu) {
      return;
    }
    menu.hidden = false;
    document.body.style.overflow = "hidden";
    if (openBtn) {
      openBtn.setAttribute("aria-expanded", "true");
    }
    if (closeBtn) {
      closeBtn.focus();
    }
  }

  function closeMenu(restore) {
    if (!menu || menu.hidden) {
      return;
    }
    menu.hidden = true;
    document.body.style.overflow = "";
    if (openBtn) {
      openBtn.setAttribute("aria-expanded", "false");
    }
    if (restore && openBtn) {
      openBtn.focus();
    }
  }

  if (openBtn) {
    openBtn.addEventListener("click", openMenu);
  }

  if (closeBtn) {
    closeBtn.addEventListener("click", function () {
      closeMenu(true);
    });
  }

  if (menu) {
    menu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        closeMenu(false);
      });
    });
  }

  document.addEventListener("keydown", function (e) {
    if (!menu || menu.hidden) {
      return;
    }
    if (e.key === "Escape") {
      closeMenu(true);
      return;
    }
    if (e.key !== "Tab") {
      return;
    }
    var nodes = menuNodes();
    if (!nodes.length) {
      return;
    }
    var first = nodes[0];
    var last = nodes[nodes.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  });

  window.addEventListener("resize", function () {
    if (window.innerWidth >= 1024) {
      closeMenu(false);
    }
  });

  function showTab(id, focusTab) {
    tabs.forEach(function (tab) {
      var on = tab.getAttribute("aria-controls") === id;
      tab.setAttribute("aria-selected", on ? "true" : "false");
      tab.tabIndex = on ? 0 : -1;
      tab.className = on ? tabOn : tabOff;
      var panel = document.getElementById(tab.getAttribute("aria-controls"));
      if (panel) {
        panel.hidden = !on;
      }
      if (on && focusTab) {
        tab.focus();
      }
    });
  }

  tabs.forEach(function (tab, index) {
    tab.addEventListener("click", function () {
      showTab(tab.getAttribute("aria-controls"), false);
    });
    tab.addEventListener("keydown", function (e) {
      var next = index;
      if (e.key === "ArrowRight") {
        next = (index + 1) % tabs.length;
      } else if (e.key === "ArrowLeft") {
        next = (index - 1 + tabs.length) % tabs.length;
      } else if (e.key === "Home") {
        next = 0;
      } else if (e.key === "End") {
        next = tabs.length - 1;
      } else {
        return;
      }
      e.preventDefault();
      showTab(tabs[next].getAttribute("aria-controls"), true);
    });
  });

  var fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (cursor && fine && !reduce) {
    document.documentElement.classList.add("has-cursor");
    cursor.hidden = false;
    window.addEventListener(
      "pointermove",
      function (e) {
        cursor.style.transform =
          "translate(" + e.clientX + "px, " + e.clientY + "px)";
      },
      { passive: true }
    );
  }
})();
