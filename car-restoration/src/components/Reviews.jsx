import { useEffect, useState } from "react";
import { useReveal } from "../hooks/useReveal.js";

const FIGURES = [
  { value: "14", suffix: "", label: "лет в металле", fill: 0.7, scale: ["0", "20"] },
  { value: "1 860", suffix: "", label: "машин вернули", fill: 0.93, scale: ["0", "2 000"] },
  { value: "98", suffix: "%", label: "приезжают снова", fill: 0.98, scale: ["0", "100"] },
];

const ARC = "M 18 100 A 82 82 0 0 1 182 100";
const TICKS = Array.from({ length: 21 }, (_, i) => {
  const angle = Math.PI - (i / 20) * Math.PI;
  const outer = 76;
  const inner = i % 5 ? 70 : 64;
  return {
    major: i % 5 === 0,
    x1: 100 + Math.cos(angle) * inner,
    y1: 100 - Math.sin(angle) * inner,
    x2: 100 + Math.cos(angle) * outer,
    y2: 100 - Math.sin(angle) * outer,
  };
});

function Gauge({ item, on, delay }) {
  const fill = on ? item.fill : 0;
  const motion = { transitionDelay: `${delay}ms` };

  return (
    <div className="relative mx-auto w-full max-w-[14rem]">
      <svg viewBox="0 0 200 118" className="block w-full overflow-visible" aria-hidden="true">
        <path d={ARC} fill="none" strokeWidth="10" className="stroke-bone/[0.06]" />
        <path d={ARC} fill="none" strokeWidth="1" className="stroke-bone/15" />
        {TICKS.map(({ major, ...line }, i) => (
          <line
            key={i}
            {...line}
            strokeWidth={major ? 1.4 : 1}
            className={`transition-[stroke] duration-500 ${
              on && i / 20 <= item.fill ? (major ? "stroke-gold" : "stroke-gold/55") : "stroke-bone/20"
            }`}
            style={{ transitionDelay: `${delay + (i / 20) * 2000}ms` }}
          />
        ))}
        <path
          d={ARC}
          fill="none"
          strokeWidth="2.5"
          strokeLinecap="round"
          pathLength="1"
          strokeDasharray="1"
          strokeDashoffset={1 - fill}
          className="gauge-arc stroke-gold"
          style={motion}
        />
        <g className="gauge-needle" style={{ ...motion, transform: `rotate(${-90 + fill * 180}deg)` }}>
          <line x1="100" y1="48" x2="100" y2="12" strokeWidth="1.5" strokeLinecap="round" className="stroke-bone" />
          <circle cx="100" cy="100" r="4.5" className="fill-bone" />
          <circle cx="100" cy="100" r="2" className="fill-gold" />
        </g>
        <text x="18" y="116" textAnchor="middle" className="fill-stone text-[8px]">
          {item.scale[0]}
        </text>
        <text x="182" y="116" textAnchor="middle" className="fill-stone text-[8px]">
          {item.scale[1]}
        </text>
      </svg>
      <p
        className="display absolute inset-x-0 bottom-[1.85rem] whitespace-nowrap text-center text-[clamp(1.45rem,min(2.4vw,4.2svh),2.35rem)] leading-[1.3] tabular-nums text-bone"
        aria-label={`${item.value}${item.suffix}`}
      >
        <span aria-hidden="true">
          <Odometer value={item.value} on={on} delay={delay} />
          {item.suffix && <span className="text-gold">{item.suffix}</span>}
        </span>
      </p>
    </div>
  );
}

const REVIEWS = [
  {
    id: "bmw",
    name: "Алексей М.",
    head: "BMW 5",
    accent: "серии",
    mileage: "041200",
    text: "На мойке искал, где был удар. Зазоры ровные, лак без шагрени — чище, чем до аварии.",
  },
  {
    id: "audi",
    name: "Марина К.",
    head: "Audi RS 6",
    accent: "Avant",
    mileage: "027800",
    text: "Один мастер от дефектовки до выдачи. Срок назвали сразу и уложились день в день.",
  },
  {
    id: "mercedes",
    name: "Игорь С.",
    head: "Mercedes",
    accent: "S-класс",
    mileage: "063500",
    text: "Задняя панель была смята в гармошку. Теперь зазоры как с завода, а стыка краски не видно даже на солнце.",
  },
  {
    id: "rangerover",
    name: "Дмитрий Р.",
    head: "Range",
    accent: "Rover",
    mileage: "018900",
    text: "Протёр весь борт об отбойник. Забрал машину через двенадцать дней — как будто этого не было.",
  },
];

