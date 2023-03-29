import clientPromise from "./mangoDb";
import {
  IChapterUnit,
  ICursusDocumenent,
  ICursusPage,
  IPublicationUnit,
} from "../../@types/global";
import { IFormOptions } from "../../componenents/Form/Form";
import { parseTitleToUrl } from "../../utils/stringMethods";
import { ObjectId } from "mongodb";
import fs from "fs";
import formidable from "formidable";

const dbName = "Amu";
const mainCollectionName = "TempDb";

type WithTitle = {
  title: string;
};

export const getCursusDocumentByTitle = async (title: string) => {
  const cursusCollection = await getCollection<ICursusDocumenent>(
    mainCollectionName
  );

  const cursusDocument = await cursusCollection.findOne({ title });
  return cursusDocument;
};

export const getCollection = async <collectionType extends object>(
  collection: string
) => {
  const client = await clientPromise;
  const amuDb = client.db(dbName);
  return amuDb.collection<collectionType>(collection);
};

export const getAllCursus = async () => {
  const cursusCollection = await getCollection<ICursusDocumenent>(
    mainCollectionName
  );
  const allCursus = await cursusCollection.find().sort({ title: 1 }).toArray();
  return allCursus;
};

export const createInitFormOptions = (
  currentData: (ICursusDocumenent | ICursusPage)[]
) => {
  const formOptions: IFormOptions[] = currentData.map((cursus) => {
    if ("options" in cursus) {
      return {
        label: cursus.title,
        next: createInitFormOptions(cursus.options),
      };
    }

    return {
      label: cursus.title,
      next: [],
    };
  });

  return formOptions;
};

export const retrieveAmuDataFromUrl = async (url: string) => {
  const documentTitles = url.split("/");
  const documentTitle = documentTitles.shift() as string;
  let cursusDocument: any = await getCursusDocumentByTitle(documentTitle);
  if (!cursusDocument) return;
  const subDocument = ["options", "domainSection", "teachingUnitsS1"];

  while (documentTitles.length > 0) {
    const subDocumentKey = subDocument.shift();
    if (!subDocumentKey) throw new Error(`Url ${url} not defined document`);

    if (subDocumentKey in cursusDocument && subDocument.length > 0) {
      cursusDocument = getByTitleOnArray(
        cursusDocument[subDocumentKey],
        documentTitles.shift() as string
      )[0];
    } else if (subDocumentKey in cursusDocument) {
      const semesterNumber = (documentTitles.shift() as string)[1];
      cursusDocument = cursusDocument[`teachingUnitsS${semesterNumber}`];

      if (documentTitles.length > 0) {
        cursusDocument = getByTitleOnArray(
          cursusDocument,
          documentTitles.shift() as string
        )[0];
      }
    }
  }

  return cursusDocument;
};

const getByTitleOnArray = (arr: WithTitle[], titleToFind: string) => {
  return arr.filter((elt) => parseTitleToUrl(elt.title) === titleToFind);
};

export const retrieveAllChapters = async (chaptersId: string[]) => {
  const chapterCollection = await getCollection<IChapterUnit>("Chapter");

  const orQuery = chaptersId.map((id) => ({
    _id: new ObjectId(id),
  }));

  return chapterCollection.aggregate([
    {
      $lookup: {
        from: "pdfSheets",
        localField: "_id",
        foreignField: "chapterRef",
        as: "revisionSheets",
      },
    },
    {
      $match: {
        $or: orQuery,
      },
    },
    {
      $project: {
        "revisionSheets.chapterRef": 0,
        "revisionSheets.data": 0,
        "exercicesSheets.chapterRef": 0,
        "exercicesSheets.data": 0,
      },
    },
  ]);
};

type IParseRequest = {
  fields: formidable.Fields;
  files: formidable.Files;
};

export const postPdf = async (
  chapterId: string,
  parsedRequest: IParseRequest
) => {
  const chapterCollection = await getCollection<IChapterUnit>("Chapter");
  const pdfCollection = await getCollection<IPublicationUnit>("pdfSheets");
  const testId = new ObjectId();
  const content = fs.readFileSync(
    (parsedRequest.files.file as formidable.File).filepath
  );
  const { title, descriptions, userName } = parsedRequest.fields as {
    [key: string]: string;
  };

  chapterCollection.updateOne(
    {
      _id: new ObjectId(chapterId),
    },
    {
      $push: { revisionSheets: testId },
    }
  );

  pdfCollection.insertOne({
    _id: testId,
    title,
    descriptions,
    data: content,
    userName,
    yearOfPublication: 2023,
    chapterRef: new ObjectId(chapterId),
  });
};
