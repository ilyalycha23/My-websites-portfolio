const MENU = [
  { cat: "breakfast", tag: "до 15:00", name: "Хашбраун с беконом и пашотом", price: "510 ₽", img: "images/dishes/hashbrown.jpg", desc: "Хрустящая картофельная лепёшка, бекон, яйцо пашот, сметанный соус и зелёное масло. Гости называют его любовью с открытия." },
  { cat: "breakfast", tag: "до 15:00", name: "Сырники со сметаной и карамелью", price: "480 ₽", img: "images/dishes/syrniki-caramel.jpg", desc: "Воздушные, с голубикой и карамелью. В отзывах их зовут божественными." },
  { cat: "breakfast", tag: "до 15:00", name: "Сырники с кофейным кремом", price: "510 ₽", img: "images/dishes/syrniki-coffee.jpg", desc: "Творог и рикотта, крем на эспрессо и топлёных сливках, ягодное послевкусие." },
  { cat: "breakfast", tag: "до 15:00", name: "Омлет с угольным соусом пармезан", price: "550 ₽", img: "images/dishes/omelette.jpg", desc: "Яйца, сливочное масло, пармезан, томаты и зелёное масло. Часто берут с рафом." },
  { cat: "breakfast", tag: "до 15:00", name: "Круассан с тамбовским окороком", price: "620 ₽", img: "images/dishes/croissant-ham.jpg", desc: "Пашот, барбекю, пармезан и руккола внутри собственной выпечки." },
  { cat: "breakfast", tag: "до 15:00", name: "Греча с белыми грибами и пореем", price: "480 ₽", img: "images/dishes/buckwheat.jpg", desc: "На курином бульоне, с яйцом пашот и фриллисом. Сытный утренний жест." },
  { cat: "breakfast", tag: "до 15:00", name: "Крок мадам", price: "690 ₽", img: "images/dishes/croque.jpg", desc: "Горячий, сытный, один из тех завтраков, после которых не хочется никуда идти." },
  { cat: "breakfast", tag: "до 15:00", name: "Гриль-чиз с томлёными щечками", price: "680 ₽", img: "images/dishes/grill-cheese.jpg", desc: "Говяжьи щёчки, чеддер, моцарелла и барбекю на деревенском хлебе." },
  { cat: "allday", tag: "весь день", name: "Медовый тост", price: "250 ₽", img: "images/dishes/honey-toast.jpg", desc: "Хрустящий круассан в медово-сливочной глазури. Маленький кусь к кофе." },
  { cat: "allday", tag: "весь день", name: "Медовый тост с фетой и орехом", price: "370 ₽", img: "images/dishes/honey-feta.jpg", desc: "Тот же круассан, но уже с фетой и грецким орехом." },
  { cat: "allday", tag: "весь день", name: "Зелёный салат", price: "620 ₽", img: "images/dishes/green-salad.jpg", desc: "Фенхель, брокколи, цукини, огурец, авокадо. Гости пишут: просто прелесть." },
  { cat: "allday", tag: "весь день", name: "Салат с креветками и печёным апельсином", price: "690 ₽", img: "images/dishes/salad-shrimp.jpg", desc: "Креветки, авокадо, руккола, клубничный соус. Яркий, как витрина." },
  { cat: "allday", tag: "весь день", name: "Чаудер с креветкой и лососем", price: "560 ₽", img: "images/dishes/chowder.jpg", desc: "Густой суп на хондаши и курином бульоне. Согревает, когда за окном Питер." },
  { cat: "allday", tag: "весь день", name: "Тыквенный крем-суп", price: "360 ₽", img: "images/dishes/pumpkin.jpg", desc: "Бархатистый, с тыквенными семечками и зелёным маслом." },
  { cat: "dinner", tag: "15:00–22:00", name: "Паста с креветками", price: "710 ₽", img: "images/dishes/pasta-shrimp.jpg", desc: "Чеснок, базилик, сырный акцент. Вечерняя классика зала." },
  { cat: "dinner", tag: "15:00–22:00", name: "Паста с тамбовским окороком", price: "690 ₽", img: "images/dishes/pasta-ham.jpg", desc: "Сливочная, с пармезаном. Когда завтраки уже закрылись." },
  { cat: "dinner", tag: "15:00–22:00", name: "Томлёные говяжьи щёчки", price: "810 ₽", img: "images/dishes/cheeks.jpg", desc: "С пюре, огурчиком в квасе и хреном. Самое сытное, что есть вечером." },
  { cat: "dinner", tag: "15:00–22:00", name: "Куриный бульон", price: "360 ₽", img: "images/dishes/broth.jpg", desc: "Просто бульон. Иногда больше ничего не нужно." },
  { cat: "drinks", tag: "кофе", name: "Капучино", price: "270 ₽", img: "images/place/hero-1.jpg", desc: "200 мл. То, с чего начинается район." },
  { cat: "drinks", tag: "кофе", name: "Флэт уайт", price: "280 ₽", img: "images/place/guest-1.jpg", desc: "150 мл. Плотнее, короче, честнее." },
  { cat: "drinks", tag: "кофе", name: "Раф", price: "350 ₽", img: "images/place/guest-7.jpg", desc: "300 мл. Ловите яблоко-корицу: сироп варят сами." },
  { cat: "drinks", tag: "кофе", name: "Латте", price: "330 ₽", img: "images/place/guest-1.jpg", desc: "300 мл. Можно хвойный, если сезон." },
  { cat: "drinks", tag: "кофе", name: "Американо", price: "220 ₽", img: "images/place/hero-1.jpg", desc: "200 мл. Спешелти, не «просто чёрный»." },
  { cat: "drinks", tag: "кофе", name: "Фильтр", price: "220 ₽", img: "images/place/hero-1.jpg", desc: "200 мл. Тихий способ понять зерно." },
  { cat: "drinks", tag: "не кофе", name: "Бамбл апельсин", price: "390 ₽", img: "images/place/interior-2.jpg", desc: "300 мл. Гости пишут: звучит странно, пьётся отлично." },
  { cat: "drinks", tag: "не кофе", name: "Эспрессо-тоник", price: "380 ₽", img: "images/place/hero-1.jpg", desc: "300 мл. Холодный, бодрый, летний." },
  { cat: "drinks", tag: "не кофе", name: "Матча / айс-матча", price: "330 ₽", img: "images/place/guest-4.jpg", desc: "200 мл. Когда кофе уже был." },
  { cat: "drinks", tag: "не кофе", name: "Какао", price: "290 ₽", img: "images/place/guest-3.jpg", desc: "Классика. Особенно с медовым тостом." },
  { cat: "drinks", tag: "чай", name: "Чайник на двоих", price: "290 ₽", img: "images/place/guest-6.jpg", desc: "700 мл: чёрный, зелёный, эрл грей или травяной. Жасминовая роза — чей-то фаворит." }
];

