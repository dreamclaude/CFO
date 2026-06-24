'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

interface System {
  accent: string
  title: string
  body: string
  number: string
}

const systems: System[] = [
  {
    accent: '#1995C4',
    title: 'Property Acquisition Strategy',
    body: 'Borrowing capacity optimisation and smart structuring before every purchase.',
    number: '01',
  },
  {
    accent: '#E8821A',
    title: 'Debt Structuring & Optimisation',
    body: 'Reduce interest costs, increase financial flexibility, and accelerate repayment timelines.',
    number: '02',
  },
  {
    accent: '#3D8B37',
    title: 'SMSF Wealth Strategy',
    body: 'Use superannuation as a long-term wealth engine. Property inside super, tax-effective retirement wealth.',
    number: '03',
  },
  {
    accent: '#CC2027',
    title: 'Ongoing CFO Advisory',
    body: 'Strategic guidance, quarterly reviews, and course correction. We do not set and forget.',
    number: '04',
  },
]

export default function WealthSystems() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section style={{ backgroundColor: '#F0F2F7', padding: '96px 24px' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '64px' }}
        >
          <span style={{ color: '#1995C4', fontSize: '12px', fontWeight: 700, letterSpacing: '0.15em', display: 'block', marginBottom: '16px' }}>THE CFO WEALTH SYSTEMS</span>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 800, color: '#1B2A4A', lineHeight: 1.2 }}>
            Four Systems. One Integrated Strategy.
          </h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px' }}>
          {systems.map((sys, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{
                backgroundColor: 'white',
                borderRadius: '16px',
                padding: '32px',
                borderTop: `4px solid ${sys.accent}`,
                boxShadow: '0 2px 20px rgba(0,0,0,0.07)',
              }}
            >
              <div style={{ fontSize: '32px', fontWeight: 800, color: sys.accent, marginBottom: '16px', opacity: 0.3 }}>{sys.number}</div>
              <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#1B2A4A', marginBottom: '12px' }}>{sys.title}</h3>
              <p style={{ fontSize: '15px', color: '#475569', lineHeight: 1.7 }}>{sys.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
