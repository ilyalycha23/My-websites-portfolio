const fortunes = [
  "Зашёл случайно — остался навсегда.",
  "Феникс не спрашивает разрешения. Он просто встаёт.",
  "Если дорога зовёт — сначала выпей кофе.",
  "И даже не смей думать, что ты можешь не выдержать.",
  "Вокруг тебя будет много радости, улыбок и звонкого заливистого смеха.",
  "Пепел — не конец. Это старт.",
  "Хорошие люди пахнут эспрессо и бензином.",
  "Не ищи знаки. Ты уже внутри одного.",
  "Мотор может молчать. Душа — нет.",
  "Самые тёплые места — те, куда возвращаешься.",
  "Если жизнь жжёт — значит, ты ещё горишь.",
  "Ты пришёл за кофе. Остался за собой.",
  "В этой чашке больше храбрости, чем кажется.",
  "Сегодня можно ехать медленнее. Главное — ехать.",
  "Бариста уже знает твой заказ. Просто ещё не сказала.",
  "Шлем можно снять. Кайф лучше оставить.",
  "Дорога любит тех, кто не торопит рассвет.",
  "Четвероногие тоже знают, где тут душа.",
  "Кофе здесь варят так, будто знают, какой у тебя был день.",
  "Бери огонь с собой. Он ещё пригодится."
];

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

const touch = matchMedia("(hover: none), (pointer: coarse)").matches;
if (touch) document.body.classList.add("touch");

/* loader */
const loader = $("#loader");
const tacho = $("#tachoFill");
let loaded = 0;
const start = performance.now();
const tickLoader = () => {
  const t = Math.min(1, (performance.now() - start) / 1100);
  tacho.style.width = `${Math.round(t * 100)}%`;
  if (t < 1) requestAnimationFrame(tickLoader);
  else {
    loader.classList.add("is-gone");
    setTimeout(() => loader.remove(), 800);
  }
};
requestAnimationFrame(tickLoader);
window.addEventListener("load", () => { loaded = 1; fitHeroTitle(); });

const fitHeroTitle = () => {
  const titles = $$(".hero__title");
  const longest = $(".hero__title--gold");
  if (!longest || !titles.length) return;
  titles.forEach((el) => { el.style.fontSize = ""; });
  const limit = document.documentElement.clientWidth - 96;
  let size = parseFloat(getComputedStyle(longest).fontSize);
  while (longest.scrollWidth > limit && size > 28) {
    size -= 1;
    titles.forEach((el) => { el.style.fontSize = `${size}px`; });
  }
};
addEventListener("resize", fitHeroTitle);
if (document.fonts?.ready) document.fonts.ready.then(fitHeroTitle);
requestAnimationFrame(fitHeroTitle);

/* cursor */
const cursor = $("#cursor");
if (!touch && cursor) {
  document.body.classList.add("has-cursor");
  cursor.hidden = false;
  window.addEventListener("pointermove", (e) => {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
  });
  $$("a, button").forEach((el) => {
    el.addEventListener("pointerenter", () => cursor.classList.add("is-hot"));
    el.addEventListener("pointerleave", () => cursor.classList.remove("is-hot"));
  });
}

/* nav */
const nav = $("#nav");
const links = $("#navLinks");
const burger = $("#burger");
const navEnd = nav.querySelector(".nav__end");
const mqNav = matchMedia("(max-width: 980px)");

const closeMenu = () => {
  links.classList.remove("is-open");
  burger.classList.remove("is-on");
  burger.setAttribute("aria-expanded", "false");
  burger.setAttribute("aria-label", "Открыть меню");
  document.body.style.overflow = "";
  document.body.classList.remove("is-menu");
};

const placeNav = () => {
  if (mqNav.matches) {
    document.body.appendChild(links);
  } else {
    closeMenu();
    nav.insertBefore(links, navEnd);
  }
};
placeNav();
mqNav.addEventListener("change", placeNav);

