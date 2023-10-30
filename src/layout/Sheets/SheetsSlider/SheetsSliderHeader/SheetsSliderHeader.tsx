import Image from "next/image";
import React, { useState } from "react";
import uploadIcon from "../../../../../public/assets/upload.svg";
import { Modal } from "../../../../componenents/Modale/Modale";
import PopupPost from "../../../PopupPost";
import { useSheetsTypeContext } from "../../SheetsTypeContext/SheetsTypeContext";

interface Props {
  haveSheets: boolean;
}
const SheetsSliderHeader = ({ haveSheets }: Props) => {
  const sheetsType = useSheetsTypeContext();
  const [showPopup, setShowPopup] = useState(false);
  console.log("render");
  return (
    <div className="sheets-slider-header-container">
      <h3 className="sheets-slider-header text--semi-header5">
        {sheetsType == "revision" ? "Fiches de Révision" : "Exercices"}
      </h3>

      {haveSheets && (
        <div onClick={() => setShowPopup(true)}>
          <Image
            src={uploadIcon}
            alt="upload icon"
            className="sheets-slider-header__upload-icon"
          />
        </div>
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
