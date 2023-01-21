import React from "react";
import { useLocation } from "react-router-dom";
import { ICursus, ITeachingUnit } from "../../@types/global";
import CursusPage from "../CursusPage";
import ErrorPage from "../ErrorPage";
import pageDbJson from "../pageObject";
import UePage from "../UePage";

type uePageState = {
  pageData: ITeachingUnit;
};
const UrlHandler = () => {
  const location = useLocation();
  const currentUrl = location.pathname;
  const currentState: uePageState | null = location.state;
  const dataOfCurrentPage = currentState
    ? currentState.pageData
    : retreiveDataPageFromUrl(currentUrl);

  return (
    <>
      {dataOfCurrentPage ? (
        currentState ? (
          <UePage data={dataOfCurrentPage as ITeachingUnit} />
        ) : (
          <CursusPage data={dataOfCurrentPage as ICursus} />
        )
      ) : (
        <ErrorPage />
      )}
    </>
  );
};

const retreiveDataPageFromUrl = (url: string) => {
  url = parseUrl(url);
  const keys = url.split("/");
  let data: ICursus | null;
  try {
    data = retrieveDataWithKeys(keys);
  } catch {
    data = null;
  }
  return data;
};

const parseUrl = (url: string) => {
  let newUrl = removeFirstCharacterOf(url);
  newUrl = lowerCaseTheFirstLetter(newUrl);
  return newUrl;
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
const lowerCaseTheFirstLetter = (string: string) => {
  return string[0].toLowerCase() + string.substring(1);
};

const removeFirstCharacterOf = (string: string) => {
  return string.substring(1);
};
export default UrlHandler;
