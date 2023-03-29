import React from "react";
import { IFeature } from "../../@types/global";
import Image from "next/image";
interface Props {
  feature: IFeature;
}

const FeatureCard = ({ feature }: Props) => {
  return (
    <article className="feature-slider__card">
      <h2 className="text--semi-header5">{feature.title}</h2>
      <p className="text--base-text text--color-sub">{feature.text}</p>
      <Image
        src={feature.illustration}
        className="feature-slider__img"
        alt={feature.alt}
      />
    </article>
  );
};

export default FeatureCard;
