import Link from 'next/link'

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#0D1B2E', borderTop: '1px solid #1B2A4A', padding: '48px 24px 32px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '40px', marginBottom: '40px' }}>
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
              {/* Mini arrow icon */}
              <div style={{ position: 'relative', width: '32px', height: '32px', flexShrink: 0 }}>
                <div style={{ position: 'absolute', inset: 0, borderRadius: '6px', background: 'rgba(204,32,39,0.12)' }} />
                <svg viewBox="0 0 36 36" width="32" height="32" fill="none">
                  <path d="M6 26L14 14L18 19" stroke="#1995C4" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M11 26L20 12L24 18" stroke="#E8821A" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 26L26 10L30 16" stroke="#3D8B37" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M21 28L30 14" stroke="#CC2027" strokeWidth="2.5" strokeLinecap="round"/>
                  <path d="M26 14L30 14L30 18" stroke="#CC2027" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
                  <span style={{ color: '#CC2027', fontWeight: 900, fontSize: '18px', letterSpacing: '-0.01em' }}>CFO</span>
                  <span style={{ color: '#FFFFFF', fontWeight: 700, fontSize: '11px', letterSpacing: '0.05em' }}>ON THE GO PRO</span>
                </div>
                <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '9px', letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: '2px' }}>
                  Guiding Families &amp; Businesses
                </p>
              </div>
            </div>
            <p style={{ color: '#64748B', fontSize: '13px', lineHeight: 1.6 }}>
              CFO-level financial strategy for families, professionals, and business owners.
            </p>
          </div>

          {/* Pages */}
          <div>
            <h4 style={{ color: 'white', fontSize: '14px', fontWeight: 600, marginBottom: '16px', letterSpacing: '0.05em' }}>PAGES</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <Link href="/" style={{ color: '#64748B', textDecoration: 'none', fontSize: '14px' }}>Home</Link>
              <Link href="/about" style={{ color: '#64748B', textDecoration: 'none', fontSize: '14px' }}>About</Link>
              <Link href="/services" style={{ color: '#64748B', textDecoration: 'none', fontSize: '14px' }}>Services</Link>
              <Link href="/strategy-session" style={{ color: '#64748B', textDecoration: 'none', fontSize: '14px' }}>Strategy Session</Link>
              <Link href="/referral-partners" style={{ color: '#64748B', textDecoration: 'none', fontSize: '14px' }}>Referral Partners</Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ color: 'white', fontSize: '14px', fontWeight: 600, marginBottom: '16px', letterSpacing: '0.05em' }}>GET STARTED</h4>
            <Link
              href="/strategy-session"
              style={{
                display: 'inline-block',
                backgroundColor: '#CC2027',
                color: 'white',
                padding: '10px 20px',
                borderRadius: '6px',
                textDecoration: 'none',
                fontSize: '14px',
                fontWeight: 600,
              }}
            >
              Book Strategy Session
            </Link>
          </div>
        </div>

        {/* Compliance */}
        <div style={{ borderTop: '1px solid #1B2A4A', paddingTop: '24px' }}>
          <p style={{ color: '#475569', fontSize: '12px', lineHeight: 1.7, marginBottom: '8px' }}>
            Strategy services: CFO On The Go Pro Pty Ltd | Credit services: Intelligent Finance Specialists | These are separate entities providing separate services.
          </p>
          <p style={{ color: '#475569', fontSize: '12px', lineHeight: 1.7 }}>
            All advice and services are subject to individual circumstances, regulatory requirements, and responsible lending obligations. General information only &mdash; not personal financial advice. Past results are not indicative of future outcomes.
          </p>
          <p style={{ color: '#334155', fontSize: '12px', marginTop: '16px' }}>
            &copy; {new Date().getFullYear()} CFO On The Go Pro Pty Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
