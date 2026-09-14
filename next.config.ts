import type { NextConfig } from "next";
 module.exports = { 
  output: 'export', images: { unoptimized: true }, 
  basePath: '/Apuntes', 
}

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
};

export default nextConfig;
