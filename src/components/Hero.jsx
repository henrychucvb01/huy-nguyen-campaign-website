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
          A proven leader with deep roots in Long Beach,<br />
          fighting for our students, veterans, and community.
        </p>

        <div className="hero__actions">
          <a className="button button--red" href="#about">
            <span>Meet Huy</span><span className="button__arrow" aria-hidden="true">→</span>
          </a>
          <a className="button button--outline-light" href="#get-involved">
            <span>Join the Campaign</span><span className="button__arrow" aria-hidden="true">→</span>
          </a>
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
