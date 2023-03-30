import { ObjectId } from "mongodb";
import { getCollection, postPdf } from "../../../lib/db/amuData";
import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import formidable from "formidable";
import { IPublicationUnit } from "../../../@types/global";

export const config = {
  api: {
    bodyParser: false,
  },
};
type IParseRequest = {
  fields: formidable.Fields;
  files: formidable.Files;
};

const parseRequest = (req: NextApiRequest): Promise<IParseRequest> => {
  const form = formidable({ multiples: false });
  return new Promise((resolve, reject) => {
    form.parse(req, (err, fields, files) => {
      if (err) reject(err);
      resolve({ fields, files });
    });
  });
};

export default async function hanlder(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "POST":
      handlePost(req, res);
      break;
    case "GET":
      handleGet(req, res);
      break;
    default:
      res.status(400);
      res.send("Do not handle this request Method");
  }
}

const handlePost: NextApiHandler = async (req, res) => {
  const { pdfId: chapterId } = req.query;

  const parsedRequest = await parseRequest(req);
  if (!metaDataIsDefined(parsedRequest)) return badResquest(res);

  await postPdf(chapterId as string, parsedRequest);
  res.status(200);
  res.send("File is uploaded");
};

const metaDataIsDefined = (parseRequest: IParseRequest) => {
  const { title, descriptions, userName } = parseRequest.fields as {
    [key: string]: string;
  };
  return title && descriptions && userName;
};

const handleGet: NextApiHandler = async (req, res) => {
  const { pdfId } = req.query;
  if (!pdfId) return notFoundResponse(res);

  const pdfCollection = await getCollection<IPublicationUnit>("pdfSheets");
  const postObjectId = new ObjectId(pdfId as string);

  const pdfDocument = await pdfCollection.findOne({ _id: postObjectId });
  if (!pdfDocument) return notFoundResponse(res);

  res.setHeader("Content-Type", "application/pdf");
  res.setHeader(
    "Content-Disposition",
    `attachment; filename=${pdfDocument.title}.pdf`
  );

  res.send(Buffer.from(pdfDocument.data.toString("base64"), "base64"));
  res.end();
};

const notFoundResponse = (res: NextApiResponse) => {
  res.status(404);
  res.end();
};

const badResquest = (res: NextApiResponse) => {
  res.status(400);
  res.send("Error 400");
  res.end();
};
