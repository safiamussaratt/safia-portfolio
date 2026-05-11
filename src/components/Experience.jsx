import { experience } from '../data'

export default function Experience() {
  return (
    <section id="experience">
      <div className="exp-wrap">
        <div className="s-head reveal">
          <h2 className="s-title">Experience</h2>
        </div>
        <div className="exp-list">
          {experience.map((e, i) => (
            <div className="eitem reveal" key={i}>
              <div className="e-spine">
                <div className="e-dot" />
                {!e.isLast && <div className="e-line" />}
              </div>
              <div>
                <p className="e-role">{e.role}</p>
                <p className="e-org">{e.org}</p>
                <p className="e-date">{e.date}</p>
                <ul className="e-bullets">
                  {e.bullets.map((b, j) => <li key={j}>{b}</li>)}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
