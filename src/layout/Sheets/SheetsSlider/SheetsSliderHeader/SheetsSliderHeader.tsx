import Image from "next/image";
import React, { useContext, useState } from "react";
import { sheetsTypeContext } from "../../Sheets";
import uploadIcon from "../../../../../public/assets/upload.svg";
import { Modal } from "../../../../componenents/Modale/Modale";
import PopupPost from "../../../PopupPost";

interface Props {
  haveSheets: boolean;
}
const SheetsSliderHeader = ({ haveSheets }: Props) => {
  const [showPopup, setShowPopup] = useState(false);
  const sheetsType = useContext(sheetsTypeContext);

  return (
    <div className="sheets-slider-header-container">
      <h3 className="sheets-slider-header text--semi-header5">
        {sheetsType == "revisions" ? "Fiches de Révision" : "Exercices"}
      </h3>
      {haveSheets && (
        <Image
          src={uploadIcon}
          alt="upload icon"
          onClick={() => setShowPopup(true)}
          className="sheets-slider-header__upload-icon"
        />
      )}

      {showPopup && (
        <Modal toClose={() => setShowPopup(false)}>
          <PopupPost />
        </Modal>
      )}
    </div>
  );
};

export default SheetsSliderHeader;
