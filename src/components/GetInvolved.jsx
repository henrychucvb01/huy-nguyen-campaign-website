const waysToConnect = [
  {
    number: '01',
    title: 'About Huy',
    text: 'Learn about Huy’s public service and the experiences that shaped his work.',
    link: 'Meet Huy',
    href: '/about',
  },
  {
    number: '02',
    title: 'Our Vision',
    text: 'Explore the Faster, Foundation, and Future priorities for LBCC.',
    link: 'View Our Vision',
    href: '/#three-fs',
  },
  {
    number: '03',
    title: 'Contact',
    text: 'Share your questions and ideas for the future of Long Beach City College.',
    link: 'Contact Huy',
    href: '/get-involved',
  },
]

export default function GetInvolved() {
  return (
    <section className="section get-involved" id="stay-connected">
      <div className="section__inner">
        <div className="get-involved__heading">
          <p className="eyebrow">Stay Connected</p>
          <h2>The Work for LBCC Continues.</h2>
          <p className="section-heading__intro">
            Keep up with Huy’s priorities and stay connected to the future of our college and community.
          </p>
        </div>
        <div className="get-involved__grid">
          {waysToConnect.map((item) => (
            <article className="involvement-card" key={item.title}>
              <span className="involvement-card__icon" aria-hidden="true">{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <a href={item.href}>{item.link} →</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
