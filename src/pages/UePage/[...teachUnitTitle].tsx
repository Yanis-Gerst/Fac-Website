import React, { useEffect, useState } from "react";
import { ITeachingUnit } from "../../@types/global";
import NavBar from "../../layout/NavBar";
import { desktopBreakpoint } from "..";
import SidebarMenu from "../../layout/SidebarMenu";
import SidebarItems from "../../layout/SidebarMenu/SidebarItems";
import { GetServerSideProps } from "next/types";
import {
  retrieveAllChapters,
  retrieveAmuDataFromUrl,
} from "../../lib/db/amuData";
import { WithId } from "mongodb";
import Sheets from "../../layout/Sheets/Sheets";

interface Props {
  ueData: ITeachingUnit;
}

const parseIdData = (document: WithId<object>[]) => {
  return document.map((doc) => ({
    ...doc,
    _id: doc._id.toString(),
  }));
};

export const getServerSideProps: GetServerSideProps = async ({
  resolvedUrl,
}) => {
  const currentUrl = resolvedUrl.replace("/UePage/", "");
  const teachUnitData = await retrieveAmuDataFromUrl(currentUrl);
  const chapterDataCursor = await retrieveAllChapters(teachUnitData.chapters);
  let chapterData = await chapterDataCursor.toArray();
  console.log(chapterData[0].revisionsSheets);
  chapterData = chapterData.map((chapData) => ({
    ...chapData,
    _id: chapData._id.toString(),
    revisionsSheets: parseIdData(chapData.revisionsSheets),
    exercicesSheets: parseIdData(chapData.exercicesSheets),
  }));

  const data = { title: teachUnitData.title, chapters: chapterData };
  return { props: { ueData: data } };
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
      <section className="ue-page-wrapper">
        <>
          <SidebarMenu breakpoint={desktopBreakpoint}>
            <SidebarItems
              chapters={ueData.chapters}
              activeItemIndex={activeChapterIndex}
              setActiveItemIndex={setActiveChapterIndex}
            />
          </SidebarMenu>
          <div className="ue-page-current-chapter">
            <h1
              className={`ue-page-header text--header${
                windowWidth > desktopBreakpoint ? "3" : "5"
              }`}
            >
              {ueData.title}
            </h1>
            <h2 className="ue-page-chapter-title text--header6">
              {windowWidth < desktopBreakpoint &&
                `Chapitre ${activeChapterIndex} : ${chapterToRender.title}`}
            </h2>
            <Sheets chapter={chapterToRender} />
          </div>
        </>
      </section>
    </>
  );
};

export default UePage;
