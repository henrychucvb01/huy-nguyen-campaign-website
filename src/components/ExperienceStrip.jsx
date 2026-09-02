const stats = [
  ['26', 'Years Public Service'],
  ['10', 'Years U.S. Air Force'],
  ['3', 'Degrees'],
  ['16', 'Years Public Education'],
]

export default function ExperienceStrip() {
  return (
    <section className="experience-strip" id="experience" aria-label="Experience">
      <div className="experience-strip__inner">
        {stats.map(([number, label]) => (
          <div className="experience-stat" key={label}>
            <strong>{number}</strong>
            <span>{label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
