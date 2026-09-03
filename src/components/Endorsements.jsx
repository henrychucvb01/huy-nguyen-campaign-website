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

// Pro Tip: If you don't have new endorsements yet, 
// you can leave this as an empty array [] to hide the empty boxes.
const placeholders = ['Additional endorsement', 'Additional endorsement', 'Additional endorsement']

export default function Endorsements() {
  return (
    <section className="section endorsements" id="endorsements" style={{ background: '#071a38', color: '#fff', padding: '80px 0' }}>
      <div className="section__inner">
        <div className="section-heading">
          <div style={{ marginBottom: '40px' }}>
            <p className="eyebrow eyebrow--light" style={{ color: '#ef233c', fontWeight: '800', textTransform: 'uppercase' }}>Growing Support</p>
            <h2 style={{ fontSize: '3rem', textTransform: 'uppercase', fontFamily: 'Barlow Condensed, sans-serif' }}>Endorsed by Leaders We Trust</h2>
          </div>
          <p className="section-heading__intro" style={{ opacity: 0.9, maxWidth: '600px', marginBottom: '40px' }}>
            Community leaders, educators, workers, and veterans are standing with Huy.
          </p>
        </div>

        <div className="endorsements__grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
          {endorsements.map((endorsement) => (
            <article className="endorsement-card" key={endorsement.name} style={{ background: '#fff', padding: '30px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '250px' }}>
              <div className="logo-wrapper" style={{ width: '100%', height: '120px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                <img 
                  src={endorsement.image} 
                  alt={`${endorsement.name} endorsement`} 
                  style={{ 
                    maxWidth: '100%', 
                    maxHeight: '100%', 
                    objectFit: 'contain' // THIS FIXES THE HORSE
                  }} 
                />
              </div>
              <h3 style={{ color: '#071a38', fontSize: '1rem', fontWeight: '800', textTransform: 'uppercase', margin: 0 }}>{endorsement.name}</h3>
            </article>
          ))}

          {/* Placeholders - Styled to look like "Coming Soon" slots */}
          {placeholders.map((label, index) => (
            <div className="endorsement-placeholder" key={`${label}-${index}`} style={{ border: '1px dashed rgba(255,255,255,0.3)', padding: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', textTransform: 'uppercase', fontSize: '0.75rem', letterSpacing: '1px', opacity: 0.5, minHeight: '250px' }}>
              {label}
            </div>
          ))}
        </div>
        
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
          <a className="button button--outline-light" href="#contact" style={{ border: '2px solid #fff', padding: '12px 30px', color: '#fff', textDecoration: 'none', fontWeight: '800', textTransform: 'uppercase' }}>
            View All Endorsements
          </a>
        </div>
      </div>
    </section>
  )
}
