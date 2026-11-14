import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CAR_ASPECT, CarRig, WHEEL_SIZE } from "./Car.jsx";

const CASES = [
  {
    id: "audi",
    head: "Audi RS 6",
    accent: "Avant",
    damage: "Боковой удар на трассе",
    work: "Двери, стойка, порог, окраска борта",
    term: "24 дня",
  },
  {
    id: "bmw",
    head: "BMW 5",
    accent: "серии",
    damage: "Фронтальный удар",
    work: "Передок, оптика, окраска",
    term: "18 дней",
    live: true,
  },
  {
    id: "mercedes",
    head: "Mercedes",
    accent: "S-класс",
    damage: "Удар в заднюю часть",
    work: "Задняя панель, крышка багажника, фонарь",
    term: "15 дней",
  },
  {
    id: "rangerover",
    head: "Range",
    accent: "Rover",
    damage: "Протёрся бортом об отбойник",
    work: "Рихтовка и окраска борта, зеркало",
    term: "12 дней",
  },
];

const LIVE = CASES.findIndex((item) => item.live);
const ARRIVE = { start: 0.1, cruise: 0.35, stop: 0.82 };
const FIT = "(min-width: 1280px) and (min-height: 700px)";
const BAY_LIGHTS = [
  [0, 0],
  [0.06, 0],
  [0.08, 0.75],
  [0.11, 0.12],
  [0.15, 0.85],
  [0.19, 0.3],
  [0.23, 0.45],
  [0.42, 1],
];
const COVER = {
  "--iw": "max(100cqw, 100cqh * 16 / 9)",
  width: "var(--iw)",
  height: "calc(var(--iw) * 9 / 16)",
  left: "calc(50cqw - var(--iw) / 2)",
  top: "clamp(calc(100cqh - var(--iw) * 9 / 16), calc(50cqh - var(--iw) * 0.349), 0px)",
};
const pad = (n) => String(n).padStart(2, "0");
const ramp = (v, from, to) => gsap.utils.clamp(0, 1, (v - from) / (to - from));

const travelled = (t) => {
  const { cruise } = ARRIVE;
  const speed = 2 / (1 + cruise);
  if (t <= cruise) return speed * t;
  const braking = t - cruise;
  return speed * cruise + speed * braking - (speed * braking * braking) / (2 * (1 - cruise));
};

const bayLight = (v) => {
  for (let i = 1; i < BAY_LIGHTS.length; i += 1) {
    const [x1, y1] = BAY_LIGHTS[i];
    const [x0, y0] = BAY_LIGHTS[i - 1];
    if (v <= x1) return y0 + (y1 - y0) * ramp(v, x0, x1);
  }
  return 1;
};

