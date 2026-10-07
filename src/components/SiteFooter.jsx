import { ArrowIcon, BrandMark, PhoneIcon } from './Icons.jsx'

const currentYear = new Date().getFullYear()

function SiteFooter({ homePage = false, backToTopHref = '#about-top' }) {
  return (
    <footer className="site-footer" id={homePage ? undefined : 'about-footer'}>
      <div className="footer-main">
        <div className="footer-brand-column">
          <a className="brand footer-brand" href="/" aria-label="Road Accident Support home">
            <BrandMark />
            <span className="brand-name">Road Accident<span>Support</span></span>
          </a>
          <p>Clear information and a helpful place to start after a road accident.</p>
          <a className="footer-cta" href="/#claim-form">Explore your options <ArrowIcon /></a>
        </div>
        <div className="footer-column">
          <h2>Get in touch</h2>
          <a href="tel:+18442282372"><PhoneIcon />(844) 228-2372</a>
          <a href="mailto:info@roadtrafficaccident.com">info@roadtrafficaccident.com</a>
        </div>
        <div className="footer-column">
          <h2>Explore</h2>
          <a href="/#how-it-works">How it works</a>
         <a href="/about">About us</a>
          <a href="/services">Our services</a>
          <a href="/contact">Contact us</a>
          <a href="/terms">Terms &amp; Conditions</a>
          <a href="/privacy">Privacy Policy</a>
        </div>
      </div>
      <div className="footer-disclaimer">
        <h2>Legal Campaign Disclaimer</h2>
        <p>Road Traffic Accident is not a law firm and does not provide legal advice or representation. Information on this website is general and is not a substitute for advice from a licensed attorney. Contacting us does not create an attorney-client relationship. Any legal services are provided by independent attorneys, and any engagement is directly between you and the attorney. Ask about fees and terms before retaining counsel.</p>
      </div>
      <div className="footer-bottom">
        <span>© {currentYear} Road Accident Support. All rights reserved.</span>
        <a href={backToTopHref}>Back to top ↑</a>
      </div>
    </footer>
  )
}

export default SiteFooter
