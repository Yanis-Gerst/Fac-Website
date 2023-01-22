import React from "react";
import { publicationUnit } from "../../../@types/global";
import Button from "../../../componenents/Button";

interface Props {
  sheetsData: publicationUnit;
  type: "revision" | "exercices";
}

const SheetsCard = ({ sheetsData, type }: Props) => {
  return (
    <div className="sheets-card-wrapper">
      <h3>{sheetsData.title}</h3>
      <p>{sheetsData.descriptions}</p>

      <div className="sheets-icons-wrapper">
        <div className="sheets-icon__user">
          <p>{sheetsData.userName}</p>
        </div>
        <div className="sheets-icons__like">
          <p>{sheetsData.like}</p>
        </div>
        <div className="sheets-icons__year-of-publication">
          <p>{sheetsData.yearOfPublication}</p>
        </div>
      </div>

      <div className="sheet-card__button-wrapper">
        {type == "exercices" && <Button type="secondary">Correctoin</Button>}
        <Button type="primary">Télécharger</Button>
      </div>
    </div>
  );
};

export default SheetsCard;
