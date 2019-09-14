module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint-config-standard-with-typescript'
  ],
  rules: {
    '@typescript-eslint/explicit-function-return-type': ['error', { allowExpressions: true }],
    curly: ['error', 'multi', 'consistent']
  }
}
