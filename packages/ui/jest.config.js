/** @type {import('jest').Config} */
module.exports = {
  setupFiles: ["./setupFile.js"],
  transform: {
    "\\.[jt]sx?$": "babel-jest",
  },
  testEnvironment: "jsdom",
};
