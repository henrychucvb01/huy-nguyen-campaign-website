const placeholders = Array.from({ length: 6 }, (_, index) => `Endorsement logo ${index + 1}`)

export default function Endorsements() {
  return (
    <section className="section endorsements" id="endorsements">
      <div className="section__inner">
        <div className="section-heading">
          <div>
            <p className="eyebrow eyebrow--light">Growing Support</p>
            <h2>Endorsed by Leaders We Trust</h2>
          </div>
          <p className="section-heading__intro">
            Community leaders, educators, workers, and veterans are standing with Huy.
          </p>
        </div>
        <div className="endorsements__grid">
          {placeholders.map((label) => (
            <div className="endorsement-placeholder" key={label}>{label}</div>
          ))}
        </div>
        <a className="button button--outline-light" href="#contact">View All Endorsements</a>
      </div>
    </section>
  )
}
