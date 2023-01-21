export interface IFeature {
  title: string;
  illustration: string;
  text: string;
  alt: string;
}

type publicationUnit = {
  title: string;
  descriptions: string;
  userName: string;
  like: number;
  yearOfPublication: number;
  pdfUrl: string;
};
type IChapterUnit = {
  title: string;
  revionSheets: publicationUnit[];
  exercicesSheets: publicationUnit[];
};
type ITeachingUnit = {
  title: string;
  chapters: IChapterUnit[];
};
type ITeachingDomain = {
  title: string;
  teachingUnitsS1: ITeachingUnit[];
  teachingUnitsS2: ITeachingUnit[];
};

type ICursus = {
  title: string;
  domainSection: ITeachingDomain[];
};

type IPageDbJson = {
  [key: string]: ICursus | IPageDbJson;
};
