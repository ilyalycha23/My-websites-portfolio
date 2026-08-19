const header = document.getElementById("header");
const nav = document.getElementById("nav");
const burger = document.getElementById("burger");
const loader = document.getElementById("loader");
const form = document.getElementById("form");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox-image");

window.addEventListener("load", () => {
  setTimeout(() => loader.classList.add("hide"), 700);
});

window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 24);
});

burger.addEventListener("click", () => {
  nav.classList.toggle("open");
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => nav.classList.remove("open"));
});

document.querySelectorAll("[data-lightbox]").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    lightboxImage.src = link.getAttribute("href");
    lightboxImage.alt = link.querySelector("img")?.alt || "";
    lightbox.classList.add("open");
  });
});

document.getElementById("lightbox-close").addEventListener("click", () => {
  lightbox.classList.remove("open");
});

lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) lightbox.classList.remove("open");
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") lightbox.classList.remove("open");
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = Object.fromEntries(new FormData(form).entries());
  const text = [
    "Заявка на прослушивание — Все изюминки",
    `Имя: ${data.name}`,
    `Телефон: ${data.phone}`,
    `Ребёнок: ${data.child}`,
    `Программа: ${data.program}`,
    data.message ? `Комментарий: ${data.message}` : "",
  ]
    .filter(Boolean)
    .join("\n");

  form.classList.add("sent");

  if (navigator.clipboard?.writeText) {
    navigator.clipboard.writeText(text).catch(() => {});
  }
});
