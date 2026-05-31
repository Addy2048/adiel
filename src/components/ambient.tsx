"use client";

import { useEffect, useRef } from "react";

/**
 * Fixed ambient background (aurora blobs, masked grid, noise) plus a
 * neon custom cursor that lags behind and swells over interactive targets.
 * Cursor is disabled on touch / coarse pointers.
 */
export default function Ambient() {
  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;
    if (!window.matchMedia("(pointer:fine)").matches) return;

    let rx = window.innerWidth / 2,
      ry = window.innerHeight / 2,
      dx = rx,
      dy = ry,
      raf = 0;

    const move = (e: MouseEvent) => {
      dx = e.clientX;
      dy = e.clientY;
      dot.style.transform = `translate(${dx}px, ${dy}px) translate(-50%, -50%)`;
    };
    const loop = () => {
      rx += (dx - rx) * 0.18;
      ry += (dy - ry) * 0.18;
      ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
      raf = requestAnimationFrame(loop);
    };
    const hot = () => ring.classList.add("hot");
    const cool = () => ring.classList.remove("hot");

    window.addEventListener("mousemove", move);
    loop();
    const targets = document.querySelectorAll(
      "a, button, input, textarea, [data-hot]"
    );
    targets.forEach((t) => {
      t.addEventListener("mouseenter", hot);
      t.addEventListener("mouseleave", cool);
    });

    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(raf);
      targets.forEach((t) => {
        t.removeEventListener("mouseenter", hot);
        t.removeEventListener("mouseleave", cool);
      });
    };
  }, []);

  return (
    <>
      <div className="bg-fx" aria-hidden="true">
        <div className="bg-aurora a" />
        <div className="bg-aurora b" />
        <div className="bg-aurora c" />
        <div className="bg-grid" />
        <div className="bg-noise" />
      </div>
      <div className="cursor-ring" ref={ringRef} aria-hidden="true" />
      <div className="cursor-dot" ref={dotRef} aria-hidden="true" />
    </>
  );
}
