'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const fastracItems = [
  {
    letter: 'F',
    title: 'Financial Vision',
    body: 'Define debt freedom targets, wealth milestones, and retirement outcome design. Clarity first.',
    accent: '#1995C4',
  },
  {
    letter: 'A',
    title: 'Allocation Optimisation',
    body: 'Strategic structuring of income flows, offset accounts, surplus deployment, and tax positioning.',
    accent: '#E8821A',
  },
  {
    letter: 'S',
    title: 'Strategic Structuring',
    body: 'Debt recycling models, SMSF integration (where suitable), investment sequencing, and risk buffers.',
    accent: '#3D8B37',
  },
  {
    letter: 'T',
    title: 'Tactical Acceleration',
    body: 'Rapid mortgage reduction models, surplus reallocation discipline, and equity deployment timing. This is where 30 years becomes 10.',
    accent: '#CC2027',
  },
  {
    letter: 'R',
    title: 'Risk Management',
    body: 'Stress testing interest rate rises, income shocks, market downturns, and liquidity buffers. Acceleration without risk control is reckless.',
    accent: '#D4A017',
  },
  {
    letter: 'A',
    title: 'Accountability Reviews',
    body: 'Quarterly reforecasting, KPI tracking, net worth progression measurement. CFO discipline applied to households.',
    accent: '#1995C4',
  },
  {
    letter: 'C',
    title: 'Compounding Wealth',
    body: 'Assets grow. Debt reduces. Options expand. This is where freedom compounds.',
    accent: '#3D8B37',
  },
]

export default function FastracSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section style={{ backgroundColor: '#132037', padding: '96px 24px' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '16px' }}
        >
          <span style={{ color: '#CC2027', fontSize: '12px', fontWeight: 700, letterSpacing: '0.15em', display: 'block', marginBottom: '16px' }}>THE F.A.S.T.R.A.C&#8482; FINANCIAL ACCELERATION SYSTEM</span>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 800, color: 'white', lineHeight: 1.2, marginBottom: '16px' }}>
            Turning 30-Year Plans into Structured Wealth Pathways.
          </h2>
          <p style={{ fontSize: '17px', color: '#CBD5E1', maxWidth: '700px', margin: '0 auto 48px', lineHeight: 1.7 }}>
            After three decades working with businesses and investors, we developed a proprietary system that applies executive-level financial discipline to households and investors.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px', marginBottom: '40px' }}>
          {fastracItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{
                backgroundColor: '#0D1B2E',
                borderRadius: '16px',
                padding: '28px',
                borderLeft: `4px solid ${item.accent}`,
              }}
            >
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  backgroundColor: item.accent,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '24px',
                  fontWeight: 900,
                  color: 'white',
                  marginBottom: '16px',
                }}
              >
                {item.letter}
              </div>
              <h3 style={{ fontSize: '16px', fontWeight: 700, color: 'white', marginBottom: '10px' }}>{item.title}</h3>
              <p style={{ fontSize: '14px', color: '#94A3B8', lineHeight: 1.7 }}>{item.body}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          style={{ fontSize: '12px', color: '#475569', textAlign: 'center', maxWidth: '700px', margin: '0 auto' }}
        >
          Where suitable and appropriate. Subject to individual circumstances. Strategy-led and compliance-aligned.
        </motion.p>
      </div>
    </section>
  )
}
