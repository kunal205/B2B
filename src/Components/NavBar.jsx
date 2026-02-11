import { NavLink } from "react-router-dom";
import { useState } from "react";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="container nav-flex">
        <NavLink to="/" className="logo">
          Nageshwar Flexipack
        </NavLink>

        {/* Hamburger */}
        <button
          className="menu-toggle"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          ☰
        </button>

        <nav className={`nav-links ${open ? "open" : ""}`}>
          <NavLink to="/about" onClick={() => setOpen(false)}>
            About
          </NavLink>
          <NavLink to="/products" onClick={() => setOpen(false)}>
            Products
          </NavLink>
          <NavLink to="/manufacturing" onClick={() => setOpen(false)}>
            Manufacturing
          </NavLink>
          <NavLink to="/why-us" onClick={() => setOpen(false)}>
            Why Us
          </NavLink>
          <NavLink
            to="/contact"
            className="btn-primary1"
            onClick={() => setOpen(false)}
          >
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
