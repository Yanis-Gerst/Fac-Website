import React, { ReactElement, useState } from "react";
import styles from "./toogleList.module.scss";

interface childProps {
  title: React.ReactNode;
  index: number;
  activeItemIndex: number;
  setterActiveItemIndex: React.Dispatch<number>;
}

interface Props {
  children: ReactElement<childProps>[];
}

const ToogleList = ({ children }: Props) => {
  const [activeChapterIndex, setActiveChapterIndex] = useState(-1);

  const handleClickOnToogleChapter = (clickedIndex: number) => {
    setActiveChapterIndex((currentState) =>
      clickedIndex === currentState ? -1 : clickedIndex
    );
  };

  return (
    <div className={styles["toogle-chapter-list"]}>
      {React.Children.map(children, (toogleListItem) =>
        React.cloneElement(toogleListItem, {
          activeItemIndex: activeChapterIndex,
          setterActiveItemIndex: handleClickOnToogleChapter,
        })
      )}
    </div>
  );
};

export default ToogleList;