const DRUM = Array.from({ length: 20 }, (_, i) => i % 10);

function Odometer({ value, on, cell = false, delay = 0 }) {
  return [...value].map((char, i) =>
    /\d/.test(char) ? (
      <span key={i} className={`drum ${cell ? "drum-cell" : ""}`}>
        <span
          style={{
            transform: `translateY(calc(var(--drum-h) * ${-(on ? 10 + Number(char) : 0)}))`,
            transitionDelay: `${delay + i * 90}ms`,
          }}
        >
          {DRUM.map((digit, n) => (
            <span key={n}>{digit}</span>
          ))}
        </span>
      </span>
    ) : (
      <span key={i}>{char}</span>
    ),
  );
}

export default function Reviews() {
  const ref = useReveal({ start: "top 75%" });
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [visible, setVisible] = useState(false);
  const [rolled, setRolled] = useState(false);
  const review = REVIEWS[active];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
        if (entry.isIntersecting) setRolled(true);
      },
      { threshold: 0.35 },
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref]);

  const next = () => setActive((i) => (i + 1) % REVIEWS.length);

  const followLight = (event) => {
    const box = event.currentTarget.getBoundingClientRect();
    const f = (event.clientX - box.left) / box.width;
    event.currentTarget.style.setProperty("--sheen", `${((1.5 - f) / 2) * 100}%`);
  };

  return (
    <section
      id="reviews"
      ref={ref}
      className="relative flex flex-col overflow-hidden bg-black px-5 py-28 md:px-14 lg:min-h-svh lg:justify-center lg:pb-[clamp(2rem,5svh,3.5rem)] lg:pt-[clamp(5rem,11svh,7rem)]"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <img
          src="/cases/bay.webp"
          alt=""
          className="absolute inset-0 h-full w-full scale-110 object-cover opacity-[0.48] blur-[1px] saturate-[0.7]"
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_75%_60%_at_50%_40%,rgba(0,0,0,0.25),rgba(0,0,0,0.72)_70%,#000_95%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.55),transparent_18%,transparent_82%,rgba(0,0,0,0.55))]" />
        <div className="absolute inset-x-0 top-0 h-[50%] bg-[radial-gradient(ellipse_55%_85%_at_50%_0%,rgba(217,176,122,0.18),transparent_72%)]" />
        <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black to-transparent" />
      </div>

      <h2 className="sr-only">Отзывы владельцев</h2>

      <div data-reveal className="relative mx-auto w-full max-w-[72rem]">
        <ul className="grid grid-cols-3 gap-3 border-b border-bone/15 pb-[clamp(0.85rem,2.4svh,1.5rem)] md:gap-10">
          {FIGURES.map((item, i) => (
            <li key={item.label} className="min-w-0 text-center">
              <Gauge item={item} on={rolled} delay={i * 180} />
              <p className="mt-2 text-[10px] uppercase tracking-[0.16em] text-stone md:mt-3 md:text-[12px] md:tracking-[0.18em]">
                {item.label}
              </p>
            </li>
          ))}
        </ul>
        <span
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 left-1/2 h-px w-28 -translate-x-1/2 bg-black/80"
        >
          <span className="text-gilded absolute left-1/2 top-0 -translate-x-1/2 -translate-y-[40%] font-serif text-[5.5rem] leading-none md:text-[7rem]">
            “
          </span>
        </span>
      </div>

      <div
        data-reveal
        className="relative mt-[clamp(0.75rem,2svh,1.25rem)] pt-[clamp(1.5rem,3.8svh,2.5rem)]"
        onPointerEnter={() => setPaused(true)}
        onPointerLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
      >
        <div className="mx-auto grid w-full max-w-[72rem] items-end gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(16rem,22rem)] lg:gap-16">
          <figure className="text-center lg:text-left">
            <p className="flex items-center justify-center gap-3 text-[11px] uppercase tracking-[0.2em] text-stone lg:justify-start">
              <span className="hidden sm:inline">Пробег после ремонта</span>
              <span className="sm:hidden">Пробег</span>
              <span
                className="flex gap-[3px] font-sans text-[15px] tabular-nums text-bone"
                aria-label={`${Number(review.mileage).toLocaleString("ru-RU")} км`}
              >
                <Odometer value={review.mileage} on={rolled} cell />
              </span>
              <span>км</span>
            </p>

            <div className="mt-6 grid lg:mt-7">
              {REVIEWS.map((item, i) => (
                <blockquote
                  key={i === active ? `${item.id}-on` : item.id}
                  aria-hidden={i !== active}
                  onPointerMove={i === active ? followLight : undefined}
                  onPointerLeave={
                    i === active ? (event) => event.currentTarget.style.removeProperty("--sheen") : undefined
                  }
                  className={`display col-start-1 row-start-1 text-[clamp(1.65rem,min(3.1vw,5.4svh),3.15rem)] leading-[1.18] ${
                    i === active ? "lacquer" : "invisible"
                  }`}
                >
                  {item.text}
                </blockquote>
              ))}
            </div>

            <figcaption key={review.id} className="case-details mt-5 text-[15px] lg:mt-6">
              <span className="font-medium text-bone">{review.name}</span>
              <span className="px-2 text-bone/25">/</span>
              <span className="whitespace-nowrap text-stone">
                Владелец {review.head} <em className="font-serif text-gold/90">{review.accent}</em>
              </span>
            </figcaption>
          </figure>

          <ol className="mx-auto flex w-full max-w-sm justify-center gap-3 border-t border-bone/15 pt-6 lg:mx-0 lg:max-w-none lg:flex-col lg:gap-0 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-10">
            {REVIEWS.map((item, i) => (
              <li key={item.id} className="relative lg:border-b lg:border-bone/15">
                <button
                  type="button"
                  aria-pressed={i === active}
                  aria-label={`Отзыв ${i + 1}: ${item.name}, ${item.head} ${item.accent}`}
                  onClick={() => setActive(i)}
                  className="group flex items-center gap-3 rounded-full lg:w-full lg:rounded-none lg:py-[clamp(0.7rem,1.8svh,1.05rem)] lg:text-left"
                >
                  <span className="relative grid h-12 w-12 shrink-0 place-items-center rounded-full lg:h-11 lg:w-11">
                    <svg viewBox="0 0 56 56" className="absolute inset-0 -rotate-90" aria-hidden="true">
                      <circle cx="28" cy="28" r="27" fill="none" strokeWidth="1" className="stroke-bone/15" />
                      {i === active && (
                        <circle
                          key={active}
                          cx="28"
                          cy="28"
                          r="27"
                          fill="none"
                          strokeWidth="1.5"
                          pathLength="1"
                          strokeDasharray="1"
                          className="review-ring stroke-gold"
                          style={{ animationPlayState: paused || !visible ? "paused" : "running" }}
                          onAnimationEnd={next}
                        />
                      )}
                    </svg>
                    <span
                      className={`font-serif text-[1.15rem] transition-colors duration-300 ${
                        i === active ? "text-gold" : "text-stone group-hover:text-bone"
                      }`}
                    >
                      {item.name[0]}
                    </span>
                  </span>
                  <span className="hidden min-w-0 flex-1 lg:block">
                    <span
                      className={`block truncate text-[15px] font-medium transition-colors duration-300 ${
                        i === active ? "text-bone" : "text-stone group-hover:text-bone/80"
                      }`}
                    >
                      {item.name}
                    </span>
                    <span className="mt-0.5 block truncate text-[13px] text-stone">
                      {item.head} <em className="font-serif text-gold/80">{item.accent}</em>
                    </span>
                  </span>
                </button>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
