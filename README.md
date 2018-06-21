
<div align="center">
    <img src="./logo.png" alt="logo">
</div>

# classname-concat
[![package version](https://img.shields.io/npm/v/classname-concat.svg?style=flat-square)](https://npmjs.org/package/classname-concat)
[![package downloads](https://img.shields.io/npm/dm/classname-concat.svg?style=flat-square)](https://npmjs.org/package/classname-concat)
[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)
[![package license](https://img.shields.io/npm/l/classname-concat.svg?style=flat-square)](https://npmjs.org/package/classname-concat)
[![make a pull request](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

> Flexible classname concatenating

## Table of Contents

- [Install](#install)
- [Usage](#usage)
- [Contribute](#contribute)
- [License](#License)

## Install

This project uses [node](https://nodejs.org) and [npm](https://www.npmjs.com). 

```sh
$ npm install classname-concat
$ # OR
$ yarn add classname-concat
```

## Usage

```js

import classNameConcat from 'classname-concat'

console.log(classNameConcat('foo', 'bar')) // foo bar
console.log(classNameConcat('foo', {bar: false})) // foo
console.log(classNameConcat('foo', {bar: false}, {baz: true})) // foo baz
console.log(classNameConcat('foo', {bar: false, nested: {ping: true}})) // foo ping
console.log(classNameConcat('foo', {bar: () => true, baz: {ping: true}})) // foo bar ping
console.log(classNameConcat(['foo', () => 'hello'])) // foo hello
console.log(classNameConcat(null, 'hello', undefined, 'friend')) // hello friend
```

## Contribute

1. Fork it and create your feature branch: git checkout -b my-new-feature
2. Commit your changes: git commit -am 'Add some feature'
3. Push to the branch: git push origin my-new-feature 
4. Submit a pull request

## License

MIT
    