import '../experience-strip-icons.css'

function CivicIcon() {
  return (
    <svg viewBox="0 0 100 100" aria-hidden="true">
      <path fill="currentColor" fillRule="evenodd" d="M31.70 93.95 L68.20 93.95 L64.80 89.47 L35.10 89.47 Z M64.90 57.24 L64.90 87.11 L65.60 87.11 L70.80 93.95 L81.40 93.95 L81.40 57.24 Z M74.60 74.34 L77.90 74.34 L78.00 74.47 L78.00 81.32 L77.90 81.45 L74.50 81.45 L74.40 81.32 L74.40 74.61 Z M68.40 74.34 L71.80 74.34 L71.90 74.47 L71.90 81.32 L71.80 81.45 L68.40 81.45 L68.30 81.32 L68.30 74.47 Z M18.40 57.24 L18.40 93.95 L29.00 93.95 L34.20 87.11 L35.00 87.11 L35.00 57.24 Z M22.00 74.34 L25.50 74.34 L25.60 74.47 L25.60 81.32 L25.50 81.45 L22.10 81.45 L22.00 81.32 Z M28.20 74.34 L31.60 74.34 L31.70 74.47 L31.70 81.32 L31.60 81.45 L28.20 81.45 L28.10 81.32 L28.10 74.47 Z M35.00 55.13 L65.00 55.13 L65.00 50.79 L59.80 48.16 L50.00 45.39 L40.20 48.16 L35.00 50.79 Z M39.50 56.84 L39.50 87.24 L46.00 87.24 L46.00 62.50 L49.90 62.50 L49.90 87.24 L54.00 87.24 L54.00 62.50 L60.50 62.50 L60.50 87.24 L63.10 87.24 L63.10 56.84 Z M39.40 44.47 L60.60 44.47 L60.60 36.32 L57.90 36.32 L57.90 29.47 L52.20 29.47 L52.20 18.03 L50.80 18.03 L50.80 11.18 L49.10 11.18 L49.10 18.03 L47.80 18.03 L47.80 29.47 L42.10 29.47 L42.10 36.32 L39.40 36.32 Z" />
    </svg>
  )
}

function DegreeIcon() {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <path d="m4 24 28-12 28 12-28 12L4 24Zm11 8 17 7 17-7v12c-4 5-10 8-17 8s-13-3-17-8V32Zm39-1h4v18h-4V31Z" fill="currentColor" />
    </svg>
  )
}

function SchoolIcon() {
  return (
    <svg viewBox="0 0 100 100" aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeWidth="4.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 39 30 27h40l10 12v39H20Z" />
        <path d="M30 27h40M50 27V14m0 0 13 5-13 5" />
        <circle cx="50" cy="39" r="7" />
        <path d="M47 39h3v-4M42 78V58h16v20M28 49h8v13h-8zM64 49h8v13h-8z" />
      </g>
    </svg>
  )
}

const stats = [
  { number: '26', label: 'Years Public Service', Icon: CivicIcon },
  { number: '10', label: 'Years U.S. Air Force', image: '/images/icons/air-force-white.png' },
  { number: '3', label: 'Degrees', Icon: DegreeIcon },
  { number: '16', label: 'Years Public Education', Icon: SchoolIcon },
]

export default function ExperienceStrip() {
  return (
    <section className="experience-strip" id="experience" aria-label="Experience">
      <div className="experience-strip__inner">
        {stats.map(({ number, label, Icon, image }) => (
  <div className="experience-stat experience-stat--icon" key={label}>
    <div className="experience-stat__text">
      <strong>{number}</strong>
      <span>{label}</span>
    </div>

    <div className="experience-stat__icon">
      {image ? (
        <img src={image} alt="" aria-hidden="true" />
      ) : (
        <Icon />
      )}
    </div>
  </div>
))}
      </div>
    </section>
  )
}
