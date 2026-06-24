'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'

export default function CTABand() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section style={{ backgroundColor: '#CC2027', padding: '96px 24px' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 800, color: 'white', lineHeight: 1.2, marginBottom: '20px' }}>
            This Is Not a Loan Conversation. This Is a Strategy Conversation.
          </h2>
          <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.85)', lineHeight: 1.7, marginBottom: '40px' }}>
            Book a Strategy Session and receive a clear financial direction &mdash; not just a loan approval.
          </p>
          <Link
            href="/strategy-session"
            style={{
              display: 'inline-block',
              backgroundColor: 'white',
              color: '#CC2027',
              padding: '18px 40px',
              borderRadius: '8px',
              textDecoration: 'none',
              fontSize: '18px',
              fontWeight: 700,
              marginBottom: '32px',
            }}
          >
            Book Your Strategy Session Now
          </Link>
          <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.7 }}>
            Strategy provided via CFO On The Go Pro. Credit assistance via Intelligent Finance Specialists. Subject to individual suitability and regulatory requirements.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
