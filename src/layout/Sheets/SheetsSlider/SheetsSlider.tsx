import React from "react";
import { IPublicationUnit } from "../../../@types/global";
import SheetsCard from "../SheetsCard";
import EmptySheets from "../EmptySheets";
import SheetsSliderHeader from "./SheetsSliderHeader";
interface Props {
  sheetsData: IPublicationUnit[];
}

const SheetsSlider = ({ sheetsData }: Props) => {
  const haveSheets = sheetsData.length > 0;
  return (
    <>
      <SheetsSliderHeader haveSheets={haveSheets} />
      {haveSheets ? (
        <div className="sheets-slider">
          {sheetsData.map((sheet) => (
            <SheetsCard key={sheet._id as string} sheetData={sheet} />
          ))}
        </div>
      ) : (
        <EmptySheets />
      )}
    </>
  );
};

export default SheetsSlider;
