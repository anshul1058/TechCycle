import { ArrowRight } from "lucide-react";
import { useInView } from "../hooks/useInView";
import { kits } from "../data/content";
import KitCard from "./KitCard";

export default function FeaturedKits() {
  const [ref, isVisible] = useInView();

  return (
    <section id="kits" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-4">
            Featured Kits
          </h2>
          <p className="text-[#4d6b66] text-lg max-w-2xl mx-auto">
            Curated kits from tested, graded components.
          </p>
        </div>

        <div
          ref={ref}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 fade-up ${
            isVisible ? "visible" : ""
          }`}
        >
          {kits.slice(0, 4).map((kit) => (
            <KitCard key={kit.id} kit={kit} />
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#kits"
            className="inline-flex items-center gap-2 text-[#0f766e] font-semibold hover:underline transition-colors"
          >
            View all kits
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
