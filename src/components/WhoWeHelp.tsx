'use client'
import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'

const groups = [
  {
    title: 'Families',
    body: 'Wanting financial freedom beyond the 30-year mortgage cycle.',
    accent: '#1995C4',
    have: 'A home & strong income',
    need: 'A structured debt-free plan',
    icon: (
      <svg viewBox="0 0 32 32" width="28" height="28" fill="none">
        <path d="M4 14L16 4L28 14V28H20V20H12V28H4V14Z" stroke="#1995C4" strokeWidth="2" strokeLinejoin="round" fill="rgba(25,149,196,0.1)"/>
      </svg>
    ),
  },
  {
    title: 'Professionals & PAYG Earners',
    body: 'Strong income. Ready to build structure around it.',
    accent: '#E8821A',
    have: 'High income, no system',
    need: 'A CFO-level strategy',
    icon: (
      <svg viewBox="0 0 32 32" width="28" height="28" fill="none">
        <rect x="4" y="10" width="24" height="18" rx="2" stroke="#E8821A" strokeWidth="2" fill="rgba(232,130,26,0.1)"/>
        <path d="M10 10V8C10 5.79 11.79 4 14 4H18C20.21 4 22 5.79 22 8V10" stroke="#E8821A" strokeWidth="2"/>
        <path d="M16 16V22M13 19H19" stroke="#E8821A" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: 'Business Owners',
    body: 'Growing a business and building personal wealth simultaneously.',
    accent: '#3D8B37',
    have: 'Business cash flow',
    need: 'Personal wealth architecture',
    icon: (
      <svg viewBox="0 0 32 32" width="28" height="28" fill="none">
        <path d="M6 26V14L16 6L26 14V26H6Z" stroke="#3D8B37" strokeWidth="2" fill="rgba(61,139,55,0.1)"/>
        <rect x="11" y="18" width="4" height="8" rx="1" fill="#3D8B37" opacity="0.7"/>
        <rect x="17" y="14" width="4" height="12" rx="1" fill="#3D8B37" opacity="0.5"/>
      </svg>
    ),
  },
  {
    title: 'Property Investors',
    body: 'Stuck at 1 - 2 properties. Ready to build a real portfolio system.',
    accent: '#CC2027',
    have: '1 - 2 investment properties',
    need: 'A scalable portfolio system',
    icon: (
      <svg viewBox="0 0 32 32" width="28" height="28" fill="none">
        <path d="M4 24L10 16L14 20L20 12L28 24H4Z" stroke="#CC2027" strokeWidth="2" strokeLinejoin="round" fill="rgba(204,32,39,0.1)"/>
        <circle cx="10" cy="10" r="3" stroke="#CC2027" strokeWidth="2"/>
      </svg>
    ),
  },
]

function AudienceCard({ group, index, inView }: { group: typeof groups[0]; index: number; inView: boolean }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.35 + index * 0.1 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        backgroundColor: 'white',
        borderRadius: '16px',
        padding: '28px',
        boxShadow: hovered
          ? `0 16px 48px rgba(13,27,46,0.12), 0 0 0 1.5px ${group.accent}`
          : '0 4px 20px rgba(13,27,46,0.07)',
        transform: hovered ? 'translateY(-3px)' : 'translateY(0)',
        transition: 'all 0.28s ease',
        cursor: 'default',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
      }}
    >
      {/* Icon + title */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        {group.icon}
        <h3
          style={{
            fontSize: '16px',
            fontWeight: 700,
            color: '#0D1B2E',
            lineHeight: 1.3,
          }}
        >
          {group.title}
        </h3>
      </div>

      <p style={{ fontSize: '14px', color: '#64748B', lineHeight: 1.65 }}>{group.body}</p>

      {/* Before/after mini block */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '8px',
          marginTop: '4px',
        }}
      >
        <div
          style={{
            backgroundColor: '#F0F2F7',
            borderRadius: '10px',
            padding: '10px 14px',
          }}
        >
          <p style={{ fontSize: '9px', fontWeight: 700, color: '#94A3B8', letterSpacing: '0.1em', marginBottom: '4px', textTransform: 'uppercase' }}>
            They Have
          </p>
          <p style={{ fontSize: '12px', fontWeight: 600, color: '#475569' }}>{group.have}</p>
        </div>
        <div
          style={{
            backgroundColor: group.accent + '12',
            borderRadius: '10px',
            padding: '10px 14px',
            border: `1px solid ${group.accent}22`,
          }}
        >
          <p style={{ fontSize: '9px', fontWeight: 700, color: group.accent, letterSpacing: '0.1em', marginBottom: '4px', textTransform: 'uppercase' }}>
            They Need
          </p>
          <p style={{ fontSize: '12px', fontWeight: 600, color: '#0D1B2E' }}>{group.need}</p>
        </div>
      </div>
    </motion.div>
  )
}

