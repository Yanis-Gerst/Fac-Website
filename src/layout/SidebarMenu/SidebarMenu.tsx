import React, { useEffect, useRef, useState } from "react";
import { Modal } from "../../componenents/Modale/Modale";
import Portal from "../../componenents/Portal/Portal";
import ConditionnalWrapper from "../../componenents/ConditionnalWrapper";
import menuIcon from "../../../public/assets/menu.svg";
import crossIcon from "../../../public/assets/cross.svg";
import Image from "next/image";

interface Props {
  children: React.ReactNode;
  breakpoint: number;
}

const SidebarMenu = ({ children, breakpoint }: Props) => {
  const [showSidebar, setShowSidbear] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);
  const sidebarRef = useRef<HTMLElement>(null);

  const closeSidebar = () => {
    console.log(showSidebar);
    setTimeout(() => {
      if (!sidebarRef.current) return;

      const changeSidebarState = () => {
        setShowSidbear(false);
        sidebarRef.current?.removeEventListener(
          "transitionend",
          changeSidebarState
        );
      };
      sidebarRef.current.addEventListener("transitionend", changeSidebarState);
      sidebarRef.current.classList.remove("sidebar-wrapper--visible");
    }, 50);
  };

  useEffect(() => {
    const setWindowWidthOnRezize = () => {
      setWindowWidth(window.innerWidth);
    };
    setWindowWidth(window.innerWidth);
    window.addEventListener("resize", setWindowWidthOnRezize);
    return () => {
      window.removeEventListener("resize", setWindowWidthOnRezize);
    };
  }, []);

  return (
    <>
      {windowWidth < breakpoint && (
        <Portal>
          <button
            className="sidebar-button"
            onClick={() => setShowSidbear(!showSidebar)}
          >
            <Image src={menuIcon} alt="menu icon" />
          </button>
        </Portal>
      )}

      <ConditionnalWrapper
        condition={windowWidth < breakpoint}
        wrapper={(children) => (
          <Modal toClose={closeSidebar} appearOnScrean={showSidebar}>
            {children}
          </Modal>
        )}
      >
        <aside
          className={`sidebar-wrapper ${
            showSidebar && "sidebar-wrapper--visible"
          }`}
          ref={sidebarRef}
        >
          {windowWidth < breakpoint && (
            <div className="sidebar-cross" onClick={closeSidebar}>
              <Image src={crossIcon} alt="a cross" />
            </div>
          )}

          <nav className="sidebar-list-wrapper">
            <ul className="sidebar-list text--header5" onClick={closeSidebar}>
              {children}
            </ul>
          </nav>
        </aside>
      </ConditionnalWrapper>
    </>
  );
};

export default SidebarMenu;
