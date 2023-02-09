import { ICursus, ITeachingDomain } from "../../@types/global";
import { getAllCursusUrl } from "../CursusPage/cursusData";
import { retreiveCursusDataFromUrl } from "../CursusPage/cursusData";
import {
  camelCase,
  lowerCaseTheFirstLetter,
  removeAccentFrom,
} from "../../utils/stringMethods";

export const getAllTeachingUnits = () => {
  const cursusUrls = getAllCursusUrl();
  const allCursusData = cursusUrls.map(
    (cursusUrl) => retreiveCursusDataFromUrl(cursusUrl) as ICursus
  );
  const allDomains = getAllDomainsOf(allCursusData);
  const allTeachingUnits = getAllTeachingUnitOf(allDomains);
  return allTeachingUnits;
};

export const getAllTeachingUnitsUrls = () => {
  const cursusUrls = getAllCursusUrl();

  const allTeachingUnitsUrls = cursusUrls.flatMap((cursusUrl) => {
    const cursusDomains = retreiveCursusDataFromUrl(cursusUrl)?.domainSection;

    return retrieveAllTeachingUnitsUrlsOfDomains(
      cursusDomains as ITeachingDomain[]
    ).map((teachUnitUrl) => `${cursusUrl}/${teachUnitUrl}`);
  });

  return allTeachingUnitsUrls;
};

const retrieveAllTeachingUnitsUrlsOfDomains = (domains: ITeachingDomain[]) => {
  return domains.flatMap((domain) => {
    return [
      ...retrieveTeachingUnitOfSemester(domain, 1),
      ...retrieveTeachingUnitOfSemester(domain, 2),
    ];
  });
};

const retrieveTeachingUnitOfSemester = (
  domain: ITeachingDomain,
  semester: 1 | 2
) => {
  return domain[`teachingUnitsS${semester}`].map(
    (teachUnit) =>
      `domain/${domain.title}/S${semester}/${parseTitleToUrl(teachUnit.title)}`
  );
};

const getAllDomainsOf = (cursusArray: ICursus[]) => {
  return cursusArray.flatMap((cursus) => cursus.domainSection);
};

const getAllTeachingUnitOf = (domainArray: ITeachingDomain[]) => {
  return domainArray.flatMap((domain) => [
    ...domain.teachingUnitsS1,
    ...domain.teachingUnitsS2,
  ]);
};

export const parseTitleToUrl = (teachUnit: string) => {
  let urlTeachUnit = lowerCaseTheFirstLetter(teachUnit);
  urlTeachUnit = camelCase(urlTeachUnit);
  urlTeachUnit = removeAccentFrom(urlTeachUnit);
  urlTeachUnit = urlTeachUnit.replaceAll(" ", "");
  return urlTeachUnit;
};

export const retrieveTeachingUnitDataFromUrl = (url: string) => {
  const [cursusUrl, teachUnitUrl] = url.split("/domain/");
  const cursusData = retreiveCursusDataFromUrl(cursusUrl);

  const [domainTitle, semester, teachUnitTitle] = teachUnitUrl.split("/");

  const domainData = getDataByTitleOf(
    cursusData?.domainSection as ITeachingDomain[],
    domainTitle
  )[0] as ITeachingDomain;

  const teachUnitData = getDataByTitleOf(
    domainData[`teachingUnits${semester as "S1" | "S2"}`],
    teachUnitTitle,
    parseTitleToUrl
  )[0];

  return teachUnitData;
};

type IObectWithTitle = {
  title: any;
};

const getDataByTitleOf = (
  dataArray: IObectWithTitle[],
  title: string,
  parseTitle?: (title: string) => string
) => {
  return dataArray.filter((data) =>
    parseTitle ? parseTitle(data.title) == title : data.title == title
  );
};
