import {
  GraduationCap,
  BriefcaseBusiness,
  Trophy,
  Code2,
  School,
} from "lucide-react";

const timeline = [
  {
    year: "2020 — 2021",
    title: "SSC",
    organization: "Viveka E.M. High School",
    description: "Completed 10th class with a perfect 10 CGPA.",
    result: "10 / 10 CGPA",
    icon: School,
    type: "education",
  },
  {
    year: "2021 — 2024",
    title: "Diploma in Computer Science",
    organization: "SMT B. Seetha Polytechnic",
    description:
      "Built my foundation in computer science, programming and software development.",
    result: "96.4%",
    icon: GraduationCap,
    type: "education",
  },
  {
    year: "Feb 2025 — Jun 2025",
    title: "Backend Developer Intern",
    organization: "ISKCON Hubli, Visakhapatnam",
    description:
      "Developed REST APIs, worked with MongoDB, Gupshup WhatsApp APIs, Razorpay and cloud deployment.",
    result: "Internship",
    icon: BriefcaseBusiness,
    type: "experience",
  },
  {
    year: "2026",
    title: "GATE — Computer Science",
    organization: "GATE 2026",
    description:
      "Qualified GATE 2026 in Computer Science.",
    result: "Qualified",
    icon: Trophy,
    type: "achievement",
  },
  {
    year: "2024 — 2027",
    title: "B.Tech in Computer Science",
    organization: "Andhra University College of Engineering",
    description:
      "Currently pursuing B.Tech in Computer Science and Engineering.",
    result: "8.58 / 10 CGPA",
    icon: GraduationCap,
    type: "education",
  },
  {
    year: "2026 — Present",
    title: "Building & Learning",
    organization: "Full-Stack Development",
    description:
      "Developing full-stack applications and strengthening backend, system design and problem-solving skills.",
    result: "400+ LeetCode",
    icon: Code2,
    type: "present",
  },
];

export default function Timeline() {
  return (
    <section
      id="journey"
      className="relative overflow-hidden bg-[#050505] px-6 py-32 text-white md:px-12 lg:px-20"
    >
      {/* Background grid */}
      <div className="pointer-events-none absolute inset-0 opacity-20">
        <div className="timeline-grid absolute inset-0" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-20 max-w-2xl">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-cyan-400">
            My Journey
          </p>

          <h2 className="text-4xl font-bold tracking-tight md:text-6xl">
            The path that
            <br />
            <span className="text-white/30">got me here.</span>
          </h2>

          <p className="mt-6 max-w-xl text-white/40">
            From my early education to software development, every step has
            shaped the developer I am today.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-4 top-0 h-full w-px bg-white/10 md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-16">
            {timeline.map((item, index) => {
              const Icon = item.icon;
              const isRight = index % 2 !== 0;

              return (
                <TimelineItem
                  key={item.title}
                  item={item}
                  Icon={Icon}
                  isRight={isRight}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineItem({
  item,
  Icon,
  isRight,
}: {
  item: (typeof timeline)[number];
  Icon: React.ElementType;
  isRight: boolean;
}) {
  return (
    <div className="relative grid grid-cols-[32px_1fr] gap-6 md:grid-cols-2 md:gap-0">
      {/* Desktop left side */}
      <div
        className={`hidden md:block ${
          isRight ? "order-1 pr-16 text-right" : "order-1 pr-16 text-right"
        }`}
      >
        {!isRight && <TimelineContent item={item} />}
      </div>

      {/* Center dot */}
      <div className="absolute left-4 top-0 z-10 -translate-x-1/2 md:left-1/2">
        <div
          className={`
            flex
            h-9
            w-9
            items-center
            justify-center
            rounded-full
            border
            border-white/10
            bg-[#050505]
            shadow-[0_0_30px_rgba(34,211,238,0.15)]
          `}
        >
          <Icon className="h-4 w-4 text-cyan-400" />
        </div>
      </div>

      {/* Desktop right side */}
      <div
        className={`hidden md:block ${
          isRight ? "order-2 pl-16" : "order-2 pl-16"
        }`}
      >
        {isRight && <TimelineContent item={item} />}
      </div>

      {/* Mobile */}
      <div className="col-start-2 md:hidden">
        <TimelineContent item={item} />
      </div>
    </div>
  );
}

function TimelineContent({
  item,
}: {
  item: (typeof timeline)[number];
}) {
  return (
    <div className="group">
      {/* Year */}
      <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-cyan-400">
        {item.year}
      </p>

      {/* Card */}
      <div
        className="
          rounded-2xl
          border
          border-white/10
          bg-white/[0.03]
          p-6
          backdrop-blur-sm
          transition-all
          duration-300
          hover:-translate-y-1
          hover:border-cyan-400/30
          hover:bg-white/[0.05]
        "
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-xl font-semibold tracking-tight">
              {item.title}
            </h3>

            <p className="mt-1 text-sm text-white/40">
              {item.organization}
            </p>
          </div>

          <span
            className="
              shrink-0
              rounded-full
              border
              border-white/10
              bg-white/5
              px-3
              py-1
              text-[10px]
              uppercase
              tracking-wider
              text-white/50
            "
          >
            {item.type}
          </span>
        </div>

        <p className="mt-5 text-sm leading-6 text-white/50">
          {item.description}
        </p>

        <div className="mt-5 border-t border-white/10 pt-4">
          <span className="text-sm font-medium text-white/80">
            {item.result}
          </span>
        </div>
      </div>
    </div>
  );
}