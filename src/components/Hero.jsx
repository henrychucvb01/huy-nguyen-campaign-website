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
        <p className="eyebrow eyebrow--light">LBCC Board of Trustees • Area 5</p>
        <h1>
          <span>Thank You,</span>
          <span>Long Beach</span>
          <span>and Lakewood!</span>
          <span className="headline-banner"><span>A New Chapter Begins.</span></span>
        </h1>

        <div className="hero__divider" aria-hidden="true">
          <span />
          <b>★</b>
          <span />
        </div>

        <p className="hero__copy">
          Thank you for believing in our vision for a stronger Long Beach City College. Together, we will continue building opportunities for our students, veterans, and community.
        </p>

        <div className="hero__actions">
          <a className="button button--red" href="#three-fs">
            <span>Our Vision</span><span className="button__arrow" aria-hidden="true">→</span>
          </a>
          <a className="button button--outline-light" href="#election-results">
            <span>Election Results</span><span className="button__arrow" aria-hidden="true">→</span>
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
