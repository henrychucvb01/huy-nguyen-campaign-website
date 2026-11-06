const thankYouParagraphs = [
  'To my family, friends, volunteers, supporters, and everyone who believed in our campaign: thank you.',
  'This campaign has always been about something greater than an election. It\'s about creating opportunities, strengthening our community, and building a brighter future for Long Beach City College.',
  'I am deeply grateful for the trust and encouragement you have shown me.',
  'As we look toward the next chapter, I remain committed to listening, working together, and serving our students and community.',
  'The campaign may be coming to an end, but our journey is just beginning.',
  'Thank you, Long Beach and Lakewood!',
]

export default function ThankYou() {
  return (
    <section className="thank-you section" id="our-journey" aria-labelledby="thank-you-title">
      <div className="section__inner thank-you__inner">
        <p className="eyebrow">With Gratitude</p>
        <h2 id="thank-you-title">Our Journey Is Just Beginning</h2>
        <div className="thank-you__message">
          {thankYouParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
        <p className="thank-you__signature">Huy "Henry" Nguyen</p>
      </div>
    </section>
  )
}
