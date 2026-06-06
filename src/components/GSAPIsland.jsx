import { useRef } from "react";
import { gsap, ScrollTrigger, useGSAP } from "../lib/gsap.js";

export default function GSAPIsland({ selector = "[data-gsap-reveal]" }) {
  const scope = useRef(null);

  useGSAP(
    () => {
      const targets = gsap.utils.toArray(selector);
      if (!targets.length) return;

      targets.forEach((target) => {
        gsap.fromTo(
          target,
          { autoAlpha: 0.92, y: 18 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.72,
            ease: "power4.out",
            scrollTrigger: {
              trigger: target,
              start: "top 84%",
              once: true
            }
          }
        );
      });
    },
    { scope }
  );

  return <span ref={scope} hidden aria-hidden="true" />;
}

export { gsap, ScrollTrigger };
