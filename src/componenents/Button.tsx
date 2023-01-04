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
    <button
      className={`${getButtonStyle(type)} ${specificStyle}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

function getButtonStyle(type: allButtonTypes) {
  const commonStyle = "rounded px-2 py-4 grid place-items-center ";
  if (isInvert(type)) {
    const currentType: buttonTypes = type.split("-")[0] as buttonTypes;
    return commonStyle + getInvertStyle(currentType);
  }
  return commonStyle + getClassicStyle(type as buttonTypes);
}

function isInvert(type: allButtonTypes) {
  return type.includes("invert");
}

function getInvertStyle(type: buttonTypes) {
  return "text-color-" + type + " border border-" + type;
}

function getClassicStyle(type: buttonTypes) {
  return ` bg-${type} text-white`;
}

export default Button;
