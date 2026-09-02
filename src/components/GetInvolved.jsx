const actions = [
  {
    number: '01',
    title: 'Volunteer',
    text: 'Join neighbors across Long Beach working to move LBCC forward.',
    link: 'Sign Up to Help',
  },
  {
    number: '02',
    title: 'Endorse',
    text: 'Add your name and voice to the growing community supporting Huy.',
    link: 'Endorse Huy',
  },
  {
    number: '03',
    title: 'Donate',
    text: 'Help us reach voters and build a campaign powered by the community.',
    link: 'Contribute',
    featured: true,
  },
]

export default function GetInvolved() {
  return (
    <section className="section get-involved" id="get-involved">
      <div className="section__inner">
        <div className="get-involved__heading">
          <p className="eyebrow">Take Action</p>
          <h2>Be Part of a Stronger Future for LBCC.</h2>
        </div>
        <div className="get-involved__grid">
          {actions.map((action) => (
            <article className={`involvement-card${action.featured ? ' involvement-card--featured' : ''}`} key={action.title}>
              <span className="involvement-card__icon" aria-hidden="true">{action.number}</span>
              <h3>{action.title}</h3>
              <p>{action.text}</p>
              <a href="#contact">{action.link} →</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
