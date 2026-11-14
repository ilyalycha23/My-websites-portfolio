import { useMemo, useState } from "react";
import { useReveal } from "../hooks/useReveal.js";

const INITIAL = { name: "", phone: "", car: "", note: "" };

const ZONES = [
  { id: "front", label: "Передний бампер", cx: 150, cy: 36, d: "M116 22 C136 14 164 14 184 22 L196 46 C174 54 126 54 104 46 Z" },
  { id: "hood", label: "Капот", cx: 150, cy: 78, d: "M112 48 H188 L196 112 H104 Z" },
  { id: "fender-l", label: "Крыло Л", cx: 100, cy: 88, d: "M88 56 C92 50 108 48 114 50 L108 118 C100 122 90 124 84 118 C80 96 82 72 88 56 Z" },
  { id: "fender-r", label: "Крыло П", cx: 200, cy: 88, d: "M186 50 C192 48 208 50 212 56 C218 72 220 96 216 118 C210 124 200 122 192 118 Z" },
  { id: "door-l", label: "Дверь Л", cx: 100, cy: 198, d: "M90 148 C98 142 112 144 116 148 L112 250 C106 256 96 256 90 250 C84 220 84 176 90 148 Z" },
  { id: "door-r", label: "Дверь П", cx: 200, cy: 198, d: "M184 148 C188 144 202 142 210 148 C216 176 216 220 210 250 C204 256 194 256 188 250 Z" },
  { id: "roof", label: "Крыша", cx: 150, cy: 198, d: "M118 150 H182 L186 250 H114 Z" },
  { id: "quarter-l", label: "Заднее крыло Л", cx: 102, cy: 298, d: "M92 268 C100 262 114 264 118 268 L122 328 C114 338 100 340 92 332 C86 308 86 284 92 268 Z" },
  { id: "quarter-r", label: "Заднее крыло П", cx: 198, cy: 298, d: "M182 268 C186 264 200 262 208 268 C214 284 214 308 208 332 C200 340 186 338 178 328 Z" },
  { id: "trunk", label: "Багажник", cx: 150, cy: 308, d: "M118 274 H182 L178 342 H122 Z" },
  { id: "rear", label: "Задний бампер", cx: 150, cy: 356, d: "M122 344 H178 L172 368 C160 376 140 376 128 368 Z" },
];

function validate(form, zones) {
  const errors = {};
  if (form.name.trim().length < 2) errors.name = "Как к вам обращаться?";
  if (form.phone.replace(/\D/g, "").length < 10) errors.phone = "Нужен полный номер";
  if (form.car.trim().length < 2) errors.car = "Марка и модель";
  if (!zones.length && form.note.trim().length < 8) errors.zones = "Отметьте зону или опишите удар";
  return errors;
}

function formatPhone(value) {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  const local = digits.startsWith("8") ? `7${digits.slice(1)}` : digits.startsWith("7") ? digits : digits ? `7${digits}` : "";
  const d = local.slice(0, 11);
  if (!d) return value.startsWith("+") ? "+" : "";
  let out = `+${d[0]}`;
  if (d.length > 1) out += ` ${d.slice(1, 4)}`;
  if (d.length > 4) out += ` ${d.slice(4, 7)}`;
  if (d.length > 7) out += `-${d.slice(7, 9)}`;
  if (d.length > 9) out += `-${d.slice(9, 11)}`;
  return out;
}

function ticketNo() {
  const n = 40 + Math.floor(Math.random() * 50);
  return String(n).padStart(3, "0");
}

function BodyMap({ selected, onToggle }) {
  return (
    <div className="body-map relative mx-auto w-full max-w-[22rem] lg:max-w-[26rem]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[12%] h-[76%] w-[70%] -translate-x-1/2 rounded-[42%] bg-[radial-gradient(ellipse_at_center,rgba(217,176,122,0.18),transparent_70%)] blur-2xl"
      />

      <img
        src="/contact/body-map.webp"
        alt=""
        draggable={false}
        className="pointer-events-none relative z-0 block w-full select-none brightness-110 contrast-125 saturate-125"
      />

      <svg
        viewBox="0 0 300 400"
        className="absolute inset-0 z-10 h-full w-full"
        role="group"
        aria-label="Карта повреждений кузова"
      >
        {ZONES.map((zone) => {
          const on = selected.includes(zone.id);
          return (
            <path
              key={zone.id}
              d={zone.d}
              tabIndex={0}
              role="button"
              aria-pressed={on}
              aria-label={zone.label}
              className={`body-zone ${on ? "is-on" : ""}`}
              onClick={() => onToggle(zone.id)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  onToggle(zone.id);
                }
              }}
            />
          );
        })}
        {selected.map((id) => {
          const zone = ZONES.find((item) => item.id === id);
          if (!zone) return null;
          const { cx: x, cy: y } = zone;
          return (
            <g key={`mark-${id}`} className="body-mark" pointerEvents="none">
              <circle cx={x} cy={y} r="8" className="fill-gold/20 stroke-gold" strokeWidth="1.2" />
              <path
                d={`M${x - 3} ${y - 3} L${x + 3} ${y + 3} M${x + 3} ${y - 3} L${x - 3} ${y + 3}`}
                className="stroke-gold"
                strokeWidth="1.4"
              />
            </g>
          );
        })}
      </svg>
    </div>
  );
}