export default function Gallery() {
  const rootRef = useRef(null);
  const stageRef = useRef(null);
  const carRef = useRef(null);
  const darkRef = useRef(null);
  const blurRef = useRef(null);
  const [active, setActive] = useState(LIVE);
  const [before, setBefore] = useState(false);
  const current = CASES[active];

  const choose = (index) => {
    setActive(index);
    setBefore(false);
  };

  useGSAP(
    () => {
      const root = rootRef.current;
      const stage = stageRef.current;
      const car = carRef.current;
      const dark = darkRef.current;
      const blur = blurRef.current;
      const body = car.querySelector(".car-body");
      const wheels = gsap.utils.toArray(".car-wheel", car);
      const sheens = gsap.utils.toArray(".car-sheen", car);
      const beams = [car.querySelector(".car-lights"), car.querySelector(".case-wash")];
      const tail = car.querySelector(".car-tail");
      const brakeGlow = car.querySelector(".case-brake");
      const befores = gsap.utils.toArray(".case-before", root);
      const motion = gsap.matchMedia();

      const warm = ScrollTrigger.create({
        trigger: root,
        start: "top 250%",
        once: true,
        onEnter: () => befores.forEach((img) => img.decode().catch(() => {})),
      });

      motion.add({ any: "all", fit: FIT, reduce: "(prefers-reduced-motion: reduce)" }, ({ conditions }) => {
        if (conditions.reduce) return undefined;

        gsap.fromTo(
          gsap.utils.toArray(".case-reveal", root),
          { autoAlpha: 0, y: 32 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 1.1,
            stagger: 0.08,
            ease: "power3.out",
            clearProps: "transform",
            scrollTrigger: { trigger: root, start: "top 75%", once: true },
          },
        );

        const state = { p: 0 };
        const reveal = { v: 0 };
        let parked = false;

        const render = () => {
          const lane = stage.offsetWidth - car.offsetParent.offsetLeft - car.offsetLeft + car.offsetWidth * 0.1;
          const wheelPx = (car.offsetWidth * WHEEL_SIZE) / 100;
          const t = ramp(state.p, ARRIVE.start, ARRIVE.stop);
          const distance = travelled(t) * lane;
          const x = lane - distance;
          const moving = t > 0 && t < 1;
          const speed = moving ? (t <= ARRIVE.cruise ? 1 : 1 - (t - ARRIVE.cruise) / (1 - ARRIVE.cruise)) : 0;
          const brake = t > ARRIVE.cruise ? ramp(t, ARRIVE.cruise, ARRIVE.cruise + 0.06) : 0;
          const v = reveal.v;

          if (t >= 1 && !parked) park();
          if (t < 1 && parked) unpark();

          gsap.set(car, parked ? { x } : { x, rotation: -0.8 * brake, transformOrigin: "50% 92%" });
          gsap.set(wheels, {
            x: 0,
            y: 0,
            xPercent: -50,
            yPercent: -50,
            rotation: (distance / (Math.PI * wheelPx)) * 360,
          });

          const smear = speed * car.offsetWidth * 0.014;
          blur.setAttribute("stdDeviation", `${smear.toFixed(2)} 0`);
          body.style.filter = smear > 0.4 ? "url(#case-motion)" : "none";

          const glint = String(ramp(x, 0, lane * 0.35));
          sheens.forEach((sheen) => {
            sheen.style.backgroundPositionX = `${-x * 0.7}px`;
            sheen.style.opacity = glint;
          });

          const engineOff = ramp(v, 0.5, 0.8);
          const brakeLight = t >= 1 ? 1 : brake;
          gsap.set(beams, { autoAlpha: 1 - engineOff });
          gsap.set(tail, { autoAlpha: (0.55 + 0.45 * brakeLight) * (1 - 0.75 * engineOff) });
          gsap.set(brakeGlow, { autoAlpha: brakeLight * (1 - engineOff) });
          gsap.set(dark, { opacity: 0.82 * (1 - bayLight(v)) });
        };

        const park = () => {
          parked = true;
          gsap.to(car, { rotation: 0, duration: 1.6, ease: "elastic.out(1, 0.32)", overwrite: "auto" });
          gsap.to(reveal, { v: 1, duration: 3, ease: "none", onUpdate: render, overwrite: true });
        };

        const unpark = () => {
          parked = false;
          gsap.killTweensOf(car, "rotation");
          gsap.to(reveal, { v: 0, duration: 0.5, ease: "power2.out", onUpdate: render, overwrite: true });
        };

        gsap.to(state, {
          p: 1,
          ease: "none",
          onUpdate: render,
          scrollTrigger: {
            trigger: conditions.fit ? root : stage,
            start: conditions.fit ? "top top" : "center 45%",
            end: "+=130%",
            pin: root,
            scrub: 0.8,
            invalidateOnRefresh: true,
            onRefresh: render,
          },
        });
        render();

        return () => {
          body.style.filter = "none";
          gsap.set([dark, ...beams, tail, brakeGlow], { clearProps: "all" });
        };
      });

      return () => {
        warm.kill();
        motion.revert();
      };
    },
    { scope: rootRef },
  );

  return (
    <section
      id="cases"
      ref={rootRef}
      className="relative bg-black px-5 py-28 md:px-14 md:py-36 fit:h-svh fit:pb-10 fit:pt-24"
    >
      <svg className="absolute h-0 w-0" aria-hidden="true">
        <filter id="case-motion" x="-10%" y="0" width="120%" height="100%">
          <feGaussianBlur ref={blurRef} stdDeviation="0 0" />
        </filter>
      </svg>

      <div className="grid gap-10 [grid-template-areas:'head'_'stage'_'list'] fit:h-full fit:grid-cols-[minmax(0,1fr)_min(44%,clamp(24rem,calc((100svh-33rem)*1.78),38rem))] fit:grid-rows-[minmax(0,1fr)_auto_auto_minmax(0,1fr)] fit:gap-x-14 fit:gap-y-0 fit:[grid-template-areas:'stage_.'_'stage_head'_'stage_list'_'stage_.']">
        <header className="case-reveal [grid-area:head]">
          <h2 className="font-sans text-[2.6rem] font-medium leading-[0.98] tracking-[-0.055em] text-bone md:text-[clamp(2.75rem,min(4vw,7svh),4.25rem)]">
            Работы
            <br />
            <em className="text-gilded font-serif font-normal tracking-[-0.035em]">до и после</em>
          </h2>
          <p className="mt-5 max-w-[24rem] text-[15px] leading-[1.65] text-stone fit:[@media(max-height:880px)]:hidden">
            Четыре машины, которые приехали к нам после ДТП. Выберите работу и сравните, какой она была.
          </p>
        </header>

        <div className="case-reveal relative [grid-area:stage] fit:flex fit:min-h-0 fit:items-center fit:[container-type:size]">
          <div
            ref={stageRef}
            className="relative aspect-video w-full overflow-hidden bg-black [container-type:size] fit:aspect-auto fit:h-[min(100cqh,75cqw)]"
          >
            {CASES.map((item, i) => (
              <div
                key={item.id}
                aria-hidden={i !== active}
                className="absolute inset-0 transition-opacity duration-700 ease-out"
                style={{ opacity: i === active ? 1 : 0 }}
              >
                <div className="absolute" style={COVER}>
                  <img
                    src={`/cases/${item.live ? "bay" : item.id}.webp`}
                    alt={item.live ? "" : `${item.head} ${item.accent} после восстановления`}
                    width="1920"
                    height="1080"
                    decoding="async"
                    draggable="false"
                    className="absolute inset-0 h-full w-full"
                  />
                  {item.live && (
                    <>
                      <div ref={darkRef} className="absolute inset-0 bg-black opacity-0" />
                      <div
                        ref={carRef}
                        role="img"
                        aria-label={`${item.head} ${item.accent} после восстановления`}
                        className="absolute left-[15%] top-[46.1%] w-[70%] will-change-transform"
                        style={{ aspectRatio: CAR_ASPECT }}
                      >
                        <div className="absolute inset-0 -scale-x-100">
                          <span className="case-wash absolute left-[96%] top-[62%] h-[70%] w-[150%] bg-[radial-gradient(ellipse_50%_50%_at_30%_50%,rgba(255,238,212,0.22),rgba(255,230,200,0.06)_55%,transparent_75%)] blur-xl mix-blend-screen" />
                          <span className="case-brake absolute -left-[22%] top-[78%] h-[34%] w-[40%] bg-[radial-gradient(ellipse_50%_50%_at_60%_50%,rgba(255,40,28,0.4),rgba(255,30,20,0.1)_55%,transparent_75%)] opacity-0 blur-lg mix-blend-screen" />
                          <CarRig />
                        </div>
                      </div>
                    </>
                  )}
                  <img
                    src={`/cases/${item.id}-before.webp`}
                    alt={i === active && before ? `${item.head} ${item.accent} до ремонта` : ""}
                    width="1920"
                    height="1080"
                    decoding="async"
                    draggable="false"
                    className="case-before absolute inset-0 h-full w-full transition-[clip-path] duration-[900ms] ease-[cubic-bezier(0.7,0,0.2,1)] will-change-[clip-path]"
                    style={{ clipPath: i === active && before ? "inset(0 0 0 0)" : "inset(0 100% 0 0)" }}
                  />
                </div>
              </div>
            ))}

            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.5),transparent_22%,transparent_78%,rgba(0,0,0,0.55))]" />

            <div className="absolute left-4 top-4 flex rounded-full border border-bone/15 bg-black/55 p-1 text-[13px] backdrop-blur-md md:left-6 md:top-6">
              {[
                ["До", true],
                ["После", false],
              ].map(([label, value]) => (
                <button
                  key={label}
                  type="button"
                  aria-pressed={before === value}
                  onClick={() => setBefore(value)}
                  className="rounded-full px-4 py-1.5 text-stone transition-colors duration-300 hover:text-bone aria-pressed:bg-bone aria-pressed:text-ink"
                >
                  {label}
                </button>
              ))}
            </div>
            <p className="absolute bottom-4 left-4 text-[13px] text-bone/70 md:bottom-6 md:left-6">
              <span className="tabular-nums text-gold">{pad(active + 1)}</span>
              <span className="px-2 text-bone/30">/</span>
              {current.head} {current.accent}
            </p>
          </div>
        </div>

        <div className="case-reveal [grid-area:list] fit:mt-[clamp(1.5rem,4svh,2.5rem)]">
          <ol className="grid grid-cols-2 gap-x-4 gap-y-5 md:gap-x-5">
            {CASES.map((item, i) => (
              <li key={item.id}>
                <button
                  type="button"
                  aria-pressed={i === active}
                  onClick={() => choose(i)}
                  className="group block w-full text-left"
                >
                  <span className="relative block aspect-video overflow-hidden bg-ink">
                    <img
                      src={`/cases/${item.live ? "bmw-thumb" : item.id}.webp`}
                      alt=""
                      loading="lazy"
                      decoding="async"
                      draggable="false"
                      className={`h-full w-full object-cover transition-[opacity,transform] duration-700 ease-out group-hover:scale-[1.04] ${
                        i === active ? "opacity-100" : "opacity-60 group-hover:opacity-90"
                      }`}
                    />
                    <span
                      className={`pointer-events-none absolute inset-0 border transition-colors duration-500 ${
                        i === active ? "border-gold/80" : "border-bone/10"
                      }`}
                    />
                  </span>
                  <span
                    className={`mt-3 block truncate text-[15px] font-medium tracking-[-0.02em] transition-colors duration-300 md:text-[1.05rem] ${
                      i === active ? "text-bone" : "text-stone group-hover:text-bone/80"
                    }`}
                  >
                    <span className="mr-2 text-[12px] tabular-nums text-gold/80">{pad(i + 1)}</span>
                    {item.head} <em className="font-serif font-normal text-gold/90">{item.accent}</em>
                  </span>
                </button>
              </li>
            ))}
          </ol>

          <dl key={current.id} className="case-details mt-8 grid grid-cols-[minmax(0,1fr)_auto] gap-x-8 gap-y-4 text-[15px] leading-[1.5] fit:mt-[clamp(1.25rem,3.5svh,2.25rem)]">
            <div>
              <dt className="text-[12px] uppercase tracking-[0.18em] text-stone">Повреждение</dt>
              <dd className="mt-1.5 text-bone">{current.damage}</dd>
            </div>
            <div>
              <dt className="text-[12px] uppercase tracking-[0.18em] text-stone">Срок</dt>
              <dd className="mt-1.5 tabular-nums text-gold">{current.term}</dd>
            </div>
            <div className="col-span-2">
              <dt className="text-[12px] uppercase tracking-[0.18em] text-stone">Что сделали</dt>
              <dd className="mt-1.5 text-bone">{current.work}</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
