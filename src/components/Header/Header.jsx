import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
   setMenuOpen((prev) => !prev);
  }

  return (
    <header className="site-header">
      <img className="logo" src="/PR-logo.png" alt="Proper Reviews logo" />

      <NavLink to="/" className="site-title">Proper Reviews</NavLink>

      <button
        type="button"
        className={`menu-toggle ${menuOpen ? "open" : ""}`}
        onClick={toggleMenu}
        aria-label={menuOpen ? "Close navigation" : "Open navigation"}
        aria-expanded={menuOpen}
      >
        <span></span> {/* These 3 spans are altered by CSS to create the hamburger menu icon and X*/}
        <span></span>
        <span></span>
      </button>

      <nav className={`site-nav ${menuOpen ? "open" : ""}`}>
        <ul>
          <li>
            <NavLink to="/movies" onClick={() => setMenuOpen(false)}>Movies</NavLink>
          </li>
          <li>
           <NavLink to="/tv" onClick={() => setMenuOpen(false)}>TV</NavLink>
          </li>
          <li>
            <NavLink to="/games" onClick={() => setMenuOpen(false)}>Games</NavLink>
          </li>
          <li>
            <NavLink to="/books" onClick={() => setMenuOpen(false)}>Books</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;