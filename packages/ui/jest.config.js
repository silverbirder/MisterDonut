/** @type {import('jest').Config} */
module.exports = {
  setupFiles: ["./setupFile.js"],
  transform: {
    "\\.[jt]sx?$": "babel-jest",
    ".+\\.(css)$": "jest-transform-stub",
  },
  testEnvironment: "jsdom",
};
