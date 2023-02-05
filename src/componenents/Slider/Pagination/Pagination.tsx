import React from "react";
import styles from "./pagination.module.scss";

interface Props {
  activeIndex: number;
  slideNumber: number;
  sliderElement: React.RefObject<HTMLDivElement>;
}

const Pagination = ({ activeIndex, slideNumber, sliderElement }: Props) => {
  const scrollToIndexImg = (index: number) => {
    if (!sliderElement.current) return;
    sliderElement.current.scrollLeft =
      sliderElement.current.offsetWidth * index;
  };
  return (
    <div className={styles["pagination"]}>
      {[...Array(slideNumber)].map((elt, index) => {
        return (
          <div
            key={index}
            className={`${styles["pagination__circle"]} ${
              activeIndex == index && styles["pagination__circle--active"]
            }`}
            onClick={() => scrollToIndexImg(index)}
          />
        );
      })}
    </div>
  );
};

export default Pagination;
