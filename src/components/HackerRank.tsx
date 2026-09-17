import {
  Award,
  ExternalLink,
  CheckCircle2,
  Code2,
  Database,
  Terminal,
} from "lucide-react";
import { SiHackerrank } from "react-icons/si";

const username = "eevanasivabalaji";

const badges = [
  "Problem Solving",
  "Java",
  "SQL",
  "React",
];

const certifications = [
  {
    title: "Java (Basic)",
    url: "https://www.hackerrank.com/certificates/794056e5db9a",
  },
  {
    title: "SQL (Basic)",
    url: "https://www.hackerrank.com/certificates/f71b2f3e14c6",
  },
  {
    title: "SQL (Intermediate)",
    url: "https://www.hackerrank.com/certificates/eb805d308ea4",
  },
  {
    title: "Node (Basic)",
    url: "https://www.hackerrank.com/certificates/25cbb29b40ac",
  },
];

export default function HackerRank() {
  return (
    <section
      id="hackerrank"
      className="relative bg-[#050505] py-28"
    >
      <div className="mx-auto max-w-6xl px-6">

        {/* Header */}
        <div className="mb-14">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-cyan-400">
            07 / HackerRank
          </p>

          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <h2 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">
                Skills, verified.
              </h2>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-zinc-400 md:text-base">
                Coding practice, skill badges, and verified
                certifications from HackerRank.
              </p>
            </div>

            {/* Profile Button */}
            <a
              href={`https://www.hackerrank.com/profile/${username}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex w-fit items-center gap-3 border border-white/10 bg-white/[0.03] px-5 py-3 text-sm text-zinc-300 transition hover:border-cyan-400/40 hover:bg-cyan-400/[0.05] hover:text-white"
            >
              <SiHackerrank className="text-lg" />

              <span>View HackerRank</span>

              <ExternalLink
                size={15}
                className="text-zinc-500 transition group-hover:text-cyan-400"
              />
            </a>
          </div>
        </div>

        {/* Top Area */}
        <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 lg:grid-cols-[1fr_1.5fr]">

          {/* Profile */}
          <div className="bg-[#050505] p-8">
            <div className="mb-8 flex items-center gap-4">

              <div className="flex h-14 w-14 items-center justify-center border border-white/10 bg-white/[0.03] text-cyan-400">
                <SiHackerrank className="text-2xl" />
              </div>

              <div>
                <p className="text-lg font-medium text-white">
                  @{username}
                </p>

                <p className="mt-1 text-xs uppercase tracking-wider text-zinc-600">
                  HackerRank Profile
                </p>
              </div>

            </div>

            <p className="max-w-sm text-sm leading-7 text-zinc-500">
              Practicing programming, databases, and web development
              through HackerRank challenges and certifications.
            </p>

            <a
              href={`https://www.hackerrank.com/profile/${username}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-8 inline-flex items-center gap-2 text-sm text-zinc-400 transition hover:text-cyan-400"
            >
              Open profile

              <ExternalLink
                size={15}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
          </div>

          {/* Badges */}
          <div className="bg-[#050505] p-8">

            <div className="mb-6 flex items-center gap-3">
              <Award
                size={18}
                className="text-cyan-400"
              />

              <h3 className="text-sm font-medium uppercase tracking-wider text-zinc-300">
                Skill Badges
              </h3>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {badges.map((badge, index) => (
                <BadgeCard
                  key={badge}
                  name={badge}
                  index={index}
                />
              ))}
            </div>

          </div>
        </div>

        {/* Certifications */}
        <div className="mt-12">

          <div className="mb-6 flex items-end justify-between">
            <div>
              <p className="text-sm font-medium text-white">
                Verified Certifications
              </p>

              <p className="mt-1 text-xs text-zinc-600">
                HackerRank skill certifications
              </p>
            </div>

            <span className="font-mono text-xs text-zinc-700">
              04 CERTIFICATES
            </span>
          </div>

          <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-2">

            {certifications.map((certificate, index) => (
              <CertificateCard
                key={certificate.title}
                certificate={certificate}
                index={index}
              />
            ))}

          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 flex justify-center">
          <a
            href={`https://www.hackerrank.com/profile/${username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-sm text-zinc-400 transition hover:text-cyan-400"
          >
            Explore my HackerRank profile

            <ExternalLink
              size={15}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
        </div>

      </div>
    </section>
  );
}

/* ---------------------------------- */
/* Badge Card                          */
/* ---------------------------------- */

function BadgeCard({
  name,
  index,
}: {
  name: string;
  index: number;
}) {
  return (
    <div className="group relative border border-white/10 bg-white/[0.02] p-5 transition duration-300 hover:border-cyan-400/30 hover:bg-white/[0.04]">

      <span className="absolute right-5 top-5 font-mono text-[10px] text-zinc-700">
        0{index + 1}
      </span>

      <div className="mb-5 flex h-9 w-9 items-center justify-center border border-cyan-400/20 bg-cyan-400/5 text-cyan-400">
        {name === "SQL" ? (
          <Database size={17} />
        ) : name === "Problem Solving" ? (
          <Code2 size={17} />
        ) : (
          <Terminal size={17} />
        )}
      </div>

      <h4 className="text-sm font-medium text-white transition group-hover:text-cyan-400">
        {name}
      </h4>

      <div className="mt-3 flex items-center gap-2">
        <CheckCircle2
          size={13}
          className="text-cyan-400"
        />

        <span className="text-xs text-zinc-600">
          Skill Badge
        </span>
      </div>

    </div>
  );
}

/* ---------------------------------- */
/* Certificate Card                    */
/* ---------------------------------- */

function CertificateCard({
  certificate,
  index,
}: {
  certificate: {
    title: string;
    url: string;
  };
  index: number;
}) {
  return (
    <a
      href={certificate.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex items-center justify-between bg-[#050505] p-6 transition duration-300 hover:bg-[#0a0a0a]"
    >
      <div className="flex items-center gap-5">

        <div className="flex h-10 w-10 items-center justify-center border border-white/10 bg-white/[0.02] text-zinc-500 transition group-hover:border-cyan-400/30 group-hover:text-cyan-400">
          <Award size={18} />
        </div>

        <div>
          <h4 className="text-sm font-medium text-white transition group-hover:text-cyan-400">
            {certificate.title}
          </h4>

          <div className="mt-2 flex items-center gap-2">
            <CheckCircle2
              size={12}
              className="text-cyan-400"
            />

            <span className="text-xs text-zinc-600">
              Verified
            </span>
          </div>
        </div>

      </div>

      <div className="flex items-center gap-4">

        <span className="hidden font-mono text-xs text-zinc-700 sm:block">
          0{index + 1}
        </span>

        <ExternalLink
          size={16}
          className="text-zinc-700 transition group-hover:text-cyan-400"
        />

      </div>
    </a>
  );
}