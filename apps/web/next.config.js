const withTM = require("next-transpile-modules")([
  "@misterdonut/graphql-codegen",
  "@misterdonut/ui",
]);

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  output: "standalone",
  images: {
    domains: ["www.misterdonut.jp"],
  },
};

module.exports = withTM(config);
