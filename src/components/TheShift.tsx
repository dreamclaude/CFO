'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const steps = [
  { number: '1', label: 'property', result: 'investment', accent: '#1995C4' },
  { number: '2', label: 'properties', result: 'momentum', accent: '#E8821A' },
  { number: '3–4', label: 'properties', result: 'portfolio', accent: '#3D8B37' },
  { number: 'Portfolio + SMSF', label: '', result: 'wealth system', accent: '#CC2027' },
]

export default function TheShift() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section style={{ backgroundColor: '#F0F2F7', padding: '96px 24px' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '64px' }}
        >
          <span style={{ color: '#1995C4', fontSize: '12px', fontWeight: 700, letterSpacing: '0.15em', display: 'block', marginBottom: '16px' }}>THE BIG IDEA</span>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 800, color: '#1B2A4A', lineHeight: 1.2, marginBottom: '16px' }}>
            If You Own Multiple Properties &mdash; You&apos;re Already Running a Business
          </h2>
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '64px' }}>
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              style={{
                backgroundColor: 'white',
                border: `2px solid ${step.accent}`,
                borderRadius: '12px',
                padding: '20px 28px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '12px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <span style={{ fontSize: '22px', fontWeight: 800, color: step.accent }}>{step.number}</span>
                <span style={{ fontSize: '18px', color: '#475569', fontWeight: 500 }}>{step.label}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ color: '#94A3B8', fontSize: '20px' }}>=</span>
                <span style={{ fontSize: '18px', fontWeight: 700, color: step.accent }}>{step.result}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          style={{
            backgroundColor: '#0D1B2E',
            borderLeft: '4px solid #CC2027',
            borderRadius: '12px',
            padding: '32px 36px',
            textAlign: 'center',
          }}
        >
          <p style={{ fontSize: 'clamp(18px, 2.5vw, 24px)', fontWeight: 600, color: 'white', lineHeight: 1.5, fontStyle: 'italic' }}>
            &ldquo;The difference between stress and financial freedom is not income &mdash; it is structure.&rdquo;
          </p>
        </motion.blockquote>
      </div>
    </section>
  )
}
