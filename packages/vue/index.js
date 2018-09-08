module.exports = {
  "extends": [
    "@auritylab/eslint-config-default",
    "plugin:vue/recommended",
  ],
  "parserOptions": {
    "parser": "babel-eslint",
    "sourceType": "module",
    "allowImportExportEverywhere": false,
    "codeFrame": false
  },
  "overrides": [
    {
      "files": ["*.vue"],
      "rules": {
        "indent": "off",
        "vue/script-indent": ["error", 2, {
          "baseIndent": 1,
          "switchCase": 0,
          "ignores": []
        }],
        "vue/html-indent": ["error", 2, {
          "attribute": 2
        }],
        "vue/html-self-closing": ["error", {
          "html": {
            "void": "never",
            "normal": "any",
            "component": "always"
          }
        }]
      }
    }
  ]
}
