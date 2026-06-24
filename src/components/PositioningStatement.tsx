'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function PositioningStatement() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section style={{ backgroundColor: '#132037', padding: '80px 24px', borderTop: '1px solid #1B2A4A', borderBottom: '1px solid #1B2A4A' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
        <motion.p
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ fontSize: 'clamp(18px, 2.5vw, 26px)', lineHeight: 1.7, color: '#CBD5E1', fontWeight: 500 }}
        >
          Most accountants look <span style={{ color: '#CC2027', fontWeight: 700 }}>backward</span>.
          Most brokers focus on the <span style={{ color: '#CC2027', fontWeight: 700 }}>transaction</span>.
          We operate like your personal <span style={{ color: '#1995C4', fontWeight: 700 }}>CFO</span> &mdash; forward-focused, strategic, and accountable.
        </motion.p>
      </div>
    </section>
  )
}