const SCENES = [
  { at: 0, clock: "09:14", phase: "первая чашка", photo: "images/place/kirish-3.jpg", photo2: "images/place/interior-1.jpg", copy: "Двери в 9:00. Пахнет круассанами и эспрессо. Если пришёл с хвостом — нальют воду и найдут место у окна.", hint: "круассан · капучино · тихий зал" },
  { at: 0.18, clock: "11:05", phase: "хашбраун и солнце", photo: "images/place/guest-1.jpg", photo2: "images/dishes/hashbrown.jpg", copy: "Завтраки до 15:00. Кто-то уже с ноутбуком, кто-то с собакой, кто-то просто смотрит в окно Ultra City.", hint: "хашбраун · омлет · раф" },
  { at: 0.36, clock: "12:40", phase: "пекарня дышит", photo: "images/place/sredne-5.jpg", photo2: "images/dishes/honey-toast.jpg", copy: "Своя выпечка: круассаны, мак, орех, лимон. На Киришской завтраки закрываются в 13:00 — не зевай.", hint: "медовый тост · лимонный круассан" },
  { at: 0.55, clock: "15:02", phase: "кухня переключает день", photo: "images/dishes/pasta-shrimp.jpg", photo2: "images/dishes/chowder.jpg", copy: "Утро кончилось. Появляются паста, чаудер, щечки. Кофе не уходит — он просто становится вечерним.", hint: "паста · чаудер · фильтр" },
  { at: 0.74, clock: "18:20", phase: "после района", photo: "images/place/sredne-1.jpg", photo2: "images/place/interior-2.jpg", copy: "Неоновая волна, терраццо, растения. По выходным — вино и коктейли. Зачем ехать в центр?", hint: "щёчки · зелёный салат · вино" },
  { at: 0.9, clock: "21:10", phase: "последний кусь", photo: "images/place/guest-3.jpg", photo2: "images/dishes/syrniki-coffee.jpg", copy: "До 22:00. Сырники ещё можно, если остались. Завтра снова в девять — три дома, один вайб.", hint: "сырники · какао · домой" }
];

