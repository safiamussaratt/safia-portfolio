export default function Hero() {
  return (
    <section id="hero">
      <div className="hero-bg" />
      <div className="hero-grid">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#86a8cf" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="hero-text">
        <div className="hero-tag">CS Student · Data Science · Software Engineering</div>
        <h1 className="hero-title">
          <em className="accent">Safia</em>
          <span className="line2">Mussarat</span>
        </h1>
        <p className="hero-desc">
          Building data-driven applications that solve real-world problems — from urban heat
          analysis with satellite data to NGO discovery platforms.
        </p>
        <div className="hero-btns">
          <a href="#projects" className="btn-primary">View My Work →</a>
          <a href="#contact" className="btn-ghost">Get In Touch</a>
        </div>
      </div>

      <div className="hero-right">
        <div className="profile-ring">
          <img src="/images/profile.jpeg" alt="Safia Mussarat" className="profile-image" />
        </div>
      </div>
    </section>
  )
}