import { ICursus } from "../../@types/global";
import { IPageDbJson } from "../../@types/global";
import { lowerCaseTheFirstLetter } from "../../utils/stringMethods";
import pageDbJson from "../../AmuData/pageObject";

export const getAllCursusUrl = (
  currentData?: IPageDbJson,
  buffer?: string[],
  path = ""
) => {
  const amuData = currentData ? currentData : pageDbJson;
  const allCursusData = buffer ? buffer : [];

  Object.keys(amuData).forEach((key) => {
    const currentPath = path ? `${path}/${key}` : `${key}`;
    if (amuData[key].domainSection != undefined) {
      allCursusData.push(currentPath);
    } else {
      getAllCursusUrl(amuData[key] as IPageDbJson, allCursusData, currentPath);
    }
  });

  return allCursusData;
};
export const retreiveDataPageFromUrl = (url: string) => {
  url = lowerCaseTheFirstLetter(url);
  const keys = url.split("/");
  let data: ICursus | null;
  try {
    data = retrieveDataWithKeys(keys);
  } catch {
    data = null;
  }
  return data;
};

const retrieveDataWithKeys = (keys: string[]) => {
  let data: any = pageDbJson;
  keys.forEach((key) => {
    if (data[key] == undefined) {
      throw new Error("Url have no defined page");
    }
    data = data[key];
  });

  return data as ICursus;
};
