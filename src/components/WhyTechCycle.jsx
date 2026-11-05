import { useInView } from "../hooks/useInView";
import { whyCards } from "../data/content";
import { IndianRupee, CheckCircle, Lightbulb, Leaf } from "lucide-react";

const iconMap = { IndianRupee, CheckCircle, Lightbulb, Leaf };

export default function WhyTechCycle() {
  const [ref, inView] = useInView();

  return (
    <section ref={ref} className="py-20 px-4 max-w-7xl mx-auto">
      <div className={`text-center mb-14 fade-up ${inView ? "visible" : ""}`}>
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text)]">
          Why TechCycle
        </h2>
        <p className="mt-3 text-[var(--color-muted)] max-w-2xl mx-auto">
          A smarter way to handle surplus electronics — good for business, great
          for the planet.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {whyCards.map((card, i) => {
          const Icon = iconMap[card.icon];
          return (
            <div
              key={i}
              className={`glass-sm card-hover flex flex-col items-center text-center p-6 fade-up ${
                inView ? "visible" : ""
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-full bg-[#0f766e] flex items-center justify-center mb-4">
                {Icon && <Icon className="w-6 h-6 text-white" />}
              </div>
              <h3 className="font-semibold text-[var(--color-text)] mb-2">
                {card.title}
              </h3>
              <p className="text-sm text-[var(--color-muted)]">
                {card.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
