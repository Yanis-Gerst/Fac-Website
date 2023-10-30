import { NextApiRequest, NextApiResponse } from "next";
import { createMocks, createRequest, createResponse } from "node-mocks-http";
import handler from "../src/pages/api/sheets/[pdfId]";

type ApiRequest = NextApiRequest & ReturnType<typeof createRequest>;
type ApiResponse = NextApiResponse & ReturnType<typeof createResponse>;

describe("/api/[pdfId] Get Method", () => {
  const createGetMocks = (pdfId: string) => {
    const { req, res } = createMocks<ApiRequest, ApiResponse>({
      method: "GET",
      query: {
        pdfId: pdfId,
      },
    });

    return { req, res };
  };

  it("Get a Pdf", async () => {
    const { req, res } = createGetMocks("6426863c67204d006596b807");

    await handler(req, res);

    expect(res._getHeaders()["content-type"]).toBe("application/pdf");
    expect(res._getStatusCode()).toBe(200);
    expect(res._getData().byteLength).toBeGreaterThan(0);
  });

  it("Get not Found when sent a wrong id", async () => {
    const { req, res } = createGetMocks("6426863c67204d006596b234");

    await handler(req, res);

    expect(res._getStatusCode()).toBe(404);
  });

  it("Get 400 status Code when send bad Request", async () => {
    const { req, res } = createGetMocks("");

    await handler(req, res);

    expect(res._getStatusCode()).toBe(400);
  });
});
