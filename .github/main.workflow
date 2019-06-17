workflow "Lint" {
  resolves = ["Run ESLint"]
  on = "push"
}

action "Run ESLint" {
  uses = "stefanoeb/eslint-action@master"
  args = "index.js rules/**/*"
}
