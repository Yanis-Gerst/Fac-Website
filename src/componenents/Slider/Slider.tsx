import React, {
  Children,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import Pagination from "./Pagination/Pagination";
import "./_slider.scss";

interface Props {
  children: React.ReactNode;
}
const FeaturesSection = ({ children }: Props) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const sliderElement = useRef<HTMLDivElement>(null);

  const positionSliderFullPage = () => {
    if (!sliderElement.current) return;
    sliderElement.current.style.marginLeft = "0";
    const leftDistance = sliderElement.current.getBoundingClientRect().left;
    sliderElement.current.style.marginLeft = `-${leftDistance}`;
  };

  useLayoutEffect(() => {
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
    <div className="slider-wrapper">
      <div className="slider" ref={sliderElement}>
        {children}
      </div>
      <Pagination
        activeIndex={activeIndex}
        slideNumber={slideNumber}
        sliderElement={sliderElement}
      />
    </div>
  );
};

export default FeaturesSection;
