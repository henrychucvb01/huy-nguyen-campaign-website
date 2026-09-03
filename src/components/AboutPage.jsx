import '../about-page.css'

const photos = {
  community: '/images/about/community.jpg',
  military: '/images/about/military.jpg',
  library: '/images/about/library-family.jpg',
  family: '/images/about/family.jpg',
}

export default function AboutPage() {
  return (
    <main className="about-page" id="about-top">
      <section className="about-hero">
        <div className="about-hero__copy">
          <p className="about-kicker">Meet Huy</p>
          <h1>Service has shaped every chapter of his life.</h1>
          <p>Huy “Henry” Nguyen grew up in a working-class Southern California family. His father was a postal worker, and his mother sewed clothes in a garment factory to provide for their family.</p>
          <p>From them, Huy learned the values that have guided his life: <strong>hard work, perseverance, service to community, and lifelong learning.</strong></p>
        </div>
        <figure className="about-photo about-photo--hero"><img src={photos.community} alt="Huy Nguyen speaking with members of the community" /></figure>
      </section>

      <section className="about-stats" aria-label="Huy Nguyen experience">
        <div><strong>26</strong><span>Years Public Service</span></div>
        <div><strong>10</strong><span>Years U.S. Air Force</span></div>
        <div><strong>3</strong><span>Degrees</span></div>
        <div><strong>16</strong><span>Years Public Education</span></div>
      </section>

      <section className="about-story about-story--navy">
        <figure className="about-photo"><img src={photos.military} alt="Huy Nguyen during his military service" /></figure>
        <div className="about-story__copy">
          <p className="about-kicker">Service to Country</p>
          <h2>A lifetime of service.</h2>
          <p>Huy spent 10 years in the United States Air Force, rising to the rank of Staff Sergeant and serving overseas, including in Turkey and Afghanistan.</p>
          <p>His military service taught him discipline, accountability, teamwork, leadership under pressure, and a lasting commitment to service—lessons that continue to guide his approach to public life.</p>
        </div>
      </section>

      <section className="about-story about-story--light about-story--reverse">
        <figure className="about-photo"><img src={photos.library} alt="Huy Nguyen with his family at a Long Beach community event" /></figure>
        <div className="about-story__copy">
          <p className="about-kicker">Service to Students</p>
          <h2>16 years in public education.</h2>
          <p>After serving his country, Huy continued his public service in education. Today, as a school district administrator, he oversees operations across 28 school sites, 113 employees, and programs serving thousands of student meals.</p>
          <p>His work has given him firsthand experience in management, accountability, and complex operations, along with an understanding of the everyday challenges facing students, families, and frontline education employees.</p>
        </div>
      </section>

      <section className="about-education">
        <div className="about-education__intro">
          <p className="about-kicker">Lifelong Learner</p>
          <h2>Education opened doors for Huy. He wants those same doors open for every LBCC student.</h2>
        </div>
        <div className="about-degrees">
          <article><strong>B.A.</strong><h3>Behavioral Science</h3><p>Cal Poly Pomona</p></article>
          <article><strong>M.S.</strong><h3>Management Information Systems</h3><p>Bowie State University</p></article>
          <article><strong>MBA</strong><h3>Finance</h3><p>California State University, Long Beach</p></article>
        </div>
      </section>

      <section className="about-story about-story--family">
        <figure className="about-photo"><img src={photos.family} alt="Huy Nguyen with his family" /></figure>
        <div className="about-story__copy">
          <p className="about-kicker">The Next Chapter</p>
          <h2>Now, Huy is ready to bring 26 years of public service to LBCC.</h2>
          <p>Huy is running for the Long Beach Community College District Board of Trustees because he believes community college should be one of the strongest pathways to opportunity for students and working families.</p>
          <p>As a veteran, public education administrator, working-family advocate, father, and lifelong learner, Huy will bring practical experience and a service-first approach to the Board.</p>
          <p className="about-closing">For Huy, this campaign is the next chapter in a lifetime of service.</p>
          <a className="button button--red" href="/#three-fs"><span>See Huy’s Vision</span><span className="button__arrow" aria-hidden="true">→</span></a>
        </div>
      </section>
    </main>
  )
}
