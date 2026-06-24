'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'

function Section({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      style={style}
    >
      {children}
    </motion.div>
  )
}

const credentials = [
  { label: 'CPA', full: 'Certified Practising Accountant' },
  { label: 'ACA', full: 'Associate Chartered Accountant (ANZ)' },
  { label: 'CGMA', full: 'Chartered Global Management Accountant' },
  { label: 'Diploma', full: 'Diploma in Finance & Mortgage Broking' },
  { label: '30+', full: 'Years CFO-level financial experience' },
]

const businessNeeds = ['Vision', 'Cash flow management', 'Debt strategy', 'Investment planning', 'Risk management', 'Regular performance reviews']

export default function AboutPage() {
  return (
    <div style={{ backgroundColor: '#0D1B2E' }}>
      {/* Hero */}
      <section style={{ backgroundColor: '#0D1B2E', padding: '160px 24px 96px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span style={{ color: '#1995C4', fontSize: '12px', fontWeight: 700, letterSpacing: '0.15em', display: 'block', marginBottom: '16px' }}>ABOUT CFO ON THE GO PRO</span>
            <h1 style={{ fontSize: 'clamp(36px, 5vw, 64px)', fontWeight: 800, color: 'white', lineHeight: 1.1, marginBottom: '20px' }}>
              Your Personal CFO for Wealth Creation
            </h1>
            <p style={{ fontSize: 'clamp(18px, 2vw, 22px)', color: '#1995C4', fontWeight: 600 }}>
              We are Financial Architects &mdash; not brokers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section style={{ backgroundColor: '#F0F2F7', padding: '96px 24px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <Section>
            <span style={{ color: '#1995C4', fontSize: '12px', fontWeight: 700, letterSpacing: '0.15em', display: 'block', marginBottom: '16px' }}>THE STORY</span>
            <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 42px)', fontWeight: 800, color: '#1B2A4A', lineHeight: 1.2, marginBottom: '24px' }}>
              Built from 30 Years of Corporate CFO Experience
            </h2>
            <p style={{ fontSize: '17px', color: '#475569', lineHeight: 1.9, marginBottom: '32px' }}>
              For three decades, Nalin (Rukmal) Wijesooriya worked at the highest levels of business finance &mdash; helping corporations grow revenue, manage risk, and build long-term wealth. He watched businesses thrive because they had one thing most households lack: structure. A qualified CFO to map the vision. A financial system to execute it. A review process to keep it on track. Then he asked a simple question: Why can&apos;t families have the same?
            </p>
            <blockquote
              style={{
                backgroundColor: '#0D1B2E',
                borderLeft: '4px solid #CC2027',
                borderRadius: '12px',
                padding: '28px 32px',
              }}
            >
              <p style={{ fontSize: 'clamp(18px, 2.5vw, 24px)', fontWeight: 700, color: 'white', fontStyle: 'italic' }}>
                &ldquo;Families fail financially not because of income &mdash; but because of lack of structure.&rdquo;
              </p>
            </blockquote>
          </Section>
        </div>
      </section>

      {/* Credentials */}
      <section style={{ backgroundColor: '#0D1B2E', padding: '96px 24px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <Section>
            <span style={{ color: '#E8821A', fontSize: '12px', fontWeight: 700, letterSpacing: '0.15em', display: 'block', marginBottom: '16px' }}>QUALIFICATIONS</span>
            <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 40px)', fontWeight: 800, color: 'white', marginBottom: '40px' }}>
              Triple-Qualified and Extensively Experienced
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {credentials.map((c, i) => (
                <div
                  key={i}
                  style={{
                    backgroundColor: '#132037',
                    border: '1px solid #1B2A4A',
                    borderRadius: '12px',
                    padding: '20px 24px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '20px',
                  }}
                >
                  <span style={{ color: '#E8821A', fontWeight: 800, fontSize: '18px', minWidth: '60px' }}>{c.label}</span>
                  <span style={{ color: '#CBD5E1', fontSize: '15px' }}>{c.full}</span>
                </div>
              ))}
            </div>
          </Section>
        </div>
      </section>

      {/* Philosophy */}
      <section style={{ backgroundColor: '#132037', padding: '96px 24px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <Section>
            <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 40px)', fontWeight: 800, color: 'white', marginBottom: '24px' }}>
              A Family Is Not So Different from a Business
            </h2>
            <p style={{ fontSize: '17px', color: '#CBD5E1', lineHeight: 1.8, marginBottom: '32px' }}>
              Both require the same fundamentals to succeed.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '16px', marginBottom: '32px' }}>
              {businessNeeds.map((need, i) => (
                <div
                  key={i}
                  style={{
                    backgroundColor: '#0D1B2E',
                    borderRadius: '10px',
                    padding: '16px 20px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                  }}
                >
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#1995C4', flexShrink: 0 }} />
                  <span style={{ color: '#CBD5E1', fontSize: '14px', fontWeight: 500 }}>{need}</span>
                </div>
              ))}
            </div>
            <p style={{ fontSize: '16px', color: '#94A3B8', lineHeight: 1.8 }}>
              We apply structured CFO frameworks to Business Owners, Professionals &amp; PAYG Earners, Property Investors, and Families wanting financial acceleration.
            </p>
          </Section>
        </div>
      </section>

      {/* Mission */}
      <section style={{ backgroundColor: '#F0F2F7', padding: '96px 24px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <Section>
            <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 40px)', fontWeight: 800, color: '#1B2A4A', marginBottom: '32px' }}>
              Our Mission
            </h2>
            <p style={{ fontSize: '17px', color: '#475569', lineHeight: 1.8, marginBottom: '32px' }}>
              To help businesses and families move:
            </p>
            {[
              ['From complexity', 'clarity'],
              ['From stagnation', 'acceleration'],
              ['From long-term debt', 'structured freedom'],
            ].map(([from, to], i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  backgroundColor: 'white',
                  borderRadius: '10px',
                  padding: '16px 24px',
                  marginBottom: '12px',
                  boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
                }}
              >
                <span style={{ color: '#CC2027', fontSize: '15px', fontWeight: 500 }}>{from}</span>
                <span style={{ color: '#94A3B8', fontSize: '18px' }}>&rarr;</span>
                <span style={{ color: '#3D8B37', fontSize: '15px', fontWeight: 700 }}>{to}</span>
              </div>
            ))}
          </Section>
        </div>
      </section>

      {/* GPS Model */}
      <section style={{ backgroundColor: '#0D1B2E', padding: '96px 24px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <Section>
            <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 40px)', fontWeight: 800, color: 'white', marginBottom: '24px' }}>
              The Financial GPS Model&#8482;
            </h2>
            <p style={{ fontSize: '17px', color: '#CBD5E1', lineHeight: 1.9, marginBottom: '40px' }}>
              We don&apos;t just advise. We model. We structure. We implement. We review quarterly. We course-correct.
              That&apos;s why we call it the Financial GPS Model&#8482;.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '32px', flexWrap: 'wrap', marginBottom: '48px' }}>
              {['Clarity', 'Control', 'Confidence'].map((v) => (
                <div key={v} style={{ textAlign: 'center' }}>
                  <div style={{ width: '64px', height: '64px', borderRadius: '50%', backgroundColor: '#132037', border: '2px solid #1995C4', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 12px' }}>
                    <div style={{ width: '16px', height: '16px', borderRadius: '50%', backgroundColor: '#1995C4' }} />
                  </div>
                  <span style={{ color: '#1995C4', fontWeight: 700, fontSize: '14px' }}>{v}</span>
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
              Book Your Strategy Session
            </Link>
          </Section>
        </div>
      </section>
    </div>
  )
}
