'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function From30to10() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section style={{ backgroundColor: '#F0F2F7', padding: '96px 24px' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 style={{ fontSize: 'clamp(36px, 6vw, 72px)', fontWeight: 900, color: '#1B2A4A', lineHeight: 1.1, marginBottom: '32px' }}>
            From 30 Years to 10.
          </h2>

          {/* Big stat */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '24px',
              backgroundColor: '#0D1B2E',
              borderRadius: '16px',
              padding: '28px 48px',
              marginBottom: '40px',
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}
          >
            <span style={{ fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 900, color: '#CC2027' }}>30 yrs</span>
            <span style={{ fontSize: 'clamp(28px, 4vw, 48px)', color: '#CBD5E1', fontWeight: 300 }}>&rarr;</span>
            <span style={{ fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 900, color: '#1995C4' }}>10&ndash;12 yrs</span>
          </div>

          <p style={{ fontSize: 'clamp(16px, 2vw, 19px)', color: '#475569', lineHeight: 1.8, marginBottom: '24px', maxWidth: '720px', margin: '0 auto 24px' }}>
            Most Australians accept a 30-year mortgage. We don&apos;t. With structure, discipline, and strategic modelling, many of our clients work toward becoming debt-free in 8&ndash;12 years while simultaneously building investment assets. That changes retirement. That changes freedom.
          </p>

          <p style={{ fontSize: '12px', color: '#94A3B8', fontStyle: 'italic' }}>
            Subject to individual circumstances and suitability assessment. Outcomes are not guaranteed.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
