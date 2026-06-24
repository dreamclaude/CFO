'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function HeroHome() {
  return (
    <section
      style={{
        minHeight: '100vh',
        backgroundColor: '#0D1B2E',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '120px 24px 80px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background arrows motif */}
      <div style={{ position: 'absolute', inset: 0, opacity: 0.04, pointerEvents: 'none' }}>
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          {[...Array(8)].map((_, row) =>
            [...Array(12)].map((_, col) => (
              <text
                key={`${row}-${col}`}
                x={col * 120 + (row % 2 === 0 ? 0 : 60)}
                y={row * 100 + 60}
                fontSize="48"
                fill="white"
                fontFamily="sans-serif"
              >
                &#8593;
              </text>
            ))
          )}
        </svg>
      </div>

      <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
        {/* Trust badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            backgroundColor: '#132037',
            border: '1px solid #1B2A4A',
            borderRadius: '100px',
            padding: '8px 20px',
            marginBottom: '32px',
          }}
        >
          <span style={{ color: '#1995C4', fontSize: '12px', fontWeight: 600, letterSpacing: '0.1em' }}>TRIPLE-QUALIFIED FINANCIAL STRATEGIST</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{
            fontSize: 'clamp(36px, 6vw, 72px)',
            fontWeight: 800,
            lineHeight: 1.1,
            marginBottom: '24px',
            color: 'white',
          }}
        >
          Build Wealth Like a Business.{' '}
          <span style={{ color: '#CC2027' }}>Live with Financial Freedom.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            fontSize: 'clamp(16px, 2vw, 20px)',
            color: '#CBD5E1',
            lineHeight: 1.7,
            marginBottom: '40px',
            maxWidth: '720px',
            margin: '0 auto 40px',
          }}
        >
          We help families, professionals, and business owners grow their businesses whilst building structured 3&ndash;4 property portfolios and SMSF strategies using proven CFO-level financial systems.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '48px' }}
        >
          <Link
            href="/strategy-session"
            style={{
              backgroundColor: '#CC2027',
              color: 'white',
              padding: '16px 32px',
              borderRadius: '8px',
              textDecoration: 'none',
              fontSize: '16px',
              fontWeight: 700,
              display: 'inline-block',
            }}
          >
            Book Your Strategy Session
          </Link>
          <Link
            href="/services"
            style={{
              backgroundColor: 'transparent',
              color: 'white',
              padding: '16px 32px',
              borderRadius: '8px',
              textDecoration: 'none',
              fontSize: '16px',
              fontWeight: 600,
              border: '2px solid #1B2A4A',
              display: 'inline-block',
            }}
          >
            Download the 4 Property Blueprint
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '24px',
            flexWrap: 'wrap',
          }}
        >
          {['CPA', 'ACA', 'CGMA'].map((cred) => (
            <div key={cred} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#1995C4' }} />
              <span style={{ color: '#94A3B8', fontSize: '13px', fontWeight: 600 }}>{cred}</span>
            </div>
          ))}
          <span style={{ color: '#475569', fontSize: '13px' }}>30+ Years Experience</span>
          <span style={{ color: '#475569', fontSize: '13px' }}>Strategy-First Approach</span>
        </motion.div>
      </div>
    </section>
  )
}
