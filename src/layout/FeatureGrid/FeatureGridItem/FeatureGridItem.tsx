import React from "react";
import { IFeature } from "../../../@types/global";
import Image from "next/image";
import { useElementOnScreen } from "../../../hook/useElementOnScreen";
interface Props {
  feature: IFeature;
  index: number;
}
const FeatureGridItem = ({ feature, index }: Props) => {
  const [elementRef, isVisible] = useElementOnScreen(
    {
      root: null,
      rootMargin: "0px",
      threshold: 0.3,
    },
    { oneTime: true }
  );

  return (
    <article
      className={`feature-grid__item ${
        isVisible
          ? `feature-grid__item--visible feature-grid__item--visible-${
              index % 2 === 0 ? "left" : "right"
            }`
          : ""
      }`}
      key={feature.title}
      ref={elementRef}
    >
      <Image src={feature.illustration} alt={feature.alt} />
      <h2 className="text--semi-header5">{feature.title}</h2>
      <p className="text--base-text">{feature.text}</p>
    </article>
  );
};

export default FeatureGridItem;
