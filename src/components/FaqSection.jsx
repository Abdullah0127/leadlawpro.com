import Reveal from './Reveal.jsx'

const faqs = [
  {
    question: 'How does the process work?',
    answer: 'Start by sharing a few details about the incident. You can then learn about possible next steps and, if you choose, speak with an independent personal injury lawyer.',
  },
  {
    question: 'Can I ask questions if I am not sure I was injured?',
    answer: 'Yes. You can explain what happened and ask what to consider. If you have health concerns after an accident, contact a qualified medical professional for advice.',
  },
  {
    question: 'Am I required to work with a lawyer?',
    answer: 'No. Starting a conversation or reviewing your options does not require you to hire a lawyer. Any decision to retain counsel is made directly between you and that lawyer.',
  },
  {
    question: 'Do I need a lawyer to make an insurance claim?',
    answer: 'You may communicate with an insurer yourself, but whether legal representation could help depends on your circumstances. A licensed attorney can give advice about your specific situation.',
  },
  {
    question: 'Will I have to pay anything upfront?',
    answer: 'Fee arrangements vary by lawyer and case. Ask the lawyer to explain fees, case costs, and any no-win, no-fee terms in writing before you decide.',
  },
  {
    question: 'Should I accept an insurer’s settlement offer?',
    answer: 'Consider getting independent legal advice before accepting an offer or signing a release. This site cannot assess an offer or advise you on a specific claim.',
  },
]

function FaqSection() {
  return (
    <Reveal>
      <section className="faq-section" id="faqs" aria-labelledby="faq-title">
        <div className="faq-layout">
          <div className="faq-heading">
            <span className="faq-eyebrow">ANSWERS, WITHOUT THE RUNAROUND</span>
            <h2 id="faq-title">Frequently asked questions</h2>
            <p>Some starting points for understanding the claims process. For advice about your circumstances, speak with a licensed attorney.</p>
            <a href="tel:+18442282372" className="faq-contact-link">Still have a question? <strong>Talk to us <span aria-hidden="true">↗</span></strong></a>
          </div>
          <div className="faq-list">
            {faqs.map((item, index) => (
              <details className="faq-item" key={item.question} open={index === 0}>
                <summary>{item.question}<span className="faq-toggle" aria-hidden="true" /></summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </Reveal>
  )
}

export default FaqSection
