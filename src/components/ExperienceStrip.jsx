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
    <svg viewBox="0 0 72 64" aria-hidden="true">
      <path d="M5 14 29 28l7 8 7-8 24-14-9 17-16 9-6 8-6-8-16-9L5 14Zm31 29 5 6-5 7-5-7 5-6Z" fill="currentColor" />
      <path d="m15 31 15 7 6 7 6-7 15-7-6 10-11 5-4 5-4-5-11-5-6-10Z" fill="currentColor" opacity=".95" />
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
            <div className="experience-stat__icon"><Icon /></div>
            <div className="experience-stat__text">
              <strong>{number}</strong>
              <span>{label}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
