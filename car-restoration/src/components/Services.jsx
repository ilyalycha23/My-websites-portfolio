import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { CAR_ASPECT, CarRig, WHEEL_SIZE } from "./Car.jsx";

const SERVICES = [
  {
    head: "Ремонт",
    accent: "после ДТП",
    nav: "Ремонт после ДТП",
    id: "repair",
    text: "От дефектовки до ключей. Геометрию, металл и цвет ведёт один мастер, без субподряда.",
    includes: ["Дефектовка и смета", "Работа со страховой", "Оригинальные детали"],
    term: "от 7 дней",
    price: "от 60 000 ₽",
    warranty: "3 года",
  },
  {
    head: "Кузов и",
    accent: "геометрия",
    nav: "Кузов и геометрия",
    id: "body",
    text: "Стапель вытягивает силовую структуру до заводских точек. Рихтуем металл, а не прячем волну под шпаклёвкой.",
    includes: ["Стапель и 3D-замер", "Рихтовка по металлу", "Замена силовых элементов"],
    term: "от 3 дней",
    price: "от 25 000 ₽",
    warranty: "3 года",
  },
  {
    head: "Окраска",
    accent: "в камере",
    nav: "Покраска",
    id: "paint",
    text: "Цвет подбираем спектрофотометром по коду кузова и делаем переход в соседнюю деталь. Лак без пыли и подтёков.",
    includes: ["Подбор цвета", "Окрасочная камера", "Плавный переход"],
    term: "от 2 дней",
    price: "от 15 000 ₽",
    warranty: "2 года",
  },
  {
    head: "Полировка",
    accent: "без голограмм",
    nav: "Полировка",
    id: "polish",
    text: "Снимаем паутинку, риски и голограммы. Под светом лампы кузов выглядит ровным и глубоким.",
    includes: ["Абразивная полировка", "Финишный этап", "Керамика по запросу"],
    term: "1 день",
    price: "от 18 000 ₽",
    warranty: "1 год",
  },
  {
    head: "Детейлинг",
    accent: "до мелочей",
    nav: "Детейлинг",
    id: "detailing",
    text: "Салон, оптика и хром. Машину отдаём только после осмотра при дневном свете.",
    includes: ["Химчистка салона", "Оптика и хром", "Осмотр при дневном свете"],
    term: "1 день",
    price: "от 12 000 ₽",
    warranty: "6 месяцев",
  },
];

const SCENE_MASK =
  "linear-gradient(90deg, transparent, #000 14%, #000 86%, transparent), linear-gradient(180deg, transparent, #000 18%, #000 76%, transparent)";
const ROOM_SCALE = 1.6;
const DRIVE = { enter: 0.08, exit: 0.9 };
const pad = (n) => String(n).padStart(2, "0");

function Line({ children, className = "" }) {
  return (
    <span className={`block overflow-hidden ${className}`}>
      <span className="reveal-line block">{children}</span>
    </span>
  );
}

