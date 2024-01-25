module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["google", "plugin:react/recommended"],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "linebreak-style": 0,
    quotes: [0, "double"],
    "react/react-in-jsx-scope": "off",
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    arraysInObjects: 0,
    "object-curly-spacing": [2, "always"],
    "max-len": ["error", { code: 700 }],
    "comma-dangle": ["error", { functions: "ignore" }],
    "no-unused-vars": 0,
    "react/prop-types": 0,
    "react/no-unescaped-entities": 0,
    indent: ["error", 2],
    "require-jsdoc": [
      "error",
      {
        require: {
          FunctionDeclaration: false,
          MethodDefinition: false,
          ClassDeclaration: false,
          ArrowFunctionExpression: false,
          FunctionExpression: false,
        },
      },
    ],
  },
};
