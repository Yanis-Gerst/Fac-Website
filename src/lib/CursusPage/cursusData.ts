import { ICursus } from "../../@types/global";
import { IPageDbJson } from "../../@types/global";
import { lowerCaseTheFirstLetter } from "../../utils/stringMethods";
import pageDbJson from "../../AmuData/pageObject";

export const retreiveCursusDataFromUrl = (url: string) => {
  const camelCaseUrl = lowerCaseTheFirstLetter(url);
  const keys = camelCaseUrl.split("/");
  let data: ICursus | null;
  try {
    data = retrieveCursusDataWithKeys(keys);
  } catch {
    data = null;
  }
  return data;
};

const retrieveCursusDataWithKeys = (keys: string[]) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let data: any = pageDbJson;
  keys.forEach((key) => {
    if (data[key] == undefined) {
      throw new Error(`This Url have no defined page ${keys.join("/")}`);
    }
    data = data[key];
  });

  return data as ICursus;
};

export const getAllCursusUrl = (amuData = pageDbJson): string[] => {
  const allCursusUrls = Object.keys(amuData).flatMap((key) => {
    const currentPath = key;
    if (amuData[key].domainSection != undefined) {
      return [currentPath];
    }
    return getAllCursusUrl(amuData[key] as IPageDbJson).map(
      (moreDepthPath) => `${currentPath}/${moreDepthPath}`
    );
  });
  return allCursusUrls;
};
