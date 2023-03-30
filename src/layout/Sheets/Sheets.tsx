import React, { createContext } from "react";
import { IPublicationUnit } from "../../@types/global";
import SheetsSlider from "./SheetsSlider";

export const sheetsTypeContext = createContext<string>("");

interface Props {
  revisionsSheetsData: IPublicationUnit[];
  exercicesSheetsData: IPublicationUnit[];
}

const Sheets = ({ revisionsSheetsData, exercicesSheetsData }: Props) => {
  return (
    <div className="sheets-wrapper" key={Date.now()}>
      <sheetsTypeContext.Provider value="revisions">
        <SheetsSlider type="revision" sheetsData={revisionsSheetsData} />
      </sheetsTypeContext.Provider>
      <sheetsTypeContext.Provider value="exercices">
        <SheetsSlider type="exercices" sheetsData={exercicesSheetsData} />
      </sheetsTypeContext.Provider>
    </div>
  );
};

export default Sheets;
