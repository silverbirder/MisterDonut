module.exports = {
  "package.json": ["prettier-package-json --write"],
  "*.@(ts|tsx)": ["tsc-files"],
  "*.@(js|ts|tsx)": ["prettier --write", "eslint --cache --fix"],
};
