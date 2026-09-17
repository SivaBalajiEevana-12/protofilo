import {
  Brain,
  Server,
  Layers3,
  Database,
  Cloud,
  Workflow,
  Radio,
  BookOpen,
  Terminal,
} from "lucide-react";

const skills = [
  {
    number: "01",
    icon: Brain,
    title: "Problem Solving",
    description:
      "Strong algorithmic thinking with 400+ LeetCode problems solved.",
    technologies: ["DSA", "Java", "Problem Solving"],
  },
  {
    number: "02",
    icon: Server,
    title: "Backend Engineering",
    description:
      "Building scalable backend services and REST APIs with Node.js and Express.",
    technologies: ["Node.js", "Express", "REST APIs"],
  },
  {
    number: "03",
    icon: Layers3,
    title: "Full-Stack Development",
    description:
      "Developing complete web applications from responsive interfaces to backend services.",
    technologies: ["React", "TypeScript", "Node.js"],
  },
  {
    number: "04",
    icon: Brain,
    title: "AI / GenAI",
    description:
      "Exploring retrieval-augmented applications and modern LLM-based systems.",
    technologies: ["RAG", "Embeddings", "Vector DBs", "LLMs"],
  },
  {
    number: "05",
    icon: Database,
    title: "Database Engineering",
    description:
      "Designing and working with both document and relational data models.",
    technologies: ["MongoDB", "SQL", "Database Design"],
  },
  {
    number: "06",
    icon: Cloud,
    title: "DevOps & Cloud",
    description:
      "Containerizing, deploying, and maintaining applications across development and production environments.",
    technologies: ["Docker", "Linux", "CI/CD", "Cloud Run"],
  },
  {
    number: "07",
    icon: Workflow,
    title: "APIs & Integrations",
    description:
      "Building integrations for payments, messaging, authentication, and external services.",
    technologies: ["Razorpay", "Gupshup", "Postman"],
  },
  {
    number: "08",
    icon: Radio,
    title: "Real-Time Systems",
    description:
      "Working with event-driven communication and real-time application workflows.",
    technologies: ["Socket.IO", "WebSockets", "Events"],
  },
  {
    number: "09",
    icon: BookOpen,
    title: "CS Fundamentals",
    description:
      "Strong foundation in the core concepts behind software engineering and systems.",
    technologies: [
      "OOP",
      "DBMS",
      "OS",
      "Computer Networks",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative bg-[#050505] py-28">
      <div className="mx-auto max-w-6xl px-6">

        {/* Header */}
        <div className="mb-14">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-cyan-400">
            02 / Skills
          </p>

          <h2 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">
            What I build with.
          </h2>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-zinc-400 md:text-base">
            A combination of problem solving, backend engineering,
            full-stack development, and modern infrastructure.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => {
            const Icon = skill.icon;

            return (
              <div
                key={skill.number}
                className="group relative min-h-[280px] bg-[#050505] p-7 transition duration-300 hover:bg-[#090909]"
              >
                {/* Number */}
                <span className="absolute right-7 top-7 font-mono text-xs text-zinc-700 transition group-hover:text-cyan-400/50">
                  {skill.number}
                </span>

                {/* Icon */}
                <div className="mb-12 flex h-11 w-11 items-center justify-center border border-white/10 bg-white/[0.02] text-zinc-500 transition duration-300 group-hover:border-cyan-400/30 group-hover:bg-cyan-400/5 group-hover:text-cyan-400">
                  <Icon size={20} strokeWidth={1.5} />
                </div>

                {/* Content */}
                <h3 className="text-lg font-medium text-white transition group-hover:text-cyan-400">
                  {skill.title}
                </h3>

                <p className="mt-3 max-w-sm text-sm leading-6 text-zinc-500">
                  {skill.description}
                </p>

                {/* Technologies */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {skill.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="border border-white/10 px-2.5 py-1 font-mono text-[10px] text-zinc-500 transition group-hover:border-white/15 group-hover:text-zinc-400"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {/* Bottom Accent */}
                <div className="absolute bottom-0 left-0 h-px w-0 bg-cyan-400 transition-all duration-500 group-hover:w-full" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}