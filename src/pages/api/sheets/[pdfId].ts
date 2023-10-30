import { ObjectId } from "mongodb";
import { getCollection } from "../../../lib/db/amuData";
import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import { IPublicationUnit } from "../../../@types/global";
import { notFoundResponse, badResquest } from ".";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "GET":
      await handleGet(req, res);
      break;
    default:
      badResquest(res, "Do not handle this request Method");
  }
}

const handleGet: NextApiHandler = async (req, res) => {
  const { pdfId } = req.query;
  if (!pdfId) return badResquest(res);

  const pdfCollection = await getCollection<IPublicationUnit>("pdfSheets");
  const postObjectId = new ObjectId(pdfId as string);

  const pdfDocument = await pdfCollection.findOne({ _id: postObjectId });
  if (!pdfDocument) return notFoundResponse(res);

  res.setHeader("Content-Type", "application/pdf");
  res.setHeader(
    "Content-Disposition",
    `attachment; filename=${pdfDocument.title}.pdf`
  );

  res.status(200);
  res.send(Buffer.from(pdfDocument.data.toString("base64"), "base64"));
};
