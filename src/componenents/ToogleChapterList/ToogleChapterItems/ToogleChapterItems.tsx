import React, { ReactElement } from "react";
import { ReactComponent as ToogleArrow } from "../../../../assets/toogleArrow.svg";

interface Props {
  title: ReactElement;
  index: number;
  children: React.ReactNode;
  activeItemIndex?: number;
  setterActiveItemIndex?: React.Dispatch<number>;
}
const ToogleChapterItems = ({
  title,
  index,
  children,
  activeItemIndex,
  setterActiveItemIndex,
}: Props) => {
  if (setterActiveItemIndex === undefined || activeItemIndex === undefined)
    throw new Error("Use ToogleChaptersList Provider");

  return (
    <>
      <div key={title.toString()} className="toogle-chaper-list__toogle-item">
        <>
          <div className="toogle-item__header">
            <ToogleArrow
              onClick={() => setterActiveItemIndex(index)}
              className={
                index == activeItemIndex ? "toogle-item__svg--active" : ""
              }
            />
            {React.cloneElement(title, {
              onClick: () => setterActiveItemIndex(index),
            })}
          </div>
          {index === activeItemIndex && children}
        </>
      </div>
    </>
  );
};

export default ToogleChapterItems;
