import { ArrowIcon, CheckIcon, PhoneIcon } from './Icons.jsx'
import MotionTilt from './MotionTilt.jsx'
import Reveal from './Reveal.jsx'

function HeroSection() {
  return (
    <Reveal>
      <section className="hero" id="home">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-dot" /> ROAD ACCIDENT CLAIM GUIDANCE</div>
          <h1>Take the next step.<br /><span>We’ll help you find your way.</span></h1>
          <p className="hero-description">
            After an accident, getting answers shouldn’t add to the stress. Explore your options and connect with support for your next move.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#claim-form">Explore your options <ArrowIcon /></a>
            <a className="button button-secondary" href="tel:+18442282372"><PhoneIcon /> Talk to our team</a>
          </div>
          <div className="reassurance">
            <span className="reassurance-check"><CheckIcon /></span>
            <span><strong>Start with a free conversation</strong><small>No pressure. Your details stay private.</small></span>
          </div>
        </div>

        <div className="hero-visual" aria-label="Three steps toward understanding your claim options">
          <div className="visual-orbit orbit-one" />
          <div className="visual-orbit orbit-two" />
          <MotionTilt className="hero-card-tilt" strength={6}>
            <div className="support-card">
            <div className="card-heading">
              <div><span className="card-kicker">YOUR SUPPORT OVERVIEW</span><h2>A clearer road ahead</h2></div>
              <span className="status-icon"><CheckIcon /></span>
            </div>
            <div className="progress-block">
              <div className="progress-label"><span>Getting started</span><strong>01 <i>/ 03</i></strong></div>
              <div className="progress-track"><span /></div>
            </div>
            <div className="step-list">
              <div className="step-item current"><span className="step-number">01</span><div><strong>Tell us what happened</strong><small>A few details help us understand your situation.</small></div><span className="step-arrow"><ArrowIcon /></span></div>
              <div className="step-item"><span className="step-number">02</span><div><strong>Review your options</strong><small>Get clear information about possible next steps.</small></div></div>
              <div className="step-item"><span className="step-number">03</span><div><strong>Choose how to proceed</strong><small>Move forward when you feel ready.</small></div></div>
            </div>
            <div className="card-footer">
              <span className="secure-icon"><CheckIcon /></span>
              <span><strong>Private &amp; no obligation</strong><small>There’s no cost to start a conversation.</small></span>
              <span className="footer-sparkle" aria-hidden="true">✳</span>
            </div>
            </div>
          </MotionTilt>
          <div className="floating-note">
            <span className="note-icon"><PhoneIcon /></span>
            <span><strong>Real people, ready to help</strong><small>Any time, day or night</small></span>
            <span className="online-dot" />
          </div>
          <div className="decor decor-top" aria-hidden="true">✳</div>
          <div className="decor decor-side" aria-hidden="true">+</div>
        </div>
      </section>
    </Reveal>
  )
}

export default HeroSection
