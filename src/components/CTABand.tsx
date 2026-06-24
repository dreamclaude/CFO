'use client'
import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import Link from 'next/link'

const reasons = [
  { label: 'No obligation — just clarity', accent: '#3D8B37' },
  { label: 'CFO-level strategy, not a loan pitch', accent: '#1995C4' },
  { label: 'A financial direction, not just a rate', accent: '#E8821A' },
]

export default function CTABand() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [primaryHovered, setPrimaryHovered] = useState(false)
  const [secondaryHovered, setSecondaryHovered] = useState(false)

  return (
    <section
      style={{
        position: 'relative',
        padding: '108px 24px',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #CC2027 0%, #a01820 50%, #CC2027 100%)',
        backgroundSize: '400% 400%',
      }}
    >
      {/* Diagonal stripe texture */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'repeating-linear-gradient(45deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 32px)',
          pointerEvents: 'none',
        }}
      />

      {/* Gradient overlay for depth */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse at 50% 50%, rgba(0,0,0,0.15) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      {/* Decorative background word */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontSize: 'clamp(80px, 18vw, 200px)',
          fontWeight: 900,
          color: 'white',
          opacity: 0.045,
          letterSpacing: '-8px',
          userSelect: 'none',
          pointerEvents: 'none',
          whiteSpace: 'nowrap',
        }}
      >
        FREEDOM
      </div>

      <div
        ref={ref}
        style={{
          maxWidth: '800px',
          margin: '0 auto',
          textAlign: 'center',
          position: 'relative',
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span
            style={{
              display: 'inline-block',
              backgroundColor: 'rgba(255,255,255,0.15)',
              borderRadius: '100px',
              padding: '6px 20px',
              fontSize: '11px',
              fontWeight: 700,
              color: 'white',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              marginBottom: '28px',
            }}
          >
            Take the First Step
          </span>

          <h2
            style={{
              fontSize: 'clamp(28px, 4.5vw, 56px)',
              fontWeight: 900,
              color: 'white',
              lineHeight: 1.15,
              marginBottom: '20px',
              letterSpacing: '-1px',
            }}
          >
            This Is Not a Loan Conversation. This Is a Strategy Conversation.
          </h2>

          <p
            style={{
              fontSize: '18px',
              color: 'rgba(255,255,255,0.85)',
              lineHeight: 1.7,
              marginBottom: '44px',
              maxWidth: '600px',
              margin: '0 auto 44px',
            }}
          >
            Book a Strategy Session and receive a clear financial direction &mdash; not just a loan approval.
          </p>

          {/* Buttons */}
          <div
            style={{
              display: 'flex',
              gap: '16px',
              justifyContent: 'center',
              flexWrap: 'wrap',
              marginBottom: '40px',
            }}
          >
            <Link
              href="/strategy-session"
              onMouseEnter={() => setPrimaryHovered(true)}
              onMouseLeave={() => setPrimaryHovered(false)}
              style={{
                display: 'inline-block',
                backgroundColor: primaryHovered ? '#F8FAFC' : 'white',
                color: '#CC2027',
                padding: '18px 40px',
                borderRadius: '10px',
                textDecoration: 'none',
                fontSize: '17px',
                fontWeight: 700,
                boxShadow: primaryHovered
                  ? '0 16px 48px rgba(0,0,0,0.3)'
                  : '0 8px 24px rgba(0,0,0,0.2)',
                transform: primaryHovered ? 'translateY(-2px)' : 'translateY(0)',
                transition: 'all 0.22s ease',
                letterSpacing: '-0.2px',
              }}
            >
              Book Your Strategy Session Now
            </Link>

            <Link
              href="/about"
              onMouseEnter={() => setSecondaryHovered(true)}
              onMouseLeave={() => setSecondaryHovered(false)}
              style={{
                display: 'inline-block',
                backgroundColor: secondaryHovered ? 'rgba(255,255,255,0.15)' : 'transparent',
                color: 'white',
                padding: '18px 36px',
                borderRadius: '10px',
                textDecoration: 'none',
                fontSize: '17px',
                fontWeight: 600,
                border: '2px solid rgba(255,255,255,0.5)',
                transform: secondaryHovered ? 'translateY(-2px)' : 'translateY(0)',
                transition: 'all 0.22s ease',
              }}
            >
              Learn More
            </Link>
          </div>

          {/* 3 reasons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            style={{
              display: 'flex',
              justifyContent: 'center',
              flexWrap: 'wrap',
              gap: '24px',
              marginBottom: '40px',
            }}
          >
            {reasons.map((r, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                {/* Checkmark icon */}
                <svg viewBox="0 0 18 18" width="18" height="18" fill="none">
                  <circle cx="9" cy="9" r="9" fill="rgba(255,255,255,0.2)"/>
                  <path d="M5 9L8 12L13 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span style={{ fontSize: '14px', color: 'rgba(255,255,255,0.9)', fontWeight: 500 }}>
                  {r.label}
                </span>
              </div>
            ))}
          </motion.div>

          <p
            style={{
              fontSize: '12px',
              color: 'rgba(255,255,255,0.5)',
              lineHeight: 1.7,
              maxWidth: '600px',
              margin: '0 auto',
            }}
          >
            Strategy provided via CFO On The Go Pro. Credit assistance via Intelligent Finance Specialists. Subject to individual suitability and regulatory requirements.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
