import React from "react";
import { IFeature } from "../../@types/global";
interface Props {
  feature: IFeature;
}

const FeatureCard = ({ feature }: Props) => {
  return (
    <div className="feature-slider__card">
      <h2 className="text--semi-header4">{feature.title}</h2>
      <p className="text--base-text text--color-sub">{feature.text}</p>
      <img src={feature.illustration} className="feature-slider__img" alt="" />
    </div>
  );
};

export default FeatureCard;
