import React, { Children } from "react";
import Link from "next/link";

interface Props {
  children?: React.ReactNode;
}
const NavBar = ({ children }: Props) => {
  const childrenArray = Children.toArray(children);

  return (
    <div className="navbar-wrapper">
      <header className="nav-bar">
        <Link href="/" className="text--header5">
          Name
        </Link>
        <nav className="nav-bar__naviguation">
          <ul className="text--small-text">
            <li>
              <p>Hub</p>
            </li>
            <li>
              <p>About</p>
            </li>
            {childrenArray.map((child) => (
              <li key={child.toString()}>{child}</li>
            ))}
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
