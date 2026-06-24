'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'

function FadeIn({ children, delay = 0, style }: { children: React.ReactNode; delay?: number; style?: React.CSSProperties }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay }} style={style}>
      {children}
    </motion.div>
  )
}

const tiers = [
  {
    tier: 'Tier 1 — Entry',
    name: 'Strategy Session',
    accent: '#1995C4',
    features: [
      'Initial borrowing capacity assessment',
      'Goal mapping and financial position review',
      'Structural insights (lending + tax awareness)',
      'Clear direction forward',
    ],
    cta: 'Book a Strategy Session',
    ctaHref: '/strategy-session',
  },
  {
    tier: 'Tier 2 — Core',
    name: 'Wealth Structuring',
    accent: '#E8821A',
    features: [
      'Loan restructuring and optimisation',
      'Entity structuring (personal, trust, company, SMSF)',
      'SMSF suitability and integration',
      'Debt recycling modelling',
      'Property acquisition sequencing',
    ],
    cta: 'Enquire About Wealth Structuring',
    ctaHref: '/strategy-session',
  },
  {
    tier: 'Tier 3 — Premium',
    name: 'Ongoing CFO Advisory',
    accent: '#CC2027',
    features: [
      'Annual strategy reviews and reforecasting',
      'Quarterly KPI and debt reduction tracking',
      'Strategy updates as conditions change',
      'Priority access to lending solutions',
      'Net worth progression monitoring',
    ],
    cta: 'Apply for CFO Advisory',
    ctaHref: '/strategy-session',
  },
]

const systemsDeep = [
  {
    accent: '#1995C4',
    title: 'Property Acquisition Strategy',
    body: 'Our property acquisition strategy begins long before you find a property. We assess your full financial position, optimise your borrowing capacity, and design an acquisition sequence that aligns to your 3-5 year wealth plan. Every purchase is strategic — not reactive. We consider entity structuring, tax implications, serviceability, and portfolio balance before any commitment is made.',
  },
  {
    accent: '#E8821A',
    title: 'Debt Structuring & Optimisation',
    body: 'Debt is not simply a number — it is a tool. The way your debt is structured determines your flexibility, your tax position, and your ability to accelerate. We restructure existing lending, introduce offset strategies, implement debt recycling where appropriate, and model the impact on your long-term wealth trajectory. The goal is not just to reduce debt — it is to make every dollar work harder.',
  },
  {
    accent: '#3D8B37',
    title: 'SMSF Wealth Strategy',
    body: 'Superannuation is one of the most tax-effective vehicles available to Australian investors. We assess SMSF suitability, design contribution strategies, and where appropriate, integrate property investment within the super environment. The outcome is a coordinated superannuation and investment strategy that maximises long-term wealth accumulation in a tax-effective structure.',
  },
  {
    accent: '#CC2027',
    title: 'Ongoing CFO Advisory',
    body: 'Strategy without implementation is just planning. Our ongoing CFO Advisory ensures your financial roadmap stays on track through quarterly performance reviews, net worth tracking, cash flow reforecasting, and course correction as life changes. Think of it as having a personal CFO on retainer — proactive, strategic, and accountable.',
  },
]

export default function ServicesPage() {
  return (
    <div style={{ backgroundColor: '#0D1B2E' }}>
      {/* Hero */}
      <section style={{ padding: '160px 24px 96px', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span style={{ color: '#1995C4', fontSize: '12px', fontWeight: 700, letterSpacing: '0.15em', display: 'block', marginBottom: '16px' }}>OUR SERVICES</span>
            <h1 style={{ fontSize: 'clamp(36px, 5vw, 64px)', fontWeight: 800, color: 'white', lineHeight: 1.1, marginBottom: '20px' }}>
              Wealth Strategy Services
            </h1>
            <p style={{ fontSize: 'clamp(17px, 2vw, 21px)', color: '#CBD5E1' }}>
              Three service tiers designed around your stage of wealth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tiers */}
      <section style={{ backgroundColor: '#F0F2F7', padding: '96px 24px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '28px' }}>
            {tiers.map((tier, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div
                  style={{
                    backgroundColor: 'white',
                    borderRadius: '16px',
                    padding: '36px',
                    borderTop: `4px solid ${tier.accent}`,
                    boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <span style={{ color: tier.accent, fontSize: '12px', fontWeight: 700, letterSpacing: '0.1em', display: 'block', marginBottom: '8px' }}>{tier.tier}</span>
                  <h2 style={{ fontSize: '22px', fontWeight: 800, color: '#1B2A4A', marginBottom: '24px' }}>{tier.name}</h2>
                  <ul style={{ listStyle: 'none', padding: 0, flex: 1, marginBottom: '28px' }}>
                    {tier.features.map((f, j) => (
                      <li key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '12px' }}>
                        <div style={{ width: '20px', height: '20px', borderRadius: '50%', backgroundColor: tier.accent, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                          <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'white' }} />
                        </div>
                        <span style={{ color: '#475569', fontSize: '14px', lineHeight: 1.6 }}>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={tier.ctaHref}
                    style={{
                      display: 'block',
                      backgroundColor: tier.accent,
                      color: 'white',
                      padding: '14px 24px',
                      borderRadius: '8px',
                      textDecoration: 'none',
                      fontSize: '14px',
                      fontWeight: 700,
                      textAlign: 'center',
                    }}
                  >
                    {tier.cta}
                  </Link>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Systems Deep Dive */}
      <section style={{ backgroundColor: '#0D1B2E', padding: '96px 24px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <FadeIn style={{ textAlign: 'center', marginBottom: '64px' }}>
            <span style={{ color: '#1995C4', fontSize: '12px', fontWeight: 700, letterSpacing: '0.15em', display: 'block', marginBottom: '16px' }}>THE WEALTH SYSTEMS</span>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 800, color: 'white', lineHeight: 1.2 }}>
              A Deeper Look at Each System
            </h2>
          </FadeIn>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {systemsDeep.map((sys, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div
                  style={{
                    backgroundColor: '#132037',
                    borderRadius: '16px',
                    padding: '36px',
                    borderLeft: `4px solid ${sys.accent}`,
                  }}
                >
                  <h3 style={{ fontSize: '20px', fontWeight: 700, color: 'white', marginBottom: '16px' }}>{sys.title}</h3>
                  <p style={{ fontSize: '16px', color: '#CBD5E1', lineHeight: 1.8 }}>{sys.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section style={{ backgroundColor: '#132037', padding: '48px 24px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontSize: '13px', color: '#475569', lineHeight: 1.8 }}>
            All services are subject to individual circumstances, regulatory requirements, and responsible lending obligations. Credit assistance is provided through Intelligent Finance Specialists. Strategy and advisory services are provided through CFO On The Go Pro Pty Ltd. These are separate entities providing separate services.
          </p>
        </div>
      </section>
    </div>
  )
}
