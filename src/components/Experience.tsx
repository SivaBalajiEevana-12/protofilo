import {
  ArrowUpRight,
  Cloud,
  Database,
  GitBranch,
  MessageSquare,
  Server,
  Wallet,
} from "lucide-react";

const experience = {
  role: "Backend Developer Intern",
  company: "ISKCON Hubli, Visakhapatnam",
  period: "Feb 2025 — Jun 2025",
  description:
    "Worked on backend workflows, service integrations, cloud deployment and payment systems while collaborating through Git-based development.",
  responsibilities: [
    {
      icon: Server,
      title: "REST APIs",
      description:
        "Designed and implemented RESTful APIs using Node.js and Express.js for backend workflows and service integration.",
    },
    {
      icon: Database,
      title: "MongoDB",
      description:
        "Integrated MongoDB with optimized schema design for scalable data management.",
    },
    {
      icon: MessageSquare,
      title: "WhatsApp Automation",
      description:
        "Integrated Gupshup WhatsApp APIs to automate user notifications and communication workflows.",
    },
    {
      icon: Cloud,
      title: "Cloud Deployment",
      description:
        "Deployed backend services on Google Cloud Run and frontend applications on Vercel.",
    },
    {
      icon: Wallet,
      title: "Payments",
      description:
        "Integrated Razorpay payment gateway for secure payment processing and transaction verification.",
    },
    {
      icon: GitBranch,
      title: "Collaboration",
      description:
        "Collaborated using Git-based version control and participated in code reviews.",
    },
  ],
};

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-[#050505] px-6 py-32 text-white md:px-12 lg:px-20"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="experience-grid absolute inset-0 opacity-20" />

        <div className="absolute right-[-200px] top-1/3 h-[500px] w-[500px] rounded-full bg-cyan-500/[0.03] blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-20">
          <div className="mb-6 flex items-center gap-4">
            <span className="text-sm font-medium text-cyan-400">
              03
            </span>

            <span className="h-px w-12 bg-white/20" />

            <span className="text-sm uppercase tracking-[0.25em] text-white/30">
              Experience
            </span>
          </div>

          <h2 className="max-w-4xl text-4xl font-bold leading-tight tracking-[-0.03em] md:text-6xl">
            Where I've learned
            <br />
            <span className="text-white/25">by building.</span>
          </h2>
        </div>

        {/* Main Experience */}
        <div className="grid gap-10 lg:grid-cols-[0.35fr_1fr]">
          {/* Left */}
          <div className="lg:sticky lg:top-20 lg:self-start">
            <div className="border-l border-cyan-400/30 pl-6">
              <p className="text-xs uppercase tracking-[0.2em] text-white/30">
                {experience.period}
              </p>

              <h3 className="mt-4 text-2xl font-semibold tracking-tight">
                {experience.role}
              </h3>

              <p className="mt-2 text-sm text-cyan-400/70">
                {experience.company}
              </p>

              <p className="mt-6 max-w-xs text-sm leading-6 text-white/35">
                {experience.description}
              </p>

              {/* Link */}
              <a
                href="#contact"
                className="
                  mt-8
                  inline-flex
                  items-center
                  gap-2
                  text-sm
                  text-white/50
                  transition-colors
                  hover:text-cyan-400
                "
              >
                Get in touch
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Right */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-5 top-0 hidden h-full w-px bg-white/10 sm:block" />

            <div className="space-y-5">
              {experience.responsibilities.map((item, index) => {
                const Icon = item.icon;
                console.log("Icon:", index); // Debugging line to check the value of Icon
                return (
                  <div
                    key={item.title}
                    className="
                      experience-item
                      group
                      relative
                      rounded-2xl
                      border
                      border-white/10
                      bg-white/[0.025]
                      p-6
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:border-white/20
                      hover:bg-white/[0.045]
                      sm:ml-12
                    "
                  >
                    {/* Timeline dot */}
                    <div
                      className="
                        absolute
                        -left-[41px]
                        top-7
                        hidden
                        h-3
                        w-3
                        rounded-full
                        border
                        border-cyan-400/40
                        bg-[#050505]
                        transition-all
                        duration-300
                        group-hover:scale-125
                        group-hover:bg-cyan-400
                        sm:block
                      "
                    />

                    <div className="flex gap-5">
                      {/* Icon */}
                      <div
                        className="
                          flex
                          h-11
                          w-11
                          shrink-0
                          items-center
                          justify-center
                          rounded-xl
                          border
                          border-white/10
                          bg-white/[0.03]
                          transition-all
                          duration-300
                          group-hover:border-cyan-400/30
                          group-hover:bg-cyan-400/[0.08]
                        "
                      >
                        <Icon className="h-5 w-5 text-cyan-400/70" />
                      </div>

                      {/* Content */}
                      <div>
                        <h4 className="font-semibold text-white/90">
                          {item.title}
                        </h4>

                        <p className="mt-2 text-sm leading-6 text-white/40">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}