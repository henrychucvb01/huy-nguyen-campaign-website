const endorsements = [
  {
    name: 'Teamsters Local 572',
    image: '/images/endorsements/teamsters-local-572.png',
  },
  {
    name: 'Teamsters Joint Council 42',
    image: '/images/endorsements/teamsters-joint-council-42.png',
  },
  {
    name: 'Long Beach City College Faculty Association',
    image: '/images/endorsements/lbcc-faculty-association.webp',
  },
]

const placeholders = ['Additional endorsement', 'Additional endorsement', 'Additional endorsement']

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
          {endorsements.map((endorsement) => (
            <article className="endorsement-card" key={endorsement.name}>
              <img src={endorsement.image} alt={`${endorsement.name} endorsement`} />
              <h3>{endorsement.name}</h3>
            </article>
          ))}
          {placeholders.map((label, index) => (
            <div className="endorsement-placeholder" key={`${label}-${index}`}>{label}</div>
          ))}
        </div>
        <a className="button button--outline-light" href="#contact">View All Endorsements</a>
      </div>
    </section>
  )
}
