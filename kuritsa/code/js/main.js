const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

window.addEventListener("load", () => {
  setTimeout(() => $("#preloader")?.classList.add("is-done"), 900);
});

const header = $("#header");
const burger = $("#burger");
window.addEventListener("scroll", () => {
  header?.classList.toggle("is-scrolled", window.scrollY > 20);
}, { passive: true });

burger?.addEventListener("click", () => header.classList.toggle("is-open"));
$$(".nav a").forEach((a) => a.addEventListener("click", () => header.classList.remove("is-open")));

function getOpenStatus(now = new Date()) {
  const day = now.getDay();
  const mins = now.getHours() * 60 + now.getMinutes();
  if (mins < 120) {
    const prev = (day + 6) % 7;
    const late = prev === 5 || prev === 6;
    const close = late ? 120 : 60;
    if (mins < close) return { open: true, until: late ? "02:00" : "01:00" };
    return { open: false };
  }
  if (mins >= 12 * 60) {
    const late = day === 5 || day === 6;
    return { open: true, until: late ? "02:00" : "01:00" };
  }
  return { open: false };
}

function setOpenState() {
  const el = $("#openState");
  if (!el) return;
  const status = getOpenStatus();
  el.textContent = status.open
    ? `Сейчас открыто · до ${status.until}`
    : "Сейчас закрыто · откроемся в 12:00";
}
setOpenState();

const reveal = $$(".about, .pillars article, .hookah, .offer, .menu, .vibe, .gallery, .reviews, .visit");
reveal.forEach((el) => el.classList.add("will-reveal"));
const io = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-in");
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
reveal.forEach((el) => io.observe(el));

$$(".tabs button").forEach((btn) => {
  btn.addEventListener("click", () => {
    $$(".tabs button").forEach((b) => b.classList.remove("is-active"));
    $$(".menu__panel").forEach((p) => p.classList.remove("is-active"));
    btn.classList.add("is-active");
    $(`[data-panel="${btn.dataset.tab}"]`)?.classList.add("is-active");
  });
});

const slider = $("#reviewsSlider");
$("#revPrev")?.addEventListener("click", () => slider.scrollBy({ left: -340, behavior: "smooth" }));
$("#revNext")?.addEventListener("click", () => slider.scrollBy({ left: 340, behavior: "smooth" }));

const thumbs = $$("#galThumbs button");
const galMain = $("#galMain");
const galCaption = $("#galCaption");
const galIndex = $("#galIndex");
const lightbox = $("#lightbox");
const lightboxImg = $("#lightboxImg");
let galCurrent = 0;

function showGallery(i) {
  const btn = thumbs[i];
  if (!btn) return;
  galCurrent = i;
  thumbs.forEach((t) => t.classList.remove("is-active"));
  btn.classList.add("is-active");
  galMain.style.opacity = "0.4";
  setTimeout(() => {
    galMain.src = btn.dataset.src;
    galMain.alt = btn.dataset.alt;
    galCaption.textContent = btn.dataset.caption;
    galIndex.textContent = String(i + 1).padStart(2, "0");
    galMain.style.opacity = "1";
  }, 160);
}

thumbs.forEach((btn, i) => btn.addEventListener("click", () => showGallery(i)));
$("#galStage")?.addEventListener("click", () => {
  lightboxImg.src = galMain.src;
  lightbox.hidden = false;
});
$("#lightboxClose")?.addEventListener("click", () => { lightbox.hidden = true; });
lightbox?.addEventListener("click", (e) => {
  if (e.target === lightbox) lightbox.hidden = true;
});
$("#lightboxPrev")?.addEventListener("click", (e) => {
  e.stopPropagation();
  showGallery((galCurrent - 1 + thumbs.length) % thumbs.length);
  lightboxImg.src = thumbs[galCurrent].dataset.src;
});
$("#lightboxNext")?.addEventListener("click", (e) => {
  e.stopPropagation();
  showGallery((galCurrent + 1) % thumbs.length);
  lightboxImg.src = thumbs[galCurrent].dataset.src;
});

const modal = $("#booking");
const openBooking = () => { modal.hidden = false; };
const closeBooking = () => { modal.hidden = true; };
$$("[data-open-booking]").forEach((el) => el.addEventListener("click", openBooking));
$$("[data-close-booking]").forEach((el) => el.addEventListener("click", closeBooking));
modal?.addEventListener("click", (e) => { if (e.target === modal) closeBooking(); });
document.addEventListener("keydown", (e) => {
  if (e.target.matches("input, textarea, select")) return;
  if (e.key === "Escape") {
    modal.hidden = true;
    lightbox.hidden = true;
  }
  if (e.key === "ArrowLeft") {
    showGallery((galCurrent - 1 + thumbs.length) % thumbs.length);
    if (!lightbox.hidden) lightboxImg.src = thumbs[galCurrent].dataset.src;
  }
  if (e.key === "ArrowRight") {
    showGallery((galCurrent + 1) % thumbs.length);
    if (!lightbox.hidden) lightboxImg.src = thumbs[galCurrent].dataset.src;
  }
});

$("#bookingForm")?.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(e.target));
  const text = `Бронь в Kuritsa%0AИмя: ${data.name}%0AТелефон: ${data.phone}%0AДата: ${data.date} ${data.time}%0AГостей: ${data.guests}%0A${data.note || ""}`;
  window.open(`https://wa.me/79310009054?text=${text}`, "_blank");
});

const dateInput = document.querySelector('input[name="date"]');
if (dateInput) {
  const today = new Date().toISOString().slice(0, 10);
  dateInput.min = today;
  dateInput.value = today;
}
