import { useInView } from "../hooks/useInView";
import { retailerPoints } from "../data/content";
import { Wallet, Truck, Coins } from "lucide-react";

const iconMap = { Wallet, Truck, Coins };

export default function Retailers() {
  const [ref, inView] = useInView();

  return (
    <section id="retailers" ref={ref} className="py-20 px-4 max-w-7xl mx-auto">
      <div
        className={`glass max-w-5xl mx-auto p-8 md:p-14 text-center fade-up ${
          inView ? "visible" : ""
        }`}
      >
        <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-text)]">
          Turn unsold stock into tokens.
        </h2>
        <p className="mt-3 text-[var(--color-muted)] max-w-xl mx-auto">
          Join 200+ retailers already recovering value from dead stock.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          {retailerPoints.map((point, i) => {
            const Icon = iconMap[point.icon];
            return (
              <div
                key={i}
                className={`flex flex-col items-center fade-up ${
                  inView ? "visible" : ""
                }`}
                style={{ transitionDelay: `${(i + 1) * 120}ms` }}
              >
                <div className="w-12 h-12 rounded-full bg-[#0f766e]/10 flex items-center justify-center mb-3">
                  {Icon && <Icon className="w-5 h-5 text-[#0f766e]" />}
                </div>
                <h3 className="font-semibold text-[var(--color-text)] mb-1">
                  {point.title}
                </h3>
                <p className="text-sm text-[var(--color-muted)]">
                  {point.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-10">
          <button className="btn-accent">Register your store</button>
        </div>
      </div>
    </section>
  );
}
