import { ArrowIcon, CheckIcon, PhoneIcon } from './Icons.jsx'
import MotionTilt from './MotionTilt.jsx'
import Reveal from './Reveal.jsx'
import ContactSection from './ContactSection.jsx'

const services = [
  {
    title: 'Road traffic accidents',
    category: 'VEHICLE COLLISIONS',
    text: 'Learn about possible next steps after a car, truck, or other road collision, including rear-end, intersection, and multi-vehicle incidents.',
    icon: 'car',
  },
  {
    title: 'Work accidents',
    category: 'WORKPLACE INJURIES',
    text: 'Explore options after an injury at work, including incidents involving a fall, equipment, or an unsafe working environment.',
    icon: 'work',
  },
  {
    title: 'Motorbike accidents',
    category: 'MOTORCYCLE & SCOOTER',
    text: 'Find information about motorcycle and scooter collisions, injury support, and questions to discuss with a qualified attorney.',
    icon: 'bike',
  },
  {
    title: 'Military claims',
    category: 'SERVICE-RELATED INJURY',
    text: 'Understand where to begin when an injury or negligence concern relates to current or former military service.',
    icon: 'service',
  },
  {
    title: 'Medical negligence',
    category: 'HEALTHCARE-RELATED HARM',
    text: 'Learn how to ask questions about possible harm connected to medical treatment, diagnosis, or care.',
    icon: 'medical',
  },
  {
    title: 'Occupiers’ liability',
    category: 'PROPERTY & PREMISES',
    text: 'Explore possible options for injuries involving an unsafe condition on public, commercial, or private property.',
    icon: 'home',
  },
  {
    title: 'Cycling accidents',
    category: 'CYCLIST SUPPORT',
    text: 'Get information after a cycling collision or road incident and identify details that may be useful to discuss with a lawyer.',
    icon: 'cycle',
  },
  {
    title: 'Dental negligence',
    category: 'DENTAL CARE',
    text: 'Understand what questions to raise when dental care may have caused unexpected injury or required further treatment.',
    icon: 'dental',
  },
]

const serviceIcons = {
  car: <><path d="m4 15 1.5-5h13L20 15v4h-2v-2H6v2H4v-4Z" /><path d="m7 10 1.5-4h7l1.5 4M7 13h.01M17 13h.01" /></>,
  work: <><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M8 7V4h8v3m-13 5h18m-11 0v2h4v-2" /></>,
  bike: <><circle cx="6" cy="16" r="3" /><circle cx="18" cy="16" r="3" /><path d="m6 16 4-7 4 7H6Zm4-7h4m-1 0 2 7m-7-10h3" /></>,
  service: <><path d="M12 3 20 6v5c0 5-3.4 8.4-8 10-4.6-1.6-8-5-8-10V6l8-3Z" /><path d="m12 7 1.2 2.4 2.7.4-2 1.9.5 2.7-2.4-1.3-2.4 1.3.5-2.7-2-1.9 2.7-.4L12 7Z" /></>,
  medical: <><path d="M12 21s-8-4.6-8-11a4.5 4.5 0 0 1 8-2.8A4.5 4.5 0 0 1 20 10c0 6.4-8 11-8 11Z" /><path d="M9 12h6m-3-3v6" /></>,
  home: <><path d="m3 11 9-7 9 7v9H3v-9Z" /><path d="M9 20v-6h6v6" /></>,
  cycle: <><circle cx="6" cy="16" r="3" /><circle cx="18" cy="16" r="3" /><path d="m6 16 5-7 4 7H6Zm5-7h4m1 0h2m-5 3 2 4" /></>,
  dental: <><path d="M7 4c2-1 3.4 1 5 1s3-2 5-1c2.5 1.3 1.5 5.3.7 8.3-.7 2.7-1.5 6.7-3.2 6.7-1.5 0-1.1-5-2.5-5s-1 5-2.5 5c-1.7 0-2.5-4-3.2-6.7C6.5 9.3 4.5 5.3 7 4Z" /></>,
}

