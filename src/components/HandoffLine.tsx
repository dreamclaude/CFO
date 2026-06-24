"use client";

import { useEffect, useRef } from "react";

export default function HandoffLine() {
  const sectionRef = useRef<HTMLElement>(null);
  const lineRef = useRef<SVGPathElement>(null);
  const line2Ref = useRef<SVGPathElement>(null);

  useEffect(() => {
    let gsap: typeof import("gsap").gsap;
    let ScrollTrigger: typeof import("gsap/ScrollTrigger").ScrollTrigger;

    async function init() {
      const gsapModule = await import("gsap");
      const scrollModule = await import("gsap/ScrollTrigger");
      gsap = gsapModule.gsap;
      ScrollTrigger = scrollModule.ScrollTrigger;
      gsap.registerPlugin(ScrollTrigger);

      if (!sectionRef.current || !lineRef.current || !line2Ref.current) return;

      const totalLength = lineRef.current.getTotalLength();
      const total2Length = line2Ref.current.getTotalLength();

      // Set initial dasharray/dashoffset
      gsap.set(lineRef.current, {
        strokeDasharray: totalLength,
        strokeDashoffset: totalLength,
      });
      gsap.set(line2Ref.current, {
        strokeDasharray: total2Length,
        strokeDashoffset: total2Length,
      });

      // Scroll-scrubbed draw
      gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "bottom 40%",
          scrub: 1,
        },
      })
        .to(lineRef.current, {
          strokeDashoffset: 0,
          ease: "none",
          duration: 1,
        })
        .to(
          line2Ref.current,
          {
            strokeDashoffset: 0,
            ease: "none",
            duration: 1,
          },
          0.4 // starts 40% of the way through the first draw
        );
    }

    init();

    return () => {
      import("gsap/ScrollTrigger").then(({ ScrollTrigger: ST }) => {
        ST.getAll().forEach((t) => t.kill());
      });
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="strategy"
      className="py-24 lg:py-32 px-6 lg:px-10 overflow-hidden"
      style={{ background: "var(--ink-950)" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <p className="eyebrow mb-5" style={{ color: "var(--paper-200)", opacity: 0.6 }}>
          THE TWO-STEP MODEL
        </p>
        <h2
          className="type-h2 font-bold text-paper-50 max-w-2xl mb-16"
          style={{ fontFamily: "var(--font-inter, sans-serif)", fontWeight: 800 }}
        >
          Strategy comes before lending.
          <br />
          Always.
        </h2>

        {/* Animated handoff line + step cards */}
        <div className="relative">
          {/* SVG line running through both steps */}
          <div className="absolute left-0 right-0 top-[2.75rem] h-px pointer-events-none hidden md:block">
            <svg
              viewBox="0 0 1200 4"
              preserveAspectRatio="none"
              className="w-full h-1"
              style={{ overflow: "visible" }}
            >
              {/* Step 1 segment — copper */}
              <path
                ref={lineRef}
                d="M 0 2 L 575 2"
                stroke="var(--signal)"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
              />
              {/* Step 2 segment — ledger blue, picking up from midpoint */}
              <path
                ref={line2Ref}
                d="M 625 2 L 1200 2"
                stroke="var(--ledger-blue)"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
              />
              {/* Midpoint node */}
              <circle cx="600" cy="2" r="5" fill="var(--paper-50)" opacity="0.4" />
            </svg>
          </div>

          {/* Step cards */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
            {/* Step 1 — Strategy */}
            <div className="relative">
              {/* Number node */}
              <div
                className="w-11 h-11 rounded-sm flex items-center justify-center mb-8 font-bold text-ink-950"
                style={{ background: "var(--signal)", fontSize: "0.875rem", letterSpacing: "0.05em" }}
              >
                01
              </div>

              <p className="eyebrow mb-3" style={{ color: "var(--signal)" }}>
                STEP 1 — STRATEGY
              </p>
              <h3
                className="type-h3 font-bold text-paper-50 mb-4"
                style={{ fontFamily: "var(--font-inter, sans-serif)", fontWeight: 700 }}
              >
                CFO On the Go Pro
              </h3>
              <p className="type-body text-paper-200 mb-6" style={{ fontFamily: "var(--font-inter, sans-serif)" }}>
                Before a single loan application is lodged, we work through your full
                financial picture: tax position, entity structure, equity map, and a
                sequenced property plan built around your income — not a product.
              </p>

              <ul className="space-y-3">
                {[
                  "Review your current position honestly",
                  "Build a 5–10 year property roadmap",
                  "Model tax, SMSF, and ownership structure",
                  "Identify when — and whether — to borrow",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 type-caption text-paper-200">
                    <span
                      className="mt-0.5 shrink-0 w-1 h-1 rounded-full"
                      style={{ background: "var(--signal)", marginTop: "0.45em" }}
                    />
                    {item}
                  </li>
                ))}
              </ul>

              <p
                className="eyebrow mt-8"
                style={{ color: "var(--paper-200)", opacity: 0.45, fontSize: "0.625rem" }}
              >
                ACCOUNTANT · TAX ADVISER · FINANCIAL STRATEGIST
              </p>
            </div>

            {/* Step 2 — Lending */}
            <div className="relative md:mt-0">
              <div
                className="w-11 h-11 rounded-sm flex items-center justify-center mb-8 font-bold text-paper-50"
                style={{ background: "var(--ledger-blue)", fontSize: "0.875rem", letterSpacing: "0.05em" }}
              >
                02
              </div>

              <p className="eyebrow mb-3" style={{ color: "var(--ledger-blue)" }}>
                STEP 2 — LENDING
              </p>
              <h3
                className="type-h3 font-bold text-paper-50 mb-4"
                style={{ fontFamily: "var(--font-inter, sans-serif)", fontWeight: 700 }}
              >
                Intelligent Finance Specialists
              </h3>
              <p className="type-body text-paper-200 mb-6" style={{ fontFamily: "var(--font-inter, sans-serif)" }}>
                Once the strategy is clear, Intelligent Finance Specialists handles the
                credit side — lender selection, structure, and application — with the
                full context of your plan already in place.
              </p>

              <ul className="space-y-3">
                {[
                  "Lender selection aligned to your strategy, not incentive",
                  "Structure that protects future borrowing capacity",
                  "Application managed from submission to settlement",
                  "Ongoing review as your portfolio grows",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 type-caption text-paper-200">
                    <span
                      className="mt-0.5 shrink-0 w-1 h-1 rounded-full"
                      style={{ background: "var(--ledger-blue)", marginTop: "0.45em" }}
                    />
                    {item}
                  </li>
                ))}
              </ul>

              <p
                className="eyebrow mt-8"
                style={{ color: "var(--paper-200)", opacity: 0.45, fontSize: "0.625rem" }}
              >
                CREDIT ADVISER · MORTGAGE BROKER · FINANCE SPECIALIST
              </p>
            </div>
          </div>
        </div>

        {/* Bridge statement */}
        <div
          className="mt-20 pt-12 border-t"
          style={{ borderColor: "rgba(228,224,213,0.1)" }}
        >
          <p
            className="type-h3 text-paper-200 max-w-2xl"
            style={{ fontFamily: "var(--font-inter, sans-serif)" }}
          >
            Two separate entities. One sequenced process.{" "}
            <span className="text-paper-50 font-semibold">
              The strategy always comes first.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
