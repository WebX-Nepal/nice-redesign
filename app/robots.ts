import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin", "/api"],
      },
      {
        userAgent: ["Bravebot",
            "GPTBot",
          "ChatGPT-User",
          "Claude-Web",
        ],
        allow:"/",
      },
      {
        userAgent: [
          "AhrefsBot",
          "SemrushBot",
          "MJ12bot",
          "DotBot",
          "BLEXBot",
          "PetalBot",
          "SeznamBot",
          "Serpstatbot",
          "SeekportBot",
          "DataForSeoBot",
          "CCBot",
          "anthropic-ai",
        ],
        disallow: "/",
      },
    ],

    sitemap: "https://nicerecruitment.org/sitemap.xml",
  };
}