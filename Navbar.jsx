import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar({ transparent = false }) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      {/* Announcement bar */}
      <div className="announcement-bar">
        FREE SHIPPING TO UNITED STATES OVER $170
      </div>

      <nav className={`navbar ${transparent ? 'navbar--transparent' : ''}`}>
        <div className="navbar__left">
          <Link to="/" className="nav-link">SHOP</Link>
          <Link to="/collections/summer-26" className="nav-link">COLLECTIONS</Link>
          <a href="#" className="nav-link">BRAND</a>
        </div>

        <div className="navbar__center">
          <Link to="/" className="navbar__logo">
            <StarLogo />
          </Link>
        </div>

        <div className="navbar__right">
          <button className="nav-link nav-btn">SEARCH</button>
          <button className="nav-link nav-btn">LOG IN</button>
          <button className="nav-link nav-btn">BAG</button>
        </div>

        {/* Mobile hamburger */}
        <button className="navbar__hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span><span></span><span></span>
        </button>
      </nav>

      {menuOpen && (
        <div className="mobile-menu">
          <Link to="/" className="mobile-nav-link" onClick={() => setMenuOpen(false)}>SHOP</Link>
          <Link to="/collections/summer-26" className="mobile-nav-link" onClick={() => setMenuOpen(false)}>COLLECTIONS</Link>
          <a href="#" className="mobile-nav-link">BRAND</a>
          <a href="#" className="mobile-nav-link">SEARCH</a>
          <a href="#" className="mobile-nav-link">LOG IN</a>
          <a href="#" className="mobile-nav-link">BAG</a>
        </div>
      )}
    </>
  )
}

function StarLogo() {
  return (
    <svg width="60" height="30" viewBox="0 0 60 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <polygon points="15,2 18,11 27,11 20,17 23,26 15,20 7,26 10,17 3,11 12,11" fill="currentColor"/>
      <polygon points="45,2 48,11 57,11 50,17 53,26 45,20 37,26 40,17 33,11 42,11" fill="currentColor"/>
    </svg>
  )
}
