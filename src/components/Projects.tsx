import {
  ArrowUpRight,
  BriefcaseBusiness,
  Users,
  Trophy,
} from "lucide-react";

const projects = [
  {
    number: "01",
    label: "Featured",
    title: "Freelancer Marketplace Platform",
    description:
      "A marketplace connecting clients and freelancers with authentication, project management, bidding, and user interactions.",
    technologies: [
      "MongoDB",
      "Express",
      "React",
      "Node.js",
    ],
    icon: BriefcaseBusiness,
    type: "Marketplace",
  },
  {
    number: "02",
    label: "Impact",
    title: "Volunteer Relationship Management",
    description:
      "A workflow system for 500+ volunteers and 20+ coordinators with role-based access, automation, and real-time communication.",
    technologies: [
      "Node.js",
      "Express",
      "MongoDB",
      "Gupshup",
    ],
    icon: Users,
    type: "Management System",
  },
  {
    number: "03",
    label: "Hackathon",
    title: "National Hackathon Platform",
    description:
      "Developed the web interface for a national hackathon platform that onboarded 500+ teams.",
    technologies: [
      "React",
      "Web UI",
    ],
    icon: Trophy,
    type: "Hackathon",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#050505] px-6 py-32 text-white md:px-12 lg:px-20"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="projects-grid absolute inset-0 opacity-20" />

        <div className="absolute left-1/2 top-1/3 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-cyan-500/[0.035] blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-20">
          <div className="mb-6 flex items-center gap-4">
            <span className="text-sm font-medium text-cyan-400">
              02
            </span>

            <span className="h-px w-12 bg-white/20" />

            <span className="text-sm uppercase tracking-[0.25em] text-white/30">
              Selected Work
            </span>
          </div>

          <h2 className="text-4xl font-bold tracking-[-0.03em] md:text-6xl">
            Things I've
            <br />
            <span className="text-white/25">built.</span>
          </h2>
        </div>

        {/* Projects */}
        <div className="space-y-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.number}
              project={project}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
}: {
  project: (typeof projects)[number];
}) {
  const Icon = project.icon;

  return (
    <article
      className="
        project-card
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-white/[0.025]
        transition-all
        duration-500
        hover:-translate-y-1
        hover:border-white/20
        hover:bg-white/[0.04]
      "
    >
      <div className="grid min-h-[420px] lg:grid-cols-[1.1fr_0.9fr]">
        {/* Content */}
        <div className="relative flex flex-col justify-between p-8 md:p-12">
          {/* Top */}
          <div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="text-xs font-medium uppercase tracking-[0.25em] text-cyan-400">
                  {project.label}
                </span>

                <span className="h-px w-8 bg-white/20" />
              </div>

              <span className="text-sm text-white/20">
                {project.number}
              </span>
            </div>

            {/* Title */}
            <h3 className="mt-12 max-w-2xl text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
              {project.title}
            </h3>

            {/* Description */}
            <p className="mt-6 max-w-xl text-sm leading-7 text-white/40 md:text-base">
              {project.description}
            </p>
          </div>

          {/* Bottom */}
          <div className="mt-12">
            {/* Technologies */}
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <span
                  key={technology}
                  className="
                    rounded-full
                    border
                    border-white/10
                    bg-white/[0.03]
                    px-3
                    py-1.5
                    text-xs
                    text-white/40
                    transition-colors
                    group-hover:text-white/60
                  "
                >
                  {technology}
                </span>
              ))}
            </div>

            {/* Link */}
            <a
              href="#contact"
              className="
                mt-8
                inline-flex
                items-center
                gap-2
                text-sm
                font-medium
                text-white/50
                transition-colors
                hover:text-cyan-400
              "
            >
              Discuss project

              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </div>
        </div>

        {/* Visual */}
        <div className="relative hidden overflow-hidden border-l border-white/10 lg:block">
          {/* Perspective grid */}
          <div className="absolute inset-0 project-grid" />

          {/* Large number */}
          <div
            className="
              absolute
              left-1/2
              top-1/2
              -translate-x-1/2
              -translate-y-1/2
              select-none
              text-[180px]
              font-bold
              tracking-[-0.08em]
              text-white/[0.025]
              transition-transform
              duration-700
              group-hover:scale-110
            "
          >
            {project.number}
          </div>

          {/* Icon */}
          <div
            className="
              absolute
              left-1/2
              top-1/2
              flex
              h-28
              w-28
              -translate-x-1/2
              -translate-y-1/2
              items-center
              justify-center
              rounded-3xl
              border
              border-white/10
              bg-black/40
              backdrop-blur-xl
              transition-all
              duration-500
              group-hover:rotate-6
              group-hover:scale-110
              group-hover:border-cyan-400/30
            "
          >
            <Icon className="h-10 w-10 text-cyan-400/70" />
          </div>

          {/* Type */}
          <div className="absolute bottom-8 right-8">
            <span className="text-xs uppercase tracking-[0.2em] text-white/20">
              {project.type}
            </span>
          </div>

          {/* Decorative circles */}
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border border-white/[0.04]" />

          <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full border border-white/[0.04]" />
        </div>
      </div>
    </article>
  );
}