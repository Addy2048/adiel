const TECH = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Express",
  "Prisma",
  "MongoDB",
  "React Native",
  "Embedded Systems",
  "GraphQL",
];

export default function Marquee() {
  return (
    <div className="strip" aria-hidden="true">
      <div className="marquee">
        {[...TECH, ...TECH].map((t, i) => (
          <span key={i}>{t}</span>
        ))}
      </div>
    </div>
  );
}
