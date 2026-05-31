"use client";

import { useEffect, useRef, useState } from "react";
import Reveal from "./reveal";
import {
  FaCode,
  FaServer,
  FaMobileScreen,
  FaMicrochip,
  FaRocket,
  FaHeadset,
} from "react-icons/fa6";
import type { IconType } from "react-icons";

type Skill = {
  Icon: IconType;
  title: string;
  body: string;
  tags: string[];
};

const SKILLS: Skill[] = [
  {
    Icon: FaCode,
    title: "Front-End Web",
    body: "Fast, responsive, accessible interfaces for companies and organisations — built to feel effortless.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind"],
  },
  {
    Icon: FaServer,
    title: "Backend & APIs",
    body: "Robust API endpoints for booking, payments, logs and more — modelled, secured and built to scale.",
    tags: ["Node.js", "Express", "Prisma", "TypeORM", "MongoDB"],
  },
  {
    Icon: FaMobileScreen,
    title: "Mobile Apps",
    body: "Cross-platform mobile apps with native feel and end-to-end integration, from prototype to store.",
    tags: ["React Native", "Expo", "REST APIs"],
  },
  {
    Icon: FaMicrochip,
    title: "Embedded Systems",
    body: "End-to-end design of connected hardware — microcontrollers and sensors wired into real-world products.",
    tags: ["Microcontrollers", "Sensors", "IoT", "Hardware"],
  },
  {
    Icon: FaRocket,
    title: "Technical Leadership",
    body: "As CTO, I define technical strategy and lead delivery — owning architecture, deployment and security.",
    tags: ["Strategy", "Architecture", "Deployment", "Security"],
  },
  {
    Icon: FaHeadset,
    title: "Support & SDLC",
    body: "Responsive technical support and full software lifecycle — integration, testing and reliable releases.",
    tags: ["Tech Support", "Testing", "Integration"],
  },
];

function SkillCard({ skill, index }: { skill: Skill; index: number }) {
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

  const onMove = (e: React.MouseEvent<HTMLElement>) => {
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `translateY(-6px) rotateX(${-py * 5}deg) rotateY(${
      px * 6
    }deg)`;
  };
  const onLeave = (e: React.MouseEvent<HTMLElement>) => {
    e.currentTarget.style.transform = "";
  };

  const { Icon } = skill;
  const delay = index % 3; // 0,1,2 stagger within each row
  return (
    <article
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`skill-card reveal${delay ? ` d${delay}` : ""}${
        shown ? " in" : ""
      }`}
    >
      <div className="kico">
        <Icon />
      </div>
      <h3>{skill.title}</h3>
      <p>{skill.body}</p>
      <div className="tags">
        {skill.tags.map((t) => (
          <span className="tag" key={t}>
            {t}
          </span>
        ))}
      </div>
    </article>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="wrap">
      <Reveal className="section-head">
        <span className="eyebrow">02 — Capabilities</span>
        <h2>What I bring to the table</h2>
        <p>
          A versatile toolkit spanning the full product lifecycle — from pixel
          to PCB.
        </p>
      </Reveal>
      <div className="skills-grid">
        {SKILLS.map((s, i) => (
          <SkillCard key={s.title} skill={s} index={i} />
        ))}
      </div>
    </section>
  );
}
