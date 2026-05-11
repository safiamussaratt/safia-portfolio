import { education } from '../data'

export default function Education() {
  return (
    <section id="education">
      <div className="s-head reveal">
        <p className="s-label">Academic background</p>
        <h2 className="s-title">Education</h2>
      </div>
      <div className="edu-grid">
        {education.map((e, i) => (
          <div className="edcard reveal" key={i}>
            <p className="edcard-year">{e.year}</p>
            <h3 className="edcard-inst">{e.inst}</h3>
            <p className="edcard-deg">{e.deg}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
