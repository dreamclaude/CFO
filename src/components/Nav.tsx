'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Nav() {
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
        backgroundColor: scrolled ? '#0D1B2E' : 'transparent',
        borderBottom: scrolled ? '1px solid #1B2A4A' : 'none',
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
        <Link href="/" style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', lineHeight: 1.1 }}>
          <span style={{ color: '#CC2027', fontWeight: 800, fontSize: '18px', letterSpacing: '0.05em' }}>CFO</span>
          <span style={{ color: '#CBD5E1', fontWeight: 600, fontSize: '10px', letterSpacing: '0.15em' }}>ON THE GO PRO</span>
        </Link>

        {/* Desktop Links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }} className="desktop-nav">
          <Link href="/" style={{ color: '#CBD5E1', textDecoration: 'none', fontSize: '14px', fontWeight: 500 }}>Home</Link>
          <Link href="/about" style={{ color: '#CBD5E1', textDecoration: 'none', fontSize: '14px', fontWeight: 500 }}>About</Link>
          <Link href="/services" style={{ color: '#CBD5E1', textDecoration: 'none', fontSize: '14px', fontWeight: 500 }}>Services</Link>
          <Link href="/referral-partners" style={{ color: '#CBD5E1', textDecoration: 'none', fontSize: '14px', fontWeight: 500 }}>Partners</Link>
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
            color: 'white',
            cursor: 'pointer',
            display: 'none',
          }}
          className="mobile-menu-btn"
          aria-label="Toggle menu"
        >
          <div style={{ width: '24px', height: '2px', backgroundColor: 'white', marginBottom: '5px', transition: '0.3s' }} />
          <div style={{ width: '24px', height: '2px', backgroundColor: 'white', marginBottom: '5px', transition: '0.3s' }} />
          <div style={{ width: '24px', height: '2px', backgroundColor: 'white', transition: '0.3s' }} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{
            backgroundColor: '#0D1B2E',
            padding: '16px 24px 24px',
            borderTop: '1px solid #1B2A4A',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <Link href="/" style={{ color: '#CBD5E1', textDecoration: 'none', fontSize: '15px' }} onClick={() => setMenuOpen(false)}>Home</Link>
            <Link href="/about" style={{ color: '#CBD5E1', textDecoration: 'none', fontSize: '15px' }} onClick={() => setMenuOpen(false)}>About</Link>
            <Link href="/services" style={{ color: '#CBD5E1', textDecoration: 'none', fontSize: '15px' }} onClick={() => setMenuOpen(false)}>Services</Link>
            <Link href="/referral-partners" style={{ color: '#CBD5E1', textDecoration: 'none', fontSize: '15px' }} onClick={() => setMenuOpen(false)}>Partners</Link>
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
