import {
  Braces,
  
  Code2,
  Database,
 
  Globe,
  Layers3,
  MessageCircle,
  Server,

  Wrench,
} from "lucide-react";

const categories = [
  {
    title: "Languages",
    icon: Code2,
    items: ["Java", "JavaScript", "TypeScript", "Python"],
  },
  {
    title: "Frontend",
    icon: Globe,
    items: ["React", "HTML", "CSS", "Tailwind CSS", "Bootstrap"],
  },
  {
    title: "Backend",
    icon: Server,
    items: ["Node.js", "Express.js", "REST APIs"],
  },
  {
    title: "Databases",
    icon: Database,
    items: ["MongoDB", "SQL"],
  },
  {
    title: "AI / GenAI",
    icon: Braces,
    items: ["RAG", "Embeddings", "Vector Databases", "LLMs"],
  },
  {
    title: "Tools & DevOps",
    icon: Wrench,
    items: ["Git", "GitHub", "Linux", "Postman", "CI/CD"],
  },
  {
    title: "Integrations",
    icon: Layers3,
    items: ["Razorpay", "Gupshup", "Cloud Deployment"],
  },
  {
  title: "CS Fundamentals",
  icon: Layers3,
  items: [
    "DSA",
    "OOP",
    "DBMS",
    "Operating Systems",
    "Computer Networks",
    "Problem Solving",
  ],
},
{
  title: "Spoken Languages",
  icon: MessageCircle,
  items: ["English", "Telugu"],
},
];

export default function TechStack() {
  return (
    <section className="relative border-t border-white/10 bg-[#050505] px-6 py-28">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16 max-w-3xl">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-cyan-400">
            05 / Tech Stack
          </p>

          <h2 className="text-4xl font-semibold tracking-tight text-white md:text-6xl">
            Tools I use to
            <br />
            <span className="text-white/40">build things.</span>
          </h2>
        </div>

        {/* Stack Grid */}
        <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <div
                key={category.title}
                className="group bg-[#050505] p-7 transition-colors duration-300 hover:bg-white/[0.03]"
              >
                <div className="mb-8 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Icon
                      size={18}
                      strokeWidth={1.5}
                      className="text-white/50 transition-colors group-hover:text-cyan-400"
                    />

                    <h3 className="text-sm font-medium text-white">
                      {category.title}
                    </h3>
                  </div>

                  <span className="text-xs text-white/20">
                    {String(category.items.length).padStart(2, "0")}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <span
                      key={item}
                      className="border border-white/10 px-3 py-1.5 text-xs text-white/50 transition-all duration-300 hover:border-cyan-400/40 hover:text-white"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}