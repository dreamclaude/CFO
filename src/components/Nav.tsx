"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const links = [
  { label: "STRATEGY", href: "#strategy" },
  { label: "ABOUT", href: "#about" },
  { label: "WHO IT'S FOR", href: "#who" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-ink-900/95 backdrop-blur-sm border-b border-paper-200/10" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        {/* Wordmark */}
        <a href="#" className="flex flex-col leading-none">
          <span
            className="text-paper-50 font-bold tracking-tight"
            style={{ fontSize: "0.9rem", fontFamily: "var(--font-inter, sans-serif)" }}
          >
            CFO ON THE GO PRO
          </span>
          <span className="eyebrow" style={{ marginTop: "2px" }}>
            Strategy-First Property Finance
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="eyebrow hover:text-paper-50 transition-colors">
              {l.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#book"
          className="inline-flex items-center gap-2 px-5 py-2.5 text-ink-950 font-semibold rounded-sm transition-all duration-200 hover:scale-[1.02]"
          style={{
            background: "var(--signal)",
            fontSize: "0.8125rem",
            letterSpacing: "0.04em",
          }}
        >
          Book a Consultation
        </a>
      </nav>
    </motion.header>
  );
}
