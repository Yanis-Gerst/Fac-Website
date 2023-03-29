import clientPromise from "./db/mangoDb";
import fs from "fs";
import { ObjectId } from "mongodb";

export const insertPdf = async () => {
  const pdf = fs.readFileSync("./public/assets/placeholder.pdf");
  console.log(pdf, "le");

  const client = await clientPromise;
  const pdfCollection = client.db("Amu").collection("pdfSheets");
  const result = await pdfCollection.insertOne({
    ref: "placholder",
    buffer: pdf,
  });
  console.log(result, "wlh");
};

export const readThePdf = async () => {
  const client = await clientPromise;
  const pdfCollection = client.db("Amu").collection("pdfSheets");
  const pdfBinary = await pdfCollection.findOne({
    _id: new ObjectId("63f9cdec9bdb592090c73d57"),
  });
  if (!pdfBinary) return;
  return pdfBinary.buffer as Buffer;
};
