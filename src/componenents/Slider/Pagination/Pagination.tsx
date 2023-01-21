import React from "react";

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
    <div className="pagination">
      {[...Array(slideNumber)].map((elt, index) => {
        return (
          <div
            key={index}
            className={`pagination__circle ${
              activeIndex == index && "pagination__circle--active"
            }`}
            onClick={() => scrollToIndexImg(index)}
          />
        );
      })}
    </div>
  );
};

export default Pagination;