export default function Contact() {
  const ref = useReveal({ stagger: 0.1, start: "top 75%" });
  const [form, setForm] = useState(INITIAL);
  const [zones, setZones] = useState([]);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);
  const [ticket, setTicket] = useState("047");
  const [noteOpen, setNoteOpen] = useState(false);

  const damageLine = useMemo(
    () => zones.map((id) => ZONES.find((zone) => zone.id === id)?.label).filter(Boolean).join(" · "),
    [zones],
  );

  const onChange = (event) => {
    const { name, value } = event.target;
    const next = name === "phone" ? formatPhone(value) : value;
    setForm((current) => ({ ...current, [name]: next }));
    setErrors((current) => ({ ...current, [name]: undefined, zones: undefined }));
  };

  const toggleZone = (id) => {
    setZones((current) => (current.includes(id) ? current.filter((item) => item !== id) : [...current, id]));
    setErrors((current) => ({ ...current, zones: undefined }));
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const next = validate(form, zones);
    setErrors(next);
    if (Object.keys(next).length) return;
    setTicket(ticketNo());
    setSent(true);
  };

  const reset = () => {
    setSent(false);
    setForm(INITIAL);
    setZones([]);
    setErrors({});
    setNoteOpen(false);
  };

  const fieldClass =
    "mt-1.5 w-full border-0 border-b border-bone/20 bg-transparent px-0 py-2.5 text-[0.95rem] outline-none transition placeholder:text-bone/28 focus:border-gold";

  return (
    <section
      id="contact"
      ref={ref}
      className="relative flex scroll-mt-20 flex-col overflow-hidden bg-black px-5 py-20 md:px-14 lg:min-h-svh lg:justify-center lg:py-[clamp(4.5rem,8svh,6rem)]"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <img
          src="/contact/atmosphere.jpg"
          alt=""
          className="absolute inset-0 h-full w-full scale-110 object-cover opacity-[0.62] saturate-[1.05]"
        />
        <div className="contact-sheen absolute inset-0" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_78%_68%_at_48%_42%,rgba(0,0,0,0.1),rgba(0,0,0,0.62)_70%,#000_96%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.42),transparent_24%,transparent_76%,rgba(0,0,0,0.45))]" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black to-transparent" />
        <div className="grain absolute inset-0 opacity-[0.035]" />
      </div>

      <div className="relative mx-auto w-full max-w-[72rem]">
        <header data-reveal className="max-w-none">
          <p className="text-[11px] uppercase tracking-[0.28em] text-gold/85">Запись на осмотр</p>
          <h2
            aria-label="Отметьте, куда прилетело"
            className="display mt-3 whitespace-nowrap text-[clamp(1.55rem,4.2vw,3.6rem)]"
          >
            Отметьте, куда{" "}
            <em className="text-gilded font-serif font-normal tracking-[-0.035em]">прилетело</em>
          </h2>
        </header>

        <div className="mt-8 grid items-center gap-10 lg:mt-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-14 xl:gap-20">
          <div data-reveal className="relative">
            <BodyMap selected={zones} onToggle={toggleZone} />
            <div className="mt-2 flex min-h-8 flex-wrap items-center justify-center gap-2 lg:justify-start lg:pl-2">
              {zones.length === 0 ? (
                <p className="text-[11px] uppercase tracking-[0.18em] text-bone/30">Нажмите на зону удара</p>
              ) : (
                zones.map((id) => {
                  const zone = ZONES.find((item) => item.id === id);
                  return (
                    <button
                      key={id}
                      type="button"
                      onClick={() => toggleZone(id)}
                      className="border border-gold/40 bg-gold/[0.08] px-3 py-1.5 text-[10px] uppercase tracking-[0.14em] text-gold backdrop-blur-sm transition hover:border-gold/80 hover:bg-gold/15"
                    >
                      {zone?.label} ×
                    </button>
                  );
                })
              )}
            </div>
            {errors.zones && (
              <p role="alert" className="mt-2 text-sm text-champagne lg:pl-2">
                {errors.zones}
              </p>
            )}
          </div>

          <div data-reveal>
            {sent ? (
              <div
                role="status"
                className="intake-plate relative overflow-hidden px-6 py-8 md:px-8 md:py-10"
              >
                <div aria-hidden="true" className="stamp-seal absolute right-5 top-5 md:right-7 md:top-7">
                  <span>NOIR</span>
                  <span>принято</span>
                </div>
                <p className="text-[11px] uppercase tracking-[0.22em] text-gold">Наряд-заказ</p>
                <p className="display mt-3 text-[clamp(2.6rem,6vw,4.2rem)] tabular-nums tracking-tight">№ {ticket}</p>
                <p className="mt-4 max-w-md text-bone/65">
                  {form.name.trim()}, наберём {form.phone.trim()} в течение часа, пока цех открыт.
                </p>
                {(damageLine || form.note.trim()) && (
                  <p className="mt-3 max-w-md text-sm text-bone/40">
                    {damageLine}
                    {damageLine && form.note.trim() ? " · " : ""}
                    {form.note.trim()}
                  </p>
                )}
                <button type="button" className="btn mt-8" onClick={reset}>
                  Ещё одна
                  <span aria-hidden="true">→</span>
                </button>
              </div>
            ) : (
              <form className="intake-plate px-5 py-6 md:px-8 md:py-8" onSubmit={onSubmit} noValidate>
                <div className="border-b border-bone/10 pb-5">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-gold/80">Ближайшее окно</p>
                  <p className="display mt-2 text-[1.7rem] leading-tight md:text-[1.9rem]">
                    Сегодня
                    <span className="text-gold"> · после 16:00</span>
                  </p>
                </div>

                <div className="mt-6 grid gap-5 sm:grid-cols-2">
                  <label className="block min-w-0 sm:col-span-1">
                    <span className="text-[10px] uppercase tracking-[0.16em] text-bone/40">Имя</span>
                    <input
                      name="name"
                      autoComplete="name"
                      placeholder="Алексей"
                      value={form.name}
                      onChange={onChange}
                      maxLength={80}
                      aria-invalid={Boolean(errors.name)}
                      className={fieldClass}
                    />
                    {errors.name && (
                      <span role="alert" className="mt-1.5 block text-xs text-champagne">
                        {errors.name}
                      </span>
                    )}
                  </label>
                  <label className="block min-w-0">
                    <span className="text-[10px] uppercase tracking-[0.16em] text-bone/40">Телефон</span>
                    <input
                      name="phone"
                      type="tel"
                      inputMode="tel"
                      autoComplete="tel"
                      placeholder="+7 000 000 00 00"
                      value={form.phone}
                      onChange={onChange}
                      maxLength={18}
                      aria-invalid={Boolean(errors.phone)}
                      className={fieldClass}
                    />
                    {errors.phone && (
                      <span role="alert" className="mt-1.5 block text-xs text-champagne">
                        {errors.phone}
                      </span>
                    )}
                  </label>
                  <label className="block min-w-0 sm:col-span-2">
                    <span className="text-[10px] uppercase tracking-[0.16em] text-bone/40">Машина</span>
                    <input
                      name="car"
                      autoComplete="off"
                      placeholder="BMW 5 серии"
                      value={form.car}
                      onChange={onChange}
                      maxLength={80}
                      aria-invalid={Boolean(errors.car)}
                      className={fieldClass}
                    />
                    {errors.car && (
                      <span role="alert" className="mt-1.5 block text-xs text-champagne">
                        {errors.car}
                      </span>
                    )}
                  </label>
                </div>

                <div className="mt-5">
                  <button
                    type="button"
                    className="w-fit text-left text-[11px] uppercase tracking-[0.14em] text-bone/40 transition hover:text-gold"
                    onClick={() => setNoteOpen((open) => !open)}
                    aria-expanded={noteOpen}
                  >
                    {noteOpen ? "− Скрыть детали" : "+ Детали удара"}
                  </button>
                  {noteOpen && (
                    <label className="mt-3 block">
                      <span className="sr-only">Детали удара</span>
                      <textarea
                        name="note"
                        rows={2}
                        value={form.note}
                        onChange={onChange}
                        maxLength={400}
                        placeholder={
                          damageLine ? "Смещение, скол, нужна геометрия…" : "Если зона неочевидна — опишите словами"
                        }
                        className={`${fieldClass} resize-none`}
                      />
                    </label>
                  )}
                </div>

                <div className="mt-7 flex flex-col gap-4 border-t border-bone/10 pt-6 sm:flex-row sm:items-end sm:justify-between">
                  <div className="space-y-1.5 text-sm text-bone/45">
                    <p className="display text-lg leading-snug text-bone/80 md:text-xl">
                      Санкт-Петербург
                    </p>
                    <p className="text-bone/55">ул. Пушкина · дом Калатушкина</p>
                    <p className="tabular-nums">Пн–Вс · 09:00–21:00</p>
                    <a href="tel:+70000000000" className="inline-block text-bone transition hover:text-gold">
                      +7 000 000 00 00
                    </a>
                  </div>
                  <button type="submit" className="btn w-full sm:w-auto">
                    Записаться
                    <span aria-hidden="true">→</span>
                  </button>
                </div>

                <p className="mt-4 text-[11px] text-bone/30">
                  Осмотр бесплатно · нажимая, вы соглашаетесь на звонок
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
