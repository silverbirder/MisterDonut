const withTM = require("next-transpile-modules")([
  "@misterdonut/graphql",
  "@misterdonut/ui",
]);

/** @type {import('next').NextConfig} */
const config = {
  compiler: {
    reactRemoveProperties: process.env.NODE_ENV === "production",
  },
  reactStrictMode: true,
  output: "standalone",
  images: {
    domains: ["www.misterdonut.jp"],
  },
};

module.exports = withTM(config);
