import { ITeachingDomain } from "../../@types/global";
import { getAllCursusUrl } from "../CursusPage/cursusData";
import { retreiveCursusDataFromUrl } from "../CursusPage/cursusData";
import { parseTitleToUrl } from "../../utils/stringMethods";

export const getAllTeachingUnitsUrls = async () => {
  const allCursusUrl = await getAllCursusUrl();

  const test = await Promise.all(
    allCursusUrl.flatMap(async (url) => {
      const cursusData = await retreiveCursusDataFromUrl(url);
      return cursusData.domainSection.flatMap((domain: ITeachingDomain) => {
        return [
          ...domain.teachingUnitsS1.map(
            (teachUnit) =>
              `${url}/${parseTitleToUrl(domain.title)}/S1/${parseTitleToUrl(
                teachUnit.title
              )}`
          ),
          ...domain.teachingUnitsS2.map(
            (teachUnit) =>
              `${url}/${parseTitleToUrl(domain.title)}/S2/${parseTitleToUrl(
                teachUnit.title
              )}`
          ),
        ];
      });
    })
  );

  return test.flat();
};
