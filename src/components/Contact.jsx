export function Contact() {
  return (
    <section id="contact">
      <div className="s-head reveal">
        <p className="s-label">Let's connect</p>
        <h2 className="s-title">Get In Touch</h2>
        <p className="s-desc" style={{ margin: '0 auto 1.5rem' }}>
          Open to internships, collaborations, and interesting projects. Say hello!
        </p>
      </div>

      <div className="contact-links reveal">
        <a href="mailto:safiamussaratt@gmail.com" className="contact-link">✉ safiamussaratt@gmail.com</a>
        <a href="https://github.com/safiamussaratt" target="_blank" rel="noopener noreferrer" className="contact-link">⌥ github.com/safiamussaratt</a>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer>
      <p className="f-copy">◈ Safia Mussarat · © 2026 · Karachi, Pakistan</p>
      <div className="f-socials">
        <a href="https://github.com/safiamussaratt" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="mailto:safiamussaratt@gmail.com">Email</a>
      </div>
    </footer>
  )
}
