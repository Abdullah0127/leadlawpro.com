import { BrandMark, PhoneIcon } from './Icons.jsx'
import { useState } from 'react'

function SiteHeader({ activePage = 'home' }) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      {activePage === 'home' && <div className="trustbar">
        <div className="trustbar-inner">
          <div className="review-summary" aria-label="Client rating 4.8 out of 5">
            <span className="google-mark">G</span>
            <span className="trust-label">Client rating</span>
            <strong>4.8</strong>
            <span className="stars" aria-hidden="true">★★★★★</span>
          </div>
          <div className="trust-stat"><strong>11+</strong><span>years of experience</span></div>
          <div className="trust-stat"><strong>24/7</strong><span>here when you need us</span></div>
          <p className="trust-note">Clear guidance after a road accident</p>
        </div>
      </div>}
      <header className="site-header">
        <a className="brand" href="/" aria-label="Road Accident Support home">
          <BrandMark />
          <span className="brand-name">Road Accident<span>Support</span></span>
        </a>
        <nav className={`main-nav ${menuOpen ? 'menu-open' : ''}`} aria-label="Main navigation">
          <a className={activePage === 'home' ? 'active' : ''} aria-current={activePage === 'home' ? 'page' : undefined} href="/">Home</a>
          <a className={activePage === 'about' ? 'active' : ''} aria-current={activePage === 'about' ? 'page' : undefined} href="/about">About us</a>
          <a className={activePage === 'services' ? 'active' : ''} aria-current={activePage === 'services' ? 'page' : undefined} href="/services">Our services</a>
          <a className={activePage === 'contact' ? 'active' : ''} aria-current={activePage === 'contact' ? 'page' : undefined} href="/contact">Contact us</a>
        </nav>
        <button
          className="mobile-menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>
        <a className="header-call" href="tel:+18442282372">
          <PhoneIcon />
          <span>(844) 228-2372</span>
        </a>
      </header>
    </>
  )
}

export default SiteHeader
