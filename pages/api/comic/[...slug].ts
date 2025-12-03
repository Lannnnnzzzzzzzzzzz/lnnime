import type { NextApiRequest, NextApiResponse } from "next";

const BASE_URL = "https://www.sankavollerei.com";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { slug } = req.query;

  if (!slug || !Array.isArray(slug)) {
    return res.status(400).json({ error: "Invalid endpoint" });
  }

  const endpoint = slug.join("/");
  const queryParams = new URLSearchParams(req.query as Record<string, string>);
  const queryString = queryParams.toString();

  const url = `${BASE_URL}/comic/${endpoint}${queryString ? `?${queryString}` : ""}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      return res.status(response.status).json({
        error: "Failed to fetch from Comic API",
      });
    }

    const data = await response.json();
    return res.status(200).json(data);
  } catch (error: any) {
    console.error("Comic API error:", error);
    return res.status(500).json({
      error: "Internal server error",
      message: error.message,
    });
  }
}
