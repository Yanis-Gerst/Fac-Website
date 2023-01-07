import React from "react";

interface Props {
  activeIndex: number;
  slideNumber: number;
}

const Pagination = ({ activeIndex, slideNumber }: Props) => {
  return (
    <div className="pagination">
      {[...Array(slideNumber)].map((elt, index) => {
        return (
          <div
            key={index}
            className={`pagination__circle ${
              activeIndex == index && "pagination__circle--active"
            }`}
          />
        );
      })}
    </div>
  );
};

export default Pagination;
