import React from "react";
import { publicationUnit } from "../../../@types/global";

import SheetsCard from "../SheetsCard";

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
      <div className="sheets-slider">
        {sheetsData.map((sheet) => (
          <SheetsCard key={sheet.title} type={type} sheetData={sheet} />
        ))}
      </div>
    </>
  );
};

export default SheetsSlider;