const onScroll = () => nav.classList.toggle("is-solid", scrollY > 20);
onScroll();
addEventListener("scroll", onScroll, { passive: true });

burger.addEventListener("click", (e) => {
  e.stopPropagation();
  const open = links.classList.toggle("is-open");
  burger.classList.toggle("is-on", open);
  burger.setAttribute("aria-expanded", String(open));
  burger.setAttribute("aria-label", open ? "Закрыть меню" : "Открыть меню");
  document.body.style.overflow = open ? "hidden" : "";
  document.body.classList.toggle("is-menu", open);
});
$$("a", links).forEach((a) => a.addEventListener("click", closeMenu));
$(".nav__menu")?.addEventListener("click", closeMenu);

/* open hours, Moscow time */
const nowMs = () => {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Europe/Moscow",
    hour: "2-digit",
    minute: "2-digit",
    weekday: "short",
    hour12: false
  }).formatToParts(new Date());
  const get = (t) => parts.find((p) => p.type === t)?.value;
  const hour = Number(get("hour"));
  const minute = Number(get("minute"));
  const day = get("weekday");
  return { hour, minute, day, h: hour + minute / 60 };
};
const setOpen = () => {
  const { h, day } = nowMs();
  const weekend = day === "Sat" || day === "Sun";
  const openFrom = weekend ? 9 : 8;
  const open = h >= openFrom && h < 22;
  $$(".status").forEach((el) => {
    el.classList.toggle("is-closed", !open);
    const label = el.querySelector("span");
    if (label) label.textContent = open ? "открыто до 22:00" : "сейчас закрыто";
  });
};
setOpen();
setInterval(setOpen, 60000);

/* tabs */
$$(".tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    $$(".tab").forEach((t) => t.classList.toggle("is-on", t === tab));
    $$(".panel").forEach((p) => p.classList.toggle("is-on", p.dataset.panel === tab.dataset.tab));
  });
});

/* cookie */
const cookie = $("#fortuneCookie");
const slip = $("#slip");
const slipText = $("#slipText");
const another = $("#anotherCookie");
const hint = $("#cookieHint");
let lastFortune = -1;

const crackSound = () => {
  const ctx = new (window.AudioContext || window.webkitAudioContext)();
  const t = ctx.currentTime;
  const buffer = ctx.createBuffer(1, ctx.sampleRate * 0.18, ctx.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < data.length; i++) {
    const env = Math.pow(1 - i / data.length, 4);
    data[i] = (Math.random() * 2 - 1) * env * 0.55;
  }
  const src = ctx.createBufferSource();
  src.buffer = buffer;
  const filter = ctx.createBiquadFilter();
  filter.type = "highpass";
  filter.frequency.value = 900;
  const gain = ctx.createGain();
  gain.gain.setValueAtTime(0.35, t);
  src.connect(filter).connect(gain).connect(ctx.destination);
  src.start();
};

const pickFortune = () => {
  let i = Math.floor(Math.random() * fortunes.length);
  if (i === lastFortune) i = (i + 1) % fortunes.length;
  lastFortune = i;
  return fortunes[i];
};

const crack = () => {
  if (cookie.classList.contains("is-broke")) return;
  cookie.classList.add("is-broke");
  hint.hidden = true;
  slipText.textContent = pickFortune();
  slip.classList.add("is-on");
  another.hidden = false;
  try { crackSound(); } catch (_) {}
};

const resetCookie = () => {
  cookie.classList.remove("is-broke");
  slip.classList.remove("is-on");
  slipText.textContent = "";
  another.hidden = true;
  hint.hidden = false;
};

cookie.addEventListener("click", crack);
another.addEventListener("click", resetCookie);

/* Kawasaki Ninja ZX-6R */
const throttle = $("#throttle");
const motoImg = $("#motoImg");
const glow = $("#motoGlow");
const gripRubber = $("#gripRubber");
const coarse = matchMedia("(pointer: coarse), (hover: none)").matches;

