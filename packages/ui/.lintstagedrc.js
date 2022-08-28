module.exports = {
  "package.json": ["prettier-package-json --write"],
  "*.@(ts|tsx)": ["tsc-files --incremental false"],
};
