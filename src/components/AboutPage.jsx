import React from 'react';
import '../about-page.css';

const AboutPage = () => {
  return (
    <div className="about-page-wrapper">
      
      {/* SECTION 1: INTRO & MAIN PHOTO */}
      <section className="about-section">
        <div className="about-container grid-row">
          <div className="story-text">
            <span className="about-kicker">Meet Huy</span>
            <h1>Service Has Shaped Every Chapter of His Life.</h1>
            <p>
              Huy “Henry” Nguyen grew up in a working-class family in Southern California. 
              His father was a postal worker, and his mother sewed clothes in a garment factory 
              to provide for their family. From them, he learned the values of hard work, 
              perseverance, and community.
            </p>
          </div>
          <div className="story-image">
            {/* Using the hero cutout or main portrait here */}
            <img src="/images/hero/huy-nguyen-full.webp" alt="Huy Nguyen" />
          </div>
        </div>
      </section>

      {/* SECTION 2: CAREER (ZIG-ZAG) */}
      <section className="about-section gray-bg">
        <div className="about-container grid-row reverse">
          <div className="story-text">
            <h2>25 Years of Leadership</h2>
            <p>
              With over 15 years at LAUSD and a current role as a School District Administrator 
              for Teamsters Local 572, Huy manages multimillion-dollar budgets and meal 
              programs that feed thousands of students daily. This experience has equipped 
              him with the accountability needed for the LBCC Board.
            </p>
          </div>
          <div className="story-image">
            <img src="/images/about/community.jpg" alt="Community Leadership" />
          </div>
        </div>
      </section>

      {/* SECTION 3: MILITARY */}
      <section className="about-section">
        <div className="about-container grid-row">
          <div className="story-text">
            <h2>A Veteran’s Discipline</h2>
            <p>
              A veteran U.S. Air Force Staff Sergeant, Huy served two tours of duty in Turkey 
              and Afghanistan. His military experience instilled in him a deep sense of 
              discipline, leadership under pressure, and an enduring commitment to service.
            </p>
          </div>
          <div className="story-image">
            <img src="/images/about/military.jpg" alt="Military Service" />
          </div>
        </div>
      </section>

      {/* SECTION 4: EDUCATION & VISION */}
      <section className="about-section light-blue-bg">
        <div className="about-container grid-row reverse">
          <div className="story-text">
            <h2>A Lifelong Learner</h2>
            <p>
              Huy holds an MBA in Finance from CSULB and degrees from Cal Poly Pomona and 
              Bowie State. He believes education is the bridge to opportunity and is 
              running to ensure LBCC remains a pathway to the middle class.
            </p>
          </div>
          <div className="story-image">
            <img src="/images/about/library-family.jpg" alt="Education" />
          </div>
        </div>
      </section>

      {/* SECTION 5: FAMILY (NOW AT THE BOTTOM) */}
      <section className="about-section">
        <div className="about-container grid-row">
          <div className="story-text">
            <h2>Rooted in Long Beach</h2>
            <p>
              Huy is a dedicated family man who understands the challenges facing working 
              families today. His passion for learning and belief in education as the 
              bridge to opportunity inspire his vision to build a stronger Long Beach 
              City College.
            </p>
            <p className="closing-quote">
              "I am running to build a stronger Long Beach City College that empowers 
              the next generation to succeed."
            </p>
          </div>
          <div className="story-image">
            <img src="/images/about/family.jpg" alt="Huy Nguyen Family" />
          </div>
        </div>
      </section>

      <section className="about-cta-section">
        <div className="about-container text-center">
          <a href="/#get-involved" className="cta-button">Join the Campaign</a>
        </div>
      </section>

    </div>
  );
};

export default AboutPage;
