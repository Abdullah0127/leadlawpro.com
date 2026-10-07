import { useEffect, useRef, useState } from 'react'
import { PhoneIcon } from './Icons.jsx'

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  )
}

function ClaimIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 3h7l5 5v13H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z" />
      <path d="M14 3v6h5m-9 3h5m-5 4h5" />
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m6 6 12 12M18 6 6 18" />
    </svg>
  )
}

function FloatingContact({ claimHref = '/#claim-form' }) {
  const [open, setOpen] = useState(false)
  const containerRef = useRef(null)

  useEffect(() => {
    if (!open) return undefined

    function closeOnEscape(event) {
      if (event.key === 'Escape') setOpen(false)
    }

    function closeOnOutsideClick(event) {
      if (!containerRef.current?.contains(event.target)) setOpen(false)
    }

    document.addEventListener('keydown', closeOnEscape)
    document.addEventListener('pointerdown', closeOnOutsideClick)
    return () => {
      document.removeEventListener('keydown', closeOnEscape)
      document.removeEventListener('pointerdown', closeOnOutsideClick)
    }
  }, [open])

  return (
    <div className={`floating-contact ${open ? 'is-open' : ''}`} ref={containerRef}>
      {open && (
        <nav className="floating-contact-panel" id="floating-contact-options" aria-label="Quick contact options">
          <a className="floating-contact-option" href="tel:+18442282372">
            <span className="floating-contact-icon"><PhoneIcon /></span>
            <strong>Call us</strong>
            <span className="floating-contact-detail">(844) 228-2372</span>
          </a>
          <a className="floating-contact-option" href="mailto:info@roadtrafficaccident.com">
            <span className="floating-contact-icon"><MailIcon /></span>
            <strong>Email us</strong>
            <span className="floating-contact-detail">info@roadtrafficaccident.com</span>
          </a>
          <a className="floating-contact-option" href={claimHref}>
            <span className="floating-contact-icon"><ClaimIcon /></span>
            <strong>Claim form</strong>
            <span className="floating-contact-detail">Go to claim form</span>
          </a>
        </nav>
      )}
      <button
        className="floating-contact-toggle"
        type="button"
        aria-label={open ? 'Close contact options' : 'Open contact options'}
        aria-expanded={open}
        aria-controls="floating-contact-options"
        onClick={() => setOpen((isOpen) => !isOpen)}
      >
        {open ? <CloseIcon /> : <PhoneIcon />}
      </button>
    </div>
  )
}

export default FloatingContact
