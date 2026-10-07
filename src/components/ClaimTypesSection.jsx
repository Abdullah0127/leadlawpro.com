import Reveal from './Reveal.jsx'

const claimTypes = [
  { title: 'Road traffic accidents', icon: 'car' },
  { title: 'Work accidents', icon: 'work' },
  { title: 'Motorbike accidents', icon: 'bike' },
  { title: 'Military claims', icon: 'service' },
  { title: 'Medical negligence', icon: 'medical' },
  { title: 'Occupiers’ liability', icon: 'home' },
  { title: 'Cycling accidents', icon: 'cycle' },
  { title: 'Dental negligence', icon: 'dental' },
]

function CategoryIcon({ type }) {
  const shared = { fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1.7 }
  const paths = {
    car: <><path d="m4 15 1.5-5h13L20 15v4h-2v-2H6v2H4v-4Z" /><path d="m7 10 1.5-4h7l1.5 4M7 13h.01M17 13h.01" /></>,
    work: <><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M8 7V4h8v3m-13 5h18m-11 0v2h4v-2" /></>,
    bike: <><circle cx="6" cy="16" r="3" /><circle cx="18" cy="16" r="3" /><path d="m6 16 4-7 4 7H6Zm4-7h4m-1 0 2 7m-7-10h3" /></>,
    service: <><path d="M12 3 20 6v5c0 5-3.4 8.4-8 10-4.6-1.6-8-5-8-10V6l8-3Z" /><path d="m12 7 1.2 2.4 2.7.4-2 1.9.5 2.7-2.4-1.3-2.4 1.3.5-2.7-2-1.9 2.7-.4L12 7Z" /></>,
    medical: <><path d="M12 21s-8-4.6-8-11a4.5 4.5 0 0 1 8-2.8A4.5 4.5 0 0 1 20 10c0 6.4-8 11-8 11Z" /><path d="M9 12h6m-3-3v6" /></>,
    home: <><path d="m3 11 9-7 9 7v9H3v-9Z" /><path d="M9 20v-6h6v6m-9-9h.01M18 11h.01" /></>,
    cycle: <><circle cx="6" cy="16" r="3" /><circle cx="18" cy="16" r="3" /><path d="m6 16 5-7 4 7H6Zm5-7h4m1 0h2m-5 3 2 4" /></>,
    dental: <><path d="M7 4c2-1 3.4 1 5 1s3-2 5-1c2.5 1.3 1.5 5.3.7 8.3-.7 2.7-1.5 6.7-3.2 6.7-1.5 0-1.1-5-2.5-5s-1 5-2.5 5c-1.7 0-2.5-4-3.2-6.7C6.5 9.3 4.5 5.3 7 4Z" /></>,
  }
  return <svg viewBox="0 0 24 24" {...shared} aria-hidden="true">{paths[type]}</svg>
}

function ClaimTypesSection() {
  return (
    <Reveal>
      <section className="claim-types-section" id="claim-types" aria-labelledby="claim-types-title">
        <div className="claim-types-heading">
          <span className="claim-types-eyebrow">PERSONAL INJURY CLAIM SUPPORT</span>
          <h2 id="claim-types-title">All Types of Personal Injury Claims Handled</h2>
          <p>Explore information about different incident types and the support that may be available.</p>
        </div>
        <div className="claim-types-grid">
          {claimTypes.map((claim) => (
            <a className="claim-type" href="#claim-form" key={claim.title}>
              <span className="claim-type-icon"><CategoryIcon type={claim.icon} /></span>
              <span className="claim-type-title">{claim.title}</span>
              <span className="claim-type-arrow" aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
      </section>
    </Reveal>
  )
}

export default ClaimTypesSection
