import React from "react";

interface Props {
  children: React.ReactNode;
}
const FeatureGrid = ({ children }: Props) => {
  return <div className="feature-grid">{children}</div>;
};

export default FeatureGrid;