function ServicesPage() {
  return (
    <main className="services-page" id="services-top">
      <Reveal>
        <section className="services-hero" aria-labelledby="services-title">
          <div className="services-hero-inner">
            <div className="services-hero-copy">
              <span className="services-eyebrow"><i /> OUR SERVICES</span>
              <h1>Accident support,<br /><span>built around you.</span></h1>
              <p>Get clear information about your options after an injury. We can help you understand the first steps and connect with independent legal support when you choose.</p>
              <div className="services-hero-actions">
                <a href="#service-list" className="services-primary-button">Explore our services <ArrowIcon /></a>
                <a href="tel:+18442282372" className="services-phone-link"><PhoneIcon /> (844) 228-2372</a>
              </div>
              <div className="services-hero-note"><CheckIcon /><span>Free first conversation · No obligation to proceed</span></div>
            </div>
            <div className="services-hero-art">
              <div className="services-art-orbit" />
              <MotionTilt className="services-photo-tilt" strength={5}>
                <div className="services-photo-frame">
                <img
                  className="services-hero-photo"
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=85"
                  alt="Colleagues discussing information around a table"
                  width="1200"
                  height="800"
                  decoding="async"
                  fetchPriority="high"
                />
                <div className="services-photo-shade" aria-hidden="true" />
                <div className="services-photo-caption">
                  <span className="services-photo-caption-icon"><CheckIcon /></span>
                  <span><strong>Guidance that starts with listening</strong><small>Clear information for your next step</small></span>
                </div>
                <span className="services-photo-tag">SUPPORT FOR YOUR SITUATION</span>
                </div>
              </MotionTilt>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="services-process">
          <div className="services-section-heading">
            <span>HOW WE HELP</span>
            <h2>A clearer process, one step at a time</h2>
            <p>Start with a few details, get information about possible next steps, and make your own decision about how to proceed.</p>
          </div>
          <div className="services-process-grid">
            <article><span className="services-process-number">01</span><span className="services-process-icon">⌕</span><h3>Tell us what happened</h3><p>Share the basics of your situation so we can understand what kind of information may be useful.</p></article>
            <article><span className="services-process-number">02</span><span className="services-process-icon">↗</span><h3>Explore your options</h3><p>Review possible next steps and, if you want, arrange a conversation with an independent legal professional.</p></article>
            <article><span className="services-process-number">03</span><span className="services-process-icon">✓</span><h3>Decide when you’re ready</h3><p>Ask about costs and written terms before making a decision. You remain in control of whether to continue.</p></article>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="services-advantages">
          <div className="services-advantages-heading">
            <span>OUR COMPETITIVE ADVANTAGE</span>
            <h2>Built for Your Road Traffic Accident Needs</h2>
            <p>Practical information and personal attention can make the path forward feel easier to navigate.</p>
          </div>
          <div className="services-advantage-grid">
            <article><span>01</span><h3>Trusted experience</h3><p>Get help framing the right questions and understanding the general claims process.</p></article>
            <article><span>02</span><h3>People-first support</h3><p>Talk through your situation with a team focused on clear communication and respect.</p></article>
            <article><span>03</span><h3>Help exploring a claim</h3><p>Find information about the details and documents that may be relevant to a conversation with an attorney.</p></article>
            <article><span>04</span><h3>Free initial conversation</h3><p>Ask questions and learn about potential next steps without an obligation to proceed.</p></article>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="services-list-section" id="service-list">
          <div className="services-section-heading">
            <span>WHAT WE HANDLE</span>
            <h2>All Types of Personal Injury Claims Handled</h2>
            <p>Browse common areas where people may seek information. Every claim is different, and eligibility depends on the circumstances.</p>
          </div>
          <div className="services-list-grid">
            {services.map((service) => (
              <article className="service-detail-card" key={service.title}>
                <div className="service-detail-top">
                  <span className="service-detail-icon"><svg viewBox="0 0 24 24">{serviceIcons[service.icon]}</svg></span>
                  <span className="service-category">{service.category}</span>
                </div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <a href="/contact">Ask us a question <ArrowIcon /></a>
              </article>
            ))}
          </div>
          <p className="services-disclaimer">Information only. Road Accident Support is not a law firm and cannot determine whether a particular claim qualifies.</p>
        </section>
      </Reveal>

      <ContactSection
        title="Let’s talk about where to begin."
        description="Contact our team with questions or visit the contact page to send us a message."
        ctaHref="/contact"
        ctaLabel="Contact our team"
      />
    </main>
  )
}

export default ServicesPage
