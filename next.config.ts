import type { NextConfig } from "next";

// Set by the GitHub Actions configure-pages step.
// Empty when running locally or on a custom domain.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  basePath,
  assetPrefix: basePath,
};

export default nextConfig;
