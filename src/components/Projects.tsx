import {
  ArrowUpRight,
  BriefcaseBusiness,
  Users,
  Trophy,
  Link2,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    number: "01",
    label: "Featured",
    title: "Freelancer Marketplace Platform",
    description:
      "A marketplace connecting clients and freelancers with authentication, project management, bidding, and user interactions.",
    technologies: ["MongoDB", "Express", "React", "Node.js"],
    icon: BriefcaseBusiness,
    type: "Marketplace",
    github: "d",
    live: "https://freelancer-marketplace-platform.vercel.app/",
  },
  {
    number: "02",
    label: "Impact",
    title: "Volunteer Relationship Management",
    description:
      "A workflow system for 500+ volunteers and 20+ coordinators with role-based access, automation, and real-time communication.",
    technologies: ["Node.js", "Express", "MongoDB", "Gupshup"],
    icon: Users,
    type: "Management System",
  },
  {
    number: "03",
    label: "Hackathon",
    title: "National Hackathon Platform",
    description:
      "Developed the web interface for a national hackathon platform that onboarded 500+ teams.",
    technologies: ["React", "Web UI"],
    icon: Trophy,
    type: "Hackathon",
  },
  {
  number: "04",
  label: "Full Stack",
  title: "LinkZip",
  description:
    "A full-stack URL shortening platform that lets users create, manage, and track shortened links through a clean dashboard.",
  technologies: [
    "React",
    "TypeScript",
    "Node.js",
    "Express",
    "MongoDB",
    "Redis",
  ],
  icon: Link2,
  type: "URL Shortener",
  github: "YOUR_GITHUB_LINK",
  live: "https://linkzip-kappa.vercel.app/",
}
];

export default function Projects() {
  const featured = projects[0];
  const otherProjects = projects.slice(1);

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#050505] px-6 py-24 text-white md:px-12 md:py-28 lg:px-20"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="projects-grid absolute inset-0 opacity-20" />

        <div className="absolute left-1/2 top-1/3 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-cyan-500/[0.035] blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-14">
          <div className="mb-5 flex items-center gap-4">
            <span className="text-sm font-medium text-cyan-400">02</span>

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

        {/* Featured Project */}
        <FeaturedProject project={featured} />

        {/* Other Projects */}
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {otherProjects.map((project) => (
            <SmallProjectCard
              key={project.number}
              project={project}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* Featured Project                                                           */
/* -------------------------------------------------------------------------- */

function FeaturedProject({
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
      <div className="grid min-h-[320px] lg:grid-cols-[1.15fr_0.85fr]">
        {/* Content */}
        <div className="relative flex flex-col justify-between p-7 md:p-9">
          <div>
            {/* Top */}
            <div className="flex items-center justify-between">
             <div className="flex items-center gap-4">
  <a
    href={project.github}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 text-sm font-medium text-white/50 transition-colors hover:text-cyan-400"
  >
    <FaGithub className="h-4 w-4" />
    GitHub
  </a>

  <a
    href={project.live}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 text-sm font-medium text-white/50 transition-colors hover:text-cyan-400"
  >
    Live Demo
    <ArrowUpRight className="h-4 w-4" />
  </a>
</div>

              <span className="text-sm text-white/20">
                {project.number}
              </span>
            </div>

            {/* Title */}
            <h3 className="mt-8 max-w-2xl text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
              {project.title}
            </h3>

            {/* Description */}
            <p className="mt-4 max-w-xl text-sm leading-6 text-white/40 md:text-[15px]">
              {project.description}
            </p>
          </div>

          {/* Bottom */}
          <div className="mt-7 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
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
                inline-flex
                shrink-0
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
              text-[150px]
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
              h-24
              w-24
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
            <Icon className="h-9 w-9 text-cyan-400/70" />
          </div>

          {/* Type */}
          <div className="absolute bottom-7 right-7">
            <span className="text-xs uppercase tracking-[0.2em] text-white/20">
              {project.type}
            </span>
          </div>

          {/* Decorative circles */}
          <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full border border-white/[0.04]" />

          <div className="absolute -bottom-28 -left-16 h-72 w-72 rounded-full border border-white/[0.04]" />
        </div>
      </div>
    </article>
  );
}

/* -------------------------------------------------------------------------- */
/* Small Project Card                                                         */
/* -------------------------------------------------------------------------- */

function SmallProjectCard({
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
        p-7
        transition-all
        duration-500
        hover:-translate-y-1
        hover:border-white/20
        hover:bg-white/[0.04]
        md:p-8
      "
    >
      {/* Decorative background */}
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute -right-20 -top-20 h-52 w-52 rounded-full border border-cyan-400/[0.06]" />
      </div>

      {/* Top */}
      <div className="relative flex items-center justify-between">
        <div className="flex items-center gap-3">
  <a
    href={project.github}
    target="_blank"
    rel="noopener noreferrer"
    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/40 transition-all hover:border-cyan-400/40 hover:text-cyan-400"
    aria-label={`${project.title} GitHub repository`}
  >
    <FaGithub className="h-4 w-4" />
  </a>

  <a
    href={project.live}
    target="_blank"
    rel="noopener noreferrer"
    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/40 transition-all hover:border-cyan-400/40 hover:text-cyan-400"
    aria-label={`${project.title} live demo`}
  >
    <ArrowUpRight className="h-4 w-4" />
  </a>
</div>

        <span className="text-sm text-white/20">
          {project.number}
        </span>
      </div>

      {/* Icon */}
      <div
        className="
          relative
          mt-8
          flex
          h-12
          w-12
          items-center
          justify-center
          rounded-2xl
          border
          border-white/10
          bg-white/[0.025]
          transition-all
          duration-500
          group-hover:border-cyan-400/30
          group-hover:bg-cyan-400/[0.04]
        "
      >
        <Icon className="h-5 w-5 text-cyan-400/70" />
      </div>

      {/* Title */}
      <h3 className="relative mt-6 text-2xl font-semibold leading-tight tracking-tight">
        {project.title}
      </h3>

      {/* Description */}
      <p className="relative mt-4 min-h-[72px] text-sm leading-6 text-white/40">
        {project.description}
      </p>

      {/* Bottom */}
      <div className="relative mt-7 flex items-end justify-between gap-4">
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="
                rounded-full
                border
                border-white/10
                bg-white/[0.03]
                px-2.5
                py-1
                text-[11px]
                text-white/40
                transition-colors
                group-hover:text-white/60
              "
            >
              {technology}
            </span>
          ))}
        </div>

        <a
          href="#contact"
          aria-label={`Discuss ${project.title}`}
          className="
            flex
            h-9
            w-9
            shrink-0
            items-center
            justify-center
            rounded-full
            border
            border-white/10
            text-white/40
            transition-all
            duration-300
            hover:border-cyan-400/40
            hover:text-cyan-400
          "
        >
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>

      {/* Type */}
      <div className="relative mt-6">
        <span className="text-[10px] uppercase tracking-[0.2em] text-white/20">
          {project.type}
        </span>
      </div>
    </article>
  );
}