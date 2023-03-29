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
  _id: ObjectId;
  chapterRef: ObjectId;
};

type IChapterUnit = {
  title: string;
  revisionSheets: ObjectId[];
  exercicesSheets: ObjectId[];
  _id: ObjectId;
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
