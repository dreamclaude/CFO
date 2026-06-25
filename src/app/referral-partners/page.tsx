import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Referral Partners | CFO On The Go Pro',
  description:
    'We partner with accountants, buyers agents, financial planners, and business coaches who want their clients to experience structured financial acceleration.',
}

const partnerTypes = [
  'Accountants',
  'Buyers Agents',
  'Financial Planners',
  'Business Coaches',
  'Alumni & Professional Networks',
  'Property Strategists',
]

const clientBenefits = [
  { accent: '#1995C4', title: 'CFO-Level Strategy', body: 'Your clients receive executive-level financial planning applied to their personal wealth journey.' },
  { accent: '#E8821A', title: 'Integrated Lending Solutions', body: 'Strategy and credit capability working together - not in isolation.' },
  { accent: '#3D8B37', title: 'Structured Debt Reduction', body: 'Modelled pathways to reduce mortgage terms from 30 years to 10 – 12 years, where suitable.' },
  { accent: '#CC2027', title: 'SMSF Strategic Integration', body: 'SMSF incorporated into the broader financial blueprint-not treated as a standalone product.' },
  { accent: '#D4A017', title: 'Quarterly CFO Reviews', body: 'Ongoing accountability, reforecasting, and course correction. Not set-and-forget.' },
]

const ourCommitments = [
  'Transparent communication throughout the engagement',
  'Deep respect for your existing client relationships',
  'Clear scope boundaries-we do not cross into your service area',
  'Compliance - aligned processes at every stage',
  'Agreed referral arrangements where appropriate',
]

const idealClient = [
  'High-income professionals and executives',
  'Business owners and ABN holders',
  'Property accumulators targeting 3 - 4 properties',
  'Families with mortgages over $400K+',
  'Clients seeking structure, accountability, and long-term direction',
]

