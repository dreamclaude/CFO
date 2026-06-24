'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const outcomes = [
  'Reduced loan term from 30 to 11 years through structured cash flow strategy.',
  'Built 3 investment properties in 5 years with a clear acquisition roadmap.',
  'Successfully integrated SMSF into our wealth strategy for long-term tax efficiency.',
]

export default function SocialProof() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section style={{ backgroundColor: '#132037', padding: '96px 24px' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '64px' }}
        >
          <span style={{ color: '#3D8B37', fontSize: '12px', fontWeight: 700, letterSpacing: '0.15em', display: 'block', marginBottom: '16px' }}>CLIENT OUTCOMES</span>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 800, color: 'white', lineHeight: 1.2 }}>
            Results That Speak for Themselves.
          </h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginBottom: '32px' }}>
          {outcomes.map((quote, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              style={{
                backgroundColor: '#0D1B2E',
                borderRadius: '16px',
                padding: '32px',
                borderTop: '3px solid #3D8B37',
              }}
            >
              <div style={{ fontSize: '32px', color: '#3D8B37', marginBottom: '16px', lineHeight: 1 }}>&ldquo;</div>
              <p style={{ fontSize: '16px', color: '#CBD5E1', lineHeight: 1.7, fontStyle: 'italic' }}>{quote}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          style={{ fontSize: '12px', color: '#475569', textAlign: 'center' }}
        >
          Individual results vary. Subject to personal circumstances and market conditions.
        </motion.p>
      </div>
    </section>
  )
}
