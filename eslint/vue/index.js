module.exports = {
  "extends": [
    "plugin:vue/recommended",
  ],
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
