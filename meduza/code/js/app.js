const MOSCOW_TZ = "Europe/Moscow";

const HOURS = {
  0: { open: 16, close: 25, label: "сегодня до 01:00" },
  1: { open: 16, close: 24, label: "сегодня до 00:00" },
  2: { open: 16, close: 24, label: "сегодня до 00:00" },
  3: { open: 16, close: 24, label: "сегодня до 00:00" },
  4: { open: 16, close: 24, label: "сегодня до 00:00" },
  5: { open: 16, close: 26, label: "сегодня до 02:00" },
  6: { open: 16, close: 26, label: "сегодня до 02:00" },
};

const PROMOS = {
  0: {
    title: "Воскресенье — пиво и закуска",
    text: "Бокал любого пива 0,5 и гренки или картофель фри — 450 ₽. Открыты до часа.",
  },
  1: {
    title: "Понедельник — день пива",
    text: "1+1 на все сорта до 20:00. Самовывоз до восьми — минус 20%.",
  },
  2: {
    title: "Вторник — день пива",
    text: "1+1 на всё пиво до 20:00. Второй бокал — за наш счёт.",
  },
  3: {
    title: "Среда — день компании",
    text: "Приходите вчетвером или больше — −15% на весь чек. До 20:00 ещё и самовывоз −20%.",
  },
  4: {
    title: "Четверг — пора закусок",
    text: "На вторую горячую закуску скидка 30%. До 20:00 самовывоз −20%.",
  },
  5: {
    title: "Пятница в Медузе",
    text: "Открыты до двух. Собирайте компанию, берите настолки, оставайтесь надолго.",
  },
  6: {
    title: "Суббота до двух",
    text: "Корейская кухня, разлив и летник. Идеальный вечер, чтобы никуда не спешить.",
  },
};

const PICKS = [
  { beer: "светлый разлив 0,5", food: "Пибимпаб с говядиной", note: "классика, с которой начинают вечер" },
  { beer: "тёмный эль", food: "Сырный рамен с курицей", note: "согреет, если за окном сыро" },
  { beer: "гранатовый сидр", food: "Рисовые шарики с тунцом", note: "то, что гости советуют друг другу" },
  { beer: "медовуха", food: "Фирменные гренки с сыром", note: "к разговору и настолкам" },
  { beer: "светлый к острому", food: "Гоги поккым", note: "свинина, кочудян, панчаны" },
  { beer: "разлив и кимчи", food: "Кимчи поккым", note: "острее — лучше" },
  { beer: "пиво 0,5 + закуска", food: "Гренки или фри", note: "воскресный сет за 450 ₽" },
  { beer: "второй бокал 1+1", food: "Картофель фри", note: "понедельник и вторник до 20:00" },
];

function moscowClock() {
  return new Intl.DateTimeFormat("ru-RU", {
    timeZone: MOSCOW_TZ,
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).format(new Date());
}

function paintClock() {
  const time = moscowClock();
  const nav = document.getElementById("clock");
  const mobile = document.getElementById("clockMobile");
  const visit = document.getElementById("clockVisit");
  if (nav) nav.textContent = time;
  if (mobile) mobile.textContent = time;
  if (visit) visit.textContent = `${time} МСК`;
}

function moscowNow() {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: MOSCOW_TZ,
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(new Date());

  const map = Object.fromEntries(parts.map((p) => [p.type, p.value]));
  const weekdayMap = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };
  return {
    day: weekdayMap[map.weekday],
    minutes: Number(map.hour) * 60 + Number(map.minute),
  };
}

function getStatus() {
  const { day, minutes } = moscowNow();
  const today = HOURS[day];
  const yesterday = HOURS[(day + 6) % 7];
  const openMins = today.open * 60;
  const closeMins = today.close * 60;
  const yClose = yesterday.close * 60;

  const afterMidnightFromYesterday = yClose > 24 * 60 && minutes < yClose - 24 * 60;
  const open = (minutes >= openMins && minutes < closeMins) || afterMidnightFromYesterday;

  if (open) {
    const until = afterMidnightFromYesterday ? yesterday.label.replace("сегодня ", "") : today.label.replace("сегодня ", "");
    return { open: true, text: `открыто · ${until}` };
  }

  if (minutes < openMins) return { open: false, text: "закрыто до 16:00" };
  return { open: false, text: "закрыто · завтра с 16:00" };
}

function paintStatus() {
  const status = getStatus();
  document.querySelectorAll("[data-live]").forEach((el) => {
    el.textContent = status.text;
    el.classList.toggle("is-open", status.open);
  });

  const { day } = moscowNow();
  const promo = PROMOS[day];
  const title = document.getElementById("promoTitle");
  const text = document.getElementById("promoText");
  if (title && promo) title.textContent = promo.title;
  if (text && promo) text.textContent = promo.text;
}

