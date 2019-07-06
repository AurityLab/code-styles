module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint-config-standard-with-typescript'
  ],
  rules: {
    '@typescript-eslint/explicit-function-return-type': ['error', { allowExpressions: true }]
  }
}
