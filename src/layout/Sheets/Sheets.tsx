import React from "react";
import { publicationUnit } from "../../@types/global";
import SheetsSlider from "./SheetsSlider";

interface Props {
  revisionSheetsData: publicationUnit[];
  exercicesSheetsData: publicationUnit[];
}

const Sheets = ({ revisionSheetsData, exercicesSheetsData }: Props) => {
  return (
    <div className="sheets-wrapper" key={Date.now()}>
      <SheetsSlider type="revision" sheetsData={revisionSheetsData} />
      <SheetsSlider type="exercices" sheetsData={exercicesSheetsData} />
    </div>
  );
};

export default Sheets;
