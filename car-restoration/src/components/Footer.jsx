import Logo from "./Logo.jsx";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-bone/10">
      <div className="relative mx-auto flex max-w-[92rem] items-center gap-4 px-5 py-1.5 md:gap-6 md:px-14 md:py-2">
        <div className="relative z-10 shrink-0 scale-[1.15] origin-left">
          <Logo />
        </div>

        <p className="relative z-10 ml-auto mr-[min(6vw,3.5rem)] shrink-0 px-2 text-[10px] uppercase tracking-[0.2em] text-bone/35 sm:text-[11px] md:mr-6">
          © {year} · NOIR · Санкт-Петербург
        </p>

        <div className="footer-car relative -mr-6 w-[min(82vw,34rem)] shrink-0 sm:-mr-14 sm:w-[min(68vw,42rem)] md:-mr-20 md:w-[46rem]">
          <img
            src="/footer/rs7.webp"
            alt="Audi RS 7"
            className="block w-full select-none"
            draggable={false}
          />
          <a
            href="https://github.com/ilyalycha23"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-plate absolute left-[63.6%] top-[61.7%] flex h-[12.5%] w-[19.5%] items-center justify-center overflow-hidden rounded-[2px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
            aria-label="Made by ilyalycha — GitHub"
          >
            <span className="footer-plate-text">
              <span className="footer-plate-made">made by</span>{" "}
              <span className="footer-plate-name">ilyalycha</span>
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
