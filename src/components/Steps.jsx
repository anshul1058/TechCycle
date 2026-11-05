import { Package, BookOpen, ShieldCheck } from "lucide-react";
import { useInView } from "../hooks/useInView";
import { steps } from "../data/content";

const iconMap = { Package, BookOpen, ShieldCheck };

function StepCard({ step, index }) {
  const [ref, isVisible] = useInView();
  const Icon = iconMap[step.icon];

  return (
    <div
      ref={ref}
      className={`glass card-hover fade-up flex flex-col items-center text-center p-8 ${
        isVisible ? "visible" : ""
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="w-12 h-12 rounded-full bg-[#0f766e] text-white flex items-center justify-center font-bold text-lg mb-4">
        {index + 1}
      </div>
      {Icon && (
        <Icon className="w-8 h-8 text-[#0f766e] mb-4" strokeWidth={1.5} />
      )}
      <h3 className="text-[var(--color-text)] font-semibold text-lg mb-2">
        {step.title}
      </h3>
      <p className="text-[#4d6b66] leading-relaxed">{step.description}</p>
    </div>
  );
}

export default function Steps() {
  return (
    <section id="how-it-works" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-4">
            How it works
          </h2>
          <p className="text-[#4d6b66] text-lg max-w-2xl mx-auto">
            Three simple steps to give your tech a second life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <StepCard key={step.title} step={step} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
