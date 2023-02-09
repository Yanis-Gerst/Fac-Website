import React from "react";
import userIcon from "../../../../../public/assets/userIcon.svg";
import likeIcon from "../../../../../public/assets/likeIcon.svg";
import calendarIcon from "../../../../../public/assets/calendarIcon.svg";
import Image from "next/image";

interface Props {
  userName: string;
  like: number;
  yearOfPublication: number;
}

const SheetsCardIcons: React.FC<Props> = ({
  userName,
  like,
  yearOfPublication,
}) => {
  return (
    <div className="sheets-card-icons-wrapper">
      <div className="sheets-card-icons__user">
        <Image src={userIcon} alt="user icon" />
        <p>{userName}</p>
      </div>

      <div className="sheets-card-icons__like-calendar-wrapper">
        <div className="sheets-card-icons__like">
          <Image src={likeIcon} alt="like icon" />
          <p>{like}</p>
        </div>

        <div className="sheets-card-icons_calendar">
          <Image src={calendarIcon} alt="calendar icon" />
          <p>{yearOfPublication}</p>
        </div>
      </div>
    </div>
  );
};

export default SheetsCardIcons;
