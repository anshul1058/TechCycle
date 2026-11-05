import { useState, useEffect, useRef, useCallback } from "react";
import { useInView } from "../hooks/useInView";
import { impactStats } from "../data/content";

function formatNumber(value, decimals) {
  if (decimals > 0) {
    return value.toFixed(decimals);
  }
  return value.toLocaleString("en-IN");
}

function CountUp({ stat, start }) {
  const { value, suffix = "", prefix = "", label } = stat;
  const [display, setDisplay] = useState(0);
  const rafRef = useRef(null);
  const startTimeRef = useRef(null);
  const duration = 2000;
  const decimals = String(value).includes(".") ? String(value).split(".")[1].length : 0;

  const prefersReduced =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const animate = useCallback(
    (timestamp) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const elapsed = timestamp - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(eased * value);

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      } else {
        setDisplay(value);
      }
    },
    [value]
  );

  useEffect(() => {
    if (!start) return;

    if (prefersReduced) {
      setDisplay(value);
      return;
    }

    startTimeRef.current = null;
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [start, value, animate, prefersReduced]);

  return (
    <div className="text-center py-4">
      <p className="text-4xl md:text-5xl font-bold tracking-tight text-white">
        {prefix}
        {formatNumber(display, decimals)}
        {suffix}
      </p>
      <p className="mt-2 text-sm md:text-base text-white/80 uppercase tracking-widest">
        {label}
      </p>
    </div>
  );
}

export default function ImpactStats() {
  const [ref, inView] = useInView();
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (inView && !hasAnimated) setHasAnimated(true);
  }, [inView, hasAnimated]);

  return (
    <section
      id="impact"
      ref={ref}
      className={`bg-gradient-to-r from-[#0f766e] to-[#14b8a6] rounded-3xl max-w-6xl mx-auto my-4 py-16 px-4 fade-up ${
        inView ? "visible" : ""
      }`}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {impactStats.map((stat, i) => (
          <CountUp key={i} stat={stat} start={hasAnimated} />
        ))}
      </div>
    </section>
  );
}
