import React, { Children, useEffect, useRef, useState } from "react";
import Pagination from "./Pagination/Pagination";

interface Props {
  children: React.ReactNode;
}
const FeaturesSection = ({ children }: Props) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const sliderElement = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sliderElement.current) return;

    sliderElement.current.addEventListener("scroll", handleScroll);
    return () => {
      sliderElement.current?.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const arrayChildren = Children.toArray(children);
  const slideNumber = arrayChildren.length;
  const handleScroll = (event: Event) => {
    const currentElement = event.target as HTMLDivElement;
    const currentScroll = currentElement.scrollLeft;
    const paddingValue =
      parseInt(
        getComputedStyle(document.documentElement).getPropertyPriority(
          "--base-padding"
        )
      ) | 48;
    const oneElementWitdh =
      currentElement.scrollWidth / slideNumber - paddingValue * slideNumber;
    setActiveIndex(Math.floor(currentScroll / oneElementWitdh));
  };

  return (
    <>
      <h1 className="text--header2 feature-section-header mt-section">
        Name c'est Quoi ?
      </h1>

      <div className="feature-slider" ref={sliderElement}>
        {children}
      </div>
      <Pagination activeIndex={activeIndex} slideNumber={slideNumber} />
    </>
  );
};

export default FeaturesSection;
