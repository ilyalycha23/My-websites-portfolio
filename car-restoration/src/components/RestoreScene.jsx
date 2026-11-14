import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

const MOTES = Array.from({ length: 22 }, (_, i) => ({
  id: i,
  left: `${30 + ((i * 37) % 48)}%`,
  top: `${10 + ((i * 23) % 36)}%`,
  size: i % 5 === 0 ? 2.2 : 1.3,
}));

const DENTS = [
  { rotation: -8, yPercent: 8, xPercent: 4, skewX: 6 },
  { rotation: 5, yPercent: -7, xPercent: -2, skewX: -8 },
  { rotation: -3, yPercent: 11, xPercent: -6, skewX: 4 },
  { rotation: 9, yPercent: 2, xPercent: -9, skewX: -5 },
  { rotation: -6, yPercent: -9, xPercent: -13, skewX: 9 },
];

const INTRO_CAPTION = "Фронтальный удар. Крыло, бампер и оптика под замену.";

const STAGES = [
  { title: "Диагностика и дефектовка", frame: "stage1", caption: "Лазерный замер кузова. Каждая вмятина попадает в карту дефектов." },
  { title: "Геометрия кузова на стапеле", frame: "stage2", caption: "Стапель вытягивает силовую структуру до заводских точек." },
  { title: "Рихтовка и замена деталей", frame: "stage3", caption: "Новые детали в грунте. Зазоры выставлены по заводу." },
  { title: "Окраска в заводской цвет", frame: "stage4", caption: "Окраска в камере. Цвет подобран по коду кузова." },
  { title: "Полировка и оптика", frame: "restored", caption: "Через 18 дней. Металл, геометрия и цвет как с завода." },
];

const STEP = { start: 0.04, gap: 0.155, reveal: 0.11 };
const stepStart = (i) => STEP.start + i * STEP.gap;
const RUN_END = stepStart(STAGES.length - 1) + STEP.reveal;
const EXIT = { start: 0.78, end: 1 };
const EXIT_FRAMES = 170;
const HANDOVER_CAPTION = "Машина выдана владельцу. Следующая уже в цеху.";

function maskAt(t, focus) {
  const solid = -40 + t * 108;
  return `radial-gradient(ellipse ${34 + t * 120}% ${28 + t * 110}% at ${focus}, #000 0%, #000 ${solid}%, transparent ${solid + 34}%)`;
}

function setMask(el, value) {
  el.style.webkitMaskImage = value;
  el.style.maskImage = value;
}

const WIDE_MEDIA = "(min-aspect-ratio: 4/3)";

const FRAMES = {
  wide: { ratio: 16 / 9, light: { x: 0.35, y: 0.52 }, position: { x: 0.5, y: 0.68 } },
  square: { ratio: 1, light: { x: 0.33, y: 0.49 }, position: { x: 0.5, y: 0.56 } },
  phone: { ratio: 1, light: { x: 0.33, y: 0.49 }, position: { x: 0.28, y: 0.5 } },
};

function currentFrame() {
  if (window.matchMedia(WIDE_MEDIA).matches) return FRAMES.wide;
  return window.matchMedia("(min-width: 768px)").matches ? FRAMES.square : FRAMES.phone;
}

function focusOf(box) {
  const frame = currentFrame();
  const { width: w, height: h } = box.getBoundingClientRect();
  const scale = Math.max(w / frame.ratio, h);
  const iw = scale * frame.ratio;
  const ih = scale;
  const x = (w - iw) * frame.position.x + frame.light.x * iw;
  const y = (h - ih) * frame.position.y + frame.light.y * ih;
  return `${((x / w) * 100).toFixed(1)}% ${((y / h) * 100).toFixed(1)}%`;
}

function createFilm(canvas) {
  const context = canvas.getContext("2d");
  let set = null;
  let frames = [];
  let shown = -1;
  let wanted = 0;

  const load = () => {
    const next = window.matchMedia(WIDE_MEDIA).matches ? "wide" : "square";
    if (next === set) return;
    set = next;
    shown = -1;
    frames = Array.from({ length: EXIT_FRAMES }, () => null);
    let cursor = 0;
    const pump = () => {
      const i = cursor++;
      if (i >= EXIT_FRAMES || set !== next) return;
      const img = new Image();
      img.src = `/exit/${next}/${String(i).padStart(3, "0")}.webp`;
      img
        .decode()
        .then(() => {
          if (set !== next) return;
          frames[i] = img;
          if (shown !== wanted) draw(wanted);
        })
        .catch(() => {})
        .finally(pump);
    };
    for (let k = 0; k < 6; k++) pump();
  };

  const resize = () => {
    const ratio = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.round(canvas.clientWidth * ratio);
    canvas.height = Math.round(canvas.clientHeight * ratio);
    shown = -1;
    draw(wanted);
  };

  const draw = (index) => {
    wanted = index;
    let i = index;
    while (i > 0 && !frames[i]) i--;
    const img = frames[i];
    if (!img || i === shown || !canvas.width) return Boolean(img);
    const frame = currentFrame();
    const { width: w, height: h } = canvas;
    const scale = Math.max(w / img.naturalWidth, h / img.naturalHeight);
    const dw = img.naturalWidth * scale;
    const dh = img.naturalHeight * scale;
    context.drawImage(img, (w - dw) * frame.position.x, (h - dh) * frame.position.y, dw, dh);
    shown = i;
    return true;
  };

  return { load, resize, draw };
}

