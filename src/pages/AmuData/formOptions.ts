import { IFormOptions } from "../../componenents/Form/Form";

export const createInitFormOptions = (
  naviguationFunction: (page: string) => void,
  setterFormFunction: (option: IFormOptions) => void
) => {
  const initOptions: IFormOptions = {
    "Portail Descartes": naviguationFunction,
    "Licence Première Année": () => {
      setterFormFunction({
        Mathématique: naviguationFunction,
        Informatique: naviguationFunction,
        Mécanique: naviguationFunction,
        Physique: naviguationFunction,
      });
    },
  };

  return initOptions;
};

export default createInitFormOptions;
