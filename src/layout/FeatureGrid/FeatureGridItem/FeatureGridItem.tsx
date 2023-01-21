import React from "react";
import { IFeature } from "../../../@types/global";

interface Props {
  feature: IFeature;
}
const FeatureGridItem = ({ feature }: Props) => {
  return (
    <div className="feature-grid__item" key={feature.title}>
      <img src={feature.illustration} />
      <h2 className="text--semi-header5">{feature.title}</h2>
      <p className="text--base-text">{feature.text}</p>
    </div>
  );
};

export default FeatureGridItem;
