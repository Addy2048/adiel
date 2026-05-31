"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import Reveal from "./reveal";
import {
  FaEnvelope,
  FaBriefcase,
  FaPhone,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaXTwitter,
} from "react-icons/fa6";

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

export default function Contact() {
  const [note, setNote] = useState<{ text: string; ok: boolean } | null>(null);
  const timer = useRef<ReturnType<typeof setTimeout>>();

  const show = (text: string, ok: boolean) => {
    setNote({ text, ok });
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setNote(null), 4500);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value.trim();
    const email = (form.elements.namedItem("email") as HTMLInputElement).value.trim();
    const message = (
      form.elements.namedItem("message") as HTMLTextAreaElement
    ).value.trim();

    if (!name || !email || !message) {
      show("Please fill in every field.", false);
      return;
    }
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      show("That email doesn't look right.", false);
      return;
    }
    const subject = encodeURIComponent("Project enquiry from " + name);
    const body = encodeURIComponent(
      message + "\n\n— " + name + " (" + email + ")"
    );
    show("Opening your mail app… thanks, " + name.split(" ")[0] + "!", true);
    setTimeout(() => {
      window.location.href =
        "mailto:aazaliwa@gmail.com?subject=" + subject + "&body=" + body;
    }, 600);
    form.reset();
  };

  return (
    <section id="contact" className="wrap">
      <div className="contact-grid">
        <div>
          <Reveal as="span" className="eyebrow">
            05 — Contact
          </Reveal>
          <Reveal delay={1}>
            <h2>
              Let&apos;s build
              <br />
              something great.
            </h2>
          </Reveal>
          <Reveal as="p" className="contact-lead" delay={2}>
            Whether you have an innovative project or a more straightforward one,
            I&apos;m ready to help bring it to life. Reach out — let&apos;s work
            together.
          </Reveal>
          <Reveal className="contact-direct" delay={2}>
            <div className="cdrow">
              <span className="ci">
                <FaEnvelope />
              </span>
              <a href="mailto:aazaliwa@gmail.com">aazaliwa@gmail.com</a>
            </div>
            <div className="cdrow">
              <span className="ci">
                <FaBriefcase />
              </span>
              <a href="mailto:adiel@digitalapp.co.tz">adiel@digitalapp.co.tz</a>
            </div>
            <div className="cdrow">
              <span className="ci">
                <FaPhone />
              </span>
              <a href="tel:+255768032771">+255 768 032 771</a>
            </div>
            <div className="cdrow">
              <span className="ci">
                <FaLinkedin />
              </span>
              <a
                href="https://www.linkedin.com/in/adiel-azaliwa-2093921b9/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Adiel Azaliwa
              </a>
            </div>
            <div className="cdrow">
              <span className="ci">
                <FaGithub />
              </span>
              <a
                href="https://github.com/Addy2048"
                target="_blank"
                rel="noopener noreferrer"
              >
                Addy2048
              </a>
            </div>
          </Reveal>
          <Reveal className="contact-socials" delay={3}>
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
          </Reveal>
        </div>

        <Reveal as="div" delay={2} className="">
          <form className="form" onSubmit={onSubmit} noValidate>
            <div className="field">
              <label htmlFor="name">Your name</label>
              <input id="name" name="name" type="text" placeholder="Jane Doe" />
            </div>
            <div className="field">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="jane@company.com"
              />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Tell me about your project…"
              />
            </div>
            <button className="btn btn-primary" type="submit" data-hot>
              Send message <span className="arr">→</span>
            </button>
            <div
              className={`form-note${note ? " show" : ""}`}
              style={
                note && !note.ok ? { color: "oklch(0.72 0.16 25)" } : undefined
              }
            >
              {note?.text}
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
