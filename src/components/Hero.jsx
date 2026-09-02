import temporaryCandidate from '../assets/temporary-candidate.webp'

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero__content">
        <p className="eyebrow eyebrow--light">For Long Beach Community College</p>
        <h1>
          <span>Experience.</span>
          <span>Service.</span>
          <span className="headline-banner"><span>A Stronger Future</span></span>
          <span className="headline-closing">For LBCC.</span>
        </h1>
        <p className="hero__copy">
          Committed to the Community. Focused on Our Future.
        </p>
        <div className="hero__actions">
          <a className="button button--red" href="#about">Meet Huy</a>
          <a className="button button--outline-light" href="#get-involved">Join the Campaign</a>
        </div>
      </div>
      <div className="hero__visual" aria-label="Temporary campaign visual with a replaceable candidate portrait and campus background">
        <div className="hero__campus-layer" aria-hidden="true" />
        <img
          className="hero__candidate"
          src={temporaryCandidate}
          alt="Temporary portrait of Huy Henry Nguyen"
        />
        <span className="hero__temporary-note">Temporary portrait · official campaign photo coming soon</span>
      </div>
    </section>
  )
}
