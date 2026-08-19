const preloader = document.getElementById("preloader");
const header = document.getElementById("header");
const burger = document.getElementById("burger");
const nav = document.getElementById("nav");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const form = document.getElementById("form");

window.addEventListener("load", () => {
  setTimeout(() => preloader.classList.add("is-gone"), 700);
});

window.addEventListener("scroll", () => {
  header.classList.toggle("is-on", window.scrollY > 20);
}, { passive: true });

burger.addEventListener("click", () => {
  const open = nav.classList.toggle("is-open");
  burger.setAttribute("aria-expanded", String(open));
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => nav.classList.remove("is-open"));
});

document.querySelectorAll(".shot").forEach((btn) => {
  btn.addEventListener("click", () => {
    lightboxImg.src = btn.dataset.src;
    lightboxImg.alt = btn.querySelector("img").alt;
    lightbox.hidden = false;
    document.body.style.overflow = "hidden";
  });
});

const closeLightbox = () => {
  lightbox.hidden = true;
  lightboxImg.src = "";
  document.body.style.overflow = "";
};

document.getElementById("lightboxClose").addEventListener("click", closeLightbox);
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) closeLightbox();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !lightbox.hidden) closeLightbox();
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const name = data.get("name") || "";
  const phone = data.get("phone") || "";
  const msg = data.get("msg") || "Нужен автосервис";
  const text = `Здравствуйте! ${name}, ${phone}. ${msg}`;
  window.open(`https://wa.me/79315986969?text=${encodeURIComponent(text)}`, "_blank");
});
