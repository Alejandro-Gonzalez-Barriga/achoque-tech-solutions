import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 1. Set the output mode to static export
  output: 'export',

  // 2. Define the subpath for your GitHub repository
  basePath: '/achoque-tech-solutions',

  // 3. (Optional) This ensures images and internal links use the base path
  assetPrefix: '/achoque-tech-solutions/',

  // 4. Disable image optimization since GitHub Pages is a static host
  images: {
    unoptimized: true,
  },
};

export default nextConfig;