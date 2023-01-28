import React, { useEffect, useState } from "react";
import { ITeachingUnit } from "../../@types/global";
import NavBar from "../../layout/NavBar";
import Sheets from "../../layout/Sheets";
import { desktopBreakpoint } from "../LandingPage";
import SidebarMenu from "./SidebarMenu";
import ToogleChapterList from "./ToogleChapterList";

interface Props {
  data: ITeachingUnit;
}

const UePage = ({ data }: Props) => {
  const [activeChapterIndex, setActiveChapterIndex] = useState<number>(0);
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  const chapterToRender = data.chapters[activeChapterIndex];
  useEffect(() => {
    const setWindowWidthOnRezize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", setWindowWidthOnRezize);
    return () => {
      window.removeEventListener("resize", setWindowWidthOnRezize);
    };
  });

  return (
    <>
      <NavBar />
      <div className="ue-page-wrapper">
        {windowWidth < desktopBreakpoint ? (
          <>
            <h1 className="ue-title text--header4">{data.title}</h1>
            <ToogleChapterList chapters={data.chapters} />
          </>
        ) : (
          <>
            <SidebarMenu>
              {data.chapters.map((chapter, index) => (
                <li
                  className={`sidebar-list__chapter-item ${
                    index == activeChapterIndex &&
                    "sidebar-list__chapter-item--active"
                  }`}
                  key={chapter.title}
                  onClick={() => setActiveChapterIndex(index)}
                >
                  <h4>
                    Chaptire {index}: {chapter.title}
                  </h4>
                </li>
              ))}
            </SidebarMenu>
            <div className="ue-page-current-chapter">
              <h1 className="ue-page-header text--header3">{data.title}</h1>
              <Sheets
                revisionSheetsData={chapterToRender.revionSheets}
                exercicesSheetsData={chapterToRender.exercicesSheets}
              />
            </div>
          </>
        )}

        {/* <h1 className="ue-title text--header4">{data.title}</h1> */}
        {/* <ToogleChapterList chapters={data.chapters} /> */}
      </div>
    </>
  );
};

export default UePage;
