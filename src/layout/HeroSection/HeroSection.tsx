import React, { useLayoutEffect, useRef } from "react";
import Button from "../../componenents/Button/Button";
import heroIllustration from "./../../../assets/heroIllustration.svg";

const HeroSection = () => {
  const heroSection = useRef<HTMLDivElement>(null);
  const heroHeader = useRef<HTMLHeadingElement>(null);

  useLayoutEffect(() => {
    if (!heroSection.current || !heroHeader.current) return;
    heroSection.current.style.width = `${heroHeader.current.offsetWidth}`;
  }, []);

  return (
    <>
      <h1 className="hero-header" ref={heroHeader}>
        Lorem ipsum dolor sit amet,{" "}
        <span className="text--color-primary">consectetur</span> adipiscing
        elit.
      </h1>

      <div className="hero-section" ref={heroSection}>
        <p className="text--base-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos.
        </p>
        <Button type="primary">
          <p className="text--header6">Commencer</p>
        </Button>

        <Button type="tertiary-invert">
          <p className="text--header6">👇 Découvrir Name</p>
        </Button>

        <img src={heroIllustration} />
      </div>
    </>
  );
};

export default HeroSection;
