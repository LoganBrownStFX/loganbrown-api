import React from "react";

import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar flex-container-row">
      <section
        id="link-container"
        className="nav-links flex-container-row flex-center"
      >
        <span className="link fab github fa-github"></span>
        <span className="link fa education fa-graduation-cap"></span>
        <span className="link fa experience fa-briefcase"></span>
        <span className="link fa contact-me fa-envelope"></span>
      </section>
    </nav>
  );
}

export default Navbar;
