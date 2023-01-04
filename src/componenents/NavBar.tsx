import React from "react";

const NavBar = () => {
  const talwindPaddingValue = 12;
  return (
    <>
      <header
        className={
          "w-full px-" +
          talwindPaddingValue +
          " flex flex-row justify-between pr-28 items-center py-5 relative"
        }
      >
        <p className="header5">Name</p>
        <nav className="w-1/3">
          <ul className="flex flex-row justify-between small-text text-color-sub">
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
      <div className={"w-full px-" + talwindPaddingValue}>
        <div className="w-full h-px bg-gray-200" />
      </div>
    </>
  );
};

export default NavBar;