const NOTES = [
  { text: "Из всех кофеен в ультра сити эта самая топовая. Красивая, светлая, вкусная.", name: "Екатерина" },
  { text: "Хашбраун — самая любовь со дня открытия.", name: "Анастасия" },
  { text: "Сырники с карамелью действительно божественные.", name: "Снежана" },
  { text: "Раф яблоко-корица: сироп варят сами, вкус обволакивающий.", name: "Ирина" },
  { text: "Сюда надо идти за булками и завтраками. Можно с питомцами — отдельный лайк.", name: "Алексей" },
  { text: "Везде розетки и вайфай. Прихожу поработать и остаюсь.", name: "Полина" },
  { text: "Есть меню-кусь для собачек.", name: "Надежда" },
  { text: "Бенедикт с креветкой и икрой — разрыв вкусовых сосочков.", name: "Алина" },
  { text: "Много солнца и зелени внутри. Зелёный салат — прелесть.", name: "Вера" },
  { text: "Улыбка появляется сама. Хочется приходить не только за кофе.", name: "гость" },
  { text: "Бамбл очень хорош, хоть и звучит необычно.", name: "Rinari" },
  { text: "Лимонный круассан нежный и ароматный. Бариста Полина — лучик.", name: "Алексей М." }
];

const moscowNow = () => {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Europe/Moscow",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23"
  }).formatToParts(new Date());
  const hour = Number(parts.find((p) => p.type === "hour").value);
  const minute = Number(parts.find((p) => p.type === "minute").value);
  return { hour, minute, label: `${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}` };
};

const setTimeUi = () => {
  const { hour, label } = moscowNow();
  const open = hour >= 9 && hour < 22;
  document.getElementById("clock").textContent = label;
  document.getElementById("liveLabel").textContent = open ? "открыто" : "закрыто";
  document.getElementById("liveDot").classList.toggle("is-closed", !open);

  let greet = "добрый вечер";
  let phase = "eve";
  if (hour >= 5 && hour < 12) { greet = "доброе утро"; phase = "morn"; }
  else if (hour >= 12 && hour < 17) { greet = "добрый день"; phase = "day"; }
  else if (hour >= 22 || hour < 5) { greet = open ? "ещё открыто" : "увидимся в 9:00"; phase = "eve"; }
  document.getElementById("greet").textContent = greet;
  document.body.dataset.phase = phase;

  const breakfast = hour < 15;
  document.getElementById("menuNow").textContent = breakfast
    ? "сейчас на кухне утро · завтраки до 15:00 (на киришской до 13:00)"
    : hour < 22
      ? "сейчас на кухне день · паста, супы, щечки"
      : "кухня спит · завтра с 9:00";
  return { hour, breakfast };
};

const GROUP_TITLE = {
  breakfast: "утро · до 15:00",
  allday: "весь день",
  dinner: "после 15:00",
  drinks: "напитки"
};