function setupNav() {
  const nav = document.getElementById("nav");
  const burger = document.getElementById("burger");
  const menu = document.getElementById("mobileMenu");

  const onScroll = () => nav.classList.toggle("is-solid", window.scrollY > 40);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  burger.addEventListener("click", () => {
    const open = menu.classList.toggle("is-open");
    burger.setAttribute("aria-expanded", String(open));
  });

  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("is-open");
      burger.setAttribute("aria-expanded", "false");
    });
  });
}

function setupMenuTabs() {
  const tabs = document.querySelectorAll(".menu__tabs button");
  const panels = document.querySelectorAll(".menu__panel");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => {
        t.classList.toggle("is-active", t === tab);
        t.setAttribute("aria-selected", String(t === tab));
      });
      panels.forEach((panel) => {
        const active = panel.dataset.panel === tab.dataset.tab;
        panel.classList.toggle("is-active", active);
        panel.hidden = !active;
      });
    });
  });
}

function setupLightbox() {
  const items = [...document.querySelectorAll(".gallery__item")];
  const box = document.getElementById("lightbox");
  const img = document.getElementById("lightboxImg");
  let index = 0;

  const show = (i) => {
    index = (i + items.length) % items.length;
    img.src = items[index].dataset.full;
    img.alt = items[index].querySelector("img").alt;
    box.hidden = false;
    document.body.style.overflow = "hidden";
  };

  const hide = () => {
    box.hidden = true;
    document.body.style.overflow = "";
  };

  items.forEach((item, i) => item.addEventListener("click", () => show(i)));
  document.getElementById("lightboxClose").addEventListener("click", hide);
  document.getElementById("lightboxPrev").addEventListener("click", () => show(index - 1));
  document.getElementById("lightboxNext").addEventListener("click", () => show(index + 1));
  box.addEventListener("click", (e) => {
    if (e.target === box) hide();
  });
  window.addEventListener("keydown", (e) => {
    if (box.hidden) return;
    if (e.key === "Escape") hide();
    if (e.key === "ArrowLeft") show(index - 1);
    if (e.key === "ArrowRight") show(index + 1);
  });
}

function setupCursor() {
  if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const ring = document.querySelector(".cursor");
  const dot = document.querySelector(".cursor-dot");
  document.body.classList.add("has-cursor");

  let x = 0;
  let y = 0;
  let rx = 0;
  let ry = 0;

  window.addEventListener(
    "pointermove",
    (e) => {
      x = e.clientX;
      y = e.clientY;
      dot.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
      const spot = document.getElementById("spotlight");
      if (spot) {
        spot.style.setProperty("--x", `${x}px`);
        spot.style.setProperty("--y", `${y}px`);
      }
    },
    { passive: true }
  );

  const tick = () => {
    rx += (x - rx) * 0.18;
    ry += (y - ry) * 0.18;
    ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
    requestAnimationFrame(tick);
  };
  tick();

  document.querySelectorAll("a, button").forEach((el) => {
    el.addEventListener("mouseenter", () => ring.classList.add("is-hover"));
    el.addEventListener("mouseleave", () => ring.classList.remove("is-hover"));
  });
}

function setupReveal() {
  const nodes = document.querySelectorAll(
    ".about__shot, .stats li, .promo__week article, .dish, .rituals__grid article, .review, .visit__info, .pick"
  );
  if (!("IntersectionObserver" in window)) return;

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("reveal");
        io.unobserve(entry.target);
      });
    },
    { threshold: 0.12 }
  );

  nodes.forEach((node) => io.observe(node));
}

function setupParallax() {
  const media = document.querySelector(".hero__shot--main img");
  if (!media) return;

  window.addEventListener(
    "scroll",
    () => {
      const y = Math.min(window.scrollY, window.innerHeight);
      media.style.transform = `scale(1.04) translateY(${y * -0.06}px)`;
    },
    { passive: true }
  );
}

function setupProgress() {
  const bar = document.getElementById("progress");
  if (!bar) return;

  const update = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const value = max > 0 ? window.scrollY / max : 0;
    bar.style.transform = `scaleX(${value})`;
  };

  update();
  window.addEventListener("scroll", update, { passive: true });
}

function setupTilt() {
  const visual = document.querySelector(".hero__visual");
  if (!visual) return;
  if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  visual.addEventListener("pointermove", (e) => {
    const box = visual.getBoundingClientRect();
    const x = (e.clientX - box.left) / box.width - 0.5;
    const y = (e.clientY - box.top) / box.height - 0.5;
    visual.style.transform = `perspective(1200px) rotateY(${x * 7}deg) rotateX(${-y * 5}deg)`;
  });

  visual.addEventListener("pointerleave", () => {
    visual.style.transform = "";
  });
}

