function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">DevFlow</div>

      <div className="nav-links">
        <a href="/">Dashboard</a>
        <a href="/">Projects</a>
        <a href="/">Tasks</a>
      </div>

      <div className="profile">
        <div className="avatar">S</div>
        <span>Shalini</span>
      </div>
    </nav>
  )
}

export default Navbar