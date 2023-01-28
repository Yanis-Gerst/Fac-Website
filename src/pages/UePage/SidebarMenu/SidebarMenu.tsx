import React from "react";

interface Props {
  children: React.ReactNode;
}

const SidebarMenu = ({ children }: Props) => {
  return (
    <div className="sidebar-wrapper">
      <nav className="sidebar-list-wrapper">
        <ul className="sidebar-list text--header5">{children}</ul>
      </nav>
    </div>
  );
};

export default SidebarMenu;
