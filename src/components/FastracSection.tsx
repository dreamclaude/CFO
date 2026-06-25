'use client'
import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'

const letterColors: Record<string, string> = {
  F: '#1995C4',
  A: '#E8821A',
  S: '#3D8B37',
  T: '#CC2027',
  R: '#D4A017',
  C: '#3D8B37',
}

const fastracItems = [
  {
    letter: 'F',
    title: 'Financial Vision',
    body: 'Define debt freedom targets, wealth milestones, and retirement outcome design. Clarity first.',
    accent: '#1995C4',
    progress: 55,
  },
  {
    letter: 'A',
    title: 'Allocation Optimisation',
    body: 'Strategic structuring of income flows, offset accounts, surplus deployment, and tax positioning.',
    accent: '#E8821A',
    progress: 68,
  },
  {
    letter: 'S',
    title: 'Strategic Structuring',
    body: 'Debt recycling models, SMSF integration (where suitable), investment sequencing, and risk buffers.',
    accent: '#3D8B37',
    progress: 72,
  },
  {
    letter: 'T',
    title: 'Tactical Acceleration',
    body: 'Rapid mortgage reduction models, surplus reallocation discipline, and equity deployment timing. This is where 30 years becomes 10.',
    accent: '#CC2027',
    progress: 85,
  },
  {
    letter: 'R',
    title: 'Risk Management',
    body: 'Stress testing interest rate rises, income shocks, market downturns, and liquidity buffers. Acceleration without risk control is reckless.',
    accent: '#D4A017',
    progress: 78,
  },
  {
    letter: 'A',
    title: 'Accountability Reviews',
    body: 'Quarterly reforecasting, KPI tracking, net worth progression measurement. CFO discipline applied to households.',
    accent: '#1995C4',
    progress: 90,
  },
  {
    letter: 'C',
    title: 'Compounding Wealth',
    body: 'Assets grow. Debt reduces. Options expand. This is where freedom compounds.',
    accent: '#3D8B37',
    progress: 100,
  },
]

function FastracCard({
  item,
  index,
  inView,
}: {
  item: typeof fastracItems[0]
  index: number
  inView: boolean
}) {
  const [hovered, setHovered] = useState(false)
  const isEven = index % 2 === 0

  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -40 : 40 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.55, delay: 0.2 + index * 0.1 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex',
        flexDirection: isEven ? 'row' : 'row-reverse',
        alignItems: 'stretch',
        gap: '0',
        backgroundColor: hovered ? '#132037' : 'rgba(19,32,55,0.6)',
        borderRadius: '20px',
        overflow: 'hidden',
        border: `1px solid ${hovered ? item.accent + '44' : 'rgba(27,42,74,0.8)'}`,
        boxShadow: hovered ? `0 16px 48px rgba(0,0,0,0.4), 0 0 0 1px ${item.accent}22` : '0 4px 16px rgba(0,0,0,0.2)',
        transition: 'all 0.3s ease',
        cursor: 'default',
      }}
    >
      {/* Letter side */}
      <div
        style={{
          width: '120px',
          flexShrink: 0,
          backgroundColor: item.accent + '18',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Large background letter */}
        <span
          style={{
            fontSize: '120px',
            fontWeight: 900,
            color: item.accent,
            opacity: 0.15,
            position: 'absolute',
            lineHeight: 1,
            userSelect: 'none',
          }}
        >
          {item.letter}
        </span>
        {/* Foreground letter badge */}
        <div
          style={{
            width: '56px',
            height: '56px',
            borderRadius: '14px',
            backgroundColor: item.accent,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '28px',
            fontWeight: 900,
            color: 'white',
            position: 'relative',
            boxShadow: `0 8px 24px ${item.accent}44`,
          }}
        >
          {item.letter}
        </div>
      </div>

      {/* Content side */}
      <div style={{ flex: 1, padding: '28px 32px 28px' }}>
        <h3
          style={{
            fontSize: '17px',
            fontWeight: 700,
            color: 'white',
            marginBottom: '10px',
            letterSpacing: '-0.2px',
          }}
        >
          {item.title}
        </h3>
        <p
          style={{
            fontSize: '14px',
            color: '#94A3B8',
            lineHeight: 1.7,
          }}
        >
          {item.body}
        </p>

      </div>
    </motion.div>
  )
}

export default function FastracSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const word = 'FASTRAC'

  return (
    <section
      style={{
        backgroundColor: '#0D1B2E',
        padding: '108px 24px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{ maxWidth: '900px', margin: '0 auto' }} ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '64px' }}
        >
          <span
            style={{
              color: '#CC2027',
              fontSize: '11px',
              fontWeight: 700,
              letterSpacing: '0.18em',
              display: 'block',
              marginBottom: '28px',
              textTransform: 'uppercase',
            }}
          >
            Proprietary System
          </span>

          <motion.h3
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{
              fontSize: 'clamp(38px, 6vw, 72px)',
              fontWeight: 800,
              color: 'white',
              letterSpacing: '-2px',
              lineHeight: 1,
              marginBottom: '12px',
            }}
          >
            F.A.S.T.R.A.C
            <span style={{ color: '#CC2027', fontSize: '0.5em', verticalAlign: 'super', fontWeight: 700 }}>™</span>
          </motion.h3>

          <p
            style={{
              fontSize: '13px',
              fontWeight: 600,
              color: '#475569',
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              marginBottom: '24px',
            }}
          >
            Financial Acceleration System
          </p>

          <h2
            style={{
              fontSize: 'clamp(24px, 3.5vw, 42px)',
              fontWeight: 800,
              color: 'white',
              lineHeight: 1.2,
              marginBottom: '20px',
              letterSpacing: '-0.5px',
            }}
          >
            Turning 30-Year Plans into Structured Wealth Pathways.
          </h2>

          <p
            style={{
              fontSize: '17px',
              color: '#CBD5E1',
              maxWidth: '640px',
              margin: '0 auto',
              lineHeight: 1.7,
            }}
          >
            After three decades working with businesses and investors, we developed a proprietary system that applies executive-level financial discipline to households and investors.
          </p>
        </motion.div>

        {/* Alternating cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '40px' }}>
          {fastracItems.map((item, i) => (
            <FastracCard key={i} item={item} index={i} inView={inView} />
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.9 }}
          style={{
            fontSize: '12px',
            color: '#475569',
            textAlign: 'center',
            maxWidth: '640px',
            margin: '0 auto',
          }}
        >
          Where suitable and appropriate. Subject to individual circumstances. Strategy-led and compliance-aligned.
        </motion.p>
      </div>
    </section>
  )
}
