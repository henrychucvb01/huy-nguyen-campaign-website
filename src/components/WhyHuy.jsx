export default function WhyHuy() {
  return (
    <section className="section why-huy" id="about">
      <div className="section__inner why-huy__grid">
        <div className="photo-stack" aria-label="Huy Nguyen at Long Beach City College">
          <div className="story-photo story-photo--primary">
            <img
              src="/images/about/LBCCCandidate-117%20(Modified).jpg"
              alt="Huy Nguyen with a community supporter at Long Beach City College"
            />
          </div>
          <div className="story-photo story-photo--secondary">
            <img
              src="/images/about/LBCCCandidate-264.jpg"
              alt="Huy Nguyen inside the Long Beach City College gym"
            />
          </div>
        </div>
        <div className="why-huy__copy">
          <p className="eyebrow">Why Huy</p>
          <h2>A Record of Service. A Commitment to Our Community.</h2>
          <p>
            Huy “Henry” Nguyen has built his life around service—to his country,
            public education, and the Long Beach community he calls home.
          </p>
          <a className="button button--outline-navy" href="#contact">Read My Story</a>
        </div>
      </div>
    </section>
  )
}
