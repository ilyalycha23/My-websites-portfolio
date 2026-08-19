const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

window.addEventListener("load", () => {
  $(".preloader")?.classList.add("hide");
});

const header = $(".header");
const onScroll = () => header?.classList.toggle("scrolled", window.scrollY > 20);
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

const burger = $(".burger");
const mobileMenu = $("#mobile-menu");
let menuScrollY = 0;
const setMenu = (open) => {
  burger?.classList.toggle("open", open);
  mobileMenu?.classList.toggle("open", open);
  if (open) {
    menuScrollY = window.scrollY;
    document.body.classList.add("menu-open");
    document.body.style.top = `-${menuScrollY}px`;
  } else {
    document.body.classList.remove("menu-open");
    document.body.style.top = "";
    window.scrollTo(0, menuScrollY);
  }
};
burger?.addEventListener("click", () => setMenu(!mobileMenu.classList.contains("open")));
$$("#mobile-menu a").forEach((a) => a.addEventListener("click", () => setMenu(false)));

const slides = $$(".hero-slide");
const dots = $$(".hero-dots button");
let slide = 0;
const showSlide = (i) => {
  slide = (i + slides.length) % slides.length;
  slides.forEach((el, idx) => el.classList.toggle("active", idx === slide));
  dots.forEach((el, idx) => el.classList.toggle("active", idx === slide));
};
dots.forEach((btn, i) => btn.addEventListener("click", () => showSlide(i)));
if (slides.length) setInterval(() => showSlide(slide + 1), 5600);

const tabs = $$(".menu-tabs button");
const items = $$(".menu-item");
const filterMenu = (cat) => {
  items.forEach((item) => {
    item.classList.toggle("is-hidden", cat !== "all" && item.dataset.cat !== cat);
  });
};
tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");
    filterMenu(tab.dataset.cat);
  });
});
filterMenu($(".menu-tabs .active")?.dataset.cat || "hot");

const reviewTrack = $(".review-track");
$$("[data-reviews]").forEach((btn) => {
  btn.addEventListener("click", () => {
    const dir = btn.dataset.reviews === "next" ? 1 : -1;
    reviewTrack?.scrollBy({ left: dir * (reviewTrack.clientWidth * 0.8), behavior: "smooth" });
  });
});

const galleryMore = $("#gallery-more");
galleryMore?.addEventListener("click", () => {
  $(".gallery-grid")?.classList.add("is-open");
  galleryMore.classList.add("is-hidden");
});

const lightbox = $(".lightbox");
const lightboxImg = $("img", lightbox);
$$("[data-full]").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    lightboxImg.src = link.dataset.full || link.getAttribute("href");
    lightbox.classList.add("open");
  });
});
$(".lightbox-close")?.addEventListener("click", () => lightbox.classList.remove("open"));
lightbox?.addEventListener("click", (e) => {
  if (e.target === lightbox) lightbox.classList.remove("open");
});

const modal = $("#book-modal");
$$("[data-modal=book]").forEach((btn) =>
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    modal.classList.add("open");
  })
);
$(".modal-close")?.addEventListener("click", () => modal.classList.remove("open"));
modal?.addEventListener("click", (e) => {
  if (e.target === modal) modal.classList.remove("open");
});

$("#book-form")?.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(e.target);
  const name = data.get("name");
  const phone = data.get("phone");
  const date = data.get("date");
  const time = data.get("time");
  const guests = data.get("guests");
  const note = data.get("note") || "";
  const text = encodeURIComponent(
    `Здравствуйте! Хочу забронировать стол в Райхон.\nИмя: ${name}\nТелефон: ${phone}\nДата: ${date}\nВремя: ${time}\nГостей: ${guests}\n${note}`
  );
  window.open(`https://wa.me/79810150303?text=${text}`, "_blank");
  $(".form-ok").style.display = "block";
});

const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("in");
    });
  },
  { threshold: 0.12 }
);
$$(".reveal").forEach((el) => io.observe(el));
