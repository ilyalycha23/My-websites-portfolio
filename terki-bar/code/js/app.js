(() => {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

  /* Preloader */
  const preloader = $("#preloader");
  const hidePreloader = () => {
    preloader?.classList.add("is-done");
    preloader?.setAttribute("aria-hidden", "true");
  };
  window.addEventListener("load", () => {
    setTimeout(hidePreloader, reduce ? 0 : 700);
  });
  setTimeout(hidePreloader, 2200);

  /* Header */
  const header = $("#header");
  const onScroll = () => {
    header?.classList.toggle("is-scrolled", window.scrollY > 12);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* Open / closed */
  const status = $("#openStatus");
  if (status) {
    const now = new Date();
    const h = now.getHours();
    const open = h >= 10 || h < 1;
    status.textContent = open ? "Сейчас открыто · до 01:00" : "Сейчас закрыто · откроемся в 10:00";
    status.classList.toggle("is-closed", !open);
  }

  /* Reveals */
  const reveals = $$(".reveal");
  if (reduce) {
    reveals.forEach((el) => el.classList.add("is-in"));
  } else if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    reveals.forEach((el) => io.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add("is-in"));
  }

  /* Drawer */
  const drawer = $("#drawer");
  const toggle = $(".nav-toggle");
  const closeDrawerBtn = $("[data-close-drawer]");
  let lastFocus = null;

  const trap = (container, e) => {
    if (e.key !== "Tab") return;
    const focusable = $$("a, button, input, textarea, select, [tabindex]:not([tabindex='-1'])", container)
      .filter((el) => !el.hasAttribute("disabled") && el.offsetParent !== null);
    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  };

  const openDrawer = () => {
    lastFocus = document.activeElement;
    drawer.hidden = false;
    toggle?.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
    closeDrawerBtn?.focus();
  };

  const closeDrawer = () => {
    drawer.hidden = true;
    toggle?.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
    lastFocus?.focus();
  };

  toggle?.addEventListener("click", openDrawer);
  closeDrawerBtn?.addEventListener("click", closeDrawer);
  drawer?.addEventListener("click", (e) => {
    if (e.target === drawer) closeDrawer();
  });
  $$(".drawer__nav a").forEach((a) => a.addEventListener("click", closeDrawer));
  document.addEventListener("keydown", (e) => {
    if (drawer && !drawer.hidden) {
      if (e.key === "Escape") closeDrawer();
      trap(drawer, e);
    }
  });

  /* Menu filters */
  const filters = $$("#menuTabs [data-filter]");
  const billed = $$("#menu [data-cat]");
  const setFilter = (value) => {
    filters.forEach((b) => {
      const on = b.dataset.filter === value;
      b.classList.toggle("is-active", on);
      b.setAttribute("aria-selected", on ? "true" : "false");
    });
    billed.forEach((el) => {
      el.hidden = el.dataset.cat !== value;
    });
  };
  filters.forEach((btn) => {
    btn.addEventListener("click", () => setFilter(btn.dataset.filter));
  });
  const start = filters.find((b) => b.classList.contains("is-active")) || filters[0];
  if (start) setFilter(start.dataset.filter);
  const menuTabs = $("#menuTabs");
  menuTabs?.addEventListener("keydown", (e) => {
    const tabs = [...filters];
    const i = tabs.indexOf(document.activeElement);
    if (i < 0 || (e.key !== "ArrowRight" && e.key !== "ArrowLeft")) return;
    e.preventDefault();
    const next = tabs[(i + (e.key === "ArrowRight" ? 1 : -1) + tabs.length) % tabs.length];
    next.focus();
    setFilter(next.dataset.filter);
  });

  /* Day stage */
  const slides = [
    {
      time: "10:00",
      title: "Завтраки. Весь день.",
      text: "Английский комбо, блины как дома, сырники. Завтрак здесь не заканчивается в полдень — его берут и в полночь.",
      still: "assets/images/blini.jpg",
      stillAlt: "Блины",
      dishes: ["Английский комбо", "Блины как дома", "Сырники"],
      more: "К завтракам",
      filter: "breakfast",
    },
    {
      time: "14:00",
      title: "Тайник после города",
      text: "Том-кха, хачапури с мёдом, салат с креветками. Ноутбук можно. Собаку — тоже. Настолки на полке.",
      still: "assets/images/khachapuri.jpg",
      stillAlt: "Хачапури",
      dishes: ["Том-кха", "Хачапури с мёдом", "Салат с креветками"],
      more: "К горячему",
      filter: "hot",
    },
    {
      time: "20:00",
      title: "Киноужин под пиццу",
      text: "Проектор, сет из трёх блюд, сидр. Смотрим доброе кино и остаёмся на «ещё по одному».",
      still: "assets/images/pizza.jpg",
      stillAlt: "Пицца",
      dishes: ["Сет из трёх блюд", "Пицца", "Сидр"],
      more: "К пицце",
      filter: "pizza",
    },
    {
      time: "00:00",
      title: "Экспериментальный кран",
      text: "Небольшой, но честный крафт. Каждую неделю новый сорт на пробу. Чай, который хвалят отдельно.",
      still: "assets/images/coffee.jpg",
      stillAlt: "Кофе",
      dishes: ["Кран недели", "Чай", "Ещё по одному"],
      more: "К напиткам",
      filter: "drinks",
    },
  ];
  const shots = $$(".stage__shot");
  const dots = $$("#stageDots button");
  let stageIndex = 0;
  const setStage = (i) => {
    stageIndex = (i + slides.length) % slides.length;
    shots.forEach((s, n) => s.classList.toggle("is-on", n === stageIndex));
    dots.forEach((d, n) => {
      const on = n === stageIndex;
      d.classList.toggle("is-on", on);
      d.setAttribute("aria-selected", on ? "true" : "false");
    });
    const s = slides[stageIndex];
    const time = $("#stageTime");
    const title = $("#stageTitle");
    const text = $("#stageText");
    const index = $("#stageIndex");
    const still = $("#stageStill");
    const dishes = $("#stageDishes");
    const more = $("#stageMore");
    if (time) time.textContent = s.time;
    if (title) title.textContent = s.title;
    if (text) text.textContent = s.text;
    if (index) index.textContent = `${String(stageIndex + 1).padStart(2, "0")} / 04`;
    if (still) {
      still.src = s.still;
      still.alt = s.stillAlt;
    }
    if (dishes) {
      dishes.replaceChildren(
        ...s.dishes.map((name) => {
          const li = document.createElement("li");
          li.textContent = name;
          return li;
        })
      );
    }
    if (more) {
      more.textContent = s.more;
      more.dataset.filter = s.filter;
    }
  };
  dots.forEach((d, i) => d.addEventListener("click", () => setStage(i)));
  $("#stageMore")?.addEventListener("click", () => {
    const f = $("#stageMore")?.dataset.filter;
    if (f) setFilter(f);
  });
  const track = $("#stageTrack");
  const syncStage = () => {
    if (!track || window.matchMedia("(max-width: 767px)").matches) return;
    const r = track.getBoundingClientRect();
    const total = track.offsetHeight - window.innerHeight;
    const passed = Math.min(Math.max(-r.top, 0), total);
    const i = Math.min(slides.length - 1, Math.floor((passed / Math.max(total, 1)) * slides.length));
    if (i !== stageIndex) setStage(i);
  };
  if (!reduce) window.addEventListener("scroll", syncStage, { passive: true });
  const shotBox = $(".stage__shots");
  let swipeX = null;
  shotBox?.addEventListener("pointerdown", (e) => {
    swipeX = e.clientX;
  });
  shotBox?.addEventListener("pointerup", (e) => {
    if (swipeX == null) return;
    const dx = e.clientX - swipeX;
    if (dx < -40) setStage(stageIndex + 1);
    if (dx > 40) setStage(stageIndex - 1);
    swipeX = null;
  });

  /* Grater lamp */
  const lampStage = $("#lampStage");
  const holes = $("#holes");
  if (holes) {
    const ns = "http://www.w3.org/2000/svg";
    for (let y = 118; y <= 350; y += 26) {
      for (let x = 72; x <= 208; x += 22) {
        const c = document.createElementNS(ns, "circle");
        c.setAttribute("cx", String(x + ((x + y) % 3) - 1));
        c.setAttribute("cy", String(y));
        c.setAttribute("r", "5.2");
        c.setAttribute("fill", "#000");
        holes.appendChild(c);
      }
    }
  }
  const moveLamp = (x, y) => {
    if (!lampStage) return;
    lampStage.style.setProperty("--lx", `${x}%`);
    lampStage.style.setProperty("--ly", `${y}%`);
  };
  if (lampStage && !reduce) {
    lampStage.addEventListener(
      "pointermove",
      (e) => {
        const r = lampStage.getBoundingClientRect();
        moveLamp(((e.clientX - r.left) / r.width) * 100, ((e.clientY - r.top) / r.height) * 100);
      },
      { passive: true }
    );
    if (!fine) {
      let t = 0;
      let on = false;
      const wander = () => {
        if (!on) return;
        t += 0.008;
        moveLamp(50 + Math.sin(t) * 22, 40 + Math.cos(t * 0.8) * 16);
        requestAnimationFrame(wander);
      };
      const ioLamp = new IntersectionObserver((entries) => {
        const vis = entries[0].isIntersecting && !document.hidden;
        if (vis && !on) {
          on = true;
          wander();
        }
        if (!vis) on = false;
      });
      ioLamp.observe(lampStage);
    }
  }

  /* Tilt cards */
  if (fine && !reduce) {
    $$("[data-tilt]").forEach((el) => {
      el.addEventListener("pointermove", (e) => {
        const r = el.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5;
        const py = (e.clientY - r.top) / r.height - 0.5;
        el.style.transform = `rotateX(${(-py * 7).toFixed(2)}deg) rotateY(${(px * 8).toFixed(2)}deg)`;
      });
      el.addEventListener("pointerleave", () => {
        el.style.transform = "";
      });
    });
  }

  /* Reel drag */
  const reel = $("#reel");
  if (reel) {
    let hold = false;
    let start = 0;
    let left = 0;
    let moved = 0;
    let raf = 0;
    let nextLeft = 0;
    const prevBtn = $("#reelPrev");
    const nextBtn = $("#reelNext");
    const cardStep = () => {
      const card = reel.querySelector(".reel__card");
      if (!card) return Math.round(reel.clientWidth * 0.7);
      const gap = Number.parseFloat(getComputedStyle(reel).gap) || 12;
      return card.getBoundingClientRect().width + gap;
    };
    const maxLeft = () => Math.max(0, reel.scrollWidth - reel.clientWidth);
    const syncArrows = () => {
      const x = reel.scrollLeft;
      const max = maxLeft();
      if (prevBtn) prevBtn.disabled = x <= 4;
      if (nextBtn) nextBtn.disabled = x >= max - 4;
    };
    const go = (dir) => {
      reel.scrollTo({
        left: Math.min(maxLeft(), Math.max(0, reel.scrollLeft + dir * cardStep())),
        behavior: reduce ? "auto" : "smooth",
      });
    };
    const snap = () => {
      const cards = $$(".reel__card", reel);
      if (!cards.length) return;
      const base = cards[0].offsetLeft;
      let nearest = cards[0];
      let best = Infinity;
      cards.forEach((card) => {
        const pos = card.offsetLeft - base;
        const d = Math.abs(pos - reel.scrollLeft);
        if (d < best) {
          best = d;
          nearest = card;
        }
      });
      reel.scrollTo({
        left: nearest.offsetLeft - base,
        behavior: reduce ? "auto" : "smooth",
      });
    };

    const onMove = (e) => {
      if (!hold) return;
      moved = Math.abs(e.clientX - start);
      nextLeft = left - (e.clientX - start);
      if (!raf) {
        raf = requestAnimationFrame(() => {
          reel.scrollLeft = nextLeft;
          raf = 0;
        });
      }
    };
    const onUp = () => {
      hold = false;
      reel.classList.remove("is-dragging");
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
      window.removeEventListener("pointercancel", onUp);
      if (raf) {
        cancelAnimationFrame(raf);
        raf = 0;
      }
      if (moved > 8) snap();
      syncArrows();
    };

    reel.addEventListener("pointerdown", (e) => {
      if (e.pointerType === "touch" || e.button !== 0) return;
      hold = true;
      start = e.clientX;
      left = reel.scrollLeft;
      moved = 0;
      nextLeft = left;
      reel.classList.add("is-dragging");
      e.preventDefault();
      window.addEventListener("pointermove", onMove);
      window.addEventListener("pointerup", onUp);
      window.addEventListener("pointercancel", onUp);
    });

    reel.addEventListener("click", (e) => {
      if (moved > 8) {
        e.preventDefault();
        e.stopImmediatePropagation();
      }
    }, true);

    reel.addEventListener(
      "wheel",
      (e) => {
        const dx = e.deltaX + (e.shiftKey ? e.deltaY : 0);
        if (!dx) return;
        e.preventDefault();
        reel.scrollLeft += dx;
      },
      { passive: false }
    );

    reel.addEventListener("scroll", syncArrows, { passive: true });
    reel.addEventListener("keydown", (e) => {
      if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
      e.preventDefault();
      go(e.key === "ArrowRight" ? 1 : -1);
    });
    prevBtn?.addEventListener("click", () => go(-1));
    nextBtn?.addEventListener("click", () => go(1));
    syncArrows();
  }

  /* Review deck */
  const cards = $$(".deck__card");
  const deckCount = $("#deckCount");
  let deckI = 0;
  const paintDeck = () => {
    cards.forEach((c, n) => {
      c.classList.toggle("is-front", n === deckI);
      c.classList.toggle("is-back", n === (deckI + 1) % cards.length);
    });
    if (deckCount) deckCount.textContent = `${deckI + 1} / ${cards.length}`;
  };
  if (cards.length) {
    paintDeck();
    $("#deckNext")?.addEventListener("click", () => {
      deckI = (deckI + 1) % cards.length;
      paintDeck();
    });
    $("#deckPrev")?.addEventListener("click", () => {
      deckI = (deckI - 1 + cards.length) % cards.length;
      paintDeck();
    });
  }

  /* Booking */
  const book = $("#book");
  const form = $("#bookForm");
  const bookError = $("#bookError");
  const bookOk = $("#bookOk");

  const openBook = () => {
    lastFocus = document.activeElement;
    if (typeof book.showModal === "function") book.showModal();
    else book.setAttribute("open", "");
    const name = form?.querySelector("[name=name]");
    name?.focus();
  };

  const closeBook = () => {
    if (typeof book.close === "function") book.close();
    else book.removeAttribute("open");
    lastFocus?.focus();
  };

  $$("[data-open-book]").forEach((btn) => btn.addEventListener("click", openBook));
  $$("[data-close-book]").forEach((btn) => btn.addEventListener("click", closeBook));
  book?.addEventListener("click", (e) => {
    if (e.target === book) closeBook();
  });

  const dateInput = form?.querySelector("[name=date]");
  if (dateInput) {
    const t = new Date();
    const iso = `${t.getFullYear()}-${String(t.getMonth() + 1).padStart(2, "0")}-${String(t.getDate()).padStart(2, "0")}`;
    dateInput.min = iso;
    if (!dateInput.value) dateInput.value = iso;
  }

  form?.addEventListener("submit", (e) => {
    e.preventDefault();
    bookError.hidden = true;
    const data = Object.fromEntries(new FormData(form));
    if (!data.name?.trim() || !data.phone?.trim()) {
      bookError.textContent = "Нужны имя и телефон — без них стол не удержать.";
      bookError.hidden = false;
      return;
    }
    const body = [
      `Бронь в Тёрки`,
      `Имя: ${data.name}`,
      `Телефон: ${data.phone}`,
      `Дата: ${data.date} ${data.time}`,
      `Гостей: ${data.guests}`,
      data.note ? `Комментарий: ${data.note}` : "",
    ]
      .filter(Boolean)
      .join("\n");
    const href = `mailto:Terkibar@yandex.ru?subject=${encodeURIComponent("Бронь стола — Тёрки")}&body=${encodeURIComponent(body)}`;
    window.location.href = href;
    bookOk.hidden = false;
    form.setAttribute("aria-busy", "true");
    setTimeout(() => form.removeAttribute("aria-busy"), 800);
  });

  /* Lightbox */
  const lightbox = $("#lightbox");
  const lightboxImg = $("#lightboxImg");
  const lightboxCap = $("#lightboxCap");

  const openLight = (src, cap, alt) => {
    lastFocus = document.activeElement;
    lightboxImg.src = src;
    lightboxImg.alt = alt || cap || "";
    lightboxCap.textContent = cap || "";
    if (typeof lightbox.showModal === "function") lightbox.showModal();
    else lightbox.setAttribute("open", "");
  };

  const closeLight = () => {
    if (typeof lightbox.close === "function") lightbox.close();
    else lightbox.removeAttribute("open");
    lightboxImg.src = "";
    lastFocus?.focus();
  };

  $$("[data-lightbox]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const img = btn.querySelector("img");
      openLight(btn.dataset.lightbox, btn.dataset.caption, img?.alt);
    });
  });
  $("[data-close-lightbox]")?.addEventListener("click", closeLight);
  lightbox?.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLight();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      if (book?.open) closeBook();
      if (lightbox?.open) closeLight();
    }
  });

  /* Custom cursor + magnetic */
  if (fine && !reduce) {
    const cursor = $(".cursor");
    cursor.hidden = false;
    document.body.classList.add("has-cursor");
    const dot = $(".cursor__dot");
    const ring = $(".cursor__ring");
    let x = 0;
    let y = 0;
    let rx = 0;
    let ry = 0;

    window.addEventListener(
      "pointermove",
      (e) => {
        x = e.clientX;
        y = e.clientY;
        dot.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      },
      { passive: true }
    );

    const tick = () => {
      rx += (x - rx) * 0.18;
      ry += (y - ry) * 0.18;
      ring.style.transform = `translate3d(${rx}px, ${ry}px, 0)`;
      requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);

    document.addEventListener("pointerover", (e) => {
      const grow = e.target.closest("a, button, .menu-plate, .reel__card, .tabs__btn");
      document.body.classList.toggle("cursor-grow", Boolean(grow));
    });

    $$("[data-magnetic]").forEach((el) => {
      el.addEventListener("pointermove", (e) => {
        const r = el.getBoundingClientRect();
        const dx = (e.clientX - r.left - r.width / 2) / 8;
        const dy = (e.clientY - r.top - r.height / 2) / 8;
        el.style.transform = `translate(${dx}px, ${dy}px)`;
      });
      el.addEventListener("pointerleave", () => {
        el.style.transform = "";
      });
    });
  }

  /* Scroll mill */
  if (!reduce) {
    const mills = $$(".mill");
    window.addEventListener(
      "scroll",
      () => {
        const rot = window.scrollY / 8;
        mills.forEach((m) => {
          m.style.transform = `rotate(${rot}deg)`;
        });
      },
      { passive: true }
    );
  }
})();
