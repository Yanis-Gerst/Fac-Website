import React from "react";
import styles from "./button.module.scss";

type buttonTypes = "primary" | "secondary" | "tertiary";
type buttonTypesInvert =
  | "primary-invert"
  | "secondary-invert"
  | "tertiary-invert";
export type allButtonTypes = buttonTypes | buttonTypesInvert;

interface Props {
  type: allButtonTypes;
  specificStyle?: string;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  children: React.ReactNode;
}

const Button = ({ type, specificStyle, onClick, children }: Props) => {
  return (
    <button
      className={`${styles.btn} ${styles[`btn--${type}`]} ${
        specificStyle ? specificStyle : ""
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
