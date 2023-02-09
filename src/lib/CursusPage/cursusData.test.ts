import mockPageObject from "../../../__mocks__/mockPageObject";
import { retreiveCursusDataFromUrl, getAllCursusUrl } from "./cursusData";

const mockPageData: any = mockPageObject;

jest.mock("../../AmuData/pageObject", () => {
  const mockPageObject = jest.requireActual(
    "../../../__mocks__/mockPageObject"
  );
  return mockPageObject;
});

describe("we get all cursusUrl of pagesData", () => {
  const getSubBacisTopicsFor = (path: string) => {
    const basicTopics = [
      "informatique",
      // "mathematique",
      // "mecanique",
      // "physique",
    ];
    return basicTopics.map((topic) => `${path}/${topic}`);
  };

  test("It work", async () => {
    const cursusUrls = getAllCursusUrl();
    const expectedCursusUrls = [
      "portailDescartes",
      ...getSubBacisTopicsFor("l2"),
    ];

    expectedCursusUrls.forEach((url) => expect(cursusUrls).toContain(url));
  });
});

describe("retreiveCursusData work with correct url", () => {
  const mockUrl = ["portailDescartes", "l2/informatique"];
  const expectedData = [
    mockPageData.portailDescartes,
    mockPageData.l2.informatique,
  ];

  test.each(mockUrl)("%s get right data", async (url) => {
    const index = mockUrl.indexOf(url);
    const cursusData = retreiveCursusDataFromUrl(url);
    expect(cursusData).toMatchObject(expectedData[index]);
  });
});
