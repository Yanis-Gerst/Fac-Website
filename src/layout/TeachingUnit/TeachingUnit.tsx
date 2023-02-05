import React from "react";
import { ITeachingDomain } from "../../@types/global";
import rightArrow from "../../../public/assets/rightArrow.svg";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { lowerCaseTheFirstLetter } from "../../utils/stringMethods";

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
            const urlTeachUnit = parseTileToUrl(teachUnit.title);

            return (
              <li className="teach-unit-card__item" key={teachUnit.title}>
                <Link
                  href={`${router.asPath}/${urlTeachUnit.replace(" ", "")}`}
                >
                  {teachUnit.title}
                </Link>
                <Image
                  src={rightArrow}
                  className="teach-unit-card__arrow"
                  alt="une flèche qui pointe vers la droite"
                />
              </li>
            );
          }
        )}
      </ul>
    </div>
  );
};

const parseTileToUrl = (teachUnit: string) => {
  let urlTeachUnit = lowerCaseTheFirstLetter(teachUnit);
  urlTeachUnit = removeAccentFrom(urlTeachUnit);
  return urlTeachUnit;
};

const removeAccentFrom = (string: string) => {
  return string.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
};

export default TeachingUnit;
