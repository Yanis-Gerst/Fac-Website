import React from "react";
import { IPublicationUnit } from "../../../@types/global";
import Button from "../../../componenents/Button";
import SheetsCardIcons from "./SheetsCardIcons";

interface Props {
  sheetData: IPublicationUnit;
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
        like={0}
        yearOfPublication={sheetData.yearOfPublication}
      />
      <div
        className={`sheets-card__button-wrapper ${
          type === "exercices" && "sheets-card__button-wrapper--exercices"
        }`}
      >
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
          href={`http://localhost:3000/api/posts/${sheetData._id}`}
        >
          <Button type="primary" specificStyle="sheets-card__button">
            {type === "exercices" ? "Télécharger" : "Télécharger"}
          </Button>
        </a>
      </div>
    </div>
  );
};

export default SheetsCard;
