import { IPageDbJson } from "../@types/global";
import { IFormOptions } from "../componenents/Form/Form";
import pageData from "./pageObject";

export const createInitFormOptions = (
  naviguationFunction: (page: string) => void,
  setterFormFunction: (option: IFormOptions) => void,
  currentData = pageData,
  init = true
) => {
  const result: any = {};
  Object.keys(currentData).forEach((key) => {
    if (currentData[key].domainSection) {
      if (init) result[currentData[key].title as string] = naviguationFunction;
      else {
        result[key] = naviguationFunction;
      }
    } else {
      result[key] = () => {
        setterFormFunction(
          createInitFormOptions(
            naviguationFunction,
            setterFormFunction,
            currentData[key] as IPageDbJson,
            false
          )
        );
      };
    }
  });
  return result;
};

export default createInitFormOptions;
