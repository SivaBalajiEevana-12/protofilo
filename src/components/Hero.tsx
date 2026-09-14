import { useEffect, useRef } from "react";
import { ArrowDown, Mail } from "lucide-react";
import { FaGithub,FaLinkedin } from "react-icons/fa";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const hero = heroRef.current;

    if (!hero) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = hero.getBoundingClientRect();

      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      hero.style.setProperty("--mouse-x", `${x}`);
      hero.style.setProperty("--mouse-y", `${y}`);
    };

    hero.addEventListener("mousemove", handleMouseMove);

    return () => {
      hero.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="hero relative min-h-screen overflow-hidden bg-[#050505] text-white"
    >
      {/* 3D Grid Background */}
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="grid-3d absolute inset-[-50%]" />
      </div>

      {/* Center Glow */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[500px]
          w-[500px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-cyan-500/10
          blur-[120px]
        "
      />

      {/* Navbar */}
      <nav className="relative z-20 flex items-center justify-between px-6 py-6 md:px-12 lg:px-20">
        {/* Logo */}
        <div className="text-lg font-semibold tracking-tight">
          SB<span className="text-cyan-400">.</span>
        </div>

        {/* Navigation */}
        <div className="hidden gap-8 text-sm text-white/60 md:flex">
          <a
            href="#about"
            className="transition-colors hover:text-white"
          >
            About
          </a>

          <a
            href="#projects"
            className="transition-colors hover:text-white"
          >
            Projects
          </a>

          <a
            href="#skills"
            className="transition-colors hover:text-white"
          >
            Skills
          </a>

          <a
            href="#journey"
            className="transition-colors hover:text-white"
          >
            Journey
          </a>
        </div>

        {/* Contact */}
        <a
          href="mailto:eevanasivabalaji@gmail.com"
          className="inline-flex items-center justify-center rounded-md border px-4 py-2 text-sm font-medium transition-colors
            border-white/20
            bg-white/5
            text-white
            hover:bg-white/10
            hover:text-white
          "
        >
          Let's Talk
        </a>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-90px)] max-w-7xl items-center px-6 pb-20 md:px-12 lg:px-20">
        <div className="grid w-full items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          {/* LEFT CONTENT */}
          <div>
            {/* Small Label */}
            <p className="mb-5 flex items-center gap-3 text-sm uppercase tracking-[0.3em] text-cyan-400">
              <span className="h-px w-8 bg-cyan-400" />
              Full Stack Developer
            </p>

            {/* Name */}
            <h1 className="max-w-4xl text-5xl font-bold leading-[0.95] tracking-[-0.04em] sm:text-6xl md:text-7xl lg:text-8xl">
              Siva Balaji
              <br />

              <span className="text-white/20">
                Eevana<span className="text-cyan-400">.</span>
              </span>
            </h1>

            {/* Description */}
            <p className="mt-8 max-w-xl text-base leading-7 text-white/50 md:text-lg">
              Computer Science undergraduate building scalable full-stack
              applications, backend systems and intelligent web experiences.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-md px-6 py-3 text-sm font-medium
                  bg-white
                  text-black
                  transition-transform
                  hover:-translate-y-1
                  hover:bg-white/90
                "
              >
                View My Work
                <ArrowDown className="ml-2 h-4 w-4" />
              </a>

              <Button
                size="lg"
                variant="outline"
                className="
                  border-white/20
                  bg-white/5
                  text-white
                  hover:bg-white/10
                  hover:text-white
                "
              >
                Download Resume
              </Button>
            </div>

            {/* Social Links */}
            <div className="mt-10 flex items-center gap-3">
              <SocialButton href="https://github.com/SivaBalajiEevana-12">
                <FaGithub className="h-4 w-4" />
              </SocialButton>

              <SocialButton href="https://linkedin.com/in/sivabalajieevana">
                <FaLinkedin className="h-4 w-4" />  
              </SocialButton>

              <SocialButton href="mailto:eevanasivabalaji@gmail.com">
                <Mail className="h-4 w-4" />
              </SocialButton>
            </div>
          </div>

          {/* RIGHT / PROFILE */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Decorative Circle */}
            <div
              className="
                absolute
                h-[320px]
                w-[320px]
                rounded-full
                border
                border-cyan-400/20
                transition-transform
                duration-500
                md:h-[450px]
                md:w-[450px]
              "
              style={{
                transform: `
                  translate(
                    calc(var(--mouse-x, 0) * 20px),
                    calc(var(--mouse-y, 0) * 20px)
                  )
                `,
              }}
            />

            {/* Profile Image */}
            <div
              className="
                relative
                z-10
                h-[360px]
                w-[300px]
                overflow-hidden
                rounded-[2rem]
                border
                border-white/10
                bg-white/5
                shadow-2xl
                transition-transform
                duration-300
                md:h-[500px]
                md:w-[400px]
              "
              style={{
                transform: `
                  perspective(1000px)
                  rotateY(calc(var(--mouse-x, 0) * 8deg))
                  rotateX(calc(var(--mouse-y, 0) * -8deg))
                  translateZ(30px)
                `,
              }}
            >
              <img
                src="/profile.jpg"
                alt="Siva Balaji"
                className="
                  h-full
                  w-full
                  object-cover
                  grayscale
                  transition
                  duration-700
                  hover:grayscale-0
                "
              />

              {/* Image Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

              {/* Image Label */}
              <div className="absolute bottom-6 left-6">
                <p className="text-xs uppercase tracking-[0.3em] text-white/50">
                  Developer
                </p>

                <p className="mt-1 text-xl font-semibold">
                  Building things
                </p>
              </div>
            </div>

            {/* Floating Tech Badges */}
            <TechBadge
              text="React"
              className="left-0 top-16 md:-left-8"
            />

            <TechBadge
              text="Node.js"
              className="bottom-24 right-0 md:-right-8"
            />

            <TechBadge
              text="TypeScript"
              className="right-4 top-8 md:right-0"
            />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2 text-xs uppercase tracking-[0.25em] text-white/30">
          Scroll

          <div className="h-10 w-px bg-gradient-to-b from-white/30 to-transparent" />
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- */
/* Social Button */
/* -------------------------------- */

function SocialButton({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      className="
        flex
        h-10
        w-10
        items-center
        justify-center
        rounded-full
        border
        border-white/10
        bg-white/5
        text-sm
        font-semibold
        text-white/60
        transition-all
        hover:-translate-y-1
        hover:border-cyan-400/40
        hover:bg-cyan-400/10
        hover:text-cyan-400
      "
    >
      {children}
    </a>
  );
}

/* -------------------------------- */
/* Floating Technology Badge */
/* -------------------------------- */

function TechBadge({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  return (
    <div
      className={`
        absolute
        z-20
        rounded-full
        border
        border-white/10
        bg-black/60
        px-4
        py-2
        text-xs
        font-medium
        text-white/70
        shadow-xl
        backdrop-blur-xl
        ${className}
      `}
    >
      <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-cyan-400" />
      {text}
    </div>
  );
}