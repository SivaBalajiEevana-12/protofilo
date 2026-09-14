import { ArrowUpRight } from "lucide-react";

const stats = [
 
  {
    value: "8.58",
    label: "B.Tech CGPA",
    description: "Computer Science and Engineering Andhra University",
  },
  {
    value: "96.4%",
    label: "Diploma",
    description: "Computer Science in Smt B seetha polytechnic college",
  },
   {
    value: "10/10",
    label: "SSC",
    description: "Board of Secondary Education",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#050505] px-6 py-32 text-white md:px-12 lg:px-20"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="about-glow absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/[0.04] blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Section number */}
        <div className="mb-16 flex items-center gap-4">
          <span className="text-sm font-medium text-cyan-400">
            01
          </span>

          <span className="h-px w-12 bg-white/20" />

          <span className="text-sm uppercase tracking-[0.25em] text-white/30">
            About
          </span>
        </div>

        {/* Main content */}
        <div className="grid gap-16 lg:grid-cols-[1fr_0.8fr]">
          {/* Left */}
          <div>
            <h2 className="max-w-3xl text-4xl font-bold leading-tight tracking-[-0.03em] md:text-6xl">
              I like solving
              <br />
              <span className="text-white/25">
                hard problems.
              </span>
            </h2>

            <div className="mt-10 max-w-2xl space-y-6 text-base leading-8 text-white/45 md:text-lg">
              <p>
                Computer Science undergraduate at Andhra University
                College of Engineering, expected to graduate in 2027.
                My core strengths are Java, DSA, OOP, DBMS, SQL, and
                computer networks.
              </p>

              <p>
                I also build real products with React, Node.js,
                Express, MongoDB and TypeScript, with experience in
                authentication, API integrations, payments, cloud
                deployment, and AI-assisted workflows.
              </p>
            </div>

            {/* Small link */}
            <a
              href="#journey"
              className="
                mt-10
                inline-flex
                items-center
                gap-2
                text-sm
                font-medium
                text-white/60
                transition-colors
                hover:text-cyan-400
              "
            >
              Explore my journey
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          {/* Right */}
          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-3 lg:grid-cols-1">
            {stats.map((stat) => (
              <StatCard
                key={stat.label}
                value={stat.value}
                label={stat.label}
                description={stat.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function StatCard({
  value,
  label,
  description,
}: {
  value: string;
  label: string;
  description: string;
}) {
  return (
    <div
      className="
        group
        relative
        bg-[#080808]
        p-7
        transition-all
        duration-300
        hover:bg-white/[0.04]
      "
    >
      {/* Number */}
      <div className="text-4xl font-bold tracking-tight text-white md:text-5xl">
        {value}
      </div>

      {/* Label */}
      <div className="mt-3 text-sm font-medium text-white/70">
        {label}
      </div>

      {/* Description */}
      <div className="mt-1 text-xs text-white/30">
        {description}
      </div>

      {/* Hover indicator */}
      <div
        className="
          absolute
          bottom-0
          left-0
          h-px
          w-0
          bg-cyan-400
          transition-all
          duration-300
          group-hover:w-full
        "
      />
    </div>
  );
}