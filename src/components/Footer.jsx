const quickLinks = [
  { label: "About", href: "#about" },
  { label: "Impact", href: "#impact" },
  { label: "FAQ", href: "#faq" },
  { label: "Privacy", href: "#" },
  { label: "Terms", href: "#" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#12332f] text-white/80 rounded-t-3xl mt-10">
      <div className="max-w-7xl mx-auto py-16 px-4">
        {/* Top row */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10 mb-12">
          {/* Logo + tagline */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
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
              <span className="text-xl font-bold text-white">TechCycle</span>
            </div>
            <p className="text-white/60 text-sm max-w-xs">
              Build it. Reuse it. Own it.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <p className="text-center text-sm text-white/40 mb-2">
            Made at MIT Academy of Engineering, Pune
          </p>
          <p className="text-center text-xs text-white/30">
            &copy; 2024 TechCycle. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
