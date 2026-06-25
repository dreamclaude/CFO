'use client'
import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import Link from 'next/link'
import { LampContainer } from '@/components/ui/lamp'

/* ─── Data ────────────────────────────────────────────────────────── */

const partnerTypes = [
  {
    title: 'Accountants',
    body: 'Your clients need more than tax compliance. Refer them for structured wealth strategy that works alongside your advisory work.',
    photo: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=640&q=75',
    accent: '#1995C4',
  },
  {
    title: 'Buyers Agents',
    body: 'Before a client buys, they need financial structure. We ensure every acquisition is backed by a debt framework and roadmap.',
    photo: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=640&q=75',
    accent: '#E8821A',
  },
  {
    title: 'Financial Planners',
    body: 'We operate in the CFO strategy space — mortgage acceleration, debt structuring, SMSF integration. A natural complement, not a competitor.',
    photo: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=640&q=75',
    accent: '#3D8B37',
  },
  {
    title: 'Business Coaches',
    body: 'Business owners who scale their income need structured personal wealth plans. We translate business success into lasting wealth.',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=640&q=75',
    accent: '#CC2027',
  },
  {
    title: 'Property Strategists',
    body: 'Every property strategy needs a CFO-grade debt and cash flow framework behind it. We supply the structure that makes the strategy stick.',
    photo: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=640&q=75',
    accent: '#D4A017',
  },
  {
    title: 'Professional Networks',
    body: 'Alumni groups, professional associations, and peer networks who want to provide members access to executive-grade financial strategy.',
    photo: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=640&q=75',
    accent: '#1995C4',
  },
]

const clientBenefits = [
  { accent: '#1995C4', title: 'CFO-Level Strategy', body: 'Executive-grade financial planning applied to personal wealth — not a product pitch.' },
  { accent: '#E8821A', title: 'Integrated Credit', body: 'Strategy and lending capability working in concert, not in isolation.' },
  { accent: '#3D8B37', title: 'Structured Debt Reduction', body: 'Modelled pathways to reduce mortgage terms from 30 years to 10–12, where suitable.' },
  { accent: '#CC2027', title: 'SMSF Integration', body: 'Superannuation incorporated into the full financial blueprint — not treated as a standalone.' },
  { accent: '#D4A017', title: 'Quarterly Reviews', body: 'Ongoing accountability, reforecasting, and strategic recalibration.' },
]

const commitments = [
  'Transparent communication throughout every engagement',
  'Deep respect for your existing client relationships',
  'Clear scope — we never cross into your service area',
  'Compliance-aligned processes at every stage',
  'Agreed referral arrangements where appropriate',
]

const idealClients = [
  'High-income professionals and executives',
  'Business owners and ABN holders',
  'Property accumulators targeting 3–4 properties',
  'Families with mortgages over $400K',
  'Clients seeking structure, accountability, and long-term direction',
]

/* ─── Easing tokens ───────────────────────────────────────────────── */
const EASE_CINEMATIC = [0.16, 1, 0.3, 1] as const

/* ─── Sub-components ──────────────────────────────────────────────── */

function PartnerCard({ p, index, inView }: { p: typeof partnerTypes[0]; index: number; inView: boolean }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, delay: 0.1 + index * 0.1, ease: EASE_CINEMATIC }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative',
        borderRadius: '16px',
        overflow: 'hidden',
        height: '340px',
        cursor: 'default',
        boxShadow: hovered
          ? `0 32px 72px rgba(0,0,0,0.55), 0 0 0 1px ${p.accent}55`
          : '0 8px 32px rgba(0,0,0,0.3)',
        transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
        transition: 'box-shadow 0.45s ease, transform 0.45s ease',
      }}
    >
      {/* Photo */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url(${p.photo})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: hovered ? 'scale(1.05)' : 'scale(1)',
          transition: 'transform 0.7s ease',
        }}
      />
      {/* Gradient overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `linear-gradient(to top, ${p.accent}CC 0%, rgba(10,22,40,0.7) 50%, rgba(10,22,40,0.2) 100%)`,
          transition: 'opacity 0.45s ease',
          opacity: hovered ? 1 : 0.9,
        }}
      />
      {/* Accent line top */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '3px',
          backgroundColor: p.accent,
          transform: hovered ? 'scaleX(1)' : 'scaleX(0)',
          transformOrigin: 'left',
          transition: 'transform 0.5s ease',
        }}
      />
      {/* Content */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          padding: '32px 28px',
        }}
      >
        <h3
          style={{
            color: 'white',
            fontSize: '20px',
            fontWeight: 700,
            marginBottom: '10px',
            letterSpacing: '-0.3px',
          }}
        >
          {p.title}
        </h3>
        <p
          style={{
            color: 'rgba(255,255,255,0.82)',
            fontSize: '14px',
            lineHeight: 1.65,
            maxHeight: hovered ? '80px' : '0px',
            overflow: 'hidden',
            opacity: hovered ? 1 : 0,
            transition: 'max-height 0.45s ease, opacity 0.4s ease',
          }}
        >
          {p.body}
        </p>
      </div>
    </motion.div>
  )
}

