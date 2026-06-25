'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const credentials = [
  { label: 'CPA', color: '#1995C4' },
  { label: 'ACA', color: '#E8821A' },
  { label: 'CGMA', color: '#3D8B37' },
  { label: 'Lending Specialist', color: '#CC2027' },
  { label: 'SMSF Strategist', color: '#D4A017' },
]

const floatingBadges = ['CPA', 'ACA', 'CGMA']

export default function WhyUs() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      style={{
        backgroundColor: '#0D1B2E',
        padding: '108px 23px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background radial glow */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '25%',
          transform: 'translate(-50%, -50%)',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(25,149,196,0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div
        ref={ref}
        style={{
          maxWidth: '1140px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '72px',
          alignItems: 'center',
        }}
      >
        {/* LEFT — Photo placeholder */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ position: 'relative' }}
        >
          {/* Main photo card */}
          <div
            style={{
              background: 'linear-gradient(160deg, #1B2A4A 0%, #0D1B2E 60%, #132037 100%)',
              borderRadius: '24px',
              height: '480px',
              position: 'relative',
              overflow: 'hidden',
              border: '1px solid rgba(25,149,196,0.15)',
              boxShadow: '0 32px 80px rgba(0,0,0,0.4), 0 8px 24px rgba(0,0,0,0.2)',
            }}
          >
            {/* Owner photo */}
            <img
              src="/owner-photo.jpeg"
              alt="Nalin (Rukmal) Wijesooriya — CFO On The Go Pro"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center top',   // keeps face in frame
                borderRadius: '16px',
              }}
            />

            {/* Overlay gradient at bottom */}
            <div
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: '160px',
                background: 'linear-gradient(transparent, #0D1B2E)',
              }}
            />

            {/* Professional label */}
            <div
              style={{
                position: 'absolute',
                bottom: '24px',
                left: '24px',
                right: '24px',
              }}
            >
              <p style={{ fontSize: '13px', color: '#94A3B8', marginBottom: '4px' }}>Leading Strategist</p>
              <p style={{ fontSize: '16px', fontWeight: 700, color: 'white' }}>CFO On The Go Pro</p>
            </div>

            {/* Top accent line */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '3px',
                background: 'linear-gradient(90deg, #1995C4, #3D8B37)',
              }}
            />
          </div>

          {/* Floating credential badges */}
          {floatingBadges.map((badge, i) => (
            <motion.div
              key={badge}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
              style={{
                position: 'absolute',
                top: `${80 + i * 120}px`,
                right: '-20px',
                background: 'rgba(19,32,55,0.85)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(255,255,255,0.12)',
                borderRadius: '12px',
                padding: '10px 18px',
                color: 'white',
                fontSize: '13px',
                fontWeight: 700,
                letterSpacing: '0.08em',
                boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
              }}
            >
              {badge}
            </motion.div>
          ))}

          {/* Years stat badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.8 }}
            style={{
              position: 'absolute',
              bottom: '-63px',
              left: '-60px',
              background: '#CC2027',
              borderRadius: '16px',
              padding: '16px 24px',
              boxShadow: '0 12px 32px rgba(204,32,39,0.4)',
            }}
          >
            <p style={{ fontSize: '32px', fontWeight: 900, color: 'white', lineHeight: 1 }}>30+</p>
            <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.8)', marginTop: '4px' }}>Years Experience</p>
          </motion.div>
        </motion.div>

        {/* RIGHT — Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
          style={{ paddingTop: '24px' }}
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
            Your Unique Edge
          </span>

          <h2
            style={{
              fontSize: 'clamp(28px, 3.5vw, 48px)',
              fontWeight: 900,
              color: 'white',
              lineHeight: 1.15,
              marginBottom: '24px',
              letterSpacing: '-0.5px',
            }}
          >
            Led by a Triple - Qualified Financial Strategist
          </h2>

          <p
            style={{
              fontSize: '17px',
              color: '#CBD5E1',
              lineHeight: 1.8,
              marginBottom: '36px',
            }}
          >
            We bring CFO-level financial strategy - traditionally reserved for large corporations - directly into your personal wealth journey. For 30+ years, we've helped businesses achieve structured growth. Now we apply the same proven frameworks to families and investors.
          </p>

          {/* Credential pills */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '36px' }}>
            {credentials.map((c) => (
              <span
                key={c.label}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  backgroundColor: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  color: '#CBD5E1',
                  padding: '7px 16px',
                  borderRadius: '100px',
                  fontSize: '13px',
                  fontWeight: 600,
                }}
              >
                <span
                  style={{
                    width: '7px',
                    height: '7px',
                    borderRadius: '50%',
                    backgroundColor: c.color,
                    flexShrink: 0,
                  }}
                />
                {c.label}
              </span>
            ))}
          </div>

          {/* Divider */}
          <div
            style={{
              height: '1px',
              background: 'linear-gradient(90deg, rgba(25,149,196,0.4), transparent)',
              marginBottom: '32px',
            }}
          />

          {/* Stat block */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <div>
              <p
                style={{
                  fontSize: '48px',
                  fontWeight: 900,
                  color: 'white',
                  lineHeight: 1,
                  letterSpacing: '-2px',
                }}
              >
                30+
              </p>
              <p style={{ fontSize: '14px', color: '#94A3B8', marginTop: '6px' }}>
                Years delivering CFO-grade strategy
              </p>
            </div>
            <div
              style={{
                width: '1px',
                height: '56px',
                backgroundColor: '#1B2A4A',
                flexShrink: 0,
              }}
            />
            <div>
              <p
                style={{
                  fontSize: '48px',
                  fontWeight: 900,
                  color: '#1995C4',
                  lineHeight: 1,
                  letterSpacing: '-2px',
                }}
              >
                3x
              </p>
              <p style={{ fontSize: '14px', color: '#94A3B8', marginTop: '6px' }}>
                Qualified: CPA, ACA, CGMA
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
