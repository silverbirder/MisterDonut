const withTM = require("next-transpile-modules")([
  "@misterdonut/graphql-codegen",
  "@misterdonut/ui",
]);

/** @type {import('next').NextConfig} */
const nextConfig = withTM({
  reactStrictMode: true,
  images: {
    domains: ["img.pokemondb.net"],
  },
});

module.exports = nextConfig;
