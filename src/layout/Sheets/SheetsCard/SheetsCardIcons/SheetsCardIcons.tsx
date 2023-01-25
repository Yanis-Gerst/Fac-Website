import React from "react";
import userIcon from "../../../../../assets/userIcon.svg";
import likeIcon from "../../../../../assets/likeIcon.svg";
import calendarIcon from "../../../../../assets/calendarIcon.svg";

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
        <img src={userIcon} alt="user icon" />
        <p>{userName}</p>
      </div>

      <div className="sheets-card-icons__like-calendar-wrapper">
        <div className="sheets-card-icons__like">
          <img src={likeIcon} alt="like icon" />
          <p>{like}</p>
        </div>

        <div className="sheets-card-icons_calendar">
          <img src={calendarIcon} alt="calendar icon" />
          <p>{yearOfPublication}</p>
        </div>
      </div>
    </div>
  );
};

export default SheetsCardIcons;
