import { useRef, useState } from 'react'
import '../get-involved-page.css'

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
  const submissionId = useRef(null)

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (submissionStatus === 'sending') return

    const form = event.currentTarget
    const formData = new FormData(form)
    submissionId.current ??= crypto.randomUUID()
    setSubmissionStatus('sending')
    setSubmissionMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: formData.get('firstName'),
          lastName: formData.get('lastName'),
          email: formData.get('email'),
          phone: formData.get('phone'),
          zipCode: formData.get('zipCode'),
          message: formData.get('message'),
          interests: formData.getAll('interests'),
          submissionId: submissionId.current,
        }),
      })
      const result = await response.json().catch(() => ({}))

      if (!response.ok) throw new Error(result.error || 'Your message could not be sent.')

      form.reset()
      setInterests({})
      submissionId.current = null
      setSubmissionStatus('success')
      setSubmissionMessage('Thank you. Your message has been sent to the campaign.')
    } catch (error) {
      setSubmissionStatus('error')
      setSubmissionMessage(error instanceof Error ? error.message : 'Your message could not be sent. Please try again.')
    }
  }

  return (
    <main className="involved-page">
      <section className="involved-hero">
        <div className="involved-hero__photo">
          <img src="/images/about/community.jpg" alt="Huy Nguyen meeting with members of the community" />
        </div>
        <div className="involved-hero__form-panel">
          <div className="involved-hero__heading">
            <h1>Get Involved</h1>
            <p>Join neighbors across Long Beach working to build a stronger future for LBCC students, families, and our community.</p>
          </div>

          <form className="involved-form" onSubmit={handleSubmit}>
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
            {submissionMessage && (
              <p className={`involved-form__status involved-form__status--${submissionStatus}`} role="status" aria-live="polite">
                {submissionMessage}
              </p>
            )}
          </form>
        </div>
      </section>
    </main>
  )
}
