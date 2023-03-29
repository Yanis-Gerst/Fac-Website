import React from "react";
import { publicationUnit } from "../../../@types/global";
import SheetsCard from "../SheetsCard";
import EmptySheets from "../EmptySheets";

interface Props {
  type: "exercices" | "revision";
  sheetsData: publicationUnit[];
}

const SheetsSlider = ({ sheetsData, type }: Props) => {
  return (
    <>
      <h3 className="sheets-slider-header text--semi-header5">
        {type == "revision" ? "Fiches de Révision" : "Exercices"}
      </h3>
      {sheetsData.length > 0 ? (
        <div className="sheets-slider">
          {sheetsData.map((sheet) => (
            <SheetsCard key={sheet._id} type={type} sheetData={sheet} />
          ))}
        </div>
      ) : (
        <EmptySheets />
      )}
    </>
  );
};

export default SheetsSlider;
