import { projects } from '../data'

export default function Projects() {
  return (
    <section id="projects">
      <div className="s-head reveal">
        <h2 className="s-title">Projects</h2>
      </div>
      <div className="proj-grid">
        {projects.map(p => (
          <div className="pcard reveal" key={p.id}>
            <div className="pcard-top">
              <div>
                <h3 className="pcard-name">{p.name}</h3>
                <p className="pcard-stack">{p.stack}</p>
              </div>
            </div>
            <p className="pcard-desc">{p.desc}</p>
            <div className="pcard-footer">
              {p.github ? (
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pcard-link"
                >
                  ⌥ GitHub →
                </a>
              ) : (
                <span className="pcard-no-link">Private repository</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
