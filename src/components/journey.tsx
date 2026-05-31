"use client";

import { useEffect, useRef } from "react";
import Reveal from "./reveal";

type Item = {
  when: string;
  title: string;
  org: string;
  body: string;
};

const ITEMS: Item[] = [
  {
    when: "AUG 2024 — PRESENT",
    title: "Chief Technical Officer",
    org: "Digital Appearance Company Ltd",
    body: "Define and guide technical strategy, lead web & application projects to high-quality, scalable solutions, and own deployment, performance and security — while keeping clients supported and successful.",
  },
  {
    when: "JUL 2022 — PRESENT",
    title: "Software Developer & Technical Support",
    org: "Itule Company Ltd · Safiri App",
    body: "Build and maintain backend APIs for booking, expenses, payments and logs, plus React/Next.js web and React Native mobile apps — end-to-end integration, testing and support.",
  },
  {
    when: "NOV 2024 — PRESENT",
    title: "Part-time Tutorial Assistant",
    org: "Dar es Salaam Institute of Technology",
    body: "Teaching and mentoring undergraduate students in Computer Engineering and related fields.",
  },
  {
    when: "2022 — 2023",
    title: "Software Developer",
    org: "Afya Lead & Hexis",
    body: "Built the Pamoja health-insurance app and a coach desktop panel with exercise & nutrition tracking — early product work across mobile front-ends and Node.js / GraphQL backends.",
  },
  {
    when: "2020 — 2024",
    title: "B.Eng, Computer Engineering",
    org: "Dar es Salaam Institute of Technology",
    body: "Software, electronics and embedded systems — the foundation for building reliable products across the full stack.",
  },
  {
    when: "2017 — 2020",
    title: "Diploma, Food Science & Technology",
    org: "Dar es Salaam Institute of Technology",
    body: "Where the journey began — building scientific rigor and a domain edge that few engineers share.",
  },
];

export default function Journey() {
  const tlRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = tlRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            el.style.setProperty("--draw", "1");
            io.unobserve(en.target);
          }
        });
      },
      { threshold: 0.18 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section id="journey" className="wrap">
      <Reveal className="section-head">
        <span className="eyebrow">04 — Journey</span>
        <h2>The path so far</h2>
        <p>
          From food labs to firmware — an unconventional route that shapes how I
          solve problems.
        </p>
      </Reveal>
      <div className="timeline" ref={tlRef}>
        {ITEMS.map((it, i) => (
          <Reveal
            key={it.title}
            className="tl-item"
            delay={((i % 3) || undefined) as 1 | 2 | undefined}
          >
            <div className="when">{it.when}</div>
            <h3>{it.title}</h3>
            <div className="org">{it.org}</div>
            <p>{it.body}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
