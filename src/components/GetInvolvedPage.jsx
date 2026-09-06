import { useState } from 'react'
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
  const [showConnectionNotice, setShowConnectionNotice] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    setShowConnectionNotice(true)
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

            <button className="button button--red involved-form__submit" type="submit">Submit</button>
            <p className="involved-form__connection-note">
              Online submission is not connected yet. For immediate help, email{' '}
              <a href="mailto:info@votenguyen4lbcc.com">info@votenguyen4lbcc.com</a>.
            </p>
            {showConnectionNotice && (
              <p className="involved-form__status" role="status">
                Your information has not been sent. Please use the campaign email above while online submissions are being connected.
              </p>
            )}
          </form>
        </div>
      </section>
    </main>
  )
}
