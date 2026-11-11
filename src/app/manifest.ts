import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "KFGFoods — Wholesome Food, Happier You",
    short_name: "KFGFoods",
    description:
      "Kashmir's preventive food-tech enterprise. Formulating 100% Maida-free, sugar-free healthy bakery & nutrition with regional water chestnut and mountain millets.",
    start_url: "/",
    display: "standalone",
    background_color: "#071109",
    theme_color: "#1B5E20",
    orientation: "portrait",
    categories: ["food", "health", "lifestyle", "shopping"],
    icons: [
      {
        src: "/icon.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/logo.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/logo.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
