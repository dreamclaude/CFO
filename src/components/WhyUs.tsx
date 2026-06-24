'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const credentials = ['CPA', 'ACA', 'CGMA', 'Lending Specialist', 'SMSF Strategist']

export default function WhyUs() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section style={{ backgroundColor: '#0D1B2E', padding: '96px 24px' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '48px' }}
        >
          <span style={{ color: '#1995C4', fontSize: '12px', fontWeight: 700, letterSpacing: '0.15em', display: 'block', marginBottom: '16px' }}>YOUR UNIQUE EDGE</span>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 800, color: 'white', lineHeight: 1.2, marginBottom: '24px' }}>
            Led by a Triple-Qualified Financial Strategist
          </h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center', marginBottom: '32px' }}>
            {credentials.map((c) => (
              <span
                key={c}
                style={{
                  backgroundColor: '#132037',
                  border: '1px solid #1B2A4A',
                  color: '#1995C4',
                  padding: '6px 16px',
                  borderRadius: '100px',
                  fontSize: '13px',
                  fontWeight: 600,
                }}
              >
                {c}
              </span>
            ))}
          </div>
          <p style={{ fontSize: '17px', color: '#CBD5E1', lineHeight: 1.8, maxWidth: '700px', margin: '0 auto' }}>
            We bring CFO-level financial strategy &mdash; traditionally reserved for large corporations &mdash; directly into your personal wealth journey.
            For 30+ years, we&apos;ve helped businesses achieve structured growth. Now we apply the same proven frameworks to families and investors.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
