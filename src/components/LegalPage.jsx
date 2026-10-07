import { ArrowIcon } from './Icons.jsx'

const legalContent = {
  privacy: {
    title: 'Privacy Policy',
    intro: 'This notice explains what information may be involved when you visit this website, how it is handled, and the choices available to you.',
    sections: [
      {
        title: 'Information you provide',
        paragraphs: [
          'You may choose to contact us by phone or email. Those details are handled by your phone or email provider and are not submitted through this website.',
          'The claim inquiry and contact forms currently operate only in your browser. They do not send or save the information you enter. Do not use these forms to submit sensitive personal, medical, or financial information.',
        ],
      },
      {
        title: 'Information collected when you visit',
        paragraphs: [
          'Like most websites, the hosting provider and your browser may process technical information needed to deliver a page, such as an IP address, device and browser characteristics, requested page, and request time. We do not currently use this site to build user profiles or operate our own analytics or advertising cookies.',
          'Some images and the web font may be delivered by third-party providers. When your browser requests those resources, the provider may receive technical request information under its own privacy practices.',
        ],
      },
      {
        title: 'How information may be used or shared',
        paragraphs: [
          'Technical information may be used by the hosting and resource providers to deliver, protect, and troubleshoot their services. If you contact us directly, your message may be used to respond to your inquiry.',
          'We do not sell personal information collected through this website. Information may be disclosed where required by law or where necessary to protect the rights, safety, and security of users or the service.',
        ],
      },
      {
        title: 'Third-party services and links',
        paragraphs: [
          'This website links to telephone, email, and external services. Following a link or contacting a third party takes you outside our website; that provider’s terms and privacy practices apply to its service.',
        ],
      },
      {
        title: 'Security and retention',
        paragraphs: [
          'No internet transmission or storage method can be guaranteed secure. The website forms do not currently transmit or retain submissions. Information handled by hosting or third-party providers is subject to their respective retention and security practices.',
        ],
      },
      {
        title: 'Your choices and policy updates',
        paragraphs: [
          'You can choose not to provide information, block or limit cookies through your browser, or avoid external links. Browser settings may affect site functionality.',
          'We may revise this notice as the site or its services change. The date below indicates when this version was last updated.',
        ],
      },
      {
        title: 'Contact',
        paragraphs: [
          'For privacy questions, contact info@roadtrafficaccident.com or call (844) 228-2372.',
        ],
      },
    ],
  },
  terms: {
    title: 'Terms & Conditions',
    intro: 'These terms apply when you access or use this website. By continuing to use the site, you agree to these terms. If you do not agree, please stop using it.',
    sections: [
      {
        title: 'About this website',
        paragraphs: [
          'Road Accident Support provides general information about accident claims and ways to explore possible next steps. We are not a law firm, do not provide legal advice or representation, and cannot determine whether you have a valid claim.',
          'Information on the site is not a substitute for advice from a licensed attorney who understands your circumstances. Contacting us or using this website does not create an attorney-client relationship.',
        ],
      },
      {
        title: 'Independent legal professionals',
        paragraphs: [
          'Any legal services are provided by independent attorneys, not by this website. You decide whether to contact or hire an attorney, and any engagement is directly between you and that professional. Review the attorney’s fee agreement and written terms before agreeing to legal services.',
        ],
      },
      {
        title: 'Website forms and communications',
        paragraphs: [
          'The claim inquiry and contact forms are currently demonstrations and do not transmit or retain submissions. Do not rely on them to contact us, submit a claim, preserve a deadline, or request urgent assistance. Use the listed phone number or email address instead.',
          'Information sent by email or telephone is not guaranteed to be confidential or secure. Do not send sensitive information unless you have confirmed an appropriate way to do so.',
        ],
      },
      {
        title: 'Acceptable use',
        paragraphs: [
          'Use this website only for lawful purposes. Do not attempt to disrupt, damage, probe, or gain unauthorized access to the site or its infrastructure, or use it to transmit harmful or unlawful material.',
        ],
      },
      {
        title: 'Website content',
        paragraphs: [
          'Website text, design, and other materials are provided for personal, informational use. Unless otherwise stated, you may not copy, republish, or commercially exploit site materials without prior permission. Third-party marks and materials remain the property of their respective owners.',
        ],
      },
      {
        title: 'No warranties and liability',
        paragraphs: [
          'The website and its content are provided on an “as available” basis. We do not promise that the site will always be available, error-free, complete, or suitable for a particular purpose. Laws and claim requirements vary by location and may change.',
          'To the extent permitted by law, we are not responsible for losses arising from reliance on general website information, interruptions, technical issues, or third-party services. Nothing in these terms excludes liability that cannot lawfully be excluded.',
        ],
      },
      {
        title: 'External services and changes',
        paragraphs: [
          'Links to external websites are provided for convenience; we do not control or guarantee their content or practices. We may update the website or these terms from time to time. Continued use after an update means you accept the revised terms.',
        ],
      },
      {
        title: 'Applicable law and contact',
        paragraphs: [
          'Applicable legal rights and requirements depend on your location. These terms do not specify a governing jurisdiction; nothing here limits rights that cannot be waived under applicable law.',
          'Questions about these terms may be sent to info@roadtrafficaccident.com or raised by calling (844) 228-2372.',
        ],
      },
    ],
  },
}

function LegalPage({ type }) {
  const content = legalContent[type]
  const updatedDate = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  }).format(new Date('2026-10-07T00:00:00Z'))

  return (
    <main className="legal-page" id="legal-top">
      <header className="legal-page-hero">
        <div className="legal-page-hero-inner">
          <span className="legal-eyebrow">ROAD ACCIDENT SUPPORT · LEGAL</span>
          <h1>{content.title}</h1>
          <p>{content.intro}</p>
          <span className="legal-updated">Last updated: {updatedDate}</span>
        </div>
      </header>
      <div className="legal-content">
        <aside className="legal-notice">
          <strong>Please note</strong>
          <p>This page provides general website information, not legal advice. Consider asking a qualified professional to review legal questions about your situation.</p>
        </aside>
        <div className="legal-sections">
          {content.sections.map((section, index) => (
            <section className="legal-section" key={section.title}>
              <span className="legal-section-number">{String(index + 1).padStart(2, '0')}</span>
              <div>
                <h2>{section.title}</h2>
                {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
            </section>
          ))}
        </div>
        <a className="legal-contact-link" href="/contact">Questions? Contact us <ArrowIcon /></a>
      </div>
    </main>
  )
}

export default LegalPage
