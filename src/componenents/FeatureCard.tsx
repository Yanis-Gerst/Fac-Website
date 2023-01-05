import React from "react";

interface Props {
  title: string;
  children: React.ReactNode;
  imgUrl: string;
}
const FeatureCard = ({ title, imgUrl, children }: Props) => {
  console.log(imgUrl);
  return (
    <div className="feature-slider__card">
      <h2 className="text--semi-header4">{title}</h2>
      <p className="text--base-text text--color-sub">{children}</p>
      <img src={imgUrl} alt="xD" />
    </div>
  );
};

export default FeatureCard;
