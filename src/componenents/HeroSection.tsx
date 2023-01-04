import React, { useLayoutEffect, useRef } from "react";
import Button from "./Button";
import heroIllustration from "./../../assets/heroIllustration.svg";

const HeroSection = () => {
  const heroSection = useRef<HTMLDivElement>(null);
  const heroHeader = useRef<HTMLHeadingElement>(null);

  useLayoutEffect(() => {
    if (!heroSection.current || !heroHeader.current) return;
    heroSection.current.style.width = `${heroHeader.current.offsetWidth}`;
  }, []);

  return (
    <>
      <h1 className="hero-header mx-12 mt-14 mb-8 " ref={heroHeader}>
        Lorem ipsum dolor sit amet,{" "}
        <span className="text-primary">consectetur</span> adipiscing elit.
      </h1>

      <div
        className="flex flex-col mx-auto gap-8 font-extrabold"
        ref={heroSection}
      >
        <p className="base-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos.
        </p>
        <Button type="primary" specificStyle="w-full">
          <p className="header6 w-fit">Commencer</p>
        </Button>

        <Button type="tertiary-invert" specificStyle="w-full">
          <p className="header6 w-fit">👇 Découvrir Name</p>
        </Button>

        <img src={heroIllustration} />
      </div>
    </>
  );
};

export default HeroSection;
