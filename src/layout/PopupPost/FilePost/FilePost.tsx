import Image from "next/image";
import React from "react";
import iconPdf from "../../../../public/assets/iconPdf.svg";
import crossIcon from "../../../../public/assets/cross.svg";

interface Props {
  fileData: File;
}

const bytesToMegaBytes = (bytes: number) => bytes / (1024 * 1024);

const FilePost = ({ fileData }: Props) => {
  return (
    <div className="file-post text--small-text text--color-sub">
      <div className="file-post__data">
        <Image src={iconPdf} alt="pdf Icon" className="icon-pdf" />
        <div className="file-post__meta-data">
          <p>{fileData.name}</p>
          <p>{bytesToMegaBytes(fileData.size).toFixed(2)}Mo</p>
        </div>
        <div className="file-post__info-progress">
          <Image
            src={crossIcon}
            alt="Cross icon"
            className="file-post__cross-icon"
          />
          <p>56%</p>
        </div>
      </div>

      <div className="file-post__progress-bar">
        <div className="blue-bar"></div>
        <div className="white-bar"></div>
      </div>
    </div>
  );
};

export default FilePost;