function Arrow({ className = "" }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className={className}>
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Plate({ state, ext = "jpg", onLoad }) {
  return (
    <picture>
      <source media={WIDE_MEDIA} srcSet={`/hero-wide-${state}.${ext}`} width="2560" height="1440" />
      <img
        src={`/hero-${state}.${ext}`}
        alt=""
        width="2000"
        height="2000"
        draggable="false"
        className="absolute inset-0 h-full w-full object-cover object-[28%_50%] md:object-[50%_56%] [@media(min-aspect-ratio:4/3)]:object-[50%_68%]"
        onLoad={onLoad}
      />
    </picture>
  );
}

export default function RestoreScene() {
  const rootRef = useRef(null);
  const veilRef = useRef(null);
  const shiftRef = useRef(null);
  const zoomRef = useRef(null);
  const layersRef = useRef([]);
  const washRef = useRef(null);
  const filmRef = useRef(null);
  const captionsRef = useRef(null);
  const countRef = useRef(null);
  const barRef = useRef(null);
  const stagesRef = useRef(null);
  const stageCountRef = useRef(null);

  useGSAP(
    () => {
      const motion = gsap.matchMedia();

      const setProgress = (p) => {
        const t = gsap.utils.clamp(0, 1, (p - STEP.start) / (RUN_END - STEP.start));
        if (countRef.current) countRef.current.textContent = String(Math.round(t * 100)).padStart(3, "0");
        if (barRef.current) barRef.current.style.transform = `scaleX(${t})`;
        const done = STAGES.filter((_, i) => p >= stepStart(i) + STEP.reveal * 0.5).length;
        const rows = stagesRef.current?.children;
        if (rows) STAGES.forEach((_, i) => (rows[i].dataset.done = String(i < done)));
        if (stageCountRef.current) stageCountRef.current.textContent = `${done} из ${STAGES.length}`;
        const captions = captionsRef.current?.children;
        const active = p >= EXIT.start ? STAGES.length + 1 : done;
        if (captions) Array.from(captions).forEach((caption, i) => (caption.dataset.active = String(i === active)));
      };

      motion.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(rootRef.current, { height: "100svh" });
        gsap.set([veilRef.current, washRef.current], { autoAlpha: 0 });
        layersRef.current.forEach((layer) => setMask(layer, "none"));
        setProgress(1);
      });

      motion.add("(prefers-reduced-motion: no-preference)", () => {
        if (window.scrollY < 48) {
          gsap.fromTo(veilRef.current, { autoAlpha: 1 }, { autoAlpha: 0, duration: 2, ease: "power2.inOut" });
          gsap.fromTo(zoomRef.current, { scale: 1.12 }, { scale: 1, duration: 3.2, ease: "expo.out" });
          gsap.fromTo(
            ".hero-word",
            { yPercent: 115 },
            { yPercent: 0, duration: 1.5, stagger: 0.12, ease: "expo.out", delay: 0.8 },
          );
          gsap.fromTo(
            ".hero-fade",
            { autoAlpha: 0, y: 16 },
            { autoAlpha: 1, y: 0, duration: 1.1, stagger: 0.1, ease: "power3.out", delay: 1.3 },
          );
        } else {
          gsap.set(veilRef.current, { autoAlpha: 0 });
        }

        gsap.utils.toArray(".mote").forEach((mote, i) => {
          const rise = gsap.timeline({ repeat: -1, delay: (i % 8) * 0.45 });
          rise.fromTo(mote, { y: 10, autoAlpha: 0 }, { y: -30, autoAlpha: i % 3 === 0 ? 0.8 : 0.35, duration: 1.8, ease: "none" });
          rise.to(mote, { y: -110 - (i % 4) * 18, duration: 5, ease: "none" });
          rise.to(mote, { y: "-=36", autoAlpha: 0, duration: 1.6, ease: "none" });
        });

        const shiftX = gsap.quickTo(shiftRef.current, "x", { duration: 1.4, ease: "power3.out" });
        const shiftY = gsap.quickTo(shiftRef.current, "y", { duration: 1.4, ease: "power3.out" });
        const onMove = (event) => {
          if (event.pointerType !== "mouse") return;
          shiftX((event.clientX / window.innerWidth - 0.5) * -22);
          shiftY((event.clientY / window.innerHeight - 0.5) * -14);
        };
        window.addEventListener("pointermove", onMove);

        const timeline = gsap.timeline({
          defaults: { ease: "none" },
          scrollTrigger: {
            trigger: rootRef.current,
            start: "top top",
            end: "bottom bottom",
            scrub: true,
            invalidateOnRefresh: true,
          },
          onUpdate: () => setProgress(timeline.progress()),
        });

        const layers = [...layersRef.current];
        const wash = washRef.current;
        const reveals = STAGES.map(() => ({ t: 0 }));
        let focus = focusOf(layers[0]);
        const paint = (i) => setMask(layers[i], maskAt(reveals[i].t, focus));
        const refocus = () => {
          focus = focusOf(layers[0]);
          wash.style.background = `radial-gradient(ellipse at ${focus}, rgba(255,214,160,0.2), transparent 40%)`;
          reveals.forEach((_, i) => paint(i));
        };
        refocus();
        setProgress(0);
        ScrollTrigger.addEventListener("refresh", refocus);

        timeline.to(shiftRef.current, { scale: 1.06, duration: 1 }, 0);

        const dents = gsap.utils.toArray(".dent");
        STAGES.forEach((_, i) => {
          const at = stepStart(i);
          timeline.to(reveals[i], { t: 1, duration: STEP.reveal, ease: "power1.inOut", onUpdate: () => paint(i) }, at);
          timeline.fromTo(washRef.current, { autoAlpha: 0 }, { autoAlpha: 0.9, duration: STEP.reveal * 0.45, ease: "sine.inOut" }, at);
          timeline.to(washRef.current, { autoAlpha: 0, duration: STEP.reveal * 0.55, ease: "sine.inOut" }, at + STEP.reveal * 0.45);
          if (dents[i]) {
            timeline.fromTo(
              dents[i],
              { ...DENTS[i], opacity: 0.55 },
              { rotation: 0, yPercent: 0, xPercent: 0, skewX: 0, opacity: 1, duration: STEP.reveal, ease: "power3.inOut", immediateRender: true },
              at,
            );
          }
        });
        const canvas = filmRef.current;
        const film = createFilm(canvas);
        const reel = { frame: 0 };
        const show = () => {
          const rolling = timeline.progress() >= EXIT.start;
          const drawn = rolling && film.draw(Math.round(reel.frame));
          canvas.style.visibility = drawn ? "visible" : "hidden";
        };
        const reload = () => {
          film.load();
          film.resize();
          show();
        };
        const startLoading = () => reload();
        if (document.readyState === "complete") startLoading();
        else window.addEventListener("load", startLoading, { once: true });
        ScrollTrigger.addEventListener("refresh", reload);

        timeline.fromTo(
          reel,
          { frame: 0 },
          { frame: EXIT_FRAMES - 1, duration: EXIT.end - EXIT.start, onUpdate: show, immediateRender: false },
          EXIT.start,
        );
        timeline.call(show, null, EXIT.start - 0.001);

        return () => {
          window.removeEventListener("pointermove", onMove);
          window.removeEventListener("load", startLoading);
          ScrollTrigger.removeEventListener("refresh", refocus);
          ScrollTrigger.removeEventListener("refresh", reload);
        };
      });

      return () => motion.revert();
    },
    { scope: rootRef },
  );

  return (
    <section ref={rootRef} id="top" className="relative h-[760vh] bg-black">
      <div className="sticky top-0 h-svh overflow-hidden">
        <div ref={shiftRef} className="absolute -inset-[4%]">
          <div ref={zoomRef} className="absolute inset-0 origin-center will-change-transform">
            <Plate state="damaged" onLoad={() => ScrollTrigger.refresh()} />
            {STAGES.map((stage, i) => (
              <div
                key={stage.frame}
                ref={(el) => (layersRef.current[i] = el)}
                className="absolute inset-0"
                style={{
                  WebkitMaskImage: "linear-gradient(transparent, transparent)",
                  maskImage: "linear-gradient(transparent, transparent)",
                }}
              >
                <Plate state={stage.frame} />
              </div>
            ))}
            <canvas ref={filmRef} aria-hidden="true" className="invisible absolute inset-0 h-full w-full" />
          </div>
        </div>

        <div
          ref={washRef}
          className="pointer-events-none absolute inset-0 opacity-0 mix-blend-screen"
        />

        {MOTES.map((mote) => (
          <span
            key={mote.id}
            className="mote pointer-events-none"
            style={{ left: mote.left, top: mote.top, width: mote.size, height: mote.size }}
          />
        ))}

        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 120% 90% at 50% 45%, transparent 55%, rgba(0,0,0,0.55) 100%), linear-gradient(to top, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.45) 28%, transparent 52%), linear-gradient(to bottom, rgba(0,0,0,0.55), transparent 22%)",
          }}
        />
        <div className="grain pointer-events-none absolute inset-0" />

        <div className="hero-fade absolute left-5 top-20 z-20 w-52 md:left-14 md:top-28 md:w-64">
          <div className="flex items-baseline justify-between text-[13px] text-stone">
            <span>BMW 5 серии, кейс 014</span>
            <span className="tabular-nums text-gold">
              <span ref={countRef}>000</span>%
            </span>
          </div>
          <div className="mt-3 h-px bg-stone/20">
            <div ref={barRef} className="h-px origin-left scale-x-0 bg-gradient-to-r from-gold/40 to-gold shadow-[0_0_10px_rgba(217,176,122,0.7)]" />
          </div>
          <div ref={captionsRef} className="relative mt-3 grid text-[13px] leading-[1.55] text-stone">
            {[INTRO_CAPTION, ...STAGES.map((stage) => stage.caption), HANDOVER_CAPTION].map((caption, i) => (
              <p key={caption} data-active={String(i === 0)} className="stage-caption col-start-1 row-start-1">
                {caption}
              </p>
            ))}
          </div>
        </div>

        <div className="absolute inset-x-5 bottom-6 z-20 md:inset-x-14 md:bottom-12">
          <h1
            aria-label="Как будто удара не было"
            className="font-sans text-[3.1rem] font-medium leading-[0.95] tracking-[-0.055em] text-bone md:text-[clamp(3.5rem,min(6.8vw,9.5svh),7.25rem)]"
          >
            <span aria-hidden="true" className="-mt-[0.15em] block overflow-hidden pb-[0.04em] pt-[0.15em]">
              <span className="hero-word block">Как будто</span>
            </span>
            <span aria-hidden="true" className="-mb-[0.14em] -mt-[0.2em] block overflow-hidden pb-[0.3em] pt-[0.2em]">
              <span className="hero-word block whitespace-nowrap">
                {DENTS.map((dent, i) => (
                  <span key={i} className="dent inline-block will-change-transform">
                    {"удара"[i]}
                  </span>
                ))}{" "}
                <em className="text-gilded font-serif font-normal tracking-[-0.035em]">не было</em>
              </span>
            </span>
          </h1>

          <p className="hero-fade mt-5 max-w-[27rem] text-[15px] leading-[1.6] text-stone md:mt-6 md:text-base">
            Восстанавливаем автомобили после ДТП{" "}
            <span className="text-bone">до заводского состояния</span>: кузов, геометрия, окраска и оптика в одном цехе.
          </p>

          <div className="mt-6 md:mt-8">
            <div className="hero-fade flex items-center gap-2.5 text-[15px]">
              <a
                href="#contact"
                className="group inline-flex items-center gap-4 rounded-full bg-bone py-1.5 pl-6 pr-1.5 font-medium text-ink transition-colors duration-300 hover:bg-white"
              >
                Записаться на осмотр
                <span className="grid h-9 w-9 place-items-center rounded-full bg-ink text-bone transition-transform duration-500 ease-out group-hover:-rotate-45">
                  <Arrow className="h-4 w-4" />
                </span>
              </a>
              <a
                href="#cases"
                className="hidden rounded-full border border-bone/20 bg-white/[0.04] px-5 py-[0.8rem] text-bone backdrop-blur-md transition-colors duration-300 hover:border-bone/50 sm:inline-flex"
              >
                Работы
              </a>
            </div>
          </div>

          <div className="hero-fade absolute bottom-0 right-0 hidden w-[19rem] md:block lg:w-[21rem]">
            <div className="flex items-baseline justify-between pb-3 text-[13px] text-stone">
              <span>Этапы восстановления</span>
              <span ref={stageCountRef} className="tabular-nums text-gold">
                0 из {STAGES.length}
              </span>
            </div>
            <ol ref={stagesRef} className="border-t border-stone/20">
              {STAGES.map((stage) => (
                <li
                  key={stage.title}
                  data-done="false"
                  className="stage-row flex items-center gap-3.5 border-b border-stone/15 py-3 text-[14px] lg:text-[15px]"
                >
                  <span className="stage-mark grid h-[18px] w-[18px] shrink-0 place-items-center rounded-full border">
                    <svg viewBox="0 0 12 12" fill="none" aria-hidden="true" className="h-2.5 w-2.5 text-ink">
                      <path d="M2.5 6.2l2.2 2.2 4.8-4.8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  {stage.title}
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div ref={veilRef} className="pointer-events-none absolute inset-0 z-30 bg-black" />
        <p className="sr-only">Прокрутите страницу: повреждённый BMW в ночном зале сменяется восстановленным.</p>
      </div>
    </section>
  );
}
