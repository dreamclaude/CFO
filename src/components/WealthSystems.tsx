'use client'
import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'

interface System {
  accent: string
  title: string
  body: string
  number: string
  features: string[]
  icon: React.ReactNode
}

const systems: System[] = [
  {
    accent: '#1995C4',
    title: 'Property Acquisition Strategy',
    body: 'Borrowing capacity optimisation and smart structuring before every purchase. No guesswork - a clear roadmap.',
    number: '01',
    features: ['Borrowing Capacity Audit', 'Pre-purchase Structuring', 'Acquisition Roadmap'],
    icon: (
      <svg viewBox="0 0 40 40" width="40" height="40" fill="none">
        <rect x="4" y="20" width="10" height="16" rx="2" fill="#1995C4" opacity="0.9"/>
        <rect x="15" y="12" width="10" height="24" rx="2" fill="#1995C4" opacity="0.7"/>
        <rect x="26" y="4" width="10" height="32" rx="2" fill="#1995C4" opacity="0.5"/>
        <path d="M6 18L15 10L24 14L34 4" stroke="#1995C4" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    accent: '#E8821A',
    title: 'Debt Structuring & Optimisation',
    body: 'Reduce interest costs, increase financial flexibility, and accelerate repayment timelines. Structure beats willpower every time.',
    number: '02',
    features: ['Interest Reduction Plan', 'Offset Strategy', 'Debt Recycling'],
    icon: (
      <svg viewBox="0 0 40 40" width="40" height="40" fill="none">
        <circle cx="20" cy="20" r="14" stroke="#E8821A" strokeWidth="2.5" opacity="0.4"/>
        <circle cx="20" cy="20" r="8" stroke="#E8821A" strokeWidth="2.5" opacity="0.7"/>
        <circle cx="20" cy="20" r="3" fill="#E8821A"/>
        <path d="M20 6V10M20 30V34M6 20H10M30 20H34" stroke="#E8821A" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    accent: '#3D8B37',
    title: 'SMSF Wealth Strategy',
    body: 'Use superannuation as a long term wealth engine. Property inside super, tax-effective retirement wealth built deliberately.',
    number: '03',
    features: ['SMSF Setup & Integration', 'Tax Efficiency Planning', 'Retirement Wealth Design'],
    icon: (
      <svg viewBox="0 0 40 40" width="40" height="40" fill="none">
        <path d="M20 4L36 14V26L20 36L4 26V14L20 4Z" stroke="#3D8B37" strokeWidth="2.5" fill="none" opacity="0.5"/>
        <path d="M20 10L30 16V24L20 30L10 24V16L20 10Z" fill="#3D8B37" opacity="0.3"/>
        <circle cx="20" cy="20" r="4" fill="#3D8B37"/>
      </svg>
    ),
  },
  {
    accent: '#CC2027',
    title: 'Ongoing CFO Advisory',
    body: 'Strategic guidance, quarterly reviews, and course correction. We do not set and forget - your wealth deserves active oversight.',
    number: '04',
    features: ['Quarterly Reviews', 'KPI Tracking', 'Strategic Recalibration'],
    icon: (
      <svg viewBox="0 0 40 40" width="40" height="40" fill="none">
        <rect x="8" y="8" width="24" height="28" rx="3" stroke="#CC2027" strokeWidth="2" opacity="0.5"/>
        <path d="M14 16H26M14 22H26M14 28H20" stroke="#CC2027" strokeWidth="2" strokeLinecap="round" opacity="0.8"/>
        <circle cx="28" cy="12" r="6" fill="#CC2027"/>
        <path d="M25 12L27 14L31 10" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
]

function SystemCard({ sys, index, inView }: { sys: System; index: number; inView: boolean }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: 0.2 + index * 0.12 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        backgroundColor: 'white',
        borderRadius: '20px',
        padding: '36px 32px 32px',
        boxShadow: hovered
          ? `0 20px 60px rgba(13,27,46,0.16), 0 0 0 2px ${sys.accent}`
          : '0 4px 24px rgba(13,27,46,0.08)',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        transition: 'all 0.3s ease',
        cursor: 'default',
        position: 'relative',
        overflow: 'hidden',
        borderTop: `3px solid ${hovered ? sys.accent : sys.accent + '99'}`,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Icon */}
      <div style={{ marginBottom: '20px' }}>{sys.icon}</div>

      {/* System label */}
      <span
        style={{
          fontSize: '10px',
          fontWeight: 700,
          letterSpacing: '0.2em',
          color: sys.accent,
          display: 'block',
          marginBottom: '10px',
          textTransform: 'uppercase',
        }}
      >
        System {sys.number}
      </span>

      {/* Title */}
      <h3
        style={{
          fontSize: '20px',
          fontWeight: 800,
          color: '#0D1B2E',
          lineHeight: 1.25,
          marginBottom: '14px',
          letterSpacing: '-0.3px',
        }}
      >
        {sys.title}
      </h3>

      {/* Body */}
      <p
        style={{
          fontSize: '15px',
          color: '#64748B',
          lineHeight: 1.75,
          marginBottom: '28px',
          flex: 1,
        }}
      >
        {sys.body}
      </p>

      {/* Features */}
      <div
        style={{
          borderTop: '1px solid #F0F2F7',
          paddingTop: '20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
        }}
      >
        {sys.features.map((f) => (
          <div key={f} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div
              style={{
                width: '7px',
                height: '7px',
                borderRadius: '50%',
                backgroundColor: sys.accent,
                flexShrink: 0,
              }}
            />
            <span style={{ fontSize: '13px', color: '#475569', fontWeight: 500 }}>{f}</span>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export default function WealthSystems() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      style={{
        backgroundColor: '#F0F2F7',
        padding: '108px 24px',
        position: 'relative',
      }}
    >
      <div style={{ maxWidth: '1140px', margin: '0 auto' }}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '72px' }}
        >
          <span
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
            The CFO Wealth Systems
          </span>

          <h2
            style={{
              fontSize: 'clamp(28px, 4vw, 52px)',
              fontWeight: 800,
              color: '#0D1B2E',
              lineHeight: 1.15,
              marginBottom: '16px',
              letterSpacing: '-1px',
            }}
          >
            Four Systems.{' '}
            <span
              style={{
                position: 'relative',
                display: 'inline-block',
              }}
            >
              One Integrated Strategy.
              <span
                style={{
                  position: 'absolute',
                  bottom: '-6px',
                  left: 0,
                  right: 0,
                  height: '3px',
                  background: 'linear-gradient(90deg, #1995C4, #3D8B37)',
                  borderRadius: '2px',
                }}
              />
            </span>
          </h2>

          <p
            style={{
              fontSize: '17px',
              color: '#64748B',
              maxWidth: '580px',
              margin: '24px auto 0',
              lineHeight: 1.7,
            }}
          >
            Each system works in isolation. Together they form a complete wealth architecture designed for sustainable, structured growth.
          </p>
        </motion.div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '28px',
          }}
        >
          {systems.map((sys, i) => (
            <SystemCard key={i} sys={sys} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  )
}
