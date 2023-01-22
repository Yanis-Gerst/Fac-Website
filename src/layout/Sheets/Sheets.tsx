import React from "react";
import { publicationUnit } from "../../@types/global";

interface Props {
  revisionSheetsData: publicationUnit[];
  exercicesSheetsData: publicationUnit[];
}

const Sheets = ({ revisionSheetsData, exercicesSheetsData }: Props) => {
  return (
    <div className="sheets-wrapper">
      <div className="sheet-rev-wrapper">
        <div className="sheets-rev-header">
          <h1>Fiches de Révision</h1>
        </div>

        <div className="rev-compoennet"></div>
      </div>
      <div className="sheet-ex-wrapper">
        <div className="sheets-ex-header">
          <h1>Exercices</h1>
        </div>
      </div>
    </div>
  );
};

export default Sheets;
