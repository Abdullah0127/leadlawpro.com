import { useRef, useState } from 'react'
import Reveal from './Reveal.jsx'

const steps = ['Your Details', 'Accident', 'Contact & Consent']
const currentDate = new Date().toISOString().slice(0, 10)

function ClaimFormSection() {
  const [step, setStep] = useState(1)
  const [notice, setNotice] = useState('')
  const formRef = useRef(null)

  function validateCurrentStep() {
    const panel = formRef.current?.querySelector(`[data-form-step="${step}"]`)
    if (!panel) return false
    const invalidField = panel.querySelector('input:invalid, select:invalid, textarea:invalid')
    if (!invalidField) return true
    invalidField.reportValidity()
    invalidField.focus()
    return false
  }

  function goForward() {
    if (!validateCurrentStep()) return
    setNotice('')
    setStep((current) => Math.min(current + 1, 3))
  }

  function submitRequest(event) {
    event.preventDefault()
    if (!validateCurrentStep()) return
    setNotice('This form is not connected to a secure submission service yet. Please call (844) 228-2372 or email info@roadtrafficaccident.com to share your details.')
  }

  return (
    <Reveal>
      <section className="claim-form-section" id="claim-form" aria-labelledby="claim-form-title">
        <div className="claim-form-layout">
          <div className="claim-form-copy">
            <span className="claim-form-eyebrow">GET STARTED</span>
            <h2 id="claim-form-title">Let’s understand what happened</h2>
            <p>Answer a few questions to organize the details of your accident. You can review your answers before deciding what to do next.</p>
            <div className="form-assurance">
              <span aria-hidden="true">✓</span>
              <p><strong>Take it one step at a time</strong><br />There’s no obligation to continue with a claim.</p>
            </div>
            <div className="form-help">
              <span className="form-help-icon" aria-hidden="true">?</span>
              <p>Need help with the form?<a href="tel:+18442282372">Call (844) 228-2372</a></p>
            </div>
          </div>

          <div className="claim-form-card">
            <div className="form-progress-heading">
              <div><span className="form-step-label">STEP {step} OF 3</span><h3>{steps[step - 1]}</h3></div>
              <span className="form-step-percent">{Math.round((step / 3) * 100)}%</span>
            </div>
            <div className="form-progress" aria-hidden="true"><span style={{ width: `${(step / 3) * 100}%` }} /></div>
            <ol className="form-stepper" aria-label="Claim form steps">
              {steps.map((label, index) => {
                const number = index + 1
                const status = number === step ? 'current' : number < step ? 'complete' : ''
                return (
                  <li className={status} aria-current={number === step ? 'step' : undefined} key={label}>
                    <span>{number < step ? '✓' : number}</span><small>{label}</small>
                  </li>
                )
              })}
            </ol>

            <form ref={formRef} onSubmit={submitRequest} noValidate>
              <div className="form-fields" data-form-step="1" hidden={step !== 1}>
                  <div className="form-field-pair">
                    <label className="form-field">First name<input name="firstName" autoComplete="given-name" placeholder="Your first name" required /></label>
                    <label className="form-field">Last name<input name="lastName" autoComplete="family-name" placeholder="Your last name" required /></label>
                  </div>
                  <div className="form-field-pair">
                    <label className="form-field">Email address<input name="email" type="email" autoComplete="email" placeholder="you@example.com" required /></label>
                    <label className="form-field">ZIP code<input name="zip" inputMode="numeric" autoComplete="postal-code" pattern="[0-9]{5}(-[0-9]{4})?" placeholder="12345" title="Enter a 5-digit ZIP code, optionally followed by 4 digits." required /></label>
                  </div>
              </div>
              <div className="form-fields" data-form-step="2" hidden={step !== 2}>
                  <div className="form-field-pair">
                    <label className="form-field">Date of accident<input name="accidentDate" type="date" max={currentDate} required /></label>
                    <label className="form-field">Type of accident
                      <select name="accidentType" defaultValue="" required>
                        <option value="" disabled>Select an accident type</option>
                        <option>Car or truck accident</option><option>Motorcycle accident</option><option>Pedestrian accident</option><option>Bicycle accident</option><option>Rideshare accident</option><option>Other</option>
                      </select>
                    </label>
                  </div>
                  <fieldset className="form-choice">
                    <legend>Were you injured?</legend>
                    <label><input type="radio" name="injuryStatus" value="yes" required /> Yes</label>
                    <label><input type="radio" name="injuryStatus" value="unsure" /> Unsure</label>
                    <label><input type="radio" name="injuryStatus" value="no" /> No</label>
                  </fieldset>
                  <div className="form-field-pair">
                    <label className="form-field">Who do you think was at fault?
                      <select name="fault" defaultValue="" required>
                        <option value="" disabled>Select an answer</option><option>Another person</option><option>Shared responsibility</option><option>I may have been at fault</option><option>Not sure</option>
                      </select>
                    </label>
                    <label className="form-field">Do you currently have an attorney?
                      <select name="attorneyStatus" defaultValue="" required>
                        <option value="" disabled>Select an answer</option><option>No</option><option>Yes</option><option>Previously, but not now</option>
                      </select>
                    </label>
                  </div>
                  <fieldset className="form-choice">
                    <legend>Have you received medical treatment?</legend>
                    <label><input type="radio" name="medicalTreatment" value="yes" required /> Yes</label>
                    <label><input type="radio" name="medicalTreatment" value="scheduled" /> Scheduled</label>
                    <label><input type="radio" name="medicalTreatment" value="no" /> No</label>
                  </fieldset>
                  <label className="form-field">Briefly describe what happened<textarea name="caseDescription" rows="3" minLength="10" placeholder="Share any details you feel comfortable providing" required /></label>
              </div>
              <div className="form-fields" data-form-step="3" hidden={step !== 3}>
                  <label className="form-field">Phone number<input name="phone" type="tel" autoComplete="tel" inputMode="tel" onInput={(event) => {
                    const phone = event.currentTarget.value.trim()
                    const validPhone = /^\+?[0-9\s().-]{7,20}$/.test(phone) && phone.replace(/\D/g, '').length >= 7
                    event.currentTarget.setCustomValidity(phone && !validPhone ? 'Enter a valid phone number.' : '')
                  }} placeholder="(555) 555-5555" required /></label>
                  <div className="contact-consent">
                    <span className="consent-lock" aria-hidden="true">✓</span>
                    <p>Before you share your details, please review the contact consent below.</p>
                  </div>
                  <label className="consent-checkbox">
                    <input name="consent" type="checkbox" required />
                    <span>I agree that Road Traffic Accident may contact me by phone or text about my inquiry at the number provided. Consent is not a condition of purchase. Message and data rates may apply.</span>
                  </label>
                  <p className="form-privacy-note">This demo form does not submit or store your information. Contact us directly by phone or email until secure form submission is enabled.</p>
              </div>
              <div className="form-actions">
                {step > 1 && <button className="form-back" type="button" onClick={() => { setNotice(''); setStep((current) => current - 1) }}>Back</button>}
                {step < 3
                  ? <button className="form-next" type="button" onClick={goForward}>Continue <span aria-hidden="true">→</span></button>
                  : <button className="form-next" type="submit">Review contact options <span aria-hidden="true">→</span></button>}
              </div>
              {notice && <p className="form-notice" role="status">{notice}</p>}
            </form>
          </div>
        </div>
      </section>
    </Reveal>
  )
}

export default ClaimFormSection
