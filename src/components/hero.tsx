"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import AdielImg from "../../public/adiel.jpeg";

const ROLES = [
  "Chief Technical Officer",
  "Full-Stack Developer",
  "Mobile App Engineer",
  "Embedded Systems Engineer",
];

const SOCIALS = [
  { href: "https://github.com/Addy2048", label: "GitHub", Icon: FaGithub },
  { href: "https://x.com/AdielElifelet", label: "X", Icon: FaXTwitter },
  {
    href: "https://www.linkedin.com/in/adiel-azaliwa-2093921b9/",
    label: "LinkedIn",
    Icon: FaLinkedin,
  },
  {
    href: "https://www.instagram.com/adiel_elifelet/profilecard/?igsh=MXZlMGhicGcyZWoxOA==",
    label: "Instagram",
    Icon: FaInstagram,
  },
];

function useTyped() {
  const [text, setText] = useState("");
  const state = useRef({ ri: 0, ci: 0, deleting: false });

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setText(ROLES[0]);
      return;
    }
    let timer: ReturnType<typeof setTimeout>;
    const tick = () => {
      const s = state.current;
      const word = ROLES[s.ri];
      setText(word.slice(0, s.ci));
      let delay = 70;
      if (!s.deleting && s.ci < word.length) s.ci++;
      else if (!s.deleting && s.ci === word.length) {
        s.deleting = true;
        delay = 1500;
      } else if (s.deleting && s.ci > 0) {
        s.ci--;
        delay = 35;
      } else {
        s.deleting = false;
        s.ri = (s.ri + 1) % ROLES.length;
        delay = 350;
      }
      timer = setTimeout(tick, delay);
    };
    timer = setTimeout(tick, 400);
    return () => clearTimeout(timer);
  }, []);

  return text;
}

export default function Hero() {
  const typed = useTyped();

  return (
    <header className="hero wrap" id="hero">
      <div className="hero-grid">
        <div className="hero-copy">
          <div className="hero-status reveal in">
            <span className="dot" /> CTO @ Digital Appearance · Open to freelance
          </div>
          <h1 className="reveal in d1">
            Meet{" "}
            <span className="grad">
              Adiel
              <br />
              Elifelet Azaliwa
            </span>
          </h1>
          <div className="role reveal in d2">
            <span>{typed}</span>
            <span className="cur">▍</span>
          </div>
          <p className="lead reveal in d3">
            Chief Technical Officer and full-stack engineer building web, mobile
            and embedded systems — turning innovative ideas into reliable,
            scalable products, from backend APIs to real-world hardware.
          </p>
          <div className="hero-actions reveal in d4">
            <a href="#work" className="btn btn-primary" data-hot>
              View my work <span className="arr">→</span>
            </a>
            <a
              href="/AdielCV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
              data-hot
            >
              Get résumé <span className="arr">↓</span>
            </a>
          </div>
          <div className="hero-socials reveal in d4">
            {SOCIALS.map(({ href, label, Icon }) => (
              <Link
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                data-hot
              >
                <Icon />
              </Link>
            ))}
          </div>
        </div>

        <div className="portrait reveal in d2">
          <div className="ring" />
          <div className="portrait-frame">
            <Image
              src={AdielImg}
              alt="Portrait of Adiel Elifelet Azaliwa"
              placeholder="blur"
              sizes="(max-width: 880px) 80vw, 340px"
            />
          </div>
          <div className="chip one">
            <b>6+</b> teams &amp; clients
          </div>
          <div className="chip two">
            <span
              className="dot"
              style={{
                width: 7,
                height: 7,
                borderRadius: "50%",
                background: "var(--c1)",
              }}
            />{" "}
            Full-stack &amp; embedded
          </div>
        </div>
      </div>
      <div className="scroll-hint" aria-hidden="true">
        <span className="line" />
        SCROLL
      </div>
    </header>
  );
}
