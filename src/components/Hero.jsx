import { Leaf, ArrowRight } from "lucide-react";
import { useInView } from "../hooks/useInView";

export default function Hero() {
  const [ref, isVisible] = useInView({ threshold: 0.15 });

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden px-5 pt-28 pb-16 md:px-8"
      style={{ backgroundColor: "var(--color-bg)" }}
    >
      {/* Background blobs */}
      <div
        className="blob pointer-events-none absolute -top-20 -left-20 opacity-40"
        style={{
          width: 400,
          height: 400,
          background: "#5eead4",
        }}
      />
      <div
        className="blob pointer-events-none absolute -top-10 right-0 opacity-30"
        style={{
          width: 350,
          height: 350,
          background: "#a5b4fc",
        }}
      />
      <div
        className="blob pointer-events-none absolute bottom-10 left-1/2 -translate-x-1/2 opacity-30"
        style={{
          width: 300,
          height: 300,
          background: "#fcd34d",
        }}
      />

      <div
        ref={ref}
        className="relative z-10 mx-auto flex max-w-7xl flex-col items-center gap-12 md:flex-row md:gap-16 lg:gap-20"
      >
        {/* Left — text content */}
        <div
          className={`flex flex-1 flex-col items-start gap-6 fade-up ${
            isVisible ? "visible" : ""
          }`}
        >
          {/* Chip / badge */}
          <span className="glass-sm inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide text-[var(--color-accent)]">
            <Leaf size={14} />
            Sustainable tech for India
          </span>

          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-[var(--color-text)] sm:text-5xl lg:text-6xl">
            Build your own device.{" "}
            <span className="text-[var(--color-accent)]">
              Pay a fraction.
            </span>
          </h1>

          <p className="max-w-lg text-base leading-relaxed text-[var(--color-muted)] sm:text-lg">
            Affordable DIY gadget kits from repurposed electronics. Good for
            you. Better for the planet.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <a href="#kits" className="btn-accent inline-flex items-center gap-2">
              Browse kits
              <ArrowRight size={16} />
            </a>
            <a href="#how-it-works" className="btn-glass">
              How it works
            </a>
          </div>
        </div>

        {/* Right — image card */}
        <div className="flex flex-1 justify-center">
          <div className="glass card-hover max-w-md w-full p-3">
            <img
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop"
              alt="Close-up of circuit board components used in TechCycle kits"
              className="w-full rounded-2xl object-cover"
              loading="lazy"
            />
            <p className="mt-3 px-2 pb-1 text-center text-sm italic text-[var(--color-muted)]">
              Real components. Real skills.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