const plateHTML = (item) => `
  <article class="plate">
    <img src="${item.img}" alt="${item.name}" />
    <div class="plate-copy">
      <p class="plate-tag">${item.tag}</p>
      <h3>${item.name}</h3>
      <p class="plate-desc">${item.desc}</p>
    </div>
    <strong class="plate-price">${item.price}</strong>
  </article>
`;

const renderMenu = (cat, hour) => {
  const box = document.getElementById("menuBoard");
  let items = MENU;
  if (cat === "now") {
    items = hour < 15
      ? MENU.filter((i) => i.cat === "breakfast" || i.cat === "allday" || i.cat === "drinks")
      : MENU.filter((i) => i.cat === "dinner" || i.cat === "allday" || i.cat === "drinks");
  } else {
    items = MENU.filter((i) => i.cat === cat);
  }
  const groups = ["breakfast", "allday", "dinner", "drinks"]
    .map((key) => ({ key, items: items.filter((i) => i.cat === key) }))
    .filter((g) => g.items.length);
  box.innerHTML = groups.map((g) => `
    <section class="menu-group">
      <h3>${GROUP_TITLE[g.key]}</h3>
      <div class="plates">
        ${g.items.map(plateHTML).join("")}
      </div>
    </section>
  `).join("");
};

const bindMenu = (hour) => {
  const board = document.getElementById("menuBoard");
  renderMenu("now", hour);
  document.querySelectorAll(".chip").forEach((chip) => {
    chip.addEventListener("click", () => {
      document.querySelectorAll(".chip").forEach((c) => {
        c.classList.toggle("is-on", c === chip);
        c.setAttribute("aria-selected", c === chip ? "true" : "false");
      });
      renderMenu(chip.dataset.cat, moscowNow().hour);
    });
  });
  board.addEventListener("pointerover", (e) => {
    if (e.target.closest(".plate")) document.body.classList.add("is-hover");
  });
  board.addEventListener("pointerout", (e) => {
    if (e.target.closest(".plate")) document.body.classList.remove("is-hover");
  });
};

