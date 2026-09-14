import {
  Brain,
  Database,
  GitBranch,
  Layers3,
  Server,
  Workflow,
} from "lucide-react";

const skills = [
  {
    title: "Problem Solving",
    description:
      "Strong problem-solving skills with 400+ LeetCode problems solved.",
    icon: Brain,
  },
  {
    title: "Backend Development",
    description:
      "Building RESTful APIs and backend services with Node.js and Express.",
    icon: Server,
  },
  {
    title: "Database Design",
    description:
      "Designing and working with MongoDB and SQL databases.",
    icon: Database,
  },
  {
    title: "API Development",
    description:
      "Designing scalable REST APIs with authentication, validation, and integrations.",
    icon: Workflow,
  },
  {
    title: "Full-Stack Development",
    description:
      "Building complete web applications using React, Node.js, Express, and MongoDB.",
    icon: Layers3,
  },
  {
    title: "Version Control",
    description:
      "Collaborative development using Git, GitHub, code reviews, and CI/CD workflows.",
    icon: GitBranch,
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden border-t border-white/10 bg-[#050505] px-6 py-24 text-white md:px-12 md:py-28 lg:px-20"
    >
      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-14">
          <div className="mb-5 flex items-center gap-4">
            <span className="text-sm font-medium text-cyan-400">
              01
            </span>

            <span className="h-px w-12 bg-white/20" />

            <span className="text-sm uppercase tracking-[0.25em] text-white/30">
              Skills
            </span>
          </div>

          <h2 className="text-4xl font-bold tracking-[-0.03em] md:text-6xl">
            What I
            <br />
            <span className="text-white/25">do well.</span>
          </h2>
        </div>

        {/* Skills Grid */}
        <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => {
            const Icon = skill.icon;

            return (
              <article
                key={skill.title}
                className="group relative bg-[#050505] p-7 transition-colors duration-300 hover:bg-white/[0.035] md:p-8"
              >
                <div className="mb-8 flex items-start justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.02] transition-all duration-300 group-hover:border-cyan-400/30 group-hover:bg-cyan-400/[0.04]">
                    <Icon className="h-5 w-5 text-white/40 transition-colors group-hover:text-cyan-400" />
                  </div>

                  <span className="text-xs text-white/15">
                    /
                  </span>
                </div>

                <h3 className="text-lg font-semibold">
                  {skill.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-white/35">
                  {skill.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}