"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Globe } from "@/components/ui/globe";

const EASE = [0.16, 1, 0.3, 1] as const;

const stats = [
  { value: "8", label: "Capital Cities", accent: "#1995C4" },
  { value: "30+", label: "Years Experience", accent: "#CC2027" },
  { value: "100%", label: "Strategy-First", accent: "#3D8B37" },
];

export default function GlobeSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      style={{
        backgroundColor: "#0A1628",
        padding: "112px 24px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Ambient glow behind globe */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          right: "8%",
          transform: "translateY(-50%)",
          width: "560px",
          height: "560px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(25,149,196,0.12) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "50%",
          right: "8%",
          transform: "translateY(-50%)",
          width: "380px",
          height: "380px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(204,32,39,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        ref={ref}
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "80px",
          alignItems: "center",
        }}
        className="globe-grid"
      >
        {/* LEFT — Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.85, ease: EASE }}
        >
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: EASE }}
            style={{
              color: "#1995C4",
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              display: "block",
              marginBottom: "20px",
            }}
          >
            Australia Wide
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.75, delay: 0.08, ease: EASE }}
            style={{
              fontSize: "clamp(2rem, 3.8vw, 3.25rem)",
              fontWeight: 800,
              color: "white",
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              marginBottom: "24px",
            }}
          >
            CFO-Grade Strategy,<br />
            <span style={{ color: "#1995C4" }}>Wherever You Are.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.16, ease: EASE }}
            style={{
              fontSize: "17px",
              color: "#94A3B8",
              lineHeight: 1.8,
              marginBottom: "48px",
              maxWidth: "480px",
            }}
          >
            We serve families, professionals, and business owners across every
            Australian state and territory. Executive-level financial strategy
            is no longer reserved for corporations &mdash; or a single postcode.
          </motion.p>

          {/* Stat row */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.28, ease: EASE }}
            style={{
              display: "flex",
              gap: "0",
              borderTop: "1px solid rgba(255,255,255,0.07)",
              paddingTop: "32px",
            }}
          >
            {stats.map((s, i) => (
              <div
                key={s.label}
                style={{
                  flex: 1,
                  paddingRight: i < stats.length - 1 ? "24px" : 0,
                  marginRight: i < stats.length - 1 ? "24px" : 0,
                  borderRight:
                    i < stats.length - 1
                      ? "1px solid rgba(255,255,255,0.08)"
                      : "none",
                }}
              >
                <p
                  style={{
                    fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                    fontWeight: 800,
                    color: s.accent,
                    lineHeight: 1,
                    letterSpacing: "-0.04em",
                    marginBottom: "6px",
                  }}
                >
                  {s.value}
                </p>
                <p style={{ fontSize: "12px", color: "#475569", letterSpacing: "0.04em" }}>
                  {s.label}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* RIGHT — Globe */}
        <motion.div
          initial={{ opacity: 0, scale: 0.88 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1.1, delay: 0.1, ease: EASE }}
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Outer ring */}
          <div
            style={{
              position: "absolute",
              inset: "-16px",
              borderRadius: "50%",
              border: "1px solid rgba(25,149,196,0.1)",
              pointerEvents: "none",
            }}
          />
          {/* Inner ring */}
          <div
            style={{
              position: "absolute",
              inset: "8px",
              borderRadius: "50%",
              border: "1px solid rgba(25,149,196,0.06)",
              pointerEvents: "none",
            }}
          />

          <div style={{ width: "100%", maxWidth: "480px" }}>
            <Globe />
          </div>

          {/* Australia label chip */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6, ease: EASE }}
            style={{
              position: "absolute",
              bottom: "12%",
              left: "-8px",
              backgroundColor: "rgba(10,22,40,0.92)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(25,149,196,0.3)",
              borderLeft: "3px solid #1995C4",
              borderRadius: "10px",
              padding: "12px 20px",
            }}
          >
            <p style={{ color: "#1995C4", fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", marginBottom: "2px" }}>
              AUSTRALIA WIDE
            </p>
            <p style={{ color: "white", fontSize: "14px", fontWeight: 600 }}>
              All States &amp; Territories
            </p>
          </motion.div>

          {/* Drag hint */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 1.0 }}
            style={{
              position: "absolute",
              bottom: "-28px",
              width: "100%",
              textAlign: "center",
              color: "#334155",
              fontSize: "11px",
              letterSpacing: "0.1em",
              fontWeight: 500,
            }}
          >
            Drag to rotate
          </motion.p>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .globe-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
