import { useId } from "react";

export function LogoMark({ className = "" }) {
  const gradient = useId();

  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" className={`logo-mark ${className}`}>
      <defs>
        <linearGradient id={gradient} x1="7" y1="5" x2="25" y2="27" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#f6e2bd" />
          <stop offset="0.55" stopColor="#d9b07a" />
          <stop offset="1" stopColor="#9d7446" />
        </linearGradient>
      </defs>
      <path className="logo-stem" d="M7 27 L7 19.5 L10 16.5 L4.8 12.6 L7 9.6 L7 5" strokeWidth="2.8" strokeLinejoin="miter" />
      <path d="M7 5 L25 27" stroke={`url(#${gradient})`} strokeWidth="2.8" strokeLinecap="square" />
      <path d="M25 27 L25 5" stroke="#f3f0e8" strokeWidth="2.8" strokeLinecap="square" />
    </svg>
  );
}

export default function Logo({ className = "" }) {
  return (
    <span className={`logo group inline-flex items-center gap-3 ${className}`}>
      <LogoMark className="h-7 w-7 shrink-0" />
      <span className="flex flex-col whitespace-nowrap leading-none">
        <span className="text-[13px] font-medium tracking-[0.42em] text-bone">NOIR</span>
        <span className="mt-1.5 text-[10px] tracking-[0.06em] text-stone">Кузовное ателье</span>
      </span>
    </span>
  );
}
