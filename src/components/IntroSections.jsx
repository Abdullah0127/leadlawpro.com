import { ArrowIcon, CheckIcon } from './Icons.jsx'
import Reveal from './Reveal.jsx'

function BenefitsSection() {
  return (
    <Reveal>
      <section className="benefits-section" id="why-us" aria-labelledby="benefits-title">
        <div className="benefits-heading">
          <span className="section-eyebrow">SUPPORT THAT PUTS YOU FIRST</span>
          <h2 id="benefits-title">A little clarity can go a long way</h2>
          <p>Get straightforward information and personal guidance as you consider what to do after a road accident.</p>
        </div>
        <div className="benefit-grid">
          <article className="benefit-card">
            <span className="benefit-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M12 3 20 6v5c0 5-3.4 8.4-8 10-4.6-1.6-8-5-8-10V6l8-3Z" /><path d="m8.5 12 2.2 2.2 4.8-5" /></svg></span>
            <span className="benefit-index">01 / PERSONAL INJURY</span>
            <h3>Guidance for injury claims</h3>
            <p>Talk through your circumstances and learn what information may help you understand your claim options.</p>
            <a href="#claim-form" className="benefit-link">Explore your options <ArrowIcon /></a>
          </article>
          <article className="benefit-card featured">
            <span className="benefit-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M4 7h16v13H4zM8 7V4h8v3M4 12h16m-11 0v2h6v-2" /></svg></span>
            <span className="benefit-index">02 / FEES &amp; TERMS</span>
            <h3>Know how fees may work</h3>
            <p>Ask about available fee arrangements, including whether a no-win, no-fee option could apply to your case.</p>
            <a href="tel:+18442282372" className="benefit-link">Ask a question <ArrowIcon /></a>
          </article>
          <article className="benefit-card">
            <span className="benefit-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M4 19h16M6 16l4-4 3 2 5-7" /><path d="M14 7h4v4" /></svg></span>
            <span className="benefit-index">03 / NEXT STEPS</span>
            <h3>Move forward at your pace</h3>
            <p>Get help making sense of the process, so you can focus on recovery and decide what feels right for you.</p>
            <a href="#how-it-works" className="benefit-link">See how it works <ArrowIcon /></a>
          </article>
        </div>
      </section>
    </Reveal>
  )
}

function ProcessSection() {
  return (
    <Reveal>
      <section className="process-section" id="how-it-works" aria-labelledby="process-title">
        <div className="process-heading">
          <span className="process-eyebrow">A SIMPLE, CLEAR PROCESS</span>
          <h2 id="process-title">How it works</h2>
          <p>From your first question to deciding what comes next, take things one step at a time.</p>
        </div>
        <div className="process-steps">
          <article className="process-step">
            <div className="process-step-top"><span className="process-number">01</span><span className="process-line" /><span className="process-symbol" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M7 3h10a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z" /><path d="M9 8h6m-6 4h6m-6 4h3" /></svg></span></div>
            <h3>Check your eligibility</h3>
            <p>Share a few details about the accident. A team member can help you understand whether you may have a claim to explore.</p>
          </article>
          <article className="process-step">
            <div className="process-step-top"><span className="process-number">02</span><span className="process-line" /><span className="process-symbol" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M12 3 20 6v5c0 5-3.4 8.4-8 10-4.6-1.6-8-5-8-10V6l8-3Z" /><path d="m8.5 12 2.2 2.2 4.8-5" /></svg></span></div>
            <h3>Connect with a lawyer</h3>
            <p>If you choose to continue, we can help connect you with a personal injury lawyer to discuss your circumstances and possible next steps.</p>
          </article>
          <article className="process-step process-step-final">
            <div className="process-step-top"><span className="process-number">03</span><span className="process-symbol" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M4 7.5h16v12H4zM8 7.5V5h8v2.5M4 12h16m-11 0v2h6v-2" /><path d="m9 16 2 2 4-4" /></svg></span></div>
            <h3>Review costs before you decide</h3>
            <p>Speak directly with the lawyer about fees, case expenses, and the written terms. Some matters may qualify for a no-win, no-fee arrangement.</p>
            <span className="step-disclosure"><CheckIcon /> Clear terms, before you choose</span>
          </article>
        </div>
        <div className="process-note">
          <span className="process-note-icon"><CheckIcon /></span>
          <p><strong>No obligation to get started.</strong> Take the time you need to consider your options and decide what feels right for you.</p>
          <a href="tel:+18442282372" className="process-cta">Talk to our team <ArrowIcon /></a>
        </div>
      </section>
    </Reveal>
  )
}

function IntroSections() {
  return (
    <>
      <section className="hero-bottom" aria-label="Our approach">
        <div className="bottom-item"><span className="bottom-icon"><CheckIcon /></span><span><strong>Guidance built around you</strong><small>Support shaped by your situation</small></span></div>
        <div className="bottom-divider" />
        <div className="bottom-item"><span className="bottom-icon"><CheckIcon /></span><span><strong>Know what comes next</strong><small>Straightforward answers, step by step</small></span></div>
        <div className="bottom-divider" />
        <div className="bottom-item"><span className="bottom-icon"><CheckIcon /></span><span><strong>No upfront commitment</strong><small>Explore your options at your pace</small></span></div>
      </section>
      <BenefitsSection />
      <ProcessSection />
    </>
  )
}

export default IntroSections
