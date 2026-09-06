import { featuredOrganizations } from '../data/endorsements'

export default function Endorsements() {
  return (
    <section className="section endorsements" id="endorsements">
      <div className="section__inner">
        <div className="section-heading">
          <div>
            <p className="eyebrow eyebrow--light">Growing Support</p>
            <h2 className="endorsements__heading">
              <span>Endorsed By</span>
              <span>Leaders We</span>
              <span>Trust</span>
            </h2>
          </div>
        </div>
        <div className="endorsements__grid">
          {featuredOrganizations.map((endorsement) => {
            const isLbccfa = endorsement.name.startsWith('Long Beach City College')

            return (
            <article
              className={`endorsement-logo${isLbccfa ? ' endorsement-logo--lbccfa' : ''}`}
              key={endorsement.name}
            >
              <div className="endorsement-logo__image">
                {isLbccfa ? (
                  <div className="lbccfa-image-wrap">
                    <img src={endorsement.logo} alt={endorsement.name} />
                  </div>
                ) : (
                  <img src={endorsement.logo} alt={endorsement.name} />
                )}
              </div>
            </article>
            )
          })}
        </div>
        <div className="endorsement-actions">
          <a className="button button--outline-light" href="/endorsements">View All Endorsements</a>
        </div>
      </div>
    </section>
  )
}
