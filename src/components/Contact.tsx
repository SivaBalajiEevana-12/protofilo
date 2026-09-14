import {
  ArrowUpRight,
  MapPin,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#050505] px-6 py-32 text-white md:px-12 lg:px-20"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="contact-grid absolute inset-0 opacity-20" />

        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-[500px]
            w-[500px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-cyan-400/[0.04]
            blur-[130px]
          "
        />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Section Label */}
        <div className="mb-16 flex items-center gap-4">
          <span className="text-sm font-medium text-cyan-400">
            04
          </span>

          <span className="h-px w-12 bg-white/20" />

          <span className="text-sm uppercase tracking-[0.25em] text-white/30">
            Contact
          </span>
        </div>

        {/* Main */}
        <div className="grid gap-16 lg:grid-cols-[1fr_0.45fr]">
          {/* Left */}
          <div>
            <h2 className="max-w-4xl text-5xl font-bold leading-[0.95] tracking-[-0.04em] sm:text-6xl md:text-7xl">
              Have a problem
              <br />

              <span className="text-white/25">
                worth building?
              </span>
            </h2>

            <p className="mt-8 max-w-xl text-base leading-7 text-white/40 md:text-lg">
              Let's talk about internships, software projects,
              or interesting engineering problems.
            </p>

            {/* Email */}
            <a
              href="mailto:eevanasivabalaji@gmail.com"
              className="
                group
                mt-10
                inline-flex
                items-center
                gap-3
                border-b
                border-white/20
                pb-2
                text-lg
                font-medium
                text-white
                transition-colors
                hover:border-cyan-400
                hover:text-cyan-400
                md:text-2xl
              "
            >
              eevanasivabalaji@gmail.com

              <ArrowUpRight
                className="
                  h-5
                  w-5
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                "
              />
            </a>
          </div>

          {/* Right */}
          <div className="lg:pt-4">
            {/* Social */}
            <div>
              <p className="mb-5 text-xs uppercase tracking-[0.2em] text-white/25">
                Find me online
              </p>

              <div className="space-y-3">
                <SocialLink
                  href="https://github.com/SivaBalajiEevana-12"
                  label="GitHub"
                >
                 <FaGithub className="h-4 w-4" />
                </SocialLink>

                <SocialLink
                  href="https://linkedin.com/in/sivabalajieevana"
                  label="LinkedIn"
                >
                  <FaLinkedin className="h-4 w-4" />
                </SocialLink>
              </div>
            </div>

            {/* Location */}
            <div className="mt-12 border-t border-white/10 pt-8">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 text-cyan-400/70" />

                <div>
                  <p className="text-sm text-white/60">
                    Visakhapatnam, India
                  </p>

                  <p className="mt-1 text-xs text-white/25">
                    Available for opportunities
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-32 border-t border-white/10 pt-6">
          <div className="flex flex-col justify-between gap-4 text-xs text-white/25 sm:flex-row sm:items-center">
            <p>
              © {new Date().getFullYear()} Siva Balaji Eevana
            </p>

            <p className="flex items-center gap-2">
              Built with
              <span className="text-white/50">
                React · TypeScript · Tailwind
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="
        group
        flex
        items-center
        justify-between
        rounded-xl
        border
        border-white/10
        bg-white/[0.02]
        px-4
        py-4
        transition-all
        duration-300
        hover:border-cyan-400/30
        hover:bg-white/[0.05]
      "
    >
      <div className="flex items-center gap-3">
        <div className="text-white/40 transition-colors group-hover:text-cyan-400">
          {children}
        </div>

        <span className="text-sm text-white/50 transition-colors group-hover:text-white">
          {label}
        </span>
      </div>

      <ArrowUpRight
        className="
          h-4
          w-4
          text-white/20
          transition-all
          duration-300
          group-hover:-translate-y-1
          group-hover:translate-x-1
          group-hover:text-cyan-400
        "
      />
    </a>
  );
}