export default function ReferralPartnersPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ backgroundColor: '#0D1B2E', padding: '140px 24px 96px', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <p style={{ color: '#1995C4', fontSize: '12px', fontWeight: 700, letterSpacing: '0.18em', marginBottom: '20px' }}>
            PROFESSIONAL PARTNERSHIPS
          </p>
          <h1 style={{ color: 'white', fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', fontWeight: 900, lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: '24px' }}>
            Strategic Referral Network
          </h1>
          <p style={{ color: '#94A3B8', fontSize: '1.125rem', lineHeight: 1.7, maxWidth: '620px', margin: '0 auto' }}>
            We partner with professionals who want their clients to experience structured financial acceleration — not just a loan or a transaction.
          </p>
        </div>
      </section>

      {/* We do not transact */}
      <section style={{ backgroundColor: '#132037', padding: '64px 24px', borderTop: '1px solid #1B2A4A', borderBottom: '1px solid #1B2A4A' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ color: 'white', fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)', fontWeight: 700, lineHeight: 1.55 }}>
            We do not transact.<br />
            <span style={{ color: '#1995C4' }}>We build roadmaps.</span>
          </p>
        </div>
      </section>

      {/* Who we work with */}
      <section style={{ backgroundColor: '#F0F2F7', padding: '96px 24px' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <p style={{ color: '#CC2027', fontSize: '12px', fontWeight: 700, letterSpacing: '0.18em', marginBottom: '16px', textAlign: 'center' }}>
            WHO WE WORK WITH
          </p>
          <h2 style={{ color: '#1B2A4A', fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', fontWeight: 800, textAlign: 'center', marginBottom: '48px', letterSpacing: '-0.02em' }}>
            Professionals We Partner With
          </h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center' }}>
            {partnerTypes.map((p) => (
              <div key={p} style={{ backgroundColor: 'white', border: '1px solid #E2E8F0', borderRadius: '100px', padding: '12px 28px', fontSize: '15px', color: '#1B2A4A', fontWeight: 500 }}>
                {p}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client benefits */}
      <section style={{ backgroundColor: '#0D1B2E', padding: '96px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p style={{ color: '#1995C4', fontSize: '12px', fontWeight: 700, letterSpacing: '0.18em', marginBottom: '16px', textAlign: 'center' }}>
            WHY REFER TO CFO ON THE GO PRO
          </p>
          <h2 style={{ color: 'white', fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', fontWeight: 800, textAlign: 'center', marginBottom: '16px', letterSpacing: '-0.02em' }}>
            What Your Clients Receive
          </h2>
          <p style={{ color: '#94A3B8', fontSize: '1.0625rem', textAlign: 'center', maxWidth: '520px', margin: '0 auto 56px', lineHeight: 1.65 }}>
            When you refer a client to CFO On The Go Pro, they enter a structured engagement — not a sales funnel.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            {clientBenefits.map((b) => (
              <div key={b.title} style={{ backgroundColor: '#132037', border: '1px solid #1B2A4A', borderRadius: '12px', padding: '36px' }}>
                <div style={{ width: '4px', height: '40px', backgroundColor: b.accent, borderRadius: '2px', marginBottom: '20px' }} />
                <h3 style={{ color: 'white', fontSize: '1.125rem', fontWeight: 700, marginBottom: '12px' }}>{b.title}</h3>
                <p style={{ color: '#94A3B8', fontSize: '14px', lineHeight: 1.65 }}>{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our commitment */}
      <section style={{ backgroundColor: '#F0F2F7', padding: '96px 24px' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '64px' }}>
          <div>
            <p style={{ color: '#CC2027', fontSize: '12px', fontWeight: 700, letterSpacing: '0.18em', marginBottom: '16px' }}>
              OUR COMMITMENT TO YOU
            </p>
            <h2 style={{ color: '#1B2A4A', fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', fontWeight: 800, marginBottom: '32px', letterSpacing: '-0.02em', lineHeight: 1.25 }}>
              How We Treat Your Client Relationships
            </h2>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {ourCommitments.map((c) => (
                <li key={c} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <div style={{ width: '22px', height: '22px', backgroundColor: '#3D8B37', borderRadius: '50%', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '1px' }}>
                    <span style={{ color: 'white', fontSize: '12px', fontWeight: 800 }}>&#10003;</span>
                  </div>
                  <p style={{ color: '#334155', fontSize: '15px', lineHeight: 1.6 }}>{c}</p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p style={{ color: '#1995C4', fontSize: '12px', fontWeight: 700, letterSpacing: '0.18em', marginBottom: '16px' }}>
              IDEAL REFERRAL CLIENT
            </p>
            <h2 style={{ color: '#1B2A4A', fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', fontWeight: 800, marginBottom: '32px', letterSpacing: '-0.02em', lineHeight: 1.25 }}>
              Who Benefits Most from a Referral
            </h2>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {idealClient.map((c) => (
                <li key={c} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <span style={{ color: '#1995C4', fontSize: '18px', fontWeight: 700, flexShrink: 0, lineHeight: 1.4 }}>&#8250;</span>
                  <p style={{ color: '#334155', fontSize: '15px', lineHeight: 1.6 }}>{c}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: '#0D1B2E', padding: '96px 24px', textAlign: 'center', borderTop: '1px solid #1B2A4A' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <p style={{ color: '#1995C4', fontSize: '12px', fontWeight: 700, letterSpacing: '0.18em', marginBottom: '20px' }}>
            LET&apos;S BUILD TOGETHER
          </p>
          <h2 style={{ color: 'white', fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', fontWeight: 800, marginBottom: '20px', letterSpacing: '-0.02em' }}>
            If Your Clients Deserve Strategic Financial Direction — Let&apos;s Connect.
          </h2>
          <p style={{ color: '#94A3B8', fontSize: '1.0625rem', lineHeight: 1.7, marginBottom: '40px', maxWidth: '520px', margin: '0 auto 40px' }}>
            Book a Partner Discussion to explore how we can serve your clients together, with clear scope, compliance alignment, and mutual respect.
          </p>
          <a
            href="mailto:rukmal@intelfins.com.au"
            style={{ display: 'inline-block', backgroundColor: '#CC2027', color: 'white', padding: '16px 40px', borderRadius: '8px', textDecoration: 'none', fontSize: '16px', fontWeight: 700 }}
          >
            Book a Partner Discussion
          </a>
          <p style={{ color: '#475569', fontSize: '12px', marginTop: '24px' }}>
            rukmal@intelfins.com.au &nbsp;&middot;&nbsp; Australia Wide
          </p>
        </div>
      </section>
    </>
  )
}
