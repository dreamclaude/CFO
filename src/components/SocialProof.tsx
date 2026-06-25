'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const statChips = [
  {
    stat: '30 → 11',
    unit: 'years',
    label: 'Loan term reduction through structured cash flow strategy',
    accent: '#1995C4',
  },
  {
    stat: '3',
    unit: 'properties',
    label: 'Built in 5 years with a clear acquisition roadmap',
    accent: '#3D8B37',
  },
  {
    stat: 'SMSF',
    unit: 'integrated',
    label: 'Superannuation integrated into long term wealth strategy',
    accent: '#D4A017',
  },
]

export default function SocialProof() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      style={{
        backgroundColor: '#0D1B2E',
        padding: '108px 24px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle background gradient */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '30%',
          transform: 'translate(-50%, -50%)',
          width: '700px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(ellipse, rgba(61,139,55,0.05) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: '1140px', margin: '0 auto' }} ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '64px' }}
        >
          <span
            style={{
              color: '#3D8B37',
              fontSize: '11px',
              fontWeight: 700,
              letterSpacing: '0.18em',
              display: 'block',
              marginBottom: '16px',
              textTransform: 'uppercase',
            }}
          >
            Client Outcomes
          </span>
          <h2
            style={{
              fontSize: 'clamp(28px, 4vw, 52px)',
              fontWeight: 900,
              color: 'white',
              lineHeight: 1.15,
              letterSpacing: '-1px',
            }}
          >
            Results That Speak for Themselves.
          </h2>
        </motion.div>

        {/* Split layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '28px',
            alignItems: 'start',
          }}
        >
          {/* LEFT — Main quote card (takes more width) */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{
              backgroundColor: '#132037',
              borderRadius: '20px',
              padding: '48px',
              borderLeft: '4px solid #CC2027',
              position: 'relative',
              overflow: 'hidden',
              gridColumn: 'span 1',
            }}
          >
            {/* Large quote mark */}
            <div
              style={{
                position: 'absolute',
                top: '24px',
                right: '28px',
                fontSize: '120px',
                fontWeight: 900,
                color: '#CC2027',
                opacity: 0.08,
                lineHeight: 1,
                userSelect: 'none',
              }}
            >
              &ldquo;
            </div>

            <p
              style={{
                fontSize: 'clamp(17px, 2vw, 22px)',
                color: 'white',
                fontStyle: 'italic',
                lineHeight: 1.65,
                fontWeight: 500,
                marginBottom: '36px',
                position: 'relative',
              }}
            >
              &ldquo;We reduced our loan term from 30 to 11 years, built three investment properties, and finally have a clear picture of where we&apos;re heading. This is what a real financial strategy looks like.&rdquo;
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              {/* Avatar placeholder */}
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #1995C4, #0D1B2E)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '18px',
                  fontWeight: 700,
                  color: 'white',
                  flexShrink: 0,
                }}
              >
                M
              </div>
              <div>
                <p style={{ fontSize: '15px', fontWeight: 700, color: 'white', marginBottom: '2px' }}>
                  Melbourne Family
                </p>
                <p style={{ fontSize: '13px', color: '#64748B' }}>CFO On The Go Pro Client</p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT — Stat chips stacked */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {statChips.map((chip, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 40 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.55, delay: 0.3 + i * 0.12 }}
                style={{
                  backgroundColor: '#132037',
                  borderRadius: '16px',
                  padding: '24px 28px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '20px',
                  border: `1px solid ${chip.accent}22`,
                  boxShadow: `0 4px 16px rgba(0,0,0,0.2)`,
                }}
              >
                {/* Stat */}
                <div style={{ flexShrink: 0 }}>
                  <span
                    style={{
                      fontSize: 'clamp(28px, 3vw, 40px)',
                      fontWeight: 900,
                      color: chip.accent,
                      letterSpacing: '-1px',
                      lineHeight: 1,
                      display: 'block',
                    }}
                  >
                    {chip.stat}
                  </span>
                  <span
                    style={{
                      fontSize: '12px',
                      fontWeight: 600,
                      color: chip.accent,
                      opacity: 0.7,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                    }}
                  >
                    {chip.unit}
                  </span>
                </div>

                {/* Divider */}
                <div
                  style={{
                    width: '1px',
                    height: '44px',
                    backgroundColor: 'rgba(255,255,255,0.08)',
                    flexShrink: 0,
                  }}
                />

                {/* Label */}
                <p style={{ fontSize: '14px', color: '#94A3B8', lineHeight: 1.55 }}>
                  {chip.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Disclaimer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          style={{
            fontSize: '12px',
            color: '#475569',
            textAlign: 'center',
            marginTop: '40px',
          }}
        >
          Individual results vary. Subject to personal circumstances and market conditions.
        </motion.p>
      </div>
    </section>
  )
}
