import { ObjectId } from "mongodb";

export interface IFeature {
  title: string;
  illustration: string;
  text: string;
  alt: string;
}

type IPublicationUnit = {
  title: string;
  descriptions: string;
  userName: string;
  yearOfPublication: number;
  data: Buffer;
  _id: ObjectId | string;
  chapterRef: ObjectId;
  type: string;
};

type IChapterUnit = {
  title: string;
  revisionsSheets: IPublicationUnit[];
  exercicesSheets: IPublicationUnit[];
  _id: string | ObjectId;
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

type ICursusPage = {
  title: string;
  domainSection: ITeachingDomain[];
};

type ICursusDocumenent = {
  title: string;
  options: (ICursusDocumenent | ICursusPage)[];
};
