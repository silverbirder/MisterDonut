module.exports = {
  "package.json": ["prettier-package-json --write"],
  "*.@(ts|tsx)": ["tsc-files --incremental false"],
  // "*.@(js|ts|tsx)": ["prettier --write", "eslint --cache --fix"],
};
