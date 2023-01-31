import { IPageDbJson } from "../src/@types/global";

const mockPageObject: IPageDbJson = {
  portailDescartes: {
    title: "Portail Descartes",
    domainSection: [
      {
        title: "Math",
        teachingUnitsS1: [
          {
            title: "Outils Mathématique",
            chapters: [],
          },
        ],
        teachingUnitsS2: [
          {
            title: "Algèbre linéraire",
            chapters: [],
          },
        ],
      },
    ],
  },
  l2: {
    informatique: {
      title: "L1 Info",
      domainSection: [],
    },
  },
};

export default mockPageObject;
