import mockPageObject from "../../../__mocks__/mockPageObject";
import { ITeachingUnit } from "../../@types/global";
import {
  getAllTeachingUnitsUrls,
  parseTitleToUrl,
  retrieveTeachingUnitDataFromUrl,
} from "./teachUnitData";

const pagesData: any = mockPageObject;

jest.mock("../../AmuData/pageObject", () => {
  const mockPageObject = jest.requireActual(
    "../../../__mocks__/mockPageObject"
  );
  return mockPageObject;
});

describe("getAllTeachingUnitsUrls", () => {
  const expectedUrls = [
    "l2/informatique/domain/Web/S1/php",
    "portailDescartes/domain/Math/S1/languageMathematique",
    "portailDescartes/domain/Math/S2/algebreLineaire",
    "portailDescartes/domain/Informatique/S1/scienceInformatique",
    "portailDescartes/domain/Informatique/S1/miseEnOeuvreInformatique",
  ];

  const teachUnitsUrls = getAllTeachingUnitsUrls();

  test.each(expectedUrls)("%s is include", async (expectedUrl) => {
    expect(teachUnitsUrls.includes(expectedUrl)).toBe(true);
  });
});

describe("retrieveTeachingUnitDataFromUrl work with correctUrl", async () => {
  test("retrieveTeachingUnitDataFromUrl work basic url", async () => {
    const mockUrl = "portailDescartes/domain/Math/S1/languageMathematique";

    const teachUnitData = retrieveTeachingUnitDataFromUrl(mockUrl);
    const expectedTeachUnitData: ITeachingUnit =
      pagesData.portailDescartes.domainSection[0].teachingUnitsS1[1];

    expect(teachUnitData).toMatchObject(expectedTeachUnitData);
  });

  test("retrieveTeachingUnitDataFromUrl With Deeper Url", async () => {
    const mockUrl = "l2/informatique/domain/Web/S1/php";
    const teachUnitData = retrieveTeachingUnitDataFromUrl(mockUrl);
    const expectedTeachUnitData: ITeachingUnit =
      pagesData.l2.informatique.domainSection[0].teachingUnitsS1[0];

    expect(teachUnitData).toMatchObject(expectedTeachUnitData);
  });
});

describe("test parseTitleToUrl", () => {
  const titles = ["Outils Mathématique", "Languages Web", "Bénévole"];
  const expectTitles = ["outilsMathematique", "languagesWeb", "benevole"];

  test.each(titles)("Title %s are parse well", async (titleTest) => {
    const parseTitle = parseTitleToUrl(titleTest);
    const index = titles.indexOf(titleTest);
    expect(parseTitle).toEqual(expectTitles[index]);
  });
});
