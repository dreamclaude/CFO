import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Book a Strategy Session | CFO On The Go Pro',
  description:
    'Your 30-year plan may be too slow. In 45 minutes, we assess your mortgage reduction potential, debt recycling suitability, and build a structured wealth roadmap.',
}

const idealFor = [
  'Earn strong PAYG or business income',
  'Have a mortgage over $400K+',
  'Want to build investment assets',
  'Feel you are performing well but not truly accelerating',
  'Want structure and accountability — not guesswork',
]

const callSteps = [
  {
    num: '01',
    accent: '#1995C4',
    title: 'Financial Snapshot Review',
    items: ['Income structure and cash flow capacity', 'Current debt position and composition', 'Investment position and equity available', 'Tax and superannuation overview'],
  },
  {
    num: '02',
    accent: '#E8821A',
    title: 'Acceleration Assessment',
    items: ['Loan reduction potential and timeline modelling', 'Debt recycling suitability (subject to circumstances)', 'SMSF leverage options where appropriate', 'Risk exposure and buffer analysis'],
  },
  {
    num: '03',
    accent: '#3D8B37',
    title: 'Strategic Roadmap',
    items: ['3–5 year financial acceleration model outline', 'Key milestones and measurable targets', 'Risk controls and contingency positions', 'Clear next steps and implementation pathway'],
  },
]

