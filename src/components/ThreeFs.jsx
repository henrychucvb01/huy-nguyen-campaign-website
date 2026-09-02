const priorities = [
  {
    number: '01',
    title: 'Faster',
    text: 'Expand dual enrollment and remove barriers so students can move through programs faster.',
  },
  {
    number: '02',
    title: 'Foundation',
    text: 'Strengthen food, housing, transportation, and mental-health support so students can stay focused.',
  },
  {
    number: '03',
    title: 'Future',
    text: 'Build stronger career pathways and veterans services that connect education to opportunity.',
  },
]

export default function ThreeFs() {
  return (
    <section className="section three-fs" id="three-fs">
      <div className="section__inner">
        <div className="section-heading">
          <div>
            <p className="eyebrow">The Plan</p>
            <h2>The 3 F’s: My Commitment to LBCC</h2>
          </div>
          <p className="section-heading__intro">
            A focused plan to help students move forward, meet their basic needs,
            and prepare for a strong future.
          </p>
        </div>
        <div className="three-fs__grid">
          {priorities.map((priority) => (
            <article className="priority-card" key={priority.title}>
              <span className="priority-card__number">{priority.number}</span>
              <h3>{priority.title}</h3>
              <p>{priority.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
