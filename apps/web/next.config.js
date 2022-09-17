const withTM = require("next-transpile-modules")([
  "@misterdonut/graphql-codegen",
  "@misterdonut/ui",
]);

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  output: "standalone",
};

module.exports = withTM(config);
