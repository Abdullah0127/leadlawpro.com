import { useState } from 'react'
import { ArrowIcon, PhoneIcon } from './Icons.jsx'
import MotionTilt from './MotionTilt.jsx'
import Reveal from './Reveal.jsx'

function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    if (!event.currentTarget.reportValidity()) return
    setSubmitted(true)
  }

  return (
    <main className="contact-page" id="contact-top">
      <Reveal>
        <section className="contact-page-hero" aria-labelledby="contact-page-title">
          <div className="contact-page-hero-inner">
            <div>
              <span className="contact-page-eyebrow"><i /> CONTACT US</span>
              <h1 id="contact-page-title">Talk through<br /><span>your next step.</span></h1>
              <p>Have a question about where to start? Reach out for clear information and a no-pressure conversation about your options.</p>
              <a className="contact-page-hero-button" href="#send-message">Send us a message <ArrowIcon /></a>
            </div>
            <div className="contact-page-visual">
              <div className="contact-visual-ring" aria-hidden="true" />
              <MotionTilt className="contact-photo-tilt" strength={5}>
                <div className="contact-photo-frame">
                <img
                  className="contact-hero-photo"
                  src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=85"
                  alt="Two colleagues speaking together in a bright office"
                  width="1200"
                  height="800"
                  decoding="async"
                  fetchPriority="high"
                />
                <div className="contact-photo-shade" aria-hidden="true" />
                <div className="contact-photo-caption">
                  <span className="contact-visual-symbol"><PhoneIcon /></span>
                  <span><strong>Questions are a good place to start.</strong><small>Speak with our team when you’re ready.</small></span>
                </div>
                </div>
              </MotionTilt>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="contact-page-content" id="send-message">
          <div className="contact-page-intro">
            <span>GET IN TOUCH</span>
            <h2>Send Us a Message</h2>
            <p>Prefer to call or email? You can reach our team directly. To start a claim inquiry, use the dedicated form on our home page.</p>
            <div className="contact-details">
              <a href="mailto:info@roadtrafficaccident.com"><span className="contact-detail-icon"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 6h18v12H3z" /><path d="m3 7 9 7 9-7" /></svg></span><span><small>Email</small><strong>info@roadtrafficaccident.com</strong></span><ArrowIcon /></a>
              <a href="tel:+18442282372"><span className="contact-detail-icon"><PhoneIcon /></span><span><small>Phone</small><strong>(844) 228-2372</strong></span><ArrowIcon /></a>
            </div>
            <a href="/#claim-form" className="contact-page-claim-link">Go to claim form <ArrowIcon /></a>
          </div>

          <form className="contact-message-form" onSubmit={handleSubmit}>
            <div className="contact-form-heading"><span>WE’RE READY TO HELP</span><h3>Send a message</h3><p>Fields marked with an asterisk are required.</p></div>
            <label>Full Name <span>*</span><input name="name" autoComplete="name" placeholder="Your name" required /></label>
            <label>Email <span>*</span><input name="email" type="email" autoComplete="email" placeholder="you@example.com" required /></label>
            <label>Message <span>*</span><textarea name="message" rows="5" minLength="10" placeholder="How can we help you?" required /></label>
            <button type="submit">Send Message <ArrowIcon /></button>
            {submitted && <p className="contact-form-notice" role="status">Your message has not been sent because this form is not connected to a messaging service yet. Please email info@roadtrafficaccident.com or call (844) 228-2372.</p>}
            <small className="contact-form-privacy">This form does not transmit or store your message. Contact us directly by email or phone until form delivery is enabled.</small>
          </form>
        </section>
      </Reveal>

      <Reveal>
        <section className="contact-next-steps">
          <span>WHAT HAPPENS NEXT</span>
          <h2>After You Get in Touch</h2>
          <p>A team member can review your questions and explain general information about possible next steps. If you want legal advice, we can help you understand how to connect with an independent attorney. You decide whether to continue, and any attorney engagement is handled directly with that professional.</p>
        </section>
      </Reveal>
    </main>
  )
}

export default ContactPage
