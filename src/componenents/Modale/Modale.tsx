import React from "react";
import { cloneElement } from "react";
import { useEffect } from "react";
import styles from "./_modale.module.scss";
import Portal from "../Portal/Portal";

export interface Props {
  children: React.ReactElement;
  toClose: () => void;
  appearOnScrean?: boolean;
}

export const Modal = ({ children, toClose, appearOnScrean = true }: Props) => {
  const newChildren = cloneElement(children, { toClose });

  const handleShortcut = (e: KeyboardEvent) => {
    if (!appearOnScrean) return;
    if (e.key === "Escape") {
      toClose();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleShortcut, { once: true });

    return () => {
      window.removeEventListener("keydown", handleShortcut);
    };
  });

  return (
    <Portal>
      <div
        className={`${styles["modale-container"]} ${
          appearOnScrean
            ? styles["modale-opacity-visible"]
            : styles["modale-opacity-0"]
        }`}
      >
        <div className={`${styles["modale-background"]}`}></div>
        {newChildren}
      </div>
    </Portal>
  );
};
