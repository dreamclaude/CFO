'use client'
import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'

const steps = [
  {
    label: 'CLARITY',
    accent: '#1995C4',
    body: 'Define goals, map borrowing power, and assess your full financial position.',
    num: '01',
  },
  {
    label: 'STRUCTURE',
    accent: '#E8821A',
    body: 'Design lending structures, entities, and financial foundations for the long term.',
    num: '02',
  },
  {
    label: 'ACQUIRE',
    accent: '#3D8B37',
    body: 'Strategic property selection aligned to your long-term wealth plan.',
    num: '03',
  },
  {
    label: 'OPTIMISE',
    accent: '#CC2027',
    body: 'Tax positioning, cashflow improvement, and structured debt recycling.',
    num: '04',
  },
  {
    label: 'ACCELERATE',
    accent: '#D4A017',
    body: 'Reduce a 30-year mortgage to 10&ndash;12 years through structured cash flow discipline.',
    num: '05',
    isFinal: true,
  },
]

function StepNode({ step, index, inView, isLast }: { step: typeof steps[0]; index: number; inView: boolean; isLast: boolean }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        flex: isLast ? '1.3' : '1',
        position: 'relative',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.55, delay: 0.3 + index * 0.12 }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'default' }}
      >
        {/* Step number tiny label */}
        <span
          style={{
            fontSize: '10px',
            fontWeight: 700,
            color: '#475569',
            letterSpacing: '0.15em',
            marginBottom: '8px',
          }}
        >
          {step.num}
        </span>

        {/* Circle */}
        <div
          style={{
            width: isLast ? '96px' : '80px',
            height: isLast ? '96px' : '80px',
            borderRadius: '50%',
            backgroundColor: step.accent,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: hovered
              ? `0 0 0 8px ${step.accent}22, 0 16px 40px ${step.accent}44`
              : isLast
              ? `0 0 0 4px ${step.accent}33, 0 8px 24px ${step.accent}33`
              : `0 4px 16px ${step.accent}33`,
            transform: hovered ? 'scale(1.08)' : 'scale(1)',
            transition: 'all 0.28s ease',
            position: 'relative',
          }}
        >
          {/* Inner number */}
          <span
            style={{
              fontSize: isLast ? '28px' : '24px',
              fontWeight: 900,
              color: 'white',
              letterSpacing: '-1px',
            }}
          >
            {index + 1}
          </span>

          {/* Pulse ring for final step */}
          {isLast && (
            <motion.div
              animate={{ scale: [1, 1.25, 1], opacity: [0.4, 0, 0.4] }}
              transition={{ duration: 2.5, repeat: Infinity }}
              style={{
                position: 'absolute',
                inset: '-12px',
                borderRadius: '50%',
                border: `2px solid ${step.accent}`,
              }}
            />
          )}
        </div>

        {/* Label */}
        <span
          style={{
            fontSize: isLast ? '12px' : '11px',
            fontWeight: 700,
            color: step.accent,
            letterSpacing: '0.15em',
            marginTop: '16px',
            marginBottom: '12px',
          }}
        >
          {step.label}
        </span>

        {/* Description */}
        <p
          style={{
            fontSize: '13px',
            color: '#94A3B8',
            lineHeight: 1.6,
            textAlign: 'center',
            maxWidth: '140px',
          }}
          dangerouslySetInnerHTML={{ __html: step.body }}
        />
      </motion.div>
    </div>
  )
}

