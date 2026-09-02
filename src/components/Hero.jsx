export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero__content">
        <p className="eyebrow eyebrow--light">For Long Beach Community College Board of Trustees</p>
        <h1>
          <span>Experience.</span>
          <span>Service.</span>
          <span className="headline-accent">A Stronger Future for LBCC.</span>
        </h1>
        <p className="hero__copy">
          A proven leader with deep roots in Long Beach, fighting for our students,
          veterans, and community.
        </p>
        <div className="hero__actions">
          <a className="button button--red" href="#about">Meet Huy</a>
          <a className="button button--outline-light" href="#get-involved">Join the Campaign</a>
        </div>
      </div>
      <div className="hero__visual" aria-label="Temporary candidate and LBCC campus image area">
        <div className="photo-placeholder" role="img" aria-label="Candidate photo with an LBCC campus background will be placed here">
          <span className="photo-placeholder__label">Temporary photo placeholder<br />Candidate + LBCC campus</span>
        </div>
      </div>
    </section>
  )
}
