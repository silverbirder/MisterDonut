module.exports = {
  default: {
    require: ["features/**/*.ts"],
    requireModule: ["ts-node/register"],
    paths: ["../../apps/docs/**/*.feature.md"],
    publishQuiet: true,
    language: "ja",
  },
};
