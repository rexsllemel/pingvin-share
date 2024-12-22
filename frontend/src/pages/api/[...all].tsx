import { NextApiRequest, NextApiResponse } from "next";
import httpProxyMiddleware from "next-http-proxy-middleware";

export const config = {
  api: {
    bodyParser: false,
    externalResolver: true,
  },
};

const apiURL = process.env.API_URL || "https://zw84wkssos8woss80wcs8wsc.faithcloud.net";

// A proxy to the API server only used in development.
// In production this route gets overridden by Caddy.
export default (req: NextApiRequest, res: NextApiResponse) => {
  httpProxyMiddleware(req, res, {
    headers: {
      "X-Forwarded-For": req.socket?.remoteAddress ?? "",
    },
    target: apiURL,
  });
};
