import React from 'react';
import '../about-page.css';

const AboutPage = () => {
  return (
    <div className="about-page-wrapper">
      {/* 1. HERO SECTION */}
      <section className="about-hero-simple">
        <div className="about-container">
          <h1>Meet Huy Nguyen</h1>
          <div className="red-divider"></div>
        </div>
      </section>

      {/* 2. MAIN STORY SECTION */}
      <section className="about-story-row">
        <div className="about-container grid-2">
          <div className="story-text">
            <h2>Service Has Shaped Every Chapter of His Life.</h2>
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
          <div className="story-image">
            <img src="/images/hero/huy-nguyen-full.webp" alt="Huy Nguyen" />
          </div>
        </div>
      </section>

      {/* 3. SECONDARY STORY SECTION (ZIG-ZAG) */}
      <section className="about-story-row gray-bg">
        <div className="about-container grid-2 reverse">
          <div className="story-text">
            <h2>A Record of Leadership</h2>
            <p>
              [Add details about his military or professional experience here. 
              This section is currently using a light gray background to break up the page.]
            </p>
          </div>
          <div className="story-image">
            <img src="/images/about/military.jpg" alt="Military Service" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
