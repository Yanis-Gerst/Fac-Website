import React from "react";
import { ITeachingDomain } from "../../@types/global";
import rightArrow from "../../../public/assets/rightArrow.svg";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { parseTitleToUrl } from "../../utils/stringMethods";

interface Props {
  domains: ITeachingDomain[];
  activeTabIndex: number;
  semesterNumber: 1 | 2;
}

export const TeachingUnit = ({
  domains,
  activeTabIndex,
  semesterNumber,
}: Props) => {
  const router = useRouter();
  return (
    <div className="teach-unit-card">
      <h2 className="teach-unit-card__header text--header6">
        Semetre {semesterNumber}
      </h2>
      <ul className="teach-unit-card__list-item">
        {domains[activeTabIndex][`teachingUnitsS${semesterNumber}`].map(
          (teachUnit) => {
            const teachUnitTitleUrl = parseTitleToUrl(teachUnit.title);
            const domainTitleUrl = parseTitleToUrl(
              domains[activeTabIndex].title
            );
            const teachUnitUrl = `${domainTitleUrl}/S${semesterNumber}/${teachUnitTitleUrl}`;

            return (
              <li key={teachUnit.title}>
                <Link
                  href={`UePage${router.asPath}/${teachUnitUrl}`}
                  className="teach-unit-card__item"
                >
                  {teachUnit.title}
                  <Image
                    src={rightArrow}
                    className="teach-unit-card__arrow"
                    alt="une flèche qui pointe vers la droite"
                  />
                </Link>
              </li>
            );
          }
        )}
      </ul>
    </div>
  );
};

export default TeachingUnit;
