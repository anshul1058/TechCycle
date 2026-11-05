import { Quote } from "lucide-react";
import { testimonials } from "../data/content";
import { useInView } from "../hooks/useInView";

export default function Testimonials() {
  const [ref, inView] = useInView();

  return (
    <section className="py-20 px-4" id="testimonials">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto fade-up ${inView ? "visible" : ""}`}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#12332f] mb-12">
          What our builders say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="glass-sm card-hover flex flex-col justify-between p-6"
            >
              <div>
                <Quote className="w-8 h-8 text-[#0f766e] opacity-40 mb-4" />
                <p className="italic text-[#12332f] leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/40">
                <p className="font-semibold text-[#12332f]">{t.name}</p>
                <p className="text-sm text-[#4d6b66]">{t.city}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
