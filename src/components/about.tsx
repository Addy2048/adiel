import Reveal from "./reveal";
import CountUp from "./countup";

const STATS = [
  { to: 6, suffix: "+", label: "TEAMS & CLIENTS" },
  { to: 4, suffix: "+", label: "YEARS BUILDING" },
  { to: 2, suffix: "", label: "DISCIPLINES" },
];

export default function About() {
  return (
    <section id="about" className="wrap">
      <Reveal className="section-head">
        <span className="eyebrow">01 — About</span>
        <h2>Who is Adiel?</h2>
      </Reveal>
      <div className="about-grid">
        <Reveal as="p" className="about-lead">
          A hard-working, self-disciplined engineer who solves challenges with{" "}
          <span className="grad">innovative approaches</span> — reliable and
          accurate, even under pressure.
        </Reveal>
        <div className="about-body">
          <Reveal as="p">
            After a diploma in Food Science &amp; Technology, I earned my B.Eng
            in Computer Engineering at the Dar es Salaam Institute of Technology
            — pairing scientific rigor with software craft.
          </Reveal>
          <Reveal as="p" delay={1}>
            Today I&apos;m Chief Technical Officer at Digital Appearance Company,
            where I define technical strategy, lead web and app projects, and own
            deployment, performance and security end-to-end — all while keeping
            clients supported and successful.
          </Reveal>
          <Reveal as="p" delay={2}>
            Across full-stack web, mobile and embedded systems, I build reliable,
            scalable solutions — and I&apos;m at my best on the hands-on problems
            where software meets the real world.
          </Reveal>
          <div className="stats">
            {STATS.map((s, i) => (
              <Reveal
                key={s.label}
                className="stat"
                delay={(i + 1) as 1 | 2 | 3}
              >
                <CountUp className="num" to={s.to} suffix={s.suffix} />
                <div className="lbl">{s.label}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
