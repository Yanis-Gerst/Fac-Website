import { retreiveDataPageFromUrl, getAllCursusUrl } from "./cursusData";
import pageDbJson from "../../AmuData/pageObject";

test("we get all cursusUrl of pagesData", async () => {
  const getSubBacisTopicsFor = (path: string) => {
    const basicTopics = [
      "informatique",
      "mathematique",
      "mecanique",
      "physique",
    ];
    return basicTopics.map((topic) => `${path}/${topic}`);
  };
  const cursusUrls = getAllCursusUrl();

  const expectedCursusUrls = [
    "portailDescartes",
    ...getSubBacisTopicsFor("l2"),
    ...getSubBacisTopicsFor("l3"),
  ];

  expectedCursusUrls.forEach((url) => expect(cursusUrls).toContain(url));
});
