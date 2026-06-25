'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useEffect, useRef } from 'react'

/* Animated rising bar chart — pure SVG, no images needed */
function WealthChart() {
  const bars = [
    { x: 0, h: 40, delay: 0 },
    { x: 52, h: 65, delay: 0.1 },
    { x: 104, h: 50, delay: 0.2 },
    { x: 156, h: 85, delay: 0.3 },
    { x: 208, h: 70, delay: 0.4 },
    { x: 260, h: 110, delay: 0.5 },
    { x: 312, h: 95, delay: 0.6 },
    { x: 364, h: 140, delay: 0.7 },
    { x: 416, h: 125, delay: 0.8 },
    { x: 468, h: 170, delay: 0.9 },
  ]
  return (
    <svg viewBox="0 0 520 200" style={{ width: '100%', height: '100%' }}>
      {bars.map((b, i) => (
        <motion.rect
          key={i}
          x={b.x}
          y={200 - b.h}
          width={36}
          height={b.h}
          rx={4}
          fill={i === bars.length - 1 ? '#CC2027' : i >= bars.length - 3 ? '#1995C4' : '#1B2A4A'}
          initial={{ scaleY: 0, originY: 1 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.6, delay: 0.8 + b.delay, ease: [0.22, 1, 0.36, 1] }}
          style={{ transformOrigin: `${b.x + 18}px 200px` }}
        />
      ))}
      {/* Trend line */}
      <motion.polyline
        points="18,160 70,135 122,150 174,115 226,130 278,90 330,105 382,60 434,75 486,30"
        fill="none"
        stroke="#CC2027"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.4, delay: 1.8, ease: 'easeInOut' }}
      />
      {/* End dot */}
      <motion.circle
        cx={486}
        cy={30}
        r={6}
        fill="#CC2027"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.4, delay: 3.2 }}
      />
    </svg>
  )
}

/* Floating stat card */
function StatCard({
  value, label, accent, delay, style,
}: {
  value: string; label: string; accent: string; delay: number
  style?: React.CSSProperties
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      style={{
        position: 'absolute',
        backgroundColor: 'rgba(13,27,46,0.92)',
        backdropFilter: 'blur(12px)',
        border: `1px solid ${accent}40`,
        borderLeft: `3px solid ${accent}`,
        borderRadius: '10px',
        padding: '14px 20px',
        minWidth: '160px',
        ...style,
      }}
    >
      <p style={{ color: accent, fontSize: '22px', fontWeight: 800, lineHeight: 1, marginBottom: '4px' }}>{value}</p>
      <p style={{ color: '#94A3B8', fontSize: '12px', letterSpacing: '0.05em' }}>{label}</p>
    </motion.div>
  )
}

