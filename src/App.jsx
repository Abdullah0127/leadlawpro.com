import { useEffect } from 'react'
import './App.css'
import './components/AdditionalSections.css'
import './components/AboutUsPage.css'
import './components/PageSections.css'
import SiteHeader from './components/SiteHeader.jsx'
import HeroSection from './components/HeroSection.jsx'
import IntroSections from './components/IntroSections.jsx'
import CompetitiveAdvantageSection from './components/CompetitiveAdvantageSection.jsx'
import ClaimTypesSection from './components/ClaimTypesSection.jsx'
import ClaimFormSection from './components/ClaimFormSection.jsx'
import FaqSection from './components/FaqSection.jsx'
import ContactSection from './components/ContactSection.jsx'
import SiteFooter from './components/SiteFooter.jsx'
import AboutUsPage from './components/AboutUsPage.jsx'
import ServicesPage from './components/ServicesPage.jsx'
import ContactPage from './components/ContactPage.jsx'
import LegalPage from './components/LegalPage.jsx'
import FloatingContact from './components/FloatingContact.jsx'
import './components/UtilityPages.css'

function App() {
  const currentPath = window.location.pathname.replace(/\/+$/, '').toLowerCase()
  const isAboutPage = currentPath === '/about'
  const isServicesPage = currentPath === '/services'
  const isContactPage = currentPath === '/contact'
  const isTermsPage = currentPath === '/terms' || currentPath === '/terms-and-conditions'
  const isPrivacyPage = currentPath === '/privacy' || currentPath === '/privacy-policy'
  const activePage = isAboutPage ? 'about' : isServicesPage ? 'services' : isContactPage ? 'contact' : isTermsPage ? 'terms' : isPrivacyPage ? 'privacy' : 'home'
  const pagePath = isTermsPage ? '/terms' : isPrivacyPage ? '/privacy' : currentPath || '/'
  const siteUrl = (import.meta.env.VITE_SITE_URL || 'https://leadlawpro.com').replace(/\/+$/, '')
  const socialImage = 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=85'

  useEffect(() => {
    const pageMeta = {
      about: {
        title: 'About Us | Road Accident Support',
        description: 'Meet Road Accident Support and learn how we help people explore next steps after a road traffic accident.',
      },
      services: {
        title: 'Accident Claim Support Services | Road Accident Support',
        description: 'Explore information about road, work, motorcycle, cycling, and other accident claim support options.',
      },
      contact: {
        title: 'Contact Us | Road Accident Support',
        description: 'Contact Road Accident Support by phone or email with questions about accident claims and possible next steps.',
      },
      terms: {
        title: 'Terms & Conditions | Road Accident Support',
        description: 'Read the terms for using the Road Accident Support website, forms, and general information.',
      },
      privacy: {
        title: 'Privacy Policy | Road Accident Support',
        description: 'Learn how website information may be handled and what privacy choices are available to visitors.',
      },
      home: {
        title: 'Road Accident Support | Clear guidance after an accident',
        description: 'Get clear information about possible next steps after a road traffic accident. Explore claim options and contact our support team.',
      },
    }[activePage]
    document.title = pageMeta.title
    document.querySelector('meta[name="description"]')?.setAttribute('content', pageMeta.description)

    const socialMetadata = [
      ['property', 'og:title', pageMeta.title],
      ['property', 'og:description', pageMeta.description],
      ['property', 'og:image', socialImage],
      ['property', 'og:image:alt', 'A team collaborating in a bright office'],
      ['property', 'og:locale', 'en_US'],
      ...(siteUrl ? [['property', 'og:url', new URL(pagePath, `${siteUrl}/`).href]] : []),
      ['name', 'twitter:title', pageMeta.title],
      ['name', 'twitter:description', pageMeta.description],
      ['name', 'twitter:image', socialImage],
      ['name', 'twitter:card', 'summary_large_image'],
    ]
    socialMetadata.forEach(([attribute, name, content]) => {
      let element = document.querySelector(`meta[${attribute}="${name}"]`)
      if (!element) {
        element = document.createElement('meta')
        element.setAttribute(attribute, name)
        document.head.append(element)
      }
      element.setAttribute('content', content)
    })

    let canonicalLink = document.querySelector('link[rel="canonical"]')
    if (siteUrl) {
      if (!canonicalLink) {
        canonicalLink = document.createElement('link')
        canonicalLink.rel = 'canonical'
        document.head.append(canonicalLink)
      }
      canonicalLink.href = new URL(pagePath, `${siteUrl}/`).href
    } else {
      canonicalLink?.remove()
    }
  }, [activePage, pagePath, siteUrl])

  return (
    <>
      <div className="landing">
        <SiteHeader activePage={activePage} />
        {isAboutPage ? <AboutUsPage /> : isServicesPage ? <ServicesPage /> : isContactPage ? <ContactPage /> : isTermsPage ? <LegalPage type="terms" /> : isPrivacyPage ? <LegalPage type="privacy" /> : (
          <main>
            <HeroSection />
            <IntroSections />
            <CompetitiveAdvantageSection />
            <ClaimTypesSection />
            <ClaimFormSection />
            <FaqSection />
            <ContactSection />
          </main>
        )}
      </div>
      <FloatingContact claimHref={activePage === 'home' ? '#claim-form' : '/#claim-form'} />
      <SiteFooter
        homePage={activePage === 'home'}
        backToTopHref={activePage === 'home' ? '#home' : isAboutPage ? '#about-top' : isServicesPage ? '#services-top' : isContactPage ? '#contact-top' : '#legal-top'}
      />
    </>
  )
}

export default App
