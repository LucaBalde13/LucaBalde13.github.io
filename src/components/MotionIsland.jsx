import { animate, stagger } from "motion/react";
import { useEffect, useRef } from "react";

export default function MotionIsland({ selector = "[data-react-motion]" }) {
  const mounted = useRef(false);

  useEffect(() => {
    if (mounted.current) return;
    mounted.current = true;

    const targets = Array.from(document.querySelectorAll(selector));
    if (!targets.length) return;

    animate(
      targets,
      { opacity: [0.92, 1], y: [10, 0] },
      {
        duration: 0.42,
        delay: stagger(0.045, { startDelay: 0.04 }),
        ease: [0.22, 1, 0.36, 1]
      }
    );
  }, [selector]);

  return null;
}