export default function StrategySessionPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ backgroundColor: '#0D1B2E', padding: '140px 24px 96px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ color: '#CC2027', fontSize: '12px', fontWeight: 700, letterSpacing: '0.18em', marginBottom: '20px' }}>
            CFO WEALTH STRATEGY SESSION
          </p>
          <h1 style={{ color: 'white', fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 900, lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: '24px' }}>
            Your 30-Year Plan<br />May Be Too Slow.
          </h1>
          <p style={{ color: '#94A3B8', fontSize: '1.25rem', lineHeight: 1.65, marginBottom: '16px' }}>
            Let&apos;s build a smarter one.
          </p>
          <p style={{ color: '#64748B', fontSize: '1.0625rem', lineHeight: 1.65, maxWidth: '620px', margin: '0 auto 48px' }}>
            In 45 minutes, we assess whether you can reduce your mortgage term dramatically, implement structured debt recycling, integrate SMSF strategically, and build a measurable wealth roadmap.
          </p>
          <div style={{ display: 'inline-block', backgroundColor: '#132037', border: '1px solid #1B2A4A', borderRadius: '8px', padding: '16px 32px', marginBottom: '40px' }}>
            <p style={{ color: '#94A3B8', fontSize: '14px', letterSpacing: '0.08em' }}>No fluff &nbsp;&middot;&nbsp; No pressure &nbsp;&middot;&nbsp; Just clarity</p>
          </div>
          <br />
          <a
            href="#book"
            style={{ display: 'inline-block', backgroundColor: '#CC2027', color: 'white', padding: '18px 44px', borderRadius: '8px', textDecoration: 'none', fontSize: '18px', fontWeight: 700 }}
          >
            Book Your Strategy Session Now
          </a>
        </div>
      </section>

      {/* What this is NOT */}
      <section style={{ backgroundColor: '#132037', padding: '64px 24px', borderTop: '1px solid #1B2A4A', borderBottom: '1px solid #1B2A4A' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ color: 'white', fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)', fontWeight: 700, lineHeight: 1.5 }}>
            This is not a standard loan appointment.<br />
            <span style={{ color: '#CC2027' }}>This is a strategic financial planning session.</span>
          </p>
        </div>
      </section>

      {/* Who it's for */}
      <section style={{ backgroundColor: '#F0F2F7', padding: '96px 24px' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <p style={{ color: '#CC2027', fontSize: '12px', fontWeight: 700, letterSpacing: '0.18em', marginBottom: '16px', textAlign: 'center' }}>
            WHO THIS IS FOR
          </p>
          <h2 style={{ color: '#1B2A4A', fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', fontWeight: 800, textAlign: 'center', marginBottom: '48px', letterSpacing: '-0.02em' }}>
            This Strategy Session Is Ideal If You:
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
            {idealFor.map((item) => (
              <div key={item} style={{ backgroundColor: 'white', border: '1px solid #E2E8F0', borderRadius: '8px', padding: '20px 24px', display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                <div style={{ width: '22px', height: '22px', backgroundColor: '#3D8B37', borderRadius: '50%', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '2px' }}>
                  <span style={{ color: 'white', fontSize: '13px', fontWeight: 800 }}>&#10003;</span>
                </div>
                <p style={{ color: '#334155', fontSize: '15px', lineHeight: 1.55 }}>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What happens on the call */}
      <section style={{ backgroundColor: '#0D1B2E', padding: '96px 24px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <p style={{ color: '#CC2027', fontSize: '12px', fontWeight: 700, letterSpacing: '0.18em', marginBottom: '16px', textAlign: 'center' }}>
            THE 45-MINUTE SESSION
          </p>
          <h2 style={{ color: 'white', fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', fontWeight: 800, textAlign: 'center', marginBottom: '64px', letterSpacing: '-0.02em' }}>
            What Happens on the Call
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}>
            {callSteps.map((step) => (
              <div key={step.num} style={{ backgroundColor: '#132037', border: '1px solid #1B2A4A', borderRadius: '12px', padding: '40px', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: '24px', right: '24px', color: '#1B2A4A', fontSize: '48px', fontWeight: 900, lineHeight: 1 }}>{step.num}</div>
                <div style={{ width: '4px', height: '48px', backgroundColor: step.accent, borderRadius: '2px', marginBottom: '24px' }} />
                <h3 style={{ color: 'white', fontSize: '1.25rem', fontWeight: 700, marginBottom: '20px' }}>
                  Step {step.num} &mdash; {step.title}
                </h3>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {step.items.map((item) => (
                    <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', color: '#94A3B8', fontSize: '14px', lineHeight: 1.55 }}>
                      <span style={{ color: step.accent, flexShrink: 0, marginTop: '2px' }}>&#8250;</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* You walk away with */}
      <section style={{ backgroundColor: '#132037', padding: '80px 24px', borderTop: '1px solid #1B2A4A' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ color: 'white', fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', fontWeight: 800, marginBottom: '40px', letterSpacing: '-0.02em' }}>
            What You Walk Away With
          </h2>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '32px', flexWrap: 'wrap' }}>
            {['Clear financial direction', 'Identified structuring opportunities', 'A structured next-step plan', 'Honest assessment of your position'].map((item) => (
              <div key={item} style={{ backgroundColor: '#0D1B2E', border: '1px solid #1B2A4A', borderRadius: '8px', padding: '20px 28px' }}>
                <div style={{ width: '8px', height: '8px', backgroundColor: '#CC2027', borderRadius: '50%', margin: '0 auto 12px' }} />
                <p style={{ color: '#CBD5E1', fontSize: '15px', fontWeight: 500 }}>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Book section */}
      <section id="book" style={{ backgroundColor: '#F0F2F7', padding: '96px 24px' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ color: '#CC2027', fontSize: '12px', fontWeight: 700, letterSpacing: '0.18em', marginBottom: '16px' }}>
            BOOK NOW
          </p>
          <h2 style={{ color: '#1B2A4A', fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', fontWeight: 800, marginBottom: '24px', letterSpacing: '-0.02em' }}>
            Reserve Your Strategy Session
          </h2>
          <p style={{ color: '#475569', fontSize: '1.0625rem', lineHeight: 1.7, marginBottom: '40px' }}>
            Limited strategy sessions are available each week. Each session is tailored to your specific financial position and goals.
          </p>
          {/* Calendar placeholder */}
          <div style={{ backgroundColor: 'white', border: '2px dashed #CBD5E1', borderRadius: '12px', padding: '80px 40px', marginBottom: '32px' }}>
            <p style={{ color: '#94A3B8', fontSize: '16px' }}>Calendar booking tool — to be integrated</p>
            <p style={{ color: '#CBD5E1', fontSize: '13px', marginTop: '8px' }}>(Calendly / Cal.com embed)</p>
          </div>
          <a
            href="mailto:rukmal@intelfins.com.au"
            style={{ display: 'inline-block', backgroundColor: '#CC2027', color: 'white', padding: '16px 36px', borderRadius: '8px', textDecoration: 'none', fontSize: '16px', fontWeight: 700 }}
          >
            Email to Book: rukmal@intelfins.com.au
          </a>
          <p style={{ color: '#94A3B8', fontSize: '12px', marginTop: '24px', lineHeight: 1.7 }}>
            This is a strategy-first conversation. All advice and implementation is subject to compliance, responsible lending obligations, and individual suitability assessment. Strategy services via CFO On The Go Pro. Credit assistance via Intelligent Finance Specialists.
          </p>
        </div>
      </section>
    </>
  )
}
