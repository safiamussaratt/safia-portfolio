const cards = [
  { title: 'Problem Solver',       body: 'I enjoy breaking down complex problems and finding practical, efficient solutions through structured thinking and experimentation.' },
  { title: 'Builder & Collaborator',     body: 'I like building projects that are both useful and scalable, while collaborating closely with others and learning from different perspectives.' },
  { title: 'Growth Mindset',       body: 'Constant learning and improvement drive me — whether it’s exploring new technologies, refining workflows, or taking on unfamiliar challenges.' },
]

export default function About() {
  return (
    <section id="about">
      <div className="s-head reveal">
        <h2 className="s-title">About Me</h2>
        <p className="s-desc">Computer Science student who enjoys solving meaningful problems, learning continuously, and building technology that has practical impact.</p>
      </div>
      <div className="about-grid">
        {cards.map(c => (
          <div className="acard reveal" key={c.title}>
            <div className="acard-icon">{c.icon}</div>
            <p className="acard-title">{c.title}</p>
            <p className="acard-body">{c.body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
