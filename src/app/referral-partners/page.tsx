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

const partnerTypes = [
  { title: 'Accountants', accent: '#1995C4' },
  { title: 'Buyers Agents', accent: '#E8821A' },
  { title: 'Financial Planners', accent: '#3D8B37' },
  { title: 'Business Coaches', accent: '#CC2027' },
  { title: 'Alumni & Professional Networks', accent: '#D4A017' },
  { title: 'Property Strategists', accent: '#1995C4' },
]

const clientBenefits = [
  'CFO-level strategy',
  'Integrated lending solutions',
  'Structured debt reduction modelling',
  'SMSF strategic integration',
  'Quarterly performance reviews',
]

const commitments = [
  'Transparent communication',
  'Respect for your client relationships',
  'Clear scope boundaries',
  'Compliance-aligned processes',
  'Agreed referral arrangements where appropriate',
]

const idealClients = [
  'High-income professionals',
  'Business owners',
  'Property accumulators',
  'Families with large mortgages',
  'Clients seeking structure and accountability',
]

export default function ReferralPartnersPage() {
  return (
    <div style={{ backgroundColor: '#0D1B2E' }}>
      {/* Hero */}
      <section style={{ padding: '160px 24px 96px', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span style={{ color: '#1995C4', fontSize: '12px', fontWeight: 700, letterSpacing: '0.15em', display: 'block', marginBottom: '16px' }}>REFERRAL NETWORK</span>
            <h1 style={{ fontSize: 'clamp(36px, 5vw, 64px)', fontWeight: 800, color: 'white', lineHeight: 1.1, marginBottom: '20px' }}>
              Strategic Referral Network
            </h1>
            <p style={{ fontSize: 'clamp(17px, 2vw, 21px)', color: '#CBD5E1', lineHeight: 1.7 }}>
              We partner with professionals who want their clients to experience structured financial acceleration.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Who we work with */}
      <section style={{ backgroundColor: '#F0F2F7', padding: '96px 24px' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <FadeIn style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 40px)', fontWeight: 800, color: '#1B2A4A', marginBottom: '16px' }}>
              Who We Work With
            </h2>
          </FadeIn>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
            {partnerTypes.map((p, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div
                  style={{
                    backgroundColor: 'white',
                    borderRadius: '12px',
                    padding: '24px',
                    textAlign: 'center',
                    borderBottom: `3px solid ${p.accent}`,
                    boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
                  }}
                >
                  <span style={{ color: '#1B2A4A', fontSize: '15px', fontWeight: 700 }}>{p.title}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Why refer */}
      <section style={{ backgroundColor: '#0D1B2E', padding: '96px 24px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', gap: '48px' }}>
            <FadeIn>
              <h2 style={{ fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 800, color: 'white', marginBottom: '24px' }}>
                Why Refer to Us
              </h2>
              <p style={{ color: '#CBD5E1', fontSize: '16px', lineHeight: 1.8, marginBottom: '24px' }}>
                Your clients receive:
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {clientBenefits.map((b, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#3D8B37', flexShrink: 0 }} />
                    <span style={{ color: '#CBD5E1', fontSize: '15px' }}>{b}</span>
                  </div>
                ))}
              </div>
              <p style={{ color: '#94A3B8', fontSize: '15px', marginTop: '24px', fontStyle: 'italic' }}>
                We do not transact. We build roadmaps.
              </p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <h2 style={{ fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 800, color: 'white', marginBottom: '24px' }}>
                Our Commitment to You
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {commitments.map((c, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#1995C4', flexShrink: 0 }} />
                    <span style={{ color: '#CBD5E1', fontSize: '15px' }}>{c}</span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Ideal referral client */}
      <section style={{ backgroundColor: '#132037', padding: '96px 24px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <FadeIn>
            <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 40px)', fontWeight: 800, color: 'white', marginBottom: '32px' }}>
              Ideal Referral Client
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginBottom: '48px' }}>
              {idealClients.map((c, i) => (
                <div
                  key={i}
                  style={{
                    backgroundColor: '#0D1B2E',
                    borderRadius: '10px',
                    padding: '16px 20px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                  }}
                >
                  <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#E8821A', flexShrink: 0 }} />
                  <span style={{ color: '#CBD5E1', fontSize: '14px' }}>{c}</span>
                </div>
              ))}
            </div>
            <Link
              href="/strategy-session"
              style={{
                display: 'inline-block',
                backgroundColor: '#CC2027',
                color: 'white',
                padding: '16px 36px',
                borderRadius: '8px',
                textDecoration: 'none',
                fontSize: '16px',
                fontWeight: 700,
              }}
            >
              Book a Partner Discussion
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}
