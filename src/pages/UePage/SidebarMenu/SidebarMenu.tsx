import React from "react";
import { Modal } from "../../../componenents/Modale/Modale";
import crossIcon from "../../../../assets/cross.svg";

interface Props {
  children: React.ReactNode;
  toClose: () => void;
  appearOnScrean: boolean;
}

const SidebarMenu = ({ children, toClose, appearOnScrean }: Props) => {
  return (
    <Modal toClose={toClose} appearOnScrean={appearOnScrean}>
      <div
        className={`sidebar-wrapper ${appearOnScrean ? "slideIn" : "slideOut"}`}
      >
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
