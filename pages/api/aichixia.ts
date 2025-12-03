import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method !== "POST") {
      return res.status(405).json({
        success: false,
        error: "Method Not Allowed"
      });
    }

    const { message, history } = req.body;

    if (!message || typeof message !== "string") {
      return res.status(400).json({
        success: false,
        error: "Message is required and must be a string"
      });
    }

    const targetUrl = "https://aichixia.vercel.app/api/chat";

    const response = await fetch(targetUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({ message, history: history || [] }),
    });

    if (!response.ok) {
      return res.status(response.status).json({
        success: false,
        error: `External API error: ${response.statusText}`
      });
    }

    const data = await response.json();

    if (data.data && Array.isArray(data.data)) {
      return res.status(200).json({
        success: true,
        type: "anime",
        data: data.data.map((a: any) => ({
          id: a.id || a.mal_id || Math.random(),
          title: a.title?.romaji || a.title?.english || a.title || "Unknown Anime",
          coverImage: a.coverImage?.large || a.coverImage?.medium || a.image || "/default.png",
          score: a.averageScore || a.score || 0,
          popularity: a.popularity || 0,
          url: a.siteUrl || `https://anilist.co/anime/${a.id}` || "#",
        })),
      });
    }

    if (data.reply || typeof data === "string") {
      return res.status(200).json({
        success: true,
        type: "text",
        reply: data.reply || data || "I couldn't find an answer to that.",
      });
    }

    return res.status(200).json({
      success: false,
      error: "Unexpected response format from external API"
    });

  } catch (err: any) {
    console.error("Aichixia API error:", err);
    return res.status(500).json({
      success: false,
      error: "Internal Server Error",
      message: err.message || "An unexpected error occurred"
    });
  }
}
