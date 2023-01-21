import React from "react";
import { IFeature } from "../../@types/global";
interface Props {
  feature: IFeature;
}

const FeatureCard = ({ feature }: Props) => {
  return (
    <div className="feature-slider__card">
      <h2 className="text--semi-header5">{feature.title}</h2>
      <p className="text--base-text text--color-sub">{feature.text}</p>
      <img
        src={feature.illustration}
        className="feature-slider__img"
        alt={feature.alt}
      />
    </div>
  );
};

export default FeatureCard;
