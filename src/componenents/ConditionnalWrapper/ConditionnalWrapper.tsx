import React from "react";
import { ReactElement } from "react";

interface Props {
  condition: boolean;
  wrapper: (children: React.ReactElement) => React.ReactElement;
  children: React.ReactElement;
}
const ConditionnalWrapper: React.FC<Props> = ({
  condition,
  wrapper,
  children,
}) => {
  return <>{condition ? wrapper(children) : children}</>;
};

export default ConditionnalWrapper;
