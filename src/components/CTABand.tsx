"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function CTABand() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      id="book"
      className="py-24 lg:py-32 px-6 lg:px-10"
      style={{ background: "var(--ink-950)" }}
    >
      <div className="max-w-3xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="eyebrow mb-6"
          style={{ color: "var(--signal)" }}
        >
          BOOK A CONSULTATION
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="type-h2 font-bold text-paper-50 mb-6"
          style={{ fontFamily: "var(--font-inter, sans-serif)", fontWeight: 800 }}
        >
          One conversation before you borrow.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="type-body text-paper-200 mb-10"
          style={{ fontFamily: "var(--font-inter, sans-serif)" }}
        >
          A strategy session works through your current position, what you&apos;re trying to
          achieve, and whether — and how — lending fits that plan. No obligation. No
          product push. Just clarity.
        </motion.p>

        <motion.a
          href="mailto:hello@cfoonthegopro.com.au"
          initial={{ opacity: 0, scale: 0.97 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.45, delay: 0.3 }}
          whileHover={{ scale: 1.02, boxShadow: "0 0 0 3px rgba(199,123,61,0.25)" }}
          className="inline-flex items-center gap-3 px-8 py-4 font-semibold text-ink-950 rounded-sm transition-shadow duration-200"
          style={{
            background: "var(--signal)",
            fontSize: "1rem",
          }}
        >
          Book Your Strategy Consultation
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M3 8h10M8.5 4L13 8l-4.5 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.a>

        <p
          className="eyebrow mt-8"
          style={{ color: "var(--paper-200)", opacity: 0.35 }}
        >
          CFO On the Go Pro · ABN 00 000 000 000 ·{" "}
          Credit services via Intelligent Finance Specialists
        </p>
      </div>
    </section>
  );
}
