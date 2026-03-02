import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/login",
        destination: "https://marcocostanza.it/login",
        permanent: false,
      },
      {
        source: "/dashboard",
        destination: "https://marcocostanza.it/login",
        permanent: false,
      },
      {
        source: "/dashboard/:path*",
        destination: "https://marcocostanza.it/login",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
