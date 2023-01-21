import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar-wrapper">
      <header className="nav-bar">
        <Link to="/" className="text--header5">
          Name
        </Link>
        <nav className="nav-bar__naviguation">
          <ul className="text--small-text">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <p>Hub</p>
            </li>
            <li>
              <p>About</p>
            </li>
          </ul>
        </nav>
      </header>

      <div className="divider-wrapper">
        <div className="divider-wrapper__line" />
      </div>
    </div>
  );
};

export default NavBar;
