import React from "react";

type buttonTypes = "primary" | "secondary" | "tertiary";
type buttonTypesInvert =
  | "primary-invert"
  | "secondary-invert"
  | "tertiary-invert";
type allButtonTypes = buttonTypes | buttonTypesInvert;

interface Props {
  type: allButtonTypes;
  specificStyle?: string;
  onClick?: () => void;
  children: React.ReactNode;
}

const Button = ({ type, specificStyle, onClick, children }: Props) => {
  return (
    <button className={`btn btn--${type} ${specificStyle}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
