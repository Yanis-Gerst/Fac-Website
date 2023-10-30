import React, { Children, useEffect, useRef, useState } from "react";
import useIsomorphicLayoutEffect from "../../hook/useIsomorphicLayoutEffect";
import Pagination from "./Pagination/Pagination";
import styles from "./slider.module.scss";

interface Props {
  children: React.ReactNode;
  pagination?: boolean;
}

const FeaturesSection = ({ children, pagination = true }: Props) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const sliderElement = useRef<HTMLDivElement>(null);

  const positionSliderFullPage = () => {
    if (!sliderElement.current) return;
    sliderElement.current.style.marginLeft = "0";
    const leftDistance = sliderElement.current.getBoundingClientRect().left;
    sliderElement.current.style.marginLeft = `-${leftDistance}px`;
  };

  useIsomorphicLayoutEffect(() => {
    positionSliderFullPage();
  }, []);

  useEffect(() => {
    if (!sliderElement.current) return;

    sliderElement.current.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", positionSliderFullPage);
    return () => {
      sliderElement.current?.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", positionSliderFullPage);
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
      currentElement.scrollWidth / slideNumber - paddingValue * 2;

    setActiveIndex(Math.floor(currentScroll / oneElementWitdh));
  };

  return (
    <div className={styles["slider-wrapper"]}>
      <div className={styles["slider"]} ref={sliderElement} role="Slider">
        {children}
      </div>
      {pagination && (
        <Pagination
          activeIndex={activeIndex}
          slideNumber={slideNumber}
          sliderElement={sliderElement}
        />
      )}
    </div>
  );
};

export default FeaturesSection;
