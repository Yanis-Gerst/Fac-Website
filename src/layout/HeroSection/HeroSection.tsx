import React, { useEffect, useLayoutEffect, useRef } from "react";
import Button from "../../componenents/Button/Button";
import heroIllustration from "../../../public/assets/heroIllustration.svg";
import Image from "next/image";

const HeroSection = () => {
  const heroSection = useRef<HTMLDivElement>(null);
  const heroHeader = useRef<HTMLHeadingElement>(null);

  const resizeHeroSectionBaseOnHeroHeader = () => {
    if (!heroSection.current || !heroHeader.current) return;
    console.log(heroHeader.current.style.width);
    heroSection.current.style.width = `${heroHeader.current.offsetWidth}px`;
  };

  const scrollToSection = (element: HTMLElement) => {
    window.scrollTo({
      top: element.offsetTop,
      behavior: "smooth",
    });
  };

  const scrollToFeatureSection = () =>
    scrollToSection(
      document.querySelector(".feature-section-wrapper") as HTMLDivElement
    );

  useLayoutEffect(() => {
    resizeHeroSectionBaseOnHeroHeader();
  }, []);

  useEffect(() => {
    window.addEventListener("resize", resizeHeroSectionBaseOnHeroHeader);
    return () => {
      window.removeEventListener("resize", resizeHeroSectionBaseOnHeroHeader);
    };
  });

  return (
    <div className="hero-wrapper">
      <div className="hero-text">
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
          <Button
            type="primary"
            specificStyle="text--header6 hero-section__start-button"
            onClick={() =>
              scrollToSection(
                document.querySelector(".questionnary-section") as HTMLElement
              )
            }
          >
            Commencer
          </Button>

          <Button
            type="tertiary-invert"
            specificStyle="text--header6 hero_section__discover-button hidden-on-desktop"
            onClick={scrollToFeatureSection}
          >
            👇 Découvrir Name
          </Button>
        </div>
      </div>
      <Image
        src={heroIllustration}
        className="hero-section__illustration"
        alt="Une leçon de cours fait sur papier convertir en leçon numérique"
      />
      <div className="hero-wrapper__discover hidden-on-mobile">
        <p className="text--semi-header6">Découvrir Name</p>
        <Button
          type="tertiary-invert"
          specificStyle="hero-wrapper__discover-button"
          onClick={scrollToFeatureSection}
        >
          👇
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
