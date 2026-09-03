import '../experience-strip-icons.css'

function CivicIcon() {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <path d="M8 24h48L32 10 8 24Zm5 5h6v20h-6V29Zm16 0h6v20h-6V29Zm16 0h6v20h-6V29ZM8 53h48v5H8v-5Z" fill="currentColor" />
    </svg>
  )
}

function AirForceIcon() {
  return (
    <svg viewBox="0 0 80 64" aria-hidden="true">
      <path d="M4 13 31 28l9 9 9-9 27-15-9 18-17 10-10 12-10-12-17-10L4 13Z" fill="currentColor" />
      <path d="m17 32 14 7 9 10 9-10 14-7-6 11-12 7-5 8-5-8-12-7-6-11Z" fill="currentColor" />
      <circle cx="40" cy="47" r="3.5" fill="#f1263a" />
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
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <path d="M28 8h8v7h12v8h7v35H9V23h7v-8h12V8Zm4 13a6 6 0 1 0 0 12 6 6 0 0 0 0-12ZM15 31h7v7h-7v-7Zm27 0h7v7h-7v-7ZM15 43h7v7h-7v-7Zm27 0h7v7h-7v-7ZM27 41h10v17H27V41Z" fill="currentColor" />
    </svg>
  )
}

const stats = [
  { number: '26', label: 'Years Public Service', Icon: CivicIcon },
  { number: '10', label: 'Years U.S. Air Force', Icon: AirForceIcon },
  { number: '3', label: 'Degrees', Icon: DegreeIcon },
  { number: '16', label: 'Years Public Education', Icon: SchoolIcon },
]

export default function ExperienceStrip() {
  return (
    <section className="experience-strip" id="experience" aria-label="Experience">
      <div className="experience-strip__inner">
        {stats.map(({ number, label, Icon }) => (
          <div className="experience-stat experience-stat--icon" key={label}>
            <div className="experience-stat__text">
              <strong>{number}</strong>
              <span>{label}</span>
            </div>
            <div className="experience-stat__icon"><Icon /></div>
          </div>
        ))}
      </div>
    </section>
  )
}