const prepEngine = (src) => {
  const a = new Audio(src);
  a.loop = true;
  a.preload = "auto";
  a.playsInline = true;
  a.muted = false;
  a.volume = 0;
  return a;
};

const idle = prepEngine("audio/ninja-idle.wav");
const scream = prepEngine("audio/ninja-scream.wav");

let rev = 0.08;
let holding = false;
let raf = 0;

const kick = (a) => {
  a.muted = false;
  const p = a.play();
  if (p) p.catch(() => {});
};

const applySound = (r) => {
  idle.volume = Math.min(1, 0.2 + r * 0.32);
  scream.volume = Math.min(1, Math.max(0, r - 0.1) * 0.95);
};

const hushEngine = () => {
  idle.volume = 0;
  scream.volume = 0;
};

const paintRev = () => {
  const twist = rev * 22;
  if (gripRubber) {
    gripRubber.style.setProperty("--twist", `${twist}deg`);
    gripRubber.style.setProperty("--rev", String(rev));
  }
  if (motoImg) {
    const shake = rev * 2.4;
    motoImg.style.transform = `scale(${1 + rev * 0.02}) translate(${(Math.random() - 0.5) * shake}px, ${(Math.random() - 0.5) * shake}px)`;
  }
  if (glow) glow.style.opacity = String(rev * 0.7);
  throttle.classList.toggle("is-live", holding || rev > 0.12);
  applySound(rev);
};

const restRev = () => {
  if (motoImg) motoImg.style.transform = "";
  if (glow) glow.style.opacity = "0";
  if (gripRubber) {
    gripRubber.style.setProperty("--twist", "0deg");
    gripRubber.style.setProperty("--rev", "0");
  }
  throttle.classList.remove("is-live");
  hushEngine();
};

const tick = () => {
  raf = 0;
  try {
    rev += holding ? (1 - rev) * 0.05 : (0.08 - rev) * 0.075;
    paintRev();
  } catch (_) {}
  if (holding || rev > 0.09) raf = requestAnimationFrame(tick);
  else restRev();
};

const press = () => {
  holding = true;
  kick(idle);
  kick(scream);
  if (!raf) raf = requestAnimationFrame(tick);
};

const release = () => {
  holding = false;
};

if (coarse) {
  throttle.addEventListener("touchstart", (e) => {
    e.preventDefault();
    press();
  }, { passive: false });
  throttle.addEventListener("touchend", release, { passive: true });
  throttle.addEventListener("touchcancel", release, { passive: true });
} else {
  throttle.addEventListener("pointerdown", (e) => {
    if (e.button !== 0) return;
    e.preventDefault();
    try { throttle.setPointerCapture(e.pointerId); } catch (_) {}
    press();
  });
  throttle.addEventListener("pointerup", release);
  throttle.addEventListener("pointercancel", release);
  throttle.addEventListener("lostpointercapture", release);
}
addEventListener("blur", release);
document.addEventListener("visibilitychange", () => {
  if (document.hidden) release();
});

/* gallery */
const box = $("#lightbox");
const boxImg = $("#lightboxImg");
$$(".tile").forEach((tile) => {
  tile.addEventListener("click", () => {
    boxImg.src = tile.dataset.full;
    boxImg.alt = tile.querySelector("img").alt;
    box.hidden = false;
    box.classList.add("is-on");
  });
});
const closeBox = () => {
  box.classList.remove("is-on");
  box.hidden = true;
  boxImg.src = "";
};
$("#lightboxClose").addEventListener("click", closeBox);
box.addEventListener("click", (e) => { if (e.target === box) closeBox(); });
addEventListener("keydown", (e) => { if (e.key === "Escape") closeBox(); });

/* reveal */
const io = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-in");
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.16 });
$$(".reveal").forEach((el, i) => {
  el.style.animationDelay = `${(i % 4) * 0.08}s`;
  io.observe(el);
});
