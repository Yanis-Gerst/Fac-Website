import React, { useState } from "react";
import { ITeachingUnit } from "../../@types/global";
import Button from "../../componenents/Button";
import NavBar from "../../layout/NavBar";
import SidebarMenu from "./SidebarMenu";

interface Props {
  data: ITeachingUnit;
}
const UePage = ({ data }: Props) => {
  const [currentChapterIndex, setCurrentChapterIndex] = useState<number>(0);
  const [showSidebar, setShowSidebar] = useState<boolean>(false);

  const chapterToRender = data.chapters[currentChapterIndex];
  const handleClickOnChapterNav = (e: React.MouseEvent<HTMLLIElement>) => {
    const dataIndex = parseInt(
      e.currentTarget.getAttribute("data-index") as string
    );
    setCurrentChapterIndex(dataIndex);
    setShowSidebar(false);
  };
  return (
    <>
      <NavBar />
      <Button type="primary" onClick={() => setShowSidebar(true)}>
        Chaptire Menu
      </Button>
      <h1 className="ue-title">{data.title}</h1>

      <h2 className="ue-chapter-header text--extra-header5">
        Chapitre {currentChapterIndex}: {chapterToRender.title}
      </h2>

      <SidebarMenu toClose={() => setShowSidebar(false)} state={showSidebar}>
        {data.chapters.map((chapter, index) => (
          <li
            key={chapter.title}
            onClick={handleClickOnChapterNav}
            data-index={index}
            className={`sidebar-chapter-item ${
              index == currentChapterIndex ? "sidebar-chapter-item--active" : ""
            }`}
          >
            Chaptire {index}: {chapter.title}
          </li>
        ))}
      </SidebarMenu>
    </>
  );
};

export default UePage;