export default function HeroHome() {
  return (
    <section style={{ minHeight: '100vh', backgroundColor: '#0A1628', position: 'relative', overflow: 'hidden', touchAction: 'pan-y' }}>

      {/* ── Background photo layer ── */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center 30%',
          opacity: 0.18,
        }}
      />

      {/* ── Gradient overlays ── */}
      {/* Left darkening gradient so text stays readable */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(105deg, #0A1628 45%, transparent 100%)',
      }} />
      {/* Bottom fade */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: '220px',
        background: 'linear-gradient(to top, #0A1628, transparent)',
      }} />
      {/* Red accent glow top-right */}
      <div style={{
        position: 'absolute', top: '-120px', right: '-120px',
        width: '520px', height: '520px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(204,32,39,0.12) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* ── Subtle grid lines ── */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)
        `,
        backgroundSize: '80px 80px',
      }} />

      {/* ── Main content grid ── */}
      <div style={{
        position: 'relative', zIndex: 10,
        maxWidth: '1260px', margin: '0 auto',
        padding: '0 32px',
        minHeight: '100vh',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        alignItems: 'center',
        gap: '48px',
      }}
        className="hero-grid"
      >

        {/* ── LEFT: Text ── */}
        <div style={{ paddingTop: '100px', paddingBottom: '60px' }} className="hero-left">

          {/* Credential pill */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="hero-pill"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '10px',
              background: 'rgba(25,149,196,0.12)',
              border: '1px solid rgba(25,149,196,0.3)',
              borderRadius: '100px', padding: '8px 18px',
              marginBottom: '28px',
            }}
          >
            <span style={{ width: '7px', height: '7px', borderRadius: '50%', backgroundColor: '#1995C4', display: 'block', flexShrink: 0 }} />
            <span style={{ color: '#1995C4', fontSize: '11.5px', fontWeight: 700, letterSpacing: '0.13em' }}>
              TRIPLE-QUALIFIED FINANCIAL STRATEGIST
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontSize: 'clamp(2.4rem, 4.5vw, 4rem)',
              fontWeight: 900,
              lineHeight: 1.08,
              letterSpacing: '-0.03em',
              color: 'white',
              marginBottom: '24px',
            }}
          >
            Build Wealth<br />
            Like a Business.<br />
            <span style={{
              color: '#CC2027',
              position: 'relative',
              display: 'inline-block',
            }}>
              Live with Freedom.
              {/* Red underline accent */}
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  position: 'absolute', bottom: '-4px', left: 0, right: 0,
                  height: '3px', backgroundColor: '#CC2027', borderRadius: '2px',
                  transformOrigin: 'left',
                }}
              />
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            style={{
              fontSize: '1.0625rem',
              color: '#94A3B8',
              lineHeight: 1.75,
              marginBottom: '40px',
              maxWidth: '500px',
            }}
          >
            We help families, professionals, and business owners grow their businesses whilst building structured 3 - 4 property portfolios and SMSF strategies - using the same CFO frameworks that run corporations.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.48 }}
            style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', marginBottom: '48px' }}
            className="hero-ctas"
          >
            <Link
              href="/strategy-session"
              style={{
                backgroundColor: '#CC2027',
                color: 'white',
                padding: '15px 32px',
                borderRadius: '8px',
                textDecoration: 'none',
                fontSize: '15px',
                fontWeight: 700,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                letterSpacing: '0.01em',
                boxShadow: '0 4px 24px rgba(204,32,39,0.35)',
              }}
            >
              Book Your Strategy Session
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3.5 8h9M8.5 4l4 4-4 4" stroke="white" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <Link
              href="/services"
              style={{
                color: 'white',
                padding: '15px 28px',
                borderRadius: '8px',
                textDecoration: 'none',
                fontSize: '15px',
                fontWeight: 600,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                border: '1.5px solid rgba(255,255,255,0.18)',
                backgroundColor: 'rgba(255,255,255,0.04)',
              }}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M8 4l4 4-4 4" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Download the 4 Property Blueprint
            </Link>
          </motion.div>

          {/* Trust bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="hero-trust"
            style={{
              display: 'flex', alignItems: 'center', gap: '0',
              borderTop: '1px solid rgba(255,255,255,0.08)',
              paddingTop: '24px',
              flexWrap: 'wrap',
            }}
          >
            {[
              { label: 'CPA', color: '#CC2027' },
              { label: 'ACA', color: '#E8821A' },
              { label: 'CGMA', color: '#1995C4' },
            ].map((c, i) => (
              <div key={c.label} style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '0 20px', borderRight: '1px solid rgba(255,255,255,0.1)' }}>
                  <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: c.color }} />
                  <span style={{ color: '#CBD5E1', fontSize: '13px', fontWeight: 600, letterSpacing: '0.06em' }}>{c.label}</span>
                </div>
                {i === 2 && (
                  <>
                    <span style={{ color: '#475569', fontSize: '13px', padding: '0 20px', borderRight: '1px solid rgba(255,255,255,0.1)' }}>30+ Years</span>
                    <span style={{ color: '#475569', fontSize: '13px', paddingLeft: '20px' }}>Australia Wide</span>
                  </>
                )}
              </div>
            ))}
          </motion.div>
        </div>

        {/* ── RIGHT: Visual panel ── */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          style={{
            position: 'relative',
            paddingTop: '100px',
            paddingBottom: '60px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          className="hero-visual"
        >
          {/* Main card */}
          <div style={{
            position: 'relative',
            width: '100%',
            maxWidth: '480px',
            backgroundColor: 'rgba(19,32,55,0.85)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: '20px',
            padding: '36px',
            boxShadow: '0 32px 80px rgba(0,0,0,0.5)',
          }}>
            {/* Card header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '28px' }}>
              <div>
                <p style={{ color: '#475569', fontSize: '11px', letterSpacing: '0.12em', fontWeight: 600, marginBottom: '6px' }}>PORTFOLIO GROWTH MODEL</p>
                <p style={{ color: 'white', fontSize: '28px', fontWeight: 800, lineHeight: 1 }}>30 <span style={{ color: '#CC2027' }}>→</span> 10 yrs</p>
                <p style={{ color: '#3D8B37', fontSize: '12px', fontWeight: 600, marginTop: '4px' }}>↑ Structured Acceleration</p>
              </div>
              <div style={{
                backgroundColor: 'rgba(204,32,39,0.12)', border: '1px solid rgba(204,32,39,0.3)',
                borderRadius: '8px', padding: '8px 14px',
              }}>
                <p style={{ color: '#CC2027', fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em' }}>F.A.S.T.R.A.C™</p>
              </div>
            </div>

            {/* Chart */}
            <div style={{ height: '160px', marginBottom: '28px' }}>
              <WealthChart />
            </div>

            {/* Bottom metrics row */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '12px' }}>
              {[
                { val: '3–4', sub: 'Properties', color: '#1995C4' },
                { val: 'SMSF', sub: 'Integrated', color: '#E8821A' },
                { val: '100%', sub: 'Strategy-First', color: '#3D8B37' },
              ].map((m) => (
                <div key={m.sub} style={{
                  backgroundColor: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  borderRadius: '10px',
                  padding: '14px 12px',
                  textAlign: 'center',
                }}>
                  <p style={{ color: m.color, fontSize: '18px', fontWeight: 800, lineHeight: 1, marginBottom: '4px' }}>{m.val}</p>
                  <p style={{ color: '#64748B', fontSize: '10px', letterSpacing: '0.06em' }}>{m.sub}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Floating stat cards */}
          <StatCard
            value="CPA · ACA · CGMA"
            label="Triple Qualified"
            accent="#1995C4"
            delay={1.1}
            style={{ top: '-10px', left: '-50px', minWidth: '180px' }}
          />
          <StatCard
            value="30+ yrs"
            label="CFO Experience"
            accent="#E8821A"
            delay={1.3}
            style={{ bottom: '22%', right: '-50px', minWidth: '160px' }}
          />
        </motion.div>
      </div>

      {/* ── Scroll indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.6 }}
        style={{
          position: 'absolute', bottom: '36px', left: '50%', transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px',
          zIndex: 10,
        }}
      >
        <span style={{ color: '#475569', fontSize: '11px', letterSpacing: '0.12em' }}>SCROLL</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
          style={{ width: '1px', height: '32px', background: 'linear-gradient(to bottom, #CC2027, transparent)' }}
        />
      </motion.div>

      {/* ── Mobile / responsive styles ── */}
      <style>{`
        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            padding-top: 0 !important;
            min-height: auto !important;
          }
          .hero-visual {
            display: none !important;
          }
        }
        @media (max-width: 640px) {
          .hero-left {
            padding-top: 28px !important;
            padding-bottom: 36px !important;
          }
          .hero-pill span:last-child {
            font-size: 10px !important;
            letter-spacing: 0.08em !important;
          }
          .hero-ctas {
            flex-direction: column !important;
            gap: 10px !important;
          }
          .hero-ctas a {
            width: 100% !important;
            justify-content: center !important;
          }
          .hero-trust {
            justify-content: center !important;
            gap: 0 !important;
            flex-wrap: wrap !important;
          }
          .hero-trust > div {
            flex: 0 0 auto !important;
          }
          .hero-trust > div > div {
            padding: 0 12px !important;
          }
          .hero-trust span {
            padding: 0 12px !important;
          }
        }
      `}</style>
    </section>
  )
}
