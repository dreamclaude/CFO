'use client'
import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'

const steps = [
  {
    number: '1',
    label: 'property',
    result: 'Investment',
    sublabel: 'The first step into the market',
    accent: '#1995C4',
  },
  {
    number: '2',
    label: 'properties',
    result: 'Momentum',
    sublabel: 'Pattern and process begin to form',
    accent: '#E8821A',
  },
  {
    number: '3 - 4',
    label: 'properties',
    result: 'Portfolio',
    sublabel: 'A real asset base with moving parts',
    accent: '#3D8B37',
  },
  {
    number: 'Portfolio + SMSF',
    label: '',
    result: 'Wealth System',
    sublabel: 'You are now running a financial enterprise',
    accent: '#CC2027',
  },
]

function StepCard({ step, index, inView }: { step: typeof steps[0]; index: number; inView: boolean }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      className={step.number.length > 5 ? 'step-card-long' : ''}
      initial={{ opacity: 0, x: -40 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.55, delay: 0.3 + index * 0.12 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        backgroundColor: 'white',
        borderRadius: '16px',
        padding: '24px 28px',
        display: 'flex',
        alignItems: 'center',
        gap: '20px',
        boxShadow: hovered
          ? '0 16px 48px rgba(13,27,46,0.18), 0 4px 12px rgba(13,27,46,0.08)'
          : '0 4px 16px rgba(13,27,46,0.07)',
        transform: hovered ? 'translateX(6px)' : 'translateX(0)',
        transition: 'all 0.28s ease',
        cursor: 'default',
        borderLeft: `4px solid ${step.accent}`,
      }}
    >
      {/* Large number */}
      <div
        style={{
          minWidth: '72px',
          fontSize: step.number.length > 5 ? 'clamp(32px, 8vw, 44px)' : '52px',
          fontWeight: 900,
          color: step.accent,
          lineHeight: 1,
          letterSpacing: '-2px',
        }}
      >
        {step.number}
      </div>

      {/* Separator */}
      <div className="step-arrow" style={{ fontSize: '24px', color: '#CBD5E1', fontWeight: 300, flexShrink: 0 }}>
        &rarr;
      </div>

      {/* Content */}
      <div className="step-content" style={{ flex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', flexWrap: 'wrap' }}>
          {step.label && (
            <span style={{ fontSize: '15px', color: '#94A3B8', fontWeight: 500 }}>{step.label}</span>
          )}
          <span
            style={{
              fontSize: '20px',
              fontWeight: 800,
              color: step.accent,
              letterSpacing: '-0.3px',
            }}
          >
            {step.result}
          </span>
        </div>
        <p style={{ fontSize: '13px', color: '#94A3B8', marginTop: '4px', lineHeight: 1.4 }}>
          {step.sublabel}
        </p>
      </div>

      {/* Right accent dot */}
      <div
        style={{
          width: '10px',
          height: '10px',
          borderRadius: '50%',
          backgroundColor: step.accent,
          opacity: hovered ? 1 : 0.35,
          transition: 'opacity 0.28s',
          flexShrink: 0,
        }}
      />
    </motion.div>
  )
}

export default function TheShift() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      style={{
        backgroundColor: '#F0F2F7',
        padding: '108px 24px 80px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <style>{`
        @media (max-width: 640px) {
          .step-card-long {
            flex-wrap: wrap;
          }
          .step-card-long .step-content {
            min-width: 100% !important;
            margin-top: -10px;
          }
          .step-card-long .step-arrow {
            display: none;
          }
        }
      `}</style>
      {/* Subtle diagonal accent at bottom */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '120px',
          background: 'linear-gradient(175deg, transparent 60%, rgba(13,27,46,0.06) 100%)',
          pointerEvents: 'none',
        }}
      />

      <div
        ref={ref}
        style={{
          maxWidth: '1140px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '64px',
          alignItems: 'start',
        }}
      >
        {/* LEFT COLUMN */}
        <div>
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            style={{
              color: '#1995C4',
              fontSize: '11px',
              fontWeight: 700,
              letterSpacing: '0.18em',
              display: 'block',
              marginBottom: '20px',
              textTransform: 'uppercase',
            }}
          >
            The Big Idea
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{
              fontSize: 'clamp(30px, 3.8vw, 52px)',
              fontWeight: 900,
              color: '#0D1B2E',
              lineHeight: 1.15,
              marginBottom: '32px',
              letterSpacing: '-1px',
            }}
          >
            If You Own Multiple Properties - You&apos;re Already Running a Business
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              fontSize: '17px',
              color: '#475569',
              lineHeight: 1.8,
              marginBottom: '48px',
            }}
          >
            Most investors never make this mental shift. They manage properties like assets. We help you manage them like a CFO - with systems, structure, and strategy at every stage.
          </motion.p>

          {/* Quote callout */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.65 }}
            style={{
              borderLeft: '4px solid #CC2027',
              paddingLeft: '24px',
              paddingTop: '4px',
              paddingBottom: '4px',
            }}
          >
            <p
              style={{
                fontSize: 'clamp(16px, 2vw, 20px)',
                fontWeight: 600,
                color: '#1B2A4A',
                lineHeight: 1.55,
                fontStyle: 'italic',
                marginBottom: '12px',
              }}
            >
              &ldquo;The difference between stress and financial freedom is not income - it is structure.&rdquo;
            </p>
            <span
              style={{
                fontSize: '12px',
                color: '#94A3B8',
                fontWeight: 600,
                letterSpacing: '0.08em',
              }}
            >
              CFO ON THE GO PRO
            </span>
          </motion.div>
        </div>

        {/* RIGHT COLUMN — stacked cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', paddingTop: '8px' }}>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.25 }}
            style={{
              fontSize: '11px',
              color: '#94A3B8',
              letterSpacing: '0.15em',
              fontWeight: 700,
              textTransform: 'uppercase',
              marginBottom: '8px',
            }}
          >
            The Progression
          </motion.p>

          {steps.map((step, i) => (
            <StepCard key={i} step={step} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  )
}
