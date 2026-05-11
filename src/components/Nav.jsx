export default function Nav() {
  return (
    <nav>
      <a className="nav-logo" href="#hero">Safia Mussarat</a>
      <ul className="nav-links">
        {['about','skills','projects','experience','education','contact'].map(s => (
          <li key={s}><a href={`#${s}`}>{s.charAt(0).toUpperCase() + s.slice(1)}</a></li>
        ))}
      </ul>
    </nav>
  )
}