export default function BlueprintFramework() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      style={{
        backgroundColor: '#0D1B2E',
        padding: '108px 24px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Radial glow behind content */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '800px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(ellipse, rgba(25,149,196,0.07) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: '1140px', margin: '0 auto' }} ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '80px' }}
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
            Signature Framework
          </span>
          <h2
            style={{
              fontSize: 'clamp(28px, 4vw, 52px)',
              fontWeight: 900,
              color: 'white',
              lineHeight: 1.15,
              marginBottom: '16px',
              letterSpacing: '-1px',
            }}
          >
            The CFO Wealth Blueprint&#8482;
          </h2>
          <p
            style={{
              fontSize: '17px',
              color: '#94A3B8',
              maxWidth: '560px',
              margin: '0 auto',
              lineHeight: 1.7,
            }}
          >
            Every client engagement follows this structured pathway - where suitable and appropriate.
          </p>
        </motion.div>

        {/* Timeline — horizontal on desktop, vertical on mobile */}
        <div className="blueprint-timeline" style={{ marginBottom: '72px' }}>
          {steps.map((step, i) => (
            <div key={i} className="blueprint-step-wrap">
              <StepNode step={step} index={i} inView={inView} isLast={i === steps.length - 1} />

              {/* Connector between steps */}
              {i < steps.length - 1 && (
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={inView ? { scaleX: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.12 }}
                  className="blueprint-connector"
                >
                  <div style={{ flex: 1, height: '1px', borderTop: '2px dashed #1B2A4A' }} />
                  <div style={{ borderTop: '5px solid transparent', borderBottom: '5px solid transparent', borderLeft: '7px solid #1B2A4A', flexShrink: 0 }} />
                </motion.div>
              )}
            </div>
          ))}
        </div>

        <style>{`
          .blueprint-timeline {
            position: relative;
            display: flex;
            align-items: flex-start;
            justify-content: center;
            gap: 0;
          }
          .blueprint-step-wrap {
            display: flex;
            align-items: flex-start;
            flex: 1;
          }
          .blueprint-step-wrap:last-child { flex: 1.3; }
          .blueprint-connector {
            display: flex;
            align-items: center;
            margin-top: 50px;
            flex: 0 0 32px;
            transform-origin: left;
          }
          @media (max-width: 640px) {
            .blueprint-timeline {
              flex-direction: column;
              align-items: stretch;
              gap: 0;
            }
            .blueprint-step-wrap {
              flex-direction: column !important;
              align-items: center !important;
              flex: unset !important;
            }
            .blueprint-step-wrap:last-child { flex: unset !important; }
            .blueprint-connector {
              flex-direction: column !important;
              flex: unset !important;
              margin-top: 0 !important;
              height: 32px;
              width: auto;
              align-items: center;
            }
            .blueprint-connector > div:first-child {
              border-top: none !important;
              border-left: 2px dashed #1B2A4A;
              width: 1px;
              height: 100%;
              flex: 1;
            }
            .blueprint-connector > div:last-child {
              border-left: 5px solid transparent !important;
              border-right: 5px solid transparent !important;
              border-top: 7px solid #1B2A4A !important;
              border-bottom: none !important;
            }
          }
        `}</style>

        {/* Banner card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.9 }}
          style={{
            background: 'linear-gradient(135deg, #132037 0%, #1B2A4A 100%)',
            borderRadius: '20px',
            padding: '36px 48px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '24px',
            border: '1px solid rgba(212,160,23,0.2)',
            boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '24px', flexWrap: 'wrap' }}>
            <div
              style={{
                fontSize: 'clamp(28px, 4vw, 48px)',
                fontWeight: 900,
                color: '#475569',
                lineHeight: 1,
                letterSpacing: '-2px',
              }}
            >
              30 yrs
            </div>
            <div style={{ fontSize: '32px', color: '#CC2027', fontWeight: 300 }}>&rarr;</div>
            <div
              style={{
                fontSize: 'clamp(28px, 4vw, 48px)',
                fontWeight: 900,
                color: '#D4A017',
                lineHeight: 1,
                letterSpacing: '-2px',
              }}
            >
              10 - 12 yrs
            </div>
          </div>
          <div style={{ maxWidth: '420px' }}>
            <p style={{ fontSize: '15px', color: '#CBD5E1', lineHeight: 1.7, marginBottom: '8px' }}>
              On average, clients following the Accelerate step achieve debt freedom in under 12 years while building a parallel investment portfolio.
            </p>
            <p style={{ fontSize: '11px', color: '#475569' }}>
              Where suitable and appropriate. Subject to individual circumstances. Strategy-led and compliance-aligned.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
