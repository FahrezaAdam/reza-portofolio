import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/CV_Fahreza_Adam_Nuardiansyah.pdf",
        headers: [
          {
            key: "Content-Disposition",
            value: 'attachment; filename="CV_Fahreza_Adam_Nuardiansyah.pdf"',
          },
          { key: "Cache-Control", value: "public, max-age=86400" },
        ],
      },
    ];
  },
};

export default nextConfig;
