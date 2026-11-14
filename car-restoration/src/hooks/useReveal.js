import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export function useReveal(options = {}) {
  const ref = useRef(null);

  useGSAP(
    () => {
      const nodes = ref.current?.querySelectorAll("[data-reveal]");
      if (!nodes?.length) return undefined;

      const motion = gsap.matchMedia();
      motion.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(
          nodes,
          { autoAlpha: 0, y: 42 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 1,
            stagger: options.stagger ?? 0.1,
            ease: "power3.out",
            clearProps: "transform",
            scrollTrigger: {
              trigger: ref.current,
              start: options.start ?? "top 80%",
              once: true,
            },
          },
        );
      });

      return () => motion.revert();
    },
    { scope: ref },
  );

  return ref;
}
