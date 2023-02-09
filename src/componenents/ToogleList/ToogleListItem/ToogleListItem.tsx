import React, { ReactElement } from "react";
import ToogleArrow from "../../../../public/assets/toogleArrow.svg";
import Image from "next/image";
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
            <Image
              src={ToogleArrow}
              onClick={() => setterActiveItemIndex(index)}
              className={
                index == activeItemIndex
                  ? styles["toogle-item__svg--active"]
                  : ""
              }
              alt="Une flèche qui pointe vers la droite"
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
