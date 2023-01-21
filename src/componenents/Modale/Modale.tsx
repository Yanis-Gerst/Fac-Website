import React from "react";
import { createPortal } from "react-dom";
import { cloneElement } from "react";
import { useEffect } from "react";
import "./_modale.scss";

export interface Props {
  children: React.ReactElement;
  toClose: () => void;
  state?: boolean;
}

export const Modal = ({ children, toClose, state }: Props) => {
  const newChildren = cloneElement(children, { toClose });

  const handleShortcut = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      toClose();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleShortcut);

    return () => {
      window.removeEventListener("keydown", handleShortcut);
    };
  }, []);

  return createPortal(
    <div
      className={`modale-container ${
        state ? "modale-opacity-visible" : "modale-opacity-0"
      }`}
    >
      {newChildren}
    </div>,
    document.body
  );
};
