import React, { useEffect, useState } from "react";
import { ITeachingUnit } from "../../../@types/global";
import NavBar from "../../../layout/NavBar";
import Sheets from "../../../layout/Sheets";
import { desktopBreakpoint } from "../..";
import SidebarMenu from "../../../layout/SidebarMenu";
import SidebarItems from "../../../layout/SidebarMenu/SidebarItems";
import ToogleChapterList from "../../../componenents/ToogleList";
import ToogleChapterItems from "../../../componenents/ToogleList/ToogleListItem";

interface Props {
  ueData: ITeachingUnit;
}

const UePage = ({ ueData }: Props) => {
  const [activeChapterIndex, setActiveChapterIndex] = useState<number>(0);
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  const chapterToRender = ueData.chapters[activeChapterIndex];
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
            <h1 className="ue-title text--header4">{ueData.title}</h1>
            <ToogleChapterList>
              {ueData.chapters.map((chapter, index) => (
                <ToogleChapterItems
                  key={chapter.title}
                  title={
                    <h2 className="text--semi-header4">
                      Chaptire {index}: {chapter.title}
                    </h2>
                  }
                  index={index}
                >
                  <Sheets
                    revisionSheetsData={chapter.revionSheets}
                    exercicesSheetsData={chapter.exercicesSheets}
                  />
                </ToogleChapterItems>
              ))}
            </ToogleChapterList>
          </>
        ) : (
          <>
            <SidebarMenu>
              <SidebarItems
                chapters={ueData.chapters}
                activeItemIndex={activeChapterIndex}
                setActiveItemIndex={setActiveChapterIndex}
              />
            </SidebarMenu>
            <div className="ue-page-current-chapter">
              <h1 className="ue-page-header text--header3">{ueData.title}</h1>
              <Sheets
                revisionSheetsData={chapterToRender.revionSheets}
                exercicesSheetsData={chapterToRender.exercicesSheets}
              />
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default UePage;
