import React, { Children, useEffect, useRef, useState } from "react";
import Pagination from "./Pagination/Pagination";
import "./_slider.scss";

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
    <div className="slider-wrapper">
      <h1 className="text--header2 slider-header">Name c'est Quoi ?</h1>

      <div className="slider" ref={sliderElement}>
        {children}
      </div>
      <Pagination activeIndex={activeIndex} slideNumber={slideNumber} />
    </div>
  );
};

export default FeaturesSection;
