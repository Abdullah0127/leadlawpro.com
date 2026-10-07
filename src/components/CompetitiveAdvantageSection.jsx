import Reveal from './Reveal.jsx'

const advantages = [
  {
    number: '01',
    icon: 'expertise',
    title: 'Experience that helps you navigate',
    text: 'Get a clearer view of the claims process and the questions worth asking about your situation.',
  },
  {
    number: '02',
    icon: 'people',
    title: 'Support that starts with listening',
    text: 'Your circumstances are personal. Take time to explain what happened and what you need to know.',
  },
  {
    number: '03',
    icon: 'route',
    title: 'A simpler path to your options',
    text: 'Understand the next steps in plain language, without pressure to decide before you are ready.',
  },
  {
    number: '04',
    icon: 'chat',
    title: 'A conversation at no cost',
    text: 'Start by asking questions and exploring whether speaking with a legal professional makes sense for you.',
  },
]

const iconPaths = {
  expertise: <><path d="M12 3 20 6v5c0 5-3.4 8.4-8 10-4.6-1.6-8-5-8-10V6l8-3Z" /><path d="m8.5 12 2.2 2.2 4.8-5" /></>,
  people: <><circle cx="9" cy="8" r="3" /><path d="M3.5 20v-1a5.5 5.5 0 0 1 11 0v1M16 5.5a3 3 0 0 1 0 5.8m1.5 3a4.5 4.5 0 0 1 3 4.2v1" /></>,
  route: <><circle cx="6" cy="18" r="2" /><circle cx="18" cy="6" r="2" /><path d="M8 18h4a4 4 0 0 0 4-4V10a4 4 0 0 1 4-4" /><path d="m12 10 2 2 2-2" /></>,
  chat: <><path d="M20 11.5a7.5 7.5 0 0 1-7.5 7.5H5l-1 2v-5.2A7.5 7.5 0 1 1 20 11.5Z" /><path d="M8 11h8m-8 3h5" /></>,
}

function CompetitiveAdvantageSection() {
  return (
    <Reveal>
      <section className="advantages-section" aria-labelledby="advantages-title">
        <div className="advantages-layout">
          <div className="advantages-heading">
            <span className="advantages-eyebrow">OUR COMPETITIVE ADVANTAGE</span>
            <h2 id="advantages-title">Built for Your Road Traffic Accident Needs</h2>
            <p>Clear information and dependable support can make a difficult process feel easier to navigate.</p>
            <a className="advantages-cta" href="#claim-form">Explore your options <span aria-hidden="true">↗</span></a>
          </div>
          <div className="advantages-grid">
            {advantages.map((item) => (
              <article className="advantage-card" key={item.number}>
                <div className="advantage-card-top">
                  <span className="advantage-icon"><svg viewBox="0 0 24 24">{iconPaths[item.icon]}</svg></span>
                  <span className="advantage-number">{item.number}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </Reveal>
  )
}

export default CompetitiveAdvantageSection
