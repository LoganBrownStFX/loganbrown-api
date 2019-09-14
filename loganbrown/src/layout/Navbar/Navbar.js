import React from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";
import strings from "../../constants/strings";

function Navbar() {
  return (
    <nav className="space-between navbar flex-container-row">
      <Link to="/">
        <div className="home-nav-container flex-container-column flex-center">
          <span className="link fas fa-home icon"></span>
        </div>
      </Link>
      <section
        id="link-container"
        className="nav-links flex-container-row flex-center"
      >
        <Link to="/github">
          <span className="link fab github fa-github icon"></span>
        </Link>
        <Link to="/education">
          <span className="link fa education fa-graduation-cap icon"></span>
        </Link>
        <Link to="/experience">
          <span className="link fa experience fa-briefcase icon"></span>
        </Link>
        <Link to="/contact">
          <span className="link fa contact-me fa-envelope icon"></span>
        </Link>
      </section>
    </nav>
  );
}

export default Navbar;
