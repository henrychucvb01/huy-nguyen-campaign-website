import { useEffect, useRef, useState } from 'react'
import '../get-involved-page.css'

const GOOGLE_APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzPnJUVOmZcpuxiHN58aeKP4N1A8lweUPH3tWtqaJbEgxGsRbkal8gZnXWshynVTCzH/exec'

const involvementOptions = [
  ['volunteer', 'I would like to volunteer'],
  ['canvass', 'I would like to canvass'],
  ['phone-bank', 'I would like to phone bank'],
  ['host-event', 'I would like to host an event'],
  ['fundraising', 'I would like to help with fundraising'],
  ['yard-sign', 'I would like a yard sign'],
  ['endorse', 'I would like to endorse Huy Nguyen'],
]

function getInitialInterests() {
  const requestedInterest = new URLSearchParams(window.location.search).get('interest')
  return requestedInterest ? { [requestedInterest]: true } : {}
}

export default function GetInvolvedPage() {
  const [interests, setInterests] = useState(getInitialInterests)
  const [submissionStatus, setSubmissionStatus] = useState('idle')
  const [submissionMessage, setSubmissionMessage] = useState('')
  const formRef = useRef(null)
  const responseFrameRef = useRef(null)
  const timeoutRef = useRef(null)

  useEffect(() => {
    const handleSubmissionResponse = (event) => {
      if (!['https://script.googleusercontent.com', 'https://script.google.com'].includes(event.origin)) return

      const result = event.data
      if (!result || result.type !== 'huy-campaign-form-result') return

      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current)
        timeoutRef.current = null
      }

      if (result.ok) {
        formRef.current?.reset()
        setInterests({})
        setSubmissionStatus('success')
        setSubmissionMessage(
          'Thank you for your interest in supporting Huy’s campaign! Your information has been received. We appreciate you being part of a stronger future for LBCC.'
        )
      } else {
        setSubmissionStatus('error')
        setSubmissionMessage(result.message || 'We couldn’t save your information. Please try again.')
      }
    }

    window.addEventListener('message', handleSubmissionResponse)
    return () => {
      window.removeEventListener('message', handleSubmissionResponse)
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current)
    }
  }, [])

  const handleSubmit = (event) => {
    if (submissionStatus === 'sending') {
      event.preventDefault()
      return
    }

    setSubmissionStatus('sending')
    setSubmissionMessage('')

    if (timeoutRef.current) window.clearTimeout(timeoutRef.current)
    timeoutRef.current = window.setTimeout(() => {
      setSubmissionStatus('error')
      setSubmissionMessage('We didn’t receive a confirmation. Please check your connection and try again.')
      timeoutRef.current = null
    }, 30000)
  }

  return (
    <main className="involved-page">
      <section className="involved-hero">
        <div className="involved-hero__photo">
          <img src="/images/about/LBCCCandidate-193.jpg" alt="Huy Nguyen on the Long Beach City College campus" />
        </div>
        <div className="involved-hero__form-panel">
          <div className="involved-hero__heading">
            <h1>Get Involved</h1>
            <p>Join neighbors across Long Beach working to build a stronger future for LBCC students, families, and our community.</p>
          </div>

          <form
            ref={formRef}
            className="involved-form"
            action={GOOGLE_APPS_SCRIPT_URL}
            method="POST"
            target="campaign-sheets-response"
            acceptCharset="UTF-8"
            onSubmit={handleSubmit}
          >
            <div className="involved-form__fields">
              <label>
                <span>First Name</span>
                <input name="firstName" autoComplete="given-name" required />
              </label>
              <label>
                <span>Last Name</span>
                <input name="lastName" autoComplete="family-name" required />
              </label>
              <label>
                <span>Email</span>
                <input name="email" type="email" autoComplete="email" required />
              </label>
              <label>
                <span>Phone</span>
                <input name="phone" type="tel" autoComplete="tel" />
              </label>
              <label>
                <span>ZIP Code</span>
                <input name="zipCode" inputMode="numeric" autoComplete="postal-code" pattern="[0-9]{5}(-[0-9]{4})?" />
              </label>
              <label className="involved-form__message">
                <span>Message</span>
                <textarea name="message" rows="5" />
              </label>
            </div>

            <fieldset className="involved-form__interests">
              <legend>How would you like to help?</legend>
              <div className="involved-form__checkboxes">
                {involvementOptions.map(([value, label]) => (
                  <label key={value}>
                    <input
                      type="checkbox"
                      name="interests"
                      value={value}
                      checked={Boolean(interests[value])}
                      onChange={(event) => setInterests((current) => ({
                        ...current,
                        [value]: event.target.checked,
                      }))}
                    />
                    <span>{label}</span>
                  </label>
                ))}
              </div>
            </fieldset>

            <button
              className="button button--red involved-form__submit"
              type="submit"
              disabled={submissionStatus === 'sending'}
            >
              {submissionStatus === 'sending' ? 'Sending…' : 'Submit'}
            </button>

            <p className="involved-form__sms-disclaimer">
              <input id="sms-consent" name="smsConsent" type="checkbox" />
              <label htmlFor="sms-consent">
                By providing your phone number, you are consenting to marketing, informational and
                donation requests, donations may be solicited TEXTS to that number from Huy Nguyen
                for LBCCD Trustee 2026 (ID #1484027) or Long Beach City College Faculty Association
                (ID #880734). We will provide alerts and other information. Msg &amp; data rates may
                apply. Msg frequency will vary. Reply HELP for help, STOP to end.
              </label>{' '}
              <a href="https://www.votenguyen4lbcc.com/terms-and-conditions">
                Terms &amp; Conditions
              </a>
              {' and '}
              <a href="https://www.votenguyen4lbcc.com/privacy-policy">Privacy Policy</a>.
            </p>
            {submissionMessage && (
              <p className={'involved-form__status involved-form__status--' + submissionStatus} role="status" aria-live="polite">
                {submissionMessage}
              </p>
            )}
          </form>
          <iframe
            ref={responseFrameRef}
            name="campaign-sheets-response"
            title="Hidden campaign form submission response"
            tabIndex="-1"
            aria-hidden="true"
            style={{ display: 'none' }}
          />
        </div>
      </section>
    </main>
  )
}
