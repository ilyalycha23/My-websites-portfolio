(() => {
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

  const header = $(".header");
  const nav = $(".nav");
  const burger = $(".burger");
  const year = $("#year");
  const hoursEls = $$("[data-hours]");

  if (year) year.textContent = new Date().getFullYear();

  const onScroll = () => {
    header?.classList.toggle("is-scrolled", window.scrollY > 24);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  burger?.addEventListener("click", () => {
    const open = nav.classList.toggle("is-open");
    burger.setAttribute("aria-expanded", String(open));
    document.body.classList.toggle("nav-open", open);
  });

  $$(".nav a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      burger?.setAttribute("aria-expanded", "false");
      document.body.classList.remove("nav-open");
    });
  });

  const setHours = () => {
    const now = new Date(
      new Date().toLocaleString("en-US", { timeZone: "Europe/Moscow" })
    );
    const mins = now.getHours() * 60 + now.getMinutes();
    const open = mins >= 10 * 60 && mins < 22 * 60;
    const label = open ? "Сейчас открыто · до 22:00" : "Сейчас закрыто · откроемся в 10:00";
    hoursEls.forEach((el) => {
      el.dataset.state = open ? "open" : "closed";
      const text = el.querySelector("[data-hours-text]");
      if (text) text.textContent = label;
    });
  };
  setHours();
  setInterval(setHours, 60_000);

  const reveals = $$("[data-reveal]");
  if (reveals.length && "IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    reveals.forEach((el) => io.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add("is-in"));
  }

  const lightbox = $("#lightbox");
  const lightboxImg = $("#lightbox-img");
  const lightboxClose = $("#lightbox-close");
  const galleryBtns = $$("[data-gallery]");

  const openLightbox = (src, alt) => {
    if (!lightbox || !lightboxImg) return;
    lightboxImg.src = src;
    lightboxImg.alt = alt || "";
    lightbox.hidden = false;
    document.body.classList.add("nav-open");
    lightboxClose?.focus();
  };

  const closeLightbox = () => {
    if (!lightbox) return;
    lightbox.hidden = true;
    lightboxImg.src = "";
    document.body.classList.remove("nav-open");
  };

  galleryBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const img = btn.querySelector("img");
      if (img) openLightbox(img.currentSrc || img.src, img.alt);
    });
  });

  lightboxClose?.addEventListener("click", closeLightbox);
  lightbox?.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeLightbox();
      nav?.classList.remove("is-open");
      burger?.setAttribute("aria-expanded", "false");
      document.body.classList.remove("nav-open");
    }
  });

  const form = $("#order-form");
  form?.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const occasion = String(data.get("occasion") || "").trim();
    const budget = String(data.get("budget") || "").trim();
    const message = String(data.get("message") || "").trim();
    const lines = [
      "Привет! Хочу заказать букет в Kapusta.",
      name && `Имя: ${name}`,
      occasion && `Повод: ${occasion}`,
      budget && `Бюджет: ${budget}`,
      message && `Пожелания: ${message}`,
    ].filter(Boolean);
    const url = `https://wa.me/79932123344?text=${encodeURIComponent(lines.join("\n"))}`;
    window.open(url, "_blank", "noopener");
  });
})();
