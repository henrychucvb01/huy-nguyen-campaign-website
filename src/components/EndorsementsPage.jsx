import { individualEndorsements, organizationEndorsements } from '../data/endorsements'

export default function EndorsementsPage() {
  return (
    <main className="endorsements-page">
      <section className="endorsements-hero">
        <div className="section__inner endorsements-hero__inner">
          <p className="eyebrow">Our Coalition</p>
          <h1>Proudly Endorsed</h1>
          <p>
            Educators, workers, veterans, community leaders, and organizations across our
            community are standing with Huy.
          </p>
        </div>
      </section>

      <section className="organization-endorsements" aria-label="Organization endorsements">
        <div className="section__inner organization-endorsements__grid">
          {organizationEndorsements.map((endorsement) => (
            <article className="organization-endorsement" key={endorsement.name}>
              <div className={`organization-endorsement__visual${endorsement.logo ? '' : ' organization-endorsement__visual--text'}`}>
                {endorsement.logo ? (
                  <img src={endorsement.logo} alt={endorsement.name} />
                ) : (
                  <span>{endorsement.name}</span>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="individual-endorsements">
        <div className="section__inner">
          <div className="individual-endorsements__heading">
            <p className="eyebrow">Community Support</p>
            <h2>Leaders Standing With Huy</h2>
          </div>
          <div className="individual-endorsements__grid">
            {individualEndorsements.map((endorsement) => (
              <article className="individual-endorsement" key={endorsement.name}>
                <h3>{endorsement.name}</h3>
                {endorsement.title && <p>{endorsement.title}</p>}
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
