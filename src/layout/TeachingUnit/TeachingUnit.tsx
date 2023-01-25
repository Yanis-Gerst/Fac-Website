import React from "react";
import { ITeachingDomain } from "../../@types/global";
import { ReactComponent as RightArrow } from "../../../assets/rightArrow.svg";
import { Link } from "react-router-dom";

interface Props {
  domains: ITeachingDomain[];
  activeTabIndex: number;
  semester: 1 | 2;
}

export const TeachingUnit = ({ domains, activeTabIndex, semester }: Props) => {
  return (
    <div className="teach-unit-card">
      <h2 className="teach-unit-card__header text--header6">
        Semetre {semester}
      </h2>
      <ul className="teach-unit-card__list-item">
        {domains[activeTabIndex][`teachingUnitsS${semester}`].map(
          (teachUnit) => (
            <li className="teach-unit-card__item" key={teachUnit.title}>
              <Link
                to={`${teachUnit.title.replace(" ", "")}`}
                relative="path"
                state={{ pageData: teachUnit }}
              >
                {teachUnit.title}
              </Link>
              <RightArrow className="teach-unit-card__arrow" />
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default TeachingUnit;