function BenefitCard({ b, index, inView }: { b: typeof clientBenefits[0]; index: number; inView: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -24 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.65, delay: 0.15 + index * 0.09, ease: EASE_CINEMATIC }}
      style={{
        display: 'flex',
        gap: '24px',
        alignItems: 'flex-start',
        padding: '28px 32px',
        backgroundColor: 'rgba(19,32,55,0.6)',
        border: '1px solid rgba(27,42,74,0.8)',
        borderRadius: '14px',
        borderLeft: `3px solid ${b.accent}`,
      }}
    >
      <div style={{ flex: 1 }}>
        <h3 style={{ color: 'white', fontSize: '16px', fontWeight: 700, marginBottom: '8px', letterSpacing: '-0.2px' }}>
          {b.title}
        </h3>
        <p style={{ color: '#94A3B8', fontSize: '14px', lineHeight: 1.65 }}>{b.body}</p>
      </div>
    </motion.div>
  )
}

/* ─── Page ────────────────────────────────────────────────────────── */

export default function ReferralPartnersPage() {
  const gridRef = useRef(null)
  const gridInView = useInView(gridRef, { once: true, margin: '-60px' })

  const benefitsRef = useRef(null)
  const benefitsInView = useInView(benefitsRef, { once: true, margin: '-60px' })

  const commitRef = useRef(null)
  const commitInView = useInView(commitRef, { once: true, margin: '-60px' })

  return (
    <>
      {/* ── Lamp Hero ──────────────────────────────────────────────── */}
      <LampContainer>
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
          style={{ textAlign: 'center', maxWidth: '720px' }}
        >
          <motion.p
            initial={{ opacity: 0, letterSpacing: '0.3em' }}
            whileInView={{ opacity: 1, letterSpacing: '0.18em' }}
            transition={{ delay: 0.4, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            style={{
              color: '#1995C4',
              fontSize: '11px',
              fontWeight: 700,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              marginBottom: '24px',
              display: 'block',
            }}
          >
            Professional Partnerships
          </motion.p>

          <h1
            style={{
              fontSize: 'clamp(2rem, 5vw, 3.75rem)',
              fontWeight: 800,
              color: 'white',
              lineHeight: 1.08,
              letterSpacing: '-0.03em',
              marginBottom: '24px',
            }}
          >
            Build More Value<br />
            <span style={{ color: '#1995C4' }}>For Your Clients.</span>
          </h1>

          <p
            style={{
              color: 'rgba(148,163,184,0.9)',
              fontSize: '1.125rem',
              lineHeight: 1.75,
              maxWidth: '580px',
              margin: '0 auto 40px',
            }}
          >
            We partner with professionals who want their clients to experience structured financial acceleration &mdash; not just a loan or a transaction.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}
          >
            <a
              href="mailto:rukmal@intelfins.com.au"
              style={{
                backgroundColor: '#CC2027',
                color: 'white',
                padding: '14px 32px',
                borderRadius: '8px',
                textDecoration: 'none',
                fontSize: '15px',
                fontWeight: 700,
                letterSpacing: '0.01em',
                boxShadow: '0 4px 24px rgba(204,32,39,0.35)',
                display: 'inline-block',
              }}
            >
              Book a Partner Discussion
            </a>
            <Link
              href="/about"
              style={{
                color: 'rgba(203,213,225,0.85)',
                padding: '14px 28px',
                borderRadius: '8px',
                textDecoration: 'none',
                fontSize: '15px',
                fontWeight: 500,
                border: '1px solid rgba(255,255,255,0.14)',
                display: 'inline-block',
              }}
            >
              About Our Approach
            </Link>
          </motion.div>
        </motion.div>
      </LampContainer>

      {/* ── Statement Band ─────────────────────────────────────────── */}
      <section
        style={{
          backgroundColor: '#132037',
          padding: '56px 24px',
          borderTop: '1px solid rgba(27,42,74,0.8)',
          borderBottom: '1px solid rgba(27,42,74,0.8)',
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE_CINEMATIC }}
          style={{ maxWidth: '860px', margin: '0 auto', textAlign: 'center' }}
        >
          <p
            style={{
              color: 'white',
              fontSize: 'clamp(1.25rem, 2.8vw, 1.875rem)',
              fontWeight: 600,
              lineHeight: 1.5,
              letterSpacing: '-0.02em',
            }}
          >
            We do not transact.&ensp;
            <span style={{ color: '#1995C4' }}>We build roadmaps.</span>
            <br />
            <span style={{ color: 'rgba(148,163,184,0.7)', fontSize: '0.72em', fontWeight: 400, letterSpacing: 0 }}>
              Every referral enters a structured engagement, not a sales funnel.
            </span>
          </p>
        </motion.div>
      </section>

      {/* ── Partner Grid ───────────────────────────────────────────── */}
      <section
        style={{ backgroundColor: '#0D1B2E', padding: '112px 24px' }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE_CINEMATIC }}
            style={{ textAlign: 'center', marginBottom: '72px' }}
          >
            <span
              style={{
                color: '#CC2027',
                fontSize: '11px',
                fontWeight: 700,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                display: 'block',
                marginBottom: '18px',
              }}
            >
              Who We Work With
            </span>
            <h2
              style={{
                fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)',
                fontWeight: 800,
                color: 'white',
                letterSpacing: '-0.03em',
                lineHeight: 1.15,
                maxWidth: '600px',
                margin: '0 auto',
              }}
            >
              Professionals Who Refer to CFO On The Go Pro
            </h2>
          </motion.div>

          <div
            ref={gridRef}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '24px',
            }}
          >
            {partnerTypes.map((p, i) => (
              <PartnerCard key={p.title} p={p} index={i} inView={gridInView} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Client Benefits ────────────────────────────────────────── */}
      <section style={{ backgroundColor: '#0A1628', padding: '112px 24px' }}>
        <div
          ref={benefitsRef}
          style={{ maxWidth: '1100px', margin: '0 auto' }}
        >
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: EASE_CINEMATIC }}
            style={{ marginBottom: '72px' }}
          >
            <span
              style={{
                color: '#1995C4',
                fontSize: '11px',
                fontWeight: 700,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                display: 'block',
                marginBottom: '18px',
              }}
            >
              Why Refer to Us
            </span>
            <h2
              style={{
                fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)',
                fontWeight: 800,
                color: 'white',
                letterSpacing: '-0.03em',
                lineHeight: 1.15,
                maxWidth: '540px',
              }}
            >
              What Your Clients Receive
            </h2>
          </motion.div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '16px',
            }}
          >
            {clientBenefits.map((b, i) => (
              <BenefitCard key={b.title} b={b} index={i} inView={benefitsInView} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Commitments + Ideal Client ────────────────────────────── */}
      <section style={{ backgroundColor: '#F0F2F7', padding: '112px 24px' }}>
        <div
          ref={commitRef}
          style={{
            maxWidth: '1100px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '72px',
          }}
        >
          {/* Commitments */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            animate={commitInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.75, ease: EASE_CINEMATIC }}
          >
            <span style={{ color: '#CC2027', fontSize: '11px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', display: 'block', marginBottom: '16px' }}>
              Our Commitment to You
            </span>
            <h2 style={{ color: '#0D1B2E', fontSize: 'clamp(1.5rem, 2.8vw, 2.25rem)', fontWeight: 800, marginBottom: '36px', letterSpacing: '-0.02em', lineHeight: 1.25 }}>
              How We Treat Your Client Relationships
            </h2>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '18px' }}>
              {commitments.map((c, i) => (
                <motion.li
                  key={c}
                  initial={{ opacity: 0, x: -16 }}
                  animate={commitInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.55, delay: 0.2 + i * 0.08, ease: EASE_CINEMATIC }}
                  style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}
                >
                  <div
                    style={{
                      width: '22px',
                      height: '22px',
                      backgroundColor: '#3D8B37',
                      borderRadius: '50%',
                      flexShrink: 0,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginTop: '1px',
                    }}
                  >
                    <svg viewBox="0 0 12 10" width="11" height="9" fill="none">
                      <path d="M1 5L4.5 8.5L11 1.5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <p style={{ color: '#334155', fontSize: '15px', lineHeight: 1.65 }}>{c}</p>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Ideal client */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={commitInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.75, delay: 0.12, ease: EASE_CINEMATIC }}
          >
            <span style={{ color: '#1995C4', fontSize: '11px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', display: 'block', marginBottom: '16px' }}>
              Ideal Referral Client
            </span>
            <h2 style={{ color: '#0D1B2E', fontSize: 'clamp(1.5rem, 2.8vw, 2.25rem)', fontWeight: 800, marginBottom: '36px', letterSpacing: '-0.02em', lineHeight: 1.25 }}>
              Who Benefits Most from a Referral
            </h2>

            {/* Photo strip */}
            <div
              style={{
                borderRadius: '14px',
                overflow: 'hidden',
                height: '200px',
                marginBottom: '32px',
                position: 'relative',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundImage: 'url(https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=900&q=75)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center 30%',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to right, rgba(10,22,40,0.7) 0%, rgba(10,22,40,0.2) 60%)',
                }}
              />
              <div style={{ position: 'absolute', bottom: '20px', left: '24px' }}>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '11px', fontWeight: 600, letterSpacing: '0.12em', marginBottom: '4px' }}>TYPICAL PROFILE</p>
                <p style={{ color: 'white', fontSize: '16px', fontWeight: 700 }}>High-Income Professional or Business Owner</p>
              </div>
            </div>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {idealClients.map((c, i) => (
                <motion.li
                  key={c}
                  initial={{ opacity: 0, x: 16 }}
                  animate={commitInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.55, delay: 0.25 + i * 0.08, ease: EASE_CINEMATIC }}
                  style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}
                >
                  <span style={{ color: '#1995C4', fontSize: '20px', fontWeight: 700, flexShrink: 0, lineHeight: 1.3 }}>›</span>
                  <p style={{ color: '#334155', fontSize: '15px', lineHeight: 1.6 }}>{c}</p>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* ── Final CTA ──────────────────────────────────────────────── */}
      <section
        style={{
          backgroundColor: '#0D1B2E',
          padding: '112px 24px',
          textAlign: 'center',
          borderTop: '1px solid rgba(27,42,74,0.8)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Radial glow */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '600px',
            height: '400px',
            borderRadius: '50%',
            background: 'radial-gradient(ellipse, rgba(204,32,39,0.08) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE_CINEMATIC }}
          style={{ maxWidth: '700px', margin: '0 auto', position: 'relative' }}
        >
          <span
            style={{
              color: '#1995C4',
              fontSize: '11px',
              fontWeight: 700,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              display: 'block',
              marginBottom: '20px',
            }}
          >
            Let&apos;s Build Together
          </span>
          <h2
            style={{
              color: 'white',
              fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)',
              fontWeight: 800,
              letterSpacing: '-0.03em',
              lineHeight: 1.15,
              marginBottom: '20px',
            }}
          >
            If Your Clients Deserve Strategic Financial Direction &mdash; Let&apos;s Connect.
          </h2>
          <p
            style={{
              color: '#94A3B8',
              fontSize: '1.0625rem',
              lineHeight: 1.7,
              maxWidth: '520px',
              margin: '0 auto 44px',
            }}
          >
            Book a Partner Discussion to explore how we can serve your clients together &mdash; with clear scope, compliance alignment, and mutual respect.
          </p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href="mailto:rukmal@intelfins.com.au"
              style={{
                display: 'inline-block',
                backgroundColor: '#CC2027',
                color: 'white',
                padding: '16px 40px',
                borderRadius: '8px',
                textDecoration: 'none',
                fontSize: '16px',
                fontWeight: 700,
                boxShadow: '0 4px 24px rgba(204,32,39,0.35)',
              }}
            >
              Book a Partner Discussion
            </a>
          </div>
          <p style={{ color: '#475569', fontSize: '12px', marginTop: '24px' }}>
            rukmal@intelfins.com.au &nbsp;&middot;&nbsp; Australia Wide
          </p>
        </motion.div>
      </section>
    </>
  )
}
