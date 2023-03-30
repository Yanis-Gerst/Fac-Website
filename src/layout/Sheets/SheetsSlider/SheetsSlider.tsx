import React from "react";
import { IPublicationUnit } from "../../../@types/global";
import SheetsCard from "../SheetsCard";
import EmptySheets from "../EmptySheets";
import SheetsSliderHeader from "./SheetsSliderHeader";
interface Props {
  type: "exercices" | "revision";
  sheetsData: IPublicationUnit[];
}

const SheetsSlider = ({ sheetsData, type }: Props) => {
  const haveSheets = sheetsData.length > 0;
  return (
    <>
      <SheetsSliderHeader haveSheets={haveSheets} />
      {haveSheets ? (
        <div className="sheets-slider">
          {sheetsData.map((sheet) => (
            <SheetsCard
              key={sheet._id as string}
              type={type}
              sheetData={sheet}
            />
          ))}
        </div>
      ) : (
        <EmptySheets />
      )}
    </>
  );
};

export default SheetsSlider;
