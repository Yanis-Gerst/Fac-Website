import React from "react";
import { publicationUnit } from "../../../@types/global";
import Button from "../../../componenents/Button";
import SheetsCardIcons from "./SheetsCardIcons";

interface Props {
  sheetData: publicationUnit;
  type: "revision" | "exercices";
}

const SheetsCard = ({ sheetData, type }: Props) => {
  return (
    <div className="sheets-card-wrapper">
      <h4 className="sheets-card-header text--semi-header6">
        {sheetData.title}
      </h4>
      <p className="sheets-card-desc">{sheetData.descriptions}</p>
      <SheetsCardIcons
        userName={sheetData.userName}
        like={sheetData.like}
        yearOfPublication={sheetData.yearOfPublication}
      />
      <div
        className={`sheets-card__button-wrapper ${
          type === "exercices" && "sheets-card__button-wrapper--exercices"
        }`}
      >
        {type === "exercices" && (
          <Button type="secondary" specificStyle="sheets-card__button">
            Correction
          </Button>
        )}
        <Button type="primary" specificStyle="sheets-card__button">
          {type === "exercices" ? "Exercices" : "Télécharger"}
        </Button>
      </div>
    </div>
  );
};

export default SheetsCard;
