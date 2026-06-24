"use client";

import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay },
});

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-end pb-24 px-6 lg:px-10 overflow-hidden"
      style={{ background: "var(--ink-950)" }}
    >
      {/* Skyline silhouette — pure CSS geometric shapes */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{ opacity: 0.07 }}
      >
        <SkylineSVG />
      </div>

      {/* Noise grain overlay */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.08'/%3E%3C/svg%3E")`,
          backgroundSize: "200px 200px",
          opacity: 0.4,
        }}
      />

      <div className="relative max-w-7xl mx-auto w-full">
        {/* Eyebrow */}
        <motion.p {...fadeUp(0.1)} className="eyebrow mb-6" style={{ color: "var(--signal)" }}>
          TRIPLE-QUALIFIED · ACCOUNTANT-LED · STRATEGY FIRST
        </motion.p>

        {/* Headline */}
        <motion.h1
          {...fadeUp(0.2)}
          className="type-display font-bold text-paper-50 max-w-3xl"
          style={{ fontFamily: "var(--font-inter, sans-serif)", fontWeight: 800 }}
        >
          Stop Letting the Bank Decide
          <br />
          Your Financial Future.
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          {...fadeUp(0.35)}
          className="mt-6 type-h3 text-paper-200 max-w-xl font-normal"
          style={{ fontFamily: "var(--font-inter, sans-serif)" }}
        >
          Strategy first. Lending second.
          <br />
          Most investors get this backwards — and pay for it for years.
        </motion.p>

        {/* CTA row */}
        <motion.div {...fadeUp(0.45)} className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#book"
            className="inline-flex items-center gap-2 px-7 py-4 text-ink-950 font-semibold rounded-sm transition-all duration-200 hover:scale-[1.02] hover:shadow-lg"
            style={{
              background: "var(--signal)",
              boxShadow: "0 0 0 1px rgba(199,123,61,0.3)",
            }}
          >
            Book Your Strategy Consultation
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M3 7h8M7.5 3.5L11 7l-3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </motion.div>

        {/* Two-entity disclosure */}
        <motion.div
          {...fadeUp(0.55)}
          className="mt-10 flex flex-wrap gap-x-8 gap-y-1"
        >
          <span className="eyebrow flex items-center gap-2">
            <span
              className="inline-block w-2 h-2 rounded-full"
              style={{ background: "var(--signal)" }}
            />
            Strategy via CFO On the Go Pro
          </span>
          <span className="eyebrow flex items-center gap-2">
            <span
              className="inline-block w-2 h-2 rounded-full"
              style={{ background: "var(--ledger-blue)" }}
            />
            Lending via Intelligent Finance Specialists
          </span>
        </motion.div>
      </div>
    </section>
  );
}

function SkylineSVG() {
  return (
    <svg
      viewBox="0 0 1440 400"
      preserveAspectRatio="xMidYMax meet"
      className="absolute bottom-0 w-full"
      fill="var(--paper-50)"
    >
      {/* Abstract city silhouette — geometric rectangles of varying heights */}
      <rect x="0" y="280" width="40" height="120" />
      <rect x="44" y="240" width="30" height="160" />
      <rect x="78" y="200" width="50" height="200" />
      <rect x="132" y="260" width="25" height="140" />
      <rect x="160" y="180" width="60" height="220" />
      <rect x="224" y="220" width="35" height="180" />
      <rect x="263" y="160" width="45" height="240" />
      <rect x="312" y="250" width="28" height="150" />
      <rect x="344" y="200" width="55" height="200" />
      <rect x="403" y="230" width="32" height="170" />
      <rect x="438" y="140" width="70" height="260" />
      <rect x="512" y="210" width="40" height="190" />
      <rect x="556" y="170" width="50" height="230" />
      <rect x="610" y="240" width="30" height="160" />
      <rect x="644" y="120" width="80" height="280" />
      <rect x="728" y="200" width="35" height="200" />
      <rect x="767" y="160" width="55" height="240" />
      <rect x="826" y="220" width="40" height="180" />
      <rect x="870" y="180" width="45" height="220" />
      <rect x="919" y="250" width="30" height="150" />
      <rect x="953" y="130" width="75" height="270" />
      <rect x="1032" y="210" width="38" height="190" />
      <rect x="1074" y="190" width="50" height="210" />
      <rect x="1128" y="260" width="28" height="140" />
      <rect x="1160" y="150" width="65" height="250" />
      <rect x="1229" y="220" width="35" height="180" />
      <rect x="1268" y="200" width="48" height="200" />
      <rect x="1320" y="270" width="30" height="130" />
      <rect x="1354" y="180" width="55" height="220" />
      <rect x="1413" y="240" width="27" height="160" />
    </svg>
  );
}
