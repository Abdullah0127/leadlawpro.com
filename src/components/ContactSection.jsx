import { ArrowIcon, PhoneIcon } from './Icons.jsx'
import Reveal from './Reveal.jsx'

function ContactSection({ title, description, ctaHref = '#claim-form', ctaLabel = 'Start with your details' }) {
  return (
    <Reveal>
      <section className="contact-section" id="contact" aria-labelledby="contact-title">
        <div className="contact-content">
          <div className="contact-copy">
            <span className="contact-eyebrow">GET IN TOUCH</span>
            <h2 id="contact-title">{title || 'A real conversation can help you find your next step.'}</h2>
            <p>{description || 'Reach out with questions about the process. We’re here to help you understand where to start.'}</p>
          </div>
          <div className="contact-options">
            <a className="contact-option" href="tel:+18442282372">
              <span className="contact-option-icon"><PhoneIcon /></span>
              <span><small>Call our team</small><strong>(844) 228-2372</strong></span>
              <ArrowIcon />
            </a>
            <a className="contact-option" href="mailto:info@roadtrafficaccident.com">
              <span className="contact-option-icon"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 6h18v12H3z" /><path d="m3 7 9 7 9-7" /></svg></span>
              <span><small>Email us</small><strong>info@roadtrafficaccident.com</strong></span>
              <ArrowIcon />
            </a>
            <a className="contact-button" href={ctaHref}>{ctaLabel} <ArrowIcon /></a>
          </div>
        </div>
        <div className="contact-decoration" aria-hidden="true" />
      </section>
    </Reveal>
  )
}

export default ContactSection
