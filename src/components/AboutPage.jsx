import React from 'react';
import '../about-page.css';

const AboutPage = () => {
  return (
    <div className="about-wrapper">
      {/* Hero Section - Simple and Clean */}
      <header className="about-header">
        <h1>About Huy Nguyen</h1>
        <div className="accent-line"></div>
      </header>

      <div className="about-container">
        
        {/* Section 1: Introduction */}
        <section className="about-row">
          <div className="about-text">
            <h2 className="section-title">Service Has Shaped Every Chapter of His Life.</h2>
            <p>
              Huy “Henry” Nguyen grew up in a working-class Southern California family. 
              His father was a postal worker, and his mother sewed clothes in a garment 
              factory to provide for their family.
            </p>
            <p>
              From them, Huy learned the values that have guided his life: 
              <strong> hard work, perseverance, service to community, and lifelong learning.</strong>
            </p>
          </div>
          <div className="about-image-container">
            <img src="/images/hero/huy-nguyen-full.webp" alt="Huy Nguyen" className="about-img-main" />
          </div>
        </section>

        {/* Section 2: Family/Roots */}
        <section className="about-row reverse">
          <div className="about-text">
            <h2 className="section-title">Rooted in Family</h2>
            <p>
              [Insert your family story here. Talk about the library-family photo or 
              growing up in the local community.]
            </p>
          </div>
          <div className="about-image-container">
            <img src="/images/about/family.jpg" alt="Family" className="about-img-sub" />
          </div>
        </section>

        {/* Section 3: Military Service */}
        <section className="about-row">
          <div className="about-text">
            <h2 className="section-title">A Record of Service</h2>
            <p>
              [Insert military service or professional background here. 
              Keep it focused on leadership and results.]
            </p>
          </div>
          <div className="about-image-container">
            <img src="/images/about/military.jpg" alt="Military Service" className="about-img-sub" />
          </div>
        </section>

      </div>
    </div>
  );
};

export default AboutPage;
