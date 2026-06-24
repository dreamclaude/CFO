"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const mistakes = [
  {
    num: "01",
    title: "Going to the bank first",
    detail: "Getting borrowing capacity before you know what you actually need — letting the bank frame the question.",
  },
  {
    num: "02",
    title: "Focusing only on interest rates",
    detail: "The rate is one variable. Structure, offset, entity, and timing move more money than 0.2% across a portfolio.",
  },
  {
    num: "03",
    title: "No long-term strategy",
    detail: "Buying a single property with no exit plan or sequencing — then wondering why equity is stuck.",
  },
  {
    num: "04",
    title: "Wrong ownership structure",
    detail: "The right entity at acquisition costs almost nothing. Restructuring later can cost tens of thousands.",
  },
  {
    num: "05",
    title: "Ignoring tax and SMSF",
    detail: "Missing the SMSF window or mis-timing depreciation schedules — paying for it at the worst possible moment.",
  },
  {
    num: "06",
    title: "Underestimating cash flow",
    detail: "Running projections on best-case vacancy rates and forgetting maintenance, land tax, and buffer reserves.",
  },
  {
    num: "07",
    title: "No independent advocate",
    detail: "Relying on a broker whose incentive is a completed deal, not your 10-year position.",
  },
];

function MistakeCard({ num, title, detail, index }: { num: string; title: string; detail: string; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
      className="group relative border border-paper-200/10 rounded-sm p-6 cursor-default hover:border-paper-200/25 transition-colors duration-300"
      style={{ background: "rgba(18,24,22,0.6)" }}
    >
      <span className="eyebrow block mb-3" style={{ color: "var(--signal)" }}>
        {num}
      </span>
      <h3
        className="text-paper-50 font-semibold mb-2"
        style={{ fontSize: "1.0625rem", fontFamily: "var(--font-inter, sans-serif)" }}
      >
        {title}
      </h3>
      <p className="type-caption text-paper-200 leading-relaxed">{detail}</p>
    </motion.div>
  );
}

export default function Problem() {
  const headRef = useRef<HTMLDivElement>(null);
  const headInView = useInView(headRef, { once: true, margin: "-60px" });

  return (
    <section
      className="py-24 lg:py-32 px-6 lg:px-10"
      style={{ background: "var(--paper-50)" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section label */}
        <motion.div
          ref={headRef}
          initial={{ opacity: 0, y: 12 }}
          animate={headInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p className="eyebrow mb-5" style={{ color: "var(--ink-950)", opacity: 0.5 }}>
            THE PROBLEM
          </p>
          <h2
            className="type-h2 font-bold text-ink-950 max-w-2xl mb-4"
            style={{ fontFamily: "var(--font-inter, sans-serif)", fontWeight: 800 }}
          >
            Most People Start in the Wrong Place
          </h2>
          <p
            className="type-body text-ink-950/70 max-w-xl mb-14"
            style={{ fontFamily: "var(--font-inter, sans-serif)" }}
          >
            These seven mistakes happen before most investors have signed a single contract.
            None of them are obvious until you&apos;re already paying for them.
          </p>
        </motion.div>

        {/* Mistakes grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {mistakes.slice(0, 6).map((m, i) => (
            <MistakeCard key={m.num} {...m} index={i} />
          ))}
          {/* 7th card spans full width of last row on larger screens */}
          <div className="sm:col-span-2 lg:col-span-3 xl:col-span-4">
            <MistakeCard {...mistakes[6]} index={6} />
          </div>
        </div>

        {/* Pull quote / truth statement */}
        <motion.blockquote
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-20 border-l-2 pl-8"
          style={{ borderColor: "var(--signal)" }}
        >
          <p
            className="type-h2 font-bold text-ink-950 max-w-3xl"
            style={{ fontFamily: "var(--font-inter, sans-serif)", fontWeight: 800 }}
          >
            The bank works for the bank.
            <br />
            We help you understand your position first.
          </p>
        </motion.blockquote>
      </div>
    </section>
  );
}
