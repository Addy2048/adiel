"use client";

import { useEffect, useRef, useState } from "react";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: 1 | 2 | 3 | 4;
  as?: "div" | "section" | "article" | "header" | "li" | "p" | "span";
};

/**
 * Lightweight scroll-reveal wrapper. Adds the `.in` class (see globals.css)
 * once the element scrolls into view. Respects prefers-reduced-motion.
 */
export default function Reveal({
  children,
  className = "",
  delay,
  as = "div",
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            setShown(true);
            io.unobserve(en.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const Tag = (as ?? "div") as
    | "div"
    | "section"
    | "article"
    | "header"
    | "li"
    | "p"
    | "span";
  const d = delay ? ` d${delay}` : "";
  return (
    <Tag
      ref={ref as React.Ref<never>}
      className={`reveal${d}${shown ? " in" : ""} ${className}`.trim()}
    >
      {children}
    </Tag>
  );
}
