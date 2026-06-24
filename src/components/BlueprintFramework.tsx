'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const steps = [
  { label: 'CLARITY', accent: '#1995C4', body: 'Define goals, map borrowing power, and assess your full financial position.' },
  { label: 'STRUCTURE', accent: '#E8821A', body: 'Design lending structures, entities, and financial foundations.' },
  { label: 'ACQUIRE', accent: '#3D8B37', body: 'Strategic property selection aligned to your long-term plan.' },
  { label: 'OPTIMISE', accent: '#CC2027', body: 'Tax positioning, cashflow improvement, and debt recycling.' },
  { label: 'ACCELERATE', accent: '#D4A017', body: 'Reduce a 30-year mortgage to 10-12 years through structured cash flow discipline.' },
]

export default function BlueprintFramework() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section style={{ backgroundColor: '#0D1B2E', padding: '96px 24px' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '64px' }}
        >
          <span style={{ color: '#E8821A', fontSize: '12px', fontWeight: 700, letterSpacing: '0.15em', display: 'block', marginBottom: '16px' }}>SIGNATURE FRAMEWORK</span>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 800, color: 'white', lineHeight: 1.2, marginBottom: '16px' }}>
            The CFO Wealth Blueprint&#8482;
          </h2>
          <p style={{ fontSize: '16px', color: '#94A3B8', maxWidth: '600px', margin: '0 auto' }}>
            Every client engagement follows this structured pathway &mdash; where suitable and appropriate.
          </p>
        </motion.div>

        {/* Steps with connecting line */}
        <div style={{ position: 'relative' }}>
          {/* Connecting line */}
          <div
            style={{
              position: 'absolute',
              top: '40px',
              left: '10%',
              right: '10%',
              height: '2px',
              backgroundColor: '#1B2A4A',
              zIndex: 0,
            }}
          />

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '16px', position: 'relative', zIndex: 1 }}>
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                style={{ textAlign: 'center' }}
              >
                {/* Circle */}
                <div
                  style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    backgroundColor: '#132037',
                    border: `3px solid ${step.accent}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 16px',
                    fontSize: '20px',
                    fontWeight: 800,
                    color: step.accent,
                  }}
                >
                  {i + 1}
                </div>
                <h3 style={{ fontSize: '13px', fontWeight: 700, color: step.accent, letterSpacing: '0.1em', marginBottom: '8px' }}>{step.label}</h3>
                <p style={{ fontSize: '13px', color: '#94A3B8', lineHeight: 1.6 }}>{step.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
