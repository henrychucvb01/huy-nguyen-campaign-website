import React from 'react';
import '../about-page.css';

const AboutPage = () => {
  return (
    <div className="about-page-wrapper">
      
      {/* SECTION 1: HERO & FAMILY */}
      <section className="about-section">
        <div className="about-container grid-2">
          <div className="story-text">
             <span className="about-kicker">Meet Huy</span>
            <h1>Service Has Shaped Every Chapter of His Life.</h1>
            <p>
              Huy “Henry” Nguyen grew up in a working-class family in Southern California. 
              His father was a postal worker, and his mother sewed clothes in a garment factory 
              to provide for their family. From them, he learned the values of hard work, 
              perseverance, and community — principles that have guided his life and his 
              commitment to public service.
            </p>
          </div>
          <div className="story-image">
            <img src="/images/hero/huy-nguyen-full.webp" alt="Huy Nguyen" />
          </div>
        </div>
      </section>

      {/* SECTION 2: LAUSD & LEADERSHIP (GRAY BACKGROUND) */}
      <section className="about-section gray-bg">
        <div className="about-container grid-2 reverse">
          <div className="story-text">
            <h2>25 Years of Leadership</h2>
            <p>
              Nguyen’s career spans 25 years of government and community service — including 
              more than 15 years with the Los Angeles Unified School District (LAUSD). 
              He currently serves as a School District Administrator (Teamsters Local 572), 
              overseeing 28 cafeterias, 113 staff members, and meal programs that feed 
              thousands of students daily.
            </p>
            <p>
              Managing multimillion-dollar budgets and complex operations has equipped him 
              with the leadership and accountability skills needed to serve effectively on 
              the Long Beach Community College District Board of Trustees.
            </p>
          </div>
          <div className="story-image">
            <img src="/images/about/community.jpg" alt="Community Leadership" />
          </div>
        </div>
      </section>

      {/* SECTION 3: MILITARY SERVICE */}
      <section className="about-section">
        <div className="about-container grid-2">
          <div className="story-text">
            <h2>A Veteran’s Commitment</h2>
            <p>
              Nguyen is a veteran U.S. Air Force Staff Sergeant, having proudly served 
              two tours of duty in Turkey and Afghanistan. His military experience 
              instilled in him a deep sense of discipline, leadership under pressure, 
              and an enduring commitment to service.
            </p>
            <p>
              He also serves in a statewide advocacy role with the California School 
              Nutrition Association, ensuring that every worker is treated with dignity 
              and respect.
            </p>
          </div>
          <div className="story-image">
            <img src="/images/about/military.jpg" alt="Military Service" />
          </div>
        </div>
      </section>

      {/* SECTION 4: EDUCATION & MISSION */}
      <section className="about-section light-blue-bg">
        <div className="about-container text-center-max">
          <h2>Education & Vision</h2>
          <p>
            A lifelong learner, Nguyen holds a B.S. in Behavioral Science from Cal Poly Pomona, 
            an M.S. in Management Information Systems from Bowie State University, and 
            an MBA in Finance from CSULB.
          </p>
          <p className="closing-quote">
            "Education is the bridge to opportunity. I am running to build a stronger 
            Long Beach City College that empowers the next generation to succeed."
          </p>
          <div className="about-cta">
             <a href="/#get-involved" className="cta-button">Join the Campaign</a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutPage;
