# AurityLab Code Styles

A collection of ESLint configs for JavaScript, TypeScript and Vue. This configs mostly use [Standard](https://standardjs.com), but with some custom flavour on top.


## Usage

### JavaScript

#### Install
```bash
$ yarn add -D @auritylab/code-styles eslint-plugin-import eslint-plugin-node eslint-plugin-promise eslint-plugin-standard
```

#### ESLint config
```json
{
  "extends": [
    "@auritylab/eslint-config/rules/javascript"
  ]
}
```
