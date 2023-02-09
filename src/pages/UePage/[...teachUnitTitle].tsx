import React, { useEffect, useState } from "react";
import { ITeachingUnit } from "../../@types/global";
import NavBar from "../../layout/NavBar";
import Sheets from "../../layout/Sheets";
import { desktopBreakpoint } from "..";
import SidebarMenu from "../../layout/SidebarMenu";
import SidebarItems from "../../layout/SidebarMenu/SidebarItems";
import { GetStaticPaths, GetStaticProps } from "next/types";
import {
  getAllTeachingUnitsUrls,
  retrieveTeachingUnitDataFromUrl,
} from "../../lib/teachUnit/teachUnitData";
import ToogleList from "../../componenents/ToogleList";
import ToogleListItem from "../../componenents/ToogleList/ToogleListItem";

interface Props {
  ueData: ITeachingUnit;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const allTeachingUnitsUrls = getAllTeachingUnitsUrls();

  const paths = allTeachingUnitsUrls.map((teachUnitUrl) => ({
    params: {
      teachUnitTitle: teachUnitUrl?.split("/"),
    },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const ueParams = params?.teachUnitTitle as string[];
  const teachUnitData = retrieveTeachingUnitDataFromUrl(ueParams.join("/"));
  return { props: { ueData: teachUnitData } };
};

const UePage = ({ ueData }: Props) => {
  const [activeChapterIndex, setActiveChapterIndex] = useState<number>(0);
  const [windowWidth, setWindowWidth] = useState<number>(0);

  const chapterToRender = ueData.chapters[activeChapterIndex];
  useEffect(() => {
    const setWindowWidthOnRezize = () => {
      setWindowWidth(window.innerWidth);
    };
    setWindowWidth(window.innerWidth);
    window.addEventListener("resize", setWindowWidthOnRezize);
    return () => {
      window.removeEventListener("resize", setWindowWidthOnRezize);
    };
  }, []);
  return (
    <>
      <NavBar />
      <div className="ue-page-wrapper">
        {windowWidth < desktopBreakpoint ? (
          <>
            <h1 className="ue-title text--header4">{ueData.title}</h1>
            <ToogleList>
              {ueData.chapters.map((chapter, index) => (
                <ToogleListItem
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
                </ToogleListItem>
              ))}
            </ToogleList>
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
