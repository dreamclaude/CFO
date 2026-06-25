'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const timelinePoints = [
  {
    label: 'Structure',
    desc: 'Design your debt framework, offset allocation, and surplus strategy from day one.',
    accent: '#1995C4',
  },
  {
    label: 'Discipline',
    desc: 'Monthly deployment of every surplus dollar against principal — modelled, tracked, adjusted.',
    accent: '#E8821A',
  },
  {
    label: 'Freedom',
    desc: 'Debt-free in 10–12 years, with a growing investment portfolio running alongside.',
    accent: '#3D8B37',
  },
]

export default function From30to10() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      style={{
        backgroundColor: '#132037',
        padding: 'clamp(48px, 8vw, 108px) 24px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative glows */}
      <div
        style={{
          position: 'absolute',
          top: '40%',
          left: '10%',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(204,32,39,0.07) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '30%',
          right: '15%',
          width: '300px',
          height: '300px',
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
          gap: '80px',
          alignItems: 'center',
        }}
      >
        {/* LEFT — Oversized stat */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ textAlign: 'center' }}
        >
          {/* Decorative ring behind numbers */}
          <div style={{ position: 'relative', display: 'inline-block', marginBottom: '16px' }}>
            <div
              style={{
                position: 'absolute',
                inset: '-24px',
                borderRadius: '50%',
                border: '1px solid rgba(204,32,39,0.12)',
                pointerEvents: 'none',
              }}
            />

            {/* 30 yrs — muted "before" */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span
                style={{
                  display: 'block',
                  fontSize: 'clamp(64px, 10vw, 120px)',
                  fontWeight: 900,
                  color: '#334155',
                  lineHeight: 1,
                  letterSpacing: '-4px',
                }}
              >
                30
              </span>
              <span
                style={{
                  display: 'block',
                  fontSize: '18px',
                  fontWeight: 600,
                  color: '#475569',
                  letterSpacing: '0.06em',
                  marginBottom: '8px',
                }}
              >
                YEARS
              </span>
            </motion.div>

            {/* Arrow */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.45, type: 'spring', stiffness: 200 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                margin: '8px 0',
              }}
            >
              <div style={{ flex: 1, height: '2px', backgroundColor: '#CC2027', opacity: 0.4 }} />
              <span
                style={{
                  fontSize: '36px',
                  color: '#CC2027',
                  fontWeight: 300,
                  lineHeight: 1,
                }}
              >
                &darr;
              </span>
              <div style={{ flex: 1, height: '2px', backgroundColor: '#CC2027', opacity: 0.4 }} />
            </motion.div>

            {/* 10–12 yrs — bright "after" */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <span
                style={{
                  display: 'block',
                  fontSize: 'clamp(56px, 9vw, 108px)',
                  fontWeight: 900,
                  color: 'white',
                  lineHeight: 1,
                  letterSpacing: '-4px',
                }}
              >
                10 - 12
              </span>
              <span
                style={{
                  display: 'block',
                  fontSize: '18px',
                  fontWeight: 700,
                  color: '#1995C4',
                  letterSpacing: '0.08em',
                }}
              >
                YEARS
              </span>
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.8 }}
            style={{
              fontSize: '13px',
              color: '#64748B',
              marginTop: '24px',
              fontStyle: 'italic',
            }}
          >
            On average, with structured strategy
          </motion.p>
        </motion.div>

        {/* RIGHT — Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
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
            Mortgage Acceleration
          </span>

          <h2
            style={{
              fontSize: 'clamp(26px, 3.2vw, 44px)',
              fontWeight: 800,
              color: 'white',
              lineHeight: 1.2,
              marginBottom: '24px',
              letterSpacing: '-0.5px',
            }}
          >
            From 30 Years to 10. This Is Not a Dream - It - s a System.
          </h2>

          <p
            style={{
              fontSize: '17px',
              color: '#CBD5E1',
              lineHeight: 1.8,
              marginBottom: '40px',
            }}
          >
            Most Australians accept a 30-year mortgage. We don&apos;t. With structure, discipline, and strategic modelling, many of our clients work toward becoming debt-free in 8 - 12 years while simultaneously building investment assets. That changes retirement. That changes freedom.
          </p>

          {/* Vertical timeline */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {timelinePoints.map((point, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.12 }}
                style={{
                  display: 'flex',
                  gap: '20px',
                  paddingBottom: i < timelinePoints.length - 1 ? '28px' : '0',
                }}
              >
                {/* Dot + line */}
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    flexShrink: 0,
                  }}
                >
                  <div
                    style={{
                      width: '12px',
                      height: '12px',
                      borderRadius: '50%',
                      backgroundColor: point.accent,
                      boxShadow: `0 0 0 3px ${point.accent}22`,
                      flexShrink: 0,
                    }}
                  />
                  {i < timelinePoints.length - 1 && (
                    <div
                      style={{
                        flex: 1,
                        width: '1px',
                        backgroundColor: 'rgba(255,255,255,0.08)',
                        marginTop: '6px',
                      }}
                    />
                  )}
                </div>

                {/* Text */}
                <div style={{ paddingTop: '-2px' }}>
                  <span
                    style={{
                      fontSize: '13px',
                      fontWeight: 700,
                      color: point.accent,
                      letterSpacing: '0.08em',
                      display: 'block',
                      marginBottom: '6px',
                    }}
                  >
                    {point.label}
                  </span>
                  <p style={{ fontSize: '14px', color: '#94A3B8', lineHeight: 1.6 }}>{point.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.9 }}
            style={{
              fontSize: '12px',
              color: '#475569',
              fontStyle: 'italic',
              marginTop: '32px',
              lineHeight: 1.6,
            }}
          >
            Subject to individual circumstances and suitability assessment. Outcomes are not guaranteed.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
