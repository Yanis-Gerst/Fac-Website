import { ICursusDocumenent, ICursusPage } from "../../@types/global";
import { parseTitleToUrl } from "../../utils/stringMethods";
import { getAllCursus, getCursusDocumentByTitle } from "../db/amuData";

export const retreiveCursusDataFromUrl = async (url: string) => {
  const documentKeys = url.split("/");
  const documentTitle = documentKeys[0];
  const cursusDocument = await getCursusDocumentByTitle(documentTitle);
  if (!cursusDocument)
    throw new Error(`${documentTitle} doest not match any document in DB`);

  const cursusPage = retriveCursusPage(cursusDocument, documentKeys.slice(1));

  return cursusPage;
};

const retriveCursusPage = (
  cursusDoc: ICursusDocumenent | ICursusPage,
  cursusKey: string[]
): ICursusPage => {
  if (cursusKey.length == 0) return cursusDoc as ICursusPage;

  for (const cursusOptions of (cursusDoc as ICursusDocumenent).options) {
    if (parseTitleToUrl(cursusOptions.title) == cursusKey[0]) {
      return retriveCursusPage(cursusOptions, cursusKey.slice(1));
    }
  }

  throw new Error(`Url with ${cursusKey} is not defined`);
};
export const getAllCursusUrl = async (): Promise<string[]> => {
  const allCursus = await getAllCursus();

  return allCursus.flatMap((cursusDoc) => getCursusUrlsOf(cursusDoc));
};

export const getCursusUrlsOf = (
  cursusDocument: ICursusDocumenent,
  optionnalContext = ""
): string[] => {
  const context = optionnalContext
    ? `${optionnalContext}/${cursusDocument.title}`
    : cursusDocument.title;

  return cursusDocument.options.flatMap(
    (option: ICursusDocumenent | ICursusPage) => {
      if ("domainSection" in option) {
        return `${context}/${parseTitleToUrl(option.title)}`;
      }

      return getCursusUrlsOf(option as ICursusDocumenent, context);
    }
  );
};
