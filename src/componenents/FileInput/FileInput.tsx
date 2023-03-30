import Image from "next/image";
import React, { useRef, useState } from "react";
import uploadIcon from "../../../public/assets/upload.svg";

interface Props {
  onChange: (file: FileList) => boolean;
  errorFileInput: boolean;
  setErrorFileInput: React.Dispatch<React.SetStateAction<boolean>>;
}

const FileInput = ({ onChange, errorFileInput, setErrorFileInput }: Props) => {
  const [isDrag, setIsDrag] = useState(false);
  const fileInputElement = useRef<HTMLInputElement>(null);

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDrag(false);
    const files = e.dataTransfer.files;

    handleChangeAndError(files);
  };

  const handleChangeAndError = (files: FileList) => {
    if (!onChange(files)) return setErrorFileInput(true);
    resetErrorFileInput();
  };

  const resetErrorFileInput = () => {
    if (errorFileInput) setErrorFileInput(false);
  };

  const chooseFile = () => {
    if (!fileInputElement.current) return;
    fileInputElement.current.click();
  };

  const addStyleAndCancelEvent = (e: React.DragEvent) => {
    e.preventDefault();
    if (!isDrag) setIsDrag(true);
  };

  return (
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
          <span
            className="text--color-primary text--clickable"
            onClick={chooseFile}
          >
            Choisir un fichier
          </span>{" "}
          au format pdf
        </p>
      </label>
      <input
        type="file"
        name="file"
        id="file"
        className="popup__file-input"
        ref={fileInputElement}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          if (!e.target.files) return;
          handleChangeAndError(e.target.files);
        }}
      />
      <p>{errorFileInput && "Lorem Ipsum"}</p>
    </div>
  );
};

export default FileInput;
