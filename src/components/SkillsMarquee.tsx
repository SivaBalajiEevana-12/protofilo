const skills = [
  "Java",
  "TypeScript",
  "JavaScript",
  "React",
  "Tailwind",
  "Node.js",
  "Express",
  "MongoDB",
  "SQL",
  "RAG",
  "Embeddings",
  "Vector DBs",
  "LLMs",
  "Git",
  "Linux",
  "REST APIs",
];

export default function SkillsMarquee() {
  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-[#050505] py-6">
      <div className="flex w-max animate-marquee">
        {/* First copy */}
        <SkillGroup />

        {/* Duplicate for seamless animation */}
        <SkillGroup />
      </div>
    </section>
  );
}

function SkillGroup() {
  return (
    <div className="flex shrink-0 items-center">
      {skills.map((skill, index) => (
        <div key={`${skill}-${index}`} className="flex items-center">
          <span className="px-5 text-sm font-medium uppercase tracking-wider text-white/40 transition-colors hover:text-white">
            {skill}
          </span>

          <span className="text-cyan-400/70">✦</span>
        </div>
      ))}
    </div>
  );
}