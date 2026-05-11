import { skills } from '../data'

export default function Skills() {
  const devCats = ['Development']
  return (
    <section id="skills">
      <div className="s-head reveal">
        <p className="s-label">My toolkit</p>
        <h2 className="s-title">Technical Skills</h2>
        <p className="s-desc">A carefully built stack spanning data science and professional practices.</p>
      </div>
      <div className="skills-cats reveal">
        {Object.entries(skills).map(([cat, items]) => (
          <div key={cat}>
            <p className="skill-cat-label">◦ {cat}</p>
            <div className="skill-pills">
              {items.map(skill => (
                <div className={`pill ${devCats.includes(cat) ? 'steel-pill' : ''}`} key={skill}>
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
