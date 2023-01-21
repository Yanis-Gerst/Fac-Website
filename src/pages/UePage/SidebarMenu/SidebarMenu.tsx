import React from "react";
import { Modal } from "../../../componenents/Modale/Modale";
import crossIcon from "../../../../assets/cross.svg";

interface Props {
  children: React.ReactNode;
  toClose: () => void;
  state: boolean;
}

const SidebarMenu = ({ children, toClose, state }: Props) => {
  return (
    <Modal toClose={toClose} state={state}>
      <div className={`sidebar-wrapper ${state ? "slideIn" : "slideOut"}`}>
        <img
          src={crossIcon}
          className="sidebar-cross"
          alt="cross icon"
          onClick={toClose}
        />
        <nav className="sidebar-list-wrapper">
          <ul className="sidebar-list text--extra-header5">{children}</ul>
        </nav>
      </div>
    </Modal>
  );
};

export default SidebarMenu;
