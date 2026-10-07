import { ArrowIcon, PhoneIcon } from './Icons.jsx'
import MotionTilt from './MotionTilt.jsx'
import Reveal from './Reveal.jsx'
import ContactSection from './ContactSection.jsx'

const advantages = [
  {
    title: 'A clear first step',
    text: 'We make it easier to start the conversation, understand the process, and know what questions to ask.',
    icon: 'compass',
  },
  {
    title: 'Support with your needs in mind',
    text: 'Every accident is different. We listen to your situation and help you explore information relevant to you.',
    icon: 'person',
  },
  {
    title: 'Straightforward fee information',
    text: 'We encourage you to ask about costs and terms up front, including whether a no-win, no-fee arrangement may apply.',
    icon: 'document',
  },
  {
    title: 'Help whenever you need it',
    text: 'Reach out at any time to ask a question or get pointed toward a practical next step.',
    icon: 'clock',
  },
]

const advantageIcons = {
  compass: <><circle cx="12" cy="12" r="9" /><path d="m15.5 8.5-2.2 4.8-4.8 2.2 2.2-4.8 4.8-2.2Z" /></>,
  person: <><circle cx="12" cy="8" r="3.5" /><path d="M4.5 20a7.5 7.5 0 0 1 15 0" /></>,
  document: <><path d="M7 3h7l5 5v13H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z" /><path d="M14 3v6h5m-9 4h5m-5 4h5" /></>,
  clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
}

function AboutUsPage() {
  return (
    <main className="about-page" id="about-top">
      <Reveal>
        <section className="about-hero" aria-labelledby="about-title">
          <div className="about-hero-inner">
            <div className="about-hero-copy">
              <span className="about-eyebrow"><span /> ABOUT US</span>
              <h1 id="about-title">Your Partner in<br /><span>Accident Claims</span></h1>
              <p>We’re here to take the stress out of claiming. From fast checks to expert support—no win no fee, no hidden extras.</p>
              <div className="about-hero-actions">
                <a className="about-primary-button" href="/#claim-form">Claim Now <ArrowIcon /></a>
              </div>
            </div>

            <div className="about-hero-art">
              <div className="about-art-ring ring-one" />
              <div className="about-art-ring ring-two" />
              <MotionTilt className="about-photo-tilt" strength={5}>
                <div className="about-photo-frame">
                  <img className="about-team-image" src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=85" alt="Colleagues collaborating around a table in a bright office" width="1200" height="1799" decoding="async" fetchPriority="high" />
                  <div className="about-team-image-shade" aria-hidden="true" />
                </div>
              </MotionTilt>
              <div className="about-art-float"><span><PhoneIcon /></span><div><strong>Let’s talk it through</strong><small>Whenever you're ready</small></div><i /></div>
              <span className="about-art-sparkle sparkle-a" aria-hidden="true">✳</span>
              <span className="about-art-sparkle sparkle-b" aria-hidden="true">+</span>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="about-mission" id="mission" aria-labelledby="mission-title">
          <div className="mission-label">
            <span className="mission-mark"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 3 8 3v5c0 5-3.4 8.4-8 10-4.6-1.6-8-5-8-10V6l8-3Z" /><path d="m8.5 12 2.2 2.2 4.8-5" /></svg></span>
            <span>OUR MISSION</span>
          </div>
          <div className="mission-content">
            <span className="mission-eyebrow">HERE FOR YOUR NEXT CHAPTER</span>
            <h2 id="mission-title">What We Do</h2>
            <p className="mission-lead">We help people make sense of the road ahead after an accident.</p>
            <p>Our role is to make the first steps feel less complicated. We listen to what happened, share clear general information, and help you explore whether connecting with an independent legal professional may be right for you.</p>
            <p>You stay in control throughout. There’s no pressure to continue, and any decision to hire an attorney is made directly between you and that professional.</p>
            <a href="#contact" className="mission-link">Talk with our team <ArrowIcon /></a>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="about-stats" aria-label="Support at a glance">
          <div className="about-stats-heading">
            <span>HERE WHEN YOU NEED US</span>
            <h2>Helpful support, from the first conversation</h2>
          </div>
          <div className="about-stats-grid">
            <article className="about-stat">
              <span className="about-stat-icon"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 19h16M6 16l4-4 3 2 5-7" /><path d="M14 7h4v4" /></svg></span>
              <strong>1000+</strong>
              <span>Claims Assisted</span>
              <small>Helping people explore what comes next</small>
            </article>
            <article className="about-stat">
              <span className="about-stat-icon"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg></span>
              <strong>Free</strong>
              <span>Consultation</span>
              <small>Start with a no-cost conversation</small>
            </article>
            <article className="about-stat">
              <span className="about-stat-icon"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3v18m-6-4a7 7 0 0 0 12-5c0-3.9-6-4-6-8a4 4 0 0 1 6-3" /><path d="M6 7a7 7 0 0 1 12 5" /></svg></span>
              <strong>24/7</strong>
              <span>Support</span>
              <small>Reach out when it works for you</small>
            </article>
          </div>
          <p className="about-stats-note">Support and legal-service availability may vary. Any fee arrangement is subject to the attorney’s review and written terms.</p>
        </section>
      </Reveal>

      <Reveal>
        <section className="about-why" id="why-choose-us" aria-labelledby="why-choose-title">
          <div className="about-why-heading">
            <span className="about-why-eyebrow">WHY CHOOSE US</span>
            <h2 id="why-choose-title">Why Choose Us</h2>
            <p>A thoughtful, straightforward place to begin when you’re looking for answers after an accident.</p>
          </div>
          <div className="about-why-grid">
            {advantages.map((item, index) => (
              <article className="about-why-card" key={item.title}>
                <div className="about-why-card-top">
                  <span className="about-why-icon"><svg viewBox="0 0 24 24">{advantageIcons[item.icon]}</svg></span>
                  <span className="about-why-number">0{index + 1}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
          <div className="about-why-footnote"><span>!</span><p>We are not a law firm and cannot provide legal advice. Any legal services are provided by independent attorneys.</p></div>
        </section>
      </Reveal>

      <ContactSection
        title="Have a question? We’re ready to listen."
        description="Get in touch to talk through your questions, understand how the process works, and decide what feels right for you."
        ctaHref="/#claim-form"
        ctaLabel="Start a claim inquiry"
      />
    </main>
  )
}

export default AboutUsPage
