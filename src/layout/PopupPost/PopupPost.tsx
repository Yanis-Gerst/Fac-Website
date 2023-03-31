import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import TextInput from "../../componenents/TextInput";
import crossIcon from "../../../public/assets/cross.svg";
import Image from "next/image";
import Button from "../../componenents/Button";
import FilePost from "./FilePost";
import { ChapterIdContext } from "../../pages/UePage/[...teachUnitTitle]";
import { sheetsTypeContext } from "../Sheets/Sheets";
import FileInput from "../../componenents/FileInput";

export const apiRequestUrl = "/api/posts";

const requiredMessage = "lorem ipsum dolor sit amet";

type pdfMetaData = {
  title: string;
  descriptions: string;
  userName: string;
};

interface Props {
  toClose?: () => void;
}
const PopupPost = ({ toClose }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: { userName: "", descriptions: "", title: "" } });
  const chapterId = useContext(ChapterIdContext);
  const sheetsType = useContext(sheetsTypeContext);
  const [currentFile, setCurrentFile] = useState<File | null>(null);
  const [errorFileInput, setErrorFileInput] = useState(false);

  const postData = async (data: pdfMetaData) => {
    if (!currentFile) return;

    const formData = new FormData();
    formData.append("file", currentFile);
    formData.append("sheetsType", sheetsType);
    Object.keys(data).forEach((key) =>
      formData.append(key, data[key as keyof pdfMetaData])
    );

    const res = await fetch(`${apiRequestUrl}/${chapterId}`, {
      method: "POST",
      body: formData,
    });

    if (res.status === 200) {
      window.location.reload();
    }
  };

  const handleFileChange = (files: FileList) => {
    if (!isPdfAndSoloFile(files)) return false;
    setCurrentFile(files[0]);
    return true;
  };

  const isPdfAndSoloFile = (files: FileList) => {
    return files.length == 1 && files[0].type == "application/pdf";
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
        <form
          className="popup__pdf-form"
          onSubmit={handleSubmit((d) => {
            if (!currentFile) return setErrorFileInput(true);
            postData(d);
          })}
        >
          <div className="pdf-form__first-section">
            <TextInput
              label="Nom Prenom"
              register={register("userName", {
                required: requiredMessage,
              })}
              errors={errors.userName}
            />

            <TextInput
              label="Titre"
              register={register("title", { required: requiredMessage })}
              errors={errors.title}
            />
          </div>
          <TextInput
            label="Descriptions"
            register={register("descriptions", { required: requiredMessage })}
            errors={errors.descriptions}
          />
          {currentFile ? (
            <FilePost fileData={currentFile} handleDelete={setCurrentFile} />
          ) : (
            <FileInput
              onChange={handleFileChange}
              errorFileInput={errorFileInput}
              setErrorFileInput={setErrorFileInput}
            />
          )}

          <Button
            type="primary"
            specificStyle="popup__btn-post"
            onClick={() => {
              if (!currentFile) setErrorFileInput(true);
            }}
          >
            Publier
          </Button>
        </form>
      </div>
    </>
  );
};

export default PopupPost;
