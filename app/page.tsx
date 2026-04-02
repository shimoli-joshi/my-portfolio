import Link from "next/link";

// ─── Featured work data ───────────────────────────────────────────────────────
const PROJECTS = [
  {
    title: "Onboarding Redesign",
    category: "Product Design",
    description:
      "Reduced drop-off by 40% through a streamlined, contextual onboarding flow.",
    href: "/work/onboarding",
    accent: "#6366f1",
  },
  {
    title: "Design System",
    category: "Systems Design",
    description:
      "Built a token-based design system adopted across 3 product teams.",
    href: "/work/design-system",
    accent: "#10b981",
  },
  {
    title: "AI Search Interface",
    category: "AI / Interaction",
    description:
      "Explorations in natural language search UX for a B2B analytics platform.",
    href: "/work/ai-search",
    accent: "#f59e0b",
  },
];

// ─── Arrow icon ───────────────────────────────────────────────────────────────
function ArrowRight() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <main className="flex flex-col">
      {/* ── Hero ── */}
      <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 pt-24 pb-20">
        <div className="max-w-3xl">
          <p className="text-sm tracking-widest uppercase text-[#666] mb-6 font-mono">
            Product Designer
          </p>
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-[1.05] text-[#f2f2f2] mb-8">
            Hi, I&apos;m Shimoli.
            <br />
            <span className="text-[#666]">I design products</span>
            <br />
            people love to use.
          </h1>
          <p className="text-lg text-[#888] leading-relaxed max-w-xl mb-10">
            I work at the intersection of clarity, craft, and systems thinking
            — turning complex problems into experiences that feel inevitable.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/work"
              className="
                inline-flex items-center gap-2 px-5 py-2.5 rounded-full
                bg-[#f2f2f2] text-[#0d0d0d] text-sm font-medium
                hover:bg-white transition-colors duration-150
              "
            >
              View work
              <ArrowRight />
            </Link>
            <Link
              href="/about"
              className="
                inline-flex items-center gap-2 px-5 py-2.5 rounded-full
                border border-white/10 text-[#b3b3b3] text-sm
                hover:text-[#f2f2f2] hover:border-white/20 transition-colors duration-150
              "
            >
              About me
            </Link>
          </div>
        </div>
      </section>

      {/* ── Featured Work ── */}
      <section className="px-6 md:px-12 lg:px-24 pb-28">
        <div className="flex items-baseline justify-between mb-10">
          <h2 className="text-xs tracking-widest uppercase text-[#555] font-mono">
            Selected Work
          </h2>
          <Link
            href="/work"
            className="text-xs text-[#555] hover:text-[#b3b3b3] transition-colors duration-150 flex items-center gap-1.5"
          >
            All projects <ArrowRight />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {PROJECTS.map((project) => (
            <Link
              key={project.href}
              href={project.href}
              className="
                group relative flex flex-col justify-between
                rounded-2xl border border-white/6 bg-white/[0.03]
                p-7 min-h-[280px]
                hover:bg-white/[0.06] hover:border-white/10
                transition-all duration-200
              "
            >
              {/* Accent dot */}
              <div
                className="w-2 h-2 rounded-full mb-auto"
                style={{ backgroundColor: project.accent }}
              />

              <div className="mt-16">
                <p className="text-xs text-[#555] mb-2 font-mono tracking-wide">
                  {project.category}
                </p>
                <h3 className="text-lg font-medium text-[#f2f2f2] mb-2 leading-snug">
                  {project.title}
                </h3>
                <p className="text-sm text-[#666] leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="mt-6 flex items-center gap-1 text-xs text-[#555] group-hover:text-[#b3b3b3] transition-colors duration-150">
                View case study <ArrowRight />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Contact strip ── */}
      <section className="px-6 md:px-12 lg:px-24 pb-28">
        <div className="rounded-2xl border border-white/6 bg-white/[0.03] px-10 py-12 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-semibold text-[#f2f2f2] mb-2">
              Let&apos;s work together.
            </h2>
            <p className="text-[#666] text-sm">
              Open to full-time roles and select freelance projects.
            </p>
          </div>
          <a
            href="mailto:shimoli95@gmail.com"
            className="
              shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-full
              bg-[#f2f2f2] text-[#0d0d0d] text-sm font-medium
              hover:bg-white transition-colors duration-150
            "
          >
            Say hello <ArrowRight />
          </a>
        </div>
      </section>
    </main>
  );
}
