import React from "react";
import { IChapterUnit } from "../../../@types/global";

interface Props {
  chapters: IChapterUnit[];
  activeItemIndex: number;
  setActiveItemIndex: React.Dispatch<number>;
}

const SidebarItems = ({
  chapters,
  activeItemIndex,
  setActiveItemIndex,
}: Props) => {
  return (
    <>
      {chapters.map((chapter, index) => (
        <div
          className={`sidebar-list__chapter-item ${
            index == activeItemIndex && "sidebar-list__chapter-item--active"
          }`}
          key={chapter.title}
          onClick={() => setActiveItemIndex(index)}
        >
          Chaptire {index}: {chapter.title}
        </div>
      ))}
    </>
  );
};

export default SidebarItems;
