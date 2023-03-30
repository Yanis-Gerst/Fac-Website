import React, { useState } from "react";
import Button from "../../../componenents/Button";
import Image from "next/image";
import fileX from "../../../../public/assets/file-x.svg";
import PopupPost from "../../PopupPost";
import { Modal } from "../../../componenents/Modale/Modale";

const EmptySheets = () => {
  const [showPopup, setShowPopup] = useState(false);
  return (
    <>
      {" "}
      <div className="empty-section">
        <Image src={fileX} alt="empty file" />
        <p>Il n&apos;y a rien pour l&apos;instant</p>
        <p>Soyer le premier</p>
        <Button type="primary" onClick={() => setShowPopup(!showPopup)}>
          Publier
        </Button>
      </div>
      {showPopup && (
        <Modal toClose={() => setShowPopup(false)}>
          <PopupPost />
        </Modal>
      )}
    </>
  );
};

export default EmptySheets;
