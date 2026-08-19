const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

const loader = $("#loader");
const chirpEl = $("#loaderChirp");
const words = ["чик", "чик-чирик", "добро пожаловать"];
let step = 0;
const chirpTimer = setInterval(() => {
  step += 1;
  if (words[step]) chirpEl.textContent = words[step];
  if (step >= words.length) clearInterval(chirpTimer);
}, 520);
function hideLoader() {
  setTimeout(() => loader.classList.add("is-gone"), 1500);
}
if (document.readyState === "complete") hideLoader();
else window.addEventListener("load", hideLoader);

const burger = $("#burger");
const mobile = $("#mobileMenu");
burger.addEventListener("click", () => {
  const open = burger.classList.toggle("is-open");
  mobile.classList.toggle("is-open", open);
});
$$("#mobileMenu a").forEach((a) =>
  a.addEventListener("click", () => {
    burger.classList.remove("is-open");
    mobile.classList.remove("is-open");
  })
);

const extraShots = $$(".gallery-wall .shot").length - 5;
const galleryMore = $("#galleryMore");
if (galleryMore) {
  galleryMore.textContent = `Смотреть ещё · ${extraShots}`;
  galleryMore.addEventListener("click", () => {
    const open = $("#gallery").classList.toggle("is-open");
    galleryMore.textContent = open ? "Свернуть" : `Смотреть ещё · ${extraShots}`;
  });
}

$$(".menu-tabs button").forEach((btn) => {
  btn.addEventListener("click", () => {
    $$(".menu-tabs button").forEach((b) => b.classList.remove("is-on"));
    $$(".menu-panel").forEach((p) => p.classList.remove("is-on"));
    btn.classList.add("is-on");
    $(`.menu-panel[data-panel="${btn.dataset.tab}"]`).classList.add("is-on");
  });
});

const lightbox = $("#lightbox");
const lightboxImg = $("img", lightbox);
$$(".shot").forEach((btn) => {
  btn.addEventListener("click", () => {
    lightboxImg.src = btn.dataset.full;
    lightboxImg.alt = $("img", btn).alt;
    lightbox.hidden = false;
  });
});
$(".lightbox-close").addEventListener("click", () => {
  lightbox.hidden = true;
  lightboxImg.src = "";
});
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    lightbox.hidden = true;
    lightboxImg.src = "";
  }
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    lightbox.hidden = true;
    lightboxImg.src = "";
  }
});

function spbNow() {
  return new Date(new Date().toLocaleString("en-US", { timeZone: "Europe/Moscow" }));
}

function updateClock() {
  const now = spbNow();
  const h = now.getHours();
  const m = now.getMinutes();
  const hhmm = `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`;
  $("#nowTime").textContent = hhmm;

  const open = h >= 8 && h < 22;
  const breakfast = h >= 8 && h < 15;
  const eveningBake = h >= 21 && h < 22;

  $("#liveDot").classList.toggle("is-closed", !open);
  $("#liveLabel").textContent = open
    ? `Открыто до 22:00 · Плесецкая, 14`
    : `Закрыто · откроемся в 8:00`;

  let greet = "Добрый день";
  if (h < 12) greet = "Доброе утро";
  if (h >= 18) greet = "Добрый вечер";
  if (h >= 22 || h < 8) greet = "Кари уже спит";
  $("#nowGreeting").textContent = greet;

  if (!open) {
    $("#nowTitle").textContent = "До завтра в восемь.";
    $("#nowText").textContent = "Пока можно посмотреть меню и написать в Telegram. Утром — круассаны и пение.";
  } else if (breakfast) {
    $("#nowTitle").textContent = "Сейчас варят кофе и жарят сырники.";
    $("#nowText").textContent = "Завтраки ещё идут — до 15:00. С собакой сегодня −10% на ассортимент к кофе.";
  } else if (eveningBake) {
    $("#nowTitle").textContent = "Вечерняя скидка на выпечку.";
    $("#nowText").textContent = "После 21:00 булочки дешевле. Кофе всё ещё хороший.";
  } else {
    $("#nowTitle").textContent = "Самое время за супом или десертом.";
    $("#nowText").textContent = "Завтраки уже отошли. Остались витрина, рафы и канарейки.";
  }
}
updateClock();
setInterval(updateClock, 30000);

let audioCtx;
let chirpLoop = null;
const soundBtn = $("#soundBtn");

function ensureAudio() {
  if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  if (audioCtx.state === "suspended") audioCtx.resume();
  return audioCtx;
}

function tweet(freq = 2800, dur = 0.11, delay = 0) {
  const ctx = ensureAudio();
  const t = ctx.currentTime + delay;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  const filter = ctx.createBiquadFilter();
  osc.type = "sine";
  osc.frequency.setValueAtTime(freq, t);
  osc.frequency.exponentialRampToValueAtTime(freq * 1.18, t + dur * 0.35);
  osc.frequency.exponentialRampToValueAtTime(freq * 0.82, t + dur);
  filter.type = "highpass";
  filter.frequency.value = 1200;
  gain.gain.setValueAtTime(0.0001, t);
  gain.gain.exponentialRampToValueAtTime(0.045, t + 0.015);
  gain.gain.exponentialRampToValueAtTime(0.0001, t + dur);
  osc.connect(filter);
  filter.connect(gain);
  gain.connect(ctx.destination);
  osc.start(t);
  osc.stop(t + dur + 0.02);
}

function song() {
  const pattern = [
    [2700, 0.09, 0],
    [3100, 0.08, 0.12],
    [2500, 0.11, 0.22],
    [3300, 0.07, 0.42],
    [2900, 0.1, 0.52],
    [3600, 0.06, 0.78],
    [2400, 0.12, 0.9],
  ];
  pattern.forEach(([f, d, wait]) => tweet(f, d, wait));
}

function startBirds() {
  song();
  chirpLoop = setInterval(song, 4200 + Math.random() * 1800);
}

function stopBirds() {
  clearInterval(chirpLoop);
  chirpLoop = null;
}

function toggleSound(forceOn) {
  const on = forceOn ?? !soundBtn.classList.contains("is-on");
  soundBtn.classList.toggle("is-on", on);
  soundBtn.setAttribute("aria-pressed", String(on));
  if (on) startBirds();
  else stopBirds();
}

soundBtn.addEventListener("click", () => toggleSound());
$("#chirpBtn").addEventListener("click", () => {
  toggleSound(true);
  soundBtn.scrollIntoView({ block: "nearest" });
});
$("#kariBuddy").addEventListener("click", () => {
  song();
  if (!soundBtn.classList.contains("is-on")) {
    const label = $("#kariBuddy span");
    label.textContent = "чирик!";
    setTimeout(() => (label.textContent = "Кари"), 900);
  }
});
