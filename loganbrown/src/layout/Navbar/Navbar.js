import React from "react";

import "./Navbar.css";
import strings from "../../constants/strings";

function Navbar() {
  return (
    <nav className="navbar">
      <span className="name">{strings.title.name}</span>
    </nav>
  );
}

export default Navbar;
