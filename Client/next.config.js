/** @type {import('next').NextConfig} */

const path = require("path");
const DuplicatePackageCheckerPlugin = require("duplicate-package-checker-webpack-plugin");

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

// ========================================================================================================

module.exports = withBundleAnalyzer({
  reactStrictMode: true,
  swcMinify: true,
  experimental: { appDir: false },

  productionBrowserSourceMaps: process.env.ANALYZE ? true : false,

  // Removed duplicate librairies
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    if (process.env.NODE_ENV === "production") {
      config.plugins.push(new DuplicatePackageCheckerPlugin());
    }

    config.resolve.alias["@babel/runtime"] = path.resolve(__dirname, "node_modules", "@babel/runtime");

    config.resolve.alias["@emotion/cache"] = path.resolve(__dirname, "node_modules", "@emotion/cache");

    return config;
  },

  poweredByHeader: false,

  images: {
    domains: ["media.graphassets.com"],
  },
});
