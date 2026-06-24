'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const groups = [
  {
    title: 'Families',
    body: 'Wanting financial freedom beyond the 30-year mortgage cycle.',
    accent: '#1995C4',
  },
  {
    title: 'Professionals & PAYG Earners',
    body: 'Strong income. Ready to build structure around it.',
    accent: '#E8821A',
  },
  {
    title: 'Business Owners',
    body: 'Growing a business and building personal wealth simultaneously.',
    accent: '#3D8B37',
  },
  {
    title: 'Property Investors',
    body: 'Stuck at 1-2 properties. Ready to build a real portfolio system.',
    accent: '#CC2027',
  },
]

export default function WhoWeHelp() {
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
          <span style={{ color: '#E8821A', fontSize: '12px', fontWeight: 700, letterSpacing: '0.15em', display: 'block', marginBottom: '16px' }}>WHO THIS IS FOR</span>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 800, color: 'white', lineHeight: 1.2, marginBottom: '16px' }}>
            Built for a Specific Type of Thinker.
          </h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px', marginBottom: '48px' }}>
          {groups.map((group, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{
                backgroundColor: '#132037',
                borderRadius: '16px',
                padding: '32px',
                borderBottom: `3px solid ${group.accent}`,
              }}
            >
              <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'white', marginBottom: '12px' }}>{group.title}</h3>
              <p style={{ fontSize: '15px', color: '#94A3B8', lineHeight: 1.7 }}>{group.body}</p>
            </motion.div>
          ))}
        </div>

        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          style={{
            backgroundColor: '#132037',
            borderLeft: '4px solid #E8821A',
            borderRadius: '12px',
            padding: '28px 32px',
            textAlign: 'center',
          }}
        >
          <p style={{ fontSize: 'clamp(16px, 2vw, 20px)', fontWeight: 600, color: '#CBD5E1', fontStyle: 'italic' }}>
            &ldquo;Families fail financially not because of income &mdash; but because of lack of structure.&rdquo;
          </p>
        </motion.blockquote>
      </div>
    </section>
  )
}
