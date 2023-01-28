import React, { useState } from "react";
import { ReactComponent as ToogleArrow } from "../../../../assets/toogleArrow.svg";
import { IChapterUnit } from "../../../@types/global";
import Sheets from "../../../layout/Sheets";

interface Props {
  chapters: IChapterUnit[];
}

const ToogleChapterList = ({ chapters }: Props) => {
  const [activeChapterIndex, setActiveChapterIndex] = useState(-1);

  const handleClickOnToogleChapter = (
    e: React.MouseEvent<HTMLElement | SVGSVGElement>
  ) => {
    setActiveChapterIndex((currentState) => {
      const target = e.target as HTMLDivElement | SVGSVGElement;
      const selectedIndex = parseInt(
        target.getAttribute("data-index") as string
      );
      if (selectedIndex === currentState) return -1;
      return selectedIndex;
    });
  };
  return (
    <div className="toogle-chapter-list">
      {chapters.map((chapter, index) => (
        <div key={chapter.title} className="toogle-chaper-list__toogle-item">
          <div className="toogle-item__header">
            <ToogleArrow
              data-index={index}
              onClick={handleClickOnToogleChapter}
              className={
                index == activeChapterIndex ? "toogle-item__svg--active" : ""
              }
            />
            <h2
              className="text--semi-header4"
              data-index={index}
              onClick={handleClickOnToogleChapter}
            >
              Chaptire {index}: {chapter.title}
            </h2>
          </div>

          {index == activeChapterIndex && (
            <Sheets
              revisionSheetsData={chapter.revionSheets}
              exercicesSheetsData={chapter.exercicesSheets}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default ToogleChapterList;
