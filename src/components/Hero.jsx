import lbccCampus from '../assets/lbcc-campus.webp'
import temporaryCandidateCutout from '../assets/temporary-candidate-cutout.png'

export default function Hero() {
  return (
    <section className="hero" id="home">
      <img
        className="hero__campus"
        src={lbccCampus}
        alt=""
        aria-hidden="true"
      />
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
      {/* Temporary cutout: replace this import with the official transparent PNG later. */}
      <img
        className="hero__candidate"
        src={temporaryCandidateCutout}
        alt="Huy Henry Nguyen"
      />
    </section>
  )
}
