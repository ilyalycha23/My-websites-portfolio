const nav = document.getElementById("nav");
const burger = document.getElementById("burger");
const drawer = document.getElementById("drawer");
const statusEl = document.getElementById("status");
const root = document.body.dataset.root || "";

const hours = {
  0: [12, 22],
  1: [12, 22],
  2: [12, 22],
  3: [12, 22],
  4: [12, 22],
  5: [12, 23],
  6: [12, 23],
};

function setStatus() {
  if (!statusEl) return;
  const now = new Date();
  const [open, close] = hours[now.getDay()];
  const h = now.getHours() + now.getMinutes() / 60;
  const isOpen = h >= open && h < close;
  const label = statusEl.querySelector("b");
  statusEl.classList.toggle("is-open", isOpen);
  label.textContent = isOpen ? `Открыто до ${String(close).padStart(2, "0")}:00` : `Откроется в ${open}:00`;
}

setStatus();
setInterval(setStatus, 60000);

window.addEventListener("scroll", () => {
  if (nav) nav.classList.toggle("is-on", window.scrollY > 20);
}, { passive: true });

function closeDrawer() {
  if (!drawer || !burger) return;
  drawer.classList.remove("is-on");
  burger.classList.remove("is-on");
  document.body.style.overflow = "";
}

if (burger && drawer) {
  burger.addEventListener("click", () => {
    const on = drawer.classList.toggle("is-on");
    burger.classList.toggle("is-on", on);
    document.body.style.overflow = on ? "hidden" : "";
  });
  drawer.querySelectorAll("a").forEach((a) => a.addEventListener("click", closeDrawer));
}

function dishCard(item) {
  const media = item.img
    ? `<img loading="lazy" src="${root}images/food/${item.img}" alt="${item.name}">`
    : `<div class="dish__ph" aria-hidden="true">香</div>`;
  return `<a class="dish" data-cat="${item.cat}" href="${root}menu/${item.id}.html">
    ${media}
    <div>
      <h3>${item.name}</h3>
      <p>${item.weight}</p>
      <strong>${item.price}</strong>
    </div>
  </a>`;
}

const menuGrid = document.getElementById("menu-grid");
const menuMore = document.getElementById("menu-more");
const menuMoreBtn = document.getElementById("menu-more-btn");
const PREVIEW = 8;
let menuCat = "all";
let menuOpen = false;

function applyMenu() {
  if (!menuGrid) return;
  const cards = [...menuGrid.querySelectorAll(".dish")];
  const match = cards.filter((card) => menuCat === "all" || card.dataset.cat === menuCat);
  const preview = menuCat === "all" && !menuOpen;
  const limit = preview ? PREVIEW : match.length;

  cards.forEach((card) => card.classList.add("is-off"));
  match.forEach((card, i) => card.classList.toggle("is-off", i >= limit));

  if (menuMore && menuMoreBtn) {
    const extra = match.length - PREVIEW;
    const showBtn = menuCat === "all" && extra > 0;
    menuMore.hidden = !showBtn;
    menuMoreBtn.textContent = menuOpen
      ? "Свернуть меню"
      : `Показать всё меню · ещё ${extra}`;
  }
}

if (menuGrid && window.MENU) {
  menuGrid.innerHTML = window.MENU.map(dishCard).join("");
  applyMenu();
}

if (menuMoreBtn) {
  menuMoreBtn.addEventListener("click", () => {
    menuOpen = !menuOpen;
    applyMenu();
    if (!menuOpen) {
      document.getElementById("menu")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
}

const moreGrid = document.getElementById("more-grid");
if (moreGrid && window.MENU && moreGrid.dataset.cat) {
  const current = moreGrid.dataset.id;
  const list = window.MENU.filter((item) => item.cat === moreGrid.dataset.cat && item.id !== current).slice(0, 3);
  moreGrid.innerHTML = list.map(dishCard).join("");
}

const filters = document.getElementById("filters");
if (filters) {
  filters.addEventListener("click", (e) => {
    const btn = e.target.closest("button");
    if (!btn) return;
    filters.querySelectorAll("button").forEach((b) => b.classList.toggle("is-on", b === btn));
    menuCat = btn.dataset.cat;
    applyMenu();
  });
}

const lightbox = document.getElementById("lightbox");
const lbImg = document.getElementById("lb-img");

if (lightbox && lbImg) {
  document.querySelectorAll(".tile").forEach((tile) => {
    tile.addEventListener("click", () => {
      lbImg.src = tile.dataset.src;
      lbImg.alt = tile.dataset.alt || "";
      lightbox.hidden = false;
      document.body.style.overflow = "hidden";
    });
  });

  function closeLb() {
    lightbox.hidden = true;
    lbImg.src = "";
    document.body.style.overflow = "";
  }

  const lbClose = document.getElementById("lb-close");
  if (lbClose) lbClose.addEventListener("click", closeLb);
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLb();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeLb();
      closeDrawer();
    }
  });
} else {
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeDrawer();
  });
}

const io = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-in");
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });

document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

const mapBox = document.getElementById("map-box");
const MAP_SRC = "https://yandex.ru/map-widget/v1/?ll=30.223710%2C60.037077&z=17&oid=141969214799&ol=biz";

function loadMap() {
  if (!mapBox || mapBox.dataset.ready) return;
  mapBox.dataset.ready = "1";
  mapBox.innerHTML = `<iframe title="Карта: Китайский буфет" src="${MAP_SRC}" loading="eager"></iframe>`;
}

document.getElementById("map-load")?.addEventListener("click", loadMap);

if (window.matchMedia("(min-width: 981px)").matches) loadMap();
