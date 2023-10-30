import React from "react";
import { IPublicationUnit } from "../../../@types/global";
import Button from "../../../componenents/Button";
import SheetsCardIcons from "./SheetsCardIcons";
import { useSheetsTypeContext } from "../SheetsTypeContext/SheetsTypeContext";

interface Props {
  sheetData: IPublicationUnit;
}

const SheetsCard = ({ sheetData }: Props) => {
  const sheetsType = useSheetsTypeContext();
  return (
    <div className={`sheets-card-wrapper sheets-card-wrapper--${sheetsType}`}>
      <h4 className="sheets-card-header text--semi-header6">
        {sheetData.title}
      </h4>
      <p className="sheets-card-desc">{sheetData.descriptions}</p>
      <SheetsCardIcons
        userName={sheetData.userName}
        like={0}
        yearOfPublication={sheetData.yearOfPublication}
      />
      <div className={`sheets-card__button-wrapper`}>
        {/*  Todo Handle Two Pdf One exercice and One for correction
        {type === "exercices" && (
          <Button
            type="secondary"
            specificStyle="sheets-card__button btn-secondary"
          >
            Correction
          </Button> 
        )} */}

        <a
          className="sheets-card__button"
          href={`http://localhost:3000/api/sheets/${sheetData._id}`}
        >
          <Button type="primary" specificStyle="sheets-card__button">
            {sheetsType === "exercices" ? "Télécharger" : "Télécharger"}
          </Button>
        </a>
      </div>
    </div>
  );
};

export default SheetsCard;
