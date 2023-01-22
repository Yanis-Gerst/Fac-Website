import React from "react";
import { publicationUnit } from "../../@types/global";
import SheetsCard from "./SheetsCard";

interface Props {
  revisionSheetsData: publicationUnit[];
  exercicesSheetsData: publicationUnit[];
}

const Sheets = ({ revisionSheetsData, exercicesSheetsData }: Props) => {
  return (
    <div className="sheets-wrapper">
      <div className="sheet-rev-wrapper">
        <h1>Fiches de Révision</h1>
        {revisionSheetsData.map((revSheet) => (
          <SheetsCard
            key={revSheet.title}
            type="revision"
            sheetsData={revSheet}
          />
        ))}

        <div className="rev-compoennet"></div>
      </div>
      <div className="sheet-ex-wrapper">
        <h1>Exercices</h1>
        {exercicesSheetsData.map((exSheet) => (
          <SheetsCard
            key={exSheet.title}
            type="exercices"
            sheetsData={exSheet}
          />
        ))}
      </div>
    </div>
  );
};

export default Sheets;
