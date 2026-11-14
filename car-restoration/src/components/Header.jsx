import { useEffect, useState } from "react";
import Logo from "./Logo.jsx";

const LINKS = [
  { href: "#services", label: "Услуги" },
  { href: "#cases", label: "Кейс" },
  { href: "#reviews", label: "Отзывы" },
  { href: "#contact", label: "Запись" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const hero = document.getElementById("top");
      const end = hero ? hero.offsetHeight - window.innerHeight * 0.15 : window.innerHeight * 0.85;
      setSolid(window.scrollY > end);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const close = () => setOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        solid || open ? "border-bone/10 bg-ink/90 backdrop-blur-md" : "border-transparent bg-transparent"
      }`}
    >
      <div className="grid h-16 grid-cols-[1fr_auto] items-center px-5 md:h-[4.25rem] md:grid-cols-[1fr_auto_1fr] md:px-10">
        <a href="#top" onClick={close} aria-label="NOIR, наверх" className="justify-self-start">
          <Logo />
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Основная">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[14px] text-stone transition hover:text-bone"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center justify-self-end gap-6">
          <a
            href="tel:+70000000000"
            className="hidden text-[14px] tabular-nums text-bone transition hover:text-gold lg:block"
          >
            +7 000 000 00 00
          </a>
          <button
            type="button"
            className="grid h-10 w-10 place-items-center md:hidden"
            aria-expanded={open}
            aria-label={open ? "Закрыть меню" : "Открыть меню"}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="relative block h-3 w-5">
              <span className={`absolute left-0 h-px w-5 bg-bone transition ${open ? "top-1.5 rotate-45" : "top-0"}`} />
              <span className={`absolute left-0 top-1.5 h-px w-5 bg-bone transition ${open ? "opacity-0" : ""}`} />
              <span className={`absolute left-0 h-px w-5 bg-bone transition ${open ? "top-1.5 -rotate-45" : "top-3"}`} />
            </span>
          </button>
        </div>
      </div>

      {open && (
        <nav className="flex min-h-[calc(100svh-4rem)] flex-col justify-between bg-ink px-5 pb-10 md:hidden" aria-label="Мобильная">
          <div className="flex flex-col">
            {LINKS.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                onClick={close}
                className="flex items-baseline justify-between border-t border-bone/15 py-4"
              >
                <span className="display text-5xl">{link.label}</span>
                <span className="font-sans text-xs not-italic tracking-[0.16em] text-bone/40">0{index + 1}</span>
              </a>
            ))}
          </div>
          <a href="#contact" onClick={close} className="btn w-fit">
            Записаться на осмотр
          </a>
        </nav>
      )}
    </header>
  );
}
