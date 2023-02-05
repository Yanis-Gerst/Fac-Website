import React, { ReactElement } from "react";
import { ReactComponent as ToogleArrow } from "../../../../public/assets/toogleArrow.svg";
import styles from "./toogleListItem.module.scss";

interface Props {
  title: ReactElement;
  children: React.ReactNode;
  index: number;
  activeItemIndex?: number;
  setterActiveItemIndex?: React.Dispatch<number>;
}
const ToogleListItem = ({
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
      <div
        key={title.toString()}
        className={styles["toogle-chaper-list__toogle-item"]}
      >
        <>
          <div className={styles["toogle-item__header"]}>
            <ToogleArrow
              onClick={() => setterActiveItemIndex(index)}
              className={
                index == activeItemIndex
                  ? styles["toogle-item__svg--active"]
                  : ""
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

export default ToogleListItem;