const bindDay = () => {
  const section = document.getElementById("day");
  const beats = [...document.querySelectorAll("#dayBeats li")];
  const rail = [...document.querySelectorAll("#dayRail span")];
  const apply = (scene, index) => {
    document.getElementById("dayClock").textContent = scene.clock;
    document.getElementById("dayPhase").textContent = scene.phase;
    document.getElementById("dayPhoto").src = scene.photo;
    document.getElementById("dayPhoto2").src = scene.photo2;
    document.getElementById("dayCopy").textContent = scene.copy;
    document.getElementById("dayHint").textContent = scene.hint;
    beats.forEach((el, i) => el.classList.toggle("is-on", i === index));
    rail.forEach((el, i) => el.classList.toggle("is-on", i === index));
  };
  apply(SCENES[0], 0);
  const onScroll = () => {
    const rect = section.getBoundingClientRect();
    const total = section.offsetHeight - window.innerHeight;
    const p = Math.min(1, Math.max(0, -rect.top / total));
    let index = 0;
    SCENES.forEach((s, i) => { if (p >= s.at) index = i; });
    apply(SCENES[index], index);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
};

const bindNotes = () => {
  const table = document.getElementById("tabletop");
  const isMobile = window.matchMedia("(max-width: 960px)").matches;
  const show = isMobile ? NOTES.slice(0, 5) : NOTES;
  show.forEach((note, i) => {
    const el = document.createElement("article");
    el.className = "note";
    el.innerHTML = `${note.text}<b>${note.name}</b>`;
    if (!isMobile) {
      el.style.left = `${6 + (i % 4) * 23 + (i % 3) * 2}%`;
      el.style.top = `${8 + Math.floor(i / 4) * 30 + (i % 2) * 6}%`;
      el.style.transform = `rotate(${(i % 2 === 0 ? -1 : 1) * (4 + (i % 5) * 2)}deg)`;
    }
    table.appendChild(el);
  });
  if (isMobile) return;
  let drag = null;
  table.addEventListener("pointerdown", (e) => {
    const note = e.target.closest(".note");
    if (!note) return;
    const r = note.getBoundingClientRect();
    const tr = table.getBoundingClientRect();
    drag = { note, dx: e.clientX - r.left, dy: e.clientY - r.top, tr };
    note.style.zIndex = 8;
    note.setPointerCapture(e.pointerId);
  });
  table.addEventListener("pointermove", (e) => {
    if (!drag) return;
    const x = e.clientX - drag.tr.left - drag.dx;
    const y = e.clientY - drag.tr.top - drag.dy;
    drag.note.style.left = `${x}px`;
    drag.note.style.top = `${y}px`;
    drag.note.style.right = "auto";
  });
  table.addEventListener("pointerup", () => { drag = null; });
};

const bindChrome = () => {
  const loader = document.getElementById("loader");
  window.addEventListener("load", () => {
    setTimeout(() => loader.classList.add("is-gone"), 900);
  });
  setTimeout(() => loader.classList.add("is-gone"), 2200);

  const btn = document.getElementById("menuBtn");
  const nav = document.getElementById("mobileNav");
  btn.addEventListener("click", () => {
    const open = nav.classList.toggle("is-open");
    btn.setAttribute("aria-expanded", String(open));
  });
  nav.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => nav.classList.remove("is-open")));

  const navLinks = [...document.querySelectorAll(".ticket-nav a, .mobile-nav a[href^='#']")];
  const navSections = navLinks
    .map((a) => document.querySelector(a.getAttribute("href")))
    .filter(Boolean);
  const spyNav = () => {
    const line = window.scrollY + 160;
    let current = null;
    for (const section of navSections) {
      if (section.offsetTop <= line) current = section;
    }
    navLinks.forEach((a) => {
      const on = Boolean(current) && a.getAttribute("href") === `#${current.id}`;
      a.classList.toggle("is-on", on);
      if (on) a.setAttribute("aria-current", "location");
      else a.removeAttribute("aria-current");
    });
  };
  window.addEventListener("scroll", spyNav, { passive: true });
  spyNav();

  const cursor = document.querySelector(".cursor");
  const pop = document.querySelector(".bite-pop");
  const buddy = document.getElementById("buddy");
  let bx = innerWidth - 120;
  let by = innerHeight - 120;
  window.addEventListener("pointermove", (e) => {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
    bx += (e.clientX + 36 - bx) * 0.08;
    by += (e.clientY + 36 - by) * 0.08;
    buddy.style.left = `${bx}px`;
    buddy.style.top = `${by}px`;
    buddy.style.right = "auto";
    buddy.style.bottom = "auto";
  });
  document.querySelectorAll("a, button, .shot, .plate, .note, .wordmark, .polar").forEach((el) => {
    el.addEventListener("pointerenter", () => document.body.classList.add("is-hover"));
    el.addEventListener("pointerleave", () => document.body.classList.remove("is-hover"));
  });
  document.querySelector(".wordmark").addEventListener("click", (e) => {
    pop.style.left = `${e.clientX}px`;
    pop.style.top = `${e.clientY}px`;
    pop.classList.remove("show");
    void pop.offsetWidth;
    pop.classList.add("show");
  });

  const box = document.getElementById("lightbox");
  const img = document.getElementById("lightboxImg");
  document.querySelectorAll(".shot").forEach((shot) => {
    shot.addEventListener("click", () => {
      img.src = shot.dataset.full;
      img.alt = shot.querySelector("img").alt;
      box.hidden = false;
    });
  });
  document.getElementById("lightboxClose").addEventListener("click", () => { box.hidden = true; });
  box.addEventListener("click", (e) => { if (e.target === box) box.hidden = true; });

  document.querySelectorAll(".window").forEach((w) => {
    w.addEventListener("pointerenter", () => {
      document.querySelectorAll(".window").forEach((x) => x.classList.toggle("is-on", x === w));
    });
  });
};

document.addEventListener("DOMContentLoaded", () => {
  const { hour } = setTimeUi();
  bindMenu(hour);
  bindDay();
  bindNotes();
  bindChrome();
  setInterval(setTimeUi, 30000);
});
