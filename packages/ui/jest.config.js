/** @type {import('jest').Config} */
module.exports = {
  moduleNameMapper: {
    "^@ui/(.*)": "<rootDir>/src/$1",
  },
  setupFiles: ["./setupFile.js"],
  transform: {
    "\\.[jt]sx?$": "babel-jest",
    ".+\\.(css)$": "jest-transform-stub",
  },
  testEnvironment: "jsdom",
};
