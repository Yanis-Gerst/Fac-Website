import React from "react";
import { publicationUnit } from "../../../@types/global";

interface Props {
  sheetsData: publicationUnit;
}

const SheetsCard = ({ sheetsData }: Props) => {
  return (
    <div className="sheets-card-wrapper">
      <h3>{sheetsData.title}</h3>
      <p>{sheetsData.descriptions}</p>
    </div>
  );
};

export default SheetsCard;
