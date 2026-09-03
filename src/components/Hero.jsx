import '../hero-portrait-fix.css'

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
        <p className="eyebrow eyebrow--light">For LBCC Trustee • Area 5</p>
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
          Committed to our students, veterans, and community.<br />
          Focused on a stronger future for LBCC.
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
        className="hero__candidate hero__candidate--full"
        src="/images/hero/huy-nguyen-full.png"
        alt="Huy Henry Nguyen"
      />
    </section>
  )
}
