import React, { ReactElement, useState } from "react";
import "./_toogleChapterList.scss";
interface childProps {
  title: React.ReactNode;
  index: number;
  activeItemIndex: number;
  setterActiveItemIndex: React.Dispatch<number>;
}

interface Props {
  children: ReactElement<childProps>[];
}

const ToogleChapterList = ({ children }: Props) => {
  const [activeChapterIndex, setActiveChapterIndex] = useState(-1);

  const handleClickOnToogleChapter = (clickedIndex: number) => {
    setActiveChapterIndex((currentState) =>
      clickedIndex === currentState ? -1 : clickedIndex
    );
  };
  return (
    <div className="toogle-chapter-list">
      {React.Children.map(children, (child) =>
        React.cloneElement(child, {
          activeItemIndex: activeChapterIndex,
          setterActiveItemIndex: handleClickOnToogleChapter,
        })
      )}
    </div>
  );
};

export default ToogleChapterList;
