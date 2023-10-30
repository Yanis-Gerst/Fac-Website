import React from "react";
import SheetsSlider from "./SheetsSlider";
import SheetsTypeProvider from "./SheetsTypeContext/SheetsTypeContext";
import ChapterIdProvider from "./ChapterTypeProvider/ChapterIdProvider";
import { IChapterUnit } from "../../@types/global";

interface Props {
  chapter: IChapterUnit;
}

const Sheets = ({ chapter }: Props) => {
  console.log(chapter);
  return (
    <>
      <div className="sheets-wrapper">
        <ChapterIdProvider id={chapter._id as string}>
          <SheetsTypeProvider type="revision">
            <SheetsSlider sheetsData={chapter.revisionsSheets} />
          </SheetsTypeProvider>
          <SheetsTypeProvider type="exercices">
            <SheetsSlider sheetsData={chapter.exercicesSheets} />
          </SheetsTypeProvider>
        </ChapterIdProvider>
      </div>
    </>
  );
};

export default Sheets;
