"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const profiles = [
  {
    label: "STAGE",
    title: "2 - 4 investment properties",
    body: "You've made one or two moves. The next one is more complex, and the stakes are higher. You need a plan, not a product.",
  },
  {
    label: "MINDSET",
    title: "Skeptical of sales processes",
    body: "You've sat through a broker appointment and noticed the lender shortlist was suspiciously short. You want someone working for you.",
  },
  {
    label: "SITUATION",
    title: "Income is there - structure isn't",
    body: "Your earnings support more, but you're unclear on whether to go in personal name, a trust, or through super. These decisions compound.",
  },
  {
    label: "GOAL",
    title: "Wealth through property, long term",
    body: "Not a quick flip. A sequenced portfolio that still looks smart in fifteen years - with the tax position to match.",
  },
];

export default function WhoItsFor() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="who"
      className="py-24 lg:py-32 px-6 lg:px-10"
      style={{ background: "var(--ink-900)" }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p className="eyebrow mb-5" style={{ color: "var(--paper-200)", opacity: 0.5 }}>
            WHO IT&apos;S FOR
          </p>
          <h2
            className="type-h2 font-bold text-paper-50 max-w-xl mb-14"
            style={{ fontFamily: "var(--font-inter, sans-serif)", fontWeight: 800 }}
          >
            Built for a specific type of investor.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {profiles.map((p, i) => (
            <motion.div
              key={p.label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="border border-paper-200/10 rounded-sm p-8 hover:border-paper-200/20 transition-colors duration-300"
            >
              <p className="eyebrow mb-3" style={{ color: "var(--paper-200)", opacity: 0.45 }}>
                {p.label}
              </p>
              <h3
                className="text-paper-50 font-semibold mb-3"
                style={{ fontSize: "1.125rem", fontFamily: "var(--font-inter, sans-serif)" }}
              >
                {p.title}
              </h3>
              <p className="type-body text-paper-200" style={{ fontFamily: "var(--font-inter, sans-serif)" }}>
                {p.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