export default function Services() {
  const rootRef = useRef(null);
  const carRef = useRef(null);
  const floorRef = useRef(null);
  const sceneRef = useRef(null);
  const horizonRef = useRef(null);

  useGSAP(
    () => {
      const motion = gsap.matchMedia();
      const root = rootRef.current;
      const car = carRef.current;
      const floor = floorRef.current;
      const sceneTrack = sceneRef.current;
      const horizon = horizonRef.current;
      const panels = gsap.utils.toArray(".service-panel", root);
      const scenes = gsap.utils.toArray(".service-scene", root);
      const counters = gsap.utils.toArray(".service-count", root);
      const fills = gsap.utils.toArray(".chapter-fill", root);
      const chapters = gsap.utils.toArray(".chapter", root);
      const wheels = gsap.utils.toArray(".car-wheel", root);
      const sheens = gsap.utils.toArray(".car-sheen", root);

      const linesOf = (i) => [counters[i], ...panels[i].querySelectorAll(".reveal-line")];

      const mark = (index) => {
        panels.forEach((panel, i) => {
          const on = i === index;
          panel.style.pointerEvents = on ? "auto" : "none";
          panel.setAttribute("aria-hidden", String(!on));
          panel.querySelectorAll("a").forEach((link) => (link.tabIndex = on ? 0 : -1));
        });
        chapters.forEach((chapter, i) => (chapter.dataset.active = String(i === index)));
      };

      const prime = () => {
        SERVICES.forEach((_, i) => {
          gsap.set(linesOf(i), { y: 0, yPercent: i === 0 ? 0 : 110 });
        });
        mark(0);
      };

      const swap = (from, to, instant) => {
        mark(to);
        if (instant) {
          gsap.set(linesOf(from), { y: 0, yPercent: 110 });
          gsap.set(linesOf(to), { y: 0, yPercent: 0 });
          return;
        }
        const back = to < from ? -1 : 1;
        gsap.to(linesOf(from), { y: 0, yPercent: -110 * back, duration: 0.45, ease: "power3.in", stagger: 0.025, overwrite: true });
        gsap.fromTo(
          linesOf(to),
          { y: 0, yPercent: 110 * back },
          { y: 0, yPercent: 0, duration: 1, ease: "expo.out", stagger: 0.045, delay: 0.25, overwrite: true },
        );
      };

      motion.add(
        {
          any: "all",
          reduce: "(prefers-reduced-motion: reduce)",
        },
        ({ conditions }) => {
          prime();
          const state = { p: 0 };
          let current = 0;
          let lastX = null;
          let spin = 0;
          let room = 0;

          const fitScenes = () => {
            room = car.offsetWidth * ROOM_SCALE;
            const height = (room * 9) / 16;
            const top = sceneTrack.parentElement.getBoundingClientRect().top;
            const floorY = horizon.getBoundingClientRect().top - top;
            Object.assign(sceneTrack.style, {
              width: `${room * SERVICES.length}px`,
              height: `${height}px`,
              top: `${floorY - height * 0.8}px`,
            });
            scenes.forEach((scene, i) => Object.assign(scene.style, { left: `${room * i}px`, width: `${room}px` }));
          };

          const render = () => {
            const vw = window.innerWidth;
            const carWidth = car.offsetWidth;
            const wheelPx = (carWidth * WHEEL_SIZE) / 100;
            const last = SERVICES.length - 1;
            const travel = gsap.utils.clamp(0, 1, (state.p - DRIVE.enter) / (DRIVE.exit - DRIVE.enter)) * last;
            const trackX = vw / 2 - (travel + 0.5) * room;

            let center = vw / 2;
            if (state.p < DRIVE.enter) {
              center = gsap.utils.interpolate(-carWidth * 0.6, vw / 2, gsap.parseEase("power2.out")(state.p / DRIVE.enter));
            } else if (state.p > DRIVE.exit) {
              center = gsap.utils.interpolate(vw / 2, vw + carWidth * 0.6, gsap.parseEase("power2.in")((state.p - DRIVE.exit) / (1 - DRIVE.exit)));
            }

            gsap.set(car, { x: center - carWidth / 2 });
            gsap.set(sceneTrack, { x: trackX });
            floor.style.backgroundPositionX = `${trackX}px`;
            sheens.forEach((sheen) => (sheen.style.backgroundPositionX = `${(trackX - center) * 0.7}px`));

            const position = (center - trackX) / room;
            fills.forEach((fill, i) => gsap.set(fill, { scaleX: gsap.utils.clamp(0, 1, position - i) }));

            const active = gsap.utils.clamp(0, last, Math.floor(position));
            if (active !== current) {
              swap(current, active, conditions.reduce);
              current = active;
            }

            const distance = center - trackX;
            if (lastX !== null) spin += ((distance - lastX) / (Math.PI * wheelPx)) * 360;
            lastX = distance;
            gsap.set(wheels, { x: 0, y: 0, xPercent: -50, yPercent: -50, rotation: spin });
            if (!conditions.reduce) gsap.set(car, { y: Math.sin(distance / 90) * 0.8 });

            scenes.forEach((scene, i) => {
              const near = gsap.utils.clamp(0, 1, 1.4 - Math.abs(position - (i + 0.5)) * 1.3);
              scene.style.opacity = String(0.28 + 0.72 * near * near * (3 - 2 * near));
            });
          };

          gsap.to(state, {
            p: 1,
            ease: "none",
            onUpdate: render,
            scrollTrigger: {
              trigger: root,
              start: "top top",
              end: "bottom bottom",
              scrub: 0.6,
              invalidateOnRefresh: true,
              onRefresh: () => {
                fitScenes();
                render();
              },
            },
          });
          fitScenes();
          render();
        },
      );

      return () => motion.revert();
    },
    { scope: rootRef },
  );

  return (
    <section id="services" ref={rootRef} className="relative h-[560vh] bg-black">
      <div className="sticky top-0 flex h-svh flex-col overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_30%_0%,rgba(217,176,122,0.09),transparent_70%)]" />

        <div className="pointer-events-none absolute inset-0">
          <div ref={sceneRef} className="absolute left-0 top-0">
            {SERVICES.map((service, i) => (
              <div
                key={service.id}
                className="service-scene absolute inset-y-0 opacity-30"
                style={{
                  maskImage: SCENE_MASK,
                  WebkitMaskImage: SCENE_MASK,
                  maskComposite: "intersect",
                  WebkitMaskComposite: "source-in",
                }}
              >
                <img
                  src={`/services/${i + 1}.webp`}
                  alt=""
                  width="2400"
                  height="1350"
                  loading="eager"
                  fetchPriority={i < 2 ? "high" : "low"}
                  decoding="async"
                  draggable="false"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.9)_0%,rgba(0,0,0,0.7)_25%,rgba(0,0,0,0.3)_45%,transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_75%_90%_at_50%_70%,transparent_55%,rgba(0,0,0,0.65)_100%)]" />
        </div>

        <h2 className="sr-only">Услуги</h2>
        <div className="relative z-10 flex items-start justify-end px-5 pt-20 md:px-14 md:pt-[5.5rem]">
          <div className="flex items-baseline gap-2 text-stone">
            <span className="relative grid overflow-hidden text-[2rem] font-medium leading-none tracking-[-0.04em] text-gold tabular-nums md:text-[clamp(2.25rem,3vw,3.25rem)]">
              {SERVICES.map((service, i) => (
                <span key={service.id} className="service-count col-start-1 row-start-1 block">
                  {pad(i + 1)}
                </span>
              ))}
            </span>
            <span className="text-[14px] tabular-nums">/ {pad(SERVICES.length)}</span>
          </div>
        </div>

        <div className="relative z-10 mt-[clamp(0.25rem,1.5svh,1.25rem)] grid px-5 md:px-14">
          {SERVICES.map((service, i) => (
            <article
              key={service.id}
              className="service-panel col-start-1 row-start-1 grid gap-6 md:grid-cols-[minmax(0,1fr)_minmax(15rem,20rem)] md:gap-16 lg:grid-cols-[minmax(0,1fr)_minmax(17rem,22rem)]"
            >
              <div>
                <h3 className="font-sans text-[2.6rem] font-medium leading-[0.98] tracking-[-0.055em] text-bone md:text-[clamp(3rem,min(5.6vw,9svh),6.5rem)]">
                  <Line className="-mb-[0.08em] pb-[0.08em]">{service.head}</Line>
                  <Line className="-mt-[0.08em] pb-[0.14em] pt-[0.04em]">
                    <em className="text-gilded font-serif font-normal tracking-[-0.035em]">{service.accent}</em>
                  </Line>
                </h3>
                <div className="mt-4 max-w-[34rem] text-[15px] leading-[1.6] text-stone md:mt-6 md:text-base">
                  <Line>{service.text}</Line>
                </div>
                <ul className="mt-6 hidden flex-wrap gap-x-7 gap-y-2 text-[14px] text-bone/85 md:flex [@media(max-height:760px)]:hidden">
                  {service.includes.map((item) => (
                    <li key={item}>
                      <Line>
                        <span className="flex items-center gap-2.5">
                          <span className="h-1 w-1 rounded-full bg-gold shadow-[0_0_8px_rgba(217,176,122,0.9)]" />
                          {item}
                        </span>
                      </Line>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="md:pt-3">
                <dl className="grid grid-cols-3 border-t border-stone/20 md:grid-cols-1">
                  {[
                    ["Срок", service.term],
                    ["Стоимость", service.price],
                    ["Гарантия", service.warranty],
                  ].map(([label, value]) => (
                    <div
                      key={label}
                      className="border-stone/15 py-3 md:flex md:items-baseline md:justify-between md:border-b md:py-4"
                    >
                      <dt className="text-[12px] text-stone md:text-[13px]">
                        <Line>{label}</Line>
                      </dt>
                      <dd className="mt-1 text-[15px] text-bone tabular-nums md:mt-0 md:text-[19px] md:tracking-[-0.02em]">
                        <Line>{value}</Line>
                      </dd>
                    </div>
                  ))}
                </dl>
                <a
                  href="#contact"
                  tabIndex={i === 0 ? 0 : -1}
                  className="group mt-5 hidden items-center gap-3 text-[14px] text-bone md:inline-flex"
                >
                  <Line>
                    <span className="inline-flex items-center gap-3">
                      Рассчитать стоимость
                      <span className="grid h-8 w-8 place-items-center rounded-full border border-gold/40 text-gold transition-colors duration-300 group-hover:bg-gold group-hover:text-ink">
                        <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className="h-3.5 w-3.5">
                          <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                    </span>
                  </Line>
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="pointer-events-none relative mt-4 min-h-[140px] flex-1 md:mt-6 [container-type:size]">
          <div
            ref={floorRef}
            className="absolute inset-x-0 bottom-0 h-[38%] bg-[linear-gradient(to_bottom,rgba(243,240,232,0.06),transparent_40%),repeating-linear-gradient(90deg,transparent_0,transparent_140px,rgba(243,240,232,0.05)_140px,rgba(243,240,232,0.05)_142px)]"
            style={{ maskImage: "linear-gradient(to bottom, #000, transparent)", WebkitMaskImage: "linear-gradient(to bottom, #000, transparent)" }}
          />

          <div ref={horizonRef} className="absolute inset-x-0 bottom-[38%] h-px bg-gradient-to-r from-transparent via-stone/30 to-transparent" />

          <div
            ref={carRef}
            className="absolute bottom-[38%] left-0 z-10 w-[min(82vw,34rem,calc(58cqh*3.176))] will-change-transform md:w-[min(58vw,68rem,calc(58cqh*3.176))]"
            style={{ aspectRatio: CAR_ASPECT, marginBottom: "-1.2%" }}
          >
            <CarRig />
          </div>

        </div>

        <ol className="relative z-20 grid grid-cols-5 gap-2 px-5 pb-6 md:gap-6 md:px-14 md:pb-10">
          {SERVICES.map((service, i) => (
            <li key={service.id} data-active={i === 0 ? "true" : "false"} className="chapter">
              <span className="block h-px overflow-hidden bg-stone/20">
                <span className="chapter-fill block h-px origin-left scale-x-0 bg-gradient-to-r from-gold/50 to-gold" />
              </span>
              <span className="chapter-label mt-3 flex gap-2.5 text-[12px] md:text-[13px]">
                <span className="tabular-nums">{pad(i + 1)}</span>
                <span className="hidden truncate md:inline">{service.nav}</span>
              </span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
