module.exports = {
  extends: ["eslint:recommended"],
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: "module",
  },
  env: {
    browser: true,
    node: true,
  },
  globals: {
    Konva: "readonly"
  }
};
