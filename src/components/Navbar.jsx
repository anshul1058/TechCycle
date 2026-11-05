import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "../data/content";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobile = () => setMobileOpen(false);

  return (
    <nav
      aria-label="Main navigation"
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-white/70 backdrop-blur-xl shadow-sm"
          : "bg-white/40 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 md:px-8">
        {/* Logo */}
        <a
          href="#home"
          className="flex items-center gap-2.5 text-[var(--color-text)]"
          aria-label="TechCycle home"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            fill="none"
            className="w-8 h-8"
          >
            <rect width="32" height="32" rx="8" fill="#0f766e" />
            <path
              d="M16 6C10.477 6 6 10.477 6 16s4.477 10 10 10 10-4.477 10-10"
              stroke="#fff"
              strokeWidth="2.2"
              strokeLinecap="round"
            />
            <path
              d="M22 6l4 0 0 4"
              stroke="#fff"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M26 6l-4.5 4.5"
              stroke="#fff"
              strokeWidth="2.2"
              strokeLinecap="round"
            />
          </svg>
          <span className="text-xl font-bold tracking-tight">TechCycle</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-[var(--color-muted)] hover:text-[var(--color-accent)] transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a href="#kits" className="btn-accent hidden md:inline-flex">
          Browse kits
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-xl text-[var(--color-text)] hover:bg-white/50 transition-colors"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu panel */}
      {mobileOpen && (
        <div className="md:hidden glass-sm mx-4 mb-3 p-5 flex flex-col gap-3 animate-[fadeIn_0.2s_ease]">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMobile}
              className="block rounded-xl px-4 py-2.5 text-sm font-medium text-[var(--color-text)] hover:bg-white/60 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#kits"
            onClick={closeMobile}
            className="btn-accent mt-1 text-center"
          >
            Browse kits
          </a>
        </div>
      )}
    </nav>
  );
}
