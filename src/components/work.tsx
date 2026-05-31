import Link from "next/link";
import Reveal from "./reveal";

type Project = {
  tag: string;
  title: string;
  desc: string;
  meta: string[];
  href: string;
  mock: number;
};

const PROJECTS: Project[] = [
  {
    tag: "WEB · MOBILE · BACKEND",
    title: "Safiri App",
    desc: "A travel & booking platform for Itule Company — backend APIs for booking, expense tracking, payments and system logs, paired with React/Next.js web and a React Native mobile app.",
    meta: ["Next.js", "React Native", "Node.js"],
    href: "https://github.com/Addy2048",
    mock: 0,
  },
  {
    tag: "EMBEDDED · WEB DASHBOARD",
    title: "E-Tag System",
    desc: "Digital product tags for supermarkets — an end-to-end embedded system paired with a web admin dashboard for live, centralised product and price management.",
    meta: ["Embedded", "IoT", "Dashboard"],
    href: "https://github.com/Addy2048",
    mock: 1,
  },
  {
    tag: "MOBILE · HEALTH",
    title: "Pamoja App",
    desc: "A mobile app for digital health insurance built for Afya Lead — plus the company's website — designed to make health cover simpler and more accessible.",
    meta: ["React Native", "Web", "Health"],
    href: "https://github.com/Addy2048",
    mock: 2,
  },
];

function Mock({ variant }: { variant: number }) {
  const bodies = [
    <div className="body" key="0">
      <span className="l g" />
      <span className="l s" />
      <span className="l m" />
      <div className="grid2">
        <i />
        <i />
        <i />
        <i />
      </div>
    </div>,
    <div className="body" key="1">
      <span className="l g" />
      <div className="grid2">
        <i />
        <i />
        <i />
        <i />
      </div>
      <span className="l s" />
    </div>,
    <div className="body" key="2">
      <span className="l s" />
      <span className="l g" />
      <div className="grid2">
        <i />
        <i />
      </div>
      <span className="l m" />
    </div>,
  ];
  return (
    <div className="pvisual">
      <div className="mock">
        <div className="bar">
          <i />
          <i />
          <i />
        </div>
        {bodies[variant]}
      </div>
    </div>
  );
}

export default function Work() {
  return (
    <section id="work" className="wrap">
      <Reveal className="section-head">
        <span className="eyebrow">03 — Selected work</span>
        <h2>Things I&apos;ve built</h2>
        <p>
          A selection of projects across web, mobile and connected hardware.
        </p>
      </Reveal>
      <div className="projects">
        {PROJECTS.map((p, i) => (
          <Reveal
            as="article"
            className="project"
            key={p.title}
            delay={(i || undefined) as 1 | 2 | undefined}
          >
            <div className="pinfo">
              <span className="ptag">{p.tag}</span>
              <h3>{p.title}</h3>
              <p className="pdesc">{p.desc}</p>
              <div className="pmeta">
                {p.meta.map((m) => (
                  <span className="tag" key={m}>
                    {m}
                  </span>
                ))}
              </div>
              <Link
                className="plink"
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                View project <span className="arr">↗</span>
              </Link>
            </div>
            <Mock variant={p.mock} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