export default function WhoWeHelp() {
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
      <div style={{ maxWidth: '1140px', margin: '0 auto' }} ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '56px' }}
        >
          <span
            style={{
              color: '#E8821A',
              fontSize: '11px',
              fontWeight: 700,
              letterSpacing: '0.18em',
              display: 'block',
              marginBottom: '20px',
              textTransform: 'uppercase',
            }}
          >
            Who This Is For
          </span>
          <h2
            style={{
              fontSize: 'clamp(28px, 4vw, 52px)',
              fontWeight: 900,
              color: '#0D1B2E',
              lineHeight: 1.15,
              letterSpacing: '-1px',
            }}
          >
            Built for a Specific Type of Thinker.
          </h2>
        </motion.div>

        {/* Bento grid */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {/* Featured full-width card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              backgroundColor: '#0D1B2E',
              borderRadius: '20px',
              padding: '48px 56px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '32px',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Decorative background text */}
            <div
              style={{
                position: 'absolute',
                right: '-20px',
                top: '50%',
                transform: 'translateY(-50%)',
                fontSize: '120px',
                fontWeight: 900,
                color: 'white',
                opacity: 0.03,
                letterSpacing: '-6px',
                userSelect: 'none',
                pointerEvents: 'none',
              }}
            >
              STRUCTURE
            </div>

            <div style={{ flex: '1', minWidth: '280px' }}>
              <span
                style={{
                  fontSize: '11px',
                  fontWeight: 700,
                  color: '#E8821A',
                  letterSpacing: '0.15em',
                  display: 'block',
                  marginBottom: '16px',
                  textTransform: 'uppercase',
                }}
              >
                The Common Thread
              </span>
              <h3
                style={{
                  fontSize: 'clamp(22px, 2.5vw, 32px)',
                  fontWeight: 800,
                  color: 'white',
                  lineHeight: 1.3,
                  letterSpacing: '-0.5px',
                }}
              >
                They all have income. What they&apos;re missing is a structured system to turn it into permanent wealth.
              </h3>
            </div>

            <div
              style={{
                backgroundColor: 'rgba(255,255,255,0.06)',
                borderRadius: '16px',
                padding: '24px 32px',
                border: '1px solid rgba(255,255,255,0.08)',
                minWidth: '240px',
              }}
            >
              <p style={{ fontSize: '13px', color: '#94A3B8', marginBottom: '8px' }}>We serve clients who are</p>
              {['Earning well, not building wealth', 'Asset-rich, cash-flow unclear', 'Ready to think like a CFO'].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                  <div
                    style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      backgroundColor: '#E8821A',
                      flexShrink: 0,
                    }}
                  />
                  <span style={{ fontSize: '14px', color: '#CBD5E1' }}>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* 2x2 audience cards */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '20px',
            }}
          >
            {groups.map((group, i) => (
              <AudienceCard key={i} group={group} index={i} inView={inView} />
            ))}
          </div>
        </div>

        {/* Quote bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          style={{
            backgroundColor: '#0D1B2E',
            borderRadius: '16px',
            padding: '40px 48px',
            textAlign: 'center',
            marginTop: '20px',
            borderLeft: '4px solid #E8821A',
            position: 'relative',
          }}
        >
          <p
            style={{
              fontSize: 'clamp(16px, 2.2vw, 22px)',
              fontWeight: 700,
              color: 'white',
              fontStyle: 'italic',
              lineHeight: 1.55,
              maxWidth: '720px',
              margin: '0 auto',
            }}
          >
            &ldquo;Families fail financially not because of income - but because of lack of structure.&rdquo;
          </p>
        </motion.div>
      </div>
    </section>
  )
}
