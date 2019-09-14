module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ["@typescript-eslint"],
  extends: [
    'eslint-config-standard-with-typescript'
  ],
  rules: {
    '@typescript-eslint/explicit-function-return-type': ['error', { allowExpressions: true }],
    'brace-style': 'off',
    /*'@typescript-eslint/brace-style': ['error', 'allman', { allowSingleLine: false }]*/
  }
}
