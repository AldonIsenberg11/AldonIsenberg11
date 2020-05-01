module.exports = {
  root: true,
  extends: "eslint:recommended",
  parserOptions: {
    "ecmaVersion": 8
  },
  rules: {
    "semi"                    : ["error", "never"],
    "indent"                  : ["error", 2, {"SwitchCase":1, "VariableDeclarator": { "var": 2, "let": 2, "const": 3}}],
    "linebreak-style"         : ["error", "unix"],
    "eqeqeq"                  : ["error", "smart"],
    "quotes"                  : ["error", "double"],
    "curly"                   : ["error", "multi-line"],
    "brace-style"             : ["error", "1tbs", {"allowSingleLine": true}],
    "camelcase"               : "error",
    "no-trailing-spaces"      : "error",
    "no-mixed-spaces-and-tabs": "error",
    "no-tabs"                 : "error",
    "no-console"              : "off",
    "no-unused-vars"          : ["error", {"vars": "all", "args": "none"}]
  },
  env: {
    "es6": true,
    "browser": true,
    "node": true,
    "mocha": true
  },
  ecmaFeatures: {},
  plugins: []
}
