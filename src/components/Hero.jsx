export default function Hero() {
  return (
    <section className="hero" id="home">
      <img
        className="hero__campus"
        src="/images/hero/long-beach-city-college.webp"
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
        <div className="hero__divider" aria-hidden="true">
          <span />
          <b>★</b>
          <span />
        </div>
        <p className="hero__copy">
          Committed to the Community. Focused on Our Future.
        </p>
        <div className="hero__actions">
          <a className="button button--red" href="#about">Meet Huy</a>
          <a className="button button--outline-light" href="#get-involved">Join the Campaign</a>
        </div>
      </div>
      <img
        className="hero__candidate"
        src="/images/hero/huy-nguyen-candidate-cutout.png"
        alt="Huy Henry Nguyen"
      />
    </section>
  )
}