function setupMagnetic() {
  if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  document.querySelectorAll(".btn").forEach((btn) => {
    btn.addEventListener("pointermove", (e) => {
      const box = btn.getBoundingClientRect();
      const x = e.clientX - box.left - box.width / 2;
      const y = e.clientY - box.top - box.height / 2;
      btn.style.transform = `translate(${x * 0.16}px, ${y * 0.2}px)`;
    });
    btn.addEventListener("pointerleave", () => {
      btn.style.transform = "";
    });
  });
}

function setupCounters() {
  const nodes = document.querySelectorAll("[data-count]");
  if (!nodes.length) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    nodes.forEach((el) => {
      const decimals = Number(el.dataset.decimals || 0);
      el.textContent = decimals
        ? Number(el.dataset.count).toFixed(decimals).replace(".", ",")
        : el.dataset.count;
    });
    return;
  }

  const animate = (el) => {
    const end = Number(el.dataset.count);
    const decimals = Number(el.dataset.decimals || 0);
    const duration = 1100;
    const start = performance.now();
    const tick = (now) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - (1 - t) ** 3;
      const value = end * eased;
      el.textContent = decimals
        ? value.toFixed(decimals).replace(".", ",")
        : String(Math.round(value));
      if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };

  if (!("IntersectionObserver" in window)) {
    nodes.forEach(animate);
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        animate(entry.target);
        io.unobserve(entry.target);
      });
    },
    { threshold: 0.45 }
  );
  nodes.forEach((node) => io.observe(node));
}

function setupPick() {
  const beer = document.getElementById("pickBeer");
  const food = document.getElementById("pickFood");
  const note = document.getElementById("pickNote");
  const btn = document.getElementById("pickShuffle");
  if (!beer || !food || !note || !btn) return;

  let index = moscowNow().day % PICKS.length;

  const paint = (spin) => {
    const pick = PICKS[index];
    beer.textContent = pick.beer;
    food.textContent = pick.food;
    note.textContent = pick.note;
    if (!spin) return;
    [beer, food, note].forEach((el) => {
      el.classList.remove("is-spin");
      void el.offsetWidth;
      el.classList.add("is-spin");
    });
  };

  paint(false);
  btn.addEventListener("click", () => {
    index = (index + 1 + Math.floor(Math.random() * (PICKS.length - 1))) % PICKS.length;
    paint(true);
  });
}

function setupGalleryDrag() {
  const rail = document.getElementById("galleryRail");
  if (!rail) return;

  let down = false;
  let startX = 0;
  let startScroll = 0;
  let dragged = false;

  rail.addEventListener("pointerdown", (e) => {
    if (e.pointerType !== "mouse") return;
    down = true;
    dragged = false;
    startX = e.clientX;
    startScroll = rail.scrollLeft;
    rail.classList.add("is-dragging");
  });

  rail.addEventListener("pointermove", (e) => {
    if (!down) return;
    const dx = e.clientX - startX;
    if (Math.abs(dx) > 8) dragged = true;
    rail.scrollLeft = startScroll - dx;
  });

  const end = () => {
    down = false;
    rail.classList.remove("is-dragging");
  };

  rail.addEventListener("pointerup", end);
  rail.addEventListener("pointercancel", end);
  rail.addEventListener("pointerleave", end);

  rail.addEventListener(
    "click",
    (e) => {
      if (!dragged) return;
      e.preventDefault();
      e.stopPropagation();
      dragged = false;
    },
    true
  );
}

function setupCopy() {
  const btn = document.getElementById("copyAddress");
  const toast = document.getElementById("toast");
  if (!btn || !toast) return;

  const show = (text) => {
    toast.textContent = text;
    toast.classList.add("is-on");
    window.clearTimeout(show.tid);
    show.tid = window.setTimeout(() => toast.classList.remove("is-on"), 1800);
  };

  btn.addEventListener("click", async () => {
    const value = btn.dataset.copy || btn.textContent.trim();
    try {
      await navigator.clipboard.writeText(value);
      show("Адрес скопирован");
    } catch {
      show("Не вышло скопировать — выделите вручную");
    }
  });
}

function setupFab() {
  const fab = document.getElementById("fab");
  if (!fab) return;

  const update = () => {
    const nearEnd = window.innerHeight + window.scrollY > document.body.scrollHeight - 320;
    fab.classList.toggle("is-on", window.scrollY > 560 && !nearEnd);
  };

  update();
  window.addEventListener("scroll", update, { passive: true });
}

window.addEventListener("load", () => {
  document.getElementById("preloader").classList.add("is-gone");
  document.body.classList.add("is-ready");
});

paintStatus();
paintClock();
setInterval(paintStatus, 60 * 1000);
setInterval(paintClock, 15 * 1000);
setupNav();
setupMenuTabs();
setupLightbox();
setupCursor();
setupReveal();
setupParallax();
setupProgress();
setupTilt();
setupMagnetic();
setupCounters();
setupPick();
setupGalleryDrag();
setupCopy();
setupFab();
