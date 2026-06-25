'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Nav() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        backgroundColor: 'white',
        borderBottom: '1px solid #E2E8F0',
        transition: 'background-color 0.3s ease, border-bottom 0.3s ease',
        padding: '0 24px',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '72px',
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px' }}>
          {/* Arrow icon mark */}
          <div style={{ position: 'relative', width: '36px', height: '36px', flexShrink: 0 }}>
            {/* Background glow */}
            <div style={{
              position: 'absolute', inset: 0, borderRadius: '8px',
              background: 'linear-gradient(135deg, rgba(204,32,39,0.15), rgba(25,149,196,0.1))',
            }} />
            <svg viewBox="0 0 36 36" width="36" height="36" fill="none">
              {/* Arrow 1 — teal */}
              <path d="M6 26L14 14L18 19" stroke="#1995C4" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
              {/* Arrow 2 — orange */}
              <path d="M11 26L20 12L24 18" stroke="#E8821A" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
              {/* Arrow 3 — green */}
              <path d="M16 26L26 10L30 16" stroke="#3D8B37" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
              {/* Arrow 4 — red (foremost) */}
              <path d="M21 28L30 14" stroke="#CC2027" strokeWidth="2.5" strokeLinecap="round"/>
              <path d="M26 14L30 14L30 18" stroke="#CC2027" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          {/* Wordmark */}
          <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
              <span style={{
                color: '#CC2027',
                fontWeight: 900,
                fontSize: '22px',
                letterSpacing: '-0.01em',
                lineHeight: 1,
              }}>CFO</span>
              <span style={{
                color: '#0D1B2E',
                fontWeight: 700,
                fontSize: '13px',
                letterSpacing: '0.04em',
                lineHeight: 1,
              }}>ON THE GO PRO</span>
            </div>
            <span style={{
              color: '#64748B',
              fontSize: '9px',
              fontWeight: 500,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              marginTop: '3px',
            }}>
              Guiding Families - Businesses
            </span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }} className="desktop-nav">
          <Link href="/" style={{ color: pathname === '/' ? '#1995C4' : '#0D1B2E', textDecoration: 'none', fontSize: '14px', fontWeight: pathname === '/' ? 700 : 500 }}>Home</Link>
          <Link href="/about" style={{ color: pathname === '/about' ? '#1995C4' : '#0D1B2E', textDecoration: 'none', fontSize: '14px', fontWeight: pathname === '/about' ? 700 : 500 }}>About</Link>
          <Link href="/services" style={{ color: pathname === '/services' ? '#1995C4' : '#0D1B2E', textDecoration: 'none', fontSize: '14px', fontWeight: pathname === '/services' ? 700 : 500 }}>Services</Link>
          <Link href="/referral-partners" style={{ color: pathname === '/referral-partners' ? '#1995C4' : '#0D1B2E', textDecoration: 'none', fontSize: '14px', fontWeight: pathname === '/referral-partners' ? 700 : 500 }}>Partners</Link>
          <Link
            href="/strategy-session"
            style={{
              backgroundColor: '#CC2027',
              color: 'white',
              padding: '10px 20px',
              borderRadius: '6px',
              textDecoration: 'none',
              fontSize: '14px',
              fontWeight: 600,
              whiteSpace: 'nowrap',
            }}
          >
            Book Strategy Session
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: 'none',
            border: 'none',
            color: '#0D1B2E',
            cursor: 'pointer',
            display: 'none',
          }}
          className="mobile-menu-btn"
          aria-label="Toggle menu"
        >
          <div style={{ width: '24px', height: '2px', backgroundColor: '#0D1B2E', marginBottom: '5px', transition: '0.3s' }} />
          <div style={{ width: '24px', height: '2px', backgroundColor: '#0D1B2E', marginBottom: '5px', transition: '0.3s' }} />
          <div style={{ width: '24px', height: '2px', backgroundColor: '#0D1B2E', transition: '0.3s' }} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{
            backgroundColor: 'white',
            padding: '16px 24px 24px',
            borderTop: '1px solid #E2E8F0',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <Link href="/" style={{ color: pathname === '/' ? '#1995C4' : '#0D1B2E', textDecoration: 'none', fontSize: '15px', fontWeight: pathname === '/' ? 700 : 400 }} onClick={() => setMenuOpen(false)}>Home</Link>
            <Link href="/about" style={{ color: pathname === '/about' ? '#1995C4' : '#0D1B2E', textDecoration: 'none', fontSize: '15px', fontWeight: pathname === '/about' ? 700 : 400 }} onClick={() => setMenuOpen(false)}>About</Link>
            <Link href="/services" style={{ color: pathname === '/services' ? '#1995C4' : '#0D1B2E', textDecoration: 'none', fontSize: '15px', fontWeight: pathname === '/services' ? 700 : 400 }} onClick={() => setMenuOpen(false)}>Services</Link>
            <Link href="/referral-partners" style={{ color: pathname === '/referral-partners' ? '#1995C4' : '#0D1B2E', textDecoration: 'none', fontSize: '15px', fontWeight: pathname === '/referral-partners' ? 700 : 400 }} onClick={() => setMenuOpen(false)}>Partners</Link>
            <Link
              href="/strategy-session"
              style={{
                backgroundColor: '#CC2027',
                color: 'white',
                padding: '12px 20px',
                borderRadius: '6px',
                textDecoration: 'none',
                fontSize: '15px',
                fontWeight: 600,
                textAlign: 'center',
              }}
              onClick={() => setMenuOpen(false)}
            >
              Book Strategy Session
            </Link>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </nav>
  )
}
