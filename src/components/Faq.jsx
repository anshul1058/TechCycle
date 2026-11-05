import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqs } from "../data/content";
import { useInView } from "../hooks/useInView";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);
  const [ref, inView] = useInView();

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="py-20 px-4" id="faq">
      <div
        ref={ref}
        className={`max-w-3xl mx-auto fade-up ${inView ? "visible" : ""}`}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#12332f] mb-12">
          Frequently asked questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            const panelId = `faq-panel-${i}`;
            const headerId = `faq-header-${i}`;

            return (
              <div key={i} className="glass-sm overflow-hidden">
                <button
                  id={headerId}
                  role="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between p-5 text-left cursor-pointer"
                >
                  <span className="font-semibold text-[#12332f] pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#0f766e] shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={headerId}
                  className="transition-all duration-300 ease-in-out"
                  style={{
                    maxHeight: isOpen ? "500px" : "0px",
                    opacity: isOpen ? 1 : 0,
                    overflow: "hidden",
                  }}
                >
                  <p className="px-5 pb-5 text-[#4d6b66] leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
