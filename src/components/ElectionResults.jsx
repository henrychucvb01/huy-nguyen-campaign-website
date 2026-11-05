import { useEffect, useRef, useState } from 'react'

const results = {
  status: 'Unofficial Results',
  asOf: 'Unofficial results as of November 5, 2026, 9:21:41 AM PST. Pending certification by the Los Angeles County Registrar-Recorder/County Clerk.',
  candidates: [
    { name: 'Huy “Henry” Nguyen', votes: 16694, percentage: 53.63, winner: true },
    { name: 'Susana Gonzalez Edmond', votes: 14436, percentage: 46.37, winner: false },
  ],
}

const voteLead = Math.abs(results.candidates[0].votes - results.candidates[1].votes)

export default function ElectionResults() {
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(() => !('IntersectionObserver' in window))

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return undefined

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true)
        observer.disconnect()
      }
    }, { threshold: 0.18 })

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className={`election-results${isVisible ? ' is-visible' : ''}`}
      id="election-results"
      aria-labelledby="election-results-title"
    >
      <div className="election-results__inner">
        <div className="election-results__heading">
          <p className="eyebrow eyebrow--light">{results.status}</p>
          <h2 id="election-results-title">2026 Election Results</h2>
          <p className="election-results__subtitle">
            Long Beach Community College District — Trustee Area 5
          </p>
        </div>

        <div className="election-results__cards">
          {results.candidates.map((candidate) => (
            <article
              className={`election-result${candidate.winner ? ' election-result--winner' : ''}`}
              key={candidate.name}
            >
              <h3>{candidate.name}</h3>
              <strong className="election-result__percentage">{candidate.percentage.toFixed(2)}%</strong>
              <p className="election-result__votes">
                {candidate.votes.toLocaleString('en-US')} <span>votes</span>
              </p>
            </article>
          ))}
        </div>

        <div
          className="election-results__bar"
          role="img"
          aria-label={`Vote comparison: ${results.candidates[0].name}, ${results.candidates[0].percentage.toFixed(2)} percent; ${results.candidates[1].name}, ${results.candidates[1].percentage.toFixed(2)} percent.`}
        >
          <span
            className="election-results__bar-nguyen"
            style={{ width: isVisible ? `${results.candidates[0].percentage}%` : '0%' }}
          />
          <span
            className="election-results__bar-edmond"
            style={{ width: isVisible ? `${results.candidates[1].percentage}%` : '0%' }}
          />
        </div>

        <p className="election-results__lead">
          +{voteLead.toLocaleString('en-US')} <span>Vote Lead</span>
        </p>
        <p className="election-results__disclaimer">{results.asOf}</p>
      </div>
    </section>
  )
}
