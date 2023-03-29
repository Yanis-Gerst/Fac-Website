import React, { DragEvent, useContext, useState } from "react";
import Inputs from "../../componenents/Inputs";
import crossIcon from "../../../public/assets/cross.svg";
import uploadIcon from "../../../public/assets/upload.svg";
import Image from "next/image";
import Button from "../../componenents/Button";
import FilePost from "./FilePost";
import { ChapterIdContext } from "../../pages/UePage/[...teachUnitTitle]";
export const apiRequestUrl = "/api/posts";

type pdfMetaData = {
  title: string;
  descriptions: string;
  userName: string;
};

interface Props {
  toClose?: () => void;
}
const PopupPost = ({ toClose }: Props) => {
  const [isDrag, setIsDrag] = useState(false);

  const [title, setTitle] = useState("");
  const [userName, setUserName] = useState("");
  const [descriptions, setDescriptions] = useState("");
  const chapterId = useContext(ChapterIdContext);
  const [currentFile, setCurrentFile] = useState<File | null>(null);

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDrag(false);
    const files = e.dataTransfer.files;
    if (files.length > 1 && files[0].type !== "application/pdf") return; //TODO: Gérer l'erreur plus de 1 fichier
    setCurrentFile(files[0]);
  };

  const addStyleAndCancelEvent = (e: React.DragEvent) => {
    e.preventDefault();
    if (!isDrag) setIsDrag(true);
  };

  const handleChange = (
    setState: React.Dispatch<React.SetStateAction<string>>
  ) => {
    return (e: React.ChangeEvent<HTMLInputElement>) => setState(e.target.value);
  };

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (!currentFile) return;
    const data: pdfMetaData = {
      title,
      userName,
      descriptions,
    };

    postData(data);
  };

  const postData = async (data: pdfMetaData) => {
    if (!currentFile) return;
    const formData = new FormData();
    formData.append("file", currentFile);
    Object.keys(data).forEach((key) =>
      formData.append(key, data[key as keyof pdfMetaData])
    );

    fetch(`${apiRequestUrl}/${chapterId}`, {
      method: "POST",
      body: formData,
    });
  };

  return (
    <>
      <div className="popup">
        <Image
          src={crossIcon}
          alt="cross"
          onClick={toClose}
          className="popup__btn"
        />
        <form className="popup__pdf-form">
          <div className="pdf-form__first-section">
            <Inputs label="Nom Prenom" onChange={handleChange(setUserName)} />
            <Inputs label="Titre" onChange={handleChange(setTitle)} />
          </div>
          <Inputs
            label="Descriptions"
            onChange={handleChange(setDescriptions)}
          />
          <div
            className={`file-input ${isDrag ? "file-input--dragged" : ""}`}
            tabIndex={0}
            onDrop={handleDrop}
            onDragOver={addStyleAndCancelEvent}
          >
            <label htmlFor="file" id="file">
              <Image src={uploadIcon} alt="Upload Icon" />
              <p className="text--small-text">
                Faire glisser ou{" "}
                <span className="text--color-primary">Choisir un fichier</span>{" "}
                au format pdf
              </p>
            </label>
            <input type="file" name="file" id="file" />
          </div>
          {currentFile && <FilePost fileData={currentFile} />}

          <Button
            type="primary"
            specificStyle="popup__btn-post"
            onClick={handleSubmit}
          >
            Publier
          </Button>
        </form>
      </div>
    </>
  );
};

export default PopupPost;
