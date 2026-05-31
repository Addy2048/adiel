"use client";

import { useEffect, useState } from "react";

const LINKS = [
  { id: "about", n: "01", label: "About" },
  { id: "skills", n: "02", label: "Skills" },
  { id: "work", n: "03", label: "Work" },
  { id: "journey", n: "04", label: "Journey" },
  { id: "contact", n: "05", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("about");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      let cur = LINKS[0].id;
      LINKS.forEach((l) => {
        const el = document.getElementById(l.id);
        if (el && el.getBoundingClientRect().top <= window.innerHeight * 0.4) {
          cur = l.id;
        }
      });
      setActive(cur);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
  };

  return (
    <nav className={`nav${scrolled ? " scrolled" : ""}`}>
      <a href="#top" className="brand" data-hot onClick={(e) => go(e, "top")}>
        <span className="mark">A</span>
        <span>
          Adiel<span style={{ color: "var(--muted)" }}>.dev</span>
        </span>
      </a>
      <div className="nav-links">
        {LINKS.map((l) => (
          <a
            key={l.id}
            href={`#${l.id}`}
            data-hot
            className={active === l.id ? "active" : ""}
            onClick={(e) => go(e, l.id)}
          >
            <span className="n">{l.n}</span>
            {l.label}
          </a>
        ))}
      </div>
      <a
        href="/AdielCV.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="nav-cta"
        data-hot
      >
        Resume ↓
      </a>
    </nav>
  );
}
