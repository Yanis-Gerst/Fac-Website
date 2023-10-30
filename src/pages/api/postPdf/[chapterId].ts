import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import { postPdf } from "../../../lib/db/amuData";
import formidable from "formidable";

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
      await handlePost(req, res);
      break;
    default:
      badResquest(res, "Do not handle this request Method");
  }
}

const handlePost: NextApiHandler = async (req, res) => {
  const { chapterId } = req.query;

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

export const notFoundResponse = (res: NextApiResponse) => {
  res.status(404);
  res.send("Error 404");
};

export const badResquest = (res: NextApiResponse, message = "Error 400") => {
  res.status(400);
  res.send(message);
};
