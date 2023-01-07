import React from "react";

const NavBar = () => {
  return (
    <>
      <header className="nav-bar">
        <p className="text--header5">Name</p>
        <nav className="nav-bar__naviguation">
          <ul className="text--small-text">
            <li>
              <p>Home</p>
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
    </>
  );
};

export default NavBar;
