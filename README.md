# AurityLab Code Styles
![build](https://action-badges.now.sh/AurityLab/code-styles)
[![npm](https://img.shields.io/npm/v/@auritylab/eslint-config.svg)](https://www.npmjs.com/package/@auritylab/eslint-config)

A collection of ESLint configs for JavaScript, TypeScript and Vue. This configs mostly use [Standard](https://standardjs.com), but with some custom flavour on top.

As each config requires different plugins and parsers they are listed as *optionalDependencies*. 

## Available configs
* [JavaScript](#javascript)
* [TypeScript](#typescript)
* [Vue (with JavaScript and TypeScript)](#vue)

## JavaScript
This config currently fully inherits from [eslint-config-stanard](https://github.com/standard/eslint-config-standard).

### Install
```bash
$ yarn add -D @auritylab/eslint-config eslint-plugin-import eslint-plugin-node eslint-plugin-promise eslint-plugin-standard
```

### ESLint config
```json
{
  "extends": [
    "@auritylab/eslint-config/rules/javascript"
  ]
}
```

## TypeScript
This config currently fully inherits from [eslint-config-standard-with-typescript](https://github.com/mightyiam/eslint-config-standard-with-typescript).

### Install
```bash
$ yarn add -D @auritylab/eslint-config @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-plugin-import eslint-plugin-node eslint-plugin-promise eslint-plugin-standard
```

#### ESLint config
```json
{
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "project": "./tsconfig.json"
  },
  "extends": [
    "@auritylab/eslint-config/rules/typescript"
  ]
}
```


## Vue
This config inherits from [eslint-plugin-vue/recommended](https://github.com/vuejs/eslint-plugin-vue) with some flavour on top.
This config can be used in conjunction with [JavaScript](#javascript) or [TypeScript](#typescript).

### Install
```bash
$ yarn add -D @auritylab/eslint-config eslint-plugin-vue
```


### ESLint config
```json
{
  "parser": "vue-eslint-parser",
  "extends": [
    "@auritylab/eslint-config/rules/vue"
  ]
}
```

### ESLint config with TypeScript
This requires the [TypeScript config](#typescript) to be installed!
```json
{
  "parser": "vue-eslint-parser",
  "parserOptions": {
    "parser": "@typescript-eslint/parser"
  },
  "extends": [
    "@auritylab/eslint-config/rules/vue",
    "@auritylab/eslint-config/rules/typescript"
  ]
}
```
