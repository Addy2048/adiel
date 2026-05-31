"use client";

import { useEffect, useRef, useState } from "react";

export default function CountUp({
  to,
  suffix = "",
  className = "",
}: {
  to: number;
  suffix?: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [n, setN] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (!en.isIntersecting) return;
          io.unobserve(en.target);
          const step = Math.max(1, Math.round(to / 28));
          let v = 0;
          const tick = () => {
            v += step;
            if (v >= to) v = to;
            setN(v);
            if (v < to) requestAnimationFrame(tick);
          };
          tick();
        });
      },
      { threshold: 0.5 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [to]);

  return (
    <span ref={ref} className={className}>
      {n}
      {suffix}
    </span>
  );
}
